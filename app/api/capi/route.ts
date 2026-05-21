import { createHash } from "crypto";
import { NextRequest, NextResponse } from "next/server";

const TOKEN = process.env.META_CAPI_TOKEN;
const PIXEL_ID = process.env.META_PIXEL_ID;

function sha256(value: string): string {
  return createHash("sha256").update(value.toLowerCase().trim()).digest("hex");
}

function buildFbc(fbclid: string, firstSeenMs?: number): string {
  const ts = firstSeenMs ?? Date.now();
  return `fb.1.${ts}.${fbclid}`;
}

export interface CAPIEventPayload {
  event_name: "Lead" | "Purchase" | "CompleteRegistration" | "Schedule";
  event_id: string;
  event_source_url?: string;
  user_data: {
    email?: string;
    phone?: string;
    fbp?: string;
    fbclid?: string;
    first_seen_ms?: number;
    client_ip?: string;
    user_agent?: string;
  };
  custom_data?: {
    currency?: string;
    value?: number;
    content_name?: string;
  };
}

export async function POST(req: NextRequest) {
  if (!TOKEN || !PIXEL_ID) {
    return NextResponse.json({ skipped: true, reason: "CAPI not configured" }, { status: 200 });
  }

  const body: CAPIEventPayload = await req.json();

  // Build user_data — hash all PII
  const userData: Record<string, string | string[]> = {};

  if (body.user_data.email) userData.em = [sha256(body.user_data.email)];

  if (body.user_data.phone) {
    // Normalize to digits only, add country code if missing
    const digits = body.user_data.phone.replace(/\D/g, "");
    const normalized = digits.startsWith("55") ? digits : `55${digits}`;
    userData.ph = [sha256(normalized)];
  }

  if (body.user_data.fbp) userData.fbp = body.user_data.fbp;

  if (body.user_data.fbclid) {
    userData.fbc = buildFbc(body.user_data.fbclid, body.user_data.first_seen_ms);
  }

  // Use forwarded IP from Vercel/proxy headers
  const clientIp =
    req.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
    body.user_data.client_ip ||
    "";
  if (clientIp) userData.client_ip_address = clientIp;

  const userAgent =
    req.headers.get("user-agent") || body.user_data.user_agent || "";
  if (userAgent) userData.client_user_agent = userAgent;

  const event: Record<string, unknown> = {
    event_name: body.event_name,
    event_time: Math.floor(Date.now() / 1000),
    event_id: body.event_id,
    action_source: "website",
    user_data: userData,
  };

  if (body.event_source_url) event.event_source_url = body.event_source_url;
  if (body.custom_data) event.custom_data = body.custom_data;

  try {
    const res = await fetch(
      `https://graph.facebook.com/v21.0/${PIXEL_ID}/events`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          data: [event],
          access_token: TOKEN,
        }),
      }
    );

    const data = await res.json();

    if (!res.ok) {
      console.error("Meta CAPI error:", data);
      return NextResponse.json({ error: data }, { status: 500 });
    }

    return NextResponse.json({ ok: true, result: data });
  } catch (err) {
    console.error("Meta CAPI fetch failed:", err);
    return NextResponse.json({ error: "fetch_failed" }, { status: 500 });
  }
}

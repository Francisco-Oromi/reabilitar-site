const TRACKING_KEY = "rw_tracking";

export interface TrackingData {
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
  utm_term: string;
  utm_content: string;
  gclid: string;
  fbclid: string;
  msclkid: string;
  landing_page: string;
  referrer: string;
  first_seen: string;
}

export function captureFromUrl(url: string): void {
  if (typeof window === "undefined") return;

  const params = new URL(url).searchParams;
  const existing = readTracking();

  // UTMs and click IDs — only update if present (first touch wins for gclid/fbclid)
  const next: TrackingData = {
    utm_source: params.get("utm_source") || existing.utm_source,
    utm_medium: params.get("utm_medium") || existing.utm_medium,
    utm_campaign: params.get("utm_campaign") || existing.utm_campaign,
    utm_term: params.get("utm_term") || existing.utm_term,
    utm_content: params.get("utm_content") || existing.utm_content,
    gclid: params.get("gclid") || existing.gclid,
    fbclid: params.get("fbclid") || existing.fbclid,
    msclkid: params.get("msclkid") || existing.msclkid,
    landing_page: existing.landing_page || url,
    referrer: existing.referrer || document.referrer,
    first_seen: existing.first_seen || new Date().toISOString(),
  };

  sessionStorage.setItem(TRACKING_KEY, JSON.stringify(next));
}

export function readTracking(): TrackingData {
  if (typeof window === "undefined") return emptyTracking();
  try {
    const raw = sessionStorage.getItem(TRACKING_KEY);
    return raw ? { ...emptyTracking(), ...JSON.parse(raw) } : emptyTracking();
  } catch {
    return emptyTracking();
  }
}

function emptyTracking(): TrackingData {
  return {
    utm_source: "",
    utm_medium: "",
    utm_campaign: "",
    utm_term: "",
    utm_content: "",
    gclid: "",
    fbclid: "",
    msclkid: "",
    landing_page: "",
    referrer: "",
    first_seen: "",
  };
}

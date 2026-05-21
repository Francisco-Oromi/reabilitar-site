"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { captureFromUrl } from "@/lib/tracking";

export default function TrackingCapture() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    captureFromUrl(window.location.href);
  }, [pathname, searchParams]);

  return null;
}

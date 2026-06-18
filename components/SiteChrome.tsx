"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileCtaBar from "@/components/MobileCtaBar";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isDashboard = pathname.startsWith("/dashboard");

  if (isDashboard) {
    return <div className="flex-1">{children}</div>;
  }

  return (
    <>
      <Header />
      <main className="flex-1 pt-[88px] pb-[64px] md:pb-0">{children}</main>
      <Footer />
      <MobileCtaBar />
      <WhatsAppFloat />
    </>
  );
}

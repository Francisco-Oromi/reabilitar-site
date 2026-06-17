import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { LeadFormProvider } from "@/components/LeadFormModal";
import SiteChrome from "@/components/SiteChrome";
import { Suspense } from "react";
import TrackingCapture from "@/components/TrackingCapture";
import MetaPixel from "@/components/MetaPixel";

const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Reabilitar Wellness | Fisioterapia em Juiz de Fora",
    template: "%s | Reabilitar Wellness",
  },
  description:
    "Clínica de fisioterapia em Juiz de Fora com mais de 15 anos de experiência. Pilates, Osteopatia, RPG, Quiropraxia, Liberação Miofascial e Saúde da Mulher. Avaliação gratuita!",
  keywords: [
    "fisioterapia juiz de fora",
    "pilates juiz de fora",
    "osteopatia juiz de fora",
    "quiropraxia juiz de fora",
    "fisioterapeuta jf",
    "reabilitar wellness",
    "rpg fisioterapia",
    "liberação miofascial",
    "saúde da mulher fisioterapia",
  ],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Reabilitar Wellness",
    url: "https://www.reabilitarsaude.com",
    title: "Reabilitar Wellness | Fisioterapia em Juiz de Fora",
    description:
      "Clínica de fisioterapia em Juiz de Fora com mais de 15 anos de experiência. Avaliação gratuita!",
  },
  twitter: {
    card: "summary_large_image",
    title: "Reabilitar Wellness | Fisioterapia em Juiz de Fora",
    description: "Clínica de fisioterapia em Juiz de Fora. Avaliação gratuita!",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalOrganization",
  name: "Reabilitar Wellness",
  url: "https://www.reabilitarsaude.com",
  logo: "https://www.reabilitarsaude.com/logo.png",
  telephone: "+553232140522",
  email: "andre@reabilitarsaude.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Rua Batista de Oliveira, 1035",
    addressLocality: "Juiz de Fora",
    addressRegion: "MG",
    postalCode: "36010-540",
    addressCountry: "BR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -21.7701,
    longitude: -43.3503,
  },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday"], opens: "07:00", closes: "20:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Friday"], opens: "07:00", closes: "19:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Saturday"], opens: "08:00", closes: "12:00" },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: "247",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${fraunces.variable} ${inter.variable}`}>
      <head>
        {/* Google Tag Manager */}
        <script dangerouslySetInnerHTML={{ __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-KF4528K2');` }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased">
        {/* Google Tag Manager (noscript) */}
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KF4528K2" height="0" width="0" style={{display:"none",visibility:"hidden"}} /></noscript>
        <LeadFormProvider>
          <Suspense fallback={null}>
            <TrackingCapture />
            <MetaPixel />
          </Suspense>
          <SiteChrome>{children}</SiteChrome>
        </LeadFormProvider>
      </body>
    </html>
  );
}

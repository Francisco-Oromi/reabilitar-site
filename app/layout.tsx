import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
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
    ratingValue: "4.9",
    reviewCount: "500",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${poppins.variable} ${inter.variable}`}>
      <head>
        {/* Google Tag Manager — substitua GTM-XXXXXXX pelo seu ID */}
        {/* <script dangerouslySetInnerHTML={{ __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-XXXXXXX');` }} /> */}
        {/* Facebook Pixel — substitua 0000000000000 pelo seu ID */}
        {/* <script dangerouslySetInnerHTML={{ __html: `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','0000000000000');fbq('track','PageView');` }} /> */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased">
        {/* GTM noscript — substitua GTM-XXXXXXX */}
        {/* <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX" height="0" width="0" style={{display:"none",visibility:"hidden"}} /></noscript> */}
        <Header />
        <main className="flex-1 pt-[88px]">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}

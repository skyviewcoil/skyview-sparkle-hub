import type { Metadata } from "next";
import { SITE_URL, SITE_NAME } from "@/lib/site-config";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { StickyMobileCTA } from "@/components/sticky-mobile-cta";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "תקרות מתוחות לבית ולעסק | SkyView",
    template: "%s | SkyView",
  },
  description:
    "SkyView — יבוא, ייצור והתקנת תקרות מתוחות בישראל. גימורי מט, מבריק וסאטן, תאורה משולבת ומחשבון מחיר אונליין.",
  openGraph: {
    type: "website",
    locale: "he_IL",
    siteName: SITE_NAME,
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  description:
    "תכנון, ייצור והתקנה של תקרות מתוחות לחללים פרטיים ומסחריים בישראל.",
  telephone: "+972-52-808-2988",
  email: "skyview.co.il@gmail.com",
  areaServed: { "@type": "Country", name: "Israel" },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "SkyView — תקרות מתוחות",
  description:
    "תכנון, ייצור והתקנה של תקרות מתוחות לבתים ועסקים בישראל.",
  url: SITE_URL,
  telephone: "+972-52-808-2988",
  email: "skyview.co.il@gmail.com",
  priceRange: "₪₪",
  areaServed: { "@type": "Country", name: "Israel" },
  serviceType: "התקנת תקרות מתוחות",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="he" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Heebo:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </head>
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        <StickyMobileCTA />
      </body>
    </html>
  );
}

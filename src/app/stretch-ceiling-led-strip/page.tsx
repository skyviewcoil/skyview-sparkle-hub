import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { PageHero } from "@/components/page-hero";
import { CTASection } from "@/components/cta-section";
import { ContentSection, FeatureGrid } from "@/components/content-blocks";

export const metadata: Metadata = {
  title: "תקרה מתוחה עם פס LED — קווי אור מרחפים",
  description:
    "פסי LED נסתרים בתוך תקרה מתוחה יוצרים קווי אור מרחפים (פסים מרחפים). אפקט ייחודי של תאורה צפה שמגדיר את החלל.",
  alternates: { canonical: "/stretch-ceiling-led-strip" },
};

export default function LEDStripPage() {
  return (
    <>
      <PageHero
        title="תקרה מתוחה עם פס LED — פסים מרחפים"
        subtitle="פסי LED שקועים בתוך יריעת התקרה יוצרים אפקט ייחודי של קווי אור שנראים מרחפים באוויר. עיצוב שמגדיר גבולות, יוצר עומק ומוסיף אופי לכל חלל."
      />

      <Breadcrumbs
        items={[
          { label: "ראשי", href: "/" },
          { label: "תקרות מתוחות", href: "/stretch-ceilings" },
          { label: "פס LED" },
        ]}
      />
      <ContentSection>
        <h2 className="text-h2-mobile md:text-h2-desktop">איך עובדים פסים מרחפים?</h2>
        <p className="mt-4 text-body text-sky-muted">
          פרופיל אלומיניום ייעודי מוטמע בתוך היריעה ומחזיק פס LED מתחת
          לשכבת דיפיוזר. התוצאה היא קו אור ישר ואחיד שנראה כאילו הוא מרחף
          בתוך התקרה — ללא מסגרת נראית, ללא מפתח ובלי פרופיל בולט.
        </p>
        <FeatureGrid
          items={[
            { title: "אפקט ריחוף", text: "קווי אור שנראים מרחפים בתוך התקרה." },
            { title: "עיצוב גמיש", text: "קווים ישרים, מלבנים, ריבועים או צורות חופשיות." },
            { title: "שליטה חכמה", text: "דימר, שינוי צבע, תזמון ואינטגרציה לבית חכם." },
            { title: "התקנה משולבת", text: "מותקן כחלק מהתקרה — ללא עבודות נוספות." },
          ]}
        />
      </ContentSection>
      <CTASection title="רוצים פסים מרחפים בתקרה?" />
    </>
  );
}

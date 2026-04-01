import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { PageHero } from "@/components/page-hero";
import { CTASection } from "@/components/cta-section";
import { ContentSection, FeatureGrid } from "@/components/content-blocks";

export const metadata: Metadata = {
  title: "תקרה מתוחה עם הדפס — עיצוב אישי על התקרה",
  description:
    "הדפסה ישירה של תמונות, עיצובים וטקסטורות על תקרה מתוחה. רזולוציה גבוהה, עמידות לשנים, ומגוון אפשרויות עיצוביות ללא גבול.",
  alternates: { canonical: "/printed-stretch-ceiling" },
};

export default function PrintedPage() {
  return (
    <>
      <PageHero
        title="תקרה מתוחה עם הדפס — כל תמונה, כל עיצוב"
        subtitle="הדפסת UV ישירה על יריעת התקרה ברזולוציה גבוהה. שמיים, עננים, יערות, טקסטורות עץ, דוגמאות גיאומטריות, לוגו או כל תמונה שתבחרו — על התקרה שלכם."
      />

      <Breadcrumbs
        items={[
          { label: "ראשי", href: "/" },
          { label: "תקרות מתוחות", href: "/stretch-ceilings" },
          { label: "תקרה עם הדפס" },
        ]}
      />
      <ContentSection>
        <h2 className="text-h2-mobile md:text-h2-desktop">טכנולוגיית ההדפסה</h2>
        <p className="mt-4 text-body text-sky-muted">
          ההדפסה מבוצעת בטכנולוגיית UV על גבי יריעת PVC ברזולוציה של עד
          1440 DPI. הדיו עמיד לאור, לחות וניקוי — הצבעים נשמרים לאורך שנים
          ללא דהייה. ניתן להדפיס על יריעות מט, סאטן ושקופות.
        </p>
        <FeatureGrid
          items={[
            { title: "רזולוציה גבוהה", text: "עד 1440 DPI — פרטים חדים גם מקרוב." },
            { title: "עמידות לדהייה", text: "דיו UV שלא דוהה מאור שמש או תאורה מלאכותית." },
            { title: "כל תמונה", text: "מבנק תמונות או קובץ אישי שתעלו." },
            { title: "שילוב תאורה", text: "הדפסה על יריעה שקופה ליצירת אפקט מואר." },
          ]}
        />
      </ContentSection>
      <ContentSection bg="light">
        <h2 className="text-h2-mobile md:text-h2-desktop">רעיונות פופולריים</h2>
        <p className="mt-4 text-body text-sky-muted">
          שמיים עם עננים לחדר ילדים, טקסטורת עץ לסלון כפרי, דוגמה גיאומטרית
          למשרד מודרני, לוגו חברה לחדר ישיבות, ציור שמן לפרויקט יוקרתי. כל
          דימוי ברזולוציה מספקת ניתן להדפסה.
        </p>
      </ContentSection>
      <CTASection title="רוצים תקרה עם הדפס?" />
    </>
  );
}

import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { PageHero } from "@/components/page-hero";
import { CTASection } from "@/components/cta-section";
import { ContentSection } from "@/components/content-blocks";

export const metadata: Metadata = {
  title: "תקרה מתוחה מבריקה — אפקט מראה שמגדיל חללים",
  description:
    "תקרה מתוחה בגימור מבריק (גלוסי) יוצרת אפקט מראה שמכפיל את תחושת הגובה והמרחב. אידיאלית לחללים קטנים, מסדרונות ולובי.",
  alternates: { canonical: "/stretch-ceiling-glossy" },
};

export default function GlossyPage() {
  return (
    <>
      <PageHero
        title="תקרה מתוחה מבריקה — מרחב כפול"
        subtitle="יריעה מבריקה (גלוסי) יוצרת השתקפות עדינה של החלל — כמו מראה על התקרה. האפקט מכפיל את תחושת הגובה ומרחיב חללים קטנים בצורה דרמטית."
      />

      <Breadcrumbs
        items={[
          { label: "ראשי", href: "/" },
          { label: "תקרות מתוחות", href: "/stretch-ceilings" },
          { label: "מבריק" },
        ]}
      />
      <ContentSection>
        <h2 className="text-h2-mobile md:text-h2-desktop">למי מתאים גימור מבריק?</h2>
        <p className="mt-4 text-body text-sky-muted">
          חדרי אמבטיה קטנים, מסדרונות צרים, לובי כניסה, חנויות ומרחבי תצוגה.
          כל חלל שרוצים להרגיש בו יותר מרחב ויותר גובה. הגימור המבריק מתאים
          במיוחד לצבעים כהים שיוצרים אפקט עומק מרשים.
        </p>
      </ContentSection>
      <ContentSection bg="light">
        <h2 className="text-h2-mobile md:text-h2-desktop">שחור מבריק — השילוב המבוקש</h2>
        <p className="mt-4 text-body text-sky-muted">
          תקרה שחורה מבריקה היא הבחירה של מעצבי פנים רבים לחללים יוקרתיים.
          ההשתקפות על הרקע הכהה יוצרת אפקט של עומק אינסופי — כמו שמיים בלילה.
          מתאים לחדרי קולנוע ביתי, מסעדות, ברים ומועדונים.
        </p>
      </ContentSection>
      <CTASection title="רוצים תקרה מבריקה?" />
    </>
  );
}

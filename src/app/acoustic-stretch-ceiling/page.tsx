import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { CTASection } from "@/components/cta-section";
import { ContentSection, FeatureGrid } from "@/components/content-blocks";

export const metadata: Metadata = {
  title: "תקרה מתוחה אקוסטית — בידוד רעשים ושיפור סאונד",
  description:
    "תקרה מתוחה אקוסטית עם יריעה מנוקבת מיקרו שסופגת רעשים ומשפרת אקוסטיקה. לקולנוע ביתי, משרדים, מסעדות ומוסדות חינוך.",
  alternates: { canonical: "/acoustic-stretch-ceiling" },
};

export default function AcousticPage() {
  return (
    <>
      <PageHero
        title="תקרה מתוחה אקוסטית — שקט, איכות סאונד ועיצוב"
        subtitle="יריעה מנוקבת מיקרו בשילוב שכבת בידוד אקוסטי. סופגת הדהוד ורעשי רקע, משפרת איכות שמע, ומספקת את כל היתרונות של תקרה מתוחה רגילה."
      />
      <ContentSection>
        <h2 className="text-h2-mobile md:text-h2-desktop">איך עובדת תקרה אקוסטית?</h2>
        <p className="mt-4 text-body text-sky-muted">
          היריעה מכילה אלפי נקבים מיקרוסקופיים שמאפשרים לגלי קול לעבור דרכה.
          מאחוריה מותקנת שכבת ספיגה (צמר סלע או פיברגלס אקוסטי) שבולעת את
          האנרגיה הקולית ומונעת הדהוד. התוצאה: ירידה משמעותית ברעשי רקע ושיפור
          בהירות הדיבור והמוסיקה.
        </p>
        <FeatureGrid
          items={[
            { title: "ספיגת רעשים", text: "מקדם ספיגה NRC של 0.7-0.95 — ביצועים של פאנל אקוסטי." },
            { title: "שיפור שמע", text: "הפחתת הדהוד לשיפור בהירות קול ומוסיקה." },
            { title: "מראה זהה", text: "נקבי המיקרו בלתי נראים. מט, מבריק או סאטן." },
            { title: "שילוב תאורה", text: "ניתן לשלב ספוטים, LED וכל פתרון תאורה." },
          ]}
        />
      </ContentSection>
      <ContentSection bg="light">
        <h2 className="text-h2-mobile md:text-h2-desktop">למי מתאימה תקרה אקוסטית?</h2>
        <p className="mt-4 text-body text-sky-muted">
          קולנוע ביתי, חדרי ישיבות, משרדי open space, מסעדות, גני ילדים, בתי
          ספר, מרפאות ומרחבי עבודה משותפים. כל חלל שבו רעש ואקוסטיקה הם שיקול
          מרכזי נהנה מתקרה אקוסטית.
        </p>
      </ContentSection>
      <CTASection title="צריכים פתרון אקוסטי?" />
    </>
  );
}

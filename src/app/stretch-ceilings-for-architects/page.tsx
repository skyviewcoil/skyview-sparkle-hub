import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { PageHero } from "@/components/page-hero";
import { CTASection } from "@/components/cta-section";
import { ContentSection, FeatureGrid } from "@/components/content-blocks";

export const metadata: Metadata = {
  title: "תקרות מתוחות לאדריכלים ומעצבי פנים",
  description:
    "שיתוף פעולה מקצועי עם SkyView: מפרטים טכניים, דוגמאות חומרים, שרטוטי DWG, ותמיכה טכנית לאורך הפרויקט. כל הכלים לעיצוב תקרות מתוחות.",
  alternates: { canonical: "/stretch-ceilings-for-architects" },
};

export default function ArchitectsPage() {
  return (
    <>
      <PageHero
        title="לאדריכלים ומעצבי פנים — שותפים לעיצוב"
        subtitle="SkyView עובדת עם אדריכלים ומעצבי פנים בפרויקטים פרטיים ומסחריים. מפרטים טכניים, דוגמאות חומרים, ותמיכה מקצועית — מתכנון ועד גמר."
        ctaText="צרו קשר מקצועי"
      />

      <Breadcrumbs
        items={[
          { label: "ראשי", href: "/" },
          { label: "תקרות מתוחות", href: "/stretch-ceilings" },
          { label: "לאדריכלים" },
        ]}
      />

      <ContentSection>
        <h2 className="text-h2-mobile md:text-h2-desktop">מה אנחנו מספקים לאנשי מקצוע</h2>
        <FeatureGrid
          items={[
            {
              title: "ספריית דוגמאות",
              text: "דוגמאות חומרים פיזיות ללא עלות. קטלוג דיגיטלי של 150+ צבעים וגימורים.",
            },
            {
              title: "מפרטים טכניים",
              text: "גיליונות נתונים טכניים, תעודות בדיקה, מקדמי אש ואקוסטיקה. שרטוטי DWG לפרופילים.",
            },
            {
              title: "ייעוץ טכני",
              text: "ייעוץ לפתרונות תאורה, אקוסטיקה ושילוב חומרים. ביקור באתר לפי צורך.",
            },
            {
              title: "תיאום קבלנים",
              text: "עבודה מול חשמלאי, מזגנן וקבלן שלד. תיאום לוחות זמנים ורצף עבודה.",
            },
          ]}
        />
      </ContentSection>

      <ContentSection bg="light">
        <h2 className="text-h2-mobile md:text-h2-desktop">אפשרויות עיצוביות</h2>
        <p className="mt-4 text-body text-sky-muted">
          רמות גובה שונות, שילוב חומרים (PVC +{" "}
          <Link href="/stretch-ceiling-vs-drywall" className="text-sky-navy hover:underline">גבס</Link>),{" "}
          <Link href="/lighted-stretch-ceiling" className="text-sky-navy hover:underline">תקרות מוארות</Link>{" "}
          בכל גודל וצורה,{" "}
          <Link href="/printed-stretch-ceiling" className="text-sky-navy hover:underline">הדפסים מותאמים</Link>,{" "}
          <Link href="/stretch-ceiling-led-strip" className="text-sky-navy hover:underline">פסים מרחפים</Link> ו
          <Link href="/stretch-ceiling-magnetic-track" className="text-sky-navy hover:underline">מסילות מגנטיות</Link>,
          צורות עקומות וקשתות, ו
          <Link href="/acoustic-stretch-ceiling" className="text-sky-navy hover:underline">פתרונות אקוסטיים</Link>{" "}
          שמשתלבים בעיצוב.
        </p>

        <h2 className="mt-10 text-h2-mobile md:text-h2-desktop">מגבלות טכניות שכדאי להכיר</h2>
        <p className="mt-4 text-body text-sky-muted">
          רוחב יריעה מקסימלי ללא תפר: 5 מטר (PVC), 5.1 מטר (בד). חללים
          רחבים יותר דורשים תפר מרותך (כמעט בלתי נראה). משקל מקסימלי
          שנתלה מהיריעה: 0 — כל גוף נתלה חייב להיות מעוגן לתקרה
          המקורית דרך פתח ביריעה. ירידת גובה מהתקרה: 3-5 ס״מ מינימום.
        </p>
      </ContentSection>

      <ContentSection>
        <h2 className="text-h2-mobile md:text-h2-desktop">עמודים קשורים</h2>
        <ul className="mt-4 space-y-2 text-body">
          <li>
            <Link href="/stretch-ceilings" className="text-sky-navy hover:underline">כל סוגי התקרות המתוחות</Link>
          </li>
          <li>
            <Link href="/stretch-ceilings-for-business" className="text-sky-navy hover:underline">תקרות לעסקים — התקנה ללא הפרעה</Link>
          </li>
          <li>
            <Link href="/barrisol" className="text-sky-navy hover:underline">בריסול — מה זה באמת?</Link>
          </li>
          <li>
            <Link href="/pricing" className="text-sky-navy hover:underline">מחירון</Link>
          </li>
        </ul>
      </ContentSection>

      <CTASection title="בואו נעבוד יחד" text="צרו קשר לתיאום פגישה מקצועית." />
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { PageHero } from "@/components/page-hero";
import { CTASection } from "@/components/cta-section";
import { ContentSection, FeatureGrid } from "@/components/content-blocks";

export const metadata: Metadata = {
  title: "בריסול (Barrisol) — תקרות מתוחות מותג פרימיום",
  description:
    "בריסול (Barrisol) היא מותג צרפתי מוביל לתקרות מתוחות. SkyView מציעה חומרים באיכות מקבילה עם ייצור מקומי, זמני אספקה קצרים ומחירים תחרותיים.",
  alternates: { canonical: "/barrisol" },
};

export default function BarrisolPage() {
  return (
    <>
      <PageHero
        title="בריסול — תקרות מתוחות ברמה הגבוהה ביותר"
        subtitle="בריסול (Barrisol) הוא מותג צרפתי שהפך לשם נרדף לתקרות מתוחות איכותיות. SkyView מציעה חומרים ופתרונות באיכות מקבילה, עם ייצור מקומי, זמני אספקה קצרים ומחירים תחרותיים."
      />

      <Breadcrumbs
        items={[
          { label: "ראשי", href: "/" },
          { label: "תקרות מתוחות", href: "/stretch-ceilings" },
          { label: "בריסול" },
        ]}
      />

      <ContentSection>
        <h2 className="text-h2-mobile md:text-h2-desktop">מה זה בריסול?</h2>
        <p className="mt-4 text-body text-sky-muted">
          Barrisol היא חברה צרפתית שהחלה לפתח תקרות מתוחות בשנות ה-60 והפכה
          לסטנדרט הזהב בתעשייה. בישראל, השם &quot;בריסול&quot; משמש לעתים כשם
          כולל לתקרות מתוחות איכותיות — בדומה ל&quot;ג׳קוזי&quot; שמתאר כל
          אמבט עיסוי.
        </p>
        <p className="mt-4 text-body text-sky-muted">
          חשוב להבחין: Barrisol היא חברה ספציפית, לא תקן או סיווג. יש
          יצרנים אירופיים רבים שמייצרים יריעות באותה רמת איכות בדיוק —
          RENOLIT (גרמניה), MSD (אירופה), Descor (גרמניה) ואחרים.
        </p>
      </ContentSection>

      <ContentSection bg="light">
        <h2 className="text-h2-mobile md:text-h2-desktop">SkyView מול בריסול — מה ההבדל?</h2>
        <FeatureGrid
          items={[
            {
              title: "חומרים באותה רמה",
              text: "SkyView עובדת עם RENOLIT ו-MSD — יריעות אירופיות שעומדות בכל התקנים של Barrisol.",
            },
            {
              title: "ייצור מקומי",
              text: "ייצור בהתאמה אישית בישראל. זמן אספקה קצר בהשוואה ליבוא ישיר מצרפת.",
            },
            {
              title: "מחיר תחרותי",
              text: "ללא העמסות של יבוא, מכס ולוגיסטיקה בינלאומית. אותה איכות, מחיר נמוך יותר.",
            },
            {
              title: "שירות ישראלי",
              text: "תמיכה, תיקון ואחריות ישירות — ללא תלות ביבואן או בנציג מקומי.",
            },
          ]}
        />
      </ContentSection>

      <ContentSection>
        <h2 className="text-h2-mobile md:text-h2-desktop">מה חשוב לדעת</h2>
        <p className="mt-4 text-body text-sky-muted">
          אם קבלתם הצעה &quot;לבריסול&quot; — בררו בדיוק איזה חומר מוצע.
          חברות רבות משתמשות בשם &quot;בריסול&quot; באופן גנרי בלי שמדובר
          במוצר Barrisol מקורי מצרפת. מה שחשוב הוא סוג היריעה, ארץ
          הייצור, התקן, ותנאי האחריות — לא שם המותג.
        </p>
      </ContentSection>

      <ContentSection bg="light">
        <h2 className="text-h2-mobile md:text-h2-desktop">עמודים קשורים</h2>
        <ul className="mt-4 space-y-2 text-body">
          <li>
            <Link href="/stretch-ceilings" className="text-sky-navy hover:underline">
              כל סוגי התקרות המתוחות
            </Link>
          </li>
          <li>
            <Link href="/stretch-ceiling-vs-drywall" className="text-sky-navy hover:underline">
              תקרה מתוחה או גבס — השוואה
            </Link>
          </li>
          <li>
            <Link href="/pricing" className="text-sky-navy hover:underline">
              מחירון תקרות מתוחות
            </Link>
          </li>
          <li>
            <Link href="/stretch-ceiling-guide" className="text-sky-navy hover:underline">
              מדריך מקיף לתקרות מתוחות
            </Link>
          </li>
          <li>
            <Link href="/stretch-ceilings-for-architects" className="text-sky-navy hover:underline">
              לאדריכלים ומעצבי פנים
            </Link>
          </li>
        </ul>
      </ContentSection>

      <CTASection title="רוצים איכות בריסול במחיר ישראלי?" />
    </>
  );
}

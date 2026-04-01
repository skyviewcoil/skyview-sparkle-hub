import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { PageHero } from "@/components/page-hero";
import { CTASection } from "@/components/cta-section";
import { ContentSection, FeatureGrid } from "@/components/content-blocks";

export default function BarrisolPage() {
  return (
    <>
      <SEO title="בריסול (Barrisol) — תקרות מתוחות מותג פרימיום" description="בריסול (Barrisol) היא מותג צרפתי מוביל לתקרות מתוחות. SkyView מציעה חומרים באיכות מקבילה עם ייצור מקומי, זמני אספקה קצרים ומחירים תחרותיים." canonical="/barrisol" />
      <PageHero title="בריסול — תקרות מתוחות ברמה הגבוהה ביותר" subtitle="בריסול (Barrisol) הוא מותג צרפתי שהפך לשם נרדף לתקרות מתוחות איכותיות. SkyView מציעה חומרים ופתרונות באיכות מקבילה, עם ייצור מקומי, זמני אספקה קצרים ומחירים תחרותיים." />
      <Breadcrumbs items={[{ label: "ראשי", href: "/" }, { label: "תקרות מתוחות", href: "/stretch-ceilings" }, { label: "בריסול" }]} />
      <ContentSection>
        <h2 className="text-h2-mobile md:text-h2-desktop">מה זה בריסול?</h2>
        <p className="mt-4 text-body text-sky-muted">Barrisol היא חברה צרפתית שהחלה לפתח תקרות מתוחות בשנות ה-60 והפכה לסטנדרט הזהב בתעשייה. בישראל, השם &quot;בריסול&quot; משמש לעתים כשם כולל לתקרות מתוחות איכותיות.</p>
        <p className="mt-4 text-body text-sky-muted">חשוב להבחין: Barrisol היא חברה ספציפית, לא תקן או סיווג. יש יצרנים אירופיים רבים שמייצרים יריעות באותה רמת איכות — RENOLIT (גרמניה), MSD (אירופה), Descor (גרמניה) ואחרים.</p>
      </ContentSection>
      <ContentSection bg="light">
        <h2 className="text-h2-mobile md:text-h2-desktop">SkyView מול בריסול — מה ההבדל?</h2>
        <FeatureGrid items={[
          { title: "חומרים באותה רמה", text: "SkyView עובדת עם RENOLIT ו-MSD — יריעות אירופיות שעומדות בכל התקנים של Barrisol." },
          { title: "ייצור מקומי", text: "ייצור בהתאמה אישית בישראל. זמן אספקה קצר בהשוואה ליבוא ישיר מצרפת." },
          { title: "מחיר תחרותי", text: "ללא העמסות של יבוא, מכס ולוגיסטיקה בינלאומית." },
          { title: "שירות ישראלי", text: "תמיכה, תיקון ואחריות ישירות — ללא תלות ביבואן." },
        ]} />
      </ContentSection>
      <ContentSection>
        <h2 className="text-h2-mobile md:text-h2-desktop">מה חשוב לדעת</h2>
        <p className="mt-4 text-body text-sky-muted">אם קבלתם הצעה &quot;לבריסול&quot; — בררו בדיוק איזה חומר מוצע. מה שחשוב הוא סוג היריעה, ארץ הייצור, התקן, ותנאי האחריות — לא שם המותג.</p>
      </ContentSection>
      <ContentSection bg="light">
        <h2 className="text-h2-mobile md:text-h2-desktop">עמודים קשורים</h2>
        <ul className="mt-4 space-y-2 text-body">
          <li><Link to="/stretch-ceilings" className="text-sky-navy hover:underline">כל סוגי התקרות המתוחות</Link></li>
          <li><Link to="/stretch-ceiling-vs-drywall" className="text-sky-navy hover:underline">תקרה מתוחה או גבס — השוואה</Link></li>
          <li><Link to="/pricing" className="text-sky-navy hover:underline">מחירון תקרות מתוחות</Link></li>
          <li><Link to="/stretch-ceiling-guide" className="text-sky-navy hover:underline">מדריך מקיף לתקרות מתוחות</Link></li>
          <li><Link to="/stretch-ceilings-for-architects" className="text-sky-navy hover:underline">לאדריכלים ומעצבי פנים</Link></li>
        </ul>
      </ContentSection>
      <CTASection title="רוצים איכות בריסול במחיר ישראלי?" />
    </>
  );
}

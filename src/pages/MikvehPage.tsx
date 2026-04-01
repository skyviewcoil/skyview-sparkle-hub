import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { PageHero } from "@/components/page-hero";
import { CTASection } from "@/components/cta-section";
import { ContentSection, FeatureGrid } from "@/components/content-blocks";

const faqs = [
  { q: "האם תקרה מתוחה מתאימה למקווה?", a: "כן. זהו אחד השימושים האידיאליים. היריעה אטומה לחלוטין למים ולחות, לא מפתחת עובש, ומתנקה בקלות." },
  { q: "מה קורה עם הלחות הגבוהה במקווה?", a: "יריעת PVC לא סופגת לחות כלל. אדי המים מתנקזים ומתייבשים. אין חדירה, אין נפיחות, אין קילוף." },
  { q: "אפשר לעשות תקרה מוארת במקווה?", a: "כן. תקרה מוארת עם יריעה שקופה ותאורת LED מאחור היא פתרון פופולרי מאוד למקוואות." },
  { q: "אפשר הדפס שמיים על תקרה במקווה?", a: "כן. הדפס שמיים כחולים עם עננים על יריעה מוארת הוא הבחירה הנפוצה ביותר למקוואות." },
  { q: "כמה עולה תקרה מתוחה למקווה?", a: "תקרה מט פשוטה מ-₪179/מ״ר. תקרה מוארת עם הדפס — לפי הצעה מותאמת. צרו קשר לתמחור מדויק." },
];

export default function MikvehPage() {
  return (
    <>
      <SEO title="תקרה מתוחה למקווה — תקרה מוארת עמידה בלחות" description="תקרה מתוחה למקווה: עמידה ב-100% ללחות, חסינה לעובש, עם אפשרות לתקרה מוארת והדפס שמיים. פתרון תקרה ייעודי למקוואות עם אחריות מלאה." canonical="/stretch-ceiling-mikveh" />
      <PageHero title="תקרה מתוחה למקווה — עמידה בלחות, מוארת, מעוצבת" subtitle="מקוואות חשופים ללחות קיצונית שהורסת תקרות גבס תוך שנים ספורות. תקרה מתוחה מ-PVC מציעה פתרון קבוע: אטימות מוחלטת, אפס עובש, תאורה מוארת אחידה, ואפשרות להדפס שמיים." />
      <Breadcrumbs items={[{ label: "ראשי", href: "/" }, { label: "תקרות מתוחות", href: "/stretch-ceilings" }, { label: "תקרה מתוחה למקווה" }]} />
      <ContentSection>
        <h2 className="text-h2-mobile md:text-h2-desktop">הבעיה: לחות שהורסת כל תקרה רגילה</h2>
        <p className="mt-4 text-body text-sky-muted">מקווה הוא סביבה עם לחות קיצונית — אדי מים רותחים, התעבות על משטחים, ומחזורי רטוב-יבש תכופים. תקרות גבס, טיח וצבע נכשלות בסביבה הזו תוך 1-3 שנים.</p>
        <h2 className="mt-12 text-h2-mobile md:text-h2-desktop">יתרונות תקרה מתוחה למקווה</h2>
        <FeatureGrid items={[
          { title: "עמידות מוחלטת בלחות", text: "יריעת PVC אטומה ב-100% למים ואדים." },
          { title: "אפס עובש", text: "משטח חלק שלא מאפשר צמיחת עובש או חיידקים." },
          { title: "תקרה מוארת", text: "יריעה שקופה עם תאורת LED מאחור. אור אחיד ורך." },
          { title: "הדפס שמיים", text: "הדפסת שמיים כחולים ועננים על יריעה מוארת." },
        ]} />
      </ContentSection>
      <ContentSection bg="light">
        <h2 className="text-h2-mobile md:text-h2-desktop">הפתרון הפופולרי: תקרה מוארת עם הדפס שמיים</h2>
        <p className="mt-4 text-body text-sky-muted">השילוב הנפוץ ביותר במקוואות: <Link to="/lighted-stretch-ceiling" className="text-sky-navy hover:underline">תקרה מוארת</Link> עם <Link to="/printed-stretch-ceiling" className="text-sky-navy hover:underline">הדפס שמיים כחולים ועננים</Link>. תאורת LED מפוזרת דרך היריעה המודפסת יוצרת אשליה של שמיים פתוחים.</p>
      </ContentSection>
      <section className="section-spacing">
        <div className="section-container max-w-prose">
          <h2 className="text-h2-mobile md:text-h2-desktop text-center">שאלות נפוצות — תקרה מתוחה למקווה</h2>
          <div className="mt-10 space-y-6">
            {faqs.map((f, i) => (
              <details key={i} className="group bg-white border border-sky-border p-5" open={i === 0}>
                <summary className="cursor-pointer text-h3-mobile md:text-h3-desktop list-none flex justify-between items-center">{f.q}<span className="text-sky-navy transition-transform group-open:rotate-45 text-xl mr-3">+</span></summary>
                <p className="mt-3 text-body text-sky-muted">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
      <ContentSection bg="light">
        <h2 className="text-h2-mobile md:text-h2-desktop">עמודים קשורים</h2>
        <ul className="mt-4 space-y-2 text-body">
          <li><Link to="/stretch-ceiling-bathroom" className="text-sky-navy hover:underline">תקרה מתוחה לאמבטיה</Link></li>
          <li><Link to="/lighted-stretch-ceiling" className="text-sky-navy hover:underline">תקרה מוארת</Link></li>
          <li><Link to="/printed-stretch-ceiling" className="text-sky-navy hover:underline">תקרה עם הדפס</Link></li>
          <li><Link to="/stretch-ceilings-for-business" className="text-sky-navy hover:underline">תקרות לעסקים ומוסדות</Link></li>
          <li><Link to="/pricing" className="text-sky-navy hover:underline">מחירים</Link></li>
        </ul>
      </ContentSection>
      <CTASection title="רוצים תקרה מתוחה למקווה?" />
    </>
  );
}

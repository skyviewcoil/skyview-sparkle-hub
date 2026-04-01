import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { PageHero } from "@/components/page-hero";
import { CTASection } from "@/components/cta-section";
import { ContentSection, PageImage } from "@/components/content-blocks";
import { IMAGES } from "@/lib/storage";

export default function GuidePage() {
  return (
    <>
      <SEO title="מדריך תקרות מתוחות — כל מה שצריך לדעת לפני שמזמינים" description="מדריך מקיף לתקרות מתוחות: סוגי חומרים, גימורים, תהליך התקנה, מחירים, תחזוקה, אורך חיים, מגבלות ושאלות נפוצות." canonical="/stretch-ceiling-guide" />
      <PageHero title="מדריך תקרות מתוחות — כל מה שצריך לדעת" subtitle="לפני שמזמינים תקרה מתוחה, כדאי להבין את הטכנולוגיה, סוגי החומרים, תהליך ההתקנה, המחירים והמגבלות. המדריך הזה מרכז את כל המידע." image={IMAGES.matte1} imageAlt="מדריך תקרות מתוחות — מט בחדר" />
      <Breadcrumbs items={[{ label: "ראשי", href: "/" }, { label: "מדריך" }]} />
      <ContentSection>
        <h2 className="text-h2-mobile md:text-h2-desktop">מהי תקרה מתוחה?</h2>
        <p className="mt-4 text-body text-sky-muted">תקרה מתוחה היא מערכת גימור שמורכבת ממסגרת אלומיניום שמחוברת לקירות, ויריעה שנמתחת עליה. היריעה נמתחת בחום ומתקררת למשטח חלק לחלוטין.</p>
        <PageImage src={IMAGES.glossyHero} alt="תקרה מתוחה מותקנת — דוגמה" />
        <h2 className="mt-12 text-h2-mobile md:text-h2-desktop">סוגי חומרים</h2>
        <p className="mt-4 text-body text-sky-muted"><strong>PVC</strong> — החומר הנפוץ ביותר. עמיד במים, זמין ב-150+ צבעים וגימורים, ניתן להדפסה. עובי טיפוסי: 0.17-0.35 מ״מ.</p>
        <p className="mt-4 text-body text-sky-muted"><strong>בד טכני (Polyester)</strong> — בד ארוג ללא PVC. נושם, מתאים למי שמעדיף חומרים ללא פלסטיק. מגיע בגימור <Link to="/stretch-ceiling-matte" className="text-sky-navy hover:underline">מט</Link> בלבד.</p>
        <h2 className="mt-12 text-h2-mobile md:text-h2-desktop">גימורים זמינים</h2>
        <p className="mt-4 text-body text-sky-muted">
          <Link to="/stretch-ceiling-matte" className="text-sky-navy hover:underline">מט</Link> — חלק ללא החזרי אור. <Link to="/stretch-ceiling-glossy" className="text-sky-navy hover:underline">מבריק</Link> — אפקט מראה, מגדיל חללים. סאטן — ביניים, זוהר עדין. <Link to="/printed-stretch-ceiling" className="text-sky-navy hover:underline">הדפס</Link> — כל תמונה על התקרה. שקוף — ל<Link to="/lighted-stretch-ceiling" className="text-sky-navy hover:underline">תקרות מוארות</Link>.
        </p>
        <h2 className="mt-12 text-h2-mobile md:text-h2-desktop">תהליך ההתקנה</h2>
        <p className="mt-4 text-body text-sky-muted">מדידה מדויקת → בחירת חומר וצבע → ייצור מותאם אישית (3-7 ימים) → התקנת פרופיל אלומיניום על הקירות → חימום החלל ל-40-50°C → מתיחת היריעה לתוך הפרופיל → חיתוך פתחים לתאורה ומזגנים → ניקוי סופי. חדר ממוצע: 3-5 שעות.</p>
        <h2 className="mt-12 text-h2-mobile md:text-h2-desktop">תחזוקה ואורך חיים</h2>
        <p className="mt-4 text-body text-sky-muted">ניקוי במטלית מיקרופייבר לחה פעם בחודשיים מספיק. אורך חיים ממוצע: 15-25 שנה. במקרה של נזק — ניתן <Link to="/stretch-ceiling-repair" className="text-sky-navy hover:underline">לתקן או להחליף</Link> את היריעה בלבד.</p>
        <h2 className="mt-12 text-h2-mobile md:text-h2-desktop">מגבלות — מה צריך לדעת</h2>
        <p className="mt-4 text-body text-sky-muted">התקרה יורדת 3-5 ס״מ מהתקרה המקורית. חללים עם תקרות נמוכות מ-2.40 מ׳ צריכים לשקול את זה. היריעה רגישה לחפצים חדים.</p>
      </ContentSection>
      <ContentSection bg="light">
        <h2 className="text-h2-mobile md:text-h2-desktop">עמודים קשורים</h2>
        <ul className="mt-4 space-y-2 text-body">
          <li><Link to="/stretch-ceilings" className="text-sky-navy hover:underline">כל סוגי התקרות המתוחות</Link></li>
          <li><Link to="/pricing" className="text-sky-navy hover:underline">מחירון למ״ר</Link></li>
          <li><Link to="/stretch-ceiling-vs-drywall" className="text-sky-navy hover:underline">תקרה מתוחה או גבס</Link></li>
          <li><Link to="/stretch-ceiling-living-room" className="text-sky-navy hover:underline">תקרה מתוחה לסלון</Link></li>
          <li><Link to="/stretch-ceiling-bathroom" className="text-sky-navy hover:underline">תקרה מתוחה לאמבטיה</Link></li>
          <li><Link to="/barrisol" className="text-sky-navy hover:underline">בריסול — מה זה באמת?</Link></li>
        </ul>
      </ContentSection>
      <CTASection title="מוכנים להתחיל?" />
    </>
  );
}

import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { PageHero } from "@/components/page-hero";
import { CTASection } from "@/components/cta-section";
import { ContentSection, FeatureGrid } from "@/components/content-blocks";

const faqs = [
  { q: "האם תקרה מתוחה מתאימה למטבח?", a: "כן. יריעת PVC לא סופגת שומנים, אדים או ריחות ומתנקה בקלות במטלית לחה. זהו פתרון תקרה אידיאלי למטבח." },
  { q: "איך מנקים תקרה מתוחה במטבח?", a: "מטלית מיקרופייבר לחה עם מעט סבון כלים. ללא חומרי ניקוי אגרסיביים, ללא שפשוף. הניקוי לוקח דקות." },
  { q: "האם החום מהתנור או הכיריים פוגע ביריעה?", a: "לא, בתנאי שהיריעה לא קרובה מדי למקור חום ישיר. מרחק מינימלי של 30 ס״מ מגוף חימום מספיק." },
  { q: "כמה עולה תקרה מתוחה למטבח?", a: "מ-₪179/מ״ר ליריעת MSD Premium ועד ₪249/מ״ר ליריעת RENOLIT אירופית. המחיר כולל מדידה, ייצור, התקנה ואחריות." },
];

export default function KitchenPage() {
  return (
    <>
      <SEO title="תקרה מתוחה למטבח — תקרה קלה לניקוי ועמידה בחום" description="תקרה מתוחה למטבח עמידה בלחות, שומנים ואדי בישול. משטח חלק שמנקים בשניות, ללא עובש וללא ספיגת ריחות." canonical="/stretch-ceiling-kitchen" />
      <PageHero title="תקרה מתוחה למטבח — נקייה, מודרנית, ללא תחזוקה" subtitle="המטבח הוא החלל שהכי חשוף לאדים, שומנים ולחות. תקרה מתוחה מ-PVC לא סופגת ריחות, לא צוברת עובש, ומתנקה בשניות — בדיוק מה שמטבח צריך." />
      <Breadcrumbs items={[{ label: "ראשי", href: "/" }, { label: "תקרות מתוחות", href: "/stretch-ceilings" }, { label: "תקרה מתוחה למטבח" }]} />
      <ContentSection>
        <h2 className="text-h2-mobile md:text-h2-desktop">למה תקרת גבס במטבח בעייתית</h2>
        <p className="mt-4 text-body text-sky-muted">תקרת גבס במטבח סופגת אדי שומן ולחות. תוך 2-3 שנים מופיעים כתמים צהובים, עובש בפינות, וקילוף צבע. תקרה מתוחה מ-PVC פותרת את הבעיה מהשורש: היריעה לא סופגת דבר.</p>
        <h2 className="mt-12 text-h2-mobile md:text-h2-desktop">יתרונות תקרה נמתחת למטבח</h2>
        <FeatureGrid items={[
          { title: "קלה לניקוי", text: "משטח חלק שלא סופג שומנים. מטלית לחה מספיקה להחזיר אותו כחדש." },
          { title: "עמידה בלחות", text: "אטומה לאדי בישול ולחות. ללא סיכון לעובש או כתמי רטיבות." },
          { title: "ללא ספיגת ריחות", text: "בניגוד לגבס, היריעה לא סופגת ריחות בישול ולא משנה צבע." },
          { title: "תאורה מודרנית", text: "שילוב ספוטים, פסי LED ומסילות מגנטיות ישירות בתקרת המטבח." },
        ]} />
      </ContentSection>
      <ContentSection bg="light">
        <h2 className="text-h2-mobile md:text-h2-desktop">גימורים מומלצים למטבח</h2>
        <p className="mt-4 text-body text-sky-muted">למטבח מודרני — מט לבן עם <Link to="/stretch-ceiling-led-strip" className="text-sky-navy hover:underline">פסי LED נסתרים</Link> מעל אי המטבח. למטבח קומפקטי — <Link to="/stretch-ceiling-glossy" className="text-sky-navy hover:underline">גימור מבריק</Link> שמגדיל את תחושת המרחב. למטבח פתוח לסלון — אותה יריעה ברצף מהמטבח אל <Link to="/stretch-ceiling-living-room" className="text-sky-navy hover:underline">הסלון</Link> ליצירת מראה אחיד.</p>
      </ContentSection>
      <section className="section-spacing">
        <div className="section-container max-w-prose">
          <h2 className="text-h2-mobile md:text-h2-desktop text-center">שאלות נפוצות — תקרה מתוחה למטבח</h2>
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
          <li><Link to="/stretch-ceiling-bathroom" className="text-sky-navy hover:underline">תקרה מתוחה לאמבטיה</Link> — עוד חלל רטוב שמרוויח מתקרה מתוחה</li>
          <li><Link to="/pricing" className="text-sky-navy hover:underline">מחירון תקרות מתוחות</Link> — MSD Premium ו-RENOLIT</li>
          <li><Link to="/stretch-ceiling-vs-drywall" className="text-sky-navy hover:underline">תקרה מתוחה או גבס</Link> — השוואה מלאה</li>
          <li><Link to="/lighted-stretch-ceiling" className="text-sky-navy hover:underline">תקרה מוארת</Link> — תאורה אחידה מושלמת למטבח</li>
        </ul>
      </ContentSection>
      <CTASection title="רוצים תקרה מתוחה למטבח?" />
    </>
  );
}

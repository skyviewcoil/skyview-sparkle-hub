import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { PageHero } from "@/components/page-hero";
import { CTASection } from "@/components/cta-section";
import { ContentSection, FeatureGrid, PageImage } from "@/components/content-blocks";
import { IMAGES } from "@/lib/storage";

export default function StretchCeilingsPage() {
  const types = [
    { title: "מט", text: "גימור חלק ושקט ללא החזרי אור. מתאים לסלון, חדר שינה ומשרד.", href: "/stretch-ceiling-matte", img: IMAGES.matte1 },
    { title: "מבריק", text: "משטח מראה שמכפיל תחושת מרחב. אידיאלי לחללים קטנים.", href: "/stretch-ceiling-glossy", img: IMAGES.glossyWide },
    { title: "מוארת", text: "תאורה אחידה דרך יריעה שקופה. מחליפה גופי תאורה מסורתיים.", href: "/lighted-stretch-ceiling", img: IMAGES.glossyLed },
    { title: "אקוסטית", text: "יריעה מנוקבת שסופגת רעשים. לקולנוע ביתי, משרדים ומסעדות.", href: "/acoustic-stretch-ceiling", img: IMAGES.glossyRoom },
    { title: "עם הדפס", text: "הדפסה של תמונה או גרפיקה ישירות על התקרה.", href: "/printed-stretch-ceiling", img: IMAGES.printSky },
    { title: "עם פס LED", text: "פסי LED נסתרים שיוצרים קווי אור מרחפים בתקרה.", href: "/stretch-ceiling-led-strip", img: IMAGES.glossyDetail },
  ];

  return (
    <>
      <SEO title="תקרות מתוחות — כל סוגי הפתרונות והגימורים" description="מדריך מקיף לסוגי תקרות מתוחות: מט, מבריק, סאטן, מוארת, אקוסטית ועם הדפס. גלו איזו תקרה מתאימה לחלל שלכם." canonical="/stretch-ceilings" />
      <PageHero title="תקרות מתוחות — כל הפתרונות במקום אחד" subtitle="SkyView מציעה את כל סוגי התקרות המתוחות — מט, מבריק, סאטן, מוארת, אקוסטית ועם הדפס — עם ייצור מקומי, התקנה מקצועית ואחריות מלאה." image={IMAGES.glossyHero} imageAlt="תקרות מתוחות — כל סוגי הפתרונות" />
      <Breadcrumbs items={[{ label: "ראשי", href: "/" }, { label: "תקרות מתוחות" }]} />
      <ContentSection>
        <h2 className="text-h2-mobile md:text-h2-desktop">מהי תקרה מתוחה?</h2>
        <p className="mt-4 text-body text-sky-muted">תקרה מתוחה היא יריעת PVC או בד טכני שנמתחת על מסגרת אלומיניום מתחת לתקרה הקיימת. היא יוצרת משטח חלק ואחיד לחלוטין, מסתירה תשתיות ופגמים, ומאפשרת שילוב של תאורה, בידוד אקוסטי וגימורים דקורטיביים — הכל בהתקנה נקייה ומהירה ללא עבודות בנייה.</p>
      </ContentSection>
      <section className="section-spacing bg-sky-light">
        <div className="section-container">
          <h2 className="text-h2-mobile md:text-h2-desktop text-center">סוגי תקרות מתוחות</h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {types.map((t) => (
              <Link key={t.href} to={t.href} className="group bg-white border border-sky-border hover:border-sky-navy/30 transition-colors rounded-2xl overflow-hidden">
                <div className="h-44 overflow-hidden">
                  <img src={t.img} alt={`תקרה מתוחה ${t.title}`} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <h3 className="text-h3-mobile md:text-h3-desktop group-hover:text-sky-navy transition-colors">{t.title}</h3>
                  <p className="mt-2 text-body text-sky-muted">{t.text}</p>
                  <span className="inline-block mt-3 text-sm font-semibold text-sky-navy">למידע נוסף ←</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <ContentSection>
        <h2 className="text-h2-mobile md:text-h2-desktop">יתרונות עיקריים</h2>
        <FeatureGrid items={[
          { title: "התקנה מהירה", text: "חדר ממוצע מותקן ב-3-5 שעות. דירה שלמה ביום." },
          { title: "עמידות במים", text: "היריעה חוסמת נזילות ומחזיקה עד 100 ליטר למ״ר." },
          { title: "תחזוקה אפסית", text: "ניקוי קל במטלית לחה. ללא צביעה מחדש." },
          { title: "אחריות מלאה", text: "אחריות יצרן על החומר וההתקנה." },
        ]} />
      </ContentSection>
      <ContentSection bg="light">
        <h2 className="text-h2-mobile md:text-h2-desktop">תקרות מתוחות לפי חדר</h2>
        <ul className="mt-4 space-y-2 text-body">
          <li><Link to="/stretch-ceiling-living-room" className="text-sky-navy hover:underline">תקרה מתוחה לסלון</Link> — תאורה משולבת, מראה פרימיום</li>
          <li><Link to="/stretch-ceiling-bathroom" className="text-sky-navy hover:underline">תקרה מתוחה לאמבטיה</Link> — עמידות מוחלטת בלחות</li>
          <li><Link to="/stretch-ceiling-kitchen" className="text-sky-navy hover:underline">תקרה מתוחה למטבח</Link> — קלה לניקוי, ללא ספיגת שומנים</li>
          <li><Link to="/stretch-ceiling-mikveh" className="text-sky-navy hover:underline">תקרה מתוחה למקווה</Link> — עמידות בלחות קיצונית, הדפס שמיים</li>
        </ul>
        <h2 className="mt-10 text-h2-mobile md:text-h2-desktop">עמודים קשורים</h2>
        <ul className="mt-4 space-y-2 text-body">
          <li><Link to="/pricing" className="text-sky-navy hover:underline">מחירון למ״ר</Link></li>
          <li><Link to="/stretch-ceiling-vs-drywall" className="text-sky-navy hover:underline">תקרה מתוחה או גבס — השוואה</Link></li>
          <li><Link to="/stretch-ceiling-guide" className="text-sky-navy hover:underline">מדריך מקיף</Link></li>
          <li><Link to="/barrisol" className="text-sky-navy hover:underline">בריסול</Link></li>
        </ul>
      </ContentSection>
      <CTASection />
    </>
  );
}

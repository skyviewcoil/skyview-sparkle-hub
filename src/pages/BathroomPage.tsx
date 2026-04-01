import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { PageHero } from "@/components/page-hero";
import { CTASection } from "@/components/cta-section";
import { ContentSection, FeatureGrid } from "@/components/content-blocks";

export default function BathroomPage() {
  return (
    <>
      <SEO title="תקרה מתוחה לאמבטיה — פתרון עמיד מים מושלם" description="תקרה מתוחה לאמבטיה עמידה ב-100% ללחות, עובש וקילוף. התקנה נקייה, מגוון גימורים ואחריות מלאה. הפתרון האידיאלי לחדרי רחצה." canonical="/stretch-ceiling-bathroom" />
      <PageHero title="תקרה מתוחה לאמבטיה — עמידה ב-100% ללחות" subtitle="חדרי אמבטיה דורשים תקרה שעומדת באדי מים, לחות גבוהה ונזילות. תקרה מתוחה מ-PVC היא הפתרון המושלם — חסינה למים, נטולת עובש, ומעוצבת בדיוק לפי הטעם שלכם." />
      <Breadcrumbs items={[{ label: "ראשי", href: "/" }, { label: "תקרות מתוחות", href: "/stretch-ceilings" }, { label: "תקרה מתוחה לאמבטיה" }]} />
      <ContentSection>
        <h2 className="text-h2-mobile md:text-h2-desktop">למה תקרה מתוחה מתאימה לאמבטיה?</h2>
        <p className="mt-4 text-body text-sky-muted">תקרות גבס באמבטיה סובלות מקילוף, עובש וכתמי רטיבות תוך שנים ספורות. תקרה מתוחה מ-PVC לא סופגת לחות, לא מפתחת עובש, ויכולה להחזיק עד 100 ליטר מים במקרה של נזילה מהדירה מעל — ללא נזק ליריעה.</p>
        <FeatureGrid items={[
          { title: "חסינות מוחלטת למים", text: "יריעת PVC אטומה למים ולאדים. אפס חדירת רטיבות." },
          { title: "ללא עובש", text: "המשטח החלק לא מאפשר צמיחת עובש או חיידקים." },
          { title: "ניקוי קל", text: "מטלית לחה מספיקה. ללא חומרי ניקוי מיוחדים." },
          { title: "תאורה משולבת", text: "ספוטים, פסי LED ותאורה אחידה — בשילוב מושלם." },
        ]} />
      </ContentSection>
      <ContentSection bg="light">
        <h2 className="text-h2-mobile md:text-h2-desktop">גימורים מומלצים לאמבטיה</h2>
        <p className="mt-4 text-body text-sky-muted">לחדר אמבטיה קטן מומלצת יריעה מבריקה שמגדילה את תחושת המרחב. לאמבטיה גדולה ומעוצבת, יריעת מט או סאטן נותנת מראה יוקרתי ושקט. ניתן גם להוסיף הדפס שמים, עננים או כל עיצוב אחר ליצירת חוויה ייחודית.</p>
      </ContentSection>
      <CTASection title="רוצים תקרה מתוחה לאמבטיה?" />
    </>
  );
}

import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { PageHero } from "@/components/page-hero";
import { CTASection } from "@/components/cta-section";
import { ContentSection, FeatureGrid } from "@/components/content-blocks";
import { IMAGES } from "@/lib/storage";

export default function RepairPage() {
  return (
    <>
      <SEO title="תיקון תקרה מתוחה — שירות מהיר ומקצועי" description="תיקון תקרות מתוחות: קרעים, ניקוז הצפות, החלפת יריעה, תיקון תאורה וטיפול בצהבה. שירות מהיר בכל רחבי ישראל." canonical="/stretch-ceiling-repair" />
      <PageHero title="תיקון תקרה מתוחה — שירות מהיר ומקצועי" subtitle="קרע ביריעה? הצפה מהדירה מעל? בעיית תאורה? צוות SkyView מגיע לתיקון מהיר ומקצועי — גם אם התקרה לא הותקנה על ידנו." ctaText="קראו לשירות" image={IMAGES.glossyDark} imageAlt="שירות תיקון תקרה מתוחה" />
      <Breadcrumbs items={[{ label: "ראשי", href: "/" }, { label: "תיקון" }]} />
      <ContentSection>
        <h2 className="text-h2-mobile md:text-h2-desktop">סוגי תיקונים</h2>
        <FeatureGrid items={[
          { title: "קרע או נקב", text: "קרע קטן (עד 10 ס״מ) ליד הקצה ניתן לתקן ללא החלפה. קרע גדול באמצע דורש בדרך כלל החלפה." },
          { title: "ניקוז הצפה", text: "היריעה עוצרת את המים ויוצרת כיס. אנחנו מנקזים, מייבשים ומחזירים את היריעה למקום." },
          { title: "שחרור יריעה", text: "יריעה שנשמטה מהפרופיל — חימום מחדש והכנסה." },
          { title: "החלפת תאורה", text: "החלפת ספוטים שנשרפו, שנאים, פסי LED — ללא פגיעה ביריעה." },
        ]} />
      </ContentSection>
      <ContentSection bg="light">
        <h2 className="text-h2-mobile md:text-h2-desktop">מתי צריך החלפה מלאה?</h2>
        <p className="mt-4 text-body text-sky-muted">קרע ארוך (מעל 15-20 ס״מ) באמצע היריעה. צהבה חמורה מעישון ממושך או שריפה. במקרים אלה הפרופיל נשאר — רק היריעה מוחלפת.</p>
      </ContentSection>
      <ContentSection>
        <h2 className="text-h2-mobile md:text-h2-desktop">עמודים קשורים</h2>
        <ul className="mt-4 space-y-2 text-body">
          <li><Link to="/stretch-ceiling-guide" className="text-sky-navy hover:underline">מדריך תקרות מתוחות — תחזוקה ואורך חיים</Link></li>
          <li><Link to="/pricing" className="text-sky-navy hover:underline">מחירון — כולל מחירי החלפת יריעה</Link></li>
          <li><Link to="/stretch-ceiling-bathroom" className="text-sky-navy hover:underline">תקרה מתוחה לאמבטיה — עמידות במים</Link></li>
          <li><Link to="/contact" className="text-sky-navy hover:underline">צרו קשר לתיאום שירות</Link></li>
        </ul>
      </ContentSection>
      <CTASection title="צריכים תיקון?" text="צרו קשר ונגיע לטפל." />
    </>
  );
}

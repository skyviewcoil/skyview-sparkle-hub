import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { PageHero } from "@/components/page-hero";
import { CTASection } from "@/components/cta-section";
import { ContentSection, FeatureGrid, PageImage } from "@/components/content-blocks";
import { IMAGES } from "@/lib/storage";

export default function LivingRoomPage() {
  return (
    <>
      <SEO title="תקרה מתוחה לסלון — עיצוב תקרה פרימיום" description="תקרה מתוחה לסלון יוצרת משטח חלק ואחיד עם תאורה משולבת. גימורי מט, מבריק וסאטן בהתאמה אישית. התקנה ביום אחד." canonical="/stretch-ceiling-living-room" />
      <PageHero title="תקרה מתוחה לסלון — המרכז של הבית" subtitle="הסלון הוא החלל המרכזי בבית, והתקרה קובעת את האווירה. תקרה מתוחה יוצרת משטח חלק ומושלם, מסתירה תשתיות, ומשלבת תאורה בצורה שלא אפשרית עם גבס." image={IMAGES.glossyLiving} imageAlt="תקרה מתוחה לסלון עם תאורה משולבת" />
      <Breadcrumbs items={[{ label: "ראשי", href: "/" }, { label: "תקרות מתוחות", href: "/stretch-ceilings" }, { label: "תקרה מתוחה לסלון" }]} />
      <ContentSection>
        <h2 className="text-h2-mobile md:text-h2-desktop">עיצוב תקרה שמשנה את הסלון</h2>
        <p className="mt-4 text-body text-sky-muted">תקרה מתוחה לסלון מאפשרת לשלב תאורה סמויה, פסי LED, ספוטים ומסילות מגנטיות — הכל בתוך משטח אחד נקי וחלק. ניתן לבחור בין גימור מט לאווירה חמה ורגועה, מבריק לתחושת מרחב, או סאטן לאיזון מושלם.</p>
        <FeatureGrid items={[
          { title: "תאורה אינטגרלית", text: "שילוב ספוטים, LED ומסילות מגנטיות ישירות בתקרה." },
          { title: "הסתרת תשתיות", text: "צנרת, חיווט ומזגנים נעלמים מעל היריעה." },
          { title: "משטח אחיד", text: "ללא סדקים, תפרים או פגמים — גם אחרי שנים." },
          { title: "אפשרויות עיצוב", text: "שילוב צבעים, רמות גובה שונות והדפסים." },
        ]} />
      </ContentSection>
      <ContentSection bg="light">
        <h2 className="text-h2-mobile md:text-h2-desktop">איזה גימור מתאים לסלון?</h2>
        <p className="mt-4 text-body text-sky-muted">לסלון בסגנון מודרני — מט לבן או אפור בהיר עם פסי LED נסתרים. לסלון קלאסי — סאטן בגווני שמנת עם ספוטים. לסלון קומפקטי — מבריק שמכפיל את תחושת הגובה והמרחב.</p>
        <PageImage src={IMAGES.glossyCorner} alt="תקרה מתוחה בסלון מודרני" />
      </ContentSection>
      <CTASection title="מוכנים לשדרג את הסלון?" />
    </>
  );
}

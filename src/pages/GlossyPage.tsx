import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { PageHero } from "@/components/page-hero";
import { CTASection } from "@/components/cta-section";
import { ContentSection, PageImage } from "@/components/content-blocks";
import { IMAGES } from "@/lib/storage";

export default function GlossyPage() {
  return (
    <>
      <SEO title="תקרה מתוחה מבריקה — אפקט מראה שמגדיל חללים" description="תקרה מתוחה בגימור מבריק (גלוסי) יוצרת אפקט מראה שמכפיל את תחושת הגובה והמרחב. אידיאלית לחללים קטנים, מסדרונות ולובי." canonical="/stretch-ceiling-glossy" />
      <PageHero title="תקרה מתוחה מבריקה — מרחב כפול" subtitle="יריעה מבריקה (גלוסי) יוצרת השתקפות עדינה של החלל — כמו מראה על התקרה. האפקט מכפיל את תחושת הגובה ומרחיב חללים קטנים בצורה דרמטית." image={IMAGES.glossyWide} imageAlt="תקרה מתוחה מבריקה עם אפקט מראה" />
      <Breadcrumbs items={[{ label: "ראשי", href: "/" }, { label: "תקרות מתוחות", href: "/stretch-ceilings" }, { label: "מבריק" }]} />
      <ContentSection>
        <h2 className="text-h2-mobile md:text-h2-desktop">למי מתאים גימור מבריק?</h2>
        <p className="mt-4 text-body text-sky-muted">חדרי אמבטיה קטנים, מסדרונות צרים, לובי כניסה, חנויות ומרחבי תצוגה. כל חלל שרוצים להרגיש בו יותר מרחב ויותר גובה.</p>
        <PageImage src={IMAGES.glossyDark} alt="תקרה מתוחה מבריקה בגימור כהה" />
      </ContentSection>
      <ContentSection bg="light">
        <h2 className="text-h2-mobile md:text-h2-desktop">שחור מבריק — השילוב המבוקש</h2>
        <p className="mt-4 text-body text-sky-muted">תקרה שחורה מבריקה היא הבחירה של מעצבי פנים רבים לחללים יוקרתיים. ההשתקפות על הרקע הכהה יוצרת אפקט של עומק אינסופי — כמו שמיים בלילה.</p>
        <PageImage src={IMAGES.glossyMirror} alt="תקרה מתוחה שחורה מבריקה" />
      </ContentSection>
      <CTASection title="רוצים תקרה מבריקה?" />
    </>
  );
}

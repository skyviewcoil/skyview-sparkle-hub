import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { PageHero } from "@/components/page-hero";
import { CTASection } from "@/components/cta-section";
import { ContentSection, FeatureGrid } from "@/components/content-blocks";

export default function LightedCeilingPage() {
  return (
    <>
      <SEO title="תקרה מתוחה מוארת — תאורה אחידה ללא גופי תאורה" description="תקרה מתוחה מוארת משלבת יריעה שקופה עם תאורת LED מאחור. תאורה אחידה ורכה שמחליפה נברשות וספוטים." canonical="/lighted-stretch-ceiling" />
      <PageHero title="תקרה מתוחה מוארת — התקרה היא גוף התאורה" subtitle="יריעה שקופה או חצי-שקופה עם שכבת תאורת LED מאחוריה. התוצאה: תקרה שמאירה באור אחיד ורך — ללא גופי תאורה בולטים, ללא צללים וללא נקודות חמות." />
      <Breadcrumbs items={[{ label: "ראשי", href: "/" }, { label: "תקרות מתוחות", href: "/stretch-ceilings" }, { label: "תקרה מוארת" }]} />
      <ContentSection>
        <h2 className="text-h2-mobile md:text-h2-desktop">איך עובדת תקרה מוארת?</h2>
        <p className="mt-4 text-body text-sky-muted">התקרה המוארת בנויה משתי שכבות: מערך פסי LED צפופים שמותקנים מעל יריעה שקופה (translucent). האור עובר דרך היריעה ומתפזר באופן אחיד על פני כל שטח התקרה.</p>
        <FeatureGrid items={[
          { title: "תאורה אחידה", text: "ללא נקודות בולטות, ללא צללים. אור מפוזר בכל החלל." },
          { title: "שליטה מלאה", text: "דימר, שינוי טמפרטורת צבע ותזמון — הכל בשלט." },
          { title: "ללא גופי תאורה", text: "התקרה עצמה מאירה. ללא נברשות, ספוטים או פלפונים." },
          { title: "חיסכון באנרגיה", text: "תאורת LED צורכת 80% פחות חשמל מנורות הלוגן." },
        ]} />
      </ContentSection>
      <ContentSection bg="light">
        <h2 className="text-h2-mobile md:text-h2-desktop">למי מתאימה תקרה מוארת?</h2>
        <p className="mt-4 text-body text-sky-muted">תקרות מוארות מתאימות במיוחד לחדרי אמבטיה, מסדרונות, מרפאות, חנויות, לובי משרדים וכל חלל שרוצים בו תאורה אחידה ומעוצבת.</p>
      </ContentSection>
      <CTASection title="רוצים תקרה שמאירה מעצמה?" />
    </>
  );
}

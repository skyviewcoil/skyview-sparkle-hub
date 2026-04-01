import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { PageHero } from "@/components/page-hero";
import { CTASection } from "@/components/cta-section";
import { ContentSection, FeatureGrid } from "@/components/content-blocks";
import { IMAGES } from "@/lib/storage";

export default function MagneticTrackPage() {
  return (
    <>
      <SEO title="תקרה מתוחה עם מסילה מגנטית — תאורה גמישה" description="שילוב מסילה מגנטית בתוך תקרה מתוחה. גופי תאורה ניתנים להזזה, הוספה והחלפה ללא כלים. פתרון תאורה גמיש ומעוצב." canonical="/stretch-ceiling-magnetic-track" />
      <PageHero title="תקרה מתוחה עם מסילה מגנטית" subtitle="מסילה מגנטית שקועה בתקרה המתוחה מאפשרת לחבר, להזיז ולהחליף גופי תאורה בלחיצה — ללא כלים, ללא חורים וללא חשמלאי." image={IMAGES.glossyModern} imageAlt="מסילה מגנטית בתקרה מתוחה" />
      <Breadcrumbs items={[{ label: "ראשי", href: "/" }, { label: "תקרות מתוחות", href: "/stretch-ceilings" }, { label: "מסילה מגנטית" }]} />
      <ContentSection>
        <h2 className="text-h2-mobile md:text-h2-desktop">למה מסילה מגנטית?</h2>
        <p className="mt-4 text-body text-sky-muted">מסילה מגנטית היא מערכת תאורה מודולרית שבה גופי התאורה נצמדים למסילה באמצעות מגנטים. אפשר להזיז ספוט, להוסיף גוף תאורה, או להחליף סוג — הכל בשניות.</p>
        <FeatureGrid items={[
          { title: "גמישות מלאה", text: "הזזה והחלפה של גופי תאורה ללא כלים." },
          { title: "התקנה שקועה", text: "המסילה נעלמת בתוך התקרה — רק הגופים נראים." },
          { title: "מגוון גופים", text: "ספוטים, לינאריים, תליונים — כולם תואמים." },
          { title: "עיצוב מינימלי", text: "קו תאורה נקי ללא פרופילים בולטים." },
        ]} />
      </ContentSection>
      <CTASection title="רוצים מסילה מגנטית בתקרה?" />
    </>
  );
}

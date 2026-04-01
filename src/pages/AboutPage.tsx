import { SEO } from "@/components/SEO";
import { PageHero } from "@/components/page-hero";
import { CTASection } from "@/components/cta-section";
import { ContentSection, PageImage } from "@/components/content-blocks";
import { IMAGES } from "@/lib/storage";

export default function AboutPage() {
  return (
    <>
      <SEO title="אודות SkyView — יבוא, ייצור והתקנת תקרות מתוחות" description="SkyView — חברה ישראלית ליבוא, ייצור והתקנת תקרות מתוחות. חומרים אירופיים, ייצור מקומי, צוות מקצועי ואחריות מלאה." canonical="/about" />
      <PageHero title="אודות SkyView" subtitle="SkyView היא חברה ישראלית המתמחה ביבוא, ייצור והתקנה של תקרות מתוחות. אנחנו עובדים עם החומרים האיכותיים ביותר מאירופה, מייצרים בהתאמה אישית, ומתקינים בכל רחבי ישראל." image={IMAGES.glossyHall} imageAlt="צוות SkyView בזמן התקנה" />
      <ContentSection>
        <h2 className="text-h2-mobile md:text-h2-desktop">מי אנחנו</h2>
        <p className="mt-4 text-body text-sky-muted">צוות SkyView מורכב ממתקינים מוסמכים עם ניסיון של אלפי מ״ר תקרות מתוחות. אנחנו מטפלים בכל הפרויקט — מהייעוץ הראשוני, דרך המדידה והייצור, ועד ההתקנה הסופית. אין קבלני משנה, אין תיווך.</p>
        <PageImage src={IMAGES.glossyModern} alt="פרויקט תקרה מתוחה של SkyView" />
      </ContentSection>
      <ContentSection bg="light">
        <h2 className="text-h2-mobile md:text-h2-desktop">הערכים שלנו</h2>
        <p className="mt-4 text-body text-sky-muted">שקיפות מלאה במחירים ובתהליך, שימוש בחומרים מהשורה הראשונה בלבד, עמידה בלוחות זמנים, ניקיון מוחלט באתר, ואחריות שאנחנו עומדים מאחוריה.</p>
      </ContentSection>
      <CTASection title="רוצים לעבוד איתנו?" />
    </>
  );
}

import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { PageHero } from "@/components/page-hero";
import { CTASection } from "@/components/cta-section";
import { ContentSection } from "@/components/content-blocks";

export const metadata: Metadata = {
  title: "תקרה מתוחה מט — גימור חלק ואלגנטי",
  description:
    "תקרה מתוחה בגימור מט יוצרת מראה חלק ורגוע ללא החזרי אור. הגימור הפופולרי ביותר לסלון, חדר שינה ומשרד.",
  alternates: { canonical: "/stretch-ceiling-matte" },
};

export default function MattePage() {
  return (
    <>
      <PageHero
        title="תקרה מתוחה מט — חלקה, שקטה, אלגנטית"
        subtitle="גימור מט הוא הבחירה הפופולרית ביותר — משטח חלק ואחיד ללא החזרי אור, שנראה כמו תקרת טיח מושלמת אבל ללא הסדקים, הכתמים והתחזוקה."
      />

      <Breadcrumbs
        items={[
          { label: "ראשי", href: "/" },
          { label: "תקרות מתוחות", href: "/stretch-ceilings" },
          { label: "מט" },
        ]}
      />
      <ContentSection>
        <h2 className="text-h2-mobile md:text-h2-desktop">למה מט?</h2>
        <p className="mt-4 text-body text-sky-muted">
          גימור מט לא מחזיר אור ולכן לא יוצר בוהק או השתקפויות. הוא מתמזג
          עם כל סגנון עיצוב — מודרני, מינימלי, כפרי או קלאסי. זהו הגימור
          הקרוב ביותר למראה של תקרה טיח/צבע מסורתית, אבל ללא הבעיות.
        </p>
      </ContentSection>
      <ContentSection bg="light">
        <h2 className="text-h2-mobile md:text-h2-desktop">צבעים זמינים</h2>
        <p className="mt-4 text-body text-sky-muted">
          לבן קלאסי, שמנת, אפור בהיר, אפור כהה, שחור, בז׳ ועוד עשרות
          גוונים. ניתן גם להזמין צבע מותאם אישית לפי קוד RAL או NCS.
        </p>
      </ContentSection>
      <CTASection title="רוצים תקרה מט?" />
    </>
  );
}

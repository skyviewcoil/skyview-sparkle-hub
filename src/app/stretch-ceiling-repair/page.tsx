import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { PageHero } from "@/components/page-hero";
import { CTASection } from "@/components/cta-section";
import { ContentSection, FeatureGrid } from "@/components/content-blocks";

export const metadata: Metadata = {
  title: "תיקון תקרה מתוחה — שירות מהיר ומקצועי",
  description:
    "תיקון תקרות מתוחות: קרעים, ניקוז הצפות, החלפת יריעה, תיקון תאורה וטיפול בצהבה. שירות מהיר בכל רחבי ישראל — גם לתקרות שלא הותקנו על ידנו.",
  alternates: { canonical: "/stretch-ceiling-repair" },
};

export default function RepairPage() {
  return (
    <>
      <PageHero
        title="תיקון תקרה מתוחה — שירות מהיר ומקצועי"
        subtitle="קרע ביריעה? הצפה מהדירה מעל? בעיית תאורה? צוות SkyView מגיע לתיקון מהיר ומקצועי — גם אם התקרה לא הותקנה על ידנו."
        ctaText="קראו לשירות"
      />

      <Breadcrumbs
        items={[
          { label: "ראשי", href: "/" },
          { label: "תיקון" },
        ]}
      />

      <ContentSection>
        <h2 className="text-h2-mobile md:text-h2-desktop">סוגי תיקונים</h2>
        <FeatureGrid
          items={[
            {
              title: "קרע או נקב",
              text: "קרע קטן (עד 10 ס״מ) ליד הקצה ניתן לתקן ללא החלפה. קרע גדול באמצע היריעה דורש בדרך כלל החלפה.",
            },
            {
              title: "ניקוז הצפה",
              text: "היריעה עוצרת את המים ויוצרת כיס. אנחנו מנקזים, מייבשים ומחזירים את היריעה למקום — בדרך כלל ללא נזק.",
            },
            {
              title: "שחרור יריעה",
              text: "יריעה שנשמטה מהפרופיל — חימום מחדש והכנסה. נדיר, אבל קורה אם ההתקנה לא נעשתה כראוי.",
            },
            {
              title: "החלפת תאורה",
              text: "החלפת ספוטים שנשרפו, שנאים, פסי LED או גופים בתוך התקרה — ללא פגיעה ביריעה.",
            },
          ]}
        />
      </ContentSection>

      <ContentSection bg="light">
        <h2 className="text-h2-mobile md:text-h2-desktop">מתי צריך החלפה מלאה?</h2>
        <p className="mt-4 text-body text-sky-muted">
          קרע ארוך (מעל 15-20 ס״מ) באמצע היריעה. צהבה חמורה מעישון
          ממושך או שריפה. מגע ממושך עם חומר ממס שפגע ביריעה. במקרים
          אלה הפרופיל נשאר — רק היריעה מוחלפת. זמן ייצור יריעה חדשה:
          3-7 ימים. ההחלפה עצמה לוקחת שעות.
        </p>

        <h2 className="mt-10 text-h2-mobile md:text-h2-desktop">מה לא ניתן לתקן</h2>
        <p className="mt-4 text-body text-sky-muted">
          נקב שנוצר ממגע חד (סכין, מברגה) באמצע שטח גדול — בדרך כלל
          לא ניתן לתקן בצורה בלתי נראית. עדיף החלפת יריעה. שקיעה
          או גלים ביריעה שנגרמים מחום חריג (גוף חימום קרוב מדי) —
          דורשים החלפה.
        </p>
      </ContentSection>

      <ContentSection>
        <h2 className="text-h2-mobile md:text-h2-desktop">עמודים קשורים</h2>
        <ul className="mt-4 space-y-2 text-body">
          <li>
            <Link href="/stretch-ceiling-guide" className="text-sky-navy hover:underline">
              מדריך תקרות מתוחות — תחזוקה ואורך חיים
            </Link>
          </li>
          <li>
            <Link href="/pricing" className="text-sky-navy hover:underline">
              מחירון — כולל מחירי החלפת יריעה
            </Link>
          </li>
          <li>
            <Link href="/stretch-ceiling-bathroom" className="text-sky-navy hover:underline">
              תקרה מתוחה לאמבטיה — עמידות במים
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-sky-navy hover:underline">
              צרו קשר לתיאום שירות
            </Link>
          </li>
        </ul>
      </ContentSection>

      <CTASection title="צריכים תיקון?" text="צרו קשר ונגיע לטפל." />
    </>
  );
}

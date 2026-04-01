import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { CTASection } from "@/components/cta-section";
import { ContentSection, FeatureGrid } from "@/components/content-blocks";
import { Breadcrumbs } from "@/components/breadcrumbs";

export const metadata: Metadata = {
  title: "תקרה מתוחה למקווה — תקרה מוארת עמידה בלחות",
  description:
    "תקרה מתוחה למקווה: עמידה ב-100% ללחות, חסינה לעובש, עם אפשרות לתקרה מוארת והדפס שמיים. פתרון תקרה ייעודי למקוואות עם אחריות מלאה.",
  alternates: { canonical: "/stretch-ceiling-mikveh" },
};

const faqs = [
  {
    q: "האם תקרה מתוחה מתאימה למקווה?",
    a: "כן. זהו אחד השימושים האידיאליים. היריעה אטומה לחלוטין למים ולחות, לא מפתחת עובש, ומתנקה בקלות. מקוואות רבים בישראל כבר עברו לתקרות מתוחות.",
  },
  {
    q: "מה קורה עם הלחות הגבוהה במקווה?",
    a: "יריעת PVC לא סופגת לחות כלל. אדי המים מתנקזים ומתייבשים. אין חדירה, אין נפיחות, אין קילוף — בניגוד לגבס, צבע או טיח.",
  },
  {
    q: "אפשר לעשות תקרה מוארת במקווה?",
    a: "כן. תקרה מוארת עם יריעה שקופה ותאורת LED מאחור היא פתרון פופולרי מאוד למקוואות — יוצרת אור רך ואחיד ללא גופי תאורה חשופים.",
  },
  {
    q: "אפשר הדפס שמיים על תקרה במקווה?",
    a: "כן. הדפס שמיים כחולים עם עננים על יריעה מוארת הוא הבחירה הנפוצה ביותר למקוואות. יוצר תחושת פתיחות ושלווה.",
  },
  {
    q: "כמה עולה תקרה מתוחה למקווה?",
    a: "תקרה מט פשוטה מ-₪179/מ״ר. תקרה מוארת עם הדפס — לפי הצעה מותאמת. צרו קשר לתמחור מדויק.",
  },
];

export default function MikvehPage() {
  return (
    <>
      <PageHero
        title="תקרה מתוחה למקווה — עמידה בלחות, מוארת, מעוצבת"
        subtitle="מקוואות חשופים ללחות קיצונית שהורסת תקרות גבס תוך שנים ספורות. תקרה מתוחה מ-PVC מציעה פתרון קבוע: אטימות מוחלטת, אפס עובש, תאורה מוארת אחידה, ואפשרות להדפס שמיים — הכל בהתקנה מהירה."
      />

      <Breadcrumbs
        items={[
          { label: "ראשי", href: "/" },
          { label: "תקרות מתוחות", href: "/stretch-ceilings" },
          { label: "תקרה מתוחה למקווה" },
        ]}
      />

      <ContentSection>
        <h2 className="text-h2-mobile md:text-h2-desktop">
          הבעיה: לחות שהורסת כל תקרה רגילה
        </h2>
        <p className="mt-4 text-body text-sky-muted">
          מקווה הוא סביבה עם לחות קיצונית — אדי מים רותחים, התעבות על
          משטחים, ומחזורי רטוב-יבש תכופים. תקרות גבס, טיח וצבע נכשלות
          בסביבה הזו תוך 1-3 שנים: עובש שחור, קילוף, כתמים ורטיבות קבועה.
          תקרה מתוחה מ-PVC לא מושפעת מלחות כלל — וזו הסיבה שמקוואות רבים
          בישראל עברו לפתרון הזה.
        </p>

        <h2 className="mt-12 text-h2-mobile md:text-h2-desktop">
          יתרונות תקרה מתוחה למקווה
        </h2>
        <FeatureGrid
          items={[
            {
              title: "עמידות מוחלטת בלחות",
              text: "יריעת PVC אטומה ב-100% למים ואדים. לא סופגת, לא מתנפחת, לא מתקלפת.",
            },
            {
              title: "אפס עובש",
              text: "משטח חלק שלא מאפשר צמיחת עובש או חיידקים. ניקוי פשוט במטלית.",
            },
            {
              title: "תקרה מוארת",
              text: "יריעה שקופה עם תאורת LED מאחור. אור אחיד ורך ללא גופי תאורה חשופים ללחות.",
            },
            {
              title: "הדפס שמיים",
              text: "הדפסת שמיים כחולים ועננים על יריעה מוארת — האפשרות הפופולרית ביותר למקוואות.",
            },
          ]}
        />
      </ContentSection>

      <ContentSection bg="light">
        <h2 className="text-h2-mobile md:text-h2-desktop">
          הפתרון הפופולרי: תקרה מוארת עם הדפס שמיים
        </h2>
        <p className="mt-4 text-body text-sky-muted">
          השילוב הנפוץ ביותר במקוואות:{" "}
          <Link href="/lighted-stretch-ceiling" className="text-sky-navy hover:underline">
            תקרה מוארת
          </Link>{" "}
          עם{" "}
          <Link href="/printed-stretch-ceiling" className="text-sky-navy hover:underline">
            הדפס שמיים כחולים ועננים
          </Link>
          . תאורת LED מפוזרת דרך היריעה המודפסת יוצרת אשליה של שמיים
          פתוחים — אפקט שמתאים במיוחד לאווירת המקווה ויוצר תחושת מרחב
          ושלווה.
        </p>

        <h2 className="mt-10 text-h2-mobile md:text-h2-desktop">
          מה חשוב לדעת לפני התקנה במקווה
        </h2>
        <p className="mt-4 text-body text-sky-muted">
          נדרשת וונטילציה תקינה בחלל — התקרה המתוחה פותרת את בעיית
          התקרה, אבל מערכת אוורור טובה עדיין חיונית לבריאות החלל.
          גופי תאורה חייבים להיות מוגני לחות (IP65 ומעלה). המערכת
          החשמלית חייבת להתאים לתקן חדרים רטובים. אנחנו מתאמים הכל
          מול החשמלאי באתר.
        </p>
      </ContentSection>

      {/* FAQ */}
      <section className="section-spacing">
        <div className="section-container max-w-prose">
          <h2 className="text-h2-mobile md:text-h2-desktop text-center">
            שאלות נפוצות — תקרה מתוחה למקווה
          </h2>
          <div className="mt-10 space-y-6">
            {faqs.map((f, i) => (
              <details
                key={i}
                className="group bg-white border border-sky-border p-5"
                open={i === 0}
              >
                <summary className="cursor-pointer text-h3-mobile md:text-h3-desktop list-none flex justify-between items-center">
                  {f.q}
                  <span className="text-sky-navy transition-transform group-open:rotate-45 text-xl mr-3">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-body text-sky-muted">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <ContentSection bg="light">
        <h2 className="text-h2-mobile md:text-h2-desktop">עמודים קשורים</h2>
        <ul className="mt-4 space-y-2 text-body">
          <li>
            <Link href="/stretch-ceiling-bathroom" className="text-sky-navy hover:underline">
              תקרה מתוחה לאמבטיה
            </Link>{" "}
            — פתרון דומה לחדר רחצה ביתי
          </li>
          <li>
            <Link href="/lighted-stretch-ceiling" className="text-sky-navy hover:underline">
              תקרה מוארת
            </Link>{" "}
            — תאורה אחידה דרך יריעה שקופה
          </li>
          <li>
            <Link href="/printed-stretch-ceiling" className="text-sky-navy hover:underline">
              תקרה עם הדפס
            </Link>{" "}
            — שמיים, עננים וכל תמונה אחרת
          </li>
          <li>
            <Link href="/stretch-ceilings-for-business" className="text-sky-navy hover:underline">
              תקרות לעסקים ומוסדות
            </Link>{" "}
            — פתרונות למוסדות ציבור
          </li>
          <li>
            <Link href="/pricing" className="text-sky-navy hover:underline">
              מחירים
            </Link>{" "}
            — מחירון ברור למ״ר
          </li>
        </ul>
      </ContentSection>

      <CTASection title="רוצים תקרה מתוחה למקווה?" />
    </>
  );
}

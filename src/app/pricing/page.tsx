import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { PageHero } from "@/components/page-hero";
import { CTASection } from "@/components/cta-section";
import { ContentSection } from "@/components/content-blocks";

export const metadata: Metadata = {
  title: "מחיר תקרה מתוחה למ״ר — מחשבון מחירים 2026",
  description:
    "מחירי תקרות מתוחות בישראל: MSD Premium מ-₪179/מ״ר, RENOLIT מ-₪249/מ״ר. המחיר כולל מדידה, ייצור, התקנה ואחריות. חישוב לפי שטח, סוג יריעה ותאורה.",
  alternates: { canonical: "/pricing" },
};

const tiers = [
  {
    name: "MSD Premium",
    price: "₪179",
    unit: "למ״ר",
    features: [
      "יריעת PVC איכותית",
      "מגוון צבעים וגימורים",
      "עמידות במים",
      "אחריות 10 שנים",
      "מדידה, ייצור, התקנה כלולים",
    ],
  },
  {
    name: "RENOLIT",
    price: "₪249",
    unit: "למ״ר",
    features: [
      "יריעה אירופית פרימיום",
      "עובי ועמידות מוגברים",
      "תקן אקולוגי אירופי",
      "אחריות 15 שנים",
      "מדידה, ייצור, התקנה כלולים",
    ],
    highlighted: true,
  },
];

export default function PricingPage() {
  return (
    <>
      <PageHero
        title="מחיר תקרה מתוחה — שקיפות מלאה"
        subtitle="מחירון ברור ופשוט ללא הפתעות. המחיר כולל חומר, ייצור, התקנה ואחריות — הכל במחיר אחד למ״ר."
        ctaText="צרו קשר להצעה"
      />

      <Breadcrumbs
        items={[
          { label: "ראשי", href: "/" },
          { label: "מחירים" },
        ]}
      />

      <section className="section-spacing">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {tiers.map((t) => (
              <div
                key={t.name}
                className={`p-8 border-2 ${
                  t.highlighted
                    ? "border-sky-navy bg-sky-navy/[0.02]"
                    : "border-sky-border"
                }`}
              >
                {t.highlighted && (
                  <span className="text-label text-sky-navy uppercase mb-3 block">
                    פרימיום
                  </span>
                )}
                <h2 className="text-h2-mobile md:text-h2-desktop">{t.name}</h2>
                <div className="mt-4">
                  <span className="text-4xl md:text-5xl font-black text-sky-navy">
                    {t.price}
                  </span>
                  <span className="text-sky-muted mr-2">{t.unit}</span>
                </div>
                <ul className="mt-6 space-y-3">
                  {t.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2 text-body text-sky-muted"
                    >
                      <span className="text-sky-navy mt-0.5">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContentSection bg="light">
        <h2 className="text-h2-mobile md:text-h2-desktop">מה משפיע על המחיר הסופי?</h2>
        <p className="mt-4 text-body text-sky-muted">
          שטח התקרה הוא הגורם העיקרי. מעבר לכך: מספר הפינות והחתכים, סוג
          הגימור (מט, מבריק, סאטן, הדפס), ופתרון התאורה. חללים עם עמודים,
          נישות או צורות לא סטנדרטיות עשויים לדרוש עבודת התאמה נוספת.
        </p>
        <p className="mt-4 text-body text-sky-muted">
          תוספות כמו{" "}
          <Link href="/stretch-ceiling-led-strip" className="text-sky-navy hover:underline">
            פסי LED
          </Link>
          ,{" "}
          <Link href="/stretch-ceiling-magnetic-track" className="text-sky-navy hover:underline">
            מסילות מגנטיות
          </Link>{" "}
          או{" "}
          <Link href="/printed-stretch-ceiling" className="text-sky-navy hover:underline">
            הדפס מותאם
          </Link>{" "}
          מתומחרות בנפרד.
        </p>

        <h2 className="mt-10 text-h2-mobile md:text-h2-desktop">מה כלול במחיר?</h2>
        <p className="mt-4 text-body text-sky-muted">
          מדידה מקצועית, ייצור בהתאמה אישית, פרופילי אלומיניום, חומרים,
          התקנה מקצועית, ניקיון באתר, ואחריות. אין תוספות נסתרות.
        </p>

        <h2 className="mt-10 text-h2-mobile md:text-h2-desktop">מה לא כלול?</h2>
        <p className="mt-4 text-body text-sky-muted">
          עבודות חשמל (הזזת נקודות חשמל, הוספת שקעים). רכישת גופי תאורה
          (ספוטים, פסי LED). פירוק תקרה קיימת אם נדרש. פריטים אלה מתומחרים
          בנפרד ומפורטים בהצעה.
        </p>
      </ContentSection>

      <ContentSection>
        <h2 className="text-h2-mobile md:text-h2-desktop">מחירים לפי חדר</h2>
        <p className="mt-4 text-body text-sky-muted">
          להלן הערכה גסה לחדרים נפוצים (MSD Premium, ללא תאורה מיוחדת):
        </p>
        <div className="mt-6 overflow-x-auto">
          <table className="w-full border-collapse text-body">
            <thead>
              <tr className="bg-sky-navy text-white">
                <th className="p-3 text-right font-semibold">חדר</th>
                <th className="p-3 text-right font-semibold">שטח ממוצע</th>
                <th className="p-3 text-right font-semibold">הערכת מחיר</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["אמבטיה", "4-6 מ״ר", "₪720-1,070"],
                ["מטבח", "8-12 מ״ר", "₪1,430-2,150"],
                ["חדר שינה", "12-16 מ״ר", "₪2,150-2,860"],
                ["סלון", "20-35 מ״ר", "₪3,580-6,270"],
              ].map(([room, area, price], i) => (
                <tr key={room} className={i % 2 === 0 ? "bg-white" : "bg-sky-light"}>
                  <td className="p-3 font-medium border border-sky-border">{room}</td>
                  <td className="p-3 text-sky-muted border border-sky-border">{area}</td>
                  <td className="p-3 text-sky-muted border border-sky-border">{price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-small text-sky-muted">
          * מחירים להערכה בלבד. המחיר הסופי נקבע לפי מדידה מדויקת.
        </p>
      </ContentSection>

      <ContentSection bg="light">
        <h2 className="text-h2-mobile md:text-h2-desktop">עמודים קשורים</h2>
        <ul className="mt-4 space-y-2 text-body">
          <li>
            <Link href="/stretch-ceiling-living-room" className="text-sky-navy hover:underline">תקרה מתוחה לסלון</Link>
          </li>
          <li>
            <Link href="/stretch-ceiling-bathroom" className="text-sky-navy hover:underline">תקרה מתוחה לאמבטיה</Link>
          </li>
          <li>
            <Link href="/stretch-ceiling-kitchen" className="text-sky-navy hover:underline">תקרה מתוחה למטבח</Link>
          </li>
          <li>
            <Link href="/lighted-stretch-ceiling" className="text-sky-navy hover:underline">תקרה מוארת</Link>
          </li>
          <li>
            <Link href="/stretch-ceiling-vs-drywall" className="text-sky-navy hover:underline">תקרה מתוחה או גבס — השוואת מחירים</Link>
          </li>
        </ul>
      </ContentSection>

      <CTASection
        title="רוצים הצעת מחיר מדויקת?"
        text="שלחו לנו את פרטי הפרויקט ונחזור עם הצעה תוך 24 שעות."
      />
    </>
  );
}

import { SEO } from "@/components/SEO";
import { PageHero } from "@/components/page-hero";
import { CTASection } from "@/components/cta-section";
import { IMAGES } from "@/lib/storage";

const projectImages = [
  { src: IMAGES.glossyHero, alt: "תקרה מתוחה מבריקה בסלון" },
  { src: IMAGES.glossyLiving, alt: "תקרה מתוחה עם תאורה בסלון" },
  { src: IMAGES.glossyBathroom, alt: "תקרה מתוחה באמבטיה" },
  { src: IMAGES.glossyKitchen, alt: "תקרה מתוחה במטבח" },
  { src: IMAGES.matte1, alt: "תקרה מתוחה מט" },
  { src: IMAGES.glossyDetail, alt: "תקרה מתוחה עם פס LED" },
  { src: IMAGES.printSky, alt: "תקרה מתוחה עם הדפס שמיים" },
  { src: IMAGES.glossyRoom, alt: "תקרה מתוחה בחדר מעוצב" },
  { src: IMAGES.glossyModern, alt: "תקרה מתוחה מודרנית" },
  { src: IMAGES.printWine, alt: "תקרה מתוחה עם הדפס דקורטיבי" },
  { src: IMAGES.glossyAngle, alt: "תקרה מתוחה בזווית" },
  { src: IMAGES.glossyDark, alt: "תקרה מתוחה כהה" },
];

export default function ProjectsPage() {
  return (
    <>
      <SEO title="פרויקטים — תקרות מתוחות שהתקנו" description="גלריית פרויקטים של תקרות מתוחות שהותקנו על ידי SkyView — סלונים, אמבטיות, משרדים וחללים מסחריים. לפני ואחרי." canonical="/projects" />
      <PageHero title="הפרויקטים שלנו" subtitle="מבחר פרויקטים אמיתיים שהתקנו ללקוחות פרטיים ועסקיים בכל רחבי ישראל. כל פרויקט כולל מדידה, ייצור, התקנה ואחריות." />
      <section className="section-spacing">
        <div className="section-container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {projectImages.map((img, i) => (
              <div key={i} className="overflow-hidden rounded-2xl">
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTASection title="רוצים לראות עוד?" text="צרו קשר ונשלח לכם דוגמאות מפרויקטים דומים." />
    </>
  );
}

import { Link } from "react-router-dom";

interface PageHeroProps {
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaHref?: string;
  image?: string;
  imageAlt?: string;
}

export function PageHero({
  title,
  subtitle,
  ctaText = "קבלו הצעת מחיר",
  ctaHref = "/contact",
  image,
  imageAlt,
}: PageHeroProps) {
  return (
    <section className="pt-28 pb-16 md:pt-36 md:pb-20 bg-sky-light">
      <div className="section-container">
        <div className={image ? "grid grid-cols-1 lg:grid-cols-2 gap-10 items-center" : "max-w-prose"}>
          <div>
            <h1 className="text-h1-mobile md:text-h1-desktop text-sky-graphite">
              {title}
            </h1>
            <p className="mt-5 text-body-lg text-sky-muted leading-relaxed">
              {subtitle}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link to={ctaHref} className="btn-primary">
                {ctaText}
              </Link>
              <Link to="/pricing" className="btn-secondary">
                למחשבון המחיר
              </Link>
            </div>
          </div>
          {image && (
            <div className="overflow-hidden rounded-2xl">
              <img
                src={image}
                alt={imageAlt || title}
                loading="eager"
                className="w-full h-[300px] md:h-[400px] object-cover"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

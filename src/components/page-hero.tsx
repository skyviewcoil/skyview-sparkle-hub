import { Link } from "react-router-dom";

interface PageHeroProps {
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaHref?: string;
}

export function PageHero({
  title,
  subtitle,
  ctaText = "קבלו הצעת מחיר",
  ctaHref = "/contact",
}: PageHeroProps) {
  return (
    <section className="pt-28 pb-16 md:pt-36 md:pb-20 bg-sky-light">
      <div className="section-container max-w-prose">
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
    </section>
  );
}

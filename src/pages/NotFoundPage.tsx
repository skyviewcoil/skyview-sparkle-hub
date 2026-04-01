import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";

export default function NotFoundPage() {
  return (
    <>
      <SEO title="404 — העמוד לא נמצא" description="העמוד שחיפשתם לא נמצא באתר SkyView." canonical="/404" />
      <section className="pt-28 pb-20 md:pt-40 md:pb-28">
        <div className="section-container text-center max-w-prose">
          <h1 className="text-h1-mobile md:text-h1-desktop">404</h1>
          <p className="mt-4 text-body-lg text-sky-muted">העמוד שחיפשתם לא נמצא.</p>
          <div className="mt-8">
            <Link to="/" className="btn-primary">חזרה לדף הבית</Link>
          </div>
        </div>
      </section>
    </>
  );
}

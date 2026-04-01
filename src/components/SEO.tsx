import { Helmet } from "react-helmet-async";
import { SITE_URL, SITE_NAME } from "@/lib/site-config";

interface SEOProps {
  title: string;
  description: string;
  canonical: string;
}

export function SEO({ title, description, canonical }: SEOProps) {
  const fullTitle = title.includes("SkyView") ? title : `${title} | ${SITE_NAME}`;
  const fullCanonical = `${SITE_URL}${canonical}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullCanonical} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="he_IL" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
  );
}

/**
 * Site URL resolution:
 * - In production: uses NEXT_PUBLIC_SITE_URL env var, falls back to skyview.co.il
 * - Ensures canonicals always point to the real production domain
 */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://skyview.co.il";

export const SITE_NAME = "SkyView";
export const PHONE = "052-808-2988";
export const PHONE_INTL = "+972-52-808-2988";
export const EMAIL = "skyview.co.il@gmail.com";
export const INSTAGRAM = "@skyview.co.il";

export const SUPABASE_STORAGE =
  "https://zedtzqtkoggtagjnpqpa.supabase.co/storage/v1/object/public";

export const NAV_LINKS = [
  { label: "ראשי", href: "/" },
  { label: "תקרות מתוחות", href: "/stretch-ceilings" },
  { label: "מחירים", href: "/pricing" },
  { label: "פרויקטים", href: "/projects" },
  { label: "צור קשר", href: "/contact" },
] as const;

export const FOOTER_SERVICE_LINKS = [
  { label: "תקרה מתוחה לסלון", href: "/stretch-ceiling-living-room" },
  { label: "תקרה מתוחה לאמבטיה", href: "/stretch-ceiling-bathroom" },
  { label: "תקרה מתוחה למטבח", href: "/stretch-ceiling-kitchen" },
  { label: "תקרה מתוחה למקווה", href: "/stretch-ceiling-mikveh" },
  { label: "תקרה מוארת", href: "/lighted-stretch-ceiling" },
  { label: "תקרה אקוסטית", href: "/acoustic-stretch-ceiling" },
  { label: "תקרה עם הדפס", href: "/printed-stretch-ceiling" },
  { label: "פס LED", href: "/stretch-ceiling-led-strip" },
  { label: "בריסול", href: "/barrisol" },
] as const;

export const FOOTER_INFO_LINKS = [
  { label: "מדריך תקרות מתוחות", href: "/stretch-ceiling-guide" },
  { label: "תקרה מתוחה או גבס", href: "/stretch-ceiling-vs-drywall" },
  { label: "תיקון תקרה מתוחה", href: "/stretch-ceiling-repair" },
  { label: "תקרות לעסקים", href: "/stretch-ceilings-for-business" },
  { label: "לאדריכלים", href: "/stretch-ceilings-for-architects" },
  { label: "אודות", href: "/about" },
] as const;

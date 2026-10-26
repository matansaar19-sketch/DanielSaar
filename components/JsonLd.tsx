import { siteOperator } from "@/lib/legal/site-operator";
import { getSiteUrl } from "@/lib/site-url";

const siteUrl = getSiteUrl();

/** Google Business Profile (maps CID) — ties the site to the business listing. */
const GOOGLE_BUSINESS_URL = "https://www.google.com/maps?cid=11414381619267108298";
const INSTAGRAM_URL = "https://www.instagram.com/danielsaarstory/";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "דניאל סער",
        description: "כתיבת ספר חיים וסיפור אישי, וכתיבת תוכן לעסקים",
        inLanguage: "he-IL",
        publisher: { "@id": `${siteUrl}/#business` },
      },
      {
        "@type": "ProfessionalService",
        "@id": `${siteUrl}/#business`,
        name: "דניאל סער",
        description:
          "כתיבת ספר חיים וסיפור אישי, וכתיבת תוכן לעסקים: אתרים, עמודי נחיתה ותסריטים לסושיאל.",
        url: siteUrl,
        image: `${siteUrl}/og-image.png`,
        telephone: `+${siteOperator.phoneE164}`,
        address: {
          "@type": "PostalAddress",
          addressLocality: "תל אביב",
          addressCountry: "IL",
        },
        areaServed: { "@type": "Country", name: "Israel" },
        founder: { "@id": `${siteUrl}/#person` },
        sameAs: [GOOGLE_BUSINESS_URL, INSTAGRAM_URL],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "שירותי כתיבה",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "כתיבת ספר חיים וסיפור אישי",
                description: "הפיכת זיכרונות וחוויות חיים לספר כתוב: שימור מורשת משפחתית ומתנה משמעותית.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "כתיבת תוכן לעסקים",
                description: "תוכן לאתרים, עמודי נחיתה, תסריטים לסושיאל וכתיבה שיווקית.",
              },
            },
          ],
        },
      },
      {
        "@type": "Person",
        "@id": `${siteUrl}/#person`,
        name: "דניאל סער",
        jobTitle: "כותבת ועורכת תוכן",
        url: siteUrl,
        worksFor: { "@id": `${siteUrl}/#business` },
        sameAs: [INSTAGRAM_URL],
        knowsLanguage: "he",
      },
    ],
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}

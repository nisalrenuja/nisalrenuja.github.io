import { PROFILE, SERVICES, FAQS } from "./data";

export const SITE_URL = "https://nisalrenuja.github.io";
export const OG_IMAGE = `${SITE_URL}/images/profile-pic.jpg`;

/** Absolute URL for a route; schema.org `@id`s and canonicals both need one. */
export const url = (path = "/") => new URL(path, SITE_URL).toString();

const person = {
  "@type": "Person",
  "@id": `${SITE_URL}/#person`,
  name: PROFILE.name,
  givenName: PROFILE.firstName,
  familyName: PROFILE.lastName,
  jobTitle: PROFILE.title,
  description: PROFILE.pitch,
  email: PROFILE.contact.email,
  telephone: PROFILE.contact.phone,
  url: SITE_URL,
  image: OG_IMAGE,
  sameAs: [PROFILE.socials.github, PROFILE.socials.linkedin],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dehiwala",
    addressRegion: "Western Province",
    addressCountry: "LK",
  },
  alumniOf: [
    {
      "@type": "EducationalOrganization",
      name: "University of Moratuwa",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Moratuwa",
        addressCountry: "LK",
      },
    },
    {
      "@type": "EducationalOrganization",
      name: "Curtin University",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Perth",
        addressCountry: "AU",
      },
    },
  ],
  knowsAbout: [
    "Artificial Intelligence",
    "Machine Learning",
    "Computer Vision",
    "Large Language Models",
    "Cloud Architecture",
    "AWS",
    "Kubernetes",
    "Microservices",
    "DevOps",
    "Go",
    "TypeScript",
    "React",
    "Next.js",
    "Python",
    "Data Engineering",
  ],
  hasCredential: [
    "AWS Academy Graduate – Cloud Data Pipeline Builder",
    "AWS Academy Graduate – Data Engineering",
    "AWS Academy Graduate – Microservices and CI/CD Pipeline Builder",
  ].map((name) => ({
    "@type": "EducationalOccupationalCredential",
    name,
    credentialCategory: "certificate",
    recognizedBy: { "@type": "Organization", name: "Amazon Web Services" },
  })),
};

const professionalService = {
  "@type": "ProfessionalService",
  "@id": `${SITE_URL}/#service`,
  name: `${PROFILE.name}, ${PROFILE.title}`,
  description: PROFILE.pitch,
  url: SITE_URL,
  image: OG_IMAGE,
  founder: { "@id": `${SITE_URL}/#person` },
  email: PROFILE.contact.email,
  telephone: PROFILE.contact.phone,
  priceRange: "$$",
  areaServed: { "@type": "Place", name: "Worldwide" },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Colombo",
    addressRegion: "Western Province",
    addressCountry: "LK",
  },
  serviceType: SERVICES.map((s) => s.title),
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Engineering services",
    itemListElement: SERVICES.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.title,
        description: service.promise,
      },
    })),
  },
};

const website = {
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: PROFILE.name,
  description: PROFILE.pitch,
  publisher: { "@id": `${SITE_URL}/#person` },
  inLanguage: "en",
};

const faqPage = {
  "@type": "FAQPage",
  "@id": `${SITE_URL}/#faq`,
  mainEntity: FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

/** Identity and offer. Safe on every page, rendered once from the root layout. */
export const identityJsonLd = {
  "@context": "https://schema.org",
  "@graph": [person, professionalService, website],
};

/**
 * FAQ rich results. Only valid on a page where the questions and answers are
 * actually visible, so this belongs to the landing page alone, not the layout.
 */
export const faqJsonLd = {
  "@context": "https://schema.org",
  "@graph": [faqPage],
};

/** Breadcrumb trail for a sub-page, e.g. breadcrumbJsonLd([["About", "/about"]]). */
export function breadcrumbJsonLd(trail: [name: string, path: string][]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [["Home", "/"] as [string, string], ...trail].map(
      ([name, path], index) => ({
        "@type": "ListItem",
        position: index + 1,
        name,
        item: url(path),
      })
    ),
  };
}

/** Renders a JSON-LD block. Next dedupes nothing here, so use one per page. */
export function jsonLdProps(data: unknown) {
  return {
    type: "application/ld+json",
    dangerouslySetInnerHTML: { __html: JSON.stringify(data) },
  } as const;
}

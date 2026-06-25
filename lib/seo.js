import { siteConfig } from "@/config/site";

function unique(values) {
  return [...new Set(values.filter(Boolean))];
}

function normalizePath(path = "") {
  if (!path) return "/";
  return path.startsWith("/") ? path : `/${path}`;
}

export function constructMetadata({
  title = siteConfig.name,
  description = siteConfig.description,
  image = siteConfig.ogImage,
  imageAlt = `${siteConfig.name} social preview`,
  keywords = [],
  noIndex = false,
  path = "",
  type = "website",
} = {}) {
  const canonicalPath = normalizePath(path);
  const url = new URL(canonicalPath, siteConfig.url).toString();
  const imageUrl = new URL(image, siteConfig.url).toString();
  const twitterImageUrl = new URL(siteConfig.twitterImage, siteConfig.url).toString();

  return {
    metadataBase: new URL(siteConfig.url),
    title: {
      default: title === siteConfig.name ? title : `${title} | ${siteConfig.name}`,
      template: `%s | ${siteConfig.name}`,
    },
    description,
    keywords: unique([...siteConfig.keywords, ...keywords]),
    authors: [{ name: siteConfig.name }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    category: "business",
    alternates: {
      canonical: url,
      languages: {
        "en-NG": url,
      },
    },
    openGraph: {
      type,
      locale: siteConfig.locale,
      url,
      title: title === siteConfig.name ? title : `${title} | ${siteConfig.name}`,
      description,
      siteName: siteConfig.name,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: title === siteConfig.name ? title : `${title} | ${siteConfig.name}`,
      description,
      images: [
        {
          url: twitterImageUrl,
          alt: imageAlt,
        },
      ],
      site: siteConfig.socialHandles.twitter,
      creator: siteConfig.socialHandles.twitter,
    },
    icons: {
      icon: [
        { url: "/favicon.ico", sizes: "any" },
        { url: "/icon.svg", type: "image/svg+xml" },
      ],
      apple: [
        { url: "/apple-icon.svg", type: "image/svg+xml" },
      ],
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      nocache: noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        "max-snippet": -1,
        "max-image-preview": "large",
        "max-video-preview": -1,
      },
    },
    verification: {
      google: siteConfig.verification?.google || undefined,
      yandex: siteConfig.verification?.yandex || undefined,
    },
    other: {
      "format-detection": "telephone=no, email=no, address=no",
    },
  };
}

export function buildOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteConfig.url}#organization`,
    name: siteConfig.name,
    legalName: siteConfig.name,
    url: siteConfig.url,
    logo: new URL(siteConfig.logo, siteConfig.url).toString(),
    image: [
      new URL(siteConfig.logo, siteConfig.url).toString(),
      new URL(siteConfig.ogImage, siteConfig.url).toString(),
    ],
    description: siteConfig.description,
    sameAs: unique([
      siteConfig.links.twitter,
      siteConfig.links.linkedin,
      siteConfig.links.instagram,
    ]),
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: siteConfig.contact.email,
        telephone: siteConfig.contact.phone,
        areaServed: "NG",
        availableLanguage: ["en"],
      },
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "2 Isheri Road, Ojudu-Berger",
      addressLocality: "Lagos",
      addressCountry: "NG",
    },
  };
}

export function buildWebsiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}#website`,
    url: siteConfig.url,
    name: siteConfig.name,
    description: siteConfig.description,
    publisher: {
      "@id": `${siteConfig.url}#organization`,
    },
    inLanguage: "en-NG",
  };
}

export function buildContactPageJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": `${siteConfig.url}/contact#webpage`,
    url: `${siteConfig.url}/contact`,
    name: `Contact | ${siteConfig.name}`,
    description: "Get in touch with ADESA HQ for partnership opportunities, media inquiries, investor questions, or general questions about our builder-operator approach.",
    isPartOf: {
      "@id": `${siteConfig.url}#website`,
    },
    about: {
      "@id": `${siteConfig.url}#organization`,
    },
  };
}

export function buildWebPageJsonLd({ title, description, path }) {
  const pageUrl = `${siteConfig.url}${normalizePath(path)}`;
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${pageUrl}#webpage`,
    url: pageUrl,
    name: title,
    description: description,
    isPartOf: {
      "@id": `${siteConfig.url}#website`,
    },
    about: {
      "@id": `${siteConfig.url}#organization`,
    },
  };
}

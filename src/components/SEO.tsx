import { useEffect } from "react";

const SITE_NAME = "Harmonia KBT";
const SITE_URL = "https://harmonia-kbt.se";

type JsonLd = Record<string, unknown> | Array<Record<string, unknown>>;

type SEOProps = {
  title: string;
  description: string;
  path?: string;
  type?: string;
  image?: string;
  lang?: string;
  jsonLd?: JsonLd;
};

const upsertMeta = (
  selector: string,
  attributes: Record<string, string>,
  content: string,
) => {
  let element = document.head.querySelector<HTMLMetaElement>(selector);

  if (!element) {
    element = document.createElement("meta");
    Object.entries(attributes).forEach(([key, value]) => {
      element!.setAttribute(key, value);
    });
    document.head.appendChild(element);
  }

  element.setAttribute("content", content);
};

const upsertLink = (
  selector: string,
  attributes: Record<string, string>,
  href: string,
) => {
  let element = document.head.querySelector<HTMLLinkElement>(selector);

  if (!element) {
    element = document.createElement("link");
    Object.entries(attributes).forEach(([key, value]) => {
      element!.setAttribute(key, value);
    });
    document.head.appendChild(element);
  }

  element.setAttribute("href", href);
};

const normalizePath = (path: string) => {
  if (!path || path === "/") {
    return "";
  }

  return path.startsWith("/") ? path : `/${path}`;
};

const SEO = ({
  title,
  description,
  path = "/",
  type = "website",
  image = "/favicon.png",
  lang = "sv",
  jsonLd,
}: SEOProps) => {
  useEffect(() => {
    const normalizedPath = normalizePath(path);
    const canonicalUrl = `${SITE_URL}${normalizedPath}`;
    const pageTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;
    const imageUrl = image.startsWith("http") ? image : `${SITE_URL}${image}`;

    document.title = pageTitle;
    document.documentElement.lang = lang;

    upsertMeta('meta[name="description"]', { name: "description" }, description);
    upsertMeta('meta[name="robots"]', { name: "robots" }, "index, follow");
    upsertMeta('meta[property="og:title"]', { property: "og:title" }, pageTitle);
    upsertMeta('meta[property="og:description"]', { property: "og:description" }, description);
    upsertMeta('meta[property="og:type"]', { property: "og:type" }, type);
    upsertMeta('meta[property="og:url"]', { property: "og:url" }, canonicalUrl);
    upsertMeta('meta[property="og:site_name"]', { property: "og:site_name" }, SITE_NAME);
    upsertMeta('meta[property="og:locale"]', { property: "og:locale" }, "sv_SE");
    upsertMeta('meta[property="og:image"]', { property: "og:image" }, imageUrl);
    upsertMeta('meta[name="twitter:card"]', { name: "twitter:card" }, "summary");
    upsertMeta('meta[name="twitter:title"]', { name: "twitter:title" }, pageTitle);
    upsertMeta('meta[name="twitter:description"]', { name: "twitter:description" }, description);
    upsertMeta('meta[name="twitter:image"]', { name: "twitter:image" }, imageUrl);
    upsertLink('link[rel="canonical"]', { rel: "canonical" }, canonicalUrl);

    let jsonLdElement: HTMLScriptElement | null = null;

    if (jsonLd) {
      jsonLdElement = document.createElement("script");
      jsonLdElement.type = "application/ld+json";
      jsonLdElement.text = JSON.stringify(jsonLd);
      jsonLdElement.setAttribute("data-seo-json-ld", normalizedPath || "/");
      document.head.appendChild(jsonLdElement);
    }

    return () => {
      if (jsonLdElement?.parentNode) {
        jsonLdElement.parentNode.removeChild(jsonLdElement);
      }
    };
  }, [description, image, jsonLd, lang, path, title, type]);

  return null;
};

export { SITE_NAME, SITE_URL };
export default SEO;

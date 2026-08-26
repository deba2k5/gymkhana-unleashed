import { useEffect } from "react";
import { DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL } from "./seoConfig";

interface SeoProps {
  title: string;
  description: string;
  path: string;
  keywords?: string;
  image?: string;
}

function upsertMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertLink(rel: string, href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

/**
 * Sets per-route document title, meta description/keywords, canonical URL,
 * and Open Graph/Twitter tags. Client-side only (no SSR), so search engines
 * that execute JS (Googlebot does) pick these up on crawl/render.
 */
const Seo = ({ title, description, path, keywords, image }: SeoProps) => {
  useEffect(() => {
    const url = `${SITE_URL}${path}`;
    const ogImage = image || DEFAULT_OG_IMAGE;

    document.title = title;

    upsertMeta("name", "description", description);
    if (keywords) upsertMeta("name", "keywords", keywords);

    upsertLink("canonical", url);

    upsertMeta("property", "og:title", title);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:url", url);
    upsertMeta("property", "og:site_name", SITE_NAME);
    upsertMeta("property", "og:image", ogImage);

    upsertMeta("name", "twitter:title", title);
    upsertMeta("name", "twitter:description", description);
    upsertMeta("name", "twitter:image", ogImage);
  }, [title, description, path, keywords, image]);

  return null;
};

export default Seo;

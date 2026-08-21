import { siteConfig } from "@/config/site";

const INDEXABLE_ROUTES = [
  "/",
  "/about",
  "/structure",
  "/governance",
  "/subsidiaries",
  "/careers",
  "/contact",
  "/privacy",
  "/terms",
];

export default function sitemap() {
  return INDEXABLE_ROUTES.map((path) => ({
    url: path === "/" ? siteConfig.url : new URL(path, siteConfig.url).toString(),
  }));
}

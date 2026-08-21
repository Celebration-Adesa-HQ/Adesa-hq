import { expect, test } from "@playwright/test";

const canonicalOrigin = "https://www.adesahq.com";
const publicRoutes = [
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

test.describe("Google crawl and indexing signals", () => {
  test.skip(({ viewport }) => viewport?.width !== 390, "One SEO pass is sufficient");

  test("every public page is indexable and self-canonical", async ({ page }) => {
    for (const route of publicRoutes) {
      const response = await page.goto(route, { waitUntil: "domcontentloaded" });
      expect(response?.status()).toBe(200);

      const expectedCanonical =
        route === "/" ? canonicalOrigin : new URL(route, canonicalOrigin).toString();
      await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
        "href",
        expectedCanonical,
      );
      await expect(page.locator('meta[name="robots"][content*="noindex"]')).toHaveCount(0);

      const title = await page.title();
      expect(title.match(/ADESA HQ/gi)?.length ?? 0).toBe(1);
    }
  });

  test("robots and sitemap expose only canonical public URLs", async ({ request }) => {
    const robotsResponse = await request.get("/robots.txt");
    expect(robotsResponse.status()).toBe(200);
    const robots = await robotsResponse.text();
    expect(robots).toContain("Allow: /");
    expect(robots).toContain(`Sitemap: ${canonicalOrigin}/sitemap.xml`);

    const sitemapResponse = await request.get("/sitemap.xml");
    expect(sitemapResponse.status()).toBe(200);
    const sitemap = await sitemapResponse.text();
    const locations = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(
      ([, location]) => location,
    );

    expect(locations).toEqual(
      publicRoutes.map((route) =>
        route === "/" ? canonicalOrigin : new URL(route, canonicalOrigin).toString(),
      ),
    );
    expect(sitemap).not.toContain("http://adesahq.com");
  });

  test("legacy and non-canonical homepage URLs permanently redirect", async ({ request }) => {
    const legacyResponse = await request.get("/?p=98", { maxRedirects: 0 });
    expect(legacyResponse.status()).toBe(308);
    const legacyLocation = new URL(
      legacyResponse.headers().location,
      "http://127.0.0.1:3000",
    );
    expect(legacyLocation.searchParams.has("p")).toBe(false);

    const apexResponse = await request.get("/about", {
      headers: {
        "x-forwarded-host": "adesahq.com",
        "x-forwarded-proto": "https",
      },
      maxRedirects: 0,
    });
    expect(apexResponse.status()).toBe(308);
    expect(apexResponse.headers().location).toBe(`${canonicalOrigin}/about`);
  });

  test("unknown URLs return a genuine non-indexable 404", async ({ page }) => {
    const response = await page.goto("/definitely-not-a-real-route", {
      waitUntil: "domcontentloaded",
    });
    expect(response?.status()).toBe(404);
    await expect(page.locator('meta[name="robots"]')).toHaveCount(1);
    await expect(page.locator('meta[name="robots"]')).toHaveAttribute(
      "content",
      /noindex/,
    );
  });
});

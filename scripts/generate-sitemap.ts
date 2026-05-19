import { writeFileSync } from "fs";
import { resolve } from "path";

const BASE_URL = "https://amandaaa-xlee30-ap-econ-note.lovable.app";

interface SitemapEntry {
  path: string;
  changefreq?: "weekly" | "monthly" | "yearly";
  priority?: string;
}

const entries: SitemapEntry[] = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/about", changefreq: "monthly", priority: "0.7" },
  { path: "/contact", changefreq: "yearly", priority: "0.5" },
  { path: "/resources", changefreq: "monthly", priority: "0.7" },
  { path: "/terms", changefreq: "yearly", priority: "0.3" },
  { path: "/micro/practice", changefreq: "monthly", priority: "0.8" },
  { path: "/macro/practice", changefreq: "monthly", priority: "0.8" },
  ...[1, 2, 3, 4, 5, 6].map((i) => ({ path: `/micro/${i}`, changefreq: "monthly" as const, priority: "0.8" })),
  ...[2, 3, 4, 5, 6].map((i) => ({ path: `/macro/${i}`, changefreq: "monthly" as const, priority: "0.8" })),
];

const xml = [
  `<?xml version="1.0" encoding="UTF-8"?>`,
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
  ...entries.map((e) =>
    [
      `  <url>`,
      `    <loc>${BASE_URL}${e.path}</loc>`,
      e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
      e.priority ? `    <priority>${e.priority}</priority>` : null,
      `  </url>`,
    ].filter(Boolean).join("\n")
  ),
  `</urlset>`,
].join("\n");

writeFileSync(resolve("public/sitemap.xml"), xml);
console.log(`sitemap.xml written (${entries.length} entries)`);
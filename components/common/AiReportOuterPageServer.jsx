import React from "react";
import styles from "./AiReportOuterPage.module.css";
import fs from "fs/promises";
import path from "path";
import Papa from "papaparse";

function sanitizeSnippet(v, max) {
  if (!v) return "";
  const s = v.toString().replace(/\s+/g, " ").trim();
  if (!max) return s;
  return s.length > max ? s.slice(0, max - 1) + "…" : s;
}

function slugify(text) {
  return (text || "")
    .toString()
    .normalize("NFKD")
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .toLowerCase();
}

// Case-insensitive, whitespace-tolerant field accessor for heterogeneous CSV headers
function getField(row, candidateKeys) {
  if (!row) return undefined;
  const normalize = (k) => (k || "").toString().trim().toLowerCase();
  const wanted = new Set((candidateKeys || []).map(normalize));
  for (const key of Object.keys(row)) {
    if (wanted.has(normalize(key))) {
      return row[key];
    }
  }
  return undefined;
}

// Soft card background palette (light tints)
const CARD_BACKGROUNDS = [
  "#FEF8E7",
  "#E9F8F1",
  "#F3F0FF",
  "#FFF0F2",
  "#EEF6FF",
  "#F4FBEE",
  "#FFF7FB",
  "#EFFFFA",
];

export default async function AiReportOuterPageServer({
  csvPath = "/assets/ai-search-reports/software-and-saas.csv",
  basePath = "/ai-search-query-industry-reports-and-benchmarking/software-and-saas",
}) {
  // Read CSV from public folder on the server
  const absolute = path.join(process.cwd(), "public", csvPath.replace(/^\/?/, ""));
  const csv = await fs.readFile(absolute, "utf8");
  const parsed = Papa.parse(csv, { header: true, skipEmptyLines: "greedy", transformHeader: (h) => h.trim() });
  const rows = (parsed.data || [])
    .filter((r) => {
      const titleCandidate = getField(r, ["query", "title", "question"]);
      return r && !!titleCandidate;
    })
    .map((r, i) => {
      const title = getField(r, ["query", "title", "question"]);
      const summary = sanitizeSnippet(
        getField(r, ["explanation", "key takeaways"]) || "",
        null
      );
      // Prefer a simple two-tag system: Summary (brand analytics/dominant brand) or Provider Gap (provider/platform gap)
      const hasBrand = getField(r, ["brand analytics", "dominant brand"]);
      const hasGap = getField(r, ["provider gap", "platform gap"]);
      const tag = (hasBrand ? "Summary" : "") || (hasGap ? "Provider Gap" : "");
      const bg = CARD_BACKGROUNDS[i % CARD_BACKGROUNDS.length];
      const slug = slugify(title);
      return { title, summary, tag, bg, slug };
    });

  return (
    <div className="section panel bg-gray-25 dark:bg-gray-900">
      <div className="container max-w-xl">
        <div className={styles.masonry}>
          {rows.map((c, idx) => (
            <div className={styles.masonryItem} key={idx}>
              <article
                className={`post type-post panel vstack gap-2 rounded lg:rounded-2 overflow-hidden ${styles.aiCard}`}
                style={{ "--card-bg": c.bg }}
              >
                <figure className="m-0">
                  <div className={styles.banner} />
                </figure>
                <header className="panel vstack gap-2 p-3 md:p-4">
                  <h5 className={`h6 sm:h5 m-0 ${styles.title}`}>{c.title}</h5>
                  {c.tag && (
                    <span className={`fs-7 fw-medium py-narrow px-2 rounded-pill w-fit-content ${c.tag === "Summary" ? "bg-lime text-gray-900" : "bg-dark text-white"}`}>
                      {c.tag}
                    </span>
                  )}
                  {c.summary && <p className="fs-7 opacity-80 m-0">{c.summary}</p>}
                  <div className="hstack gap-1 mt-2">
                    <a className="btn btn-sm btn-primary text-white" href={`${basePath}/${c.slug}`}><span>View Detailed Report</span></a>
                  </div>
                  <div className={`text-end fs-7 opacity-60 mt-1 ${styles.meta}`}>Last Accessed: September 09, 2025</div>
                </header>
              </article>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}



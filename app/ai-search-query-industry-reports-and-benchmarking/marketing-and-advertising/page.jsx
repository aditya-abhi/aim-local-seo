import React from "react";
import AiReportOuterPageServer from "@/components/common/AiReportOuterPageServer";

export const metadata = {
  title: "Marketing & Advertising AI Search Reports",
};

export default function Page() {
  return (
    <main className="uni-body panel bg-white text-tertiary-900">
      {/* Hero (hard-coded) */}
      <section className="section panel position-relative overflow-hidden" style={{ minHeight: "56vh" }}>
        <video
          src="/assets/videos/chat-gpt-google-question.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(180deg, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.55) 100%)",
          }}
        />
        <div className="container max-w-xl" style={{ position: "relative" }}>
          <div className="panel vstack items-center text-center gap-2 md:gap-3 py-8 md:py-10 xl:py-12">
            <h1 className="h3 sm:h1 xl:display-6 m-0 text-white">Marketing & Advertising AI Search Reports</h1>
            <p className="fs-6 sm:fs-5 text-white opacity-90 m-0">
              Discover what your potential users are asking about Marketing & Advertising companies across ChatGPT, Google, and AI-powered search platforms
            </p>
            <div className="container mt-4">
              <div className="row justify-center g-2 lg:g-3 items-stretch">
                <div className="col-12 lg:col-4">
                  <div className="panel vstack items-center text-center gap-1 p-4 rounded lg:rounded-2" style={{ background: "#012328" }}>
                    <div className="fw-bold m-0" style={{ color: "var(--bs-lime, #aef359)", fontSize: "clamp(24px, 4vw, 48px)" }}>63</div>
                    <div className="fs-6 text-white opacity-90">Queries Analyzed</div>
                  </div>
                </div>
                <div className="col-12 lg:col-4">
                  <div className="panel vstack items-center text-center gap-1 p-4 rounded lg:rounded-2" style={{ background: "#012328" }}>
                    <div className="fw-bold m-0" style={{ color: "var(--bs-lime, #aef359)", fontSize: "clamp(24px, 4vw, 48px)" }}>356</div>
                    <div className="fs-6 text-white opacity-90">Brands Analyzed</div>
                  </div>
                </div>
                <div className="col-12 lg:col-4">
                  <div className="panel vstack items-center text-center gap-1 p-4 rounded lg:rounded-2" style={{ background: "#012328" }}>
                    <div className="fw-bold m-0" style={{ color: "var(--bs-lime, #aef359)", fontSize: "clamp(24px, 4vw, 48px)" }}>Sep, 2025</div>
                    <div className="fs-6 text-white opacity-90">Data Accessed</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Server-rendered variant for performance */}
      {/* csvPath is relative to /public */}
      {/* basePath used for building detail URLs */}
      <AiReportOuterPageServer csvPath="/assets/ai-search-reports/marketing-and-advertising.csv" basePath="/ai-search-query-industry-reports-and-benchmarking/marketing-and-advertising" />
    </main>
  );
}




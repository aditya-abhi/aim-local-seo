"use client";

import { pricingNew } from "@/data/pricing";
import { useParallax } from "react-scroll-parallax";
import Image from "next/image";
import React from "react";
import Link from "next/link";
export default function Pricing() {
  const parallax = useParallax({
    scale: [0.85, 1.1],
  });

  return (
    <div
      id="pricing_tiers"
      className="pricing-tiers section panel overflow-hidden"
    >
      <div className="section-outer panel py-6 lg:py-8 xl:py-10 lg:mx-2 lg:rounded-2 bg-tertiary-700">
        <div className="container ">
          <div className="section-inner panel">
            <div className="panel vstack items-center gap-4 sm:gap-6 xl:gap-8">
              <div
                className="heading vstack gap-2 panel max-w-800px mx-auto text-center items-center"
                data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
              >
                <span className="fs-7 fw-bold py-narrow px-2 border border-tertiary-100 dark:border-white rounded-pill text-white max-w-fc">
                  KEY DIFFERENCES
                </span>
                <h2 className="title h3 lg:h2 xl:h1 m-0 text-white">
                  Difference between <span className="text-primary">SEO</span>{" "}
                  and <span className="text-primary">GEO</span>
                </h2>
                <p className="fs-6 text-secondary xl:fs-5 mt-5">
                  Traditional SEO focuses on optimizing content for Google’s
                  search algorithm—primarily through keyword matching,
                  backlinks, and structured metadata. But Generative Engine
                  Optimization (GEO) is a new frontier. It’s designed for
                  AI-driven platforms like ChatGPT, Google AI Overview,
                  Perplexity, and others that generate answers instead of
                  serving up links.
                </p>
                <p className="fs-6 text-secondary xl:fs-5">
                  These generative engines don’t rely on classic ranking
                  signals. Instead, they look for structured, context-rich, and
                  machine-readable content to synthesize responses. That means
                  the strategies that worked for traditional SEO don’t always
                  apply here.
                </p>
                <p className="fs-6 text-secondary xl:fs-5">
                  To stay visible in this new landscape, brands need to rethink
                  how they present information—optimizing not just for search,
                  but for how AI interprets, summarizes, and cites their
                  content.
                </p>
              </div>
              <div
                className="uc-video-scene"
                ref={parallax.ref}
                data-anime="scale: [1.2, 1]; opacity: [0, 1]; easing: easeOutCubic; duration: 750; delay: 500;"
              >
                <div
                  className="panel max-w-100 mt-2 rounded lg:rounded-1-5 xl:rounded-2 overflow-hidden"
                  data-anime="onscroll: .hero-header; onscroll-trigger: 0.5; translateY: [-80, 0]; scale: [0.8, 1]; easing: linear;"
                >
                  <img
                    src="/assets/images/features/test-1.jpg"
                    alt="The differences between SEO and GEO"
                  />
                </div>
              </div>
              <div
                className="heading vstack gap-2 panel max-w-800px mx-auto text-center items-center"
                data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
              >
                <h3 className="title h4 lg:h3 xl:h2 m-0 text-white">
                  Course on Answer Engine Optimization / AI Search Optimization
                  / LLM SEO
                </h3>
                <p className="fs-6 text-secondary xl:fs-5 mt-5">
                  Some individuals refer to ChatGPT, Google AI Overview, and
                  Perplexity AI as "Answer Engines" or "AI Search Engines,"
                  viewing them as mere synonyms for Generative Engines.
                  Consequently, this course can be seen as equivalent to a
                  Course on Answer Engine Optimization (AEO), AI Search
                  Optimization or LLM SEO.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

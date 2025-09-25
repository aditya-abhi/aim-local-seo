import { featuresHome, geoProblems } from "@/data/features";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Features2() {
  return (
    <div
      id="key_features"
      className="key-features section panel overflow-hidden uc-dark"
    >
      <div className="section-outer panel py-6 md:py-8 lg:pt-10 lg:pb-9 lg:mx-2 lg:rounded-2 bg-tertiary-700 text-white text-opacity-70">
        <div className="container sm:max-w-lg">
          <div className="section-inner panel">
            <div
              className="panel vstack items-center gap-2 xl:gap-3 sm:max-w-600px lg:max-w-700px xl:max-w-xl mx-auto text-center"
              data-anime="onview: -200; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
            >
              <h2 className="h3 lg:h2 m-0">
                Search Has Changed -{" "}
                <span className="text-primary">FOREVER</span>{" "}
              </h2>
              <p className="fs-6 xl:fs-5 xl:px-8">
                In today’s digital landscape, users no longer rely solely on
                traditional search engines like Google to find information.
                Instead, platforms like{" "}
                <strong>ChatGPT, Google AI Overview,</strong> and{" "}
                <strong>Perplexity AI</strong> are becoming the first place
                people turn to for answers. These platforms don’t show a list of
                links. They generate direct responses. And that shift changes
                everything.
              </p>
              {/* <h3 className="h5 lg:h4 m-0">
                Welcome to the era of{" "}
                <span className="text-primary">
                  Generative Engine Optimization (GEO).
                </span>
              </h3> */}
              <h3 className="h4 lg:h3 m-0 mt-4">
                Why Traditional SEO Falls Short in 2025
              </h3>

              <div className="container container-100">
                <div
                  className="row child-cols-12 sm:child-cols-6 lg:child-cols-4 xl:child-cols-3 items-center justify-center col-match g-3"
                  data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
                >
                  {geoProblems.map((feature, index) => (
                    <div key={index}>
                      <div
                        className={`feature-item panel p-4 rounded-2 hover:bg-primary dark:text-white hover:text-white hover:scale-105 duration-150 transition-all ${feature.backgroundColor}`}
                      >
                        <div className="vstack panel min-h-250px">
                          <div className="vstack items-center text-center justify-between gap-2 h-100">
                            <div className="cstack w-96px h-96px rounded-circle mt-2 bg-gray-900 dark:bg-white bg-opacity-5 dark:bg-opacity-15">
                              <i className={`icon icon-4 ${feature.icon}`} />
                            </div>
                            <div className="panel">
                              <div className="vstack gap-1">
                                <h3 className="title h5 m-0 text-inherit">
                                  {feature.title}
                                </h3>
                                <p className="desc fs-6 opacity-70">
                                  {feature.description}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* <p className="fs-6 xl:fs-5 xl:px-8 m-0">
                SEO was built for a clickable web—rank high on Google, earn
                traffic. But generative engines like ChatGPT, Gemini, and
                Google’s AI Overviews don’t link out, they answer directly. That
                shift means visibility no longer depends on ranking alone.
              </p>
              <p className="fs-6 xl:fs-5 xl:px-8 m-0">
                You could be #1 on Google and still invisible in AI responses.
                Backlinks and meta tags don’t sway generative citations.
                Instead, these engines favor structured, context-rich content
                they can interpret and reuse—making Generative Engine
                Optimization the new frontier.
              </p> */}

              <h2 className="h3 lg:h2 mt-4">
                What is{" "}
                <span className="text-primary">
                  Generative Engine Optimization (GEO)
                </span>{" "}
              </h2>
              <iframe
                className="w-100 rounded-2 overflow-hidden lg:min-h-500px ratio-16x9"
                src="https://www.youtube.com/embed/on2ddUyVtbA?si=XK5cNP7lgia3xHB0"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
              <p className="fs-6 xl:fs-5 xl:px-8 m-0 mt-6">
                Generative Engine Optimization (GEO) is the practice of
                optimizing your content to appear in AI-generated responses—not
                just traditional search engine listings. As large language
                models (LLMs) like ChatGPT, Gemini, and Claude become primary
                gateways to information, GEO ensures your content is
                discoverable, quotable, and trusted by these systems. It’s not
                about chasing rankings; it’s about being the source AI chooses
                to cite when answering user queries.
              </p>
              <p className="fs-6 xl:fs-5 xl:px-8 m-0">
                GEO focuses on structuring information for chunk-level
                retrieval, embedding clarity and precision that machines can
                interpret, and signaling authoritativeness that AI models
                recognize. Whether you're a brand, publisher, or creator,
                mastering GEO means adapting your content for a future where
                visibility depends on how well you communicate with the
                algorithms that now speak to your audience.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

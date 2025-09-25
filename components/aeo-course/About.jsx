import { aeoProblems } from "@/data/features";
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
                Welcome to the <br />
                <span className="text-primary">Answer-First Era</span>{" "}
              </h2>
              <p className="fs-6 xl:fs-5 xl:px-8">
                In today’s digital landscape, users expect instant,{" "}
                <b>direct answers</b>, not long lists of blue links. Platforms
                like <b>Google AI Overviews, Perplexity AI</b>, and{" "}
                <b>ChatGPT</b> are transforming how people discover information.
                These <b>Answer Engines</b> don’t just rank pages; they{" "}
                <b>generate responses</b> that aim to fully solve user queries.
              </p>
              {/* <h3 className="h5 lg:h4 m-0">
                Welcome to the era of{" "}
                <span className="text-primary">
                  Answer Engine Optimization (AEO).
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
                  {aeoProblems.map((feature, index) => (
                    <div key={index}>
                      <div
                        className={`feature-item panel p-4 rounded-2 hover:bg-primary dark:text-white hover:text-white hover:scale-105 duration-150 transition-all ${feature.backgroundColor}`}
                      >
                        <div className="vstack panel min-h-250px">
                          <div className="vstack items-center text-center justify-between gap-2 h-100">
                            <div className="cstack w-96px h-96px rounded-circle mt-2 bg-gray-700 dark:bg-white bg-opacity-5 dark:bg-opacity-15">
                              <i className={`icon icon-4 ${feature.icon}`} />
                            </div>
                            <div className="panel hover:text-dark">
                              <div className="vstack gap-1">
                                <h3 className="title h5 m-0">
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
              {/* 
              <p className="fs-6 xl:fs-5 xl:px-8 m-0">
                Traditional SEO focused on a click-driven web rank high on
                Google, attract visitors, and earn traffic. But answer engines
                like Google AI Overviews, Perplexity AI, and ChatGPT skip the
                links and deliver direct answers. That changes the rules:
                visibility no longer hinges on ranking alone.
              </p>
              <p className="fs-6 xl:fs-5 xl:px-8 m-0">
                You could top Google search results yet remain invisible in AI
                responses. Meta tags, backlinks, and keywords don’t guarantee
                citations. Instead, these platforms reward well-structured,
                context-rich content that they can analyze and reuse, making
                Answer Engine Optimization the essential strategy today.
              </p> */}

              <h2 className="h3 lg:h2 mt-4">
                What is{" "}
                <span className="text-primary">
                  Answer Engine Optimization (AEO)?
                </span>{" "}
              </h2>
              <iframe
                className="w-100 rounded-2 overflow-hidden min-h-300px lg:min-h-500px ratio ratio-16x9"
                src="https://www.youtube.com/embed/on2ddUyVtbA?si=XK5cNP7lgia3xHB0"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
              <p className="fs-6 xl:fs-5 xl:px-8 m-0 mt-6">
                Answer Engine Optimization (AEO) is the practice of designing
                and structuring content specifically to be discovered, cited,
                and used by AI-powered answer platforms like Google AI
                Overviews, ChatGPT, and Perplexity AI. Unlike traditional SEO,
                which aims to rank web pages for clicks, AEO focuses on being
                the source that AI systems reference when generating answers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

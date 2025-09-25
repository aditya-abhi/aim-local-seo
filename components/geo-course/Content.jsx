import React from "react";
import Image from "next/image";

export default function Content() {
  return (
    <div id="main_features" className="main-features section panel">
      <div className="section-outer panel py-6 xl:py-9">
        <div className="container sm:max-w-md lg:max-w-lg xl:max-w-xl">
          <div className="panel text-center items-center justify-center mb-6 lg:mb-8 xl:mb-10">
            <h2 className="h3 lg:h2">
              7-Day{" "}
              <span className="text-tertiary dark:text-primary">
                Generative Engine Optimization
              </span>{" "}
              Course Structure
            </h2>
          </div>
          <div className="section-inner panel">
            <div className="panel vstack gap-4 sm:gap-6 lg:gap-8">
              <div
                className="feature-item panel"
                data-anime="onview: -200; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 100;"
              >
                <div className="row child-cols col-match justify-between g-4 lg:g-8 xl:g-10">
                  <div className="col-12 sm:col-6 order-0 lg:order-1">
                    <div className="panel w-100">
                      <Image
                        src="/assets/images/features/geo-course-1.webp"
                        width={780}
                        height={728}
                        alt="Introduction to GEO & Generative Engines"
                        className="rounded-2"
                      />
                    </div>
                  </div>
                  <div className="col-12 sm:col-6 order-1 lg:order-0">
                    <div className="panel vstack justify-between gap-4 sm:gap-6 h-100">
                      <div>
                        <div className="panel vstack gap-2 lg:mt-6">
                          <h3 className="h4 lg:h4 xl:h3 m-0">
                            Day 1: Introduction to GEO & Generative Engines
                          </h3>
                          <p className="fs-6 xl:fs-5 opacity-70 dark:opacity-80 mt-2">
                            <strong>What will you Learn:</strong>
                          </p>
                          <ul className="fs-6 xl:fs-5 opacity-70 dark:opacity-80">
                            <li>
                              Why GEO matters in the era of zero-click AI search
                            </li>
                            <li>
                              Differences between traditional search engines and
                              LLMs
                            </li>
                            <li>The anatomy of AI-generated answers</li>
                          </ul>
                          <p className="fs-6 xl:fs-5 opacity-70 dark:opacity-80">
                            <strong>
                              By the End of Day 1, You’ll Be Able To:
                            </strong>
                          </p>
                          <ul className="fs-6 xl:fs-5 opacity-70 dark:opacity-80">
                            <li>
                              Define GEO and its role in digital marketing
                            </li>
                            <li>
                              Articulate how generative engines like ChatGPT
                              source content
                            </li>
                            <li>
                              Identify where your current SEO efforts fall short
                              for AI visibility
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <hr
                className="border-gray-100 dark:border-opacity-15 m-0 opacity-100"
                data-anime="onview: -200; width: [0, '100%']; easing: easeInOutExpo; duration: 750; delay: 100;"
              />
            </div>
            {/* Day 2 */}
            <div className="panel vstack mt-4 lg:mt-6 mb-4 lg:mb-6">
              <div
                className="feature-item panel"
                data-anime="onview: -200; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 100;"
              >
                <div className="row child-cols col-match justify-between g-4 lg:g-8 xl:g-10 mb-4 lg:mb-6">
                  <div className="col-12 sm:col-6 order-0 lg:order-1">
                    <div className="panel w-100">
                      <Image
                        src="/assets/images/features/geo-course-2.webp"
                        width={780}
                        height={728}
                        alt="Introduction to GEO & Generative Engines"
                        className="rounded-2"
                      />
                    </div>
                  </div>
                  <div className="col-12 sm:col-6 order-1 lg:order-0">
                    <div className="panel vstack justify-center gap-4 sm:gap-6 h-100">
                      <div>
                        <div className="panel vstack lg:mt-6">
                          <h3 className="h4 lg:h4 xl:h3 m-0">
                            Day 2: Types of Generative Engines
                          </h3>
                          <p className="fs-6 xl:fs-5 opacity-70 dark:opacity-80 mt-2">
                            <strong>What will you Learn:</strong>
                          </p>
                          <ul className="fs-6 xl:fs-5 opacity-70 dark:opacity-80 mt-0">
                            <li>
                              Overview of leading engines: ChatGPT, Gemini,
                              Claude, Perplexity
                            </li>
                            <li>
                              How each engine differs in citation behavior and
                              content sourcing
                            </li>
                            <li>
                              Growing role of APIs and retrieval-augmented
                              generation (RAG)
                            </li>
                          </ul>
                          <p className="fs-6 xl:fs-5 opacity-70 dark:opacity-80">
                            <strong>
                              By the End of Day 2, You’ll Be Able To:
                            </strong>
                          </p>
                          <ul className="fs-6 xl:fs-5 opacity-70 dark:opacity-80">
                            <li>
                              Categorize top AI engines by type and capability
                            </li>
                            <li>
                              Evaluate where your brand appears (or doesn’t) in
                              generative tools
                            </li>
                          </ul>
                          <p className="fs-6 xl:fs-5 opacity-70 dark:opacity-80">
                            <strong>Tools Introduced:</strong>
                          </p>
                          <ul className="fs-6 xl:fs-5 opacity-70 dark:opacity-80">
                            <li>Poe by Quora</li>
                            <li>Perplexity Labs Search View</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <hr
                className="border-gray-100 dark:border-opacity-15 opacity-100"
                data-anime="onview: -200; width: [0, '100%']; easing: easeInOutExpo; duration: 750; delay: 100;"
              />
            </div>
            {/* Day 3 */}
            <div className="panel vstack mt-4 lg:mt-6 mb-4 lg:mb-6">
              <div
                className="feature-item panel"
                data-anime="onview: -200; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 100;"
              >
                <div className="row child-cols col-match justify-between g-4 lg:g-8 xl:g-10 mb-4 lg:mb-6">
                  <div className="col-12 sm:col-6 order-0 lg:order-1">
                    <div className="panel w-100">
                      <Image
                        src="/assets/images/features/geo-course-3.webp"
                        width={780}
                        height={728}
                        alt="Introduction to GEO & Generative Engines"
                        className="rounded-2"
                      />
                    </div>
                  </div>
                  <div className="col-12 sm:col-6 order-1 lg:order-0">
                    <div className="panel vstack justify-center gap-4 sm:gap-6 h-100">
                      <div>
                        <div className="panel vstack lg:mt-6">
                          <h3 className="h4 lg:h4 xl:h3 m-0">
                            Day 3: SEO vs LLM SEO vs GEO
                          </h3>
                          <p className="fs-6 xl:fs-5 opacity-70 dark:opacity-80 mt-2">
                            <strong>What will you Learn:</strong>
                          </p>
                          <ul className="fs-6 xl:fs-5 opacity-70 dark:opacity-80 mt-0">
                            <li>What traditional SEO still gets right</li>
                            <li>Why LLM-SEO is a bridge—not a destination</li>
                            <li>
                              How GEO rewrites the rules for ranking in
                              generative platforms
                            </li>
                          </ul>
                          <p className="fs-6 xl:fs-5 opacity-70 dark:opacity-80">
                            <strong>
                              By the End of Day 3, You’ll Be Able To:
                            </strong>
                          </p>
                          <ul className="fs-6 xl:fs-5 opacity-70 dark:opacity-80">
                            <li>
                              Differentiate between the three optimization
                              models
                            </li>
                            <li>
                              Start auditing your content for LLM compatibility
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <hr
                className="border-gray-100 dark:border-opacity-15 opacity-100"
                data-anime="onview: -200; width: [0, '100%']; easing: easeInOutExpo; duration: 750; delay: 100;"
              />
            </div>
            {/* Day 4 */}
            <div className="panel vstack mt-4 lg:mt-6 mb-4 lg:mb-6">
              <div
                className="feature-item panel"
                data-anime="onview: -200; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 100;"
              >
                <div className="row child-cols col-match justify-between g-4 lg:g-8 xl:g-10 mb-4 lg:mb-6">
                  <div className="col-12 sm:col-6 order-0 lg:order-1">
                    <div className="panel w-100">
                      <Image
                        src="/assets/images/features/geo-course-4.webp"
                        width={780}
                        height={728}
                        alt="Introduction to GEO & Generative Engines"
                        className="rounded-2"
                      />
                    </div>
                  </div>
                  <div className="col-12 sm:col-6 order-1 lg:order-0">
                    <div className="panel vstack justify-center gap-4 sm:gap-6 h-100">
                      <div>
                        <div className="panel vstack lg:mt-6">
                          <h3 className="h4 lg:h4 xl:h3 m-0">
                            Day 4: Practical GEO Techniques That Work
                          </h3>
                          <p className="fs-6 xl:fs-5 opacity-70 dark:opacity-80 mt-2">
                            <strong>What will you Learn:</strong>
                          </p>
                          <ul className="fs-6 xl:fs-5 opacity-70 dark:opacity-80 mt-0">
                            <li>
                              Fixing crawlability issues using structured data
                            </li>
                            <li>Reddit as a citation amplifier for ChatGPT</li>
                            <li>
                              How to format text for chunk-level retrieval
                            </li>
                          </ul>
                          <p className="fs-6 xl:fs-5 opacity-70 dark:opacity-80">
                            <strong>
                              By the End of Day 4, You’ll Be Able To:
                            </strong>
                          </p>
                          <ul className="fs-6 xl:fs-5 opacity-70 dark:opacity-80">
                            <li>Restructure your pages for AI readability</li>
                            <li>
                              Surface your content on relevant third-party
                              sources
                            </li>
                          </ul>
                          <p className="fs-6 xl:fs-5 opacity-70 dark:opacity-80">
                            <strong>Tools Introduced:</strong>
                          </p>
                          <ul className="fs-6 xl:fs-5 opacity-70 dark:opacity-80">
                            <li>Screaming Frog for AI-focused audits</li>
                            <li>Reddit + Perplexity thread tracking</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <hr
                className="border-gray-100 dark:border-opacity-15 opacity-100"
                data-anime="onview: -200; width: [0, '100%']; easing: easeInOutExpo; duration: 750; delay: 100;"
              />
            </div>
            {/* Day 5 */}
            <div className="panel vstack mt-4 lg:mt-6 mb-4 lg:mb-6">
              <div
                className="feature-item panel"
                data-anime="onview: -200; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 100;"
              >
                <div className="row child-cols col-match justify-between g-4 lg:g-8 xl:g-10 mb-4 lg:mb-6">
                  <div className="col-12 sm:col-6 order-0 lg:order-1">
                    <div className="panel w-100">
                      <Image
                        src="/assets/images/features/geo-course-5.webp"
                        width={780}
                        height={728}
                        alt="Introduction to GEO & Generative Engines"
                        className="rounded-2"
                      />
                    </div>
                  </div>
                  <div className="col-12 sm:col-6 order-1 lg:order-0">
                    <div className="panel vstack justify-center gap-4 sm:gap-6 h-100">
                      <div>
                        <div className="panel vstack lg:mt-6">
                          <h3 className="h4 lg:h4 xl:h3 m-0">
                            Day 5: Creating Future-Proof Content
                          </h3>
                          <p className="fs-6 xl:fs-5 opacity-70 dark:opacity-80 mt-2">
                            <strong>What will you Learn:</strong>
                          </p>
                          <ul className="fs-6 xl:fs-5 opacity-70 dark:opacity-80 mt-0">
                            <li>
                              Using data and statistics to enhance content
                              credibility
                            </li>
                            <li>
                              Evergreen content formats that AIs keep citing
                            </li>
                            <li>
                              Collaborating with journalists and media outlets
                              for trust signals
                            </li>
                          </ul>
                          <p className="fs-6 xl:fs-5 opacity-70 dark:opacity-80">
                            <strong>
                              By the End of Day 5, You’ll Be Able To:
                            </strong>
                          </p>
                          <ul className="fs-6 xl:fs-5 opacity-70 dark:opacity-80">
                            <li>
                              Produce AI-trusted content with measurable shelf
                              life
                            </li>
                            <li>
                              Integrate news relevance and journalistic tone
                              into GEO content
                            </li>
                          </ul>
                          <p className="fs-6 xl:fs-5 opacity-70 dark:opacity-80">
                            <strong>Downloads:</strong>
                          </p>
                          <ul className="fs-6 xl:fs-5 opacity-70 dark:opacity-80">
                            <li>GEO-Ready Content Checklist</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <hr
                className="border-gray-100 dark:border-opacity-15 opacity-100"
                data-anime="onview: -200; width: [0, '100%']; easing: easeInOutExpo; duration: 750; delay: 100;"
              />
            </div>
            {/* Day 6 */}
            <div className="panel vstack mt-4 lg:mt-6 mb-4 lg:mb-6">
              <div
                className="feature-item panel"
                data-anime="onview: -200; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 100;"
              >
                <div className="row child-cols col-match justify-between g-4 lg:g-8 xl:g-10 mb-4 lg:mb-6">
                  <div className="col-12 sm:col-6 order-0 lg:order-1">
                    <div className="panel w-100">
                      <Image
                        src="/assets/images/features/geo-course-6.webp"
                        width={780}
                        height={728}
                        alt="Strategies for Zero-Click Optimization"
                        className="rounded-2"
                      />
                    </div>
                  </div>
                  <div className="col-12 sm:col-6 order-1 lg:order-0">
                    <div className="panel vstack justify-center gap-4 sm:gap-6 h-100">
                      <div>
                        <div className="panel vstack lg:mt-6">
                          <h3 className="h4 lg:h4 xl:h3 m-0">
                            Day 6: Strategies for Zero-Click Optimization
                          </h3>
                          <p className="fs-6 xl:fs-5 opacity-70 dark:opacity-80 mt-2">
                            <strong>What will you Learn:</strong>
                          </p>
                          <ul className="fs-6 xl:fs-5 opacity-70 dark:opacity-80 mt-0">
                            <li>
                              Writing quotable content with embedded statistics
                              and quotes
                            </li>
                            <li>
                              Optimizing for autocomplete prompts and featured
                              snippets
                            </li>
                            <li>Using LLM feedback and fine-tuning signals</li>
                          </ul>
                          <p className="fs-6 xl:fs-5 opacity-70 dark:opacity-80">
                            <strong>
                              By the End of Day 6, You’ll Be Able To:
                            </strong>
                          </p>
                          <ul className="fs-6 xl:fs-5 opacity-70 dark:opacity-80">
                            <li>
                              Increase your chances of being the quoted source
                            </li>
                            <li>Optimize for prompts before they’re typed</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <hr
                className="border-gray-100 dark:border-opacity-15 opacity-100"
                data-anime="onview: -200; width: [0, '100%']; easing: easeInOutExpo; duration: 750; delay: 100;"
              />
            </div>
            {/* Day 7 */}
            <div className="panel vstack mt-4 lg:mt-6 mb-4 lg:mb-6">
              <div
                className="feature-item panel"
                data-anime="onview: -200; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 100;"
              >
                <div className="row child-cols col-match justify-between g-4 lg:g-8 xl:g-10">
                  <div className="col-12 sm:col-6 order-0 lg:order-1">
                    <div className="panel w-100">
                      <Image
                        src="/assets/images/features/geo-course-7.webp"
                        width={780}
                        height={728}
                        alt="Strategies for Zero-Click Optimization"
                        className="rounded-2"
                      />
                    </div>
                  </div>
                  <div className="col-12 sm:col-6 order-1 lg:order-0">
                    <div className="panel vstack justify-center gap-4 sm:gap-6 h-100">
                      <div>
                        <div className="panel vstack lg:mt-6">
                          <h3 className="h4 lg:h4 xl:h3 m-0">
                            Day 7: Crafting Your GEO Roadmap
                          </h3>
                          <p className="fs-6 xl:fs-5 opacity-70 dark:opacity-80 mt-2">
                            <strong>What will you Learn:</strong>
                          </p>
                          <ul className="fs-6 xl:fs-5 opacity-70 dark:opacity-80 mt-0">
                            <li>How to build your GEO implementation plan</li>
                            <li>
                              Evaluating visibility KPIs and AI brand monitoring
                            </li>
                            <li>Final live Q&A and roadmap presentation</li>
                          </ul>
                          <p className="fs-6 xl:fs-5 opacity-70 dark:opacity-80">
                            <strong>
                              By the End of Day 7, You’ll Be Able To:
                            </strong>
                          </p>
                          <ul className="fs-6 xl:fs-5 opacity-70 dark:opacity-80">
                            <li>Launch a custom, measurable GEO strategy</li>
                            <li>Access your certificate of completion</li>
                          </ul>
                          <p className="fs-6 xl:fs-5 opacity-70 dark:opacity-80">
                            <strong>Bonus:</strong>
                          </p>
                          <ul className="fs-6 xl:fs-5 opacity-70 dark:opacity-80">
                            <li>GEO Audit Template & Reporting Tools</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

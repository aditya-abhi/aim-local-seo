"use client";
import React from "react";
import Sidebar from "./sidebars/Sidebar";
import Image from "next/image";
import AudioPlayer from "./sidebars/AudioPlayer";
import TableOfContentsServer from "./sidebars/TableOfContentsServer";
import RightSideBottom from "./sidebars/RightSideBottom";
import RightSideTop from "./sidebars/RightSideTop";
import Toc from "./Toc";
import { Gallery, Item } from "react-photoswipe-gallery";

export default function GEOLeaderboard() {
  return (
    <div className="section panel mr-5">
      <div className="container container-full mx-3">
        <div className="panel py-4 lg:py-6 xl:py-8">
          <div className="row child-cols-12 ">
            <div className="sm:col-12 md:col-12 lg:col-6 order-1 mb-3">
              <div
                className="uc-main panel"
                role="main"
                style={{ minHeight: "120vh" }}
              >
                <div className="panel vstack gap-3 lg:gap-4 xl:gap-5 mr-3">
                  <Gallery>
                    <div
                      className="post-content panel fs-6 md:fs-5 ml-2"
                      data-uc-lightbox="animation: scale"
                    >
                      <p className="mt-3">
                        If you would like to know how to implement generative
                        engine optimization for your brand or clients or how to
                        improve your content and brand visibility on AI-powered
                        Searches.
                      </p>
                      <p className="mt-3">
                        AIM GEO Leaderboard is the world’s first and most
                        updated leaderboard for all generative engine
                        optimization techniques.{" "}
                      </p>
                      <h2 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                        World’s Largest Collection of Most Effective Generative
                        Engine Optimization Techniques
                      </h2>
                      <div className="text-center">
                        <h3 className="h6">Disclaimer: </h3>
                        <p className="mt-3">
                          The effectiveness of these techniques may vary as AI
                          algorithms are subject to change. Always prioritize
                          creating genuinely useful and original content. The
                          knowledge cutoff dates for various AI models (e.g.,
                          GPT-4: April 2023, GPT-3.5: January 2022) should be
                          considered when implementing these strategies.
                        </p>
                      </div>
                      <h3 class="mt-3">Good SEO Is Winning Half the Battle</h3>
                      <p>
                        While traditional SEO remains important, its role has
                        shifted in the age of generative engine optimization.{" "}
                      </p>
                      <p className="mt-3">
                        AI Monitor can suggest properties in order to improve
                        your AIM Score (the most accepted bench for the
                        effectiveness of Generative Engine Optimization
                        techniques.)
                      </p>
                      <p className="mt-3">
                        <a
                          href="https://getaimonitor.com/how-good-seo-impact-geo-a-comprehensive-guide/"
                          aria-label="Link to How Good SEO Impact GEO | A Comprehensive Guide for 2025"
                          target="_blank"
                          className="text-blue"
                        >
                          Learn more.
                        </a>{" "}
                      </p>

                      <h3 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                        Optimize AI Bot Crawlability
                      </h3>
                      <p className="mt-3">
                        63% of Websites in our test data fail on one or more of
                        these factors.
                      </p>
                      <p className="mt-3">
                        AI Monitor has identified a set of 12 factors that
                        ensure your website is AI-friendly.
                      </p>
                      <p className="mt-3">
                        <a
                          href="https://getaimonitor.com/fix-ai-crawlability-and-boost-your-sites-performance-in-search-engines/"
                          aria-label="Link to How to Fix AI Crawlability and Boost Your Site’s Performance in Search Engines"
                          target="_blank"
                          className="text-blue"
                        >
                          Learn more.
                        </a>
                      </p>
                      <h3 className="mt-3">
                        Collaborate with Industry-focused Influencers
                      </h3>
                      <p className="mt-3">
                        Collaborating with the right influencers can
                        significantly impact AI-driven search rankings and
                        greatly assist in generative engine optimization. AI
                        monitor helps you discover the right person for your
                        niche and budget.
                      </p>

                      {/* target link not replaced */}
                      <p className="mt-3">
                        <a
                          href="https://getaimonitor.com/ai-search-domination-why-pr-is-your-secret-weapon/"
                          aria-label="link to AI Search Domination: Why PR is Your Secret Weapon"
                          target="_blank"
                          className="text-blue"
                        >
                          Learn more.
                        </a>
                      </p>
                      <h3 className="mt-3">
                        Establish Authority and Credibility
                      </h3>
                      <p className="mt-3">
                        This technique focuses on enhancing the credibility of
                        your content by incorporating well-established
                        practices. Using credible citations from authoritative
                        sources helps build trust with your audience.
                      </p>
                      <p className="mt-3">
                        <a
                          href="https://getaimonitor.com/strategic-citations-technique-3-for-generative-engine-optimization-geo-mastery-series-episode-11/"
                          aria-label="Link to ategic Citations: Technique #3 for Generative Engine Optimization (GEO) Mastery Series | Episode 11 | Conquer AI Search Podcast"
                          target="_blank"
                          className="text-blue"
                        >
                          Learn more.
                        </a>
                      </p>
                      <h3 className="mt-3">
                        Enhance Reviews on Review and E-commerce Platforms
                      </h3>
                      <p className="mt-3">
                        Platforms such as Amazon, Walmart, and independent
                        review platforms are frequently cited in generative
                        search results, including by Amazon Rufus, ultimately
                        influencing consumer decisions. This technique is
                        especially effective for product searches.
                      </p>
                      <p className="mt-3">
                        <a
                          href="https://getaimonitor.com/why-online-reviews-are-now-the-most-powerful-ranking-signal-in-ai-search/"
                          aria-label="Link to Why Online Reviews Are Now the Most Powerful Ranking Signal in AI Search
"
                          target="_blank"
                          className="text-blue"
                        >
                          Learn more.
                        </a>
                      </p>
                      <h3 className="mt-3">Expand Contextual Relevance</h3>
                      <p className="mt-3">
                        This approach leverages the power of long-tail semantic
                        keywords and conversational phrases that reflect the way
                        people naturally search for information.
                      </p>
                      <p className="mt-3">
                        <a
                          href="https://getaimonitor.com/target-long-tail-keywords-for-ai-optimization/"
                          aria-label="Link to Why Long-Tail Keywords Are Your Secret Weapon in the Age of AI Search"
                          target="_blank"
                          className="text-blue"
                        >
                          Learn more.
                        </a>
                      </p>
                      <h3 className="mt-3">Traditional PR and Branding</h3>
                      <p className="mt-3">
                        This technique emphasizes the use of press releases,
                        thought leadership articles, and public relations
                        campaigns to shape public perception.
                      </p>
                      <p className="mt-3">
                        <a
                          href="https://getaimonitor.com/media-partnership-a-strategic-boost-for-generative-engine-optimization-geo/"
                          aria-label="Link to News & Media Partnership: A Strategic Boost for Generative Engine Optimization (GEO) in 2025"
                          target="_blank"
                          className="text-blue"
                        >
                          Learn more.
                        </a>
                      </p>
                      <h3 className="mt-3">Leverage Wikipedia</h3>
                      <p className="mt-3">
                        This technique involves collaborating with experienced
                        editors who understand the platform’s guidelines.
                      </p>
                      {/* <p className="mt-3"><a href="#" aria-label="" target="_blank" className="text-blue">Learn more.</a></p> */}
                      <h3 className="mt-3">
                        Publish Long-Term Assets such as Books
                      </h3>
                      <p className="mt-3">
                        Consider publishing books or in-depth guides under
                        open-source licenses to establish your expertise and
                        increase your online footprint.
                      </p>
                      <p className="mt-3">
                        <a
                          href="https://getaimonitor.com/how-good-seo-impact-geo-a-comprehensive-guide/"
                          aria-label="Link to How Good SEO Impact GEO | A Comprehensive Guide for 2025
"
                          target="_blank"
                          className="text-blue"
                        >
                          {" "}
                          Learn more.
                        </a>
                      </p>
                      {/*  */}
                    </div>
                  </Gallery>
                </div>
              </div>
            </div>
            {/* <hr className="w-100 m-0 d-block mt-4 lg:mt-6 xl:mt-8 " /> */}
            <div className="lg:col-3 order-2 lg:order-0 sticky-element3 sm:mt-3">
              <AudioPlayer />
              <span className="">
                <TableOfContentsServer />
              </span>
            </div>
            <div className="d-none lg:d-block lg:col-3 order-2 lg:order-2 sticky-element3">
              <RightSideTop />
              <RightSideBottom />
            </div>
            {/* <div className="d-block lg:d-none">
              <Toc />
            </div> */}
          </div>
          {/* <hr className="w-100 m-0 d-block mt-4 lg:mt-6 xl:mt-8" /> */}
          <div className="post-footer panel vstack sm:hstack gap-3 justify-between justifybetween border-top py-4 mt-4">
            <ul className="nav-x gap-narrow text-primary">
              <li>
                <span className="text-black dark:text-white me-narrow">
                  Tags:
                </span>
              </li>
              <li>
                <a href="#" className="gap-0">
                  Marketing
                  <span className="text-black dark:text-white">,</span>
                </a>
              </li>
              <li>
                <a href="#" className="gap-0">
                  Strategies
                  <span className="text-black dark:text-white">,</span>
                </a>
              </li>
              <li>
                <a href="#" className="gap-0">
                  Boost <span className="text-black dark:text-white">,</span>
                </a>
              </li>
              <li>
                <a href="#" className="gap-0">
                  Business
                </a>
              </li>
            </ul>
            <ul className="post-share-icons nav-x gap-narrow">
              <li className="me-1">
                <span className="text-black dark:text-white">Share:</span>
              </li>
              <li>
                <a
                  className="btn btn-md btn-outline-gray-100 w-32px lg:w-40px h-32px lg:h-40px text-dark dark:text-white dark:border-gray-600 hover:bg-primary hover:border-primary hover:text-white rounded-circle"
                  href="#"
                >
                  <i className="unicon-logo-facebook icon-1" />
                </a>
              </li>
              <li>
                <a
                  className="btn btn-md btn-outline-gray-100 w-32px lg:w-40px h-32px lg:h-40px text-dark dark:text-white dark:border-gray-600 hover:bg-primary hover:border-primary hover:text-white rounded-circle"
                  href="#"
                >
                  <i className="unicon-logo-x-filled icon-1" />
                </a>
              </li>
              <li>
                <a
                  className="btn btn-md btn-outline-gray-100 w-32px lg:w-40px h-32px lg:h-40px text-dark dark:text-white dark:border-gray-600 hover:bg-primary hover:border-primary hover:text-white rounded-circle"
                  href="#"
                >
                  <i className="unicon-email icon-1" />
                </a>
              </li>
              <li>
                <a
                  className="btn btn-md btn-outline-gray-100 w-32px lg:w-40px h-32px lg:h-40px text-dark dark:text-white dark:border-gray-600 hover:bg-primary hover:border-primary hover:text-white rounded-circle"
                  href="#"
                >
                  <i className="unicon-link icon-1" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

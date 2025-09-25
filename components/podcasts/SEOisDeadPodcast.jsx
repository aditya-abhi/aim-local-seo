"use client";
// import Toc from "./Toc";
import RelatedBlogs from "../blogs/RelatedBlogs";
import Image from "next/image";
import Link from "next/link";
import { Gallery, Item } from "react-photoswipe-gallery";
import { useState } from "react";

export default function SEOisDeadPodcast({ blogItem }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState(1);

  const toggleAuthorDetails = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <div className="position-absolute top-0 start-0 end-0 min-h-450px xl:min-h-900px bg-tertiary-700 lg:rounded-2 lg:rounded-top-0 lg:mx-2 lg:mt-0 z-0" />{" "}
      <div className="breadcrumbs panel z-1 py-2 dark:bg-opacity-5 text-white mt-9 lg:mt-10">
        <div className="container max-w-xl">
          <ul className="breadcrumb nav-x justify-center items-center gap-1 fs-7 m-0 fw-bold">
            <li className="text-white">
              <i className="unicon-home icon-1" />
            </li>
            <li>
              <Link href={`/`}>Home</Link>
            </li>
            <li>
              <i className="unicon-chevron-right fw-medium opacity-50 rtl:rotate-180" />
            </li>
            <li>
              <Link href={`/blog`}>Podcast</Link>
            </li>
            <li>
              <i className="unicon-chevron-right fw-medium opacity-50 rtl:rotate-180" />
            </li>
            <li>
              <span className="opacity-50">Podcasst</span>
            </li>
          </ul>
        </div>
      </div>
      <article className="post type-post single-post pb-4">
        <div className="container max-w-xl">
          <div className="post-header uc-dark">
            <div className="panel vstack gap-4 md:gap-6 xl:gap-9 text-center">
              <div className="panel vstack items-center max-w-400px sm:max-w-500px xl:max-w-md mx-auto gap-2 md:gap-3">
                <h1 className="h4 sm:h3 xl:h1 mt-4 lg:mt-6">
                  SEO is Dead: How to Win the New Game of AI-Powered Search
                  (GEO) | Conquer AI Search With AI
                </h1>
                <ul className="post-share-icons nav-x mt-2 gap-1 dark:text-white">
                  <li>
                    <a
                      className="btn btn-md border-gray-900 border-opacity-15 w-32px lg:w-48px h-32px lg:h-48px bg-lime text-gray-900 dark:text-gray-900 dark:border-white hover:bg-primary hover:border-primary hover:text-white rounded-circle"
                      href="#"
                    >
                      <i className="unicon-logo-facebook icon-1" />
                    </a>
                  </li>
                  <li>
                    <a
                      className="btn btn-md border-gray-900 border-opacity-15 w-32px lg:w-48px h-32px lg:h-48px bg-lime text-gray-900 dark:text-gray-900 dark:border-white hover:bg-primary hover:border-primary hover:text-white rounded-circle"
                      href="#"
                    >
                      <i className="unicon-logo-x-filled icon-1" />
                    </a>
                  </li>
                  <li>
                    <a
                      className="btn btn-md border-gray-900 border-opacity-15 w-32px lg:w-48px h-32px lg:h-48px bg-lime text-gray-900 dark:text-gray-900 dark:border-white hover:bg-primary hover:border-primary hover:text-white rounded-circle"
                      href="#"
                    >
                      <i className="unicon-logo-linkedin icon-1" />
                    </a>
                  </li>
                  <li>
                    <a
                      className="btn btn-md border-gray-900 border-opacity-15 w-32px lg:w-48px h-32px lg:h-48px bg-lime text-gray-900 dark:text-gray-900 dark:border-white hover:bg-primary hover:border-primary hover:text-white rounded-circle"
                      href="#"
                    >
                      <i className="unicon-logo-pinterest icon-1" />
                    </a>
                  </li>
                  <li>
                    <a
                      className="btn btn-md border-gray-900 border-opacity-15 w-32px lg:w-48px h-32px lg:h-48px bg-lime text-gray-900 dark:text-gray-900 dark:border-white hover:bg-primary hover:border-primary hover:text-white rounded-circle"
                      href="#"
                    >
                      <i className="unicon-email icon-1" />
                    </a>
                  </li>
                  <li>
                    <a
                      className="btn btn-md border-gray-900 border-opacity-15 w-32px lg:w-48px h-32px lg:h-48px bg-lime text-gray-900 dark:text-gray-900 dark:border-white hover:bg-primary hover:border-primary hover:text-white rounded-circle"
                      href="#"
                    >
                      <i className="unicon-link icon-1" />
                    </a>
                  </li>
                </ul>
              </div>
              <figure className="featured-image m-0">
                <figure className="featured-image m-0 rounded ratio ratio-16x9 rounded uc-transition-toggle overflow-hidden">
                  <iframe
                    className="w-100 rounded-2 overflow-hidden lg:min-h-500px ratio-16x9"
                    src="https://www.youtube.com/embed/GK3r5bfi2dw?si=-BBuF92G-4KglHbt"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </figure>
              </figure>
            </div>
          </div>
        </div>
        <div className="panel mt-6 lg:mt-6 xl:mt-9">
          <div className="container">
            <div className="row child-cols-12 g-6 md:g-4 xl:g-6">
              <div
                className="row child-cols col-match justify-center g-2 lg:g-4"
                data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
              >
                <div className="container lg:container-80">
                  <div className="feature-item panel px-3 lg:px-4 py-4 rounded-2 bg-gray-50 dark:bg-tertiary-700">
                    <div className="row child-cols-12 g-6 md:g-8 xl:g-6">
                      <div
                        className="row child-cols col-match justify-center g-2 lg:g-4"
                        data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
                      >
                        <div className="col-12 md:col-3 lg:col-3 items-center justify-center">
                          <Image
                            src="/assets/images/icons/Conquer-AI-Search-with-AI.webp"
                            width={150}
                            height={150}
                            alt="Conquer AI Search With AI Podcast logo"
                          />
                        </div>
                        <div className="col-12 md:col-8 lg:col-8">
                          <h3>
                            EP #6: Mastering Generative Engine Optimization
                            (GEO) | Conquer AI Search with AI
                          </h3>
                          <p>Conquer AI Search With AI</p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-3 items-center">
                      {/* <figure className="w-100"> */}
                      <audio
                        className="min-w-100 px-2"
                        controls
                        src="https://audio.getaimonitor.com/ConquerAISearchWithAI/episode-6-podcast.mp3"
                      ></audio>
                      {/* </figure> */}
                      <hr className="w-100 m-0 d-block mt-4" />
                    </div>
                    <p className="mt-2">Also Available on:</p>
                    <div className="d-none lg:d-block">
                      {/* <div className="row child-cols-3 sm:child-cols-6 xl:child-cols-3 col-match g-2 justify-between hstack mt-2"> */}
                      <div className="hstack gap-4 mt-2 justify-center">
                        <a
                          href="https://open.spotify.com/episode/0tVBF0OHBONfczI8sCJIUs?si=OrAulOHdS0S0U_QcYcFEmg"
                          target="_blank"
                        >
                          <div className="bg-white rounded-pill hstack gap-1 py-1 px-2 max-w-fc">
                            <Image
                              className="max-w-40px"
                              src="/assets/images/custom-icons/spotify.webp"
                              alt=""
                              width={50}
                              height={50}
                            />
                            <h5 className="m-0 text-dark">Spotify</h5>
                          </div>
                        </a>
                        <a
                          href="https://music.amazon.com/podcasts/638df449-1fbd-497d-a145-5315d8541611/episodes/4f32610d-bf16-4f8e-9e12-0692ff2b7981/conquer-ai-search-with-ai-ep-6-mastering-generative-engine-optimization-geo-conquer-ai-search-with-ai"
                          target="_blank"
                        >
                          <div className="bg-white rounded-pill hstack gap-1 py-1 px-2 max-w-fc">
                            <Image
                              className="max-w-40px"
                              src="/assets/images/custom-icons/amazon-music.webp"
                              alt=""
                              width={50}
                              height={50}
                            />
                            <h5 className="m-0 text-dark">Amazon Music</h5>
                          </div>
                        </a>
                        <a href="https://podcasts.apple.com/in/podcast/ep-6-mastering-generative-engine-optimization-geo-conquer/id1806802986?i=1000707019492">
                          <div className="bg-white rounded-pill hstack gap-1 py-1 px-2 max-w-fc">
                            <Image
                              className="max-w-40px"
                              src="/assets/images/custom-icons/apple-podcast.webp"
                              alt=""
                              width={100}
                              height={100}
                            />
                            <h5 className="m-0 text-dark">Apple Podcast</h5>
                          </div>
                        </a>
                        <a href="https://youtu.be/GK3r5bfi2dw?si=8ng-8J5LXQdQKVCA">
                          <div className="bg-white rounded-pill hstack gap-1 py-1 px-2 max-w-fc">
                            <Image
                              className="max-w-40px"
                              src="/assets/images/custom-icons/youtube.webp"
                              alt=""
                              width={100}
                              height={100}
                            />
                            <h5 className="m-0 text-dark">Youtube</h5>
                          </div>
                        </a>
                      </div>
                      <div className="hstack gap-4 mt-2 justify-center">
                        {/* <a href="#">
                          <div className="bg-white rounded-pill hstack gap-1 py-1 px-2 max-w-fc">
                            <Image
                              className="max-w-40px"
                              src="/assets/images/custom-icons/overcast.webp"
                              alt=""
                              width={100}
                              height={100}
                            />
                            <h5 className="m-0 text-dark">Overcast</h5>
                          </div>
                        </a> */}
                        <a href="https://pca.st/uwtjq1wy">
                          <div className="bg-white rounded-pill hstack gap-1 py-1 px-2 max-w-fc">
                            <Image
                              className="max-w-40px"
                              src="/assets/images/custom-icons/pocketcasts.webp"
                              alt=""
                              width={100}
                              height={100}
                            />
                            <h5 className="m-0 text-dark">Pocket Casts</h5>
                          </div>
                        </a>
                        {/* <a href="#">
                          <div className="bg-white rounded-pill hstack gap-1 py-1 px-2 max-w-fc">
                            <Image
                              className="max-w-40px"
                              src="/assets/images/custom-icons/castro.webp"
                              alt=""
                              width={100}
                              height={100}
                            />
                            <h5 className="m-0 text-dark">Castro</h5>
                          </div>
                        </a> */}
                      </div>
                      {/* </div> */}
                    </div>
                    <div className="d-block lg:d-none">
                      <div className="hstack justify-center gap-2 items-center mt-1">
                        <a
                          href="https://open.spotify.com/episode/0tVBF0OHBONfczI8sCJIUs?si=wZ19TvS5REqBOXO3bgKoxQ"
                          target="_blank"
                        >
                          <div className="bg-white rounded-circle hstack gap-1 py-1 px-1 max-w-fc">
                            <Image
                              className="max-w-30px"
                              src="/assets/images/custom-icons/spotify.webp"
                              alt=""
                              width={50}
                              height={50}
                            />
                            {/* <h5 className="h6 m-0 dark:text-dark">Spotify</h5> */}
                          </div>
                        </a>
                        <a
                          href="https://music.amazon.com/podcasts/638df449-1fbd-497d-a145-5315d8541611/episodes/4f32610d-bf16-4f8e-9e12-0692ff2b7981/conquer-ai-search-with-ai-ep-6-mastering-generative-engine-optimization-geo-conquer-ai-search-with-ai"
                          target="_blank"
                        >
                          <div className="bg-white rounded-circle hstack gap-1 py-1 px-1 max-w-fc">
                            <Image
                              className="max-w-30px"
                              src="/assets/images/custom-icons/amazon-music.webp"
                              alt=""
                              width={50}
                              height={50}
                            />
                            {/* <h5 className="m-0 h6 dark:text-dark">
                              Amazon Music
                            </h5> */}
                          </div>
                        </a>
                        <a href="https://podcasts.apple.com/in/podcast/ep-6-mastering-generative-engine-optimization-geo-conquer/id1806802986?i=1000707019492">
                          <div className="bg-white rounded-circle hstack gap-1 py-1 px-1 max-w-fc">
                            <Image
                              className="max-w-30px"
                              src="/assets/images/custom-icons/apple-podcast.webp"
                              alt=""
                              width={100}
                              height={100}
                            />
                            {/* <h5 className="m-0 h6 dark:text-dark">
                              Apple Podcast
                            </h5> */}
                          </div>
                        </a>
                        <a href="https://youtu.be/GK3r5bfi2dw?si=bKQeW3xy7Ffdd3RY">
                          <div className="bg-white rounded-circle hstack gap-1 py-1 px-1 max-w-fc">
                            <Image
                              className="max-w-30px"
                              src="/assets/images/custom-icons/youtube.webp"
                              alt=""
                              width={100}
                              height={100}
                            />
                            {/* <h5 className="m-0 h6 dark:text-dark">Youtube</h5> */}
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 ">
                  <div className="uc-main panel" role="main">
                    <div className="panel vstack gap-4 xl:gap-6">
                      <div className="panel px-3 rounded-2 bg-secondary dark:bg-tertiary-700">
                        <ul
                          className="main-features-nav-narrow hstack text-center overflow-auto"
                          data-uc-switcher="connect: .main-features-switcher; active: 1; animation: uc-animation-fade;"
                          role="tablist"
                        >
                          <li
                            className={`${activeTab == 1 ? "uc-active" : ""}`}
                            onClick={() => setActiveTab(1)}
                            role="presentation"
                          >
                            <a className="h6 lg:h5 text-nowrap m-0 hover:text-primary">
                              Table of Content
                            </a>
                          </li>
                          <li
                            onClick={() => setActiveTab(2)}
                            className={`${activeTab == 2 ? "uc-active" : ""}`}
                            role="presentation"
                          >
                            <a className="h6 lg:h5 text-nowrap m-0 hover:text-primary">
                              Show Notes
                            </a>
                          </li>
                          <li
                            className={`${activeTab == 3 ? "uc-active" : ""}`}
                            onClick={() => setActiveTab(3)}
                            role="presentation"
                          >
                            <a className="h6 lg:h5 text-nowrap m-0 hover:text-primary">
                              Transcript
                            </a>
                          </li>
                          <li
                            className={`${activeTab == 4 ? "uc-active" : ""}`}
                            onClick={() => setActiveTab(4)}
                            role="presentation"
                          >
                            <a className="h6 lg:h5 text-nowrap m-0 hover:text-primary">
                              Source
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div
                        className="main-features-switcher uc-switcher overflow-hidden"
                        role="presentation"
                        style={{ touchAction: "pan-y pinch-zoom" }}
                      >
                        {activeTab == 1 && (
                          <div className="uc-active">
                            <div className="feature-item panel">
                              <div className="container container-80">
                                <h2 className="text-center">
                                  Table of Content
                                </h2>
                                <h3 className="h5">
                                  🎙️ Conquer AI Search Podcast – Ep. 6
                                </h3>
                                <ol className="fs-5">
                                  <li>Welcome & Introduction (0:04 - 0:21)</li>
                                  <li>
                                    Hosts Introduction & Episode Tease (0:21 -
                                    0:36)
                                  </li>
                                  <li>Giveaway Announcement (0:36 - 0:52)</li>
                                  <li>
                                    Appreciation for Listeners & Subscribe CTA
                                    (0:53 - 1:10)
                                  </li>
                                  <li>
                                    Podcast Focus & GEO Overview (1:15 - 1:53)
                                  </li>
                                  <li>
                                    Changing Search Landscape & AI Summaries
                                    (1:53 - 2:37)
                                  </li>
                                  <li>
                                    Content Structure & Authority for AI (2:38 -
                                    4:25)
                                  </li>
                                  <li>
                                    GEO Strategy for SaaS & Competitive
                                    Advantage (4:26 - 5:59)
                                  </li>
                                  <li>
                                    Content Quality & User Intent (5:59 - 6:25)
                                  </li>
                                  <li>
                                    AI Monitor Tools & Insights (6:29 - 8:29)
                                  </li>
                                  <li>
                                    GEO Dashboard & Support Plans (8:40 - 9:11)
                                  </li>
                                  <li>
                                    GEO as Table Stakes & Practical Takeaways
                                    (9:27 - 10:30)
                                  </li>
                                  <li>
                                    Future Relevance & Closing Remarks (10:30 -
                                    11:36)
                                  </li>
                                </ol>
                              </div>
                            </div>
                          </div>
                        )}
                        {activeTab == 2 && (
                          <div className="uc-active">
                            <div className="feature-item panel">
                              <div className="container container-80">
                                <Gallery>
                                  <div
                                    className="post-content panel fs-6 md:fs-5 ml-2"
                                    data-uc-lightbox="animation: scale"
                                  >
                                    <p className="">
                                      Google’s AI Overviews. ChatGPT answers.
                                      Perplexity’s instant summaries.
                                    </p>
                                    <p className="mt-3">
                                      The way people search is changing fast—and
                                      if you’re still relying on traditional
                                      SEO, you’re already behind.
                                    </p>
                                    <p className="mt-3">
                                      AI-generated answers are stealing your
                                      clicks, summarizing your content, and
                                      serving it directly to users—without
                                      sending traffic back to your site.
                                    </p>
                                    <p className="mt-3">
                                      The solution? Generative Engine
                                      Optimization (GEO)—the new must-know
                                      strategy for dominating AI-powered search.
                                    </p>
                                    <ul className="mt-2">
                                      <li>
                                        ✅ Why SEO alone isn’t enough anymore
                                      </li>
                                      <li>
                                        ✅ How GEO works (and why it’s your new
                                        competitive edge)
                                      </li>
                                      <li>
                                        ✅ Actionable steps to optimize for AI
                                        search today
                                      </li>
                                    </ul>
                                    <h2 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                                      Why SEO is Losing Its Power
                                    </h2>
                                    <p>For decades, SEO was about:</p>
                                    <ul className="mt-2">
                                      <li>Ranking in the “10 blue links”</li>
                                      <li>Backlinks and keyword stuffing</li>
                                      <li>Optimizing for Google’s algorithm</li>
                                    </ul>
                                    <p className="mt-2">
                                      But now, AI is rewriting the rules:
                                    </p>
                                    <ul className="mt-2">
                                      <li>
                                        Google’s AI Overviews answer queries
                                        directly—no clicks needed.
                                      </li>
                                      <li>
                                        {" "}
                                        ChatGPT, Gemini, and Perplexity pull
                                        from your content without driving
                                        traffic.
                                      </li>
                                      <li>
                                        Users get instant answers—meaning fewer
                                        visits to websites.
                                      </li>
                                    </ul>
                                    <p className="mt-3">
                                      The result? If you’re not optimizing for
                                      AI, you’re invisible to a growing chunk of
                                      your audience.
                                    </p>
                                    <h2 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                                      What is Generative Engine Optimization
                                      (GEO)?
                                    </h2>
                                    <p>
                                      GEO is the strategy of optimizing content
                                      for AI-powered search engines—ensuring
                                      your brand appears in AI-generated
                                      answers.
                                    </p>
                                    <p className="mt-2">
                                      <b>How GEO Differs from SEO:</b>
                                    </p>
                                    Table
                                    <h3 className="h5 xl:h4 mt-3 mb-2 xl:mb-3">
                                      Why GEO is a Game-Changer for Marketers
                                    </h3>
                                    <ul className="mt-2">
                                      <li>
                                        ✔ Early adopters dominate (most brands
                                        aren’t doing this yet)
                                      </li>
                                      <li>
                                        ✔ Higher brand authority (being cited by
                                        AI = instant credibility)
                                      </li>
                                      <li>
                                        ✔ More efficient than SEO (no need for
                                        endless backlink building)
                                      </li>
                                    </ul>
                                    <h2 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                                      How to Optimize for GEO (Actionable Steps)
                                    </h2>
                                    <h3 className="h5 xl:h4 mt-3 mb-2 xl:mb-3">
                                      Structure Content for AI Consumption
                                    </h3>
                                    <ul className="mt-2">
                                      <li>
                                        Use clear, concise answers (AI prefers
                                        direct responses)
                                      </li>
                                      <li>
                                        Break down complex topics into scannable
                                        lists (e.g., “5 Best Tools for X”)
                                      </li>
                                      <li>
                                        Avoid paywalls & login gates (AI can’t
                                        access restricted content)
                                      </li>
                                    </ul>
                                    <h3 className="h5 xl:h4 mt-3 mb-2 xl:mb-3">
                                      Target Conversational Queries
                                    </h3>
                                    <ul className="mt-2">
                                      <li>
                                        Optimize for long-tail, natural-language
                                        questions (e.g., “What’s the best CRM
                                        for small businesses?”)
                                      </li>
                                      <li>
                                        Use FAQ-style formatting (AI loves
                                        pulling from well-structured Q&A)
                                      </li>
                                    </ul>
                                    <h3 className="h5 xl:h4 mt-3 mb-2 xl:mb-3">
                                      Leverage AI Monitoring Tools
                                    </h3>
                                    <ul className="mt-2">
                                      <li>
                                        Track which AI bots visit your site (AI
                                        Bot Monitor)
                                      </li>
                                      <li>
                                        Track the amount of traffic you get from
                                        AI Citations (AI Traffic Monitor)
                                      </li>
                                      <li>
                                        Measure AI citation impact (are you
                                        appearing in AI answers?)
                                      </li>
                                      <li>
                                        Use instant indexing tools to fast-track
                                        key pages
                                      </li>
                                    </ul>
                                    <h3 className="h5 xl:h4 mt-3 mb-2 xl:mb-3">
                                      Build Authority in AI’s Eyes
                                    </h3>
                                    <ul className="mt-2">
                                      <li>
                                        Publish original research & data (AI
                                        favors unique insights)
                                      </li>
                                      <li>
                                        Get cited by reputable sources (Forbes,
                                        niche blogs, etc.)
                                      </li>
                                      <li>
                                        Use simple, jargon-free language (AI
                                        rewards clarity)
                                      </li>
                                    </ul>
                                    <h2 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                                      The Future of Search: Adapt or Get Left
                                      Behind
                                    </h2>
                                    <p>
                                      AI search is not the future—it’s already
                                      here.
                                    </p>
                                    <p>Brands that ignore GEO will:.</p>
                                    <ul>
                                      <li>
                                        ❌ Lose traffic to AI-summarized answers
                                      </li>
                                      <li>
                                        ❌ Miss leads from users who never click
                                        through
                                      </li>
                                      <li>
                                        ❌ Fall behind competitors who adapt
                                        first
                                      </li>
                                    </ul>
                                    <p className="mt-2">
                                      The winners? Those who optimize for AI
                                      now.
                                    </p>
                                    <h2 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                                      Final Thoughts: Your GEO Action Plan
                                    </h2>
                                    <ul>
                                      <li>
                                        Audit your content—Is it AI-friendly?
                                      </li>
                                      <li>
                                        Track AI crawlers—Are they visiting your
                                        site?
                                      </li>
                                      <li>
                                        Optimize for answers, not just keywords
                                      </li>
                                      <li>
                                        Experiment & measure—Use AI analytics
                                        tools
                                      </li>
                                    </ul>
                                    <p className="mt-3">
                                      Need help? Check out our Most
                                      Comprehensive Generative Engine
                                      Optimization (GEO) Guide to learn more
                                      about GEO.
                                    </p>
                                    <p className="mt-3">
                                      🚀 Ready to Conquer AI Search? The rules
                                      have changed. Will you adapt—or get
                                      replaced?
                                    </p>
                                    <h2 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                                      Course Giveaway:
                                    </h2>
                                    <ol className="fs-5">
                                      <li>
                                        Best Course on Generative Engine
                                        Optimization (GEO) Course for Free –
                                        <a
                                          href="https://getaimonitor.com/free-courses/best-generative-engine-optimization-geo-course-for-free/"
                                          className="text-blue"
                                          target="_blank"
                                        >
                                          https://www.forbes.com/councils/forbescommunicationscouncil/2025/01/27/16-steps-marketers-must-take-to-prepare-for-generative-ai-search/
                                        </a>
                                      </li>
                                      <li>
                                        The Best Free Course on Answer Engine
                                        Optimization –
                                        <a
                                          href=" https://getaimonitor.com/free-courses/best-answer-engine-optimization-course-for-free/"
                                          className="text-blue"
                                          target="_blank"
                                        >
                                          https://getaimonitor.com/free-courses/best-answer-engine-optimization-course-for-free/
                                        </a>
                                      </li>
                                      <li>
                                        Create Viral AI Video Using ChatGPT For
                                        Affiliate Marketing –
                                        <a
                                          href="https://www.udemy.com/course/marketing-management-principles/"
                                          className="text-blue"
                                          target="_blank"
                                        >
                                          https://www.udemy.com/course/marketing-management-principles/
                                        </a>
                                      </li>
                                      <li>
                                        Account-Based Marketing (ABM) 2025: A
                                        Complete Guide –
                                        <a
                                          href="https://www.udemy.com/course/smm-social-media-marketing/"
                                          className="text-blue"
                                          target="_blank"
                                        >
                                          https://www.udemy.com/course/smm-social-media-marketing/
                                        </a>
                                      </li>
                                      <li>
                                        Generative AI for Leaders and Managers :
                                        A Strategic Guide –
                                        <a
                                          href="https://www.udemy.com/course/generative-ai-for-leaders-and-managers-a-strategic-guide/"
                                          className="text-blue"
                                          target="_blank"
                                        >
                                          https://www.udemy.com/course/generative-ai-for-leaders-and-managers-a-strategic-guide/
                                        </a>
                                      </li>
                                      <li>
                                        AI to Empower your Marketing Team –
                                        <a
                                          href="https://www.udemy.com/course/ai-to-empower-your-marketing-team/"
                                          className="text-blue"
                                          target="_blank"
                                        >
                                          https://www.udemy.com/course/ai-to-empower-your-marketing-team/
                                        </a>
                                      </li>
                                      <li>
                                        Craft Marketing Strategy in 5 Steps With
                                        Your AI-Copilot –
                                        <a
                                          href="https://www.udemy.com/course/craft-marketing-strategy-with-your-ai-copilot/"
                                          className="text-blue"
                                          target="_blank"
                                        >
                                          https://www.udemy.com/course/craft-marketing-strategy-with-your-ai-copilot/
                                        </a>
                                      </li>
                                      <li>
                                        No & Low Code AI Marketing Automation –
                                        <a
                                          href=" https://www.udemy.com/course/no-low-code-marketing-automation/"
                                          className="text-blue"
                                          target="_blank"
                                        >
                                          https://www.udemy.com/course/no-low-code-marketing-automation/
                                        </a>
                                      </li>
                                      <li>
                                        Claude Pro Mastery: AI for Business,
                                        Marketing & Automation –
                                        <a
                                          href="https://www.udemy.com/course/claude-pro-mastery-ai-for-business-marketing-automation/"
                                          className="text-blue"
                                          target="_blank"
                                        >
                                          https://www.udemy.com/course/claude-pro-mastery-ai-for-business-marketing-automation/
                                        </a>
                                      </li>
                                      <li>
                                        Product Marketing: Go to Market Strategy
                                        –
                                        <a
                                          href=" https://www.udemy.com/course/product-marketing-and-development-go-to-market-strategy/"
                                          className="text-blue"
                                          target="_blank"
                                        >
                                          https://www.udemy.com/course/product-marketing-and-development-go-to-market-strategy/
                                        </a>
                                      </li>
                                    </ol>
                                  </div>
                                </Gallery>
                              </div>
                            </div>
                          </div>
                        )}
                        {activeTab == 3 && (
                          <div className="uc-active">
                            <div className="feature-item panel">
                              <div className="container container-80">
                                <p>
                                  (0:04 - 0:21)
                                  <br />
                                  Hey, everyone. Hope you're having an amazing
                                  day and soaking up new knowledge like a
                                  sponge, because the world of AI search moves
                                  fast, and we're here to make sure you stay
                                  ahead of it. Welcome to the podcast where we
                                  break down the latest, greatest, and most
                                  game-changing trends in AI and search tech.
                                </p>

                                <p>
                                  (0:21 - 0:36)
                                  <b />
                                  I'm Avi, here with Catherine, and today we've
                                  got an episode packed with insights,
                                  surprises, and maybe even a few wait, really,
                                  moments. But first, we have some exciting
                                  news. We're celebrating you, our amazing
                                  community, with a giveaway.
                                </p>

                                <p>
                                  (0:36 - 0:52)
                                  <br />
                                  We're dropping 10 premium marketing courses,
                                  handpicked by our team and worth between $19
                                  and a whopping $199, and you can get them all
                                  for free. Check out the full list in the
                                  description, and stay tuned for how to claim
                                  yours before they're gone. Shoutout to our
                                  regular listeners.
                                </p>

                                <p>
                                  (0:53 - 1:00)
                                  <br />
                                  You all are the real MVPs. Thanks for riding
                                  this AI wave with us as we level up together.
                                  And if you're new here, first off, welcome.
                                </p>

                                <p>
                                  (1:01 - 1:10)
                                  <br />
                                  Hit that subscribe button and join the AI
                                  marketing revolution. Trust us, you won't want
                                  to miss what's coming. Let's jump into episode
                                  six and unlock even more AI secrets.
                                </p>

                                <p>
                                  (1:15 - 1:29)
                                  <br />
                                  Welcome to Conquer AI Search with AI podcast.
                                  This is where we dig into how AI is, well,
                                  completely changing the game for customer
                                  discovery, and how you, as a SaaS founder, can
                                  make sure you're right there when they're
                                  looking. Absolutely.
                                </p>

                                <p>
                                  (1:29 - 1:38)
                                  <br />
                                  Today, we're diving into generative engine
                                  optimization, GEO. It sounds technical, maybe,
                                  but it's becoming fundamental. Yeah,
                                  especially if you're running an early stage
                                  SaaS.
                                </p>

                                <p>
                                  (1:39 - 1:53)
                                  <br />
                                  We'll unpack why it's so crucial and,
                                  naturally, how we at AI Monitor are building
                                  tools specifically to help you navigate this.
                                  It's a huge shift. We've spent years focused
                                  on climbing Google's rankings, you know, the
                                  standard results page.
                                </p>

                                <p>
                                  (1:53 - 2:00)
                                  <br />
                                  There's 10 blue links. Exactly. But now you've
                                  got Google AI Overviews, Gemini, ChatGPT, Bing
                                  AI, Perplexity, Claude.
                                </p>

                                <p>
                                  (2:01 - 2:07)
                                  <br />
                                  These platforms are getting answers directly.
                                  Meaning users might not even click through to
                                  websites like they used to. Precisely.
                                </p>

                                <p>
                                  (2:07 - 2:12)
                                  <br />
                                  So the old SEO playbook. It's just not the
                                  whole story anymore. We need to think about
                                  getting into those AI summaries.
                                </p>

                                <p>
                                  (2:13 - 2:21)
                                  <br />
                                  And if you're not optimizing for that, you
                                  risk becoming invisible to, well, a growing
                                  chunk of your potential market. For a startup,
                                  that's serious. It really is.
                                </p>

                                <p>
                                  (2:21 - 2:37)
                                  <br />
                                  So our mission today is clear. Break down why
                                  GEO is non-negotiable for you, the SaaS
                                  founder, and show how AI Monitor is really
                                  designed to be your ally here. We want to give
                                  you those aha moments, those actionable
                                  insights, without making it feel overwhelming.
                                </p>

                                <p>
                                  (2:38 - 2:43)
                                  <br />
                                  Let's start with that changing landscape. I
                                  mean, think about how people search now. It's
                                  more conversational, right? Yes.
                                </p>

                                <p>
                                  (2:43 - 2:54)
                                  <br />
                                  And AI is increasingly providing synthesized
                                  answers, not just links. We saw that
                                  highlighted in Forbes. Users get the
                                  information directly, which changes the click
                                  dynamic.
                                </p>

                                <p>
                                  (2:54 - 3:04)
                                  <br />
                                  And Google pushing its AI overviews so
                                  prominently, often above the paid ads. That's
                                  a massive signal, isn't it? Huge signal. It
                                  shows how committed they are to this AI-first
                                  approach.
                                </p>

                                <p>
                                  (3:05 - 3:14)
                                  <br />
                                  It's not a side project. Which, as Nick Brown
                                  mentioned in that Forbes piece, actually
                                  creates a window, a real opportunity. Because
                                  GEO is still pretty new, relatively speaking.
                                </p>

                                <p>
                                  (3:14 - 3:22)
                                  <br />
                                  So getting in early, especially for an
                                  early-stage company. You can steal a march on
                                  the competition, as he put it. Get ahead while
                                  others are still figuring it out.
                                </p>

                                <p>
                                  (3:22 - 3:32)
                                  <br />
                                  It's not just where answers appear, though.
                                  It's how the AI, these large language models,
                                  or LLMs, decide what information to use.
                                  That's different too, right? Very different
                                  from traditional SEO.
                                </p>

                                <p>
                                  (3:33 - 3:38)
                                  <br />
                                  Right. Forbes pointed this out. Clearly, LLMs
                                  focus much more on the actual content of the
                                  page.
                                </p>

                                <p>
                                  (3:39 - 3:43)
                                  <br />
                                  Links still matter, sure. But the substance is
                                  key. OK, so the authority signals are
                                  different.
                                </p>

                                <p>
                                  (3:43 - 3:52)
                                  <br />
                                  Yeah, they evaluate authority differently.
                                  It's not just about how many sites link to
                                  you. It's about the perceived expertise and
                                  trustworthiness within your content.
                                </p>

                                <p>
                                  (3:52 - 3:59)
                                  <br />
                                  And that's maybe why those top 10 listicles
                                  get cited so often by LLMs. It seems
                                  counterintuitive sometimes. Well, think about
                                  their structure.
                                </p>

                                <p>
                                  (4:00 - 4:09)
                                  <br />
                                  They often answer questions very directly.
                                  Like, what are the top five tools for X? The
                                  language is straightforward. Easy for an AI to
                                  parse and extract an answer from.
                                </p>

                                <p>
                                  (4:09 - 4:21)
                                  <br />
                                  Exactly. Whereas maybe a really deep, nuanced,
                                  journalistic piece might be harder for an AI
                                  to access, perhaps behind a paywall. Or it
                                  doesn't provide that quick, list-based answer.
                                </p>

                                <p>
                                  (4:21 - 4:25)
                                  <br />
                                  Interesting. So that structure really matters
                                  for AI consumption. It does.
                                </p>

                                <p>
                                  (4:26 - 4:37)
                                  <br />
                                  It presents a clear path for SaaS startups.
                                  Create focused content that directly answers
                                  the questions your potential customers are
                                  asking AI. OK, let's translate that.
                                </p>

                                <p>
                                  (4:37 - 4:51)
                                  <br />
                                  For a SaaS founder, maybe someone just
                                  starting out, what are the real tangible wins
                                  from doing GEO? Well, number one is
                                  visibility, obviously. Getting mentioned in
                                  those AI answers builds brand awareness. It
                                  positions you.
                                </p>

                                <p>
                                  (4:51 - 4:55)
                                  <br />
                                  Like an endorsement from the AI itself. Kind
                                  of, yeah. It builds authority.
                                </p>

                                <p>
                                  (4:55 - 5:06)
                                  <br />
                                  When someone asks, you know, best CRM SaaS for
                                  freelancers, or affordable marketing
                                  automation for startups... You want your name
                                  to pop up in that AI response. Precisely. AI
                                  Monitor data shows this happening.
                                </p>

                                <p>
                                  (5:06 - 5:13)
                                  <br />
                                  It connects you with users right when they
                                  have that specific need. That's incredibly
                                  valuable. And the competitive edge, especially
                                  now.
                                </p>

                                <p>
                                  (5:13 - 5:21)
                                  <br />
                                  It's significant. Like Nick Brown said, the
                                  specific analytics for GEO are still evolving.
                                  So getting in now, learning, adapting.
                                </p>

                                <p>
                                  (5:21 - 5:27)
                                  <br />
                                  You build a lead while the field is still
                                  developing. Which ties into understanding how
                                  people are asking questions now. It's more
                                  conversational.
                                </p>

                                <p>
                                  (5:28 - 5:38)
                                  <br />
                                  Definitely. That Perplex Marketing piece
                                  highlighted this shift. AI favors natural
                                  language, intent-driven queries, those
                                  long-tail keywords that sound like real
                                  questions.
                                </p>

                                <p>
                                  (5:38 - 5:43)
                                  <br />
                                  So founders need to think less about just
                                  stuffing keywords. Right. And more about the
                                  underlying need.
                                </p>

                                <p>
                                  (5:43 - 5:59)
                                  <br />
                                  What's the actual problem someone's trying to
                                  solve when they ask how to integrate software
                                  X with software Y? Or, what features should I
                                  look for in project management software for a
                                  remote team? You need content that answers
                                  that. Comprehensively. Yes.
                                </p>

                                <p>
                                  (5:59 - 6:09)
                                  <br />
                                  And the quality of that content is paramount.
                                  That Forbes expert panel was clear. Generative
                                  AI rewards uniqueness, depth, context,
                                  relevance.
                                </p>

                                <p>
                                  (6:09 - 6:12)
                                  <br />
                                  No shallow stuff. It needs to be genuinely
                                  helpful. Unstructured well, right.
                                </p>

                                <p>
                                  (6:12 - 6:20)
                                  <br />
                                  That came up in the assembled piece too.
                                  Clear, concise, well-organized information
                                  helps the AI understand. Think standalone
                                  answers within your content.
                                </p>

                                <p>
                                  (6:20 - 6:25)
                                  <br />
                                  Use simple, direct language the kind your
                                  customers actually use. Cut the jargon.
                                  Please, yes.
                                </p>

                                <p>
                                  (6:25 - 6:28)
                                  <br />
                                  Cut the jargon. Okay, so this feels like a
                                  good pivot point. We understand the why.
                                </p>

                                <p>
                                  (6:29 - 6:39)
                                  <br />
                                  How does AI Monitor actually help a founder do
                                  all this? Where do we start? Well, a
                                  foundational piece is just seeing what the AI
                                  crawlers are doing. Yeah. Your standard Google
                                  Analytics, GA4.
                                </p>

                                <p>
                                  (6:39 - 6:46)
                                  <br />
                                  It doesn't track visits from ChatGPT's bot or
                                  Google's AI crawlers. Right. AI Bot Monitor
                                  pointed that out.
                                </p>

                                <p>
                                  (6:46 - 6:52)
                                  <br />
                                  It's a blind spot. A huge one. So AI Monitor
                                  tracks those visits in real time.
                                </p>

                                <p>
                                  (6:52 - 7:00)
                                  <br />
                                  You see which AI bots are looking at your
                                  site, how often, and which pages they're
                                  focusing on. So you actually get a picture of
                                  how AI sees your content. Exactly.
                                </p>

                                <p>
                                  (7:01 - 7:08)
                                  <br />
                                  It's crucial visibility. But it's not just
                                  tracking. AI Monitor also performs a technical
                                  AI health check.
                                </p>

                                <p>
                                  (7:08 - 7:24)
                                  <br />
                                  What does that involve? It audits your site
                                  structure, your metadata, how easily crawlers
                                  can navigate, basically. Checking for any
                                  technical roadblocks that might stop AI from
                                  indexing your content properly. Ah, so fixing
                                  hidden barriers that might be blocking you
                                  from even being considered as a source.
                                </p>

                                <p>
                                  (7:24 - 7:29)
                                  <br />
                                  Precisely. Ensuring the AI can access and
                                  understand your stuff flawlessly. Okay, that
                                  makes sense.
                                </p>

                                <p>
                                  (7:29 - 7:34)
                                  <br />
                                  Then there's this feature, the AI Citation
                                  Impact Score. That sounds really interesting.
                                  It is.
                                </p>

                                <p>
                                  (7:34 - 7:45)
                                  <br />
                                  This helps you see which AI answers are
                                  actually referencing your content. And
                                  crucially, it helps quantify the impact. Are
                                  those mentions driving real human traffic back
                                  to your site? Wow.
                                </p>

                                <p>
                                  (7:45 - 8:01)
                                  <br />
                                  Okay, so connecting the dot between an AI
                                  mention and actual potential customers landing
                                  on your platform, that's powerful for
                                  measuring ROI. It's a game changer for
                                  understanding GEO's value. And if you have,
                                  say, a new white paper or a key landing page,
                                  you want AI to see quickly.
                                </p>

                                <p>
                                  (8:02 - 8:06)
                                  <br />
                                  Let me guess, AI Monitor has something for
                                  that. Yep. Instant AI Index Submission.
                                </p>

                                <p>
                                  (8:06 - 8:17)
                                  <br />
                                  You can basically push those critical pages
                                  directly to crawlers like ChatGPT and Gemini.
                                  So you're not just waiting for them to find it
                                  eventually, you accelerate that discovery.
                                  Exactly.
                                </p>

                                <p>
                                  (8:17 - 8:29)
                                  <br />
                                  It gives your best content a fast pass,
                                  essentially. What about monitoring how your
                                  brand is being talked about in these AI
                                  responses? That's covered too. AI Monitor
                                  gives you a snapshot of brand mentions
                                  positive, negative, neutral.
                                </p>

                                <p>
                                  (8:29 - 8:39)
                                  <br />
                                  And you can set up real-time alerts for
                                  specific prompts you care about. So if there's
                                  a misrepresentation or something negative, you
                                  know, quickly and can potentially address it.
                                  That's the idea.
                                </p>

                                <p>
                                  (8:40 - 8:50)
                                  <br />
                                  Stay informed and protect your brand
                                  reputation in this new space. And all this
                                  data, is it complex to manage? Founders are
                                  busy people. We designed the GEO dashboard to
                                  be intuitive.
                                </p>

                                <p>
                                  (8:51 - 8:59)
                                  <br />
                                  The goal is actionable insights without
                                  needing, you know, a PhD in data science. It's
                                  about empowering founders to adapt. And you
                                  mentioned different needs.
                                </p>

                                <p>
                                  (8:59 - 9:11)
                                  <br />
                                  What about different levels of support? Right.
                                  We offer different plans. There's a DIY option
                                  if you want to manage GEO yourself, hands-on,
                                  and a fully managed plan if you'd prefer our
                                  experts handle more of it for you.
                                </p>

                                <p>
                                  (9:11 - 9:16)
                                  <br />
                                  Good to have options. It sounds like the focus
                                  is really on making GEO accessible.
                                  Definitely.
                                </p>

                                <p>
                                  (9:16 - 9:27)
                                  <br />
                                  As AI Bot Monitor highlights, issues are
                                  flagged in plain language, often with
                                  tutorials. It's about removing the technical
                                  barrier so you can focus on the strategy.
                                  Okay, so let's recap the big picture here.
                                </p>

                                <p>
                                  (9:27 - 9:35)
                                  <br />
                                  For you, the founder of an early-stage SaaS,
                                  GEO isn't just a nice-to-have anymore. Nope.
                                  It's becoming table stakes for visibility and
                                  growth.
                                </p>

                                <p>
                                  (9:35 - 9:51)
                                  <br />
                                  If customers are finding solutions via AI, you
                                  need to be in those AI results. And tools like
                                  AI Monitor are built specifically to give you
                                  the necessary insights and controls to
                                  actually compete and win in this new AI-driven
                                  search world. Exactly.
                                </p>

                                <p>
                                  (9:51 - 9:59)
                                  <br />
                                  It's about equipping you for this shift. So
                                  maybe a good exercise for everyone listening.
                                  Take a hard look at your current website
                                  content.
                                </p>

                                <p>
                                  (9:59 - 10:19)
                                  <br />
                                  Your blog posts, your feature pages, your
                                  FAQs. Yeah, ask yourself, how well do these
                                  really answer the specific questions your
                                  ideal customer would type or speak into an AI?
                                  Are they clear? Structured? Deep enough?
                                  Because that's the foundation. Getting that
                                  right is step one for making sure AI sees you
                                  as a valuable, authoritative source.
                                </p>

                                <p>
                                  (10:19 - 10:30)
                                  <br />
                                  Truly is. We definitely encourage you to check
                                  out AI Monitor, explore how it works, and see
                                  how it can give you that specific edge in
                                  conquering AI search. It really offers unique
                                  capabilities for this space.
                                </p>

                                <p>
                                  (10:30 - 10:48)
                                  <br />
                                  It does. And maybe a final thought to leave
                                  you with. As AI increasingly becomes the first
                                  stop for users seeking solutions, what happens
                                  to the SaaS companies that don't lean into
                                  GEO? How do they ensure they stay relevant and
                                  keep growing when the discovery landscape is
                                  changing so fundamentally? That's, yeah,
                                  that's a critical question.
                                </p>

                                <p>
                                  (10:48 - 11:03)
                                  <br />
                                  Something every SaaS founder needs to be
                                  thinking about right now. And that's a wrap on
                                  this episode of Conquer AI Search with AI. If
                                  today's insights got you thinking, do me a
                                  favor.
                                </p>

                                <p>
                                  (11:04 - 11:17)
                                  <br />
                                  Share this with one marketer or a co-founder
                                  who needs to stay ahead in this AI-driven
                                  world. And don't forget, those free marketing
                                  courses are still up for grabs. Just like this
                                  video and comment with the course name you're
                                  most excited about.
                                </p>

                                <p>
                                  (11:17 - 11:28)
                                  <br />
                                  And we'll slide into your DMs with the
                                  details. Got burning questions or a light bulb
                                  moment? Tag us on x.com or Instagram or leave
                                  a quick review. We'd love to hear from you.
                                </p>

                                <p>
                                  (11:28 - 11:36)
                                  <br />
                                  We'll be back next week with more actionable
                                  AI strategies. Until then, keep testing, keep
                                  optimizing, and keep conquering AI search.
                                </p>
                              </div>
                            </div>
                          </div>
                        )}
                        {activeTab == 4 && (
                          <div className="uc-active">
                            <div className="feature-item panel">
                              <div className="container container-80">
                                <h2 className="text-center">📚 Sources:</h2>
                                <ul className="fs-5">
                                  <li className="mt-2">
                                    Episode #6 Expert Panel. (2025, January 27).
                                    16 Steps Marketers Must Take To Prepare For
                                    Generative AI Search. Forbes Communications
                                    Council.
                                    <a
                                      href="https://www.forbes.com/councils/forbescommunicationscouncil/2025/01/27/16-steps-marketers-must-take-to-prepare-for-generative-ai-search/"
                                      className="text-blue"
                                      target="_blank"
                                    >
                                      https://www.forbes.com/councils/forbescommunicationscouncil/2025/01/27/16-steps-marketers-must-take-to-prepare-for-generative-ai-search/
                                    </a>
                                  </li>
                                  <li className="mt-2">
                                    Brown, N. (2025, January 31). GEO Is The
                                    Next SEO (And Why You Can’t Ignore It).
                                    Forbes Agency Council.
                                    <a
                                      href="https://addlly.ai/blog/is-geo-the-new-seo/"
                                      className="text-blue"
                                      target="_blank"
                                    >
                                      https://addlly.ai/blog/is-geo-the-new-seo/
                                    </a>
                                  </li>
                                  <li className="mt-2">
                                    Usa, U. (2025, April 30). The Complete Guide
                                    to Optimizing Your Content For AI Search:
                                    Getting Recommended by GenAI & Claiming
                                    Coveted Overviews. Convert Experiences.
                                    <a
                                      href="https://searchengineland.com/seo-content-optimization-guide-445084"
                                      className="text-blue"
                                      target="_blank"
                                    >
                                      https://searchengineland.com/seo-content-optimization-guide-445084
                                    </a>
                                  </li>
                                  <li className="mt-2">
                                    Melton, W. (2025, April 29). How to Rank in
                                    AI Search Results: 9 Effective Strategies.
                                    Xponent21.
                                    <a
                                      href="https://ai-marketinglabs.com/lab-experiments/what-are-the-best-strategies-for-ranking-in-ai-search-results"
                                      className="text-blue"
                                      target="_blank"
                                    >
                                      https://ai-marketinglabs.com/lab-experiments/what-are-the-best-strategies-for-ranking-in-ai-search-results
                                    </a>
                                  </li>
                                  <li className="mt-2">
                                    Cubero, C. (2025, March 14). B2B SaaS SEO in
                                    the Age of AI: What Founders Needs to Know.
                                    Kalungi
                                    <a
                                      href="https://www.kalungi.com/blog/b2b-saas-seo-in-the-age-of-ai"
                                      className="text-blue"
                                      target="_blank"
                                    >
                                      https://www.kalungi.com/blog/b2b-saas-seo-in-the-age-of-ai
                                    </a>
                                  </li>
                                  <li className="mt-2">
                                    Geeky Tech. (2025, January 30). SEO
                                    Unfiltered Ep 4.1: How Generative Engine
                                    Optimisation Will Shape Digital Marketing
                                    (Podcast Episode).
                                    <a
                                      href="https://podcasts.apple.com/us/podcast/seo-unfiltered/id1610579748"
                                      className="text-blue"
                                      target="_blank"
                                    >
                                      https://podcasts.apple.com/us/podcast/seo-unfiltered/id1610579748
                                    </a>
                                  </li>
                                  <li className="mt-2">
                                    Perry, T. (2024, December 18). Search Engine
                                    Optimization (SEO) vs Generative Engine
                                    Optimization (GEO): Key Differences and
                                    Strategies. Foundation Marketing.
                                    <a
                                      href="https://www.quoleady.com/geo-vs-seo/"
                                      className="text-blue"
                                      target="_blank"
                                    >
                                      https://www.quoleady.com/geo-vs-seo/
                                    </a>
                                  </li>
                                  <li className="mt-2">
                                    PAI Monitor. AI Traffic Monitor | Get Your
                                    Brand Recommended by ChatGPT & Google AI
                                    Overview.
                                    <a
                                      href="https://getaimonitor.com/products/ai-traffic-monitor/"
                                      className="text-blue"
                                      target="_blank"
                                    >
                                      https://getaimonitor.com/products/ai-traffic-monitor/
                                    </a>
                                  </li>
                                  <li className="mt-2">
                                    AI Monitor. AI Bot Monitor | Get Your Brand
                                    Recommended by ChatGPT & Google AI Overview
                                    <a
                                      href="https://developers.google.com/search/docs/appearance/ai-features"
                                      className="text-blue"
                                      target="_blank"
                                    >
                                      https://developers.google.com/search/docs/appearance/ai-features
                                    </a>
                                  </li>
                                  <li className="mt-2">
                                    Assembled. (2024, October 14). A guide to
                                    optimizing your knowledge base for AI.
                                    <a
                                      href="https://document360.com/blog/optimize-knowledge-base-for-ai/"
                                      className="text-blue"
                                      target="_blank"
                                    >
                                      https://document360.com/blog/optimize-knowledge-base-for-ai/
                                    </a>
                                  </li>
                                  <li className="mt-2">
                                    AI Monitor. (Pasted Text) GEO for SaaS: Own
                                    your AI search visibility.
                                    <a
                                      href="https://www.simpletiger.com/services/geo-ai-search-optimization"
                                      className="text-blue"
                                      target="_blank"
                                    >
                                      https://www.simpletiger.com/services/geo-ai-search-optimization
                                    </a>
                                  </li>
                                  <li className="mt-2">
                                    Pronunciation Planet. (N/A). How to
                                    Pronounce ☁ SaaS CORRECTLY in English?
                                    (Video Transcript).
                                    <a
                                      href="https://www.getpronounce.com/how-to-pronounce/saas"
                                      className="text-blue"
                                      target="_blank"
                                    >
                                      https://www.getpronounce.com/how-to-pronounce/saas
                                    </a>
                                  </li>
                                  <li className="mt-2">
                                    (Pasted Text). (N/A). The correct
                                    pronunciation of "SaaS" is sass.
                                    <a
                                      href="https://www.getpronounce.com/how-to-pronounce/saas#:~:text=To%20pronounce%20saas%20correctly%2C%20focus,differently%20depending%20on%20regional%20accents"
                                      className="text-blue"
                                      target="_blank"
                                    >
                                      https://www.getpronounce.com/how-to-pronounce/saas#:~:text=To%20pronounce%20saas%20correctly%2C%20focus,differently%20depending%20on%20regional%20accents
                                    </a>
                                  </li>
                                  <li className="mt-2">
                                    Geeky Tech. (Various Dates). SEO Unfiltered
                                    Podcast Episodes (including Ep 3.8, Ep 3.7,
                                    Ep 3.6, Ep 3.5, Ep 3.4, Ep 3.3, Ep 3.2, Ep
                                    3.1, Ep 2.5, Ep 2.4, Ep 2.3, Ep 2.2, Ep 2.1,
                                    Ep 07, Ep 06, Ep 05, Ep 04, Ep 03, Ep 02, Ep
                                    01).
                                    <a
                                      href="https://www.geekytech.co.uk/seo-unfiltered-podcast/"
                                      className="text-blue"
                                      target="_blank"
                                    >
                                      https://www.geekytech.co.uk/seo-unfiltered-podcast/
                                    </a>
                                  </li>
                                  <li className="mt-2">
                                    Foundation Marketing. (N/A). Search Engine
                                    Optimization (SEO) vs Generative Engine
                                    Optimization (GEO): Key Differences and
                                    Strategies (Full Excerpt).
                                    <a
                                      href="https://www.quoleady.com/geo-vs-seo/"
                                      className="text-blue"
                                      target="_blank"
                                    >
                                      https://www.quoleady.com/geo-vs-seo/
                                    </a>
                                  </li>
                                  <li className="mt-2">
                                    Foundation Marketing. (N/A). What's
                                    Generative Engine Optimization (GEO) & How
                                    To Do It (Full Excerpt)
                                    <a
                                      href="https://aioseo.com/generative-engine-optimization-geo/"
                                      className="text-blue"
                                      target="_blank"
                                    >
                                      https://aioseo.com/generative-engine-optimization-geo/
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="post-footer panel vstack sm:hstack gap-3 justify-between justifybetween border-top py-4 mt-4 xl:mt-9">
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
      </article>
    </>
  );
}

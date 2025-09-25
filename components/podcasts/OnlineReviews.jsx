"use client";
// import Toc from "./Toc";
import RelatedBlogs from "../blogs/RelatedBlogs";
import Image from "next/image";
import Link from "next/link";
import { Gallery, Item } from "react-photoswipe-gallery";
import { useState } from "react";
import Blog1Faqs from "../blogs/faqs/Blog1Faqs";
import GEOCourseCTA from "@/components/common/GeoCTA";

export default function OnlineReviews({ blogItem }) {
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
                  Why Online Reviews Are Now the Most Powerful Ranking Signal in
                  AI Search
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
                    src="https://www.youtube.com/embed/-oo2Kihy9m8?si=WGUwLx24r0mM4J9d"
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
                {/* Audio Player */}
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
                            EP#17 Generative Engine Optimization Podcast |
                            5-Star Reviews Are Worthless (Unless AI Reads Them)
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
                        src="https://audio.getaimonitor.com/ConquerAISearchWithAI/Episode-17-Final-audio-file.mp3"
                      ></audio>
                      {/* </figure> */}
                      <hr className="w-100 m-0 d-block mt-4" />
                    </div>
                    <p className="mt-2">Also Available on:</p>
                    <div className="d-none lg:d-block">
                      <div className="hstack gap-4 mt-2 justify-center">
                        <a
                          href="https://open.spotify.com/episode/6h4iziLQ87GC3bcIQVXNz9?si=t0VHb1jxRvGFRZ-ILXDQew"
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
                          href="https://music.amazon.com/podcasts/638df449-1fbd-497d-a145-5315d8541611/episodes/44caf249-76b1-4980-b1b6-fbaeafcd80d6/conquer-ai-search-with-ai-ep-17-generative-engine-optimization-podcast-5-star-reviews-are-worthless-unless-ai-reads-them"
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
                        <a href="https://podcasts.apple.com/in/podcast/ep-17-generative-engine-optimization-podcast-5-star/id1806802986?i=1000719082667">
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
                        <a href="https://youtu.be/-oo2Kihy9m8?si=B6LXHIbYDNX7Qajt">
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
                        <a href="https://overcast.fm/+ABOivybdTgE">
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
                        </a>
                        <a href="https://castbox.fm/vi/831101211">
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
                        <a href="https://castro.fm/episode/MaaVXL">
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
                        </a>
                      </div>
                    </div>
                    {/* Phone */}
                    <div className="d-block lg:d-none">
                      <div className="hstack justify-center gap-2 items-center mt-1">
                        <a
                          href="https://open.spotify.com/episode/6h4iziLQ87GC3bcIQVXNz9?si=CihLgtdzTL6ynCikZFpb-w"
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
                          href="https://music.amazon.com/podcasts/638df449-1fbd-497d-a145-5315d8541611/episodes/44caf249-76b1-4980-b1b6-fbaeafcd80d6/conquer-ai-search-with-ai-ep-17-generative-engine-optimization-podcast-5-star-reviews-are-worthless-unless-ai-reads-them"
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
                        <a href="https://podcasts.apple.com/in/podcast/ep-17-generative-engine-optimization-podcast-5-star/id1806802986?i=1000719082667">
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
                        <a href="https://youtu.be/-oo2Kihy9m8?si=B6LXHIbYDNX7Qajt">
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

                {/* Tabs */}
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

                      {/* TOC */}
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
                                  🎙️ Conquer AI Search – Episode 17:
                                </h3>
                                <ol className="fs-5">
                                  <li className="mt-1">
                                    0:00 Intro to Episode 9
                                  </li>
                                  <li className="mt-1">
                                    0:30 Recap of Previous AI Optimization Tips
                                  </li>
                                  <li className="mt-1">
                                    1:22 Why Reviews Are Now Ranking Signals in
                                    AI Search
                                  </li>
                                  <li className="mt-1">
                                    2:04 Shift from Traditional SEO to AI
                                    Overviews
                                  </li>
                                  <li className="mt-1">
                                    2:50 Reviews as Discovery Tools, Not Just
                                    Trust Builders
                                  </li>
                                  <li className="mt-1">
                                    3:43 How AI Reads Reviews: Sentiment &
                                    Language
                                  </li>
                                  <li>
                                    4:30 UGC & Authenticity Boost AI Visibility
                                  </li>
                                  <li className="mt-1">
                                    5:08 Case Study: ReviewRecap.io Boosts AI
                                    Citations
                                  </li>
                                  <li className="mt-1">
                                    5:57 Importance of Multi-Platform Reviews
                                    (Not Just Google)
                                  </li>
                                  <li className="mt-1">
                                    6:31 Competing on Yelp & Using Long-Tail
                                    Keywords
                                  </li>
                                  <li className="mt-1">
                                    7:19 G2 Reviews in Tech: AI’s Favorite
                                    Source
                                  </li>
                                  <li className="mt-1">
                                    7:50 First-Party vs Third-Party Reviews
                                  </li>
                                  <li className="mt-1">
                                    8:44 What AI Looks for in Reviews: Recency,
                                    Detail, Realness
                                  </li>
                                  <li className="mt-1">
                                    9:56 Use Visuals & Videos in Reviews
                                  </li>
                                  <li className="mt-1">
                                    10:53 Action Tips: Respond, Monitor & Use
                                    Review Language
                                  </li>
                                  <li className="mt-1">
                                    11:16 Turn Negative Reviews Into SEO
                                    Positives
                                  </li>
                                  <li className="mt-1">
                                    12:34 Use Schema Markup to Help AI
                                    Understand Reviews
                                  </li>
                                  <li className="mt-1">
                                    13:47 Display Reviews Prominently on Your
                                    Website
                                  </li>
                                  <li className="mt-1">
                                    14:06 Final Thought: Reviews = Core SEO
                                    Infrastructure
                                  </li>
                                  <li className="mt-1">
                                    14:59 Outro & Preview of Episode 10
                                  </li>
                                </ol>
                              </div>
                            </div>
                          </div>
                        )}
                        {/* Blog */}
                        {activeTab == 2 && (
                          <div className="uc-active">
                            <div className="feature-item panel">
                              <div className="container container-80">
                                <Gallery>
                                  <div
                                    className="post-content panel fs-6 md:fs-5 ml-2"
                                    data-uc-lightbox="animation: scale"
                                  >
                                    <p>
                                      <b>
                                        How to make sure your reviews are seen
                                        and cited by ChatGPT, Google AI
                                        Overviews & Perplexity
                                      </b>
                                    </p>
                                    <h3 className="h5 xl:h4 mt-3 mb-2 xl:mb-3">
                                      What You’ll Learn:
                                    </h3>
                                    <ul>
                                      <li>
                                        ✅ Why reviews now influence AI
                                        visibility, not just human trust
                                      </li>
                                      <li className="mt-1">
                                        ✅ How sentiment analysis and NLP drive
                                        AI ranking
                                      </li>
                                      <li className="mt-1">
                                        ✅ Why Google reviews alone aren’t
                                        enough anymore
                                      </li>
                                      <li className="mt-1">
                                        ✅ How to use schema markup to make your
                                        reviews AI-digestible
                                      </li>
                                      <li className="mt-1">
                                        ✅ What platforms (like G2, Yelp,
                                        Reddit) matter most in 2025
                                      </li>
                                      <li className="mt-1">
                                        ✅ The actionable review strategy to
                                        future-proof your brand
                                      </li>
                                    </ul>
                                    <h3 className="h5 xl:h4 mt-3 mb-2 xl:mb-3">
                                      Welcome to the AI-Powered Review Era
                                    </h3>
                                    <p className="mt-3">
                                      In today’s digital battlefield,{" "}
                                      <b>ranking on AI platforms</b> like
                                      Google’s AI Overviews, ChatGPT, and
                                      Perplexity AI isn’t just about content
                                      anymore. It’s about{" "}
                                      <b>reputation signals</b> and at the heart
                                      of that lies something many brands
                                      overlook:
                                    </p>
                                    <h3 className="h5 xl:h4 mt-3 mb-2 xl:mb-3">
                                      Online reviews are now your SEO
                                      infrastructure.
                                    </h3>
                                    <p>
                                      They no longer just influence people. They
                                      influence algorithms.
                                    </p>
                                    <p className="mt-2">
                                      According to a recent Conquer AI Search
                                      with AI podcast episode by AI Monitor,
                                      reviews are rapidly becoming a primary
                                      source of AI discoverability, especially
                                      in a world where traditional blue-link
                                      search is declining.
                                    </p>

                                    <h2 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                                      1. The Search Landscape Has Shifted
                                      Permanently
                                    </h2>
                                    <p>
                                      Gartner predicts that by <b>2026,</b>{" "}
                                      traditional search engine usage will drop
                                      by <b>25%,</b> and by <b>2028,</b> more
                                      than half of user queries will go to AI
                                      answer engines instead of Google search.
                                    </p>
                                    <p className="mt-2">
                                      That means if your business doesn’t show
                                      up in <b>AI-generated answers,</b> your
                                      website traffic and visibility are at
                                      risk.
                                    </p>
                                    <p className="mt-2">
                                      Here’s what’s changing:
                                    </p>
                                    <ul className="mt-2">
                                      <li>
                                        Users are turning to{" "}
                                        <b>
                                          ChatGPT, Perplexity, and Google AI
                                          Overviews
                                        </b>{" "}
                                        for answers
                                      </li>
                                      <li className="mt-1">
                                        These tools <b>summarize</b> information
                                        instead of linking out
                                      </li>
                                      <li className="mt-1">
                                        And the #1 source they rely on?
                                        <b>
                                          Authentic, recent, and content-rich
                                          user reviews
                                        </b>
                                      </li>
                                    </ul>

                                    <h2 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                                      2. How AI Reads Reviews: Sentiment,
                                      Substance & Signals
                                    </h2>
                                    <p>
                                      AI platforms don’t just look at your star
                                      ratings. They break down:
                                    </p>
                                    <ul className="mt-2">
                                      <li>
                                        <b>Sentiment:</b> Is the tone positive,
                                        neutral, or negative?
                                      </li>
                                      <li className="mt-1">
                                        <b>Specificity:</b>Are the reviews vague
                                        or detailed?
                                      </li>
                                      <li className="mt-1">
                                        <b>Recency:</b> Are they recent and
                                        frequent or outdated and sparse?
                                      </li>
                                      <li className="mt-1">
                                        <b>Authenticity:</b> Do they read like
                                        real opinions, or marketing fluff?
                                      </li>
                                    </ul>
                                    <p className="mt-2">
                                      💡 AI systems like ChatGPT and Google NLP
                                      models now outperform humans in detecting
                                      review sentiment with 85% accuracy
                                      compared to just 58% for human analysts.
                                    </p>

                                    <h2 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                                      3. Not All Reviews Are Equal: First-Party
                                      vs. Third-Party
                                    </h2>
                                    <div className="panel mt-2 p-2 border rounded-1-5 lg:rounded-2 dark:border-gray-600 dark:bg-black overflowx-auto">
                                      <table className="uc-table uc-table-divider">
                                        <thead className="table-head sticky-top z-1 ">
                                          <tr className="table-row dark:border-white border-gray-900">
                                            <th
                                              className="table-header-cell"
                                              scope="row"
                                            >
                                              <span className="fw-bold fs-5 lg:fs-4 dark:text-secondary">
                                                Type
                                              </span>
                                            </th>
                                            <th
                                              className="table-header-cell"
                                              scope="row"
                                            >
                                              <span className="fw-bold fs-5 lg:fs-4 dark:text-secondary">
                                                Source
                                              </span>
                                            </th>
                                            <th
                                              className="table-header-cell"
                                              scope="row"
                                            >
                                              <span className="fw-bold fs-5 lg:fs-4 dark:text-secondary">
                                                SEO Value
                                              </span>
                                            </th>
                                          </tr>
                                        </thead>
                                        <tbody className="table-body">
                                          <tr className="table-row border-gray-900 dark:border-white">
                                            <th className="" scope="row">
                                              <div className="hstack gap-1 justify-start">
                                                <span className="fs-5 fw-bold text-dark dark:text-white">
                                                  First-Party Reviews
                                                </span>
                                              </div>
                                            </th>
                                            <td>
                                              <span className="dark:text-white">
                                                On your site
                                              </span>
                                            </td>
                                            <td>
                                              <span className="dark:text-white">
                                                Use review schema markup to help
                                                AI parse them
                                              </span>
                                            </td>
                                          </tr>
                                          <tr className="table-row border-gray-900 dark:border-white">
                                            <th className="" scope="row">
                                              <div className="hstack gap-1 justify-start">
                                                <span className="fs-5 fw-bold text-dark dark:text-white">
                                                  Third-Party Reviews
                                                </span>
                                              </div>
                                            </th>
                                            <td>
                                              <span className="dark:text-white">
                                                Google, Yelp, G2, Reddit
                                              </span>
                                            </td>
                                            <td>
                                              <span className="dark:text-white">
                                                Carry more independent
                                                credibility and are frequently
                                                cited by AI
                                              </span>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </div>
                                    <p className="mt-2">
                                      A winning strategy? <b>Use both.</b>
                                    </p>
                                    <ul className="mt-2">
                                      <li>
                                        ✅ Add structured first-party reviews
                                        with schema
                                      </li>
                                      <li className="mt-1">
                                        ✅ Encourage reviews on platforms AI
                                        trusts (see below)
                                      </li>
                                    </ul>
                                    <h2 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                                      4. Best Review Platforms for AI Visibility
                                      in 2025
                                    </h2>

                                    <p>
                                      AI doesn’t just look at Google. In fact,
                                      <b>
                                        60% of AI citations come from non-Google
                                        sources.
                                      </b>
                                    </p>
                                    <p className="mt-2">
                                      Top platforms AI pulls from:
                                    </p>
                                    <ul className="mt-2">
                                      <li>
                                        <b>G2 – </b> 43% more likely to be cited
                                        in B2B queries
                                      </li>
                                      <li className="mt-1">
                                        <b>Reddit –</b> a goldmine for
                                        authentic, user-first language
                                      </li>
                                      <li className="mt-1">
                                        <b>TripAdvisor –</b> dominates
                                        travel/local experiences
                                      </li>
                                      <li className="mt-1">
                                        <b>Yelp – </b> still key in local
                                        service categories
                                      </li>
                                      <li className="mt-1">
                                        <b>Facebook & niche directories –</b>=
                                        relevant for certain industries
                                      </li>
                                    </ul>
                                    <h2 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                                      5. Case Study: How ReviewRecap.io Boosted
                                      Their AI Visibility by 138%
                                    </h2>
                                    <p>
                                      The team at ReviewRecap.io, a review
                                      aggregation platform, approached AI
                                      Monitor with one goal: to
                                      <b>get featured in AI answers.</b>
                                    </p>
                                    <p className="mt-2">By combining:</p>
                                    <ul className="mt-2">
                                      <li>Real user reviews</li>
                                      <li className="mt-1">
                                        First-party structured content
                                      </li>
                                      <li className="mt-1">
                                        Multi-platform distribution
                                      </li>
                                    </ul>
                                    <p className="mt-2">
                                      They became <b>138% more likely</b> to be
                                      cited by AI platforms like ChatGPT and
                                      Google AI.
                                    </p>
                                    <h2 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                                      6. Strategic Tips to Optimize Reviews for
                                      AI Search
                                    </h2>
                                    <h3 className="h5 xl:h4 mt-3 mb-2 xl:mb-3">
                                      🧠 1. Monitor & Respond to Reviews
                                      Everywhere
                                    </h3>
                                    <p>
                                      Responding to reviews isn’t just customer
                                      service, it’s an SEO signal. Google
                                      considers business responses a ranking
                                      factor.
                                    </p>
                                    <h3 className="h5 xl:h4 mt-3 mb-2 xl:mb-3">
                                      📅 2. Prioritize Recency Over Perfection
                                    </h3>
                                    <p>
                                      A steady stream of 4-star reviews with
                                      substance is better than a one-time flood
                                      of 5-star fluff.
                                    </p>
                                    <h3 className="h5 xl:h4 mt-3 mb-2 xl:mb-3">
                                      🔑 3. Focus on Review Depth + Keywords
                                    </h3>
                                    <p>
                                      Encourage users to write detailed feedback
                                      using natural language. It’s long-tail
                                      keyword gold.
                                    </p>
                                    <h3 className="h5 xl:h4 mt-3 mb-2 xl:mb-3">
                                      🖼️ 4. Add Visuals (Photos, Videos)
                                    </h3>
                                    <p>
                                      User-generated media boosts
                                      discoverability in visual AI search.
                                      Optimize alt text and filenames.
                                    </p>
                                    <h3 className="h5 xl:h4 mt-3 mb-2 xl:mb-3">
                                      📊 5. Use Schema Markup
                                    </h3>
                                    <p>
                                      Add Review, AggregateRating, and FAQ
                                      schema to your site. AI will better
                                      understand your reputation and show it
                                      off.
                                    </p>
                                    <h3 className="h5 xl:h4 mt-3 mb-2 xl:mb-3">
                                      🔁 6. Turn Reviews Into Content
                                    </h3>
                                    <p>
                                      Mine reviews for blog ideas, FAQs, and
                                      pain points. Create helpful content around
                                      real questions customers ask.
                                    </p>
                                    <h2 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                                      7. Action Plan: Review Strategy Checklist
                                      for 2025
                                    </h2>
                                    <ul>
                                      <li>
                                        ✅ Audit your current review presence
                                        across all platforms
                                      </li>
                                      <li className="mt-1">
                                        ✅ Start collecting and displaying
                                        reviews on your site
                                      </li>
                                      <li className="mt-1">
                                        ✅ Apply a structured data schema to all
                                        reviews
                                      </li>
                                      <li className="mt-1">
                                        ✅ Encourage visual UGC in reviews
                                      </li>
                                      <li className="mt-1">
                                        ✅ Respond to every review—good or bad
                                      </li>
                                      <li className="mt-1">
                                        ✅ Leverage review content in SEO and
                                        blog strategy
                                      </li>
                                      <li className="mt-1">
                                        ✅ Double down on G2 (B2B), Reddit
                                        (tech), Yelp (local), and niche
                                        platforms
                                      </li>
                                      <li className="mt-1">
                                        ✅ Track citations in ChatGPT,
                                        Perplexity, and Google AI Overviews
                                      </li>
                                    </ul>
                                    <h2 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                                      8. Final Thoughts: Reviews Are Now Your
                                      Content
                                    </h2>
                                    <p>
                                      In the age of AI-powered search, your
                                      customers are writing your SEO whether you
                                      like it or not.
                                    </p>
                                    <p className="mt-2">
                                      “Your customers’ voices are more powerful
                                      than ever. Amplified by AI.”
                                    </p>

                                    <p className="mt-2">
                                      So if you want to conquer AI search, you
                                      need to treat reviews not as decoration…
                                      but as <b>infrastructure.</b>
                                    </p>
                                  </div>
                                </Gallery>
                              </div>
                            </div>
                          </div>
                        )}
                        {/* Transcript */}
                        {activeTab == 3 && (
                          <div className="uc-active">
                            <div className="feature-item panel">
                              <div className="container container-80">
                                <p>
                                  (0:05 - 0:10) <br />
                                  Hey, everyone, and welcome back to the Conquer
                                  AI Search podcast. It's great to be here with
                                  you. Hello.
                                </p>
                                <p>
                                  (0:11 - 0:18) <br />
                                  It's a pleasure to join you for another
                                  crucial conversation today. I'm Avi, and
                                  that's Catherine. We're both part of the team
                                  here at AI Monitor.
                                </p>
                                <p>
                                  (0:18 - 0:30)
                                  <br />
                                  And today, we're diving into our ninth episode
                                  in this 11-part series. That's right. We're
                                  exploring the most effective AI optimization
                                  techniques to really help you conquer AI
                                  searches.
                                </p>
                                <p>
                                  (0:30 - 0:39) <br />
                                  Think Google AI Overview, Chat GPT, Perplexity
                                  AI. Exactly. We want you to thrive in this,
                                  well, this new search world.
                                </p>

                                <p>
                                  (0:39 - 0:43)
                                  <br />
                                  And maybe it's helpful to quickly touch on
                                  what we've covered so far, just to set the
                                  stage. Good idea. Okay.
                                </p>

                                <p>
                                  (0:43 - 0:51)
                                  <br />
                                  So first off, we talked about implementing the
                                  LLM's TXT file, sort of like a guide for AI
                                  crawlers. Right. Telling them how to use your
                                  content.
                                </p>
                                <p>
                                  (0:51 - 1:00)
                                  <br />
                                  Then we looked at Reddit, why participating
                                  there strategically matters for AI visibility.
                                  A bit counterintuitive for some, but key.
                                  Definitely.
                                </p>
                                <p>
                                  (1:00 - 1:09)
                                  <br />
                                  We also covered using authoritative citations,
                                  evolving your SEO playbook beyond the
                                  traditional stuff. And why PR is suddenly so
                                  vital again for AI search. Public relations.
                                </p>

                                <p>
                                  (1:09 - 1:13)
                                  <br />
                                  Yeah. Essential now. And more recently,
                                  readability.
                                </p>
                                <p>
                                  (1:13 - 1:21)
                                  <br />
                                  Why that's the secret sauce. Then creating
                                  actual quality content that AI recognizes. Not
                                  just keyword stuffing, real quality.
                                </p>
                                <p>
                                  (1:21 - 1:45)
                                  <br />
                                  And just last time, we tackled long tail
                                  keywords, how to figure out those complex user
                                  prompts in AI search to boost your AIO, your
                                  artificial intelligence optimization. So that
                                  brings us to today, episode nine. And we're
                                  tackling something that, well, it keeps coming
                                  up as absolutely critical.
                                </p>
                                <p>
                                  (1:45 - 1:53)
                                  <br />
                                  Why getting reviews strategically is essential
                                  for AI search visibility. And the keyword
                                  there is strategically. Right.
                                </p>
                                <p>
                                  (1:53 - 2:03)
                                  <br />
                                  It's not just about having reviews anymore, is
                                  it? It seems like they've become this powerful
                                  AI ranking signal, not just for human trust.
                                  That's precisely it. The whole landscape is
                                  shifting under our feet.
                                </p>
                                <p>
                                  (2:04 - 2:09)
                                  <br />
                                  AI is, I mean, it's fundamentally changing the
                                  search experience. You mentioned bulldozing
                                  before we started recording. Huh.
                                </p>
                                <p>
                                  (2:04 - 2:09)
                                  <br />
                                  AI is, I mean, it's fundamentally changing the
                                  search experience. You mentioned bulldozing
                                  before we started recording. Huh.
                                </p>

                                <p>
                                  (2:10 - 2:18)
                                  <br />
                                  Well, it feels a bit like that sometimes. Look
                                  at the Gartner predictions we've seen. They're
                                  forecasting a 25% drop in traditional search
                                  engine volume by 2026.
                                </p>

                                <p>
                                  (2:18 - 2:20)
                                  <br />
                                  Wow. 25%. That's soon.
                                </p>

                                <p>
                                  (2:20 - 2:26)
                                  <br />
                                  It is. And potentially over 50% by 2028. Users
                                  are just migrating.
                                </p>

                                <p>
                                  (2:27 - 2:39)
                                  <br />
                                  They're moving to AI chatbots for instant
                                  answers. So people are ditching the 10 blue
                                  links for these answer engines like ChatGPT,
                                  Google's AI overviews, perplexity. Exactly.
                                </p>

                                <p>
                                  (2:39 - 2:49)
                                  <br />
                                  Which means that traffic, the organic traffic
                                  you used to count on coming to your website,
                                  well, it's seriously at risk now. If you're
                                  not in the AI answer, you're potentially
                                  invisible. Precisely.
                                </p>

                                <p>
                                  (2:50 - 3:06)
                                  <br />
                                  And this is where reviews become even more
                                  critical. In this AI-driven world, online
                                  reviews carry, frankly, more weight than ever.
                                  More weight how? They influence consumer
                                  decisions, obviously, but now they also
                                  heavily influence search engine rankings, AI
                                  rankings, if they're moving from being just,
                                  you know, conversion tools.
                                </p>

                                <p>
                                  (3:06 - 3:11)
                                  <br />
                                  Helping someone decide to buy once they're on
                                  your site. Right. To becoming discovery
                                  signals.
                                </p>

                                <p>
                                  (3:11 - 3:17)
                                  <br />
                                  Yeah. Signals that AI uses to understand your
                                  business, evaluate it, and decide whether to
                                  even show it in the first place. Okay.
                                </p>

                                <p>
                                  (3:17 - 3:24)
                                  <br />
                                  That discovery piece is huge. And you
                                  mentioned Google AI overviews specifically.
                                  They're showing up a lot, aren't they? Oh,
                                  absolutely.
                                </p>

                                <p>
                                  (3:24 - 3:29)
                                  <br />
                                  The data shows they appear in nearly
                                  two-thirds of local business search queries.
                                  Two-thirds. Yeah.
                                </p>

                                <p>
                                  (3:29 - 3:38)
                                  <br />
                                  So think about that. A user's first
                                  impression, their whole perception of your
                                  business, maybe even their final decision.
                                  That can all happen right there in the AI
                                  overview.
                                </p>

                                <p>
                                  (3:39 - 3:42)
                                  <br />
                                  Before they even click a single link to your
                                  site. Often, yes. Yeah.
                                </p>

                                <p>
                                  (3:42 - 3:53)
                                  <br />
                                  You're being judged based on what the AI
                                  synthesizes about you, largely from reviews.
                                  Okay. So how does AI, how does it process
                                  these reviews? Not just counting stars, right?
                                  Not at all.
                                </p>

                                <p>
                                  (3:53 - 3:57)
                                  <br />
                                  It's much more sophisticated. First, there's
                                  sentiment analysis. Okay.
                                </p>

                                <p>
                                  (3:57 - 4:07)
                                  <br />
                                  AI uses natural language processing, NLP, to
                                  understand the sentiment. Is the review
                                  positive, negative, neutral? What's the
                                  underlying feeling? And it's good at this.
                                  Surprisingly good.
                                </p>

                                <p>
                                  (4:08 - 4:16)
                                  <br />
                                  NLP tools can nail the sentiment correctly
                                  about 85% of the time. Compare that to human
                                  analysts, who are around 58%. 85%? Yeah.
                                </p>

                                <p>
                                  (4:16 - 4:21)
                                  <br />
                                  That's a game changer. It means the words
                                  matter immensely, not just the rating.
                                  Absolutely.
                                </p>

                                <p>
                                  (4:21 - 4:29)
                                  <br />
                                  It elevates the qualitative feedback. Every
                                  detail, every nuance in the language can be
                                  picked up and factored in. So you need more
                                  than just volume.
                                </p>

                                <p>
                                  (4:29 - 4:38)
                                  <br />
                                  You need substance in those reviews. Exactly.
                                  And beyond sentiment, reviews are a critical
                                  form of user-generated content, UGC.
                                </p>

                                <p>
                                  (4:38 - 4:48)
                                  <br />
                                  Right. Content made by users, not the brand.
                                  And Google's own ranking systems prioritize,
                                  and they say this explicitly, helpful,
                                  reliable, people-first content.
                                </p>

                                <p>
                                  (4:49 - 4:57)
                                  <br />
                                  Reviews are pure gold for that. Because
                                  they're authentic. Authentic, diverse,
                                  reflecting real-world language, real user
                                  intent.
                                </p>

                                <p>
                                  (4:57 - 5:07)
                                  <br />
                                  This UGC helps the AI refine its results,
                                  offer better answers, and build trust with
                                  users. It's like this huge, constantly updated
                                  database of genuine opinions. Okay.
                                </p>

                                <p>
                                  (5:07 - 5:22)
                                  <br />
                                  So reviews are feeding the AI, shaping how it
                                  sees and presents businesses. Given that, how
                                  do we actually use this? How do we manage
                                  reviews strategically? Well, let's look at a
                                  practical example, the ReviewRecap.io case
                                  study that came up in the materials. Right.
                                </p>

                                <p>
                                  (5:22 - 5:29)
                                  <br />
                                  The platform that aggregates and blends
                                  reviews. Correct. They aggregate reviews from
                                  multiple sources, but also blend them with
                                  authentic, human-written reviews on their own
                                  site.
                                </p>

                                <p>
                                  (5:29 - 5:42)
                                  <br />
                                  They actually came to us at AI Monitor for
                                  some consulting. Oh, interesting. What do they
                                  need help with? They specifically wanted to
                                  know how to structure and distribute their
                                  content to get maximum exposure in those
                                  AI-generated responses.
                                </p>

                                <p>
                                  (5:42 - 5:56)
                                  <br />
                                  And how did that work out? The results were
                                  pretty striking. Their content became 138%
                                  more likely to be cited by AI responses on
                                  platforms like ChatGPT, Google AI Overviews,
                                  and Perplexity. 138%.
                                </p>

                                <p>
                                  (5:56 - 5:58)
                                  <br />
                                  Wow. Yeah. It really hammers home the point.
                                </p>

                                <p>
                                  (5:59 - 6:11)
                                  <br />
                                  If your content is optimized for AI,
                                  especially combining structured summaries with
                                  real user reviews, it's significantly more
                                  likely to get surfaced. It's not just having
                                  reviews, it's making them digestible for the
                                  AI. Precisely.
                                </p>

                                <p>
                                  (6:11 - 6:20)
                                  <br />
                                  Digestible and credible. Which leads right
                                  into the need for a multi-platform review
                                  strategy, doesn't it? AI isn't just looking at
                                  Google reviews. Not at all.
                                </p>

                                <p>
                                  (6:20 - 6:30)
                                  <br />
                                  That's a crucial takeaway. AI overviews
                                  aggregate info from all over the web. In fact,
                                  over 60% of the citations in AI overviews,
                                  they come from non-Google sources.
                                </p>

                                <p>
                                  (6:30 - 6:41)
                                  <br />
                                  60%? Like where? Reddit, TripAdvisor, Yelp,
                                  local blogs, industry-specific directories.
                                  You name it. So focusing only on your Google
                                  business profile, while important, is, well,
                                  it's not enough.
                                </p>

                                <p>
                                  (6:42 - 6:58)
                                  <br />
                                  It leaves you invisible in a huge chunk of
                                  potential AI answers. You need that broad
                                  digital reputation, that consistency across
                                  relevant platforms. Okay, so what about
                                  specific platforms, like Yelp? It often
                                  dominates local search, right? It does.
                                </p>

                                <p>
                                  (6:58 - 7:10)
                                  <br />
                                  Especially for those broader plural queries,
                                  like plumbers in Denver. But there are ways to
                                  compete. How so? Businesses can target highly
                                  specific, long-tail keywords where Yelp might
                                  not be as strong.
                                </p>

                                <p>
                                  (7:11 - 7:18)
                                  <br />
                                  Think affordable private anxiety therapist in
                                  Chicago available on weekends. Very specific.
                                  Right, much more niche.
                                </p>

                                <p>
                                  (7:18 - 7:29)
                                  <br />
                                  Or you can really double down on optimizing
                                  your Google business profile to win in that
                                  local three-pack that still appears. And some
                                  users actively avoid Yelp because you need the
                                  app. Ah, good point.
                                </p>

                                <p>
                                  (7:29 - 7:37)
                                  <br />
                                  That creates openings elsewhere. It does. And
                                  for anyone listening in the SaaS or tech
                                  world, there's one platform that stands out
                                  dramatically.
                                </p>

                                <p>
                                  (7:37 - 7:40)
                                  <br />
                                  Which one's that? G2. The data is incredibly
                                  clear here. Yeah.
                                </p>

                                <p>
                                  (7:40 - 7:49)
                                  <br />
                                  Reviews on G2 are 43% more likely to be quoted
                                  by AI summaries than any other platform in
                                  that B2B tech space. 43% more likely. That's
                                  massive.
                                </p>

                                <p>
                                  (7:49 - 7:57)
                                  <br />
                                  It's a huge signal. If you're in SaaS or tech,
                                  you absolutely must focus on G2. Not just
                                  getting reviews, but getting detailed ones.
                                </p>

                                <p>
                                  (7:58 - 8:05)
                                  <br />
                                  Both the quantitative scores and that rich,
                                  qualitative feedback. Because G2's format is
                                  easy for AI to parse and trust. Exactly.
                                </p>

                                <p>
                                  (8:06 - 8:10)
                                  <br />
                                  Structured, verified reviews. AI loves that.
                                  Okay, so platform matters.
                                </p>

                                <p>
                                  (8:11 - 8:20)
                                  <br />
                                  What about the type of reviews? You see
                                  distinctions between first-party and
                                  third-party. Yes, definitely. First-party
                                  reviews are the ones you collect and host
                                  yourself on your own website.
                                </p>

                                <p>
                                  (8:21 - 8:26)
                                  <br />
                                  You can use schema markup on these to help AI
                                  understand them. Like adding structured data
                                  tags. Correct.
                                </p>

                                <p>
                                  (8:26 - 8:38)
                                  <br />
                                  Then you have third-party reviews on places
                                  like Google, Yelp, Facebook, TripAdvisor,
                                  Reddit, G2, etc. These are often seen as more
                                  objective by users. And AI seems to cite them
                                  frequently.
                                </p>

                                <p>
                                  (8:38 - 8:43)
                                  <br />
                                  Very frequently, yes. Because of that
                                  perceived independence. The bottom line is,
                                  you really need both.
                                </p>

                                <p>
                                  (8:43 - 8:50)
                                  <br />A mix for comprehensive coverage and
                                  trust. Exactly. You need that consistent story
                                  wherever someone or some AI looks.
                                </p>

                                <p>
                                  (8:50 - 8:57)
                                  <br />
                                  Makes sense. Now what about the
                                  characteristics within the reviews themselves?
                                  What does AI value? Okay, several key things
                                  here. First, recency.
                                </p>

                                <p>
                                  (8:58 - 9:03)
                                  <br />
                                  This is huge. How recent? Well, think about
                                  users. More than two-thirds prioritize recent
                                  reviews.
                                </p>

                                <p>
                                  (9:04 - 9:09)
                                  <br />
                                  So businesses need a consistent, steady flow.
                                  Not just a big push once a year. Right.
                                </p>

                                <p>
                                  (9:10 - 9:22)
                                  <br />A flood followed by silence isn't ideal.
                                  AI, like humans, needs current signals that
                                  you're trustworthy now. An old five-star
                                  review doesn't mean nearly as much as a steady
                                  stream of recent four-star ones.
                                </p>

                                <p>
                                  (9:22 - 9:30)
                                  <br />
                                  Okay, steady velocity. What about star
                                  ratings? Is it still all about getting five
                                  stars? It matters. But maybe not how you
                                  think.
                                </p>

                                <p>
                                  (9:30 - 9:37)
                                  <br />
                                  Yes, 73% of consumers won't even consider
                                  businesses below four stars. That's kind of
                                  the table state. So four is the minimum
                                  target.
                                </p>

                                <p>
                                  (9:37 - 9:46)
                                  <br />
                                  Pretty much. But here's the interesting part.
                                  69% of people are actually okay with brands
                                  that don't have a perfect 5.0, as long as the
                                  reviews are recent and feel authentic.
                                </p>

                                <p>
                                  (9:46 - 9:55)
                                  <br />
                                  So chasing perfection might be less important
                                  than being consistently good and current.
                                  Precisely. Focus on solid four-star-plus
                                  reviews with real detail.
                                </p>

                                <p>
                                  (9:56 - 10:06)
                                  <br />A few honest, maybe even slightly
                                  critical but well-addressed points could
                                  actually build more trust than a suspiciously
                                  perfect record. Authenticity trumps
                                  perfection. Got it.
                                </p>

                                <p>
                                  (10:06 - 10:13)
                                  <br />
                                  What else? Content depth. Encourage customers
                                  to share details, specifics. Why depth?
                                  Because AI enables much more granular
                                  searches.
                                </p>

                                <p>
                                  (10:14 - 10:29)
                                  <br />
                                  People won't just ask, best car dealer near
                                  me. They might ask, which car dealer near me
                                  has the best reputation for fast oil changes
                                  without pushy upselling? Ah, okay. So
                                  descriptive reviews with relevant keywords
                                  help you match those super specific queries?
                                  Exactly.
                                </p>

                                <p>
                                  (10:29 - 10:36)
                                  <br />
                                  The more detail, the more potential matches
                                  for those complex AI prompts. And visuals. Do
                                  pictures and reviews matter? Yes.
                                </p>

                                <p>
                                  (10:37 - 10:52)
                                  <br />
                                  User-generated visuals are often overlooked
                                  but increasingly important. Encourage
                                  customers to post photos, maybe even short
                                  videos. How does that help with AI? High
                                  quality images, especially if they have clear
                                  file names and alt text, boost discoverability
                                  through visual search, which AI is integrating
                                  more and more.
                                </p>

                                <p>
                                  (10:52 - 10:58)
                                  <br />
                                  Video. Optimize video reviews for platforms
                                  like YouTube. Remember, YouTube is the second
                                  biggest search engine.
                                </p>

                                <p>
                                  (10:59 - 11:04)
                                  <br />
                                  Visuals add a whole other layer of rich data
                                  for AI. Okay. This is incredibly helpful.
                                </p>

                                <p>
                                  (11:04 - 11:15)
                                  <br />
                                  We understand the landscape, why reviews
                                  matter more, what AI looks for. So let's get
                                  really practical. What should people listening
                                  be doing right now? What are the actionable
                                  strategies? Right.
                                </p>

                                <p>
                                  (11:15 - 11:20)
                                  <br />
                                  Let's shift to the how-to. First and foremost,
                                  you absolutely have to monitor and respond to
                                  reviews. All of them.
                                </p>

                                <p>
                                  (11:21 - 11:29)
                                  <br />
                                  Both positive and negative? Both. Actively
                                  monitoring and responding is critical. Google
                                  actually considers owner responses an SEO
                                  signal.
                                </p>

                                <p>
                                  (11:29 - 11:37)
                                  <br />
                                  Really? Responding helps your ranking. It can,
                                  yes. Prompt professional replies show you're
                                  engaged, you care about customer service.
                                </p>

                                <p>
                                  (11:37 - 11:46)
                                  <br />
                                  And think about the user perception. 92% of
                                  consumers say responding is just basic
                                  customer service. And doesn't it give you a
                                  second chance sometimes? Absolutely.
                                </p>

                                <p>
                                  (11:46 - 11:56)
                                  <br />
                                  73% of people say they'll give a business a
                                  second chance if they see a thoughtful reply
                                  to a complaint. It's not just being polite.
                                  It's smart business and good AIO.
                                </p>

                                <p>
                                  (11:56 - 12:05)
                                  <br />
                                  Okay. Monitor and respond. What about those
                                  negative reviews? They sting, but can you use
                                  them? You can actually leverage negative
                                  reviews.
                                </p>

                                <p>
                                  (12:05 - 12:16)
                                  <br />
                                  It sounds odd, but bear with me. Negative
                                  reviews, while not ideal, show user
                                  engagement. When you respond professionally,
                                  you demonstrate that you're listening, you're
                                  committed to improvement.
                                </p>

                                <p>
                                  (12:16 - 12:24)
                                  <br />
                                  That active participation can actually be
                                  viewed positively by search algorithms. So
                                  engaging shows you're active and trying.
                                  Exactly.
                                </p>

                                <p>
                                  (12:24 - 12:33)
                                  <br />
                                  And publicly resolving a complaint. That
                                  enhances the user experience for everyone
                                  reading, which is a key ranking factor. It
                                  shows you're real, not hiding.
                                </p>

                                <p>
                                  (12:33 - 12:40)
                                  <br />
                                  It turns a negative into a potential positive
                                  signal. Okay. What else? Utilize review
                                  content for keywords and ideas.
                                </p>

                                <p>
                                  (12:40 - 12:51)
                                  <br />
                                  Reviews are just a goldmine of customer
                                  language. How so? They tell you customer
                                  preferences, their pain points, and crucially,
                                  they're packed with the long-tail keywords
                                  your customers actually use. The exact phrases
                                  people search for.
                                </p>

                                <p>
                                  (12:51 - 12:55)
                                  <br />
                                  Right. So take that language. Use it to
                                  inspire new content.
                                </p>

                                <p>
                                  (12:55 - 13:06)
                                  <br />
                                  Blog posts, FAQs, videos. Address the
                                  questions and concerns you see in reviews
                                  using the words your customers use. Like
                                  turning a complaint about parking into a guide
                                  on where to park.
                                </p>

                                <p>
                                  (13:06 - 13:12)
                                  <br />
                                  Perfect example. It's responsive, helpful, and
                                  uses relevant keywords naturally. Smart.
                                </p>

                                <p>
                                  (13:13 - 13:17)
                                  <br />
                                  What about the technical side? Schema. Yes.
                                  Absolutely essential.
                                </p>

                                <p>
                                  (13:17 - 13:27)
                                  <br />
                                  Implement review schema markup. This is
                                  structured data that helps search engines and
                                  AI systems understand your review content.
                                  It's how the stars show up in search results.
                                </p>

                                <p>
                                  (13:27 - 13:28)
                                  <br />
                                  That's one benefit. Yes. Yeah.
                                </p>

                                <p>
                                  (13:29 - 13:46)
                                  <br />
                                  Which increases click-through rates. But
                                  schema, especially things like FAQ schema
                                  built from review questions, aligns perfectly
                                  with how AI processes information. It makes
                                  your content easier for AI to categorize and
                                  surface, boosting visibility in things like
                                  people also ask and featured snippets.
                                </p>

                                <p>
                                  (13:46 - 13:55)
                                  <br />
                                  You're basically spoon-feeding the AI the
                                  structured data it needs. Pretty much. Make it
                                  easy for the AI to understand you're relevant
                                  and authoritative based on what your customers
                                  say.
                                </p>

                                <p>
                                  (13:55 - 14:00)
                                  <br />
                                  One more. A simple one, but effective. Display
                                  positive reviews prominently on your own
                                  website.
                                </p>

                                <p>
                                  (14:00 - 14:05)
                                  <br />
                                  Like on product pages or a testimonials page.
                                  Exactly. Put them where potential customers
                                  will see them.
                                </p>

                                <p>
                                  (14:06 - 14:24)
                                  <br />
                                  It builds immediate trust, credibility, it's
                                  powerful social proof reinforcing your value
                                  to humans, not just the AI. So pulling this
                                  all together, it really feels like reputation
                                  management, especially through reviews, isn't
                                  just a nice-to-have anymore, it's
                                  infrastructure. That's a great way to put it.
                                </p>

                                <p>
                                  (14:24 - 14:30)
                                  <br />
                                  It's foundational infrastructure for your
                                  online presence in this AI era. It underpins
                                  everything. It really does.
                                </p>

                                <p>
                                  (14:31 - 14:43)
                                  <br />
                                  And maybe the final thought to leave listeners
                                  with is this. In this rapidly evolving
                                  AI-driven search landscape, your customers'
                                  voices are genuinely more powerful than ever
                                  before. Amplified by AI.
                                </p>

                                <p>
                                  (14:43 - 14:58)
                                  <br />
                                  Amplified by AI. So the critical question for
                                  you is, how will you ensure these authentic,
                                  real-world insights are not just heard, but
                                  strategically amplified by AI to truly conquer
                                  your online visibility? That is the question.
                                  Fantastic insights today.
                                </p>

                                <p>
                                  (14:59 - 15:11)
                                  <br />
                                  That wraps up today's episode of Conquer AI
                                  Search. Thanks so much for tuning in. If you
                                  enjoyed the conversation, make sure to follow
                                  or subscribe wherever you're listening,
                                  whether that's Spotify, Apple Podcasts,
                                  Audible, Amazon Music, or right here on
                                  YouTube.
                                </p>

                                <p>
                                  (15:11 - 15:24)
                                  <br />
                                  And hey, if you got value out of this episode,
                                  perhaps consider leaving a rating or review
                                  yourself. It really does help us reach more
                                  listeners like you. See you next Saturday with
                                  our 10th AI Optimization or Generative Engine
                                  Optimization Technique.
                                </p>
                              </div>
                            </div>
                          </div>
                        )}
                        {/* Source */}
                        {activeTab == 4 && (
                          <div className="uc-active">
                            <div className="feature-item panel">
                              <div className="container container-80">
                                <h2 className="text-center">📚 Sources:</h2>
                                <ul className="fs-5">
                                  <li className="mt-2">
                                    Thrive Agency –
                                    <a
                                      href="https://thriveagency.com/news/why-online-reviews-matter-even-more-with-ai-powered-search/"
                                      className="text-blue"
                                      target="_blank"
                                    >
                                      Why Online Reviews Matter Even More With
                                      AI-Powered Search
                                    </a>
                                  </li>
                                  <li className="mt-2">
                                    Reputation.com –
                                    <a
                                      href="https://reputation.com/resources/articles/why-ratings-and-reviews-matter-more-with-ai-powered-search/"
                                      className="text-blue"
                                      target="_blank"
                                    >
                                      Why Ratings and Reviews Matter More With
                                      AI-Powered Search
                                    </a>
                                  </li>
                                  <li className="mt-2">
                                    Reddit SEO –
                                    <a
                                      href="https://www.reddit.com/r/SEO/comments/c8t3hp/yelp_dominating_local_google_rankings/"
                                      className="text-blue"
                                      target="_blank"
                                    >
                                      Yelp Dominating Local Google Rankings
                                    </a>
                                  </li>
                                  <li className="mt-2">
                                    Search Engine Journal -
                                    <a
                                      href="https://www.searchenginejournal.com/your-reviews-are-ranking-you-or-not-how-to-stay-visible-in-googles-ai-era-spa/550218/"
                                      className="text-blue"
                                      target="_blank"
                                    >
                                      Your Reviews Are Ranking You (or Not): How
                                      to Stay Visible in Google’s AI Era
                                    </a>
                                  </li>
                                  <li className="mt-2">
                                    Anecdote AI –
                                    <a
                                      href="https://www.anecdoteai.com/blog/how-to-analyze-google-customer-reviews-with-ai"
                                      className="text-blue"
                                      target="_blank"
                                    >
                                      How to Analyze Google Customer Reviews
                                      With AI
                                    </a>
                                  </li>
                                  <li className="mt-2">
                                    SEO Locale –
                                    <a
                                      href="https://seolocale.com/leverage-google-reviews-for-seo-success-7-strategies/"
                                      className="text-blue"
                                      target="_blank"
                                    >
                                      Leverage Google Reviews for SEO Success: 7
                                      Strategies
                                    </a>
                                  </li>
                                  <li className="mt-2">
                                    LinkGraph –
                                    <a
                                      href="https://www.linkgraph.com/blog/how-negative-reviews-impact-seo/"
                                      className="text-blue"
                                      target="_blank"
                                    >
                                      How Negative Reviews Impact SEO
                                    </a>
                                  </li>
                                  <li className="mt-2">
                                    LinkedIn (Lesieur) –
                                    <a
                                      href="https://www.linkedin.com/posts/lesieur_gartner-predicts-that-by-2028-organic-search-activity-7346151613620797440-iOAL/"
                                      className="text-blue"
                                      target="_blank"
                                    >
                                      Gartner Predicts That by 2028 Organic
                                      Search Will Be Obsolete
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

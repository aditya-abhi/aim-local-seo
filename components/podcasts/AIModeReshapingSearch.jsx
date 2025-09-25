"use client";
// import Toc from "./Toc";
import RelatedBlogs from "../blogs/RelatedBlogs";
import Image from "next/image";
import Link from "next/link";
import { Gallery, Item } from "react-photoswipe-gallery";
import { useState } from "react";
import Blog1Faqs from "../blogs/faqs/Blog1Faqs";
import GEOCourseCTA from "@/components/common/GeoCTA";

export default function AIModeReshapingSearch({ blogItem }) {
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
              <span className="opacity-50">Podcast</span>
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
                  How AI Mode Is Reshaping Search—and What Marketers Need to Do
                  About It
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
                    src="https://www.youtube.com/embed/PSIdhCqd9W0?si=GNkZNv6nGz1fBW6F"
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
                            Ep #5: Navigating Google's AI Mode: SEO, Ads & the
                            Future of Search
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
                        src="https://audio.getaimonitor.com/ConquerAISearchWithAI/episode-5-final.mp3"
                      ></audio>
                      {/* </figure> */}
                      <hr className="w-100 m-0 d-block mt-4" />
                    </div>
                    <p className="mt-2">Also Available on:</p>
                    <div className="d-none lg:d-block">
                      {/* <div className="row child-cols-3 sm:child-cols-6 xl:child-cols-3 col-match g-2 justify-between hstack mt-2"> */}
                      <div className="hstack gap-4 mt-2 justify-center">
                        <a
                          href="https://open.spotify.com/episode/68NfOkh3xxkaOqBGmQXBta?si=J8wE1EzMQ2a40RqtWMLydw"
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
                          href="https://music.amazon.com/podcasts/638df449-1fbd-497d-a145-5315d8541611/episodes/4412d904-5b4e-4a8c-a5d1-977393f0be66/conquer-ai-search-with-ai-ep-5-navigating-google's-ai-mode-seo-ads-the-future-of-search-conquer-ai-search-with-ai"
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
                        <a href="https://podcasts.apple.com/in/podcast/ep-5-navigating-googles-ai-mode-seo-ads-the-future/id1806802986?i=1000705955779">
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
                        <a href="https://youtu.be/PSIdhCqd9W0?si=-anbgUjm2winYelH">
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
                        <a href="https://overcast.fm/+BOivzKGnnc">
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
                        <a href="https://overcast.fm/+BOivzKGnnc">
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
                        <a href="https://castro.fm/episode/A4qxnx">
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
                      {/* </div> */}
                    </div>
                    <div className="d-block lg:d-none">
                      <div className="hstack justify-center gap-2 items-center mt-1">
                        <a
                          href="https://open.spotify.com/episode/68NfOkh3xxkaOqBGmQXBta?si=3Ti4Y8qbQhyxH0Ual4iHgA"
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
                          href="https://music.amazon.com/podcasts/638df449-1fbd-497d-a145-5315d8541611/episodes/4412d904-5b4e-4a8c-a5d1-977393f0be66/conquer-ai-search-with-ai-ep-5-navigating-google's-ai-mode-seo-ads-the-future-of-search-conquer-ai-search-with-ai"
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
                        <a href="https://podcasts.apple.com/in/podcast/ep-5-navigating-googles-ai-mode-seo-ads-the-future/id1806802986?i=1000705955779">
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
                        <a href="https://youtu.be/PSIdhCqd9W0?si=-anbgUjm2winYelH">
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
                                  🎙️ Conquer AI Search Podcast – Ep. 5
                                </h3>
                                <ol className="fs-5">
                                  <li>Intro & Giveaway (0:03 – 0:38)</li>
                                  <li>AI Search Landscape (0:43 – 1:16)</li>
                                  <li>Episode Focus (1:20 – 1:53)</li>
                                  <li>Google AI Mode Overview (1:55 – 2:37)</li>
                                  <li>Content Creation Impact (2:40 – 3:40)</li>
                                  <li>
                                    Citations & Query Fan-Out (3:45 – 4:47)
                                  </li>
                                  <li>Product & Place Cards (4:50 – 5:09)</li>
                                  <li>
                                    Changing Search Behavior (5:13 – 6:41)
                                  </li>
                                  <li>Ads in AI Results (6:44 – 9:16)</li>
                                  <li>AI Monitor Tools (9:17 – 12:50)</li>
                                  <li>
                                    Key Takeaways & Actions (12:51 – 14:51)
                                  </li>
                                  <li>Closing Remarks (14:52 – 14:53)</li>
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
                                      The ground is shifting beneath our feet.
                                    </p>
                                    <p className="mt-3">
                                      If you’re in content marketing, SEO, or
                                      inbound strategy, you’ve probably felt it,
                                      the way people search online is changing
                                      fast. AI isn’t just creeping into search,
                                      it’s reshaping the entire experience. And
                                      tools like Google’s new AI Mode are at the
                                      heart of that transformation.
                                    </p>
                                    <p className="mt-3">
                                      This isn’t a trend we can afford to
                                      ignore. These changes are directly hitting
                                      how we attract traffic, convert leads, and
                                      justify ROI. So, let’s break it all
                                      down—what AI Mode really is, what it means
                                      for your content strategy, and how to stay
                                      ahead of the curve.
                                    </p>
                                    <h2 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                                      What Is Google’s AI Mode—and Why Should
                                      You Care?
                                    </h2>
                                    <p>
                                      AI Mode is an experimental feature
                                      currently available in Google Search Labs
                                      (U.S. only, 18+, with search history
                                      turned on). It runs on a custom version of
                                      Gemini 2.0, and unlike the passive
                                      summaries in AI Overviews, this tool is
                                      all about interactivity.
                                    </p>
                                    <p className="mt-3">
                                      You’re not just getting a quick snippet.
                                      You can ask follow-up questions. Upload
                                      images. Drill deeper into multi-layered
                                      queries—all without leaving the results
                                      page. It’s like chatting with a
                                      supercharged assistant that has Google’s
                                      real-time search data at its fingertips.
                                    </p>

                                    <p className="mt-3">
                                      This new model favors exploration. It’s
                                      designed for those complex,
                                      comparison-heavy queries—think “Which
                                      smartwatch has the best sleep tracking
                                      under $300?” or “What are the pros and
                                      cons of solar panels in cloudy climates?”
                                    </p>
                                    <h2 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                                      What Does That Mean for SEO and Content
                                      Strategy?
                                    </h2>
                                    <p>
                                      If you’re still targeting isolated
                                      keywords and simple answers, it might be
                                      time to rethink your approach.
                                    </p>
                                    <ul className="mt-2">
                                      <li>
                                        Interactivity reshapes content needs.
                                        Users will ask follow-ups—your content
                                        should anticipate and guide those
                                        journeys.
                                      </li>
                                      <li>
                                        Nuance wins. AI Mode is great at
                                        understanding detailed, contextual
                                        questions. Your content needs to match
                                        that depth.
                                      </li>
                                      <li>
                                        Comprehensiveness is key. Enter “query
                                        fan-out.” Google’s AI breaks a question
                                        into sub-questions, searches them all at
                                        once, and synthesizes the results. If
                                        your page only answers one narrow angle?
                                        You might get skipped.
                                      </li>
                                    </ul>
                                    <p className="mt-3">
                                      Let’s say someone searches “best ways to
                                      manage remote teams with time zone
                                      differences.” AI Mode might break that
                                      into tools, scheduling strategies,
                                      communication tips, and case studies. Your
                                      content needs to hit multiple layers to
                                      stand a chance of being cited.
                                    </p>
                                    <h2 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                                      Yes, There’s Still a Path to Traffic
                                    </h2>

                                    <p>
                                      Some marketers are worried—rightfully
                                      so—that AI will just answer everything
                                      upfront, cutting out the need for clicks.
                                      But here’s the good news: Google’s AI Mode
                                      still includes links and citations. If
                                      your content is used to build that
                                      response, your site gets visibility.
                                    </p>
                                    <p className="mt-3">
                                      But visibility doesn’t always mean
                                      traffic—especially as AI answers push
                                      traditional organic links further down the
                                      page.
                                    </p>
                                    <h2 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                                      Ads in AI Results: What You Need to Know
                                    </h2>

                                    <p>
                                      Let’s talk money. Google has started
                                      integrating ads directly into AI
                                      Overviews, and it’s expected that AI Mode
                                      will follow suit.
                                    </p>
                                    <p className="mt-3">
                                      These aren’t sidebar ads—they’re in the
                                      summary, clearly labeled as sponsored, and
                                      often highly relevant. If someone searches
                                      for “how to get grass stains out of
                                      jeans,” the AI might recommend a cleaning
                                      technique, and then show a sponsored
                                      product suggestion right there.
                                    </p>
                                    <p className="mt-3">
                                      This changes the game in two ways:
                                    </p>
                                    <ol>
                                      <li classname="mt-3">
                                        Organic CTRs may drop. Early reports
                                        show noticeable drops in click-through
                                        rates when AI summaries appear.
                                      </li>
                                      <li>
                                        Paid strategy must evolve. Ad creative
                                        needs to feel natural and helpful in a
                                        conversational context. Think beyond
                                        keywords. Think relevance, timing, and
                                        value.
                                      </li>
                                    </ol>
                                    <h2 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                                      Why You Need Better Analytics for AI
                                      Traffic
                                    </h2>

                                    <p>
                                      Here’s the kicker: tools like Google
                                      Analytics weren’t built for this new
                                      world.
                                    </p>
                                    <p className="mt-3">
                                      A huge chunk of AI-influenced traffic is
                                      invisible in traditional tools. Whether
                                      it’s traffic from a ChatGPT user clicking
                                      a cited link, or a visit driven by
                                      Google’s AI answer pointing to your
                                      blog—you might never see it unless you’re
                                      looking for it.
                                    </p>
                                    <p className="mt-3">
                                      Enter tools like AI Traffic Monitor and AI
                                      Bot Monitor.
                                    </p>
                                    <ul classname="mt-3">
                                      <li>
                                        AI Traffic Monitor shows which AI
                                        platforms are referencing your content,
                                        how often, and which citations lead to
                                        real visits and conversions.
                                      </li>
                                      <li>
                                        AI Bot Monitor tracks legitimate AI
                                        crawlers, differentiates them from
                                        harmful bots, and ensures your site is
                                        optimized for AI discoverability.
                                      </li>
                                    </ul>
                                    <p className="mt-3">
                                      Why does this matter? Because some sites
                                      are seeing 2–3x higher conversion rates
                                      from AI-driven traffic. These users are
                                      landing with more intent, more context,
                                      and further down the decision funnel.
                                    </p>
                                    <p className="mt-3">
                                      But if you’re not tracking it, you won’t
                                      even know it’s happening.
                                    </p>

                                    <h2 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                                      What You Should Do Right Now
                                    </h2>
                                    <p>
                                      Feeling overwhelmed? That’s normal. Here’s
                                      where to start:
                                    </p>
                                    <ol>
                                      <li className="mt-2">
                                        Try AI Mode. If you’re eligible, head to
                                        Search Labs and explore it firsthand.
                                      </li>
                                      <li className="mt-2">
                                        Reevaluate your content. Go deeper.
                                        Cover related questions. Build topic
                                        clusters that guide a conversation, not
                                        just answer a query.
                                      </li>
                                      <li className="mt-2">
                                        Watch your industry’s AI Overviews.
                                        Which keywords are triggering them? Are
                                        ads appearing? How is your content
                                        showing up?
                                      </li>
                                      <li className="mt-2">
                                        Track your AI-driven traffic. Seriously.
                                        Traditional analytics won’t cut it
                                        anymore. Tools like AI Traffic Monitor
                                        can show you what’s really happening
                                        under the hood.
                                      </li>
                                    </ol>

                                    <h2 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                                      Final Thoughts: Rethinking the Way We
                                      Think About Search
                                    </h2>
                                    <p>
                                      AI Mode is more than a feature—it’s a
                                      signal. Search is becoming more
                                      interactive, more exploratory, more human.
                                      And that means our content needs to evolve
                                      with it.
                                    </p>
                                    <p className="mt-3">
                                      This shift challenges us to not just tweak
                                      our tactics, but to rethink how we
                                      approach visibility, engagement, and
                                      intent. The real question for marketers
                                      today isn’t just “How do I rank on
                                      Google?” but:
                                    </p>
                                    <p className="mt-3">
                                      <b>
                                        “How do I guide a conversation that
                                        starts with AI and ends with trust,
                                        value, and conversion?”
                                      </b>
                                    </p>
                                    <p className="mt-3">
                                      That’s the future we’re walking into.
                                      Better to walk in prepared.
                                    </p>
                                    <p className="mt-3">
                                      Want help navigating this new AI search
                                      landscape? Start with a free trial of AI
                                      Traffic Monitor and see what the AI world
                                      already knows about your site.
                                    </p>
                                    <h2 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                                      Course Giveaway:
                                    </h2>
                                    <ol className="fs-5">
                                      <li>
                                        Best Course on Generative Engine
                                        Optimization (GEO) Course for Free –
                                        <a
                                          href="https://getaimonitor.com/free-courses/best-generative-engine-optimization-geo-course-for-free/
"
                                          className="text-blue"
                                          target="_blank"
                                        >
                                          https://getaimonitor.com/free-courses/best-generative-engine-optimization-geo-course-for-free/
                                        </a>
                                      </li>
                                      <li className="mt-3">
                                        The Best Free Course on Answer Engine
                                        Optimization –
                                        <a
                                          href="https://getaimonitor.com/free-courses/best-answer-engine-optimization-course-for-free/"
                                          className="text-blue"
                                          target="_blank"
                                        >
                                          https://getaimonitor.com/free-courses/best-answer-engine-optimization-course-for-free/
                                        </a>
                                      </li>
                                      <li className="mt-3">
                                        Executive Diploma in Marketing
                                        Management –
                                        <a
                                          href=" https://www.udemy.com/course/marketing-management-principles/"
                                          className="text-blue"
                                          target="_blank"
                                        >
                                          https://www.udemy.com/course/marketing-management-principles/
                                        </a>
                                      </li>
                                      <li className="mt-2">
                                        Professional Diploma in Social Media
                                        Marketing & Management –
                                        <a
                                          href=" https://www.udemy.com/course/smm-social-media-marketing/
"
                                          className="text-blue"
                                          target="_blank"
                                        >
                                          https://www.udemy.com/course/smm-social-media-marketing/
                                        </a>
                                      </li>
                                      <li className="mt-2">
                                        Digital Marketing Automation: One Step
                                        Ahead of Competitors –
                                        <a
                                          href=" https://www.udemy.com/course/digital-marketing-automation-one-step-ahead-of-competitors/"
                                          className="text-blue"
                                          target="_blank"
                                        >
                                          https://www.udemy.com/course/digital-marketing-automation-one-step-ahead-of-competitors/
                                        </a>
                                      </li>
                                      <li className="mt-2">
                                        Master Marketing Automation with
                                        Microsoft Copilot –
                                        <a
                                          href="https://www.udemy.com/course/master-marketing-automation-with-microsoft-copilot/"
                                          className="text-blue"
                                          target="_blank"
                                        >
                                          https://www.udemy.com/course/master-marketing-automation-with-microsoft-copilot/
                                        </a>
                                      </li>
                                      <li className="mt-2">
                                        Full Digital Marketing Course 2025: SEO,
                                        Paid Ad, GA4, GTM –
                                        <a
                                          href=" https://www.udemy.com/course/full-digital-marketing-course-seo-paid-ad-ga4-gtm-email/"
                                          className="text-blue"
                                          target="_blank"
                                        >
                                          https://www.udemy.com/course/full-digital-marketing-course-seo-paid-ad-ga4-gtm-email/
                                        </a>
                                      </li>
                                      <li className="mt-2">
                                        Account-Based Marketing – ABM: Increase
                                        Your B2B Efficiency –
                                        <a
                                          href=" https://www.udemy.com/course/account-based-marketing-increase-your-b2b-efficiency/"
                                          className="text-blue"
                                          target="_blank"
                                        >
                                          https://www.udemy.com/course/account-based-marketing-increase-your-b2b-efficiency/
                                        </a>
                                      </li>
                                      <li className="mt-2">
                                        Mastering the Marketing Brief –
                                        <a
                                          href=" https://www.udemy.com/course/marketing-brief/"
                                          className="text-blue"
                                          target="_blank"
                                        >
                                          https://www.udemy.com/course/marketing-brief/
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
                                  (0:03 - 0:18)
                                  <br />
                                  Hey, everyone, and welcome to Conquer AI
                                  Search with AI, the podcast that helps you
                                  dominate the rapidly changing world of AI
                                  search. I'm Avi, here with Catherine, and
                                  we've got an episode today that's bursting
                                  with insights. But first, we have some
                                  exciting news.
                                </p>

                                <p>
                                  (0:19 - 0:31)
                                  <br />
                                  We're celebrating you, our amazing community,
                                  with a giveaway. We're dropping 10 premium
                                  marketing courses, handpicked by our team and
                                  worth between $19 and a whopping $199. And you
                                  can get them all for free.
                                </p>

                                <p>
                                  (0:31 - 0:42)
                                  <br />
                                  Check out the full list in the description and
                                  stay tuned for how to claim yours before
                                  they're gone. To our regular listeners, thank
                                  you for growing with us. If you're new, hit
                                  that subscribe button and join the AI
                                  marketing revolution.
                                </p>

                                <p>
                                  (0:43 - 0:57)
                                  <br />
                                  Let's jump into the fifth episode of Conquer
                                  AI Search with AI. Look, it's pretty clear the
                                  ground is shifting under our feet, right? How
                                  people search online. It's changing fast.
                                </p>

                                <p>
                                  (0:57 - 1:02)
                                  <br />
                                  Yeah, massively. And all this talk about AI
                                  and search, it's everywhere. Exactly.
                                </p>

                                <p>
                                  (1:03 - 1:20)
                                  <br />
                                  And for those of us in the trenches, content
                                  marketing, SEO, generating organic traffic,
                                  doing inbound, these aren't just some abstract
                                  trends. They hit our work directly, our
                                  results. So today, we really want to get into
                                  the critical stuff you need to understand
                                  right now.
                                </p>

                                <p>
                                  (1:20 - 1:40)
                                  <br />
                                  We'll cover Google's AI mode experiment, how
                                  they're putting ads into AI results, and,
                                  well, how we at AI Monitor are trying to help
                                  you navigate all this with tools like AI Bot
                                  Monitor and AI Traffic Monitor. Precisely. It
                                  can feel a bit overwhelming trying to keep
                                  track, like you need a map for this new
                                  territory.
                                </p>

                                <p>
                                  (1:40 - 1:55)
                                  <br />
                                  So our goal today is really to cut through
                                  some of that noise, give you actionable
                                  insights, stuff you can actually use to adapt.
                                  And we're really focusing this on how it
                                  impacts your strategies, right? If you're
                                  creating content, doing SEO, trying to bring
                                  in that organic traffic. That's the lens we're
                                  looking through today.
                                </p>

                                <p>
                                  (1:55 - 2:08)
                                  <br />
                                  Okay, so let's kick things off with AI mode.
                                  For anyone who hasn't played around with it
                                  yet, what is it? How is it different from,
                                  say, AI overviews? Right. So AI mode is this
                                  new experimental search tool from Google.
                                </p>

                                <p>
                                  (2:08 - 2:22)
                                  <br />
                                  It's in search labs for now, US only, 18 plus,
                                  you need web search history on. And it's
                                  running on a custom version of Gemini 2.0. The
                                  big difference, the key thing, is the
                                  interactivity. Interactivity.
                                </p>

                                <p>
                                  (2:22 - 2:31)
                                  <br />
                                  How so? Well, AI overviews give you that
                                  summary at the top, right? Passive. AI mode
                                  lets you ask follow-up questions. You can even
                                  upload images to help your search.
                                </p>

                                <p>
                                  (2:32 - 2:44)
                                  <br />
                                  Think of it like a conversation happening
                                  right there in the search results, almost like
                                  having the Gemini app, but plugged into live
                                  search. So it's not just for finding a quick
                                  fact. It's more for digging deeper.
                                </p>

                                <p>
                                  (2:44 - 2:55)
                                  <br />
                                  Like if you'd normally do five different
                                  searches to figure something out. Exactly
                                  that. It's built for those more complex, maybe
                                  multi-part questions, where you need to
                                  explore, compare things, maybe reason through
                                  options.
                                </p>

                                <p>
                                  (2:55 - 3:09)
                                  <br />
                                  Okay, if that becomes the go-to for those
                                  kinds of searches, how does that change things
                                  for us, you know, creating content? Well, it's
                                  a pretty big shift. Its advanced reasoning
                                  capability means it can handle really nuanced
                                  questions. Detailed stuff.
                                </p>

                                <p>
                                  (3:10 - 3:21)
                                  <br />
                                  Which means just targeting simple keywords
                                  might not cut it anymore. Yeah, probably not
                                  as the only strategy. It kind of pushes you to
                                  think broader, address the why behind the
                                  query, the nuances.
                                </p>

                                <p>
                                  (3:21 - 3:34)
                                  <br />
                                  Like, say, someone comparing sleep tracking
                                  features on three different smartwatches. AI
                                  mode is perfect for that. And the
                                  conversational part, those follow-up questions
                                  you mentioned, that really changes content
                                  planning, doesn't it? Oh, completely.
                                </p>

                                <p>
                                  (3:34 - 3:48)
                                  <br />
                                  You can't just answer one isolated question
                                  anymore. You need to anticipate, what's the
                                  next logical question someone might ask? Your
                                  content needs that depth, that structure to
                                  guide them through the topic. But it's not
                                  just the AI making stuff up, is it? It still
                                  points back to websites.
                                </p>

                                <p>
                                  (3:49 - 3:54)
                                  <br />
                                  Yes, absolutely. That's crucial. It integrates
                                  web links, citations, right in the response.
                                </p>

                                <p>
                                  (3:55 - 4:02)
                                  <br />
                                  So the AI summarizes, but there's still a
                                  clear path back to the original source. Okay,
                                  good. So there's still a chance for clicks.
                                </p>

                                <p>
                                  (4:03 - 4:15)
                                  <br />
                                  Definitely. And it's pulling from Google's
                                  whole ecosystem, right? The knowledge graph,
                                  real-time info, maybe even shopping data. That
                                  gives it a big advantage in providing current,
                                  relevant answers.
                                </p>

                                <p>
                                  (4:15 - 4:24)
                                  <br />I heard the term query fan-out mentioned
                                  in relation to this. What does that mean for
                                  us? Oh, yeah. Query fan-out is basically how
                                  it breaks down a complex question.
                                </p>

                                <p>
                                  (4:24 - 4:44)
                                  <br />
                                  It sort of figures out the sub-questions
                                  involved, searches for all of them at once in
                                  parallel, and then synthesizes the results
                                  into one answer. So for our content to show
                                  up... Your content needs to be more holistic,
                                  cover the different angles, the related
                                  subtopics. If your page only answers one tiny
                                  part, it might get missed in that synthesis.
                                </p>

                                <p>
                                  (4:45 - 4:54)
                                  <br />
                                  You need to be comprehensive. Got it. And what
                                  about these product and place cards? They
                                  sound important for e-commerce or local
                                  businesses? Very important, yeah.
                                </p>

                                <p>
                                  (4:54 - 5:12)
                                  <br />
                                  Within the AI answer, it can show these cards
                                  with product images, user ratings, store
                                  hours, even if something's in stock. So that
                                  key info gets surfaced immediately. It really
                                  highlights why keeping your Google business
                                  profile and product feeds accurate and
                                  up-to-date is more critical than ever.
                                </p>

                                <p>
                                  (5:13 - 5:36)
                                  <br />
                                  So pulling this together, how do you think AI
                                  mode changes how people search? And what
                                  should we as marketers be bracing for? Well,
                                  the big worry, obviously, is fewer clicks. If
                                  the AI gives a great answer up front, why
                                  click through? Google says they're tracking
                                  engagement differently, not just clicks. But
                                  yeah, we need to be ready for potential shifts
                                  in traffic flow.
                                </p>

                                <p>
                                  (5:37 - 5:45)
                                  <br />
                                  And maybe different kinds of searches becoming
                                  more common. Definitely seeing that. Really
                                  specific comparisons, like we talked about, or
                                  people uploading photos to diagnose a problem.
                                </p>

                                <p>
                                  (5:45 - 5:55)
                                  <br />
                                  What's this weird spot on my plant kind of
                                  thing? Interesting. Gives us clues about new
                                  content opportunities. And it definitely
                                  reinforces the move towards longer, more
                                  natural language queries.
                                </p>

                                <p>
                                  (5:55 - 6:08)
                                  <br />
                                  So long-tail keywords, conversational content,
                                  even more important now. How does Google's
                                  approach here stack up against others, like
                                  Perplexity or ChatGPT? Good question. They all
                                  have slightly different angles.
                                </p>

                                <p>
                                  (6:08 - 6:21)
                                  <br />
                                  Perplexity focuses on concise answers with
                                  clear citations, more like a standalone search
                                  engine. Google's advantage is the deep
                                  intrication. It's in Google Search, using its
                                  massive index, its real-time data.
                                </p>

                                <p>
                                  (6:21 - 6:26)
                                  <br />
                                  The potential reach is huge. And ChatGPT.
                                  Powerful AI, for sure.
                                </p>

                                <p>
                                  (6:26 - 6:38)
                                  <br />
                                  But the free version isn't primarily a
                                  real-time web search tool in the same way.
                                  Google's AI mode is really about enhancing
                                  search itself. Grounding answers in current
                                  web info with sources.
                                </p>

                                <p>
                                  (6:39 - 6:44)
                                  <br />
                                  That's kind of its niche. OK, that makes
                                  sense. So AI is changing the search experience
                                  itself.
                                </p>

                                <p>
                                  (6:44 - 6:50)
                                  <br />
                                  Let's shift gears to the money side. Google
                                  putting ads in these AI results. Yep, another
                                  huge piece.
                                </p>

                                <p>
                                  (6:50 - 7:00)
                                  <br />
                                  They've started integrating ads directly
                                  within AI overviews. For specific types of
                                  searches? Yeah, for queries where they detect
                                  commercial intent. You know, someone looking
                                  to buy something or research a purchase.
                                </p>

                                <p>
                                  (7:00 - 7:13)
                                  <br />
                                  The ads have a sponsored label. Where are we
                                  seeing this mostly? It started rolling out, I
                                  believe, late 2024, mainly for mobile users in
                                  the U.S. initially. What's Google's reasoning
                                  here? Just monetization? Well, that's part of
                                  it, obviously.
                                </p>

                                <p>
                                  (7:13 - 7:26)
                                  <br />
                                  But their official line is about connecting
                                  users with relevant businesses and products
                                  right when they need them. Helping people
                                  discover brands, make purchase decisions
                                  within that AI summary. Can you give an
                                  example? Like, how would it look? Sure.
                                </p>

                                <p>
                                  (7:27 - 7:33)
                                  <br />
                                  Say you search for how to get grass stains out
                                  of jeans. OK, classic problem. Right.
                                </p>

                                <p>
                                  (7:33 - 7:43)
                                  <br />
                                  The AI overview might give you some steps,
                                  some tips. And right there, within that
                                  overview, you might see a sponsored section
                                  showing a couple of specific stain remover
                                  products. Gotcha.
                                </p>

                                <p>
                                  (7:44 - 7:55)
                                  <br />
                                  Integrated right in. And is this likely to
                                  come to AI mode, too? It seems very likely.
                                  Reports suggest they plan to incorporate ads
                                  there as well, taking what they learn from AI
                                  overviews.
                                </p>

                                <p>
                                  (7:55 - 8:13)
                                  <br />
                                  So for advertisers, for us, what are the big
                                  implications? Well, the first potential impact
                                  is on organic click-through rates. Lower CTRs?
                                  Potentially, yeah. Some early data, I think
                                  Sear Interactive published some, showed
                                  organic CTRs dropping significantly when an AI
                                  overview was present, like quite a drop.
                                </p>

                                <p>
                                  (8:13 - 8:28)
                                  <br />
                                  If you rely heavily on those top organic
                                  spots, that could definitely impact your
                                  traffic. Plus, these AI overviews often sit
                                  right at the top, pushing organic results
                                  further down the page. So what do we need to
                                  do differently with our paid campaigns then?
                                  Several things, probably.
                                </p>

                                <p>
                                  (8:29 - 8:38)
                                  <br />
                                  First, ad creative becomes even more critical.
                                  Your copy needs to be super relevant, really
                                  compelling, fitting into that more
                                  conversational context. Makes sense.
                                </p>

                                <p>
                                  (8:38 - 8:49)
                                  <br />
                                  You'll also need to keep a close eye on
                                  bidding and budgets. Lower CPRs might mean you
                                  need to adjust bids, maybe expect higher costs
                                  per click to maintain visibility. And
                                  targeting.
                                </p>

                                <p>
                                  (8:49 - 9:06)
                                  <br />
                                  Refining targeting, definitely. And thinking
                                  about those longer-tail informational keywords
                                  that trigger these AI responses, how can your
                                  ads show up usefully there? Are there any
                                  upsides, any new opportunities here?
                                  Potentially, yes. Ads within AI results could
                                  be a new discovery channel.
                                </p>

                                <p>
                                  (9:07 - 9:17)
                                  <br />
                                  How so? You might reach users right at that
                                  moment of consideration when they're actively
                                  seeking info in the AI summary. It could
                                  capture people who might have missed your ad
                                  lower down the page. It's a new touchpoint.
                                </p>

                                <p>
                                  (9:17 - 9:25)
                                  <br />
                                  Okay. So, challenges but maybe some
                                  opportunities too. This really drives home the
                                  need to understand exactly how AI is affecting
                                  traffic, doesn't it? Absolutely.
                                </p>

                                <p>
                                  (9:26 - 9:33)
                                  <br />
                                  Which brings us neatly to what we're doing at
                                  AI Monitor, with tools like AI Bot Monitor and
                                  AI Traffic Monitor. Right. Tell us about
                                  those.
                                </p>

                                <p>
                                  (9:33 - 9:45)
                                  <br />
                                  How do they help us see what's going on in
                                  this new AI world? Well, the core problem is
                                  that your standard analytics tools, like
                                  Google Analytics, they weren't built for this.
                                  They often miss traffic from AI crawlers.
                                  Right.
                                </p>

                                <p>
                                  (9:45 - 9:55)
                                  <br />
                                  And crucially, they don't always recognize the
                                  human visitors who find you because in AI,
                                  like ChatGPT or Gemini, sighted your content.
                                  And that's a lot of traffic. It can be.
                                </p>

                                <p>
                                  (9:55 - 10:04)
                                  <br />
                                  Some estimates put this invisible AI-related
                                  traffic as high as maybe 50% of total site
                                  traffic in some cases. It's a huge blind spot.
                                  Wow.
                                </p>

                                <p>
                                  (10:04 - 10:10)
                                  <br />
                                  So, AI Traffic Monitor, it lifts the lid on
                                  that. Exactly. It's designed to show you that
                                  AI-driven traffic.
                                </p>

                                <p>
                                  (10:10 - 10:25)
                                  <br />
                                  You can see which AI platforms are referencing
                                  your content, how often. And most importantly,
                                  track how those AI citations actually turn
                                  into real human visits and how those visits
                                  impact your goals, your KPIs. And can it tell
                                  you which content the AI is like? Yes.
                                </p>

                                <p>
                                  (10:26 - 10:39)
                                  <br />
                                  It identifies your top-performing pages in the
                                  eyes of AI. Which pages are getting cited the
                                  most? That's gold for figuring out what
                                  content to optimize or create more of for this
                                  AI-powered search. That sounds incredibly
                                  useful.
                                </p>

                                <p>
                                  (10:39 - 10:51)
                                  <br />
                                  What else does it do? It also does technical
                                  analysis. It can automatically spot things on
                                  your site, like broken links, site structure
                                  issues that might be making it hard for AI
                                  systems to crawl and understand your content
                                  properly. Okay.
                                </p>

                                <p>
                                  (10:51 - 10:59)
                                  <br />
                                  Helps with the technical SEO side for AI, too.
                                  Right. And maybe one of the most interesting
                                  things is tracking conversions from AI-driven
                                  traffic.
                                </p>

                                <p>
                                  (11:00 - 11:11)
                                  <br />
                                  Oh. What are you seeing there? Well, the
                                  spoiler is, we often see that traffic
                                  converting much better, sometimes two or three
                                  times better than standard organic search
                                  traffic. Really? Higher conversion rates from
                                  AI referrals.
                                </p>

                                <p>
                                  (11:11 - 11:24)
                                  <br />
                                  Why do you think that is? It's likely because
                                  the user has already gotten a specific,
                                  relevant answer or summary from the AI that
                                  featured your content. They're coming to your
                                  site with higher intent, often further down
                                  the funnel. That makes a lot of sense.
                                </p>

                                <p>
                                  (11:24 - 11:37)
                                  <br />
                                  Any other key features? We also have
                                  AI-powered bot detection. It helps distinguish
                                  legitimate AI crawlers, like Googles or chat
                                  GPTs, from spoofed or potentially harmful bots
                                  in real time. Okay.
                                </p>

                                <p>
                                  (11:38 - 11:52)
                                  <br />
                                  And there's a live command center dashboard.
                                  Real-time insights, filtering, you can see
                                  which pages AI might be ignoring, and export
                                  data to Slack, GA4, BI tools, whatever you
                                  use. And AI Bot Monitor is focused more
                                  specifically on the bots themselves.
                                </p>

                                <p>
                                  (11:52 - 12:04)
                                  <br />
                                  Yeah. AI Bot Monitor dives deeper into just
                                  detecting and managing the various AI crawlers
                                  hitting your site. AI Traffic Monitor looks at
                                  the whole picture, the bots, the resulting
                                  human traffic, the conversions.
                                </p>

                                <p>
                                  (12:05 - 12:10)
                                  <br />
                                  So, basically, traditional analytics just
                                  don't see this layer of activity. Pretty much.
                                  They weren't designed for it.
                                </p>

                                <p>
                                  (12:10 - 12:19)
                                  <br />
                                  You need a dedicated tool like AI Traffic
                                  Monitor to get that complete picture. Is it
                                  hard to set up? Do you need to be super
                                  technical? No, not at all. No coding needed.
                                </p>

                                <p>
                                  (12:19 - 12:25)
                                  <br />
                                  We have clear tutorials, guides to help you
                                  get started and fix any technical issues. The
                                  tool flags. And people can try it out.
                                </p>

                                <p>
                                  (12:25 - 12:35)
                                  <br />
                                  Yeah, absolutely. There's a free trial
                                  available, gives you access to the core
                                  features, so you can see the kind of insights
                                  you get for your own site. Have you had much
                                  feedback from users yet? Yeah, really positive
                                  feedback.
                                </p>

                                <p>
                                  (12:35 - 12:50)
                                  <br />
                                  We hear from digital marketers, CMOs, PR
                                  folks. They're using it to, you know, finally
                                  show the impact of their content in AI, keep
                                  clients happy, find new revenue streams based
                                  on what AI is highlighting. It provides that
                                  missing evidence.
                                </p>

                                <p>
                                  (12:51 - 12:53)
                                  <br />
                                  This has been super insightful. Right. Okay.
                                </p>

                                <p>
                                  (12:53 - 13:05)
                                  <br />
                                  If we boil it all down, what are the main
                                  things you want listeners to take away from
                                  our chat today? I'd say three main things.
                                  One, AI mode is pushing search towards being
                                  more interactive, more conversational, deeper.
                                  Prepare for that.
                                </p>

                                <p>
                                  (13:05 - 13:14)
                                  <br />
                                  Two, ads are here in AI results and likely
                                  expanding. That means you need to watch your
                                  organic performance closely and adapt your
                                  paid strategies. Right.
                                </p>

                                <p>
                                  (13:15 - 13:26)
                                  <br />
                                  And three, you can't rely solely on
                                  traditional analytics anymore. Understanding
                                  your AI-driven traffic is crucial. And tools
                                  like AI Traffic Monitor are built specifically
                                  to give you that visibility.
                                </p>

                                <p>
                                  (13:26 - 13:37)
                                  <br />
                                  So what should people listening do right now?
                                  What are the first steps? Well, if you're in
                                  the U.S. and eligible, try out AI mode in
                                  search labs. Get a feel for it yourself. Good
                                  idea.
                                </p>

                                <p>
                                  (13:37 - 13:47)
                                  <br />
                                  Start thinking about your content. How can you
                                  make it more comprehensive? Answer those
                                  follow-up questions naturally. Watch how ads
                                  are appearing in AI overviews for your
                                  industry's keywords.
                                </p>

                                <p>
                                  (13:48 - 13:58)
                                  <br />
                                  And seriously, take a look at tools like AI
                                  Traffic Monitor. Understand what AI is already
                                  doing on your site. That data is the
                                  foundation for making smart decisions going
                                  forward{" "}
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
                                <ol className="fs-5">
                                  <li>
                                    Expanding AI Overviews and introducing AI
                                    Mode (Google Blog, The Keyword):
                                    <a
                                      href="https://search.google/pdf/google-about-AI-overviews-AI-Mode.pdf
"
                                      className="text-blue"
                                      target="_blank"
                                    >
                                      https://search.google/pdf/google-about-AI-overviews-AI-Mode.pdf
                                    </a>
                                  </li>
                                  <li className="mt-3">
                                    AI Overviews, SGE and SEO: Differences,
                                    Challenges and the Path Forward (CMS Wire):
                                    <a
                                      href="https://www.cmswire.com/digital-marketing/ai-overviews-sge-and-seo-differences-challenges-and-the-path-forward/"
                                      className="text-blue"
                                      target="_blank"
                                    >
                                      https://www.cmswire.com/digital-marketing/ai-overviews-sge-and-seo-differences-challenges-and-the-path-forward/
                                    </a>
                                  </li>
                                  <li className="mt-3">
                                    Google's AI Mode may be the upgrade Search
                                    desperately needs - how to try it for free
                                    (ZDNET):
                                    <a
                                      href=" https://www.zdnet.com/article/how-to-get-rid-of-ai-overviews-in-google-search-4-easy-ways/"
                                      className="text-blue"
                                      target="_blank"
                                    >
                                      https://www.zdnet.com/article/how-to-get-rid-of-ai-overviews-in-google-search-4-easy-ways/
                                    </a>
                                  </li>
                                  <li className="mt-2">
                                    Google's new AI Mode is a preview of the
                                    future of search (Platformer):
                                    <a
                                      href=" https://www.platformer.news/google-ai-mode-hands-on/
"
                                      className="text-blue"
                                      target="_blank"
                                    >
                                      https://www.platformer.news/google-ai-mode-hands-on/
                                    </a>
                                  </li>
                                  <li className="mt-2">
                                    New ways for marketers to reach customers
                                    with AI Overviews and Lens (Google Ads &
                                    Commerce Blog):
                                    <a
                                      href="https://business.google.com/uk/think/ai-excellence/google-marketing-live-2025/"
                                      className="text-blue"
                                      target="_blank"
                                    >
                                      https://business.google.com/uk/think/ai-excellence/google-marketing-live-2025/
                                    </a>
                                  </li>
                                  <li className="mt-2">
                                    New ways to interact with information in AI
                                    Mode (Google Blog, The Keyword):
                                    <a
                                      href="https://aristasystems.in/blog/the-rise-of-ai-mode-how-google-is-redefining-search-and-productivi"
                                      className="text-blue"
                                      target="_blank"
                                    >
                                      https://aristasystems.in/blog/the-rise-of-ai-mode-how-google-is-redefining-search-and-productivi
                                    </a>
                                  </li>
                                  <li className="mt-2">
                                    Weekly Prompt: Google brings ads to AI
                                    Overviews and more (Mindshare):
                                    <a
                                      href="https://www.mindshareworld.com/switzerland-fr/news/weekly-prompt-google-brings-ads-to-ai-overviews-and-more"
                                      className="text-blue"
                                      target="_blank"
                                    >
                                      https://www.mindshareworld.com/switzerland-fr/news/weekly-prompt-google-brings-ads-to-ai-overviews-and-more
                                    </a>
                                  </li>
                                  <li className="mt-2">
                                    The Future of AI and Google Search & Ads:
                                    Key Takeaways from Google Marketing Live
                                    2024 (IOI Ventures):
                                    <a
                                      href=" https://www.grocat.in/blog/google-marketing-live-2024-key-takeaways-and-highlights"
                                      className="text-blue"
                                      target="_blank"
                                    >
                                      https://www.grocat.in/blog/google-marketing-live-2024-key-takeaways-and-highlights
                                    </a>
                                  </li>
                                  <li className="mt-2">
                                    Google’s AI Mode: What is it and how will it
                                    impact search? (Varn):
                                    <a
                                      href="https://varn.co.uk/insights/googles-ai-mode-what-is-it-and-how-will-it-impact-search/ "
                                      className="text-blue"
                                      target="_blank"
                                    >
                                      https://varn.co.uk/insights/googles-ai-mode-what-is-it-and-how-will-it-impact-search/
                                    </a>
                                  </li>
                                </ol>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className="col-12 md:col-5 lg:col-3">
                  <Toc />
                </div> */}
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

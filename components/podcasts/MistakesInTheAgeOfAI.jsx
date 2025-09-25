"use client";
// import Toc from "./Toc";
import RelatedBlogs from "../blogs/RelatedBlogs";
import Image from "next/image";
import Link from "next/link";
import { Gallery, Item } from "react-photoswipe-gallery";
import { useState } from "react";
import Blog1Faqs from "../blogs/faqs/Blog1Faqs";
import GEOCourseCTA from "@/components/common/GeoCTA";

export default function ({ blogItem }) {
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
              <Link href={`/podcasts`}>Podcast</Link>
            </li>
            <li>
              <i className="unicon-chevron-right fw-medium opacity-50 rtl:rotate-180" />
            </li>
            <li>
              <span className="opacity-50">
                Don't Get Left Behind: The 5 Biggest Mistakes We're All Making
                in the Age of AI
              </span>
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
                  Don't Get Left Behind: The 5 Biggest Mistakes We're All Making
                  in the Age of AI
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
                    src="https://www.youtube.com/embed/xTFj9_Bb10g?si=gfz3Gxgu_UgZk87y"
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
                            EP#19 Don't Get Left Behind: The 5 Biggest Mistakes
                            We're All Making in the Age of AI
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
                        src="https://audio.getaimonitor.com/ConquerAISearchWithAI/ep-19-podcast-casa.mp3"
                      ></audio>
                      {/* </figure> */}
                      <hr className="w-100 m-0 d-block mt-4" />
                    </div>
                    <p className="mt-2">Also Available on:</p>
                    <div className="d-none lg:d-block">
                      {/* <div className="row child-cols-3 sm:child-cols-6 xl:child-cols-3 col-match g-2 justify-between hstack mt-2"> */}
                      <div className="hstack gap-4 mt-2 justify-center">
                        <a
                          href="https://open.spotify.com/episode/2k56ugiT7QOQcZHC0buCRU?si=avn8U3BGRbKuQCy6bMS5_g"
                          target="_blank"
                        >
                          <div className="bg-white rounded-pill hstack gap-1 py-1 px-2 max-w-fc">
                            <Image
                              className="max-w-40px"
                              src="/assets/images/custom-icons/spotify.webp"
                              alt="Spotify logo"
                              width={50}
                              height={50}
                            />
                            <h5 className="m-0 text-dark">Spotify</h5>
                          </div>
                        </a>
                        <a
                          href="https://music.amazon.com/podcasts/638df449-1fbd-497d-a145-5315d8541611/episodes/9df69db6-558e-41c7-a8e7-ea0adf94e3b6/conquer-ai-search-with-ai-ep-19-%F0%9F%9A%A8-5-deadly-geo-mistakes-tanking-your-rankings-in-ai-search-chatgpt-google-ai-perplexity-fix-them-now"
                          target="_blank"
                        >
                          <div className="bg-white rounded-pill hstack gap-1 py-1 px-2 max-w-fc">
                            <Image
                              className="max-w-40px"
                              src="/assets/images/custom-icons/amazon-music.webp"
                              alt="Amazon Music Logo"
                              width={50}
                              height={50}
                            />
                            <h5 className="m-0 text-dark">Amazon Music</h5>
                          </div>
                        </a>
                        <a href="https://podcasts.apple.com/in/podcast/ep-19-5-deadly-geo-mistakes-tanking-your-rankings-in/id1806802986?i=1000721231071">
                          <div className="bg-white rounded-pill hstack gap-1 py-1 px-2 max-w-fc">
                            <Image
                              className="max-w-40px"
                              src="/assets/images/custom-icons/apple-podcast.webp"
                              alt="Apple Podcast Logo"
                              width={100}
                              height={100}
                            />
                            <h5 className="m-0 text-dark">Apple Podcast</h5>
                          </div>
                        </a>
                        <a href="https://youtu.be/xTFj9_Bb10g?si=-zBgAOVXcDgInIeM">
                          <div className="bg-white rounded-pill hstack gap-1 py-1 px-2 max-w-fc">
                            <Image
                              className="max-w-40px"
                              src="/assets/images/custom-icons/youtube.webp"
                              alt="Youtube Logo"
                              width={100}
                              height={100}
                            />
                            <h5 className="m-0 text-dark">Youtube</h5>
                          </div>
                        </a>
                      </div>
                      <div className="hstack gap-4 mt-2 justify-center">
                        <a href="https://overcast.fm/+ABOivz7DiTU">
                          <div className="bg-white rounded-pill hstack gap-1 py-1 px-2 max-w-fc">
                            <Image
                              className="max-w-40px"
                              src="/assets/images/custom-icons/overcast.webp"
                              alt="Overcasts Logo"
                              width={100}
                              height={100}
                            />
                            <h5 className="m-0 text-dark">Overcast</h5>
                          </div>
                        </a>
                        <a href="https://pca.st/xtk0zhyh">
                          <div className="bg-white rounded-pill hstack gap-1 py-1 px-2 max-w-fc">
                            <Image
                              className="max-w-40px"
                              src="/assets/images/custom-icons/pocketcasts.webp"
                              alt="Pocket Casts Logo"
                              width={100}
                              height={100}
                            />
                            <h5 className="m-0 text-dark">Pocket Casts</h5>
                          </div>
                        </a>
                        <a href="https://castro.fm/episode/Im4OxX">
                          <div className="bg-white rounded-pill hstack gap-1 py-1 px-2 max-w-fc">
                            <Image
                              className="max-w-40px"
                              src="/assets/images/custom-icons/castro.webp"
                              alt="Castro Logo"
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
                          href="https://open.spotify.com/episode/2k56ugiT7QOQcZHC0buCRU?si=avn8U3BGRbKuQCy6bMS5_g"
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
                          href="https://music.amazon.com/podcasts/638df449-1fbd-497d-a145-5315d8541611/episodes/9df69db6-558e-41c7-a8e7-ea0adf94e3b6/conquer-ai-search-with-ai-ep-19-%F0%9F%9A%A8-5-deadly-geo-mistakes-tanking-your-rankings-in-ai-search-chatgpt-google-ai-perplexity-fix-them-now"
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
                        <a href="https://podcasts.apple.com/in/podcast/ep-19-5-deadly-geo-mistakes-tanking-your-rankings-in/id1806802986?i=1000721231071">
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
                        <a href="https://youtu.be/xTFj9_Bb10g?si=-zBgAOVXcDgInIeM">
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
                                  🎙️ Conquer AI Search Podcast – Ep. 18: Entity
                                  Optimization
                                </h3>
                                <ol className="fs-5">
                                  <li>
                                    Welcome back & season 1 recap (0:05 – 0:29)
                                  </li>
                                  <li className="mt-2">
                                    Lightning round: 10 GEO strategies covered
                                    so far (0:29 – 1:28)
                                  </li>
                                  <li className="mt-2">
                                    Episode focus: 5 critical GEO mistakes (1:28
                                    – 2:06)
                                  </li>
                                  <li className="mt-2">
                                    Generative AI landscape & GEO overview (2:07
                                    – 2:58)
                                  </li>
                                  <li className="mt-2">
                                    How AI processes content: NLP, dependency
                                    parsing (2:58 – 3:45)
                                  </li>
                                  <li className="mt-2">
                                    ARAG: Retrieval, Augmentation, Generation
                                    explained (3:46 – 4:42)
                                  </li>
                                  <li className="mt-2">
                                    EEAT importance in AI-driven search (4:43 –
                                    5:17)
                                  </li>
                                  <li className="mt-2">
                                    Mistake 1: Keyword stuffing & semantic
                                    strategy (5:18 – 7:39)
                                  </li>
                                  <li className="mt-2">
                                    Mistake 2: The volume trap & long-tail
                                    optimization (7:39 – 9:55)
                                  </li>
                                  <li className="mt-2">
                                    Mistake 3: Optimizing without measurement &
                                    hybrid metrics (9:55 – 12:59)
                                  </li>
                                  <li className="mt-2">
                                    Mistake 4: Propagating unverified info &
                                    credibility risks (13:08 – 16:28)
                                  </li>
                                  <li className="mt-2">
                                    Mistake 5: Scattergun platform strategy &
                                    platform-specific tactics (16:29 – 19:44)
                                  </li>
                                  <li className="mt-2">
                                    5 GEO pillars for successful optimization
                                    (20:01 – 20:24)
                                  </li>
                                  <li className="mt-2">
                                    Seven-step GEO action plan & roadmap (20:24
                                    – 21:06)
                                  </li>
                                  <li className="mt-2">
                                    Preparing for agentic AI & the future of
                                    automated decisions (21:06 – 22:07)
                                  </li>
                                  <li className="mt-2">
                                    Season 1 wrap-up & Season 2 preview (22:08 –
                                    23:00)
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
                                    <p>
                                      Remember when SEO was all about keywords
                                      and getting that top spot on the list of
                                      blue links? Well, that world is pretty
                                      much over. The digital landscape has had a
                                      massive shake-up, and honestly, it’s the
                                      biggest one since the internet first came
                                      to be.
                                    </p>
                                    <p className="mt-3">
                                      The new game is called Generative Engine
                                      Optimization, or GEO for short. It's not
                                      about being seen; it’s about becoming the
                                      go-to source that AI trusts to build its
                                      answers. And trust me, if you’re still
                                      using the old playbook, you're on a fast
                                      track to complete invisibility.
                                    </p>
                                    <p className="mt-3">
                                      Let’s talk about the five most common and
                                      critical mistakes I see people making, and
                                      how we can fix them together.
                                    </p>
                                    <h2 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                                      Mistake #1: Still Playing the Keyword
                                      Stuffing Game
                                    </h2>
                                    <p className="">
                                      This one feels a bit like a ghost from the
                                      past, doesn't it? We all know keyword
                                      stuffing is bad, but a surprising number
                                      of us still do it without even realizing.
                                      We get caught up in the old-school
                                      mindset, trying to cram as many keywords
                                      as possible onto a page.
                                    </p>
                                    <p className="mt-3">
                                      But here's the thing: AI isn't a robot
                                      looking for a list of words. It's a highly
                                      sophisticated system that understands the
                                      meaning and context of what you're saying.
                                      When you force in keywords, it sounds
                                      clunky and unnatural to a human, and it
                                      screams "low quality" to the AI. It's not
                                      just a waste of time; it’s a red flag.
                                    </p>
                                    <h3 className="h5 xl:h4 mt-3 mb-2 xl:mb-3">
                                      So, what's the better way?
                                    </h3>
                                    <ul>
                                      <li className="mt-2">
                                        <strong>
                                          Write like you're talking to a friend.
                                        </strong>{" "}
                                        Your first job is to provide genuine
                                        value to a person. If a human finds it
                                        helpful, the AI will, too.
                                      </li>
                                      <li className="mt-2">
                                        <strong>
                                          Think in "topic clusters."
                                        </strong>{" "}
                                        Instead of obsessing over a single
                                        keyword, cover a whole topic thoroughly.
                                        This shows the AI that you're a real
                                        expert on the subject.
                                      </li>
                                      <li className="mt-2">
                                        <strong>
                                          Embrace full-sentence questions.
                                        </strong>{" "}
                                        People don't just search for "running
                                        shoes" anymore. They ask, "What are the
                                        best waterproof trail running shoes for
                                        someone who overpronates?" Your content
                                        should answer those exact questions.
                                      </li>
                                    </ul>
                                    <h2 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                                      Mistake #2: Ignoring the "High-Intent"
                                      Goldmine
                                    </h2>
                                    <p>
                                      This is a classic blunder. We all want the
                                      massive audience that comes with those
                                      big, broad keywords. But in doing so, we
                                      completely overlook the queries that are
                                      actually closer to a sale.
                                    </p>
                                    <p className="mt-3">
                                      Think about it: who's more likely to buy
                                      something? The person who searches for
                                      "shoes," or the one who types in a
                                      10-word, super-specific query? The second
                                      one, right? The AI is designed to
                                      understand this "high-intent" context. It
                                      knows that the person is serious.
                                    </p>
                                    <p className="mt-3">
                                      By chasing only the broad terms, you're
                                      leaving a huge chunk of potential leads on
                                      the table. It's inefficient, and you're
                                      fighting a brutal, expensive battle for
                                      attention.
                                    </p>
                                    <h3 className="h5 xl:h4 mt-3 mb-2 xl:mb-3">
                                      So, how do you fix it?
                                    </h3>
                                    <ul>
                                      <li className="mt-2">
                                        <strong>
                                          Listen to your audience.
                                        </strong>{" "}
                                        Don't just rely on keyword tools. Spend
                                        time in the places where your customers
                                        hang out, Reddit, forums, Quora, and
                                        find out the exact questions they're
                                        asking.
                                      </li>
                                      <li className="mt-2">
                                        <strong>
                                          Build your content like a web
                                        </strong>{" "}
                                        Have a main page for a broad topic, but
                                        then create smaller, more focused pages
                                        that answer all those specific,
                                        long-tail questions. Link them all
                                        together.
                                      </li>
                                      <li className="mt-2">
                                        <strong>
                                          Get straight to the point.
                                        </strong>{" "}
                                        Put your answer right at the very
                                        beginning of the page. Use those
                                        long-tail questions as your headings so
                                        both the AI and a quick-scanning human
                                        can find the key info instantly.
                                      </li>
                                    </ul>
                                    <h2 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                                      Mistake #3: Flying Blind with Old Metrics
                                    </h2>
                                    <p>
                                      This is probably the most dangerous
                                      mistake of all. We've all been trained to
                                      watch our organic sessions and
                                      click-through rates like a hawk. But in
                                      the world of GEO, that's just not enough
                                      anymore.
                                    </p>
                                    <p className="mt-3">
                                      AI overviews and chatbots often give the
                                      user the full answer without them ever
                                      having to click on your website. So, what
                                      happens to your clicks and bounce rate?
                                      They don't reflect your influence. You
                                      could be the source for a million AI
                                      answers and have your organic traffic stay
                                      flat.
                                    </p>
                                    <p className="mt-3">
                                      Without a way to measure your new GEO
                                      efforts, how do you know if they're
                                      working? How can you justify the
                                      investment? You can’t, and you risk giving
                                      up on the new frontier just when you were
                                      about to break through.
                                    </p>
                                    <h3 className="h5 xl:h4 mt-3 mb-2 xl:mb-3">
                                      So, what's the solution?
                                    </h3>
                                    <ul>
                                      <li className="mt-2">
                                        <strong>
                                          Track your brand's ripple effect.
                                        </strong>{" "}
                                        Keep an eye on direct traffic to your
                                        site and branded search volume. An
                                        increase here is a strong sign that your
                                        GEO efforts are building brand
                                        awareness, even without a direct click.
                                      </li>
                                      <li className="mt-2">
                                        <strong>Just ask!</strong> Add a simple
                                        "How did you hear about us?" field to
                                        your forms. You'd be surprised how often
                                        people will tell you, "I saw you in a
                                        Google AI answer" or "a chatbot
                                        mentioned you."
                                      </li>
                                      <li className="mt-2">
                                        <strong>Look for new signals. </strong>{" "}
                                        Start tracking things like how often
                                        your brand is cited in AI answers or how
                                        often specific pieces of your content
                                        are pulled by these systems. These are
                                        the real indicators of success now.
                                      </li>
                                    </ul>
                                    <h2 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                                      Mistake #4: Trusting the AI to Tell the
                                      Truth
                                    </h2>
                                    <p>
                                      This is a huge one, and it can tank your
                                      brand in an instant. Just because an AI
                                      confidently states a "fact" doesn't mean
                                      it's true. They're not databases; they're
                                      predictive text generators. They're
                                      essentially guessing the next most likely
                                      word, and sometimes, that guess is
                                      completely, bizarrely wrong. (Remember
                                      that story about the AI recommending
                                      putting glue on pizza? Yeah.)
                                    </p>
                                    <p className="mt-3">
                                      When you take what an AI generates and
                                      publish it without checking, you're not
                                      just risking embarrassment. You're risking
                                      your brand's reputation, especially if
                                      you're in a field like health or finance.
                                      You also contribute to a cycle of
                                      misinformation that can be incredibly
                                      difficult to undo.
                                    </p>
                                    <h3 className="h5 xl:h4 mt-3 mb-2 xl:mb-3">
                                      So, how do we stay honest?
                                    </h3>
                                    <ul>
                                      <li className="mt-2">
                                        <strong>
                                          Always have a human in the loop.
                                        </strong>{" "}
                                        There are no shortcuts here. A human
                                        must review and fact-check any
                                        AI-assisted content before it goes live.
                                      </li>
                                      <li className="mt-2">
                                        <strong>Verify, verify, verify.</strong>{" "}
                                        Don't just trust the AI's sources. Go
                                        directly to them. Does the source exist?
                                        Does it actually say what the AI claims
                                        it says? Is it up-to-date?
                                      </li>
                                      <li className="mt-2">
                                        <strong>
                                          Become the source of truth.
                                        </strong>{" "}
                                        The best long-term strategy is to create
                                        your own original data. Conduct your own
                                        research, run surveys, and analyze your
                                        internal information. That way, you're
                                        not just citing others, you're the one
                                        everyone else is citing.
                                      </li>
                                    </ul>

                                    <h2 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                                      Mistake #5: One Size Fits All
                                    </h2>
                                    <p>
                                      Here's the trap: you create one amazing
                                      piece of content and hope it works on
                                      every single AI platform, Google, ChatGPT,
                                      Perplexity, etc. But the truth is, they're
                                      all very different.
                                    </p>
                                    <p className="mt-3">
                                      A fascinating study looked at millions of
                                      citations from different AIs and found a
                                      shocking reality. ChatGPT loves Wikipedia,
                                      Google loves Reddit and YouTube, and
                                      Perplexity really loves Reddit. They're
                                      all looking for answers in different
                                      places.
                                    </p>
                                    <p className="mt-3">
                                      If you create generic content, you're not
                                      truly optimizing for any of them. You're
                                      spreading your resources too thin, and
                                      you're letting your competitors, who are
                                      strategically focusing on one platform at
                                      a time, leave you in the dust.
                                    </p>
                                    <h3 className="h5 xl:h4 mt-3 mb-2 xl:mb-3">
                                      So, what's the final piece of the puzzle?
                                    </h3>
                                    <ul>
                                      <li className="mt-2">
                                        <strong>Pick your battlefield.</strong>{" "}
                                        Don't try to win everywhere at once.
                                        Look at your audience and your brand's
                                        strengths. Are you great at detailed,
                                        factual content? Maybe you target
                                        ChatGPT. Are you a master of community
                                        engagement? Go all in on platforms like
                                        Reddit and Quora.
                                      </li>
                                      <li className="mt-2">
                                        <strong>Tailor your strategy.</strong>{" "}
                                        Your content plan should be specific to
                                        the platform you choose. For example, if
                                        you're targeting Google AI, you need to
                                        build a presence on Reddit. If it’s
                                        ChatGPT, you need to think about how you
                                        can eventually get cited on Wikipedia.
                                      </li>
                                      <li className="mt-2">
                                        <strong>Focus, then expand.</strong>{" "}
                                        Start with one platform. Execute your
                                        plan for a few months, measure your
                                        progress, and learn what works. Once you
                                        have a proven model, you can
                                        strategically expand to another
                                        platform.
                                      </li>
                                    </ul>
                                    <h2 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                                      Looking Ahead: The Age of the AI Agent
                                    </h2>
                                    <p>
                                      The changes we're seeing now are just the
                                      beginning. The next wave is "agentic AI"
                                      systems that don't just answer questions,
                                      but do things for us. They will
                                      autonomously research, compare vendors,
                                      and even make purchases on our behalf.
                                    </p>
                                    <p className="mt-3">
                                      In that world, the brand that has
                                      consistently built a reputation as the
                                      most trusted, most verifiable, and most
                                      authoritative source of truth will be the
                                      one that these agents choose to act upon.
                                    </p>
                                    <p className="mt-3">
                                      So, when you invest in solid GEO practices
                                      and avoid these common mistakes today,
                                      you're not just securing your place in the
                                      present. You're building the foundation
                                      for your brand to thrive in the automated
                                      economy of tomorrow.
                                    </p>
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
                                  (0:05 - 0:10) <br />
                                  Welcome back, everyone, to the Conquer AI
                                  Search Podcast. I'm Avi. And I'm Catherine.
                                </p>

                                <p>
                                  (0:10 - 0:17) <br />
                                  It's great to be here, Avi. It really is. And,
                                  Catherine, it's just incredible looking back
                                  at this journey with the AI Monitor team.
                                </p>

                                <p>
                                  (0:17 - 0:26) <br />
                                  The response has been, well, frankly,
                                  overwhelming. Absolutely. Hitting over 10,000
                                  subscribers across YouTube and the podcast
                                  platforms.
                                </p>

                                <p>
                                  (0:26 - 0:29) <br />
                                  It's fantastic. We're so grateful to everyone
                                  tuning in. We really are.
                                </p>

                                <p>
                                  (0:29 - 0:37) <br />
                                  And, you know, this episode that says number
                                  11 marks the end of season one for us. That's
                                  right. We're planning to take a short break,
                                  recharge a bit.
                                </p>

                                <p>
                                  (0:37 - 0:45) <br />
                                  But we'll definitely be back, stronger than
                                  ever, for season two. Now, before we jump into
                                  today's topic, maybe a quick recap. We've
                                  covered a lot of ground.
                                </p>

                                <p>
                                  (0:46 - 0:48) <br />A lightning round. Good
                                  idea. Let's see.
                                </p>

                                <p>
                                  (0:48 - 0:53) <br />
                                  We talked about implementing the LLMs.txt
                                  file. Right. Getting active on Reddit.
                                </p>

                                <p>
                                  (0:53 - 0:58) <br />
                                  Using authoritative citations strategically.
                                  That was a big one. Evolving your SEO playbook
                                  beyond the basics.
                                </p>

                                <p>
                                  (0:58 - 1:05) <br />
                                  And why PR is suddenly so crucial for AI
                                  visibility. Readability. Can't forget that
                                  secret sauce.
                                </p>

                                <p>
                                  (1:06 - 1:16) <br />
                                  Definitely not. And how to actually create
                                  quality content that AI understands and
                                  values. Targeting those long-tail keywords to
                                  figure out user prompts.
                                </p>

                                <p>
                                  (1:16 - 1:24) <br />
                                  Which ties right into AIO, Artificial
                                  Intelligence Optimization. And then
                                  strategically getting reviews. And finally,
                                  Entity Optimization.
                                </p>

                                <p>
                                  (1:25 - 1:28) <br />
                                  Phew. That was 10. 10 solid strategies.
                                </p>

                                <p>
                                  (1:28 - 1:37) <br />
                                  So for number 11, our final technique for
                                  season one, we're doing something a bit
                                  different. Exactly. Today, we're flipping the
                                  script.
                                </p>

                                <p>
                                  (1:37 - 1:49) <br />
                                  We're diving into the most critical mistakes
                                  organizations are making right now in
                                  Generative Engine Optimization, or AIO. And
                                  these aren't small things, are they? No, not
                                  at all. These are fundamental miscalculations.
                                </p>

                                <p>
                                  (1:49 - 2:01) <br />
                                  Getting these wrong can mean, well, complete
                                  invisibility in AI search. Serious damage to
                                  your brand's reputation. And basically
                                  throwing away your investment in this new
                                  AI-driven world.
                                </p>

                                <p>
                                  (2:01 - 2:06) <br />
                                  Precisely. It's that serious. Okay, so our
                                  mission today, for you listening, is to give
                                  you a shortcut.
                                </p>

                                <p>
                                  (2:07 - 2:18) <br />
                                  We want you to be really well-informed about
                                  these pitfalls. We've got some surprising
                                  facts, some practical insights to help you
                                  sidestep these issues. Think of this as your
                                  essential guide to navigating and conquering
                                  this new search frontier.
                                </p>

                                <p>
                                  (2:19 - 2:23) <br />
                                  Ready to unpack it. Let's do it. Okay, so the
                                  digital landscape.
                                </p>

                                <p>
                                  (2:24 - 2:31) <br />
                                  It's fundamentally changed with Generative AI,
                                  hasn't it? I mean, maybe the biggest shift
                                  since the commercial internet started. I think
                                  that's fair to say. It's huge.
                                </p>

                                <p>
                                  (2:31 - 2:44) <br />
                                  And this shift has given rise to this whole
                                  new field, Generative Engine Optimization,
                                  GEO. Right. So traditional SEO, that was about
                                  getting high up on that list of blue links,
                                  right? Aiming for the click.
                                </p>

                                <p>
                                  (2:44 - 2:47) <br />
                                  Exactly. GEO. Totally different mindset.
                                </p>

                                <p>
                                  (2:47 - 2:58) <br />
                                  It's about optimizing your content, your
                                  entire brand, to become the trusted source
                                  material that the AI actually uses to build
                                  its answer. It's not just about getting seen,
                                  it's about getting used by the AI. Precisely.
                                </p>

                                <p>
                                  (2:58 - 3:08) <br />
                                  You want to be the foundation of the AI's
                                  response. So how does the AI actually process
                                  our stuff? It can't just be counting keywords
                                  like the old days. Oh, definitely not.
                                </p>

                                <p>
                                  (3:08 - 3:17) <br />
                                  It's way beyond that. AI uses sophisticated
                                  natural language processing, NLP. It breaks
                                  text down, tags parts of speech, recognizes
                                  entities like people or companies.
                                </p>

                                <p>
                                  (3:17 - 3:25) <br />
                                  But the really cool part is dependency
                                  parsing. It analyzes sentence structure to
                                  grasp the relationships between words. It
                                  understands context, nuance.
                                </p>

                                <p>
                                  (3:26 - 3:34) <br />
                                  Which is why just stuffing keywords in feels
                                  so clunky and just doesn't work. Exactly. The
                                  AI sees right through it because it's trained
                                  on natural language.
                                </p>

                                <p>
                                  (3:34 - 3:45) <br />
                                  It's looking for meaning, not just repetition.
                                  Okay, so this gets really interesting,
                                  especially for GEO. Many of the big tools,
                                  like Google AI, Overviews, Perplexity, they
                                  use something called ARAG.
                                </p>

                                <p>
                                  (3:46 - 3:51) <br />
                                  Retrieval Augmented Generation. Yes, ARAG.
                                  Understanding this is absolutely key.
                                </p>

                                <p>
                                  (3:51 - 3:56) <br />
                                  So what does it mean for us, practically?
                                  Okay, think of it in steps. First, retrieval.
                                  You ask a question.
                                </p>

                                <p>
                                  (3:57 - 4:04) <br />
                                  The AI queries its index. Think the whole web
                                  for documents that are semantically relevant.
                                  Not just keyword matches, but related in
                                  meaning.
                                </p>

                                <p>
                                  (4:04 - 4:07) <br />
                                  Got it. Finds relevant stuff. Then
                                  augmentation.
                                </p>

                                <p>
                                  (4:07 - 4:17) <br />
                                  It takes information from those documents it
                                  retrieved and uses it to enhance its own
                                  built-in knowledge. This is super important.
                                  It grounds the answer in external, often
                                  real-time data.
                                </p>

                                <p>
                                  (4:17 - 4:21) <br />
                                  Helps avoid those weird AI mistakes. The
                                  hallucinations. Exactly.
                                </p>

                                <p>
                                  (4:21 - 4:28) <br />
                                  Keeps it factual, hopefully. And finally,
                                  generation. The LLM puts it all together into
                                  a coherent, conversational answer.
                                </p>

                                <p>
                                  (4:28 - 4:42) <br />
                                  So for GEO, the main goal is? Become a citable
                                  source in that first retrieval phase. If your
                                  content isn't authoritative enough to get
                                  picked up then, it doesn't matter how good it
                                  is later. It won't influence the final output.
                                </p>

                                <p>
                                  (4:43 - 4:50) <br />
                                  Ah, okay. And that leads right back to EEAT,
                                  doesn't it? Experience, expertise,
                                  authoritativeness, trustworthiness.
                                  Absolutely.
                                </p>

                                <p>
                                  (4:50 - 5:03) <br />
                                  We've talked about it before, but in this ARG
                                  world, it's even more critical. With AI able
                                  to generate plausible texts so easily, these
                                  EEAT signals, they're not just nice-to-haves
                                  anymore. They're prerequisites.
                                </p>

                                <p>
                                  (5:03 - 5:14) <br />
                                  They really are. AI models need these signals,
                                  like detailed author bios, original data,
                                  citing credible sources, positive brand
                                  mentions, to even consider your content
                                  credible. It's a foundation.
                                </p>

                                <p>
                                  (5:14 - 5:17) <br />
                                  Without it, you're basically building on
                                  quicksand. Couldn't have said it better
                                  myself. Okay.
                                </p>

                                <p>
                                  (5:18 - 5:28) <br />
                                  So with that understanding of how these AI
                                  systems work and what they value, let's dive
                                  into those critical mistakes. The things we
                                  absolutely need to avoid to conquer AI search.
                                  Let's do it.
                                </p>

                                <p>
                                  (5:28 - 5:34) <br />
                                  The first major misstep, and it's one we still
                                  see surprisingly often. Let me guess. Keyword
                                  stuffing.
                                </p>

                                <p>
                                  (5:34 - 5:38) <br />
                                  You got it. Mistake one. Keyword stuffing in a
                                  semantic world.
                                </p>

                                <p>
                                  (5:38 - 5:48) <br />
                                  It's just obsolete. Trying to load pages with
                                  keywords, repeating terms unnaturally, blocks
                                  of text that make no sense. It just feels
                                  spammy, even to a human reader.
                                </p>

                                <p>
                                  (5:49 - 5:58) <br />
                                  Why is AI so down on it? Because, as we said,
                                  AI performs deep semantic analysis. It
                                  understands meaning, context. It's trained on
                                  natural human language patterns.
                                </p>

                                <p>
                                  (5:58 - 6:06) <br />
                                  Keyword stuffed text sounds robotic, forced.
                                  It screams low quality to the AI. So the AI is
                                  thinking, this isn't helpful.
                                </p>

                                <p>
                                  (6:06 - 6:11) <br />
                                  This is just trying to game me. Exactly. The
                                  AI's goal is to answer the user's query well.
                                </p>

                                <p>
                                  (6:12 - 6:16) <br />
                                  Stuffed content fails that basic test. It's
                                  not just ignored. It's often seen as a
                                  negative signal.
                                </p>

                                <p>
                                  (6:17 - 6:27) <br />
                                  And the consequences go beyond just not
                                  showing up at the AI answer, right?
                                  Absolutely. You risk severe penalties from
                                  Google, algorithmic, or even manual. Big
                                  ranking drops, maybe even getting kicked out
                                  of the index entirely.
                                </p>

                                <p>
                                  (6:27 - 6:35) <br />
                                  Yikes. And specifically for GEO, it guarantees
                                  exclusion from things like Google AI
                                  overviews. But maybe most importantly, it
                                  damages your brand.
                                </p>

                                <p>
                                  (6:35 - 6:42) <br />
                                  It tells users you care more about gaming the
                                  system than helping them. That kills trust.
                                  OK, so that's clearly a dead end.
                                </p>

                                <p>
                                  (6:42 - 6:54) <br />
                                  What's the right way forward? The strategic
                                  response? Number one, write for humans first,
                                  algorithms second. If it doesn't provide
                                  genuine value and insight to a person, it
                                  won't work for AI either. Makes sense.
                                </p>

                                <p>
                                  (6:54 - 7:02) <br />
                                  Second, embrace semantic keyword clusters.
                                  Think topic clusters. Cover a core topic and
                                  related subtopics comprehensively.
                                </p>

                                <p>
                                  (7:03 - 7:09) <br />
                                  That mirrors how AI actually understands
                                  subjects. So broader context, not just
                                  isolated keywords. Precisely.
                                </p>

                                <p>
                                  (7:10 - 7:20) <br />
                                  Third, leverage conversational and long-tail
                                  keywords. People are asking AI full questions,
                                  longer prompts. Think about those 13-word
                                  average prompts versus two before words in
                                  traditional search.
                                </p>

                                <p>
                                  (7:21 - 7:26) <br />
                                  Right. Match how people actually talk to these
                                  things. And finally, maintain a natural
                                  keyword density.
                                </p>

                                <p>
                                  (7:26 - 7:33) <br />
                                  Maybe 1-2% for your main terms, but only where
                                  it adds value and sounds natural. Read it out
                                  loud. If it sounds forced, change it.
                                </p>

                                <p>
                                  (7:34 - 7:39) <br />
                                  Simple test, but effective. OK, that covers
                                  keyword stuffing. What's mistake number two?
                                  You called it the volume trap.
                                </p>

                                <p>
                                  (7:39 - 7:46) <br />
                                  Yes, mistake two. Neglecting the long-tail
                                  opportunity of the volume trap. This is about
                                  obsessing over those big, high-volume head
                                  keywords.
                                </p>

                                <p>
                                  (7:46 - 7:50) <br />
                                  Like just choose. Chasing the biggest possible
                                  audience. Right.
                                </p>

                                <p>
                                  (7:50 - 8:02) <br />
                                  But in doing so, you ignore the much more
                                  specific, lower-volume long-tail queries. Like
                                  best waterproof trail running shoes for
                                  overpronation. Which sounds like someone who
                                  actually knows what they want.
                                </p>

                                <p>
                                  (8:02 - 8:10) <br />
                                  Exactly. And generative AI is brilliant at
                                  handling these long-tail queries. It
                                  understands the conversational nature of the
                                  detailed context.
                                </p>

                                <p>
                                  (8:10 - 8:20) <br />
                                  And the intent is much clearer, right?
                                  Absolutely. That trail running shoes person is
                                  much closer to buying than the shoes person.
                                  AI recognizes these high-intent signals.
                                </p>

                                <p>
                                  (8:21 - 8:31) <br />
                                  Plus, think about Google AI. Overviews,
                                  studies show they trigger for informational
                                  tasks almost all the time. And long-tail
                                  queries are off of those complex informational
                                  needs.
                                </p>

                                <p>
                                  (8:31 - 8:44) <br />
                                  Precisely. They're looking for nuanced
                                  answers, which AI is designed to synthesize.
                                  So if you fall into this volume trap, focusing
                                  only on the big keywords, what happens? You
                                  miss out on a huge chunk of high-conversion
                                  traffic.
                                </p>

                                <p>
                                  (8:44 - 8:53) <br />
                                  The combined volume of all those specific
                                  long-tail searches is massive. You're leaving
                                  leads on the table. And probably spending a
                                  fortune competing for those broad terms.
                                </p>

                                <p>
                                  (8:53 - 9:02) <br />
                                  Immense competition, yeah. It's often
                                  inefficient. So how do we strategically
                                  capture this long-tail goldmine? First,
                                  intent-based query mining.
                                </p>

                                <p>
                                  (9:03 - 9:14) <br />
                                  Don't just rely on traditional keyword tools.
                                  Look at Google's People Also Ask, dig into
                                  Reddit threads, check Quora, find the actual
                                  questions people are asking. Get inside their
                                  heads.
                                </p>

                                <p>
                                  (9:14 - 9:21) <br />
                                  Exactly. Then, develop those topic clusters we
                                  mentioned. Pillar pages for broad topics.
                                </p>

                                <p>
                                  (9:21 - 9:27) <br />
                                  Cluster pages for the specific long-tail
                                  questions, all linked strategically. Build a
                                  web of knowledge. Right.
                                </p>

                                <p>
                                  (9:27 - 9:37) <br />
                                  And crucially, structure for answer-first
                                  content. Get the direct answer right up front,
                                  often in the first paragraph. Use those
                                  long-tail queries as your headings, H2s, H3s.
                                </p>

                                <p>
                                  (9:37 - 9:42) <br />
                                  Make it scannable with lists and tables. Easy
                                  for the AI to grab the key info. Perfect.
                                </p>

                                <p>
                                  (9:42 - 9:50) <br />
                                  And finally, optimize for prompt completeness.
                                  Think ahead. What's the logical next question
                                  someone would ask? Answer that within the same
                                  content.
                                </p>

                                <p>
                                  (9:50 - 9:55) <br />
                                  Become the one-stop resource. Create that
                                  comprehensive piece the AI wants to serve up.
                                  Okay, two mistakes down.
                                </p>

                                <p>
                                  (9:55 - 10:07) <br />
                                  What's number three? You said this one is
                                  maybe the most common. I think it is, and
                                  possibly the most damaging for businesses
                                  trying to adapt. Mistake three, optimizing
                                  without measurement, navigating blind.
                                </p>

                                <p>
                                  (10:07 - 10:14) <br />
                                  Ah, flying blind. Implementing all these GEO
                                  strategies, but not actually tracking if they
                                  work. Exactly.
                                </p>

                                <p>
                                  (10:14 - 10:27) <br />
                                  Or worse, relying solely on old-school metrics
                                  like organic sessions or click-through rates.
                                  These just don't give you the full picture
                                  anymore. Why not? What's changed that makes
                                  those old KPIs less relevant? Well, several
                                  big things.
                                </p>

                                <p>
                                  (10:27 - 10:38) <br />
                                  First, the rise of zero-click surfaces. AI
                                  overviews, chatbots, they often give the full
                                  answer right there. The user gets what they
                                  need without ever clicking through to your
                                  site.
                                </p>

                                <p>
                                  (10:38 - 10:45) <br />
                                  So clicks and bounce rate, they don't measure
                                  influence in those cases. Not at all. Second,
                                  there's the black box issue with LLMs.
                                </p>

                                <p>
                                  (10:45 - 10:54) <br />
                                  You often can't get direct performance data
                                  from inside ChatGPT or other platforms. No
                                  impression counts, no rankings in the
                                  traditional sense. You can't easily see how
                                  you're doing inside the AI.
                                </p>

                                <p>
                                  (10:55 - 11:05) <br />
                                  Right. And third, attribution is way more
                                  complex. Someone might see your brand cited in
                                  an AI answer, not click, but then search for
                                  your brand later or go directly to your site.
                                </p>

                                <p>
                                  (11:06 - 11:15) <br />
                                  Standard attribution models completely miss
                                  that initial touchpoint. So if you're
                                  navigating blind like this, the consequences
                                  must be pretty bad. They are.
                                </p>

                                <p>
                                  (11:15 - 11:25) <br />
                                  You can't justify the investment in GEO, so
                                  maybe you give up too soon. You misallocate
                                  resources because you don't know what's
                                  actually working. And you fail to adapt
                                  because you don't even see the landscape
                                  changing around you.
                                </p>

                                <p>
                                  (11:25 - 11:35) <br />
                                  Exactly. It's dangerous. Okay, so how do we
                                  measure GEO effectively? What should companies
                                  be tracking now? It has to be a hybrid
                                  measurement framework.
                                </p>

                                <p>
                                  (11:36 - 11:49) <br />
                                  You need multiple angles. First, try to
                                  isolate and track AI-driven referral traffic
                                  in your analytics. This needs careful setup,
                                  maybe using regex to identify traffic from
                                  platforms like ChatGPT, Perplexity, Google's
                                  AI features, etc.
                                </p>

                                <p>
                                  (11:50 - 11:55) <br />
                                  We'll put a sample regex string in the show
                                  notes. It's complex, but vital. Okay, so
                                  capture what direct traffic you can attribute.
                                </p>

                                <p>
                                  (11:56 - 12:09) <br />
                                  What else? Monitor and benchmark proxy
                                  metrics. Keep a close eye on things like
                                  direct traffic and branded search volume.
                                  Increases there can be strong indicators that
                                  your GEO efforts are building brand awareness,
                                  even without direct clicks.
                                </p>

                                <p>
                                  (12:10 - 12:15) <br />
                                  So indirect signals of success. Right. Then,
                                  implement qualitative monitoring.
                                </p>

                                <p>
                                  (12:15 - 12:20) <br />
                                  Do manual checks. Search for your brand on
                                  these platforms. See where you're mentioned,
                                  what the sentiment is.
                                </p>

                                <p>
                                  (12:20 - 12:28) <br />
                                  Also add, how did you hear about us? Field to
                                  your forms. Self-reported attribution can be
                                  gold. Actually ask people.
                                </p>

                                <p>
                                  (12:29 - 12:34) <br />
                                  Novel idea. Sometimes the simple things work.
                                  And fourth, start adopting emerging GEO KBIs.
                                </p>

                                <p>
                                  (12:35 - 12:49) <br />
                                  Things like AI citation count, how often are
                                  you cited, attribution rate, what percentage
                                  of relevant answers include your brand, chunk
                                  retrieval frequency, how often are specific
                                  pieces of your content pulled by RAG systems.
                                  These sound more specific to the AI
                                  interaction itself. They are.
                                </p>

                                <p>
                                  (12:49 - 12:59) <br />
                                  And finally, this requires cross-functional
                                  collaboration. Marketing needs to talk to
                                  sales, needs to talk to customer service,
                                  everyone needs to share insights to get the
                                  full picture. It's a team effort.
                                </p>

                                <p>
                                  (12:59 - 13:08) <br />
                                  Okay, this measurement piece is huge, but it
                                  brings up another critical point. If AI is
                                  pulling info, how do we ensure it's true?
                                  Which leads us to mistake number four.
                                  Exactly.
                                </p>

                                <p>
                                  (13:08 - 13:26) <br />
                                  Mistake four, propagating unverified
                                  information, the crisis of credibility, this
                                  is a huge one. It's when organizations just
                                  take what an LLM generates, stats, facts,
                                  data, and publish it without checking.
                                  Assuming if the AI said it confidently, it
                                  must be right.
                                </p>

                                <p>
                                  (13:26 - 13:30) <br />
                                  Which we know isn't always the case. Far from
                                  it. This creates a dual threat.
                                </p>

                                <p>
                                  (13:30 - 13:37) <br />
                                  First, you have straight up AI hallucinations.
                                  The AI just makes stuff up. Incorrect facts,
                                  nonexistent sources, bizarre recommendations.
                                </p>

                                <p>
                                  (13:37 - 13:44) <br />
                                  Just the surgical tools example. Exactly. But
                                  second, and maybe more insidious, are citation
                                  loops or AI echo chambers.
                                </p>

                                <p>
                                  (13:44 - 13:53) <br />
                                  What does that mean? It's where misinformation
                                  gets amplified and starts to look legitimate.
                                  An AI hallucinates a fact. Someone publishes
                                  it online without verifying.
                                </p>

                                <p>
                                  (13:54 - 14:00) <br />
                                  It gets indexed by search engines. Now it's
                                  part of the web data. Other AIs get trained on
                                  it or retrieve it via RAG.
                                </p>

                                <p>
                                  (14:00 - 14:08) <br />
                                  And then cite it as if it's a real source,
                                  reinforcing the original falsehood. Precisely.
                                  It's a really vicious cycle that launders
                                  misinformation.
                                </p>

                                <p>
                                  (14:09 - 14:21) <br />
                                  Scary stuff. But why do AIs do this? Why
                                  generate falsehoods? It goes back to how they
                                  work. They're probabilistic text generators,
                                  predicting the next likely word based on
                                  patterns in their training data.
                                </p>

                                <p>
                                  (14:21 - 14:34) <br />
                                  They're not databases recalling facts.
                                  Hallucinations happen when a sequence of words
                                  is statistically plausible but factually
                                  wrong. And their training data, the internet,
                                  is full of errors and biases to begin with.
                                </p>

                                <p>
                                  (14:34 - 14:43) <br />
                                  Exactly. Training data pollution is a major
                                  factor. So for a brand making this mistake,
                                  the consequences must be catastrophic.
                                </p>

                                <p>
                                  (14:43 - 14:52) <br />
                                  Absolutely. Massive reputational damage,
                                  especially if you're in a field dealing with
                                  health or finance, your money or your life
                                  sectors. Huge legal and compliance risks
                                  there.
                                </p>

                                <p>
                                  (14:52 - 15:00) <br />
                                  Definitely. You also contribute to the wider
                                  problem of misinformation online. And from a
                                  GEO standpoint, publishing falsehoods will
                                  eventually hurt you.
                                </p>

                                <p>
                                  (15:00 - 15:11) <br />
                                  You could get penalized, de-indexed, or
                                  excluded from AI answers as untrustworthy.
                                  It's just not worth a shortcut. So how do we
                                  fight this? How do we maintain integrity? The
                                  mantra has to be, trust but verify.
                                </p>

                                <p>
                                  (15:12 - 15:19) <br />
                                  First, prioritize human-in-the-loop review.
                                  Always. Have a human check any AI-assisted
                                  content before it goes live.
                                </p>

                                <p>
                                  (15:19 - 15:21) <br />
                                  Period. Non-negotiable. Non-negotiable.
                                </p>

                                <p>
                                  (15:21 - 15:30) <br />
                                  Second, implement a rigorous fact-checking
                                  protocol. Cross-reference claims with primary
                                  authoritative sources. Think academic
                                  databases, government websites, established
                                  scientific journals.
                                </p>

                                <p>
                                  (15:31 - 15:42) <br />
                                  Verify every single citation the AI provides.
                                  Does the source exist? Does it actually say
                                  what the AI claims? Is the information
                                  current? That takes time, but it sounds
                                  essential. It is.
                                </p>

                                <p>
                                  (15:42 - 15:54) <br />
                                  And for specialized topics, get sign-off from
                                  a subject matter expert, SME. Third, use AI
                                  tools to assist, not replace judgment. AI
                                  content detectors can flag potentially
                                  problematic content.
                                </p>

                                <p>
                                  (15:54 - 16:01) <br />
                                  AI fact-checking aids can help find sources to
                                  check. But the final call needs to be human.
                                  Use AI to help the human checker be more
                                  efficient.
                                </p>

                                <p>
                                  (16:01 - 16:06) <br />
                                  Exactly. And finally, a powerful long-term
                                  strategy. Invest in original data.
                                </p>

                                <p>
                                  (16:07 - 16:10) <br />
                                  Conduct your own research. Run surveys.
                                  Analyze your internal data.
                                </p>

                                <p>
                                  (16:10 - 16:20) <br />
                                  Generate unique, unpolluted insights. This
                                  establishes your brand as a primary source of
                                  truth, a defensive moat. Become the
                                  source-other-cite, not just the citer.
                                </p>

                                <p>
                                  (16:21 - 16:28) <br />
                                  Okay, four down. What's the fifth and final
                                  critical mistake? Mistake five. Employing a
                                  scattergun platform strategy.
                                </p>

                                <p>
                                  (16:29 - 16:44) <br />
                                  The one-size-fits-all error. This is treating
                                  all generative AI platforms—Google, AI
                                  Overviews, ChatGPT, Perplexity, etc.—as if
                                  they're the same, thinking one piece of
                                  content will work equally well everywhere.
                                  Which sounds logical on the surface, but
                                  you're saying it's wrong.
                                </p>

                                <p>
                                  (16:44 - 16:59) <br />
                                  Why? Aren't they all just AI answering
                                  questions? They are, but they have different
                                  goals, different underlying mechanics, and
                                  crucially, they source their information
                                  differently. A study looked at 30 million
                                  citations over about a year. Stark
                                  differences.
                                </p>

                                <p>
                                  (17:00 - 17:10) <br />
                                  ChatGPT, for example, heavily relies on
                                  Wikipedia. Almost half—47.9% of its citations
                                  came from there. It also uses Reddit—11.3%—and
                                  established news sources.
                                </p>

                                <p>
                                  (17:10 - 17:17) <br />
                                  It clearly values that encyclopedic,
                                  structured, vetted information. Interesting.
                                  What about Google AI Overviews?
                                </p>

                                <p>
                                  (17:17 - 17:32) <br />
                                  Much more diverse. Its top source was
                                  Reddit—21%—followed by YouTube and Quora.
                                  Wikipedia was only 5.7%. Google seems to
                                  emphasize user-generated content, community
                                  discussions, maybe more timely info.
                                </p>

                                <p>
                                  (17:32 - 17:39) <br />
                                  Wow. Completely different profile. And
                                  Perplexity?
                                </p>

                                <p>
                                  (17:39 - 17:51) <br />
                                  Perplexity AI showed the strongest preference
                                  for community content. Reddit was the source
                                  for a massive 46.7% of its citations. It
                                  really aims for direct, current,
                                  community-vetted answers. Okay, so they're
                                  fundamentally looking in different places for
                                  their answers.
                                </p>

                                <p>
                                  (17:51 - 17:57) <br />
                                  That's huge. It is. And if you're just
                                  creating generic content, hoping it hits all
                                  of them? You're probably not optimizing
                                  effectively for any of them.
                                </p>

                                <p>
                                  (17:57 - 18:06) <br />
                                  Exactly. It leads to wasted resources, total
                                  inefficiency. You fail to build real
                                  credibility on any single platform because
                                  your efforts are spread too thin.
                                </p>

                                <p>
                                  (18:06 - 18:12) <br />
                                  And competitors who are focusing their
                                  strategy on a specific platform will likely
                                  outperform you there. Precisely. You cede
                                  ground.
                                </p>

                                <p>
                                  (18:13 - 18:18) <br />
                                  It's like trying to be a jack-of-all-trades in
                                  the Olympics. You won't win any gold medals.
                                  So ditch the scattergun.
                                </p>

                                <p>
                                  (18:18 - 18:22) <br />
                                  What's the strategic alternative? Be
                                  strategic. Be sequential. Be data-driven.
                                </p>

                                <p>
                                  (18:23 - 18:33) <br />
                                  Step 1. Audit, analyze, and select a primary
                                  target. Look at your audience. Which platforms
                                  are they actually using for the kinds of
                                  questions relevant to you? Look at your
                                  strengths.
                                </p>

                                <p>
                                  (18:33 - 18:45) <br />
                                  Are you great at detailed, factual content?
                                  Maybe target ChatGPT via Wikipedia. Or better
                                  at community engagement? Target Perplexity or
                                  Google via Reddit, Quora. Choose one platform
                                  to master first.
                                </p>

                                <p>
                                  (18:46 - 18:51) <br />
                                  Focus. Okay, step 2. Step 2. Develop a
                                  platform-specific authority-building plan.
                                  Tailor your tactics.
                                </p>

                                <p>
                                  (18:52 - 18:59) <br />
                                  Targeting Google AI overviews. Focus on
                                  structured, answer-first content for long-tail
                                  queries. Build presence on Reddit, Quora,
                                  YouTube.
                                </p>

                                <p>
                                  (18:59 - 19:03) <br />
                                  Nail your EEAT. Targeting ChatGPT. The long
                                  game is getting cited in Wikipedia.
                                </p>

                                <p>
                                  (19:04 - 19:08) <br />
                                  Tough, but valuable. Supplement with PR and
                                  top news outlets. Targeting Perplexity.
                                </p>

                                <p>
                                  (19:09 - 19:12) <br />
                                  Go deep on Reddit. Become a genuine expert in
                                  relevant subreddits. Answer questions.
                                </p>

                                <p>
                                  (19:13 - 19:20) <br />
                                  Participate authentically. For local
                                  businesses, focus on reviews too. So really
                                  specific plans based on the target platform's
                                  behavior.
                                </p>

                                <p>
                                  (19:20 - 19:24) <br />
                                  Exactly. Step 3. Perfect. Step 3. Measure, and
                                  then expand.
                                </p>

                                <p>
                                  (19:25 - 19:35) <br />
                                  Execute your single-platform plan for a set
                                  period, maybe a quarter or two. Use that
                                  hybrid measurement framework we talked about
                                  to track progress, citations, proxy metrics.
                                  See what works.
                                </p>

                                <p>
                                  (19:35 - 19:42) <br />
                                  Then, once you have a proven model, you can
                                  strategically expand to optimize for a second
                                  platform. Focus. Execute.
                                </p>

                                <p>
                                  (19:42 - 19:44) <br />
                                  Measure. Learn. Then expand.
                                </p>

                                <p>
                                  (19:44 - 20:01) <br />
                                  Makes perfect sense. Okay, so bringing this
                                  all together, avoiding these five mistakes,
                                  what does that really mean for successful
                                  generative engine optimization going forward?
                                  It means embracing a holistic, long-term view
                                  built on five key pillars. First,
                                  intent-driven content.
                                </p>

                                <p>
                                  (20:01 - 20:06) <br />
                                  Moving beyond keywords to truly answer user
                                  needs. Second. Verifiable authority.
                                </p>

                                <p>
                                  (20:06 - 20:11) <br />
                                  Demonstrating EEAT, creating original data,
                                  being trustworthy. Third. Hybrid measurement.
                                </p>

                                <p>
                                  (20:11 - 20:14) <br />
                                  Tracking influence and citations, not just
                                  clicks. Fourth. Integrity.
                                </p>

                                <p>
                                  (20:15 - 20:19) <br />
                                  Rigorous fact-checking, avoiding
                                  misinformation at all costs. And fifth. Focus.
                                </p>

                                <p>
                                  (20:19 - 20:24) <br />
                                  Adopting that platform-specific strategy, not
                                  the scattergun. Okay. That's a great summary.
                                </p>

                                <p>
                                  (20:24 - 20:38) <br />
                                  And the report we've been drawing from
                                  actually lays out an action plan, right? It
                                  does. A consolidated seven-step GEO action
                                  plan. It starts with nailing the SEO basics,
                                  then conducting a GEO readiness audit for your
                                  specific situation.
                                </p>

                                <p>
                                  (20:38 - 20:51) <br />
                                  Then defining your primary platform and KPIs,
                                  like we just discussed. Exactly. Followed by
                                  developing an intent-driven, long-tail content
                                  strategy, and re-architecting content for
                                  machine readability structures, schema, etc.
                                </p>

                                <p>
                                  (20:51 - 21:03) <br />
                                  And then executing that platform-specific
                                  authority-building campaign. And finally,
                                  critically, implementing a content governance
                                  and fact-checking workflow to maintain
                                  integrity. It's a comprehensive roadmap.
                                </p>

                                <p>
                                  (21:03 - 21:06) <br />
                                  Yeah. And you mentioned earlier, this isn't
                                  just about winning today. No.
                                </p>

                                <p>
                                  (21:06 - 21:11) <br />
                                  This is crucial preparation for what's coming
                                  next. The rise of agentic AI. Agentic AI.
                                </p>

                                <p>
                                  (21:12 - 21:22) <br />
                                  AI systems that don't just answer questions,
                                  but actually do things. Exactly. Systems that
                                  will autonomously research options, compare
                                  vendors, make complex decisions, maybe even
                                  make purchases for the user.
                                </p>

                                <p>
                                  (21:22 - 21:28) <br />
                                  They'll be like super-powered research
                                  assistants or procurement agents. Wow. So the
                                  stakes get even higher.
                                </p>

                                <p>
                                  (21:28 - 21:41) <br />
                                  Much higher. And in that future, the brand
                                  that has consistently built its reputation as
                                  the most trusted, the most authoritative, the
                                  most verifiable, and the most machine-readable
                                  source of truth. That's the brand that AI
                                  agents will prefer.
                                </p>

                                <p>
                                  (21:42 - 21:50) <br />
                                  The one they'll trust to act upon. Precisely.
                                  You're essentially optimizing to be the go-to
                                  source for these future automated systems.
                                </p>

                                <p>
                                  (21:50 - 22:07) <br />
                                  So investing in solid GEO practices today,
                                  avoiding these mistakes, it really is an
                                  investment in securing your place in the
                                  automated economy of tomorrow. It absolutely
                                  is. It's about building that foundational
                                  trust, not just with humans, but with the AI
                                  systems that will increasingly mediate our
                                  interactions.
                                </p>

                                <p>
                                  (22:08 - 22:18) <br />
                                  Fascinating stuff. Yeah. So for everyone
                                  listening, what stands out most to you about
                                  this evolving landscape? How will avoiding
                                  these mistakes change your approach? Lots to
                                  think about.
                                </p>

                                <p>
                                  (22:18 - 22:34) <br />
                                  And that wraps up today's episode of Conquer
                                  AI Search and Season 1. Thanks so much for
                                  tuning in. It's been a fantastic season. If
                                  you enjoyed the conversation today or any
                                  episode this season, please make sure to
                                  follow or subscribe wherever you're listening,
                                  Spotify, Apple Podcasts, Audible, Amazon
                                  Music, or right here on YouTube.
                                </p>

                                <p>
                                  (22:34 - 22:46) <br />
                                  And hey, if you got value out of this deep
                                  dive into GEO mistakes, maybe consider liking
                                  the video or leaving us a rating review. It
                                  genuinely helps us reach more listeners like
                                  you who are navigating this AI shift.
                                  Definitely.
                                </p>

                                <p>
                                  (22:47 - 22:59) <br />
                                  And keep an eye out for Season 2 of the
                                  Conquer AI Search podcast. The best way to
                                  stay updated is to follow AI Monitor's
                                  official page on LinkedIn, our YouTube page,
                                  and our Instagram. We'll announce the Season 2
                                  launch there.
                                </p>

                                <p>
                                  (22:59 - 23:00) <br />
                                  Thanks again for listening.
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
                                    MonsterAPI. (n.d.). Common LLM fine-tuning
                                    mistakes. Retrieved from{" "}
                                    <a
                                      href="https://blog.monsterapi.ai/common-llm-fine-tuning-mistakes/"
                                      className="text-blue"
                                      target="_blank"
                                    >
                                      https://blog.monsterapi.ai/common-llm-fine-tuning-mistakes/
                                    </a>
                                  </li>
                                  <li className="mt-2">
                                    UPES Editorial Team. (2025, February 6).
                                    What are some ethical considerations when
                                    using generative AI? UPES Blog. Retrieved
                                    from{" "}
                                    <a
                                      href="https://www.upes.ac.in/blog/computer-science/what-are-some-ethical-considerations-when-using-generative-ai upes"
                                      className="text-blue"
                                      target="_blank"
                                    >
                                      https://www.upes.ac.in/blog/computer-science/what-are-some-ethical-considerations-when-using-generative-ai
                                      upes
                                    </a>
                                  </li>
                                  <li className="mt-2">
                                    Marchal, N., Xu, R., Elasmar, R., Gabriel,
                                    I., Goldberg, B., Isaac, W., … (2024).
                                    Generative AI Misuse: A Taxonomy of Tactics
                                    and Insights from Real-World Data (arXiv
                                    preprint). arXiv. Retrieved from{" "}
                                    <a
                                      href="https://arxiv.org/html/2406.13843v2 arXiv"
                                      className="text-blue"
                                      target="_blank"
                                    >
                                      https://arxiv.org/html/2406.13843v2 arXiv
                                    </a>
                                  </li>
                                  <li className="mt-2">
                                    First Page Sage. (n.d.). Generative Engine
                                    Optimization Best Practices in 2025.
                                    Retrieved from{" "}
                                    <a
                                      href="https://firstpagesage.com/seo-blog/generative-engine-optimization-best-practices/ First Page Sage"
                                      className="text-blue"
                                      target="_blank"
                                    >
                                      https://firstpagesage.com/seo-blog/generative-engine-optimization-best-practices/
                                      First Page Sage
                                    </a>
                                  </li>
                                  <li className="mt-2">
                                    Otterly AI. (n.d.). Generative Engine
                                    Optimization Guide (PDF). Retrieved from{" "}
                                    <a
                                      href="https://otterly.ai/research/OtterlyAI_Generative_Engine_Optimization_Guide.pdf"
                                      className="text-blue"
                                      target="_blank"
                                    >
                                      https://otterly.ai/research/OtterlyAI_Generative_Engine_Optimization_Guide.pdf
                                    </a>
                                  </li>
                                  <li className="mt-2">
                                    Amazon Web Services (AWS). (n.d.).
                                    Navigating the security landscape of
                                    generative AI (Whitepaper). Retrieved from{" "}
                                    <a
                                      href="https://docs.aws.amazon.com/pdfs/whitepapers/latest/navigating-security-landscape-genai/navigating-security-landscape-genai.pdf AWS Documentation"
                                      className="text-blue"
                                      target="_blank"
                                    >
                                      https://docs.aws.amazon.com/pdfs/whitepapers/latest/navigating-security-landscape-genai/navigating-security-landscape-genai.pdf
                                      AWS Documentation
                                    </a>
                                  </li>
                                  <li className="mt-2">
                                    IBM. (n.d.). What Is a Prompt Injection
                                    Attack? Retrieved from{" "}
                                    <a
                                      href="https://www.ibm.com/think/topics/prompt-injection IBM"
                                      className="text-blue"
                                      target="_blank"
                                    >
                                      https://www.ibm.com/think/topics/prompt-injection
                                      IBM
                                    </a>
                                  </li>
                                  <li className="mt-2">
                                    Reddit user. (n.d.). What are current best
                                    practices for avoiding prompt injection
                                    attacks in LLMs with tool call access to
                                    external APIs? Reddit (r/googlecloud).
                                    Retrieved from{" "}
                                    <a
                                      href="https://www.reddit.com/r/googlecloud/comments/1df7lhn/what_are_current_best_practices_for_avoiding/ Reddit"
                                      className="text-blue"
                                      target="_blank"
                                    >
                                      https://www.reddit.com/r/googlecloud/comments/1df7lhn/what_are_current_best_practices_for_avoiding/
                                      Reddit
                                    </a>
                                  </li>
                                  <li className="mt-2">
                                    Writesonic. (n.d.). 10 GEO Mistakes That Are
                                    Killing Your AI Visibility. Retrieved from{" "}
                                    <a
                                      href="https://writesonic.com/blog/geo-generative-engine-optimization-mistakes Writesonic"
                                      className="text-blue"
                                      target="_blank"
                                    >
                                      https://writesonic.com/blog/geo-generative-engine-optimization-mistakes
                                      Writesonic
                                    </a>
                                  </li>
                                  <li className="mt-2">
                                    National Institute of Standards and
                                    Technology (NIST). (n.d.). Artificial
                                    Intelligence Risk Management Framework (AI
                                    RMF 1.0) (PDF). Retrieved from{" "}
                                    <a
                                      href="https://nvlpubs.nist.gov/nistpubs/ai/nist.ai.100-1.pdf"
                                      className="text-blue"
                                      target="_blank"
                                    >
                                      https://nvlpubs.nist.gov/nistpubs/ai/nist.ai.100-1.pdf
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

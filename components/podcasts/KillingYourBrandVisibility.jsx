"use client";
// import Toc from "./Toc";
import RelatedBlogs from "../blogs/RelatedBlogs";
import Image from "next/image";
import Link from "next/link";
import { Gallery, Item } from "react-photoswipe-gallery";
import { useState } from "react";
import Blog1Faqs from "../blogs/faqs/Blog1Faqs";
import GEOCourseCTA from "@/components/common/GeoCTA";

export default function KillingYourBrandVisibility({ blogItem }) {
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
                  AI Search is Killing Your Brand’s Visibility: The SEO
                  Extinction Event is Here
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
                    src="https://www.youtube.com/embed/rLWZd2RPW2s?si=MlkKcc_YSECTi8rT"
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
                            Ep #3: AI Search is Killing Your Brand's Visibility:
                            The SEO Extinction Event is Here
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
                        src="https://audio.getaimonitor.com/ConquerAISearchWithAI/conquer-ai-search-ep3.mp3"
                      ></audio>
                      {/* </figure> */}
                      <hr className="w-100 m-0 d-block mt-4" />
                    </div>
                    <p className="mt-2">Also Available on:</p>
                    <div className="d-none lg:d-block">
                      {/* <div className="row child-cols-3 sm:child-cols-6 xl:child-cols-3 col-match g-2 justify-between hstack mt-2"> */}
                      <div className="hstack gap-4 mt-2 justify-center">
                        <a
                          href="https://open.spotify.com/episode/4POuur9n2cRGgMD1psF49v?si=csLPDiDtSkuLGaRcIRL-nw"
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
                          href="https://music.amazon.com/podcasts/638df449-1fbd-497d-a145-5315d8541611/episodes/adaf6a10-6c0e-4e09-9c4d-d37459e1533f/conquer-ai-search-with-ai-ep-2-the-end-of-googling-a-head-to-head-comparison-conquer-ai-search-with-ai"
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
                        <a href="https://podcasts.apple.com/in/podcast/ep-3-ai-search-is-killing-your-brands-visibility-the/id1806802986?i=1000704108813">
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
                        <a href="https://youtu.be/rLWZd2RPW2s?si=UpSKPPaVDiQdH-CO">
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
                        <a href="https://overcast.fm/+ABOivxp43sA">
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
                        <a href="https://overcast.fm/+ABOivxp43sA">
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
                        <a href="v">
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
                          href="https://open.spotify.com/episode/4POuur9n2cRGgMD1psF49v?si=M9EhNMqVQ-av-hCtamewaQ"
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
                          href="https://music.amazon.com/podcasts/638df449-1fbd-497d-a145-5315d8541611/episodes/adaf6a10-6c0e-4e09-9c4d-d37459e1533f/conquer-ai-search-with-ai-ep-2-the-end-of-googling-a-head-to-head-comparison-conquer-ai-search-with-ai"
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
                        <a href="https://podcasts.apple.com/in/podcast/ep-3-ai-search-is-killing-your-brands-visibility-the/id1806802986?i=1000704108813">
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
                        <a href="https://youtu.be/rLWZd2RPW2s?si=UpSKPPaVDiQdH-CO">
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
                                  🎙️ Conquer AI Search Podcast – Ep. 3
                                </h3>
                                <ol className="fs-5">
                                  <li className="mt-1">
                                    (0:04 – 1:07) Introduction & AI Monitor’s
                                    mission
                                  </li>
                                  <li className="mt-1">
                                    (1:12 – 1:58) Shift from SEO to GEO
                                  </li>
                                  <li className="mt-1">
                                    (2:03 – 4:21) Long-tail keywords & semantic
                                    search
                                  </li>
                                  <li className="mt-1">
                                    (4:46 – 6:13) Structuring content for AI
                                    visibility
                                  </li>
                                  <li className="mt-1">
                                    (6:18 – 7:22) Balanced perspectives (pros &
                                    cons)
                                  </li>
                                  <li className="mt-1">
                                    (7:27 – 9:31) Technical SEO & schema markup
                                  </li>
                                  <li className="mt-1">
                                    (9:36 – 10:47) Data-driven authority &
                                    credibility
                                  </li>
                                  <li className="mt-1">
                                    (10:52 – 12:14) Measuring AI visibility &
                                    tools
                                  </li>
                                  <li className="mt-1">
                                    (13:05 – 14:25) Advanced tactics: PR &
                                    Wikipedia
                                  </li>
                                  <li className="mt-1">
                                    (14:31 – 16:29) Key takeaways & future
                                    readiness
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
                                    <h2 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                                      🎧 Ep. 3: How to Trick AI Into Thinking
                                      You’re Relevant
                                    </h2>
                                    <p className="">
                                      <b>
                                        Because apparently, AI has opinions now.
                                      </b>
                                    </p>
                                    <p className="mt-3">
                                      Hey digital survivors ✌️—Avi & Katherine
                                      here to help you outsmart our robot
                                      overlords. Again. Let’s turn your SEO
                                      strategy from “2012 blog vibes” to
                                      “actually useful in this AI apocalypse.”
                                    </p>
                                    <h2 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                                      🙄 THINGS AI LOVES (THAT YOU’RE IGNORING):
                                    </h2>
                                    <ul>
                                      <li className="mt-1">
                                        Specificity – “Best phone” is for
                                        amateurs. AI wants “best phone for
                                        taking selfies that hide your
                                        existential crisis.” Priorities, people.
                                      </li>
                                      <li className="mt-1">
                                        FAQs – The digital equivalent of leaving
                                        a trail of breadcrumbs. Kiehl’s did it.
                                        You’re not cooler than Kiehl’s.
                                      </li>
                                      <li className="mt-1">
                                        Wikipedia – That thing you cite but
                                        won’t make? Classic. AI treats it like
                                        the Bible. Get thee a page.
                                      </li>
                                    </ul>
                                    <h2 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                                      💤 THINGS AI THINKS ARE BORING:
                                    </h2>
                                    <ul>
                                      <li className="mt-1">
                                        Your “top 10 tips” list that’s 80%
                                        fluff. Congrats, you’ve cured insomnia.
                                      </li>
                                      <li className="mt-1">
                                        Absolute claims like “#1 solution.” AI’s
                                        rolling its virtual eyes.
                                      </li>
                                      <li className="mt-1">
                                        Content that reads like it was written
                                        by ChatGPT… wait.
                                      </li>
                                    </ul>
                                    <h2 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                                      🤖 3 AI-PLEASING HACKS (DO THEM OR DON’T):
                                    </h2>
                                    <ul>
                                      <li className="mt-1">
                                        Steal questions from Reddit – Those “how
                                        do I adult?” threads? Free content
                                        ideas. You’re welcome.
                                      </li>
                                      <li className="mt-1">
                                        Pretend you’re Switzerland – Pros/cons
                                        hype. Neutrality sells, apparently.
                                      </li>
                                      <li className="mt-1">
                                        Bury your ego – Say “best for beginners”
                                        instead of “best.” It’s fine, we’ll
                                        cope.
                                      </li>
                                    </ul>
                                    <h2 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                                      🎯 WHY BOTHER?
                                    </h2>
                                    <ul>
                                      <li className="mt-1">
                                        AI traffic converts better. Translation:
                                        Cha-ching with extra steps.
                                      </li>
                                      <li className="mt-1">
                                        Google’s AI overviews are coming. You
                                        wanna be the answer or the guy yelling
                                        “I TOLD YOU SO” later?
                                      </li>
                                    </ul>
                                    <h2 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                                      👉 CLICKBAIT PRO TIP:
                                    </h2>
                                    <p>
                                      Add a “Spoiler Alert: Your Competitors Are
                                      Doing This” section. Works every time.
                                    </p>{" "}
                                    <h2 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                                      READY TO STOP BEING IRRELEVANT?
                                    </h2>
                                    <p>
                                      P.S. If your content isn’t cited by AI,
                                      does it even exist?
                                    </p>
                                    <p className="mt-3">
                                      Tags: #SEOisBasic, #AIDoesntCare,
                                      #RIPVanillaContent, #ThisIsTheWay
                                    </p>
                                    <p className="mt-3">
                                      💡 TL;DR – AI’s judging your content like
                                      a pretentious barista judges your oat milk
                                      latte order. Adapt or get decaf’d.
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
                                  Welcome to the Concur AI Search podcast from
                                  the team at AI Monitor. It's great to be back.
                                  Thanks.
                                </p>
                                <p>
                                  (0:10 - 0:18) <br />
                                  Yeah, great to be here. I'm really looking
                                  forward to this one. Today's topic, well, it
                                  feels like it's at the core of everything
                                  changing with AI Search.
                                </p>
                                <p>
                                  (0:18 - 0:35)
                                  <br />
                                  It absolutely does. And for everyone
                                  listening, this is our 10th discussion in our
                                  11-part series. We're breaking down the top 11
                                  AI optimization techniques, you know, the ones
                                  that really help you get visibility on
                                  platforms like Google AI Overview, ChatGPT,
                                  Perplexity AI.
                                </p>
                                <p>
                                  (0:35 - 0:51) <br />
                                  Basically how to win in this new AI world. And
                                  we've definitely covered some crucial ground
                                  already. Just to recap quickly, we've talked
                                  about things like the LLMs.txt file, that
                                  technical bit, telling AIs how to crawl,
                                  getting active on Reddit, using citations
                                  smartly.
                                </p>

                                <p>
                                  (0:51 - 0:55)
                                  <br />
                                  Right. Evolving SEO playbooks, the importance
                                  of PR, readability. Exactly.
                                </p>

                                <p>
                                  (0:55 - 1:03)
                                  <br />
                                  Quality content, long tail keywords for user
                                  prompts, and even getting reviews
                                  strategically. All building blocks. Which
                                  leads us perfectly into today.
                                </p>
                                <p>
                                  (1:03 - 1:22)
                                  <br />
                                  Today we're tackling number 10, why entity
                                  optimization isn't just important, but maybe
                                  even more important in the age of AI Search.
                                  Our goal, like always, is to dig into the key
                                  insights, give you the actionable stuff, and
                                  get you up to speed fast on this critical AIO
                                  technique. So let's jump in.
                                </p>
                                <p>
                                  (1:22 - 1:32)
                                  <br />
                                  Okay. So first things first. What exactly is
                                  an entity, you know, in this SEO world? Google
                                  calls it something singular, unique,
                                  well-defined, and distinguishable.
                                </p>

                                <p>
                                  (1:32 - 1:46)
                                  <br />
                                  But the interesting part is they don't have to
                                  be physical things. We're talking people,
                                  sure, but also places, ideas, brands,
                                  concepts, companies, events, even things like
                                  colors or dates. They're distinct concepts.
                                </p>
                                <p>
                                  (1:46 - 1:55)
                                  <br />
                                  That's a really key point. Because, you know,
                                  people hear entity and think, isn't that just
                                  a keyword? It's different, right? Totally
                                  different. Keywords are, well, they're the
                                  search terms people type in, the actual words.
                                </p>
                                <p>
                                  (1:55 - 2:00)
                                  <br />
                                  Like Apple. Exactly. Apple, as a keyword,
                                  could be the fruit, could be the tech company.
                                </p>
                                <p>
                                  (2:00 - 2:10)
                                  <br />
                                  But as an entity, the context makes it clear.
                                  If you're talking Apple alongside iOS, iPhone,
                                  Tim Cook, well, the AI knows you mean Apple
                                  Inc., the entity. Right.
                                </p>
                                <p>
                                  (2:11 - 2:22)
                                  <br />
                                  So it's about shifting from just thinking
                                  about strings of words to thinking about the
                                  actual things, the concepts behind them.
                                  Entities are kind of the bigger topics that
                                  keywords fall under. They give the context.
                                </p>
                                <p>
                                  (2:23 - 2:31)
                                  <br />
                                  Precisely. And look, this isn't some brand new
                                  idea that just popped up. Search engines,
                                  especially Google, have been moving this way
                                  for, well, over a decade now.
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
                                  <li>
                                    Wittypen. (n.d.). SEO case studies.
                                    Retrieved from{" "}
                                    <a
                                      href="https://wittypen.com/blog/seo-case-studies/"
                                      className="text-blue"
                                      target="_blank"
                                    >
                                      https://wittypen.com/blog/seo-case-studies/
                                    </a>
                                  </li>
                                  <li>
                                    AdLift. (n.d.). A beginner’s guide to
                                    semantic search. Retrieved from{" "}
                                    <a
                                      href="https://www.adlift.com/in/blog/a-beginners-guide-to-semantic-search/s/"
                                      className="text-blue"
                                      target="_blank"
                                    >
                                      https://www.adlift.com/in/blog/a-beginners-guide-to-semantic-search/s/
                                    </a>
                                  </li>
                                  <li>
                                    Google Search Central. (n.d.). Semantic
                                    search explained [Video]. YouTube. Retrieved
                                    from
                                    <a
                                      href="https://www.youtube.com/watch?v=RGPGdGyhyN0"
                                      className="text-blue"
                                      target="_blank"
                                    >
                                      https://www.youtube.com/watch?v=RGPGdGyhyN0
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

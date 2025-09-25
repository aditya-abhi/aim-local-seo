"use client";
// import Toc from "./Toc";
import RelatedBlogs from "../blogs/RelatedBlogs";
import Image from "next/image";
import Link from "next/link";
import { Gallery, Item } from "react-photoswipe-gallery";
import { useState } from "react";
import Blog1Faqs from "../blogs/faqs/Blog1Faqs";
import GEOCourseCTA from "@/components/common/GeoCTA";

export default function GoogleMightNextYahoo({ blogItem }) {
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
                  Google Might Be the Next Yahoo? A Head to Head Comparison
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
                    src="https://www.youtube.com/embed/bbyObcU8Xrw?si=eeqOZsP8YZ3CtrnK"
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
                            Ep #2: The End of Googling? A Head-to-Head
                            Comparison | Conquer AI Search with AI
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
                        src="https://audio.getaimonitor.com/ConquerAISearchWithAI/conquer-ai-search-with-ai-ep-2.mp3"
                      ></audio>
                      {/* </figure> */}
                      <hr className="w-100 m-0 d-block mt-4" />
                    </div>
                    <p className="mt-2">Also Available on:</p>
                    <div className="d-none lg:d-block">
                      {/* <div className="row child-cols-3 sm:child-cols-6 xl:child-cols-3 col-match g-2 justify-between hstack mt-2"> */}
                      <div className="hstack gap-4 mt-2 justify-center">
                        <a
                          href="https://open.spotify.com/episode/4cjzLX29JUj1a6bJTPP0Mx?si=SQN0tF7nQY-C9Y6tkD5fdQ"
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
                        <a href="https://podcasts.apple.com/in/podcast/ep-2-the-end-of-googling-a-head-to-head/id1806802986?i=1000703260462">
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
                        <a href="https://youtu.be/bbyObcU8Xrw?si=FMIS4VjR0WZlSYky ">
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
                        <a href="https://overcast.fm/+ABOivzMpCyY">
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
                        <a href="https://overcast.fm/+ABOivzMpCyY">
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
                        <a href="https://castro.fm/episode/FzBAUB">
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
                          href="https://open.spotify.com/episode/4cjzLX29JUj1a6bJTPP0Mx?si=YKouy5TvRb2KhRGRxOAyGQ"
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
                        <a href="https://podcasts.apple.com/in/podcast/ep-2-the-end-of-googling-a-head-to-head/id1806802986?i=1000703260462">
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
                        <a href="https://youtu.be/bbyObcU8Xrw?si=FMIS4VjR0WZlSYky">
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
                                  🎙️ Conquer AI Search Podcast – Ep. 2
                                </h3>
                                <ol className="fs-5">
                                  <li>
                                    (0:00 – 0:25) Introduction: Search landscape
                                    shift
                                  </li>
                                  <li>
                                    (0:30 – 1:05) Sources: TradingView, Forbes,
                                    CMS Wire, Reddit, comparisons
                                  </li>
                                  <li>
                                    (1:20 – 2:19) Google under pressure: stock
                                    drop & AI competition
                                  </li>
                                  <li>
                                    (2:23 – 2:58) User behavior shift: AI
                                    answers vs. Google ads
                                  </li>
                                  <li>
                                    (3:01 – 3:56) Google’s dominance & AI
                                    overviews strategy
                                  </li>
                                  <li>
                                    (4:05 – 4:31) $75B AI infrastructure
                                    investment
                                  </li>
                                  <li>
                                    (4:41 – 5:47) Why Google won historically
                                  </li>
                                  <li>
                                    (5:49 – 6:19) Perplexity AI: hybrid model &
                                    sourcing
                                  </li>
                                  <li>
                                    (6:22 – 7:29) DeepSeek AI: efficiency,
                                    geopolitics & IP issues
                                  </li>
                                  <li>
                                    (7:43 – 9:29) Global impact, U.S. response &
                                    Jevons Paradox
                                  </li>
                                  <li>
                                    (9:42 – 11:00) Reddit reactions: strengths,
                                    censorship, privacy
                                  </li>
                                  <li>
                                    (11:04 – 11:34) DeepSeek vs. OpenAI models
                                  </li>
                                  <li>
                                    (11:37 – 12:16) OpenAI search frustrations
                                  </li>
                                  <li>
                                    (12:23 – 13:13) Future of search: hybrid
                                    model & marketing shift
                                  </li>
                                  <li>
                                    (13:20 – 14:09) AI + traditional search
                                    convergence & ad model tension
                                  </li>
                                  <li>
                                    (14:15 – 14:56) Key takeaways: competition,
                                    geopolitics, user concerns
                                  </li>
                                  <li>
                                    (15:00 – 15:25) Closing question: future of
                                    finding information
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
                                      <b>
                                        “When was the last time you clicked past
                                        the first page on Google?” If you had to
                                        think about it, you’re not alone.
                                      </b>
                                    </p>
                                    <p className="mt-3">
                                      The way we find information, evaluate
                                      products, and make purchases is shifting
                                      rapidly — — and search, once dominated by
                                      Google’s mighty grip, is being challenged
                                      at its core. In Episode 2 of “Conquer AI
                                      Search with AI”, we dive headfirst into a
                                      revolution brewing in your browser: the AI
                                      Search Wars.
                                    </p>
                                    <h2 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                                      🤖 AI is Taking Over the Search Game
                                    </h2>
                                    <p>
                                      Forget typing keywords and sifting through
                                      ads. <br /> Tools like ChatGPT,
                                      Perplexity, and China’s rising force
                                      DeepSeek are offering something Google
                                      can’t — contextual, instant, human-like
                                      answers. No fluff, just what you need.
                                    </p>
                                    <p className="mt-3">
                                      And it’s not just about convenience. It’s
                                      about power — who controls the flow of
                                      information, who defines truth, and who
                                      wins the next big tech war.
                                    </p>
                                    <h2 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                                      📉 Alphabet’s Stock Is Feeling the
                                      Pressure
                                    </h2>
                                    <p>
                                      Let’s talk numbers. <br />
                                      Google’s parent company, Alphabet, is
                                      sweating. The surge of generative AI tools
                                      is making investors nervous. Every time
                                      ChatGPT trends, Google’s dominance is
                                      called into question — and Wall Street is
                                      watching.
                                    </p>{" "}
                                    <h2 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                                      🧧 DeepSeek: The Dark Horse from China
                                    </h2>
                                    <p>
                                      One name that’s turning heads? DeepSeek
                                      AI. <br />
                                      Built in China, it’s delivering powerful
                                      performance at just a fraction of the cost
                                      of U.S. models — and it’s catching up
                                      fast.
                                    </p>
                                    <p className="mt-3">
                                      This raises massive questions:
                                    </p>
                                    <ul>
                                      <li>
                                        Will China overtake the U.S. in AI
                                        leadership?
                                      </li>
                                      <li>
                                        What happens when global search is
                                        shaped by competing political and
                                        ethical ideologies?
                                      </li>
                                    </ul>
                                    <h2 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                                      🔍 Google Isn’t Backing Down
                                    </h2>
                                    <p>
                                      Make no mistake — Google’s not going down
                                      quietly.
                                      <br />
                                      It’s hitting back with Gemini, AI
                                      Overviews, and deeper AI integration
                                      across its ecosystem. But here’s the
                                      catch: can a 25-year-old search giant
                                      reinvent itself quickly enough?
                                    </p>
                                    <h2 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                                      🌍 The Bigger Picture: Misinformation,
                                      Bias & Control
                                    </h2>
                                    <p>
                                      This isn’t just a tech story. <br />
                                      It’s about who shapes the truth in the age
                                      of AI. With these new tools come very real
                                      dangers: algorithmic bias, misinformation
                                      at scale, and hidden geopolitical agendas.
                                    </p>
                                    <p className="mt-3">
                                      We’re entering uncharted territory.
                                    </p>
                                    <h2 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                                      🧠 So, Will AI Replace Search As We Know
                                      It?
                                    </h2>
                                    <p>
                                      That’s the billion-dollar question. <br />
                                      If you’ve ever typed a question into
                                      ChatGPT instead of Googling it, you
                                      already know the answer.
                                    </p>
                                    <h2 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                                      ⚠️ Join the Debate:
                                    </h2>
                                    <ul>
                                      <li>
                                        Is Google becoming the next Yahoo?
                                      </li>
                                      <li>Can we trust AI with the truth?</li>
                                      <li>Will China own the AI future?</li>
                                    </ul>
                                    <p>
                                      Drop your thoughts. Fight me in the
                                      comments. Let’s go.{" "}
                                    </p>
                                    <p>
                                      Credit: Created by the AI Monitor team
                                      using NotebookLM. AI Monitor: The ultimate
                                      tool for decoding how AI perceives your
                                      brand.
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
                                  (0:00 - 0:05) <br />
                                  You know, it really feels like the ground is
                                  shifting under our feet when it comes to
                                  finding things online.
                                </p>

                                <p>
                                  (0:05 - 0:11) <br />
                                  It really does. Used to just, well, Google it,
                                  right? That was the default. But things are
                                  definitely getting shaken up now.
                                </p>

                                <p>
                                  (0:11 - 0:16) <br />
                                  Yeah, that dominance isn't quite as
                                  unchallenged as it once was. So today, we're
                                  gonna dive deep into this whole evolving world
                                  of online search.
                                </p>

                                <p>
                                  (0:16 - 0:25) <br />
                                  We know everyone wants to stay informed, but
                                  you know, without drowning in technical stuff.
                                  Exactly. It's about cutting through the noise,
                                  really, and understanding what these changes
                                  actually mean for all of us.
                                </p>

                                <p>
                                  (0:25 - 0:32) <br />
                                  And we've pulled together quite a range of
                                  sources for this. We have. We've got stuff
                                  from TradingView, Forbes, looking at the money
                                  side, how investors are seeing things.
                                </p>

                                <p>
                                  (0:32 - 0:48) <br />
                                  The financial angle. And then we've got CMS
                                  Wire and our USI for that expert analysis, the
                                  bigger picture, tech, and even geopolitical
                                  context. And we didn't stop there. We even dug
                                  into Reddit, places like Ropin AI and RChat
                                  GPT to get a real sense of what actual users
                                  are thinking and saying.
                                </p>

                                <p>
                                  (0:48 - 1:05) <br />
                                  Yeah, see what people on the ground are
                                  experiencing. Plus, a comparison of some of
                                  these leading AI models, how they actually
                                  stack up. So the mission today for you
                                  listening is pretty straightforward. Pull out
                                  the really crucial insights about this AI
                                  competition Google's facing. You know, what
                                  are the key shifts? What might be coming next?
                                  We'll break it down.
                                </p>

                                <p>
                                  (1:05 - 1:20) <br />
                                  OK, let's get into it then. Straight away,
                                  it's pretty clear Alphabet, Google's parent
                                  company, has been feeling some pressure. That
                                  TradingView piece really highlights it with
                                  the numbers. Stock down over 20 percent year
                                  to date back in early April 2025. Yeah. And 28
                                  percent below its 52 week high. That's, well,
                                  that's bear market territory. Definitely. Now,
                                  OK, they mentioned tariffs and trade stuff
                                  played a role, but the article really points
                                  to the growing competition from generative AI.
                                  That's a major factor.
                                </p>

                                <p>
                                  (1:20 - 1:47) <br />
                                  That stock drop isn't just, you know, a blip.
                                  It shows the market is really assessing this
                                  threat. Investors are watching these AI
                                  alternatives closely. And it's not just one
                                  alternative, is it? It's like a whole wave.
                                  Exactly. You've got OpenAI's ChatGPT, which
                                  really kind of kicked things off in late 2022.
                                  Right. That was the big one everyone started
                                  talking about. Then there's Elon Musk's Grok,
                                  Anthropics' Claude, Google's own BARD, which
                                  is now Gemini, XAI's Grok too. It's suddenly a
                                  crowded field.
                                </p>

                                <p>
                                  (1:47 - 2:35) <br />
                                  And for the user, the experience is quite
                                  different, isn't it? Compared to just getting
                                  a list of blue links. Totally different. You
                                  get these fast, personalized answers. It feels
                                  more like a conversation. Like you ask
                                  something and boom, there's an answer, not
                                  just places to look for an answer. That
                                  TradingView article mentioned younger users,
                                  Gen Z, millennials. They're really leaning
                                  into this. Yeah, they value the speed, the
                                  convenience. Just get the info right there.
                                  And that directly challenges Google's whole
                                  model. Yeah. The ad driven search thing.
                                  Precisely. If you're getting the answer
                                  directly from the AI, you're probably not
                                  clicking on those sponsored links or even the
                                  organic ones as much. Less clicks, less ad
                                  revenue. The fundamental threat.
                                </p>

                                <p>
                                  (2:35 - 3:16) <br />
                                  So where does Google actually stand right now?
                                  I mean, the numbers are still huge.
                                  TradingView said about 88 percent U.S. market
                                  share in late 2024. Oh, yeah. They're still
                                  dominant, no question. And their revenue,
                                  Search and Other, was up 12.5 percent in Q4
                                  2024. That's $54 billion. Wow. And they're
                                  saying some of that growth actually came from
                                  their own AI features like AI overviews.
                                  That's the key. Google isn't just sitting
                                  back. They're actively putting AI into search
                                  results with things like AI overviews, those
                                  summaries you see at the top now. Right. The
                                  idea is to keep you right there on Google.
                                  Exactly. Keep the user in their ecosystem.
                                </p>

                                <p>
                                  (3:16 - 4:18) <br />
                                  But how's that working out? The TradingView
                                  piece suggested it's kind of a mixed bag.
                                  Seems so. Google says engagement within search
                                  is up. But there's other data showing maybe an
                                  8.9 percent drop in clicks going out to other
                                  websites. Ooh, 8.9 percent. That's not
                                  insignificant. But people might be using
                                  Google, but maybe not leaving it as much.
                                  That's the tightrope Google is walking. They
                                  provide helpful AI summaries. Great. But doing
                                  that risks starving the very websites that
                                  supply the information their AI needs. It's
                                  tricky. Yeah, you need those websites to have
                                  something to summarize. And Google's throwing
                                  a lot of money at this, aren't they? Seventy
                                  five billion dollar capital expenditure for
                                  2025. A massive number. That's a 43 percent
                                  increase. It shows how seriously they're
                                  taking this. It's all about AI and cloud
                                  infrastructure, building out Gemini, the data
                                  centers. So the plan is just embed AI
                                  everywhere. Pretty much. Make it integral to
                                  everything they offer. That level of spending
                                  shows they see this as an existential
                                  challenge. They need to lead an AI
                                  integration.
                                </p>

                                <p>
                                  (4:18 - 5:18) <br />
                                  OK, let's switch gears a bit and look at the
                                  competitors themselves. That CMS Wire article
                                  had a nice little history lesson, reminding me
                                  Google wasn't first. Not at all. He had Archie
                                  way back when, Lycos, Yahoo, AltaVista, a
                                  whole bunch of early players. So what made
                                  Google win out in the end? The article touched
                                  on it. Yeah, CMS Wire put it well. It was a
                                  mix. Relevance, definitely. Speed was huge,
                                  too. They just gave better, faster results.
                                  Plus more index pages. Right. And that super
                                  simple interface. Exactly. Compared to the
                                  cluttered portals back then, it was
                                  refreshing. It's funny to think about those
                                  old pages now. And the article also explains
                                  why it's been so hard to compete since then.
                                  Oh, absolutely. Google's relentless focus just
                                  on search. The massive data advantage they
                                  built up for their algorithms. And constant
                                  innovation like PageRank, then RankBrain,
                                  BERT, MUM. Always improving. Right. Even
                                  Microsoft, with all its resources, Bing has
                                  struggled to get even 10 percent market share.
                                  And those privacy ones, DuckDuckGo, Neva,
                                  which doesn't even exist anymore. Yeah. They
                                  found it tough going, too. The network effect
                                  in search is just incredibly strong. More
                                  users mean more data, means better results,
                                  means more users. Breaking that cycle is
                                  tough.
                                </p>

                                <p>
                                  (5:18 - 6:19) <br />
                                  But now we have these AI-powered guys. Yeah.
                                  Let's talk Perplexity AI. CMS Wire calls it a
                                  hybrid. Yeah, it sort of lends AI research
                                  with a more traditional search engine
                                  approach. It uses large language models like
                                  GPT and Claude, if you pay. And it has its own
                                  web crawler, too. Perplexity Bot. It does.
                                  What makes it interesting is it's focused on
                                  giving you direct answers, but with sources
                                  cited right there. Ah, so you can check where
                                  the info came from. Exactly. For complex
                                  questions where you need a summary from
                                  multiple places, it's pretty good. It
                                  synthesizes the info and shows its work,
                                  basically. Helps deal with that whole AI
                                  hallucination problem. That sourcing seems
                                  crucial. And they have an uncensored version,
                                  too, based on something called DeepSeek R1,
                                  R1-1776. Yeah, that's noteworthy. Which brings
                                  us nicely to DeepSeek AI itself. Chinese
                                  startup. Forbes highlights its
                                  cost-effectiveness, strength in coding, math.
                                  And the USI commentary really digs into how it
                                  might challenge U.S. dominance in AI. What's
                                  really interesting about DeepSeek is its
                                  efficiency. Our USI talks about their mixture
                                  of experts approach. Mixture of experts.
                                  What's that? Instead of one giant AI model,
                                  they use several smaller, specialized ones.
                                  The system activates the right expert model
                                  for your specific query. Oh, OK. So that uses
                                  a little computing power. Potentially, yeah.
                                  Significantly less, maybe. Which is a big deal
                                  because it could make them less reliant on
                                  those super high-end chips the U.S. has export
                                  controls on. Right. They claim training costs
                                  were low, like $6 million, though maybe higher
                                  in reality. The exact number is debated, but
                                  the focus on efficiency is clear. It's a
                                  different path than just building bigger and
                                  bigger models. But there's that question
                                  hanging over it. Did they train it using data
                                  from other models, maybe open AIs? The IP
                                  issue. That's a really thorny question, yeah.
                                  If they distilled knowledge from other
                                  systems, it raises huge questions about fair
                                  play in the global AI race. It has major
                                  geopolitical ripples. And our USI suggests
                                  DeepSeek could be more than just a search
                                  tool, potentially a geopolitical one.
                                </p>

                                <p>
                                  (6:19 - 8:18) <br />
                                  Absolutely. If they can offer capable AI much
                                  cheaper, China could become the go-to AI
                                  partner for developing economies, say, in
                                  Africa, Latin America, Southeast Asia.
                                  Extending influence through tech, maybe linked
                                  to things like the Belt and Road Initiative?
                                  Potentially. If Chinese AI gets embedded in
                                  finance or logistics in those regions, it
                                  boosts China's economic intelligence. But it
                                  also, you know, could introduce cyber
                                  vulnerabilities. And potentially shift
                                  reliance away from U.S. semiconductor designs,
                                  too. Big strategic stuff. Definitely. It
                                  affects the whole global tech power balance.
                                  So faced with this, what should the U.S. and
                                  allies do? Our USI had some ideas. Yeah, they
                                  suggest focusing on algorithmic efficiency
                                  ourselves, getting smarter, not just bigger.
                                  Also reassessing semiconductor policy, though
                                  that's complex. Right. Maybe tweaking export
                                  controls or finding other ways. Possibly.
                                  Plus, hardening our own critical
                                  infrastructure against AI manipulation and
                                  really developing an active AI diplomacy
                                  strategy to offer alternatives. Diplomacy,
                                  like offering other tech partnerships.
                                  Exactly. Engaging actively with those emerging
                                  economies. And our USI mentioned something
                                  called Jevons Paradox in relation to AI. How
                                  does that fit in? Right. Jevons Paradox is
                                  this idea that when technology makes using a
                                  resource more efficient, we often end up using
                                  more of it overall, not less. OK, so apply to
                                  DeepSeek. Well, its efficiency and lower costs
                                  could actually spur wider AI adoption
                                  globally. So instead of reducing resource use,
                                  it might just increase China's overall
                                  influence in the AI space because more people
                                  are using their efficient tech. So efficiency
                                  doesn't necessarily mean less impact, could
                                  mean more. Paradoxically, yes. Some see this
                                  whole DeepSeek situation as a kind of Sputnik
                                  moment for the US, a wake up call to innovate
                                  and invest strategically. Definitely sounds
                                  like a complex, competitive landscape. Now,
                                  let's get back to the users. What are people
                                  actually saying on places like Reddit? Those
                                  rope and AI and our chat GPT threads must have
                                  opinions on DeepSeek. Oh, absolutely. A lot of
                                  chatter there. What comes up quite a bit is
                                  people finding DeepSeek's standard model
                                  performs pretty comparably to chat GPT's basic
                                  one, the O1 model. But cheaper, especially API
                                  access. Significantly cheaper. Yeah, that's a
                                  major point. Some users even say it's better
                                  for certain things like logic puzzles, which
                                  kind of backs up that point about its
                                  reasoning abilities. Interesting. But it's not
                                  all positive, right? Weren't there concerns
                                  about censorship? Yes, that comes up to people
                                  mentioning they can't get it to criticize
                                  China or discuss sensitive topics like
                                  Tiananmen Square if they use DeepSeek
                                  directly. Which contrasts with that uncensored
                                  version perplexity offers, the R1-1776.
                                  Exactly. It highlights how the platform
                                  implementing the model can add its own
                                  guardrails or biases. It depends on who
                                  developed it and where it's operated. And the
                                  usual suspects, data privacy, security
                                  concerns. Especially with a Chinese company.
                                  Unsurprisingly, yes. Big threads about whether
                                  data goes to the Chinese government, risk of
                                  IP theft if you use it for coding. But though
                                  to be fair, other people probably point out
                                  that all online services collect data, right?
                                  That counter argument is there too, yes. And
                                  some mention the open source aspects as maybe
                                  offering some transparency. But the
                                  geopolitical context makes those worries
                                  understandable for many.
                                </p>

                                <p>
                                  (8:18 - 12:04) <br />
                                  How does DeepSeek R1 stack up against OpenAI's
                                  models in user comparisons? Well, like we
                                  said, some find R1 matches or even beats the
                                  standard chat GPT-01 for reasoning. They also
                                  like that it sometimes shows its thinking
                                  process. But OpenAI's top model, the R1 Pro,
                                  still better. Generally considered superior
                                  for really complex stuff, yeah. But the cost
                                  is a huge factor, like $200 a month. That's
                                  just not feasible for most people. Yeah,
                                  that's steep, which creates an opening for
                                  cheaper alternatives like DeepSeek.
                                  Definitely. Price is a massive differentiator
                                  in this market. And speaking of OpenAI,
                                  apparently even their own search feature in
                                  chat GPT is causing some grumbles. Saw that on
                                  the R chat GPT thread. Yeah, users seem
                                  frustrated with the limits on searches if
                                  you're a paid subscriber using the fancy 4.0
                                  model. Limits, compared to Google's free
                                  unlimited search. Exactly. People are like,
                                  wait, I'm paying and I only get so many
                                  searches with the best model. Seems
                                  counterintuitive when search is usually free.
                                  And they wish they could use a cheaper model,
                                  like a 4.0 mini maybe. For basic searches
                                  within chat GPT. That seems to be a common
                                  request. Offer a tiered approach within search
                                  itself. It feels like maybe a bit of a misstep
                                  by OpenAI. Not quite understanding user
                                  expectations around search accessibility.
                                </p>

                                <p>
                                  (12:04 - 15:25) <br />
                                  OK, so pulling back again, the future. What
                                  does it look like? CMS Wire seems pretty
                                  convinced AI is changing search for good. I
                                  think that's a safe bet. The landscape is
                                  definitely being reshaped, probably
                                  permanently. Is it going to be one or the
                                  other? More of a mix. The hybrid future idea
                                  from CMS Wire seems most likely. You'll
                                  probably still use traditional search for like
                                  quick facts, navigation, real time news.
                                  Finding a website or checking the web. Right.
                                  But then you'll turn to AI search for more
                                  complex stuff, getting summaries, comparing
                                  ideas, tackling nuanced questions. And that
                                  must mean big changes for online marketing,
                                  too. No more just stuffing keywords in.
                                  Hopefully less of that. Yeah. As AI gets
                                  better at understanding intent, what you
                                  really mean, and using things like location,
                                  marketers will have to focus on genuinely
                                  useful content that matches that intent. More
                                  about quality and relevance, less about gaming
                                  the system. That's the idea. Context becomes
                                  king. But it doesn't sound like AI replaces
                                  search engines entirely. More like they become
                                  companions, partners. I think so. As CMS Wire
                                  noted, traditional search is already weaving
                                  in AI. I think answer boxes, people also ask,
                                  AI enhances search, makes it smarter. They
                                  evolve together. Exactly. Making search more
                                  informative, more useful, hopefully. And
                                  hovering in the background of all this is
                                  still the whole third party cookie saga,
                                  right? CMS Wire brought that up. Yeah. Google
                                  keeps delaying, phasing them out, developing
                                  their privacy sandbox. It affects everything,
                                  including how both traditional search and AI
                                  search might handle advertising and user
                                  understanding in the future. Still trying to
                                  balance privacy and the ad model that powers
                                  so much of the web. It's an ongoing tension.
                                  Finding ways to deliver relevant ads without
                                  invasive tracking is the challenge for
                                  everyone, search engines and AI platforms
                                  included. Probably more reliance on first
                                  party data and privacy tech. OK, so let's try
                                  and wrap this up for everyone listening. What
                                  are the key things to take away from this deep
                                  dive? Well, first, AI is definitely a major
                                  force shaking up the search world. Google's
                                  dominance is facing a real challenge. Maybe
                                  for the first time in a long while. Right. And
                                  it's not just one challenger, but a whole
                                  bunch of different AI models, each with
                                  different strengths. Perplexity for sources.
                                  Deep Seek for efficiency. Gemini's
                                  integration. Exactly. And these aren't just
                                  tech developments in a vacuum. They're tied up
                                  with big geopolitical questions, economic
                                  competition, especially with players like Deep
                                  Seek emerging from China. And we heard from
                                  users, too, the excitement about new
                                  capabilities, but also real concerns about
                                  things like cost, censorship and data privacy.
                                  It's a complex picture with lots of angles. So
                                  to leave you with something to chew on. OK.
                                  Given how fast AI is moving in this complex
                                  global picture. Yeah. What kind of unexpected
                                  changes might we see in how we find
                                  information, say, in the next few years?
                                  That's the big question, isn't it? Will we get
                                  some kind of truly neutral, globally
                                  accessible AI search or will it always be
                                  shaped by corporate competition, national
                                  interests? Think about how you look for
                                  information now and how that might change.
                                  It's definitely something worth pondering.
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
                                    Episode #2 • Thrive Agency – Why Online
                                    Reviews Matter Even More With AI-Powered
                                    Search
                                    <a
                                      href="https://thriveagency.com/news/online-reviews-ai-powered-search/"
                                      className="text-blue"
                                      target="_blank"
                                    >
                                      https://thriveagency.com/news/online-reviews-ai-powered-search/
                                    </a>
                                  </li>
                                  <li>
                                    Reputation.com – Why Ratings and Reviews
                                    Matter More With AI-Powered Search | URL
                                    <a
                                      href="https://reputation.com/resources/blog/ratings-reviews-ai-search/"
                                      className="text-blue"
                                      target="_blank"
                                    >
                                      https://reputation.com/resources/blog/ratings-reviews-ai-search/
                                    </a>
                                  </li>
                                  <li>
                                    Reddit SEO – Yelp Dominating Local Google
                                    Rankings
                                    <a
                                      href="https://www.reddit.com/r/SEO/comments/1e894l2/yelp_dominating_local_google_rankings/"
                                      className="text-blue"
                                      target="_blank"
                                    >
                                      https://www.reddit.com/r/SEO/comments/1e894l2/yelp_dominating_local_google_rankings/
                                    </a>
                                  </li>
                                  <li>
                                    Search Engine Journal – Your Reviews Are
                                    Ranking You (or Not): How to Stay Visible in
                                    Google’s AI Era
                                    <a
                                      href="https://www.searchenginejournal.com/your-reviews-are-ranking-you-or-not-how-to-stay-visible-in-googles-ai-era/516248/"
                                      className="text-blue"
                                      target="_blank"
                                    >
                                      https://www.searchenginejournal.com/your-reviews-are-ranking-you-or-not-how-to-stay-visible-in-googles-ai-era/516248/
                                    </a>
                                  </li>
                                  <li>
                                    Anecdote AI – How to Analyze Google Customer
                                    Reviews With AI
                                    <a
                                      href="https://www.anecdote.ai/blog/how-to-analyze-google-reviews-with-ai"
                                      className="text-blue"
                                      target="_blank"
                                    >
                                      https://www.anecdote.ai/blog/how-to-analyze-google-reviews-with-ai
                                    </a>
                                  </li>
                                  <li>
                                    SEO Locale – Leverage Google Reviews for SEO
                                    Success: 7 Strategies
                                    <a
                                      href="https://seolocale.com/leverage-google-reviews-for-seo-success-7-strategies/"
                                      className="text-blue"
                                      target="_blank"
                                    >
                                      https://seolocale.com/leverage-google-reviews-for-seo-success-7-strategies/
                                    </a>
                                  </li>
                                  <li>
                                    LinkGraph – How Negative Reviews Impact SEO
                                    <a
                                      href="https://www.linkgraph.com/how-negative-reviews-impact-seo/"
                                      className="text-blue"
                                      target="_blank"
                                    >
                                      https://www.linkgraph.com/how-negative-reviews-impact-seo/
                                    </a>
                                  </li>
                                  <li>
                                    LinkedIn (Lesieur) – Gartner Predicts That
                                    by 2028 Organic Search Will Be Obsolete
                                    <a
                                      href="https://www.linkedin.com/pulse/gartner-predicts-2028-organic-search-obsolete-fabrice-lesieur/"
                                      className="text-blue"
                                      target="_blank"
                                    >
                                      https://www.linkedin.com/pulse/gartner-predicts-2028-organic-search-obsolete-fabrice-lesieur/
                                    </a>
                                  </li>
                                  <li>
                                    TradingView – AI Takes Over Search: Is
                                    Google's Dominance At Risk?
                                    <a
                                      href="https://www.tradingview.com/news/marketbeat:4889c2d25094b:0-ai-takes-over-search-is-google-s-dominance-at-risk/"
                                      className="text-blue"
                                      target="_blank"
                                    >
                                      https://www.tradingview.com/news/marketbeat:4889c2d25094b:0-ai-takes-over-search-is-google-s-dominance-at-risk/
                                    </a>
                                  </li>
                                  <li>
                                    Andi – Accuracy Matters: Andi Tops New AI
                                    Search Benchmark
                                    <a
                                      href="https://blog.andisearch.com/andisearch/accuracy-matters-andi-tops-new-ai-search-benchmark/"
                                      className="text-blue"
                                      target="_blank"
                                    >
                                      https://blog.andisearch.com/andisearch/accuracy-matters-andi-tops-new-ai-search-benchmark/
                                    </a>
                                  </li>
                                  <li>
                                    CMS Wire – Can AI-Powered Search Engines
                                    Disrupt Google's Monopoly?
                                    <a
                                      href="https://www.cmswire.com/digital-experience/can-ai-powered-search-engines-disrupt-googles-monopoly/"
                                      className="text-blue"
                                      target="_blank"
                                    >
                                      https://www.cmswire.com/digital-experience/can-ai-powered-search-engines-disrupt-googles-monopoly/
                                    </a>
                                  </li>
                                  <li>
                                    Forbes – DeepSeek Now In Perplexity's AI
                                    Search—U.S. AI Dominance Challenged
                                    <a
                                      href="https://www.forbes.com/sites/luiseromero/2025/01/28/deepseek-now-in-perplexitys-ai-search-us-ai-dominance-challenged/"
                                      className="text-blue"
                                      target="_blank"
                                    >
                                      https://www.forbes.com/sites/luiseromero/2025/01/28/deepseek-now-in-perplexitys-ai-search-us-ai-dominance-challenged/
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

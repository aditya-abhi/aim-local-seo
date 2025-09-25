"use client";
// import Toc from "./Toc";
import RelatedBlogs from "../blogs/RelatedBlogs";
import Image from "next/image";
import Link from "next/link";
import { Gallery, Item } from "react-photoswipe-gallery";
import { useState } from "react";

export default function AISearchRevolution({ blogItem }) {
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
                  Welcome to the AI Search Revolution: Why Your Website Needs an
                  llms.txt File
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
                    src="https://www.youtube.com/embed/saB6GHZxjco?si=jsOfyJkTa1TWTTh9"
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
                            Ep #9: Why Your SEO is Dead Without LLMs.txt (Yes,
                            Seriously) | Conquer AI Search With AI
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
                        src="https://audio.getaimonitor.com/ConquerAISearchWithAI/episode-9-conquer-ai.mp3"
                      ></audio>
                      {/* </figure> */}
                      <hr className="w-100 m-0 d-block mt-4" />
                    </div>
                    <p className="mt-2">Also Available on:</p>
                    <div className="d-none lg:d-block">
                      {/* <div className="row child-cols-3 sm:child-cols-6 xl:child-cols-3 col-match g-2 justify-between hstack mt-2"> */}
                      <div className="hstack gap-4 mt-2 justify-center">
                        <a
                          href="https://open.spotify.com/episode/6j7iLTCdDDtafPjqMlcDqk?si=NDBeiOT2RrmbSKwBvvM7lQ"
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
                          href="https://music.amazon.com/podcasts/638df449-1fbd-497d-a145-5315d8541611/episodes/675ab11f-25aa-4d34-82af-883b6fe7cc0e/conquer-ai-search-with-ai-ep-9-why-your-seo-is-dead-without-llms-txt-yes-seriously-conquer-ai-search-with-ai"
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
                        <a href="https://podcasts.apple.com/in/podcast/ep-9-why-your-seo-is-dead-without-llms-txt-yes-seriously/id1806802986?i=1000710647398">
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
                        <a href="https://youtu.be/saB6GHZxjco?si=gJpPgs9HYepcpNei">
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
                        <a href="https://youtu.be/saB6GHZxjco?si=gJpPgs9HYepcpNei">
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
                        <a href="https://castro.fm/episode/OaJrR4">
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
                          href="https://open.spotify.com/episode/6j7iLTCdDDtafPjqMlcDqk?si=llBWndEST0m9MqyneBT84w"
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
                          href="https://music.amazon.com/podcasts/638df449-1fbd-497d-a145-5315d8541611/episodes/675ab11f-25aa-4d34-82af-883b6fe7cc0e/conquer-ai-search-with-ai-ep-9-why-your-seo-is-dead-without-llms-txt-yes-seriously-conquer-ai-search-with-ai"
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
                        <a href="https://podcasts.apple.com/in/podcast/ep-9-why-your-seo-is-dead-without-llms-txt-yes-seriously/id1806802986?i=1000710647398">
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
                        <a href="https://youtu.be/saB6GHZxjco?si=kTvDtkwmfe1DzIAc">
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
                                  🎙️ Conquer AI Search Podcast – Ep. 9
                                </h3>
                                <ol className="fs-5">
                                  <li>Intro & Welcome (0:05 – 1:01)</li>
                                  <li>What is GEO? (1:01 – 2:43)</li>
                                  <li>
                                    LLMs.txt Overview & Benefits (2:44 – 6:15)
                                  </li>
                                  <li>Why LLMs.txt Matters (6:15 – 9:41)</li>
                                  <li>Implementation Steps (9:41 – 11:31)</li>
                                  <li>
                                    Distinction from SEO Tools (11:31 – 12:32)
                                  </li>
                                  <li>
                                    GEO Bigger Picture & Key Takeaways (12:32 –
                                    14:09)
                                  </li>
                                  <li>
                                    Wrap-up & Call to Action (14:10 – 15:03)
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
                                      Introduction
                                    </h2>
                                    <p className="">
                                      Hey there, SEO warriors, marketers, and
                                      tech-curious folks! 👋 Ever feel like the
                                      internet’s shifting under your feet?
                                      You’re not alone.
                                    </p>
                                    <p className="mt-3">
                                      I just tuned into the latest Conquer AI
                                      Search podcast (shoutout to hosts Avi and
                                      Catherine!), and they dropped some serious
                                      truth bombs about how AI is rewriting the
                                      rules of search.
                                    </p>
                                    <p className="mt-3">
                                      🔥 Spoiler: Your old SEO playbook? It’s
                                      getting a major upgrade.
                                    </p>
                                    <h2 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                                      🤖 AI Isn’t Just Chatty—It’s Changing
                                      Everything
                                    </h2>
                                    <p>
                                      Imagine this: 40% of users now prefer
                                      asking AI (like ChatGPT or Gemini) for
                                      answers instead of scrolling through
                                      Google results.
                                    </p>
                                    <p className="mt-3">
                                      Why? Because AI gives quick, direct
                                      responses, no more digging through 10 blue
                                      links.
                                    </p>
                                    <p className="mt-3">
                                      But here’s the kicker: When AI does cite
                                      sources, it often pulls from fewer than
                                      five. If your content isn’t in that tiny
                                      pool, you’re invisible.
                                    </p>
                                    <h2 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                                      🧭 Enter Generative Engine Optimization
                                      (AEO)
                                    </h2>
                                    <p>
                                      Your new survival skill in the AI search
                                      era.
                                      <br /> And the first step? A humble little
                                      file called:
                                    </p>
                                    <h3 className="h5 xl:h4 mt-3 mb-2 xl:mb-3">
                                      <b>llms.txt</b>
                                    </h3>
                                    <p className="">
                                      (Pronounced “L-L-M-s dot T-X-T”—say it
                                      with me!)
                                    </p>
                                    <h2 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                                      🧠 What the Heck is llms.txt?
                                    </h2>
                                    <p>Think of it as a mash-up between:</p>
                                    <ul className="mt-2">
                                      <li>
                                        robots.txt (the bouncer that tells
                                        search bots what’s off-limits)
                                      </li>
                                      <li>
                                        and a super-smart tour guide that
                                        whispers to AI:
                                      </li>
                                    </ul>
                                    <p className="mt-3">
                                      “Here’s what matters most on this site.”
                                    </p>
                                    <p className="mt-3">
                                      It’s a simple{" "}
                                      <b>text file written in Markdown,</b>{" "}
                                      placed in your website’s root directory.
                                    </p>
                                    <h2 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                                      🎯 It's 3 Game-Changing Superpowers:
                                    </h2>
                                    <p>
                                      <b>Prioritizes key content</b>
                                      <br /> “Hey AI, my pricing page is way
                                      more important than that random 2012 blog
                                      comment.”
                                    </p>
                                    <p className="mt-3">
                                      <b>Flags outdated or sensitive info</b>
                                      <br /> “Maybe don’t quote this archived
                                      post—it’s ancient.”
                                    </p>
                                    <p className="mt-3">
                                      <b>Adds context</b>
                                      <br /> “This section explains our product.
                                      That one’s just fun memes.”
                                    </p>
                                    <p className="mt-3">
                                      Think of llms.txt as giving AI a curated
                                      map to your knowledge—so it represents
                                      your brand more accurately.
                                    </p>
                                    <h2 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                                      🚀 Why Bother? (Hint: Your Brand Depends
                                      on It)
                                    </h2>
                                    <p>
                                      “But wait,” you say. “AI companies aren’t
                                      required to follow my llms.txt!” <br />{" "}
                                      True. But…
                                    </p>
                                    <p className="mt-3">
                                      Early adopters like <b>HubSpot</b> and
                                      <b>Zapier</b> are already seeing benefits:
                                    </p>
                                    <ul className="mt-3">
                                      <li>✅ More accurate citations</li>
                                      <li className="mt-3">
                                        ✅ Better brand summaries
                                      </li>
                                      <li className="mt-3">
                                        ✅ Early advantage in AI-driven search
                                      </li>
                                      <li className="mt-3">
                                        ✅ Future-proofing your content strategy
                                      </li>
                                    </ul>
                                    <p className="mt-3">As Avi nailed it:</p>{" "}
                                    <p className="mt-3">
                                      “In the age of AI search, visibility isn’t
                                      just about being found anymore. It’s about
                                      being understood.”
                                    </p>
                                    <h2 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                                      🧪 How to Create Your LLMs.txt File (In 5
                                      Simple Steps)
                                    </h2>
                                    <ol>
                                      <li>
                                        <b>Plan –</b> Audit your site. What
                                        content is core? What’s outdated?
                                      </li>
                                      <li className="mt-1">
                                        <b>Write –</b> Use Markdown to format
                                        your file. Be clear and brief.
                                      </li>
                                      <li className="mt-1">
                                        <b>Save –</b> Name the file exactly
                                        LLMs.txt and make sure it’s plain UTF-8
                                        text.
                                      </li>
                                      <li className="mt-1">
                                        <b>Upload –</b> Place it in your
                                        website’s root directory.
                                      </li>

                                      <li className="mt-1">
                                        <b>Verify – </b> Visit
                                        yourdomain.com/LLMs.txt to check it’s
                                        live.
                                      </li>
                                    </ol>
                                    <p className="mt-2">
                                      And don’t forget:{" "}
                                      <b>Update it quarterly</b> or whenever
                                      your content strategy changes.
                                    </p>
                                    <h2 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                                      🔮 AEO: This is Just the Beginning
                                    </h2>
                                    <p>
                                      llms.txt is your starting line, not the
                                      finish. <br /> Future episodes of Conquer
                                      AI Search will dig into:
                                    </p>
                                    <ul>
                                      <li>
                                        On-page Answer Engine Optimization
                                      </li>
                                      <li>
                                        Tracking when and how AI cites your
                                        content
                                      </li>
                                      <li>
                                        Fine-tuning how AI describes your brand
                                      </li>
                                    </ul>
                                    <p>
                                      But for now? <br />
                                      This tiny text file might be your biggest
                                      lever in the AI-powered search landscape.
                                    </p>
                                    <h2 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                                      ✍️ Final Thoughts
                                    </h2>
                                    <p>Feeling inspired?</p>
                                    <ul>
                                      <li>✅ Audit your key content</li>
                                      <li>✅ Create your llms.txt</li>
                                      <li>
                                        ✅ Influence how AI perceives your brand
                                      </li>
                                    </ul>
                                    <p>
                                      And if you want the full scoop, definitely
                                      check out the latest episode of Conquer AI
                                      Search.
                                    </p>
                                    <h2 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                                      📣 Bonus: Free Premium Marketing Courses!​
                                    </h2>
                                    <p>
                                      As a thank you to our listeners and
                                      readers, we’re giving away{" "}
                                      <b>
                                        10 premium marketing courses —
                                        absolutely FREE.
                                      </b>
                                      (Value: $19–$199 each)
                                    </p>
                                    <p className="mt-3">
                                      👉 All you have to do is comment with the
                                      name of your favorite course and we will
                                      get it out to you.
                                    </p>
                                    <ul className="mt-3">
                                      <li>
                                        1. Best Course on Generative Engine
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
                                      <li className="mt-1">
                                        2. The Best Free Course on Answer Engine
                                        Optimization (AEO) –
                                        <a
                                          href="https://getaimonitor.com/free-courses/best-answer-engine-optimization-course-for-free/
"
                                          className="text-blue"
                                          target="_blank"
                                        >
                                          https://getaimonitor.com/free-courses/best-answer-engine-optimization-course-for-free/
                                        </a>
                                      </li>
                                      <li className="mt-1">
                                        3. Master Course in Service Marketing
                                        and Product Marketing 2.0 –
                                        <a
                                          href="https://www.udemy.com/course/-marketing-strategy-service-marketing/

"
                                          className="text-blue"
                                          target="_blank"
                                        >
                                          https://www.udemy.com/course/-marketing-strategy-service-marketing/
                                        </a>
                                      </li>
                                      <li className="mt-1">
                                        4. Web3 & Cryptocurrency Market
                                        analysing Tool Using WordPress –
                                        <a
                                          href="https://www.udemy.com/course/cryptocurrency-market-analysing-tool-using-wordpress/"
                                          className="text-blue"
                                          target="_blank"
                                        >
                                          https://www.udemy.com/course/cryptocurrency-market-analysing-tool-using-wordpress/
                                        </a>
                                      </li>
                                      <li className="mt-1">
                                        5. MKT-101: Salesforce Marketing Cloud
                                        Email Specialist –
                                        <a
                                          href="https://www.udemy.com/course/mkt-101-salesforce-marketing-cloud-email-specialist/"
                                          className="text-blue"
                                          target="_blank"
                                        >
                                          https://www.udemy.com/course/mkt-101-salesforce-marketing-cloud-email-specialist/
                                        </a>
                                      </li>
                                      <li className="mt-1">
                                        6. Agile Marketing Mastery: Implementing
                                        Marketing Sprints –
                                        <a
                                          href="https://www.udemy.com/course/agile-marketing-mastery-implementing-marketing-sprints/"
                                          className="text-blue"
                                          target="_blank"
                                        >
                                          https://www.udemy.com/course/agile-marketing-mastery-implementing-marketing-sprints/
                                        </a>
                                      </li>
                                      <li className="mt-1">
                                        7. Account-Based Marketing (ABM) 2025: A
                                        Complete Guide –
                                        <a
                                          href="https://www.udemy.com/course/account-based-marketing-abm-comprehensive-guide/"
                                          className="text-blue"
                                          target="_blank"
                                        >
                                          https://www.udemy.com/course/account-based-marketing-abm-comprehensive-guide/
                                        </a>
                                      </li>
                                      <li className="mt-1">
                                        8. The Complete Digital Marketing Guide
                                        for Beginners –
                                        <a
                                          href=" https://www.udemy.com/course/the-complete-digital-marketing-guide-for-beginners/"
                                          className="text-blue"
                                          target="_blank"
                                        >
                                          https://www.udemy.com/course/the-complete-digital-marketing-guide-for-beginners/
                                        </a>
                                      </li>
                                      <li className="mt-1">
                                        9. Master Product Development: From Idea
                                        to Market Success –
                                        <a
                                          href=" https://www.udemy.com/course/master-product-development-from-idea-to-market-success/

"
                                          className="text-blue"
                                          target="_blank"
                                        >
                                          https://www.udemy.com/course/master-product-development-from-idea-to-market-success/
                                        </a>
                                      </li>
                                      <li className="mt-1">
                                        10. Social Media Marketing Guide: How to
                                        Grow on Social Media –
                                        <a
                                          href=" https://www.udemy.com/course/social-media-marketing-guide-how-to-grow-on-social-media-tareq-hajj/

"
                                          className="text-blue"
                                          target="_blank"
                                        >
                                          https://www.udemy.com/course/social-media-marketing-guide-how-to-grow-on-social-media-tareq-hajj/
                                        </a>
                                      </li>
                                    </ul>
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
                                  (0:05 - 0:19) <br />
                                  Welcome to Conquer AI Search, the podcast
                                  where we crack open the future of search
                                  technology. I'm your host Avi, joined today by
                                  Catherine. And we're about to take you inside
                                  the AI revolution, reshaping how we discover
                                  information online.
                                </p>

                                <p>
                                  (0:20 - 0:32) <br />
                                  Whether you're an SEO pro, digital marketer,
                                  or tech enthusiast, you're in the right place.
                                  This episode delivers actionable insights you
                                  can use immediately to stay ahead in the AI
                                  search game. Quick announcement.
                                </p>

                                <p>
                                  (0:33 - 0:48) <br />
                                  We're giving our listeners exclusive access to
                                  10 premium marketing courses, ranging from $19
                                  to $199, completely free. These are real
                                  value-packed resources, not fluff. Just tell
                                  us which one you want in the comments.
                                </p>

                                <p>
                                  (0:48 - 1:01) <br />
                                  To our loyal listeners, you're why we do this.
                                  New to the show? Hit subscribe now so you
                                  never miss these cutting-edge discussions.
                                  Great to be here.
                                </p>

                                <p>
                                  (1:01 - 1:12) <br />
                                  Today, we're diving into a concept that's,
                                  well, it's becoming really crucial for anyone
                                  navigating the age of AI. It's called
                                  generative engine optimization. Or GEO for
                                  short, yeah.
                                </p>

                                <p>
                                  (1:12 - 1:20) <br />
                                  GEO for short. That's right. And if you feel
                                  like the internet's changing how we find
                                  things online, you're definitely not alone.
                                </p>

                                <p>
                                  (1:20 - 1:27) <br />
                                  AI is really shaking things up. Oh,
                                  absolutely. I mean, AI is getting so much
                                  better at just giving you the answer, right?
                                  Summarizing things directly.
                                </p>

                                <p>
                                  (1:27 - 1:40) <br />
                                  One source I saw put it quite nicely, saying
                                  AI is getting chattier than your aunt at
                                  Thanksgiving. Ah, that's a good one. And you
                                  know, this chattiness, it has huge
                                  implications for how your content actually
                                  gets found.
                                </p>

                                <p>
                                  (1:40 - 1:50) <br />
                                  We're seeing these forecasts predicting quite
                                  a big drop in traditional organic web traffic
                                  because people are just turning to AI first.
                                  Exactly. And the studies back that up.
                                </p>

                                <p>
                                  (1:50 - 1:59) <br />
                                  Something like what? Over 40% of users are
                                  saying they prefer the direct answers from AI
                                  now, instead of scrolling through pages of
                                  search results. Wow. 40%.
                                </p>

                                <p>
                                  (1:59 - 2:17) <br />
                                  Yeah. And here's the kicker. When these
                                  generative engines think Google's AI
                                  overviews, chat GPT, copilot perplexity AI,
                                  when they do pull info from the web for their
                                  answers, well, they often reference way fewer
                                  sources, maybe fewer than five of the top 10
                                  traditional results.
                                </p>

                                <p>
                                  (2:17 - 2:23) <br />
                                  So just ranking high in Google isn't quite the
                                  same guarantee it used to be. Not for getting
                                  cited by the AI, no. Visibility is changing.
                                </p>

                                <p>
                                  (2:23 - 2:41) <br />
                                  Okay. So in this kind of new world, how do you
                                  make sure your brand, your content, it's not
                                  just visible, but it's actually, you know,
                                  recommended and represented correctly by these
                                  AIs? That's the million dollar question, isn't
                                  it? And that's exactly what GEO, Generative
                                  Engine Optimization, is trying to solve. It's
                                  about optimizing for these new platforms.
                                </p>

                                <p>
                                  (2:41 - 2:43) <br />
                                  Got it. Optimizing for the AIs themselves.
                                  Precisely.
                                </p>

                                <p>
                                  (2:44 - 2:57) <br />
                                  And in this podcast, we're going to get into
                                  the very first, probably the most fundamental
                                  technique for GEO right now, and that's
                                  implementing the llms.txt file. LLMs.txt.
                                  Okay. And just for clarity, how do you say
                                  that? Good point.
                                </p>

                                <p>
                                  (2:57 - 3:10) <br />
                                  It's LLMs.txt. So two L sounds at the start.
                                  LLMs.txt. LLMs.txt. Got it. Sounds technical,
                                  but you're saying it's foundational.
                                </p>

                                <p>
                                  (3:10 - 3:20) <br />
                                  Absolutely. It's step one. We'll definitely
                                  cover other GEO techniques in future podcasts,
                                  but understanding this LLMs.txt file is where
                                  you really need to begin.
                                </p>

                                <p>
                                  (3:20 - 3:27) <br />
                                  Okay, let's unpack it then. What is this
                                  LLMs.txt file? All right. So fundamentally,
                                  it's just a simple text file.
                                </p>

                                <p>
                                  (3:28 - 3:37) <br />
                                  Usually you format it using Markdown, which is
                                  pretty easy to use, and you place it right in
                                  the root directory of your website. Root
                                  directory. So like where robots.txt lives.
                                </p>

                                <p>
                                  (3:37 - 3:50) <br />
                                  Exactly like that. It sits right there
                                  alongside robots.txt, but its job is quite
                                  different. How so? Well, you know, robots.txt
                                  mostly tells traditional search crawlers,
                                  MeagleBot, BingBot, what they shouldn't crawl,
                                  mainly for indexing purposes.
                                </p>

                                <p>
                                  (3:51 - 4:01) <br />
                                  LLMs.txt is aimed specifically at the large
                                  language models, the LLMs. Think ChatGPT,
                                  Clod, Gemini. It's designed to guide them on
                                  how to understand and process your content.
                                </p>

                                <p>
                                  (4:02 - 4:08) <br />
                                  Its main goal isn't about training data. It's
                                  about helping the LLMs during what's called
                                  inference use. Inference use.
                                </p>

                                <p>
                                  (4:08 - 4:13) <br />
                                  Right. Right. So that's when the AI is
                                  actually, like, using the content in real
                                  time.
                                </p>

                                <p>
                                  (4:13 - 4:24) <br />
                                  To answer a question, someone asked it, or
                                  maybe summarize a topic. Precisely. That exact
                                  moment, you're essentially giving the AI a
                                  structured guide, a map to the knowledge on
                                  your site, right when it's figuring out what
                                  to say.
                                </p>

                                <p>
                                  (4:25 - 4:35) <br />
                                  The concept itself, it popped up around 2024,
                                  proposed by Jeremy Howard at Answer.ai.
                                  Answer.ai. Yeah. And it caught on pretty
                                  quickly. Companies started looking into how
                                  they could use it.
                                </p>

                                <p>
                                  (4:35 - 4:51) <br />
                                  So if I go ahead and make one of these
                                  LLMs.txt files, what kind of instructions can
                                  I actually put in there? What does it let me
                                  do? Good question. It mainly helps with three
                                  strategic things for the AI models. First is
                                  content prioritization.
                                </p>

                                <p>
                                  (4:52 - 4:56) <br />
                                  Prioritization. Yeah. You basically highlight
                                  your most important pages, your key resources.
                                </p>

                                <p>
                                  (4:56 - 5:11) <br />
                                  This signals to the AI, hey, this stuff is
                                  probably the most relevant if you're answering
                                  questions about us. Ah, okay. So the AI is
                                  maybe more likely to pull information from my
                                  main product page rather than, I don't know,
                                  some obscure comment thread somewhere on the
                                  site.
                                </p>

                                <p>
                                  (5:11 - 5:16) <br />
                                  That's the idea. It helps shape the AI's
                                  output. Second, it provides context.
                                </p>

                                <p>
                                  (5:16 - 5:22) <br />
                                  Context. Mm-hmm. You can give a brief
                                  explanation of what your site is all about or
                                  maybe how different sections relate to each
                                  other.
                                </p>

                                <p>
                                  (5:22 - 5:29) <br />
                                  Helps the AI see the bigger picture. And
                                  third, you can suggest some access control.
                                  Control.
                                </p>

                                <p>
                                  (5:29 - 5:44) <br />
                                  Like robots.txt. Sort of. But more like
                                  advice. You can advise the AI to treat certain
                                  content differently during inference, maybe
                                  outdated articles, or sensitive user data
                                  areas, perhaps ignore them or just handle them
                                  with care.
                                </p>

                                <p>
                                  (5:44 - 5:58) <br />
                                  Okay, so it sounds like you're giving the AI a
                                  kind of curated, almost expert-level tour of
                                  your website's knowledge. That's a really good
                                  way to put it. The whole point is to give
                                  these LLMs information that's concise, easy
                                  for them to parse, formatted just for them.
                                </p>

                                <p>
                                  (5:58 - 6:06) <br />
                                  That's why Markdown is good, simple for humans
                                  and machines. This structure just makes it
                                  easier for them to find and understand
                                  information during that inference phase.
                                  Right.
                                </p>

                                <p>
                                  (6:06 - 6:15) <br />
                                  Makes sense, technically. But you mentioned
                                  it's a voluntary signal, yeah. So if Google
                                  are open AI, they aren't required to actually
                                  follow what's in my LLMs.txt file.
                                </p>

                                <p>
                                  (6:15 - 6:27) <br />
                                  Yeah. Why should I bother? Why put in the
                                  effort? Ah, now that's where it gets
                                  strategically interesting and really hits the
                                  why should you care point. Think back, way
                                  back, to the early days of web search.
                                </p>

                                <p>
                                  (6:27 - 6:38) <br />
                                  Right. Remember how lots of websites initially
                                  tried to block search engine crawlers
                                  altogether? Yeah, I remember that. But
                                  eventually they realized, wait, if we want to
                                  be found, if we want to be relevant, we
                                  actually have to play ball.
                                </p>

                                <p>
                                  (6:38 - 6:53) <br />
                                  We have to optimize for these search engines.
                                  We're kind of seeing a similar dynamic
                                  emerging now with generative AI. So the
                                  thinking is, if you want your content cited
                                  accurately, if you want it represented the way
                                  you intend by the AI, you kind of need to give
                                  it some guidance.
                                </p>

                                <p>
                                  (6:54 - 7:15) <br />
                                  Precisely. Using LLMs.txt file gives you a
                                  level of influence over how these AI models
                                  interpret your stuff that we just haven't had
                                  before. Early experiments are suggesting that
                                  sites with a well-structured LLMs.txt file
                                  actually see their content get cited more
                                  accurately, more completely by AI models.
                                </p>

                                <p>
                                  (7:15 - 7:18) <br />
                                  That seems huge. Oh. Especially for, you know,
                                  brand reputation.
                                </p>

                                <p>
                                  (7:18 - 7:33) <br />
                                  Making sure the AI isn't misrepresenting your
                                  information when it summarizes it. Absolutely
                                  huge. I saw an example where a company used
                                  their file to tell an AI when summarizing
                                  product reviews to prioritize the verified
                                  customer testimonials.
                                </p>

                                <p>
                                  (7:33 - 7:37) <br />
                                  Oh, smart. Yeah. And to downplay maybe less
                                  reliable comments from forums.
                                </p>

                                <p>
                                  (7:38 - 7:44) <br />
                                  That's a direct way to protect your brand
                                  message within an AI-generated summary. Or
                                  you're signaling what's authoritative.
                                  Exactly.
                                </p>

                                <p>
                                  (7:44 - 8:00) <br />
                                  What's authoritative, what's supplementary,
                                  maybe what's old news. Plus, while it's not
                                  its main job, there's a thought that if LLMs
                                  can get what they need efficiently from this
                                  file, it could potentially lead to performance
                                  benefits. Maybe less need for extensive
                                  crawling for every single query.
                                </p>

                                <p>
                                  (8:00 - 8:20) <br />
                                  Okay, so how is this really different from the
                                  tools we already kind of use? You mentioned
                                  robots.txt, but what about a sitemap.xml?
                                  Great question. They all live nearby, but they
                                  serve different masters and different
                                  purposes. Robots.txt, that's for traditional
                                  search bots, controlling crawl access, telling
                                  them where they can and can't go on your site
                                  for indexing.
                                </p>

                                <p>
                                  (8:21 - 8:29) <br />
                                  Okay, access control. Right. Sitemap.xml is
                                  also for those search engines, basically
                                  giving them a list of pages you want them to
                                  find and index.
                                </p>

                                <p>
                                  (8:29 - 8:51) <br />
                                  Helps with discovery in traditional search
                                  results. And LLMs.txt? That one's specifically
                                  talking to the AI models, the LLMs, guiding
                                  their understanding and inference based on the
                                  content they access. It's less about blocking
                                  access, much more about providing that
                                  structured, prioritized view of your site's
                                  knowledge, specifically for AI consumption.
                                </p>

                                <p>
                                  (8:51 - 8:59) <br />
                                  So robots.txt is like a bouncer, checking IDs
                                  at the door and telling bots where they can
                                  go. Yeah. But LLMs.txt is more like a friendly
                                  guide inside.
                                </p>

                                <p>
                                  (8:59 - 9:03) <br />
                                  Yeah. Telling the AI what's important and how
                                  things connect. That's a perfect analogy.
                                </p>

                                <p>
                                  (9:03 - 9:14) <br />
                                  Robots.txt says what you can access. LLMs.txt
                                  file suggests how to interpret and use what
                                  you find there. It's a suggestion, a signal,
                                  not a hard rule like robots.txt often is.
                                </p>

                                <p>
                                  (9:14 - 9:18) <br />A voluntary suggestion
                                  system. Exactly. Its adoption is voluntary.
                                </p>

                                <p>
                                  (9:18 - 9:33) <br />
                                  There isn't, you know, formal universal
                                  support across every single AI platform just
                                  yet. But putting one in place now, it's like
                                  getting ahead of the curve. You're providing a
                                  helpful framework for AI, even if not every
                                  single directive is perfectly honored by every
                                  model today.
                                </p>

                                <p>
                                  (9:33 - 9:41) <br />
                                  It's really a strategic move for the future.
                                  So how does someone actually do it? Let's walk
                                  through the practical steps. Seems like there
                                  are four main ones.
                                </p>

                                <p>
                                  (9:41 - 9:45) <br />
                                  Yeah, it's pretty straightforward. Step one is
                                  plan. You need to look at your own site.
                                </p>

                                <p>
                                  (9:45 - 10:00) <br />
                                  What are your absolute must-have pages? Your
                                  five, ten core pieces of content? About
                                  negotiables. Right. Then what's secondary? And
                                  importantly, is there anything that AI should
                                  be careful with or maybe ignore? Think about
                                  how these pieces relate to.
                                </p>

                                <p>
                                  (10:00 - 10:05) <br />
                                  Do a quick content audit. OK, plan done. Then
                                  you actually write the file.
                                </p>

                                <p>
                                  (10:05 - 10:08) <br />
                                  Yep. Open a simple text editor. Create a new
                                  file.
                                </p>

                                <p>
                                  (10:08 - 10:17) <br />
                                  Use markdown. You'll typically have sections
                                  like site name, a brief site description, then
                                  your core content list with page titles and
                                  URLs. The links you identify.
                                </p>

                                <p>
                                  (10:17 - 10:24) <br />
                                  Exactly. Then maybe a content to handle with
                                  care section, explaining what and why, and
                                  perhaps additional context if needed. It's
                                  logical.
                                </p>

                                <p>
                                  (10:24 - 10:32) <br />
                                  There are examples online, like for a cooking
                                  blog, it might list recipes and techniques as
                                  core content. Simple structure. Next is
                                  implement.
                                </p>

                                <p>
                                  (10:33 - 10:42) <br />
                                  Getting it online. Correct. Save the file
                                  specifically as LLMs.txt. Super important,
                                  make sure the encoding is UTF-8 plain text.
                                </p>

                                <p>
                                  (10:42 - 10:47) <br />
                                  Most basic text editors do this by default,
                                  but double check. Encoding matters. Then
                                  upload.
                                </p>

                                <p>
                                  (10:47 - 10:59) <br />
                                  Upload it to your website's root directory,
                                  the top-level folder, same place as robots.txt
                                  or your main index page. Use your hosting file
                                  manager, FTP, whatever you normally use. And
                                  then check it.
                                </p>

                                <p>
                                  (10:59 - 11:09) <br />
                                  Crucial final step. Go to your browser and
                                  type yourdomain.com forward slash LLMs.txt.
                                  You should see the text you just wrote. That
                                  confirms it's live and accessible.
                                </p>

                                <p>
                                  (11:09 - 11:15) <br />
                                  Plan, write, implement, verify. What's the
                                  last step? Update. This isn't a one-and-done
                                  task.
                                </p>

                                <p>
                                  (11:15 - 11:23) <br />
                                  Your site evolves, you add amazing new
                                  content, maybe restructure things. You need to
                                  keep this file current. How often? A quarterly
                                  review is a good starting point.
                                </p>

                                <p>
                                  (11:23 - 11:31) <br />
                                  Or update it whenever you make major changes.
                                  Or if you notice AI isn't quite getting your
                                  site right, it's a living document. Makes
                                  sense.
                                </p>

                                <p>
                                  (11:31 - 11:40) <br />
                                  Now, just to really nail the distinction, how
                                  is this different from robots.txt or
                                  sitemap.xml? People might have those already.
                                  Good clarification. They serve different
                                  purposes.
                                </p>

                                <p>
                                  (11:41 - 11:47) <br />
                                  Robots.txt, that's for traditional search
                                  engine crawlers. It's basically access
                                  control. You can crawl here.
                                </p>

                                <p>
                                  (11:47 - 11:50) <br />
                                  You cannot crawl there. The bouncer at the
                                  door for crawlers. Pretty much.
                                </p>

                                <p>
                                  (11:50 - 11:59) <br />
                                  Then sitemap.xml, that's a map for those
                                  crawlers. It lists all the pages you want them
                                  to find and potentially index an inventory. A
                                  map of the club.
                                </p>

                                <p>
                                  (12:00 - 12:07) <br />
                                  Yeah. So robots is permission, sitemap is the
                                  layout. And LLMs.txt. It's specifically for
                                  the AI models.
                                </p>

                                <p>
                                  (12:07 - 12:21) <br />
                                  It's not about controlling crawling access
                                  like robots or being a full index like
                                  sitemap. Its job is to help the AI understand
                                  and summarize your key content accurately. It
                                  provides context and priorities for the AI's
                                  thinking process.
                                </p>

                                <p>
                                  (12:21 - 12:25) <br />
                                  Ah, okay. It's a communication layer purely
                                  for the AI's comprehension. You got it.
                                </p>

                                <p>
                                  (12:25 - 12:32) <br />
                                  Tailored for generative AI. This has been
                                  super helpful. Really demystifying LLMs.txt is
                                  that first GEO step.
                                </p>

                                <p>
                                  (12:32 - 12:39) <br />
                                  But is this the whole game? Is implementing
                                  this file all there is to GEO? Oh, definitely
                                  not. This is step one. The starting block.
                                </p>

                                <p>
                                  (12:39 - 12:53) <br />
                                  At AI Monitor, we look at GEO much more
                                  broadly. There are on-page GEO techniques,
                                  off-page GEO, and other technical GEO
                                  elements. LLMs.txt is just one, albeit
                                  foundational, piece of the technical puzzle.
                                </p>

                                <p>
                                  (12:53 - 13:07) <br />
                                  So it's the base camp for climbing the GEO
                                  mountain. Nice analogy, yes. More advanced
                                  strategies like fine-tuning content priorities
                                  within the file, better defining context,
                                  maybe even using LLMs-full.txt for really
                                  complex sites.
                                </p>

                                <p>
                                  (13:07 - 13:17) <br />
                                  They all build on this initial setup. And of
                                  course, you need to track if it's working,
                                  which is where tools like AI Monitor help
                                  measure things like AI citations, maybe
                                  AI-driven traffic. Absolutely.
                                </p>

                                <p>
                                  (13:18 - 13:25) <br />
                                  Measuring the impact is key. And we are seeing
                                  big players like HubSpot, Zapier, already
                                  implementing these kinds of AI guidance files.
                                  It's happening now.
                                </p>

                                <p>
                                  (13:25 - 13:28) <br />
                                  It's real. Okay, let's wrap this deep dive.
                                  Key takeaway.
                                </p>

                                <p>
                                  (13:28 - 13:32) <br />
                                  Yeah. The search world is changing fast.
                                  Traditional SEO isn't enough.
                                </p>

                                <p>
                                  (13:32 - 13:43) <br />
                                  Nope. GEO is the new imperative. And that
                                  first actionable step you can take today is
                                  implementing the LLMs.txt. It's a simple way
                                  to start guiding AI, telling it how to
                                  understand your content correctly.
                                </p>

                                <p>
                                  (13:44 - 13:48) <br />
                                  We really encourage you listening. Audit your
                                  core content. Write that file.
                                </p>

                                <p>
                                  (13:48 - 13:57) <br />
                                  Get it uploaded. Take control. Because, and I
                                  think this really sums it up, in this age of
                                  AI search, visibility isn't just about being
                                  found anymore.
                                </p>

                                <p>
                                  (13:57 - 14:09) <br />
                                  It's about being understood. And your LLMs.txt
                                  file is your primary tool right now to ensure
                                  AI systems comprehend and properly represent
                                  your content to the world. A powerful thought
                                  to end on.
                                </p>

                                <p>
                                  (14:10 - 14:23) <br />
                                  Thanks for joining us for this deep dive from
                                  the Conquer AI Search with AI podcast. We'll
                                  definitely explore more GEO techniques next
                                  time. That wraps another power-packed episode
                                  of Conquer AI Search.
                                </p>

                                <p>
                                  (14:24 - 14:32) <br />
                                  If you found today's discussion valuable, do
                                  us a huge favor. Share it with one person who
                                  needs to hear this. Don't forget, our free
                                  course giveaway is still open.
                                </p>

                                <p>
                                  (14:33 - 14:40) <br />
                                  Drop your pick in the comments and we'll send
                                  it your way. No strings attached. We'd love to
                                  continue the conversation.
                                </p>

                                <p>
                                  (14:40 - 14:54) <br />
                                  Connect with us on LinkedIn or Twitter to
                                  share your biggest takeaways or suggest topics
                                  for future episodes. A massive thank you to
                                  our incredible listeners. You're the reason we
                                  keep bringing you the most forward-thinking
                                  content in AI search.
                                </p>

                                <p>
                                  (14:55 - 15:03) <br />
                                  Stay curious, keep innovating, and remember,
                                  the future belongs to those who understand how
                                  AI is rewriting the rules of search. Until
                                  next!
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
                                  <li className="mt-1">
                                    Step by Step Guide: How to Create and
                                    Implement an llms.txt File - AI Monitor
                                    <a
                                      href="https://getaimonitor.com/step-by-step-to-create-and-implement-llms-txt-file/
"
                                      className="text-blue"
                                      target="_blank"
                                    >
                                      https://getaimonitor.com/step-by-step-to-create-and-implement-llms-txt-file/
                                    </a>
                                  </li>
                                  <li className="mt-1">
                                    GEO: Generative Engine Optimization - arXiv
                                    <a
                                      href="https://generative-engines.com/GEO/
"
                                      className="text-blue"
                                      target="_blank"
                                    >
                                      https://generative-engines.com/GEO/
                                    </a>
                                  </li>
                                  <li className="mt-1">
                                    What is Llms.txt File and What Does It Do?
                                    <a
                                      href="https://llmstxt.org/ "
                                      className="text-blue"
                                      target="_blank"
                                    >
                                      https://llmstxt.org/
                                    </a>
                                  </li>
                                  <li className="mt-1">
                                    A Strategic Outlook on LLM SEO: Using
                                    File-Format Logic to Guide AI-Optimized
                                    Content Design
                                    <a
                                      href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5375528"
                                      className="text-blue"
                                      target="_blank"
                                    >
                                      https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5375528
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    {/* <Gallery>
                      
                    </Gallery> */}
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

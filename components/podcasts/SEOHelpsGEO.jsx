"use client";
// import Toc from "./Toc";
import RelatedBlogs from "../blogs/RelatedBlogs";
import Image from "next/image";
import Link from "next/link";
import { Gallery, Item } from "react-photoswipe-gallery";
import { useState } from "react";
import Blog1Faqs from "../blogs/faqs/Blog1Faqs";
import GEOCourseCTA from "@/components/common/GeoCTA";

export default function SEOHelpsGEO({ blogItem }) {
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
                  SEO Helps GEO: How Old-School Tactics Are Fueling AI Search
                  Dominance in 2025
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
                    src="https://www.youtube.com/embed/beF0N2mBivA?si=vLa1SkQeiewbgbYu"
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
                            EP#12 🔥 How to Get Your Content Featured in AI
                            Overviews (Before It’s Too Late)
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
                        src="https://audio.getaimonitor.com/ConquerAISearchWithAI/episode-12-FInal-Audio.mp3"
                      ></audio>
                      {/* </figure> */}
                      <hr className="w-100 m-0 d-block mt-4" />
                    </div>
                    <p className="mt-2">Also Available on:</p>
                    <div className="d-none lg:d-block">
                      <div className="hstack gap-4 mt-2 justify-center">
                        <a
                          href="https://open.spotify.com/episode/1FNFI3ej2cShyIfFhnKf83?si=g0N5VX-XTfCElNIsUZOmWg"
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
                          href="https://music.amazon.com/podcasts/638df449-1fbd-497d-a145-5315d8541611/episodes/eff8f744-d720-4b96-99dc-c5655c2c36fe/conquer-ai-search-with-ai-ep-12-%F0%9F%94%A5-how-to-get-your-content-featured-in-ai-overviews-before-it%E2%80%99s-too-late-conquer-ai-search-with-ai"
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
                        <a href="v">
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
                        <a href="https://youtu.be/beF0N2mBivA?si=CQo1MWQfp6e_3QaZ">
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
                        <a href="https://overcast.fm/+ABOivxDUsaU">
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
                        <a href="https://pca.st/wtlc3244">
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
                        <a href="https://castro.fm/episode/z7RPvn">
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
                    <div className="d-block lg:d-none">
                      <div className="hstack justify-center gap-2 items-center mt-1">
                        <a
                          href="https://open.spotify.com/episode/1FNFI3ej2cShyIfFhnKf83?si=3Wk9gjqaRWOXDGy7XaXkgg"
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
                          href="https://music.amazon.com/podcasts/638df449-1fbd-497d-a145-5315d8541611/episodes/eff8f744-d720-4b96-99dc-c5655c2c36fe/conquer-ai-search-with-ai-ep-12-%F0%9F%94%A5-how-to-get-your-content-featured-in-ai-overviews-before-it%E2%80%99s-too-late-conquer-ai-search-with-ai"
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
                        <a href="#">
                          <div className="https://podcasts.apple.com/in/podcast/ep-12-how-to-get-your-content-featured-in-ai-overviews/id1806802986?i=1000713933002">
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
                        <a href="#">
                          <div className="https://youtu.be/beF0N2mBivA?si=CQo1MWQfp6e_3QaZ">
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
                                  🎙️ Conquer AI Search Podcast – Ep. 12
                                </h3>
                                <ol className="fs-5">
                                  <li>Intro (0:05 – 0:34)</li>
                                  <li>Key Shift: SEO → AEO (0:37 – 2:04)</li>
                                  <li>
                                    AI’s Impact on User Behavior (2:26 – 3:13)
                                  </li>
                                  <li>Keyword Strategy for AI (3:32 – 5:00)</li>
                                  <li>
                                    Content Optimization for AI (5:19 – 6:22)
                                  </li>
                                  <li>
                                    Technical SEO for AI Crawlers (6:40 – 8:30)
                                  </li>
                                  <li>
                                    Building Authority (E-E-A-T) (8:45 – 9:39)
                                  </li>
                                  <li>UX & AI Visibility (9:49 – 10:30)</li>
                                  <li>
                                    Content Freshness & AI Sources (10:30 –
                                    11:55)
                                  </li>
                                  <li>Measuring GEO Success (12:07 – 13:14)</li>
                                  <li>Conclusion (13:28 – 14:18)</li>
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
                                      In a world obsessed with whether “SEO is
                                      DOA (Dead or Alive),” we’re here to set
                                      the record straight:{" "}
                                      <b>SEO isn’t dying, it’s evolving.</b>{" "}
                                      Welcome to the fusion of traditional
                                      search strategy with cutting-edge AI:
                                      <b>
                                        Generative Engine Optimization (GEO).
                                      </b>
                                    </p>
                                    <p className="mt-3">
                                      In the latest episode of the Conquer AI
                                      Search with AI podcast, hosts Avi and
                                      Katherine break down how foundational SEO
                                      best practices, when thoughtfully adapted,
                                      are still powering visibility in an
                                      AI-first search world. From outdated
                                      keyword myths to cutting-edge AI ranking
                                      signals, this podcast delivers the most
                                      actionable SEO insights to boost your
                                      visibility and impact today.
                                    </p>
                                    <h2 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                                      🚀 What Is GEO, and Why Does It Matter?
                                    </h2>
                                    <p>
                                      Generative Engine Optimization (GEO) is
                                      the process of optimizing your content to
                                      be included in AI-generated answers. That
                                      means showing up not just in a sea of blue
                                      links, but in AI overviews, summaries, and
                                      answers from tools like ChatGPT, Google
                                      Gemini, Claude, and Perplexity.
                                    </p>
                                    <p className="mt-3">
                                      “Think of SEO as your foundation, and GEO
                                      as the AI-powered skyscraper you’re
                                      building on top.” —{" "}
                                      <b>
                                        Katherine, Conquer AI Search with AI
                                      </b>
                                    </p>
                                    <h2 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                                      💥 Breaking the Keyword Density Myth
                                    </h2>
                                    <p>
                                      For years, SEOs followed the 1% – 2.5%
                                      keyword density rule like gospel. But
                                      according to new research from AI Monitor:
                                    </p>
                                    <ul className="mt-3">
                                      <li>
                                        ✅ <b>0.8% keyword density</b> is now
                                        the GEO sweet spot.
                                      </li>
                                    </ul>
                                    <p className="mt-3">
                                      This lower density outperforms traditional
                                      benchmarks for both SEO and GEO. It keeps
                                      the content natural, semantically rich,
                                      and AI-friendly.
                                    </p>
                                    <p className="mt-3">
                                      Action Step: Audit your top-performing
                                      pages and adjust keyword density to hover
                                      around 0.8% less spammy, more
                                      AI-intelligent.
                                    </p>
                                    <h2 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                                      💥 Breaking the Keyword Density Myth
                                    </h2>
                                    <div className="panel mt-2 mb-3 p-2 border rounded-1-5 lg:rounded-2 dark:border-gray-600 dark:bg-tertiary-700 overflowx-auto">
                                      <table className="uc-table uc-table-divider">
                                        <thead className="table-head sticky-top z-1 ">
                                          <tr className="table-row dark:border-white border-gray-900 bg-gray-25 dark:bg-tertiary-800">
                                            <th
                                              className="table-header-cell top pt-0 lg:pt-1"
                                              scope="row"
                                            >
                                              <span className="fw-bold fs-5 lg:fs-4 dark:text-secondary text-underline lg:text-none">
                                                Aspect
                                              </span>
                                            </th>
                                            <th
                                              className="table-header-cell pt-8 lg:pt-1"
                                              scope="row"
                                            >
                                              <span className="fw-bold fs-5 lg:fs-4 dark:text-secondary">
                                                SEO (Search Engine Optimization)
                                              </span>
                                            </th>
                                            <th
                                              className="table-header-cell pt-8 lg:pt-1"
                                              scope="row"
                                            >
                                              <span className="fw-bold fs-5 lg:fs-4 dark:text-secondary">
                                                GEO (Generative Engine
                                                Optimization)
                                              </span>
                                            </th>
                                          </tr>
                                        </thead>
                                        <tbody className="table-body">
                                          <tr className="table-row border-gray-900 dark:border-white">
                                            <th
                                              className="top pt-0 lg:pt-1"
                                              scope="row"
                                            >
                                              <div className="hstack gap-1 justify-start">
                                                <span className="fs-5 fw-bold text-dark dark:text-white text-underline lg:text-none">
                                                  Goal
                                                </span>
                                              </div>
                                            </th>
                                            <td className="pt-4 lg:pt-1">
                                              <span className="dark:text-white">
                                                Rank in blue links
                                              </span>
                                            </td>
                                            <td className="pt-4 lg:pt-1">
                                              <span className="dark:text-white">
                                                Appear in AI answers
                                              </span>
                                            </td>
                                          </tr>
                                          <tr className="table-row border-gray-900 dark:border-white bg-gray-25 dark:bg-tertiary-800">
                                            <th
                                              className="top pt-0 lg:pt-1"
                                              scope="row"
                                            >
                                              <div className="hstack gap-1 justify-start">
                                                <span className="fs-5 fw-bold text-dark dark:text-white text-underline lg:text-none">
                                                  Focus
                                                </span>
                                              </div>
                                            </th>
                                            <td className="pt-7 lg:pt-1">
                                              <span className="dark:text-white">
                                                Keywords, backlinks, CTR
                                              </span>
                                            </td>
                                            <td className="pt-7 lg:pt-1">
                                              <span className="dark:text-white">
                                                Semantic relevance, structure,
                                                E-E-A-T
                                              </span>
                                            </td>
                                          </tr>
                                          <tr className="table-row border-gray-900 dark:border-white">
                                            <th
                                              className="top pt-0 lg:pt-1"
                                              scope="row"
                                            >
                                              <div className="hstack gap-1 justify-start">
                                                <span className="fs-5 fw-bold text-dark dark:text-white text-underline lg:text-none">
                                                  Platform
                                                </span>
                                              </div>
                                            </th>
                                            <td className="pt-7 lg:pt-1">
                                              <span className="dark:text-white">
                                                Google search
                                              </span>
                                            </td>
                                            <td className="pt-7 lg:pt-1">
                                              <span className="dark:text-white">
                                                ChatGPT, Gemini, AI Overviews,
                                                etc.
                                              </span>
                                            </td>
                                          </tr>
                                          <tr className="table-row border-gray-900 dark:border-white bg-gray-25 dark:bg-tertiary-800">
                                            <th
                                              className="top pt-0 lg:pt-1"
                                              scope="row"
                                            >
                                              <div className="hstack gap-1 justify-start">
                                                <span className="fs-5 fw-bold text-dark dark:text-white text-underline lg:text-none">
                                                  Result
                                                </span>
                                              </div>
                                            </th>
                                            <td className="pt-7 lg:pt-1">
                                              <span className="dark:text-white">
                                                Click-based visits
                                              </span>
                                            </td>
                                            <td className="pt-7 lg:pt-1">
                                              <span className="dark:text-white">
                                                AI mentions, indirect discovery
                                              </span>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </div>
                                    <p>
                                      Traditional SEO chases clicks. GEO chases
                                      contextual presence in summaries,
                                      recommendations, and curated answers.
                                    </p>
                                    <h2 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                                      🎯 The New Keyword Strategy for 2025
                                    </h2>
                                    <p className="mt-3">
                                      AI engines don’t just want head terms,
                                      they prefer{" "}
                                      <b>
                                        natural, conversational, and long-tail
                                        queries.
                                      </b>
                                    </p>
                                    <p className="mt-3">
                                      <b>Here’s how to adapt:</b>
                                    </p>
                                    <ul className="mt-2">
                                      <li>
                                        <b>Don’t ignore low-volume keywords:</b>{" "}
                                        They often power niche AI queries.
                                      </li>
                                      <li className="mt-1">
                                        <b>Answer real questions:</b> Use tools
                                        like Answer the Public or scrape
                                        Reddit/Quora.
                                      </li>
                                      <li className="mt-1">
                                        <b>Optimize for semantic search:</b>{" "}
                                        Include related terms, synonyms, and
                                        variations.
                                      </li>
                                      <li className="mt-1">
                                        <b>Use FAQs in content:</b> AI loves
                                        structured, question-based formatting.
                                      </li>
                                    </ul>
                                    <p className="mt-3">
                                      Case in point: Beauty brand <b>Kiehl’s</b>{" "}
                                      earned 550+ AI Overview rankings by simply
                                      embedding robust FAQ sections in their
                                      content.
                                    </p>
                                    <h2 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                                      Technical SEO Is Still the Bedrock
                                    </h2>
                                    <p>
                                      Without technical hygiene, even the best
                                      content is invisible to AI.
                                    </p>
                                    <p className="mt-3">
                                      <b>Must-haves in 2025:</b>
                                    </p>
                                    <ul className="mt-2">
                                      <li>HTTPS + Mobile-first design</li>
                                      <li className="mt-1">
                                        Lightning-fast load times
                                      </li>
                                      <li className="mt-1">
                                        Crawl error audits
                                      </li>
                                      <li className="mt-1">
                                        Logical site architecture and internal
                                        linking
                                      </li>
                                      <li className="mt-1">
                                        JavaScript fallback: Ensure critical
                                        content is in raw HTML
                                      </li>
                                      <li className="mt-1">
                                        Schema Markup: Use rich snippets to tell
                                        AI exactly what your content is about
                                      </li>
                                    </ul>
                                    <h2 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                                      🧠 E-E-A-T in the AI Era: Experience
                                      Matters More Than Ever
                                    </h2>
                                    <p>
                                      Google’s{" "}
                                      <b>
                                        E-E-A-T (Experience, Expertise,
                                        Authoritativeness, Trustworthiness)
                                      </b>
                                      signals are now used by AI to assess your
                                      content’s credibility.
                                    </p>
                                    <p classNAme="mt-3">
                                      <b>Tips:</b>
                                    </p>
                                    <ul className="mt-2">
                                      <li>
                                        Add detailed author bios and credentials
                                      </li>
                                      <li className="mt-1">
                                        Cite original studies, include
                                        first-hand case studies
                                      </li>
                                      <li className="mt-1">
                                        Publish proprietary data or frameworks
                                      </li>
                                      <li className="mt-1">
                                        Show real pros/cons, not just product
                                        praise
                                      </li>
                                    </ul>{" "}
                                    <h2 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                                      🌐 Where AI Pulls Data From (It’s Not Just
                                      the NYT)
                                    </h2>
                                    <p>
                                      Contrary to popular belief, AI models
                                      often
                                      <b>pull from mid-tier and niche sites.</b>
                                    </p>
                                    <ul className="mt-2">
                                      <li>
                                        90%+ of ChatGPT citations come from
                                        Google results ranked 21 or lower
                                      </li>
                                      <li className="mt-1">
                                        Google AI Overview favors Reddit and
                                        Quora
                                      </li>
                                      <li className="mt-1">
                                        50% of ChatGPT citations link to
                                        business service websites
                                      </li>
                                    </ul>
                                    <p>
                                      <b>Big win for small brands:</b> With the
                                      right optimization, even startups can earn
                                      top-tier AI visibility.
                                    </p>
                                    <h2 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                                      📈 Measuring GEO Success: New Metrics for
                                      a New Era
                                    </h2>
                                    <p>
                                      Traditional metrics like keyword rankings
                                      and organic traffic only tell half the
                                      story. Here’s what to track in the GEO
                                      era:
                                    </p>
                                    <ul className="mt-2">
                                      <li>
                                        Referrals from AI domains (e.g.,
                                        chat.openai.com, perplexity.ai)
                                      </li>
                                      <li className="mt-1">
                                        Branded search volume growth
                                      </li>
                                      <li className="mt-1">
                                        Appearance in AI answers (manual prompt
                                        testing + screenshots)
                                      </li>
                                      <li className="mt-1">
                                        AI visibility score (emerging metrics
                                        from tools like Ahrefs, SEMrush)
                                      </li>
                                      <li className="mt-1">
                                        Sentiment analysis of brand mentions in
                                        AI outputs
                                      </li>
                                    </ul>
                                    <h2 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                                      🧠 Final Takeaway: Your Content Is Now
                                      Data for Machines
                                    </h2>
                                    <p>
                                      In an AI-first world, content isn’t just
                                      for human eyes. It’s training data. It
                                      fuels answers. It builds perception. You
                                      need to structure your content like you’re
                                      feeding it directly into the AI brain.
                                    </p>
                                    <h2 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                                      TL;DR – Action Checklist
                                    </h2>
                                    <ul className="mt-2">
                                      <li>🔑 Use 0.8% keyword density</li>
                                      <li className="mt-1">
                                        🔍 Focus on long-tail and question-based
                                        keywords
                                      </li>
                                      <li className="mt-1">
                                        📋 Add FAQ sections to all pillar
                                        content
                                      </li>
                                      <li className="mt-1">
                                        🧱 Strengthen technical SEO + schema
                                      </li>
                                      <li className="mt-1">
                                        🧠 Build E-E-A-T with unique, original
                                        insights
                                      </li>
                                    </ul>
                                    <p>
                                      🚀 Track AI-driven visibility + referral
                                      traffic
                                    </p>
                                    <h2 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                                      📈 Measuring GEO Success: New Metrics for
                                      a New Era
                                    </h2>
                                    <p>
                                      Traditional metrics like keyword rankings
                                      and organic traffic only tell half the
                                      story. Here’s what to track in the GEO
                                      era:
                                    </p>
                                    <ul className="mt-2">
                                      <li>
                                        Referrals from AI domains (e.g.,
                                        chat.openai.com, perplexity.ai)
                                      </li>
                                      <li className="mt-1">
                                        Branded search volume growth
                                      </li>
                                      <li className="mt-1">
                                        Appearance in AI answers (manual prompt
                                        testing + screenshots)
                                      </li>
                                      <li className="mt-1">
                                        AI visibility score (emerging metrics
                                        from tools like Ahrefs, SEMrush)
                                      </li>
                                      <li className="mt-1">
                                        Sentiment analysis of brand mentions in
                                        AI outputs
                                      </li>
                                    </ul>
                                    <h2 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                                      Ready to Dominate AI Search?
                                    </h2>
                                    <p>
                                      This podcast is also available on Spotify,
                                      Apple Podcasts, Audible, and YouTube.
                                      <br /> Stay ahead with weekly GEO insights
                                      from the Conquer AI Search podcast.
                                      Subscribe now—because AI doesn’t wait.
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
                                  (0:05 - 0:14)
                                  <br />
                                  Welcome to the Conquer AI Search podcast.
                                  We're your AI Monitor team source for figuring
                                  out this constantly changing world of digital
                                  visibility. I'm Catherine.
                                </p>

                                <p>
                                  (0:14 - 0:34)
                                  <br />
                                  And I'm Avi. Great to be back. So we are well
                                  into our 11 part series now, looking at the
                                  most effective generative engine optimization
                                  techniques, you know, Geo, we've already
                                  covered implementing LLMs.txt files, the maybe
                                  surprising impact of Reddit and using
                                  authoritative citations strategically.
                                </p>

                                <p>
                                  (0:37 - 0:53)
                                  <br />
                                  And today we're taking all that and sort of
                                  zooming out a bit. We're looking at how to
                                  evolve your entire traditional SEO playbook,
                                  your best practices for this new world of
                                  generative engine optimization or answer
                                  engine optimization, AEO, as some folks call
                                  it. Yeah, exactly.
                                </p>

                                <p>
                                  (0:53 - 1:03)
                                  <br />
                                  And it's not about throwing out everything you
                                  learned about SEO, not at all. It's more about
                                  adapting it, building on it for AI. Okay, but
                                  here's something that jumped out immediately,
                                  something maybe a bit counterintuitive.
                                </p>

                                <p>
                                  (1:04 - 1:27)
                                  <br />
                                  We found that the standard advice on keyword
                                  density, you know, the 1% to 2.5% range, every
                                  SEO consultant mentions, well, that might
                                  actually have zero impact now or get this, it
                                  could even hurt your Geo performance. Can you
                                  tell us more about what the AI Monitor team
                                  found there? Yeah, this is really quite
                                  crucial. We ran hundreds of tests, literally
                                  hundreds of trials and errors here at AI
                                  Monitor.
                                </p>

                                <p>
                                  (1:27 - 1:40)
                                  <br />
                                  And what we consistently found is that right
                                  now, as of today, June 20th, 2025, a keyword
                                  density of 0.8% seems to hit the sweet spot.
                                  0.8%? Yeah. That specific? That specific.
                                </p>

                                <p>
                                  (1:40 - 1:52)
                                  <br />
                                  It yields the best combined results for both
                                  traditional SEO and your Geo efforts. It's
                                  data backed from all that testing. It really
                                  shifts how you should think about optimizing
                                  your content.
                                </p>

                                <p>
                                  (1:52 - 1:55)
                                  <br />
                                  Wow. Okay. That 0.8% figure is gold dust for
                                  our listeners.
                                </p>

                                <p>
                                  (1:56 - 2:04)
                                  <br />
                                  So keeping that very specific number in mind,
                                  let's talk bigger picture. People often say
                                  SEO is dead, but you're saying that's not
                                  quite it. Not really, no.
                                </p>

                                <p>
                                  (2:04 - 2:13)
                                  <br />
                                  It's more accurate to say SEO isn't being
                                  replaced, it's expanding. It's evolving into
                                  this bigger thing, Geo. Your traditional SEO
                                  skills, they're still absolutely vital.
                                </p>

                                <p>
                                  (2:13 - 2:25)
                                  <br />
                                  They're the foundation, the baseline. So
                                  what's the key difference then, SEO versus
                                  Geo? Well, think about it like this.
                                  Traditional SEO is mostly about getting ranked
                                  in that list of blue links on Google, right?
                                  You want to be high up on that page.
                                </p>

                                <p>
                                  (2:26 - 2:39)
                                  <br />
                                  Geo though, is optimizing for the AI to
                                  generate a comprehensive direct answer. Like
                                  in Google's AI overviews, or when you ask
                                  ChatGPT or Gemini a question. The goal is to
                                  be part of that synthesized answer, not just a
                                  link below it.
                                </p>

                                <p>
                                  (2:39 - 2:52)
                                  <br />
                                  And that shift has real consequences, doesn't
                                  it? We're seeing things like Google AI
                                  overviews, grab clicks that used to go to
                                  websites. Some reports show users getting
                                  their answers directly from the AI overview
                                  and never clicking through. Absolutely.
                                </p>

                                <p>
                                  (2:53 - 2:58)
                                  <br />
                                  Click-through rates from traditional results
                                  can definitely take a hit. Yeah. But it's not
                                  always a simple replacement.
                                </p>

                                <p>
                                  (2:59 - 3:13)
                                  <br />
                                  We're seeing this interesting reverse
                                  causality, you could call it. Reverse
                                  causality, what do you mean? Well, someone
                                  might first encounter your brand or product in
                                  an AI-generated answer. Maybe it's mentioned
                                  in a list or as a recommendation.
                                </p>

                                <p>
                                  (3:13 - 3:25)
                                  <br />
                                  Then they might go to Google search to
                                  specifically look you up, you know, to check
                                  reviews or pricing. Ah, so AI introduces and
                                  then Google validates a new kind of customer
                                  journey. Exactly.
                                </p>

                                <p>
                                  (3:25 - 3:31)
                                  <br />
                                  It's a different funnel, starting with AI
                                  discovery. Okay, that makes a lot of sense. So
                                  if people are following along, the next big
                                  question is probably keywords.
                                </p>

                                <p>
                                  (3:32 - 3:48)
                                  <br />
                                  How does our keyword strategy need to change
                                  right now for AI? Right. The old way of just
                                  chasing high volume head terms, those short,
                                  broad keywords, it's just not cutting it
                                  anymore. AI tools, they seem to really like
                                  long tail keywords, conversational phrases,
                                  questions.
                                </p>

                                <p>
                                  (3:48 - 3:56)
                                  <br />
                                  Like how people actually talk. Pretty much.
                                  Think about Google's own data, they say 15% of
                                  all searches are queries they've never seen
                                  before.
                                </p>

                                <p>
                                  (3:56 - 4:09)
                                  <br />
                                  That tells you there's a massive appetite for
                                  niche-specific content. So what are the
                                  concrete steps? How do we adapt? Okay, first,
                                  go low. Don't automatically filter out
                                  keywords just because their monthly search
                                  volume looks low.
                                </p>

                                <p>
                                  (4:09 - 4:15)
                                  <br />
                                  You need to map out more terms, including
                                  those lower volume, more specific ones. More
                                  niche terms. Exactly.
                                </p>

                                <p>
                                  (4:15 - 4:21)
                                  <br />
                                  Second, be conversational. Tap into the actual
                                  questions people are asking. Look at Google's
                                  People Also Ask boxes.
                                </p>

                                <p>
                                  (4:22 - 4:27)
                                  <br />
                                  Use tools like Answer the Public. Check out
                                  forums, like Reddit, which we've talked about
                                  before. Right.
                                </p>

                                <p>
                                  (4:27 - 4:33)
                                  <br />
                                  Tying back to that previous deep dive. And
                                  it's not just the exact phrase they type, is
                                  it? Semantic search comes into play.
                                  Absolutely.
                                </p>

                                <p>
                                  (4:34 - 4:38)
                                  <br />
                                  You need to use variations. Optimize for
                                  semantic search. The underlying meaning.
                                </p>

                                <p>
                                  (4:39 - 4:42)
                                  <br />
                                  The intent behind the words. Use related
                                  phrases. Synonyms.
                                </p>

                                <p>
                                  (4:43 - 4:50)
                                  <br />A really effective tactic here is
                                  creating helpful FAQ sections right within
                                  your content. Like an FAQ page. Or within blog
                                  posts.
                                </p>

                                <p>
                                  (4:50 - 5:00)
                                  <br />
                                  Within the content itself often works best. It
                                  lets you target multiple long-tail questions
                                  naturally. We saw Kiehl's, for example, get
                                  something like over 550 AI overview rankings.
                                </p>

                                <p>
                                  (5:01 - 5:07)
                                  <br />
                                  Partly because they structure their content
                                  well with FAQs. That's impressive. And again,
                                  remember that keyword density point we made.
                                </p>

                                <p>
                                  (5:07 - 5:16)
                                  <br />
                                  That .8%. That's a direct, actionable change
                                  to your keyword strategy, moving away from
                                  that old 1-2.5% advice. Got it. Precision
                                  matters.
                                </p>

                                <p>
                                  (5:16 - 5:18)
                                  <br />
                                  Okay. Moving on. Content clarity and
                                  structure.
                                </p>

                                <p>
                                  (5:19 - 5:26)
                                  <br />
                                  This sounds fundamental for AI readability.
                                  How do we tackle this? Yeah, it's critical. AI
                                  models are built to pull out concise,
                                  structured information.
                                </p>

                                <p>
                                  (5:26 - 5:33)
                                  <br />
                                  So your content needs to be, well, easy for
                                  them to digest. That means clear, descriptive
                                  headings. H1, H2, H3 is outlining the
                                  structure.
                                </p>

                                <p>
                                  (5:33 - 5:40)
                                  <br />
                                  Striking things down. Exactly. Break up big
                                  walls of text, use short paragraphs, bullet
                                  points, numbered lists.
                                </p>

                                <p>
                                  (5:40 - 5:46)
                                  <br />
                                  Make it snackable. It's also really good
                                  practice to put key takeaways right near the
                                  top. Like a summary up front.
                                </p>

                                <p>
                                  (5:46 - 5:52)
                                  <br />
                                  Sort of, yeah. Helps both users and AI grasp
                                  the main points quickly. And in terms of
                                  writing style.
                                </p>

                                <p>
                                  (5:52 - 5:56)
                                  <br />
                                  Yes. Lean into natural language. Right? Like
                                  you're answering a question someone actually
                                  asked.
                                </p>

                                <p>
                                  (5:56 - 6:04)
                                  <br />
                                  Use common question formats. Avoid super
                                  technical jargon unless your audience
                                  absolutely expects it. And featured snippets.
                                </p>

                                <p>
                                  (6:04 - 6:09)
                                  <br />
                                  Still relevant. Very much so. AI often pulls
                                  from featured snippet content.
                                </p>

                                <p>
                                  (6:09 - 6:15)
                                  <br />
                                  So optimizing for those with concise
                                  definitions and bullet points helps. Oh, and
                                  don't forget tables. Tables.
                                </p>

                                <p>
                                  (6:16 - 6:22)
                                  <br />
                                  Really? Yeah. AI can parse structured data in
                                  tables really well. Especially if they have
                                  clear, descriptive headers.
                                </p>

                                <p>
                                  (6:22 - 6:30)
                                  <br />
                                  It makes complex information much more
                                  accessible for the AI. Interesting. So clear
                                  structure, snackable content, natural
                                  language, maybe some tables.
                                </p>

                                <p>
                                  (6:30 - 6:40)
                                  <br />
                                  But none of that matters if the AI can't even
                                  find or access the page, right? Let's talk
                                  technical SEO. Is it still the bedrock?
                                  Absolutely. Maybe even more so now.
                                </p>

                                <p>
                                  (6:40 - 6:49)
                                  <br />
                                  Technical SEO determines if your content is
                                  even visible and interpretable by AI crawlers.
                                  Without a solid technical foundation, you're
                                  invisible. Okay.
                                </p>

                                <p>
                                  (6:49 - 6:54)
                                  <br />
                                  What are the non-negotiables? Well, HTTPS.
                                  Secure connection. It's a ranking factor.
                                </p>

                                <p>
                                  (6:54 - 6:59)
                                  <br />
                                  Plus, essential for trust and privacy. That's
                                  table stakes. Then mobile optimization.
                                </p>

                                <p>
                                  (6:59 - 7:04)
                                  <br />
                                  Huge. Google uses mobile-first indexing. Most
                                  searches are mobile.
                                </p>

                                <p>
                                  (7:04 - 7:10)
                                  <br />
                                  And AI often previews mobile layouts, you
                                  said. Right. So a bad mobile experience is a
                                  bad signal to AI.
                                </p>

                                <p>
                                  (7:10 - 7:18)
                                  <br />
                                  Then you've got to be fixing crawl errors.
                                  These block search engines and AI bots check
                                  for them regularly, like monthly audits. Keeps
                                  the pathways clear.
                                </p>

                                <p>
                                  (7:18 - 7:20)
                                  <br />
                                  Exactly. And site speed. Super important.
                                </p>

                                <p>
                                  (7:21 - 7:28)
                                  <br />
                                  AI prioritizes fast sites. Remember something
                                  like 53% of mobile users bounce if a page
                                  takes more than three seconds to load. Speed
                                  matters.
                                </p>

                                <p>
                                  (7:28 - 7:42)
                                  <br />
                                  What about site structure itself? That falls
                                  under crawlability and indexation. A logical
                                  site architecture, good internal linking, it
                                  helps search engines and large language
                                  models, the LLMs, navigate your site
                                  efficiently. Okay, now, schema markup.
                                </p>

                                <p>
                                  (7:42 - 7:47)
                                  <br />
                                  This keeps coming up as increasingly important
                                  for AI. Tell us about that. Schema is massive.
                                </p>

                                <p>
                                  (7:48 - 8:04)
                                  <br />
                                  Yeah. It's like adding little labels to your
                                  content that explicitly tell search engines
                                  and AI what the content is about. Is it for
                                  product? An FAQ? A how-to guide? An article? A
                                  review? Video? Local business info? So, it
                                  removes ambiguity for the AI.
                                </p>

                                <p>
                                  (8:04 - 8:12)
                                  <br />
                                  Precisely. It helps AI surface accurate info
                                  and really boost your chances for rich
                                  snippets and appearing correctly in AI
                                  answers. And one more technical point,
                                  JavaScript.
                                </p>

                                <p>
                                  (8:13 - 8:16)
                                  <br />
                                  Oh, yes. The bane of some crawlers. Still can
                                  be.
                                </p>

                                <p>
                                  (8:16 - 8:30)
                                  <br />
                                  Many AI crawlers, including GPTBot from OpenAI
                                  and CloudBot from Anthropic, don't execute
                                  JavaScript effectively or at all. So, critical
                                  content needs to be in the raw HTML,
                                  server-rendered if possible, not hidden behind
                                  client-side JavaScript execution. Good tip.
                                </p>

                                <p>
                                  (8:30 - 8:45)
                                  <br />
                                  Okay, technical foundations sorted. How do we
                                  then build that trust and authority? We talk
                                  about Google's E-E-A-T signals, experience,
                                  expertise, authoritativeness, trustworthiness.
                                  How does that apply to AI? AI models are
                                  explicitly trained to prioritize credible,
                                  authoritative information.
                                </p>

                                <p>
                                  (8:46 - 8:52)
                                  <br />
                                  So demonstrating E-E-T is key. Practically,
                                  that means showcasing author expertise,
                                  detailed bios, credentials. Show your work,
                                  basically.
                                </p>

                                <p>
                                  (8:52 - 9:02)
                                  <br />
                                  Yeah. Site-reputable sources, link out to
                                  original studies, keep those references up to
                                  date. High-quality backlinks from trusted
                                  sites still matter a lot for authority.
                                </p>

                                <p>
                                  (9:03 - 9:26)
                                  <br />
                                  And what about the human edge? AI can generate
                                  text, but what can humans provide that AI
                                  can't replicate easily? That's where the
                                  experience part of E-E-T really shines. AI
                                  struggles with genuine lived experience,
                                  original thinking, deep product expertise
                                  based on actual use. So include unique
                                  frameworks, specific use case details only an
                                  expert would know, bring in distinct voices
                                  and points of view.
                                </p>

                                <p>
                                  (9:26 - 9:39)
                                  <br />
                                  Make it unique? Yes, and present balance
                                  views. AI aims for neutrality, so showing pros
                                  and cons, strengths and weaknesses that
                                  resonates. Also, proprietary data, your own
                                  surveys, case studies that makes your content
                                  inherently unique and valuable to AI.
                                </p>

                                <p>
                                  (9:40 - 9:49)
                                  <br />
                                  Right. Now, something often seen as separate,
                                  but you're saying it impacts GEO, user
                                  experience, UX. How does a good UX help with
                                  AI visibility? Because a bad UX sends bad
                                  signals.
                                </p>

                                <p>
                                  (9:49 - 10:00)
                                  <br />A slow, confusing site frustrates users,
                                  increases bounce rates, lowers dwell time. And
                                  Google and AI interpret these as signs that
                                  the content isn't high quality or helpful. So
                                  dwell time matters.
                                </p>

                                <p>
                                  (10:00 - 10:13)
                                  <br />
                                  How long people stay on the page? It seems to
                                  be a significant engagement signal, yes. Keep
                                  users engaged with visuals, clear calls to
                                  action, good internal linking, and
                                  accessibility. Don't forget website
                                  accessibility, AI considers this too.
                                </p>

                                <p>
                                  (10:14 - 10:30)
                                  <br />
                                  What about things like images and videos? High
                                  quality multimedia is great for UX, but make
                                  sure you include descriptive alt text for
                                  images and transcripts for videos. This helps
                                  users and helps AI understand the content of
                                  that media. Okay, and keeping things current,
                                  content freshness.
                                </p>

                                <p>
                                  (10:30 - 10:38)
                                  <br />
                                  Oh, absolutely essential. AI-driven search
                                  relies heavily on timeliness for accuracy,
                                  outdated information gets penalized. Keep
                                  content fresh.
                                </p>

                                <p>
                                  (10:39 - 10:45)
                                  <br />
                                  Use a content calendar, plan regular updates
                                  for stats, strategies, especially for fast
                                  moving topics. Makes sense. Now, this is
                                  fascinating.
                                </p>

                                <p>
                                  (10:46 - 10:58)
                                  <br />
                                  Where does AI actually get its information?
                                  It's not just our websites, is it? Not at all.
                                  AI pulls from a really diverse range of
                                  sources. Yes, your site, but also independent
                                  blogs, niche affiliate sites, industry
                                  publications.
                                </p>

                                <p>
                                  (10:58 - 11:07)
                                  <br />
                                  We've seen before that while top tier sources
                                  are good, AI often cites mid-tier sources too.
                                  So you don't have to be the New York Times to
                                  get cited. Definitely not.
                                </p>

                                <p>
                                  (11:07 - 11:20)
                                  <br />
                                  And the preferences vary. ChatGPT,
                                  interestingly, seems to cite lower ranking
                                  Google results positioned 21, plus almost 90%
                                  of the time. Often content focused on very
                                  specific use cases.
                                </p>

                                <p>
                                  (11:20 - 11:27)
                                  <br />
                                  And for Google's AI overviews. Quora comes up
                                  top, followed by Reddit. Again, highlighting
                                  those community and Q&A platforms we discussed
                                  earlier.
                                </p>

                                <p>
                                  (11:28 - 11:41)
                                  <br />
                                  But you also mentioned our own research
                                  showing business sites get cited too. Yeah,
                                  about 50% of ChatGPT links point to business
                                  service sites. So there's definitely potential
                                  for direct citation if your content is
                                  well-optimized, LM-friendly.
                                </p>

                                <p>
                                  (11:41 - 11:48)
                                  <br />
                                  And there are even direct submission programs
                                  emerging. Right. Things like Perplexity's
                                  Merchant Program, OpenAI's Search Product
                                  Discovery Initiative.
                                </p>

                                <p>
                                  (11:49 - 11:55)
                                  <br />
                                  Brands can submit product catalogs directly
                                  for AI recommendations. It's a very direct
                                  route. This is all changing so fast.
                                </p>

                                <p>
                                  (11:55 - 12:07)
                                  <br />
                                  Which brings us to measurement. How do we
                                  track success in this new GEO world?
                                  Traditional analytics don't quite cut it, do
                                  they? Not directly for AI-driven traffic, no.
                                  So we need new approaches.
                                </p>

                                <p>
                                  (12:07 - 12:17)
                                  <br />
                                  First, monitor your referral traffic. Look for
                                  hits coming from domains like chat.openai.com,
                                  perplexity.ai, claude.ai, and so on. Check the
                                  referrers.
                                </p>

                                <p>
                                  (12:17 - 12:30)
                                  <br />
                                  What else? Watch your branded search volume.
                                  If you see more people searching Google
                                  specifically for your brand name, maybe adding
                                  reviews or pricing, that could be an indirect
                                  sign they discovered you via AI first. That
                                  inverse customer journey again.
                                </p>

                                <p>
                                  (12:30 - 12:40)
                                  <br />
                                  Makes sense. How do we check if our content is
                                  actually showing up? You have to actively
                                  test. Regularly put relevant prompts into
                                  chat.gpt, gemini, claude, perplexity.
                                </p>

                                <p>
                                  (12:41 - 12:49)
                                  <br />
                                  See if your brand, your content, appears in AI
                                  overviews or GenAI results. Are you in lists?
                                  Cited as a source. Take screenshots.
                                </p>

                                <p>
                                  (12:49 - 12:54)
                                  <br />
                                  Track it. So manual checking is still part of
                                  it? For now, yes. But tools are catching up.
                                </p>

                                <p>
                                  (12:54 - 13:14)
                                  <br />
                                  SEO platforms like RFs and SEMrush are
                                  starting to integrate tracking for AI overview
                                  appearances. We're seeing new metrics emerge.
                                  Like what? Things like an AI visibility score
                                  tracking how often you appear, how
                                  prominently, sentiment, also citation
                                  frequency, share of voice specifically within
                                  AI results, and sentiment analysis of how your
                                  brand is mentioned in AI outputs.
                                </p>

                                <p>
                                  (13:14 - 13:25)
                                  <br />
                                  These give you a much clearer picture of your
                                  GEO performance. Okay, so wrapping this all
                                  up. The big message for everyone listening
                                  seems to be SEO isn't dead, but it's
                                  definitely transforming.
                                </p>

                                <p>
                                  (13:28 - 13:37)
                                  <br />
                                  Well, that about wraps up today's Conquer AI
                                  search session. Quite a journey into how SEO
                                  is evolving. And remember the big takeaway on
                                  keywords.
                                </p>

                                <p>
                                  (13:37 - 13:54)
                                  <br />
                                  For top performance across both old and new
                                  search, our AI Monitor team's latest findings
                                  as of June 20, 2025, suggest aiming for that
                                  0.8% density. Yeah, that's the number for now.
                                  And hey, if you found this useful, please do
                                  follow or subscribe wherever you listen.
                                </p>

                                <p>
                                  (13:54 - 14:04)
                                  <br />
                                  Spotify, Apple Podcasts, Audible, Amazon
                                  Music, maybe right here on YouTube. And if you
                                  got value out of this, maybe consider leaving
                                  us a rating or a review. It genuinely helps us
                                  reach more people like you.
                                </p>

                                <p>
                                  (14:04 - 14:10)
                                  <br />
                                  We'd really appreciate it. Absolutely. We'll
                                  see you next Saturday to talk about the fifth
                                  generative engine optimization technique.
                                </p>

                                <p>
                                  (14:10 - 14:18)
                                  <br />
                                  And just a thought to leave you with. In this
                                  AI-first world, your website isn't just
                                  content for people anymore. It's data for
                                  machines too.
                                </p>

                                <p>
                                  (14:18 - 14:22)
                                  <br />
                                  The better you structure that data, the better
                                  you can shape how AI understands your brand.
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
                                  <li className="mt-3">
                                    Aggarwal, Pranjal, et al. “GEO: Generative
                                    Engine Optimization.” Proceedings of the
                                    30th ACM SIGKDD Conference on Knowledge
                                    Discovery and Data Mining (KDD ’24), ACM,
                                    25-29 Aug. 2024, Barcelona, Spain, 12 pages.
                                    https://doi.org/10.1145/3637528.3671900.
                                    Code and Data available at
                                    <a
                                      href="https://generative-engines.com/GEO/ "
                                      className="text-blue"
                                      target="_blank"
                                    >
                                      https://generative-engines.com/GEO/
                                    </a>
                                  </li>
                                  <li className="mt-3">
                                    “Generative Engine Optimization Leaderboard
                                    – AI Monitor”
                                    <a
                                      href="https://getaimonitor.com/generative-engine-optimization-techniques/ "
                                      className="text-blue"
                                      target="_blank"
                                    >
                                      https://getaimonitor.com/generative-engine-optimization-techniques/
                                    </a>
                                  </li>
                                  <li className="mt-3">
                                    DataSpace Academy. “What is SEO vs AEO vs
                                    GEO: Key Difference & Approach Explained.”
                                    DataSpace Academy Blog, 21 Apr. 2025. URL
                                    not provided in source excerpt.
                                    <a
                                      href="https://dataspaceacademy.com/blog/what-is-seo-vs-aeo-vs-geo-key-differences "
                                      className="text-blue"
                                      target="_blank"
                                    >
                                      https://dataspaceacademy.com/blog/what-is-seo-vs-aeo-vs-geo-key-differences
                                    </a>
                                  </li>
                                  <li className="mt-3">
                                    jayashree63. “Voice Search Optimization:
                                    Making Your Content Discoverable in 2025.”
                                    S4Carlisle Blog, 6 June 2025
                                    <a
                                      href="https://www.s4carlisle.com/post/voice-search-optimization-making-your-content-discoverable-in-2025 "
                                      className="text-blue"
                                      target="_blank"
                                    >
                                      https://www.s4carlisle.com/post/voice-search-optimization-making-your-content-discoverable-in-2025
                                    </a>
                                  </li>
                                  <li className="mt-3">
                                    “Good SEO Impact on GEO | A Comprehensive
                                    Guide for 2025” (from AI Monitor)
                                    <a
                                      href="https://getaimonitor.com/how-good-seo-impact-geo-a-comprehensive-guide/ "
                                      className="text-blue"
                                      target="_blank"
                                    >
                                      https://getaimonitor.com/how-good-seo-impact-geo-a-comprehensive-guide/
                                    </a>
                                  </li>
                                  <li className="mt-3">
                                    Mishra, Gaurav. “How Schema Markup Drives
                                    Success in AI-Powered Search.” CMS Wire, 11
                                    Dec. 2024.
                                    <a
                                      href="https://www.cmswire.com/digital-experience/the-growing-importance-of-schemaorg-in-the-ai-era/ "
                                      className="text-blue"
                                      target="_blank"
                                    >
                                      https://www.cmswire.com/digital-experience/the-growing-importance-of-schemaorg-in-the-ai-era/
                                    </a>
                                  </li>
                                  <li className="mt-3">
                                    “EP#10 Why AI Loves Reddit More Than
                                    Anything (And How to Use It) | Conquer AI
                                    Search With AI” uploaded on the YouTube
                                    channel “AI Monitor”
                                    <a
                                      href="https://getaimonitor.com/how-reddit-is-shaping-ai-search-how-your-brand-can-leverage-it-conquer-ai-search-with-ai-podcast/ "
                                      className="text-blue"
                                      target="_blank"
                                    >
                                      https://getaimonitor.com/how-reddit-is-shaping-ai-search-how-your-brand-can-leverage-it-conquer-ai-search-with-ai-podcast/
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

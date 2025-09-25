"use client";
// import Toc from "./Toc";
import RelatedBlogs from "../blogs/RelatedBlogs";
import Image from "next/image";
import Link from "next/link";
import { Gallery, Item } from "react-photoswipe-gallery";
import { useState } from "react";
import Blog1Faqs from "../blogs/faqs/Blog1Faqs";
import GEOCourseCTA from "@/components/common/GeoCTA";

export default function StrategicCitationsTechnique({ blogItem }) {
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
                  Strategic Citations: Technique #3 for Generative Engine
                  Optimization (GEO) Mastery Series | Episode 11 | Conquer AI
                  Search Podcast
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
                    src="https://www.youtube.com/embed/ozEoXxuTjO8?si=xYLQwthK3XSXXOHZ"
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
                            EP#11 AI Citations SECRET: Get Your Content Cited by
                            ChatGPT & Gemini
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
                        src="https://audio.getaimonitor.com/ConquerAISearchWithAI/podcast-episode-11.mp3"
                      ></audio>
                      {/* </figure> */}
                      <hr className="w-100 m-0 d-block mt-4" />
                    </div>
                    <p className="mt-2">Also Available on:</p>
                    <div className="d-none lg:d-block">
                      <div className="hstack gap-4 mt-2 justify-center">
                        <a
                          href="https://open.spotify.com/episode/1UGMWhPzVL19E81EONSVB2?si=LO_p4dM_SRq9BAWfjmOISg"
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
                          href="https://music.amazon.com/podcasts/638df449-1fbd-497d-a145-5315d8541611/episodes/525b6ed5-2cc3-4c19-8e21-5ee9113ae94d/conquer-ai-search-with-ai-ep-11-ai-citations-secret-get-your-content-cited-by-chatgpt-gemini-conquer-ai-search-with-ai"
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
                        <a href="https://podcasts.apple.com/in/podcast/ep-11-ai-citations-secret-get-your-content-cited-by/id1806802986?i=1000712861207">
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
                        <a href="https://youtu.be/ozEoXxuTjO8?si=kOAVMGvq1gkS8Cg_">
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
                        <a href="https://overcast.fm/+ABOivykm--M">
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
                        <a href="https://pca.st/w660ig8m">
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
                        <a href="https://castro.fm/episode/e9U7G7">
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
                          href="https://open.spotify.com/episode/1UGMWhPzVL19E81EONSVB2?si=LUchZwh5TkKcz1Ob8YsJbQ"
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
                          href="https://music.amazon.com/podcasts/638df449-1fbd-497d-a145-5315d8541611/episodes/525b6ed5-2cc3-4c19-8e21-5ee9113ae94d/conquer-ai-search-with-ai-ep-11-ai-citations-secret-get-your-content-cited-by-chatgpt-gemini-conquer-ai-search-with-ai"
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
                        <a href="https://podcasts.apple.com/in/podcast/ep-11-ai-citations-secret-get-your-content-cited-by/id1806802986?i=1000712861207">
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
                        <a href="https://youtu.be/ozEoXxuTjO8?si=kOAVMGvq1gkS8Cg_">
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
                                  🎙️ Conquer AI Search Podcast – Ep. 11
                                </h3>
                                <ol className="fs-5">
                                  <li>
                                    0:05 – 0:20: Introduction & Series Context
                                  </li>
                                  <li>
                                    0:21 – 1:27: GEO Techniques Recap &
                                    Strategic Citations
                                  </li>
                                  <li>
                                    1:28 – 5:10: Why Citations Matter: AI
                                    Visibility & EEAT
                                  </li>
                                  <li>
                                    5:11 – 9:08: Sources & Customer Journey
                                    Insights
                                  </li>
                                  <li>
                                    9:09 – 12:01: AI Preferences & Source
                                    Quality
                                  </li>
                                  <li>
                                    12:02 – 16:28: Power of Quotes & Practical
                                    Implementation
                                  </li>
                                  <li>
                                    16:29 – 19:17: Formatting, Maintenance & Key
                                    Takeaways
                                  </li>
                                  <li>
                                    19:18 – 21:24: Future of Research & Closing
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
                                      Introduction: The New Era of Search
                                    </h2>
                                    <p className="">
                                      AI is no longer just a futuristic idea;
                                      it’s already a part of our everyday lives.
                                      And with it, the way we discover and
                                      consume information is shifting fast. The
                                      old ambition of ranking #1 on Google isn’t
                                      the sure shot to success it used to be.
                                      The rise of "answer engines" like ChatGPT,
                                      Gemini, and Perplexity has created a new
                                      challenge and a new opportunity for
                                      content creators. This is the domain of
                                      <b>
                                        Generative Engine Optimization (GEO).
                                      </b>
                                    </p>
                                    <p className="mt-3">
                                      GEO is a more sophisticated evolution of
                                      SEO. It’s not just about optimizing your
                                      content for human readers and a list of
                                      links; it’s about making your material
                                      valuable, authoritative, and digestible
                                      for the AI models that are now curating
                                      our information. It’s about ensuring your
                                      work becomes a trusted “source” that these
                                      models cite when generating their own,
                                      comprehensive answers.
                                    </p>
                                    <p className="mt-3">
                                      This article, the third in our series on
                                      GEO mastery, delves into a technique that
                                      is both surprisingly traditional and
                                      critically modern: the strategic use of
                                      citations and quotations.
                                    </p>

                                    <h2 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                                      Why Citations Are the Currency of Trust in
                                      AI Search
                                    </h2>
                                    <p>
                                      Think of generative AI as a brilliant,
                                      albeit "geeky," researcher. It doesn't
                                      just parrot information; it synthesizes
                                      it, balancing authority, reputation, and
                                      clarity. The answers it generates are like
                                      mini-research papers, and just like any
                                      good academic work, they rely on a
                                      foundation of trust: <b>citations.</b>
                                    </p>
                                    <p className="mt-3">
                                      The data on this is crystal clear. A
                                      recent analysis of AI responses revealed a
                                      growing trend: AI rewards content that is
                                      properly cited and backed by verifiable
                                      sources.
                                    </p>
                                    <ul className="mt-3">
                                      <li>
                                        <b>Perplexity:</b> Cites an average of
                                        6.6 sources per response.
                                      </li>
                                      <li>
                                        <b>Gemini:</b> Uses around 6.1 sources
                                        on average.
                                      </li>
                                      <li>
                                        <b>ChatGPT:</b> Even in its standard
                                        mode, it cites approximately 2.6
                                        sources.
                                      </li>
                                    </ul>
                                    <p className="mt-3">
                                      This isn't a small detail; it's a massive
                                      signal. It proves that AI is actively
                                      looking for and valuing external
                                      validation. In this new landscape, a
                                      citation is not a courtesy; it’s a direct
                                      signal of credibility. This is how your
                                      content aligns with principles like
                                      Google’s{" "}
                                      <b>
                                        EEAT (Experience, Expertise,
                                        Authoritativeness, and Trustworthiness),
                                      </b>
                                      making it a prime candidate for inclusion
                                      in AI-curated responses.
                                    </p>

                                    <h3 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                                      Understanding the AI's Citation
                                      Preferences
                                    </h3>
                                    <p>
                                      To get cited by AI, you need to understand
                                      where it's looking. The data shows a
                                      powerful and perhaps surprising pattern.
                                    </p>

                                    <h3 className="h5 xl:h4 mt-3 mb-2 xl:mb-3">
                                      1. The Dominance of Earned Media
                                    </h3>

                                    <p>
                                      One of the most critical insights for any
                                      GEO strategy is that earned media content
                                      on third-party sites like news outlets,
                                      independent blogs, and review sites
                                      dominates the citation landscape. AI
                                      models trust external validation more than
                                      a brand's own self-promotion. While your
                                      website content is still essential, the
                                      single biggest opportunity for AI
                                      visibility may lie in creating content so
                                      valuable that it earns mentions on trusted
                                      third-party sites.
                                    </p>
                                    <h3 className="h5 xl:h4 mt-3 mb-2 xl:mb-3">
                                      2. The User Journey Dictates the Source
                                    </h3>

                                    <p>
                                      AI's citation patterns shift as a user
                                      moves through the research process:
                                    </p>
                                    <ul className="mt-2">
                                      <li>
                                        <b>Early Research:</b> At this "top of
                                        the funnel" stage, AI heavily cites
                                        editorial content, such as articles,
                                        guides, and research summaries.
                                      </li>
                                      <li>
                                        <b>Comparison Phase:</b> As users weigh
                                        their options, citations increase from
                                        user-generated content (UGC). Platforms
                                        like Reddit, YouTube reviews, and
                                        community forums become key sources.
                                      </li>
                                      <li>
                                        <b>Decision Stage:</b> When a user is in
                                        the final phase of research, the AI is
                                        more likely to pull information directly
                                        from brand websites and competitor
                                        benchmarks.
                                      </li>
                                    </ul>
                                    <p className="mt-3">
                                      Furthermore, different AI platforms show
                                      unique preferences for UGC:
                                    </p>
                                    <div className="panel mt-2 mb-3 p-2 border rounded-1-5 lg:rounded-2 dark:border-gray-600 dark:bg-tertiary-700 overflowx-auto">
                                      <table className="uc-table uc-table-divider">
                                        <thead className="table-head sticky-top z-1 ">
                                          <tr className="table-row dark:border-white border-gray-900 bg-gray-25 dark:bg-tertiary-800">
                                            <th
                                              className="table-header-cell top pt-0 lg:pt-1"
                                              scope="row"
                                            >
                                              <span className="fw-bold fs-5 lg:fs-4 dark:text-secondary text-underline lg:text-none">
                                                Platform
                                              </span>
                                            </th>
                                            <th
                                              className="table-header-cell pt-8 lg:pt-1"
                                              scope="row"
                                            >
                                              <span className="fw-bold fs-5 lg:fs-4 dark:text-secondary">
                                                Preferred Sources
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
                                                  Perplexity
                                                </span>
                                              </div>
                                            </th>
                                            <td className="pt-4 lg:pt-1">
                                              <span className="dark:text-white">
                                                YouTube, PeerSpot, product
                                                reviews
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
                                                  Gemini
                                                </span>
                                              </div>
                                            </th>
                                            <td className="pt-7 lg:pt-1">
                                              <span className="dark:text-white">
                                                Reddit, Medium, YouTube
                                                discussions
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
                                                  ChatGPT
                                                </span>
                                              </div>
                                            </th>
                                            <td className="pt-7 lg:pt-1">
                                              <span className="dark:text-white">
                                                LinkedIn, G2, Gartner, B2B
                                                review platforms
                                              </span>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </div>
                                    <p className="mt-3">
                                      Understanding these preferences allows you
                                      to strategically place your content where
                                      it's most likely to be discovered and
                                      cited by the platforms your target
                                      audience uses.
                                    </p>
                                    <h2 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                                      The Research-Backed Evidence for Strategic
                                      Citations
                                    </h2>
                                    <p>
                                      A groundbreaking study by researchers from
                                      Princeton University, IIT Delhi, and
                                      Georgia Tech directly proved the power of
                                      citations. Their research, which actually
                                      coined the term GEO, provided the first
                                      major empirical evidence for how on-page
                                      optimizations impact visibility in
                                      generative engines.
                                    </p>
                                    <p className="mt-3">
                                      The key finding? Simply including
                                      <b>
                                        citations, quotations, and statistics
                                      </b>{" "}
                                      from relevant sources{" "}
                                      <b>
                                        boosted content visibility by over 40%
                                      </b>{" "}
                                      in generative engine results. This isn't a
                                      minor tweak; it's a top-performing GEO
                                      differentiator.
                                    </p>
                                    <h3 className="h5 xl:h4 mt-3 mb-2 xl:mb-3">
                                      Four Ways Quotes Supercharge Your GEO
                                      Strategy
                                    </h3>

                                    <p>
                                      Beyond general credibility, the strategic
                                      use of direct quotes provides specific
                                      benefits for AI visibility:
                                    </p>
                                    <ol className="mt=3">
                                      <li>
                                        <b>Establishing Authority:</b> Bringing
                                        in the words of recognized experts or
                                        industry leaders is like getting a seal
                                        of approval from people (and sources)
                                        the AI already trusts. It’s an easy way
                                        to show your content has weight.
                                      </li>
                                      <li className="mt-1">
                                        <b>Signaling Freshness:</b> Quoting from
                                        the latest research, reports, or
                                        commentary sends a clear signal: your
                                        content is current. Since AI models are
                                        trained to prioritize fresh, relevant
                                        information, this gives you an instant
                                        edge.
                                      </li>
                                      <li className="mt-1">
                                        <b>Strengthening Your Arguments: </b>{" "}
                                        The right quote acts like a power boost.
                                        Instead of just saying something, you’re
                                        backing it up with authoritative
                                        evidence. This “expert halo effect”
                                        makes your points harder for both humans
                                        and AI to ignore.
                                      </li>
                                      <li className="mt-1">
                                        <b>Enhancing Originality:</b> only
                                        Quotes are not enough; you need to
                                        connect the dots. By adding your
                                        perspective and analysis to expert
                                        voices, you need to create content that
                                        feels fresh, unique, and harder for AI
                                        to label as generic.
                                      </li>
                                    </ol>

                                    <h3 className="h5 xl:h4 mt-3 mb-2 xl:mb-3">
                                      A Practical Checklist for Your GEO
                                      Strategy
                                    </h3>
                                    <p>
                                      To implement strategic citations and
                                      quotes, follow this practical checklist:
                                    </p>
                                    <div className="panel mt-2 mb-3 p-2 border rounded-1-5 lg:rounded-2 dark:border-gray-600 dark:bg-tertiary-700 overflowx-auto">
                                      <table className="uc-table uc-table-divider">
                                        <thead className="table-head sticky-top z-1 ">
                                          <tr className="table-row dark:border-white border-gray-900 bg-gray-25 dark:bg-tertiary-800">
                                            <th
                                              className="table-header-cell top pt-0 lg:pt-1"
                                              scope="row"
                                            >
                                              <span className="fw-bold fs-5 lg:fs-4 dark:text-secondary text-underline lg:text-none">
                                                Action
                                              </span>
                                            </th>
                                            <th
                                              className="table-header-cell pt-8 lg:pt-1"
                                              scope="row"
                                            >
                                              <span className="fw-bold fs-5 lg:fs-4 dark:text-secondary">
                                                Description
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
                                                  Sourcing
                                                </span>
                                              </div>
                                            </th>
                                            <td className="pt-4 lg:pt-1">
                                              <span className="dark:text-white">
                                                Go for trustworthy, recent
                                                sources, ideally from the last
                                                year or so. Skip anything that
                                                feels biased or low-quality;
                                                your credibility depends on it.
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
                                                  Attribution
                                                </span>
                                              </div>
                                            </th>
                                            <td className="pt-7 lg:pt-1">
                                              <span className="dark:text-white">
                                                Always say who said it, what
                                                they do, and where they’re from.
                                                Like: “Dr. Anja Sharma, AI
                                                ethics researcher at Stanford,
                                                explains…” It makes your content
                                                feel solid and human.
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
                                                  Formatting
                                                </span>
                                              </div>
                                            </th>
                                            <td className="pt-7 lg:pt-1">
                                              <span className="dark:text-white">
                                                Use clear quotation marks for
                                                shorter quotes and block quotes
                                                or italics for longer excerpts.
                                                This helps both humans and AI
                                                models easily parse the content.
                                              </span>
                                            </td>
                                          </tr>{" "}
                                          <tr className="table-row border-gray-900 dark:border-white">
                                            <th
                                              className="top pt-0 lg:pt-1"
                                              scope="row"
                                            >
                                              <div className="hstack gap-1 justify-start">
                                                <span className="fs-5 fw-bold text-dark dark:text-white text-underline lg:text-none">
                                                  Balancing
                                                </span>
                                              </div>
                                            </th>
                                            <td className="pt-7 lg:pt-1">
                                              <span className="dark:text-white">
                                                Your thoughts should dominate,
                                                aim for 80–90% original insight,
                                                with 10–20% quotes supporting
                                                your points. This keeps your
                                                voice front and center.
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
                                                  Updating
                                                </span>
                                              </div>
                                            </th>
                                            <td className="pt-7 lg:pt-1">
                                              <span className="dark:text-white">
                                                Regularly review and refresh
                                                your key content pieces. Swap
                                                out old statistics and quotes
                                                for more recent data to maintain
                                                a signal of relevance.
                                              </span>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </div>
                                    <h2 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                                      Conclusion
                                    </h2>

                                    <p>
                                      Citations are no longer just an academic
                                      requirement; they are a critical trust
                                      signal for AI. In this new information
                                      landscape, your content's ability to be
                                      cited by generative engines is a key
                                      determinant of its visibility and
                                      influence. By focusing on earned media,
                                      understanding AI’s citation patterns, and
                                      meticulously crafting your content with
                                      strategic, verifiable citations, you are
                                      actively building a credible evidence
                                      trail for AI to follow, verify, and
                                      ultimately, use.
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
                                  {" "}
                                  (0:05 - 0:06) <br /> Hello, everyone.{" "}
                                </p>
                                <p>
                                  {" "}
                                  (0:06 - 0:12) <br /> Welcome to the Conquer AI
                                  Search Podcast, your ultimate guide to
                                  mastering the AI-driven search landscape.{" "}
                                </p>
                                <p>
                                  {" "}
                                  (0:13 - 0:16) <br /> This podcast is brought
                                  to you by the AI Monitor Team.{" "}
                                </p>
                                <p>
                                  {" "}
                                  (0:16 - 0:20) <br /> I'm your host, Avi, and
                                  I'm excited to have Katherine joining me
                                  today.{" "}
                                </p>
                                <p>
                                  {" "}
                                  (0:20 - 0:26) <br /> Great to be back.{" "}
                                </p>
                                <p>
                                  {" "}
                                  (0:26 - 0:36) <br /> This is our deep dive
                                  series, where we're uncovering the top 11 most
                                  effective generative engine optimization
                                  techniques, GEO, as we call it.{" "}
                                </p>
                                <p>
                                  {" "}
                                  (0:36 - 0:43) <br /> It's really all about
                                  making sure your valuable content, the stuff
                                  you work hard on, doesn't get lost.{" "}
                                </p>
                                <p>
                                  {" "}
                                  (0:43 - 0:52) <br /> You want it seen, you
                                  want it used in this rapidly evolving
                                  AI-driven landscape. And we are building this
                                  picture piece by piece, aren't we?{" "}
                                </p>
                                <p>
                                  {" "}
                                  (0:52 - 0:56) <br /> In our previous deep
                                  dives, we've already tackled a couple of
                                  pretty foundational techniques.{" "}
                                </p>
                                <p>
                                  {" "}
                                  (0:56 - 1:03) <br /> We explored implementing
                                  things like the LLMs.txt file, you can think
                                  of it almost like a robots.txt file, but
                                  specifically for AI models.{" "}
                                </p>
                                <p>
                                  {" "}
                                  (1:07 - 1:14) <br /> And we also looked at
                                  leveraging the unique dynamics of platforms
                                  like Reddit and other user-generated content
                                  spots.{" "}
                                </p>
                                <p>
                                  {" "}
                                  (1:14 - 1:20) <br /> Because the data shows AI
                                  is looking there.{" "}
                                </p>
                                <p>
                                  {" "}
                                  (1:20 - 1:23) <br /> They're looking beyond
                                  just the traditional company website.{" "}
                                </p>
                                <p>
                                  {" "}
                                  (1:23 - 1:33) <br /> And so today, we're
                                  diving into the third technique on our list.
                                  And this one might sound surprisingly
                                  traditional, kind of basic even. We're talking
                                  about using credible citations within your own
                                  content, but doing it strategically.{" "}
                                </p>
                                <p>
                                  {" "}
                                  (1:40 - 1:48) <br /> That seems to be a really
                                  powerful way to earn trust and boost your
                                  visibility, specifically with generative AI.{" "}
                                </p>
                                <p>
                                  {" "}
                                  (1:48 - 2:12) <br /> And our mission for this
                                  deep dive is to get to the heart of why. Why
                                  do these AI models place such a high value on
                                  citations? And maybe more importantly, how you
                                  can leverage that understanding. We want to
                                  show you how to strategically weave citations
                                  into your content to significantly increase
                                  the chances of your material being flagged as
                                  authoritative and actually cited by the AI
                                  when it generates those answers.{" "}
                                </p>
                                <p>
                                  {" "}
                                  (2:15 - 2:21) <br /> Because if the AI is
                                  building answers, kind of like building a
                                  wall, you absolutely want your content to be
                                  one of the trusted bricks it uses.{" "}
                                </p>
                                <p>
                                  {" "}
                                  (2:22 - 2:29) <br /> So let's dig into why
                                  citation is something that feels like it
                                  belongs in, I don't know, academic papers or
                                  textbooks. Why are they suddenly so critical
                                  in this age of AI?{" "}
                                </p>
                                <p>
                                  {" "}
                                  (2:32 - 2:42) <br /> Generative AI isn't just
                                  pointing you to a page link. It's actually
                                  creating something new by synthesizing
                                  information it finds out there. It's almost
                                  like it's writing a mini research paper, but
                                  on the fly, isn't it?{" "}
                                </p>
                                <p>
                                  {" "}
                                  (2:46 - 2:53) <br /> And just like any good
                                  research paper, it needs to back up its
                                  claims. It needs references.{" "}
                                </p>
                                <p>
                                  {" "}
                                  (2:55 - 3:08) <br /> There was this
                                  fascinating recent analysis. It looked at
                                  something like 40,000 responses and a quarter
                                  of a million citations pulled from the big
                                  players, Perplexity, Gemini, ChatGPT.{" "}
                                </p>
                                <p>
                                  {" "}
                                  (3:09 - 3:23) <br /> The data is just crystal
                                  clear. These platforms are citing multiple
                                  sources per response on average. Perplexity,
                                  for example, cites about 6.61 sources per
                                  response, Gemini about 6.1, and ChatGPT around
                                  2.6.{" "}
                                </p>
                                <p>
                                  {" "}
                                  (3:34 - 4:01) <br /> That right there feels
                                  like a huge opportunity. It's undeniable proof
                                  that AI is actively looking for and citing
                                  sources. This is where generative engine
                                  optimization really shows its difference from
                                  traditional SEO. GEO is about making your
                                  content so trustworthy, so digestible, that
                                  the AI itself weaves it into the answers it
                                  creates.{" "}
                                </p>
                                <p>
                                  {" "}
                                  (4:12 - 4:18) <br /> So it's kind of like
                                  giving your content a verifiable stamp of
                                  approval, like a professional resume, but with
                                  solid references the AI can actually check.{" "}
                                </p>
                                <p>
                                  {" "}
                                  (4:22 - 4:45) <br /> And this ties directly
                                  into frameworks we talk about, like Google's
                                  EEAT — expertise, experience,
                                  authoritativeness, and trustworthiness. When
                                  you cite reputable sources within your
                                  content, you're signaling to both human
                                  readers and AI algorithms that your
                                  information isn't just random thoughts. It's
                                  grounded in credible data, expert views,
                                  established facts.{" "}
                                </p>
                                <p>
                                  {" "}
                                  (4:59 - 5:10) <br /> As one source put it,
                                  citing reputable sources acts like a reference
                                  on a resume for your content. It significantly
                                  strengthens your credibility, both for users
                                  and for the algorithms.{" "}
                                </p>
                                <p>
                                  {" "}
                                  (5:12 - 5:29) <br /> It's not just about
                                  signaling trust to the AI. Linking out to
                                  high-quality relevant sites helps traditional
                                  search engines figure out where your content
                                  fits in the grand scheme of things. It shows
                                  your content is part of a broader ecosystem of
                                  knowledge.{" "}
                                </p>
                                <p>
                                  {" "}
                                  (5:34 - 5:51) <br /> Plus, it's better for the
                                  user experience. If I'm reading something and
                                  I see a link to a source I recognize, it
                                  builds my confidence and lets me dig deeper.
                                  That engagement itself signals value, which
                                  search engines notice.{" "}
                                </p>
                                <p>
                                  {" "}
                                  (6:02 - 6:16) <br /> Properly sourced content
                                  signals reliability to algorithms. That
                                  increases the likelihood it gets pulled into
                                  answer boxes or enhanced displays — premium
                                  visibility even without a top traditional
                                  rank.{" "}
                                </p>
                                <p>
                                  {" "}
                                  (6:30 - 7:15) <br /> Where is the AI actually
                                  finding these sources it cites? The analysis
                                  of 40,000 responses and 250,000 citations
                                  showed that earned content — third-party
                                  sites, affiliate blogs, news articles, review
                                  sites — represents the largest percentage of
                                  citations across AI platforms. Your own domain
                                  does get cited, especially later in the
                                  customer journey, but earned media dominates
                                  overall.{" "}
                                </p>
                                <p>
                                  {" "}
                                  (7:27 - 8:01) <br /> If you're only optimizing
                                  your own site, you're missing the biggest
                                  opportunity. You need genuinely valuable
                                  content that other reputable sites will
                                  reference — because AI heavily cites them.{" "}
                                </p>
                                <p>
                                  {" "}
                                  (8:06 - 8:52) <br /> The types of sources AI
                                  cites shift along the customer journey.
                                  Early-stage = editorial content like articles
                                  and guides. Mid-stage = user-generated content
                                  from reviews, Reddit, forums. Later stage =
                                  brand websites and competitor pages. Different
                                  AIs also favor different UGC platforms:
                                  Perplexity leans to YouTube and PeerSpot,
                                  Gemini toward Medium, Reddit, YouTube, and
                                  ChatGPT toward LinkedIn, G2, Gartner Peer
                                  Reviews.{" "}
                                </p>
                                <p>
                                  {" "}
                                  (9:15 - 10:06) <br /> In final
                                  decision-making, AI cites brand websites and
                                  direct comparisons. High-quality sources like
                                  academic papers and major news outlets are
                                  preferred (~31.5%), but mid-tier sources
                                  (~26.3%) are also frequently cited. This shows
                                  that independent blogs, niche affiliate sites,
                                  and industry publications can all get cited.{" "}
                                </p>
                                <p>
                                  {" "}
                                  (10:26 - 11:03) <br /> Academic research from
                                  Princeton and Georgia Tech provided the first
                                  empirical evidence of how on-page
                                  optimizations impact GEO. They tested
                                  citations and quotations, finding they boosted
                                  source visibility by over 40%.{" "}
                                </p>
                                <p>
                                  {" "}
                                  (12:01 - 13:15) <br /> Quotes help GEO in four
                                  ways: 1) Boost authority and trust through
                                  expert voices, 2) Signal freshness and trend
                                  relevance, 3) Strengthen claims with concise
                                  evidence, and 4) Reduce AI/plagiarism risks
                                  when paired with unique analysis.{" "}
                                </p>
                                <p>
                                  {" "}
                                  (15:05 - 16:23) <br /> To implement strategic
                                  citations: 1) Prioritize credible and recent
                                  sources, 2) Attribute properly with names and
                                  credentials, 3) Format clearly with quotes or
                                  block quotes, 4) Keep balance (10–20% of
                                  content), and 5) Regularly update to maintain
                                  freshness.{" "}
                                </p>
                                <p>
                                  {" "}
                                  (18:28 - 19:17) <br /> By citing and quoting
                                  strategically, you signal authority,
                                  trustworthiness, and relevance to AI models.
                                  That makes your content a more likely
                                  candidate for being cited in AI-generated
                                  responses.{" "}
                                </p>
                                <p>
                                  {" "}
                                  (20:15 - 20:48) <br /> As AI becomes
                                  increasingly reliant on citations, what does
                                  this mean for the perceived value of original
                                  human research and unique insights? How can
                                  creators stand out in a landscape dominated by
                                  AI synthesis?{" "}
                                </p>
                                <p>
                                  {" "}
                                  (21:03 - 21:24) <br /> Thank you for joining
                                  us. For GEO services to help your B2B SaaS
                                  company enhance AI visibility, visit the AI
                                  Monitor website. Join us next time as we
                                  explore the fourth technique in mastering GEO.{" "}
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
                                  <li className="mt-3">
                                    Bio AI Software Engineer. (n.d.). How to be
                                    cited by ChatGPT, Gemini, or Perplexity.
                                    Dev.to.
                                    <a
                                      href="https://dev.to/bio-ai-software-engineer/how-to-be-cited-by-chatgpt-gemini-or-perplexity-1e25"
                                      className="text-blue"
                                      target="_blank"
                                    >
                                      https://dev.to/bio-ai-software-engineer/how-to-be-cited-by-chatgpt-gemini-or-perplexity-1e25
                                    </a>
                                  </li>

                                  <li className="mt-3">
                                    WPBeginner. (n.d.). How to get your
                                    WordPress content cited by AI tools.
                                    <a
                                      href="https://www.wpbeginner.com/beginners-guide/how-to-get-your-wordpress-content-cited-by-ai-tools/"
                                      className="text-blue"
                                      target="_blank"
                                    >
                                      https://www.wpbeginner.com/beginners-guide/how-to-get-your-wordpress-content-cited-by-ai-tools/
                                    </a>
                                  </li>
                                  <li className="mt-3">
                                    Omnius. (n.d.). How to get cited by AI.
                                    <a
                                      href="https://www.omnius.so/blog/how-to-get-cited-by-ai"
                                      className="text-blue"
                                      target="_blank"
                                    >
                                      https://www.omnius.so/blog/how-to-get-cited-by-ai
                                    </a>
                                  </li>
                                  <li className="mt-3">
                                    Segment SEO. (n.d.). How to get cited by AI:
                                    The complete B2B SaaS guide.
                                    <a
                                      href="https://www.segmentseo.com/blog/how-to-get-cited-by-ai-the-complete-b2b-saas-guide"
                                      className="text-blue"
                                      target="_blank"
                                    >
                                      https://www.segmentseo.com/blog/how-to-get-cited-by-ai-the-complete-b2b-saas-guide
                                    </a>
                                  </li>
                                  <li className="mt-3">
                                    University of Florida Libraries. (n.d.). FAQ
                                    on generative AI citations.
                                    <a
                                      href="https://answers.businesslibrary.uflib.ufl.edu/genai/faq/413612"
                                      className="text-blue"
                                      target="_blank"
                                    >
                                      https://answers.businesslibrary.uflib.ufl.edu/genai/faq/413612
                                    </a>
                                  </li>
                                  <li className="mt-3">
                                    BlueText. (n.d.). Answer Engine Optimization
                                    (AEO) for B2B SaaS: How to stay competitive
                                    in the AI-driven marketplace.
                                    <a
                                      href="https://bluetext.com/blog/answer-engine-optimization-aeo-for-b2b-saas-how-to-stay-competitive-in-the-ai-driven-marketplace/"
                                      className="text-blue"
                                      target="_blank"
                                    >
                                      https://bluetext.com/blog/answer-engine-optimization-aeo-for-b2b-saas-how-to-stay-competitive-in-the-ai-driven-marketplace/
                                    </a>
                                  </li>
                                  <li className="mt-3">
                                    Arxiv.org. (2023). [PDF] Generative AI
                                    citation strategies.
                                    <a
                                      href="https://arxiv.org/pdf/2311.09735"
                                      className="text-blue"
                                      target="_blank"
                                    >
                                      https://arxiv.org/pdf/2311.09735
                                    </a>
                                  </li>
                                  <li className="mt-3">
                                    Evolve IQ Newsletter. (n.d.). B2B guide to
                                    GEO.
                                    <a
                                      href="https://newsletter.evolve-iq.com/p/b2b-guide-to-geo"
                                      className="text-blue"
                                      target="_blank"
                                    >
                                      https://newsletter.evolve-iq.com/p/b2b-guide-to-geo
                                    </a>
                                  </li>
                                  <li className="mt-3">
                                    Terakeet. (n.d.). Content strategy for
                                    Generative Engine Optimization (GEO).
                                    <a
                                      href="https://terakeet.com/blog/content-strategy-for-generative-engine-optimization-geo/"
                                      className="text-blue"
                                      target="_blank"
                                    >
                                      https://terakeet.com/blog/content-strategy-for-generative-engine-optimization-geo/
                                    </a>
                                  </li>
                                  <li className="mt-3">
                                    Wikipedia. (n.d.). Artificial intelligence
                                    optimization.
                                    <a
                                      href="https://en.wikipedia.org/wiki/Artificial_intelligence_optimization
"
                                      className="text-blue"
                                      target="_blank"
                                    >
                                      https://en.wikipedia.org/wiki/Artificial_intelligence_optimization
                                    </a>
                                  </li>
                                  <li className="mt-3">
                                    Generative Engines. (n.d.). GEO (Generative
                                    Engine Optimization).
                                    <a
                                      href="https://generative-engines.com/GEO/
"
                                      className="text-blue"
                                      target="_blank"
                                    >
                                      https://generative-engines.com/GEO/
                                    </a>
                                  </li>
                                  <li className="mt-3">
                                    ACM Digital Library. (2023). DOI:
                                    10.1145/3637528.3671900.
                                    <a
                                      href="https://doi.org/10.1145/3637528.3671900
"
                                      className="text-blue"
                                      target="_blank"
                                    >
                                      https://doi.org/10.1145/3637528.3671900
                                    </a>
                                  </li>
                                  <li className="mt-3">
                                    Search Engine Land. (n.d.). How to get cited
                                    by AI: SEO insights from 8,000 AI citations.
                                    <a
                                      href="https://searchengineland.com/how-to-get-cited-by-ai-seo-insights-from-8000-ai-citations-455284
"
                                      className="text-blue"
                                      target="_blank"
                                    >
                                      https://searchengineland.com/how-to-get-cited-by-ai-seo-insights-from-8000-ai-citations-455284
                                    </a>
                                  </li>
                                  <li className="mt-3">
                                    PR Agency One. (2025). AI optimisation
                                    report.
                                    <a
                                      href="https://www.pragencyone.co.uk/wp-content/uploads/2025/08/AI-optimisation-paper-report-PR-Agency-One.pdf
"
                                      className="text-blue"
                                      target="_blank"
                                    >
                                      https://www.pragencyone.co.uk/wp-content/uploads/2025/08/AI-optimisation-paper-report-PR-Agency-One.pdf
                                    </a>
                                  </li>
                                  <li className="mt-3">
                                    Forbes. (2025, September 12). PR is your
                                    megaphone: The visibility imperative for
                                    AI-era brands.
                                    <a
                                      href="https://forbes.com/councils/forbesagencycouncil/2025/09/12/pr-is-your-megaphone-the-visibility-imperative-for-ai-era-brands/
"
                                      className="text-blue"
                                      target="_blank"
                                    >
                                      https://forbes.com/councils/forbesagencycouncil/2025/09/12/pr-is-your-megaphone-the-visibility-imperative-for-ai-era-brands/
                                    </a>
                                  </li>
                                  <li className="mt-3">
                                    Wikipedia. (n.d.). Retrieval-augmented
                                    generation.
                                    <a
                                      href="https://en.wikipedia.org/wiki/Retrieval-augmented_generation
"
                                      className="text-blue"
                                      target="_blank"
                                    >
                                      https://en.wikipedia.org/wiki/Retrieval-augmented_generation
                                    </a>
                                  </li>
                                  <li className="mt-3">
                                    Jagran Josh. (n.d.). Differences and
                                    similarities between SEO and GEO.
                                    <a
                                      href="https://www.jagranjosh.com/general-knowledge/differences-and-similarities-between-seo-and-geo-
"
                                      className="text-blue"
                                      target="_blank"
                                    >
                                      https://www.jagranjosh.com/general-knowledge/differences-and-similarities-between-seo-and-geo-
                                    </a>
                                  </li>
                                  <li className="mt-3">
                                    Ahrefs. (n.d.). SEO vs GEO.
                                    <a
                                      href="https://ahrefs.com/blog/seo-vs-geo/1820002698-1
"
                                      className="text-blue"
                                      target="_blank"
                                    >
                                      https://ahrefs.com/blog/seo-vs-geo/1820002698-1
                                    </a>
                                  </li>
                                  <li className="mt-3">
                                    AI Monitor. (n.d.). Strategic citations
                                    technique #3 for Generative Engine
                                    Optimization (GEO) — Mastery Series Episode
                                    11.
                                    <a
                                      href="https://ahrefs.com/blog/seo-vs-geo/1820002698-1
"
                                      className="text-blue"
                                      target="_blank"
                                    >
                                      https://ahrefs.com/blog/seo-vs-geo/1820002698-1
                                    </a>
                                  </li>
                                  <li className="mt-3">
                                    GoVisible.ai. (n.d.). The best Generative
                                    Engine Optimization (GEO) tools.
                                    <a
                                      href="https://govisible.ai/blog/the-best-generative-engine-optimization-geo-tools/
"
                                      className="text-blue"
                                      target="_blank"
                                    >
                                      https://govisible.ai/blog/the-best-generative-engine-optimization-geo-tools/
                                    </a>
                                  </li>
                                  <li className="mt-3">
                                    Xfunnel.ai. (n.d.). What sources do AI
                                    search engines choose?
                                    <a
                                      href="https://www.xfunnel.ai/blog/what-sources-do-ai-search-engines-choose
"
                                      className="text-blue"
                                      target="_blank"
                                    >
                                      https://www.xfunnel.ai/blog/what-sources-do-ai-search-engines-choose
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

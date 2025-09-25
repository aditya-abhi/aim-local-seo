"use client";
// import Toc from "./Toc";
import RelatedBlogs from "../blogs/RelatedBlogs";
import Image from "next/image";
import Link from "next/link";
import { Gallery, Item } from "react-photoswipe-gallery";
import { useState } from "react";
import Blog1Faqs from "../blogs/faqs/Blog1Faqs";
import GEOCourseCTA from "@/components/common/GeoCTA";

export default function EntityOptimization({ blogItem }) {
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
              <span className="opacity-50">
                Entity Optimization: The 2025 SEO Power Move Every Brand Can’t
                Afford to Miss
              </span>
            </li>
          </ul>
        </div>
      </div>
      <article className="post type-post single-post pb-4 ">
        <div className="container max-w-xl">
          <div className="post-header uc-dark">
            <div className="panel vstack gap-4 md:gap-6 xl:gap-9 text-center">
              <div className="panel vstack items-center max-w-400px sm:max-w-500px xl:max-w-md mx-auto gap-2 md:gap-3">
                <h1 className="h4 sm:h3 xl:h1 mt-4 lg:mt-6">
                  Entity Optimization: The 2025 SEO Power Move Every Brand Can’t
                  Afford to Miss
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
                    src="https://www.youtube.com/embed/VTxt5PV1n9I?si=Tb2N7kc6tXT71c_5"
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
                            EP#18 Generative Engine Optimization Podcast |
                            Entity Optimization: The Secret Weapon for AI Search
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
                        src="https://audio.getaimonitor.com/ConquerAISearchWithAI/ep-18-podcast.mp3"
                      ></audio>
                      {/* </figure> */}
                      <hr className="w-100 m-0 d-block mt-4" />
                    </div>
                    <p className="mt-2">Also Available on:</p>
                    <div className="d-none lg:d-block">
                      {/* <div className="row child-cols-3 sm:child-cols-6 xl:child-cols-3 col-match g-2 justify-between hstack mt-2"> */}
                      <div className="hstack gap-4 mt-2 justify-center">
                        <a
                          href="https://open.spotify.com/episode/1XC7JiRR5WGJ9Xt9dB9GwP?si=-apJMqF3SzizDY8ydtD1oA"
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
                          href="https://music.amazon.com/podcasts/638df449-1fbd-497d-a145-5315d8541611/episodes/bc52a889-8fc4-4731-b056-6c6c702219b2/conquer-ai-search-with-ai-ep-18-generative-engine-optimization-podcast-entity-optimization-the-secret-weapon-for-ai-search"
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
                        <a href="https://podcasts.apple.com/in/podcast/ep-18-generative-engine-optimization-podcast-entity/id1806802986?i=1000720304897">
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
                        <a href="https://youtu.be/VTxt5PV1n9I?si=AajO4I6VEC7GinAp">
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
                        <a href="https://overcast.fm/+ABOivyX7XMQ">
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
                        <a href="https://pca.st/k643rfi0">
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
                        <a href="https://castro.fm/episode/OQhEQG">
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
                          href="https://open.spotify.com/episode/1XC7JiRR5WGJ9Xt9dB9GwP?si=-apJMqF3SzizDY8ydtD1oA"
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
                          href="https://music.amazon.com/podcasts/638df449-1fbd-497d-a145-5315d8541611/episodes/bc52a889-8fc4-4731-b056-6c6c702219b2/conquer-ai-search-with-ai-ep-18-generative-engine-optimization-podcast-entity-optimization-the-secret-weapon-for-ai-search"
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
                        <a href="https://podcasts.apple.com/in/podcast/ep-18-generative-engine-optimization-podcast-entity/id1806802986?i=1000720304897">
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
                        <a href="https://youtu.be/VTxt5PV1n9I?si=AajO4I6VEC7GinAp">
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
                                  <li>Intro & Series Recap (0:05)</li>
                                  <li>What is Entity Optimization? (1:03)</li>
                                  <li>
                                    Evolution of Entity-Based Search (2:23)
                                  </li>
                                  <li>
                                    Why Entities Matter in AI Search (2:58)
                                  </li>
                                  <li>Knowledge Graphs & AEO (3:37)</li>
                                  <li>How AI Recognizes Entities (4:47)</li>
                                  <li>Key Strategies (5:55)</li>
                                  <li>Case Studies (6:44)</li>
                                  <li>Measuring Success (9:34)</li>
                                  <li>Future of Entity SEO (10:43)</li>
                                  <li>Closing & Next Episode (11:42)</li>
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
                                    <p>Search is changing, again.</p>
                                    <p className="mt-3">
                                      If you’ve been in digital marketing for a
                                      while, you’ve probably survived Google
                                      updates, mobile-first indexing, and the
                                      rise of voice search. But what’s happening
                                      now with AI-powered search makes all of
                                      that feel small by comparison.
                                    </p>
                                    <p className="mt-3">
                                      Platforms like{" "}
                                      <strong>
                                        Google AI Overview, ChatGPT, and
                                        Perplexity AI
                                      </strong>{" "}
                                      don’t just look for matching words
                                      anymore. They’re looking for meaning.
                                      They’re looking for{" "}
                                      <strong>entities.</strong>
                                    </p>
                                    <p className="mt-3">
                                      This isn’t some trendy buzzword. It’s the
                                      backbone of how search engines decide what
                                      to show. And if you’re not optimizing for
                                      entities, you’re already behind.
                                    </p>
                                    <h2 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                                      First things, what’s an entity?
                                    </h2>
                                    <p className="">
                                      Google defines an entity as something
                                      singular, unique, and well-defined. It
                                      could be:
                                    </p>
                                    <ul>
                                      <li className="mt-2">
                                        A person (Marie Curie)
                                      </li>
                                      <li className="mt-2">
                                        A brand (Apple Inc.)
                                      </li>
                                      <li className="mt-2">
                                        A concept (Machine Learning){" "}
                                      </li>
                                      <li className="mt-2">
                                        An event (CES 2025)
                                      </li>
                                      <li className="mt-2">
                                        Even a date, place, or color
                                      </li>
                                    </ul>
                                    <p className="mt-3">
                                      The difference between keywords?
                                    </p>
                                    <ul>
                                      <li className="mt-2">
                                        <strong>Keyword =</strong> what someone
                                        types into a search
                                      </li>
                                      <li className="mt-2">
                                        <strong>Entity = </strong> the actual
                                        thing that the keyword refers to
                                      </li>
                                    </ul>
                                    <p className="mt-3">
                                      <strong>Example:</strong>
                                      <br />
                                      If I search for Apple, Google needs to
                                      know if I mean the fruit or the company.
                                      Mention “iPhone” and “Tim Cook,” and
                                      there’s no confusion — it’s Apple Inc.
                                    </p>
                                    <h2 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                                      Why this matters in 2025
                                    </h2>
                                    <p>
                                      Over the past decade, Google has been
                                      moving toward semantic search —
                                      understanding meaning, not just matching
                                      text.
                                    </p>
                                    <ul>
                                      <li className="mt-2">
                                        <strong>2013 — Hummingbird:</strong>{" "}
                                        Started understanding full questions,
                                        not just keywords.
                                      </li>
                                      <li className="mt-2">
                                        <strong>2015 — RankBrain:</strong> AI
                                        figured out relationships between
                                        concepts.
                                      </li>
                                      <li className="mt-2">
                                        <strong>2019 — BERT:</strong> Got better
                                        at context and nuance.
                                      </li>
                                    </ul>
                                    <p className="mt-3">
                                      Fast forward to today, and AI search
                                      engines connect billions of entities
                                      through{" "}
                                      <strong>massive knowledge graphs</strong>.
                                      If your brand isn’t mapped in these
                                      networks, you’re invisible.
                                    </p>
                                    <h2 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                                      How search engines figure out entities in
                                      your content
                                    </h2>
                                    <p>
                                      When you publish something, AI breaks it
                                      down like this:
                                    </p>
                                    <ol>
                                      <li className="mt-2">
                                        <strong>
                                          Named Entity Recognition (NER){" "}
                                        </strong>{" "}
                                        — Spots names and concepts (“Amazon” —
                                        is it a company or a rainforest?).
                                      </li>
                                      <li className="mt-2">
                                        <strong>Entity Linking</strong> —
                                        Matches them to official databases like
                                        Wikidata.
                                      </li>
                                      <li className="mt-2">
                                        <strong>Context Analysis</strong> — —
                                        Looks at surrounding words to figure out
                                        meaning (“bank” — financial institution
                                        or riverbank?).
                                      </li>
                                    </ol>
                                    <p className="mt-3">
                                      If you’re vague or inconsistent, AI might
                                      misunderstand or skip your content
                                      entirely.
                                    </p>
                                    <h2 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                                      7 ways to get entity optimization right
                                    </h2>
                                    <h3 className="h5 xl:h4 mt-4 mb-2 xl:mb-3">
                                      1. Know your core entities
                                    </h3>
                                    <p>
                                      Write down the main people, products,
                                      services, and concepts tied to your brand.
                                      Check Google Knowledge Panels, Wikipedia,
                                      and forums to see how they’re currently
                                      presented.{" "}
                                    </p>
                                    <h3 className="h5 xl:h4 mt-4 mb-2 xl:mb-3">
                                      2. Build topic clusters
                                    </h3>
                                    <p>
                                      For each key entity, have one pillar page
                                      supported by related articles. This shows
                                      depth and authority.
                                      <br />
                                      Example: Windows Report boosted organic
                                      traffic by{" "}
                                      <strong>61% in 8 months</strong> with this
                                      approach.
                                    </p>
                                    <h3 className="h5 xl:h4 mt-4 mb-2 xl:mb-3">
                                      3. Use schema markup
                                    </h3>
                                    <p>
                                      Schema acts like a label for your content.
                                      <br />
                                      Mark up pages with types like{" "}
                                      <span className="text-green">
                                        Organization, Product,
                                      </span>{" "}
                                      or{" "}
                                      <span className="text-green">Event</span>{" "}
                                      so AI knows exactly what you mean. Bonus:
                                      It can help you win rich snippets.
                                    </p>
                                    <h3 className="h5 xl:h4 mt-4 mb-2 xl:mb-3">
                                      4. Go deep — don’t just name-drop
                                    </h3>
                                    <p>
                                      If you mention an entity, explain it. Why
                                      is it important? How does it connect to
                                      other ideas? <br />
                                      This builds <strong>E-E-A-T</strong>{" "}
                                      (Experience, Expertise, Authoritativeness,
                                      Trustworthiness).
                                    </p>
                                    <h3 className="h5 xl:h4 mt-4 mb-2 xl:mb-3">
                                      5. Link related pages
                                    </h3>
                                    <p>
                                      Internal links help AI understand how your
                                      topics connect.
                                      <br />
                                      If you write about “ChatGPT,” link to
                                      posts on “AI prompts” or “Generative
                                      Search.”
                                    </p>
                                    <h3 className="h5 xl:h4 mt-4 mb-2 xl:mb-3">
                                      6. Stay consistent across platforms
                                    </h3>
                                    <p>
                                      Make sure your{" "}
                                      <strong>
                                        Name, Address, and Phone (NAP)
                                      </strong>{" "}
                                      are identical on Google Business, social
                                      media, and directories. It’s a small thing
                                      that builds trust.
                                    </p>
                                    <h3 className="h5 xl:h4 mt-4 mb-2 xl:mb-3">
                                      7. Keep it fresh
                                    </h3>
                                    <p>
                                      Entities change. Product launch, facts
                                      update, and vents pass. If your info’s
                                      outdated, AI is less likely to surface it.
                                    </p>
                                    <h2 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                                      How to know it’s working
                                    </h2>
                                    <p>
                                      Don’t just watch keyword rankings. Look
                                      for:
                                    </p>
                                    <ul>
                                      <li>
                                        Your brand in{" "}
                                        <strong>Knowledge Panels</strong>
                                      </li>
                                      <li>
                                        Traffic from longer, entity-based
                                        searches
                                      </li>
                                      <li>Higher CTR from rich snippets</li>
                                      <li>Longer time on page</li>
                                      <li>
                                        Featured snippet wins for entity-focused
                                        questions
                                      </li>
                                    </ul>
                                    <h2 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                                      Final word
                                    </h2>
                                    <p>
                                      Entity optimization isn’t “extra credit”
                                      anymore — it’s core SEO.
                                    </p>
                                    <p className="mt-3">
                                      If you want to show up in{" "}
                                      <strong>
                                        AI Overviews, voice assistants, and
                                        direct answers,
                                      </strong>{" "}
                                      you need to make your entities clear, show
                                      authority, and connect your content in
                                      ways search engines understand.
                                    </p>
                                    <p className="mt-3">
                                      Get it right, and you’re not just chasing
                                      rankings — you’re building a{" "}
                                      <strong>
                                        presence AI wants to feature.
                                      </strong>
                                    </p>
                                    <hr className="w-100 m-0 d-block mt-4 lg:mt-6 xl:mt-8" />
                                    <p className="fs-3 fw-bold">
                                      🎙 Want the full discussion?
                                    </p>
                                    <p>
                                      Listen to Episode 18 of Conquer AI Search
                                      With AI, Entity Optimization for AI Search
                                      — on Spotify, Apple Podcasts, Audible, or
                                      YouTube.
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
                                  (0:05 - 0:10)
                                  <br /> Welcome to the Concur AI Search podcast
                                  from the team at AI Monitor. It's great to be
                                  back. Thanks.
                                </p>

                                <p>
                                  (0:10 - 0:18)
                                  <br /> Yeah, great to be here. I'm really
                                  looking forward to this one. Today's topic,
                                  well, it feels like it's at the core of
                                  everything changing with AI Search.
                                </p>

                                <p>
                                  (0:18 - 0:35)
                                  <br /> It absolutely does. And for everyone
                                  listening, this is our 10th discussion in our
                                  11-part series. We're breaking down the top 11
                                  AI optimization techniques, you know, the ones
                                  that really help you get visibility on
                                  platforms like Google AI Overview, ChatGPT,
                                  Perplexity AI.
                                </p>

                                <p>
                                  (0:35 - 0:51)
                                  <br /> Basically how to win in this new AI
                                  world. And we've definitely covered some
                                  crucial ground already. Just to recap quickly,
                                  we've talked about things like the LLMs.txt
                                  file, that technical bit, telling AIs how to
                                  crawl, getting active on Reddit, using
                                  citations smartly.
                                </p>

                                <p>
                                  (0:51 - 0:55)
                                  <br /> Right. Evolving SEO playbooks, the
                                  importance of PR, readability. Exactly.
                                </p>

                                <p>
                                  (0:55 - 1:03)
                                  <br /> Quality content, long tail keywords for
                                  user prompts, and even getting reviews
                                  strategically. All building blocks. Which
                                  leads us perfectly into today.
                                </p>

                                <p>
                                  (1:03 - 1:22)
                                  <br /> Today we're tackling number 10, why
                                  entity optimization isn't just important, but
                                  maybe even more important in the age of AI
                                  Search. Our goal, like always, is to dig into
                                  the key insights, give you the actionable
                                  stuff, and get you up to speed fast on this
                                  critical AIO technique. So let's jump in.
                                </p>

                                <p>
                                  (1:22 - 1:32)
                                  <br /> Okay. So first things first. What
                                  exactly is an entity, you know, in this SEO
                                  world? Google calls it something singular,
                                  unique, well-defined, and distinguishable.
                                </p>

                                <p>
                                  (1:32 - 1:46)
                                  <br /> But the interesting part is they don't
                                  have to be physical things. We're talking
                                  people, sure, but also places, ideas, brands,
                                  concepts, companies, events, even things like
                                  colors or dates. They're distinct concepts.
                                </p>

                                <p>
                                  (1:46 - 1:55)
                                  <br /> That's a really key point. Because, you
                                  know, people hear entity and think, isn't that
                                  just a keyword? It's different, right? Totally
                                  different. Keywords are, well, they're the
                                  search terms people type in, the actual words.
                                </p>

                                <p>
                                  (1:55 - 2:00)
                                  <br /> Like Apple. Exactly. Apple, as a
                                  keyword, could be the fruit, could be the tech
                                  company.
                                </p>

                                <p>
                                  (2:00 - 2:10)
                                  <br /> But as an entity, the context makes it
                                  clear. If you're talking Apple alongside iOS,
                                  iPhone, Tim Cook, well, the AI knows you mean
                                  Apple Inc., the entity. Right.
                                </p>

                                <p>
                                  (2:11 - 2:22)
                                  <br /> So it's about shifting from just
                                  thinking about strings of words to thinking
                                  about the actual things, the concepts behind
                                  them. Entities are kind of the bigger topics
                                  that keywords fall under. They give the
                                  context.
                                </p>

                                <p>
                                  (2:23 - 2:31)
                                  <br /> Precisely. And look, this isn't some
                                  brand new idea that just popped up. Search
                                  engines, especially Google, have been moving
                                  this way for, well, over a decade now.
                                </p>

                                <p>
                                  (2:31 - 2:38)
                                  <br /> Remember Hummingbird back in 2013?
                                  Yeah, that was NLP, right? Understanding
                                  meaning. Exactly. Natural language processing.
                                </p>

                                <p>
                                  (2:38 - 2:50)
                                  <br /> Moving past just matching exact words.
                                  Then came RankBrain in 2015, using AI to get
                                  similarities, relationships between entities.
                                  And BERT in 2019, that got even smarter about
                                  context and nuance.
                                </p>

                                <p>
                                  (2:50 - 2:58)
                                  <br /> So fast forward to now, 2025. Search
                                  engines aren't just matching words anymore,
                                  they're understanding systems. They get
                                  context, meaning relationships.
                                </p>

                                <p>
                                  (2:58 - 3:04)
                                  <br /> Just optimizing for keywords, it's,
                                  well, it's not enough. Not even close. And
                                  think about how we search now.
                                </p>

                                <p>
                                  (3:04 - 3:09)
                                  <br /> It's changed too. We ask complex
                                  questions, right? Especially with voice
                                  search. Oh, definitely.
                                </p>

                                <p>
                                  (3:09 - 3:20)
                                  <br /> Like asking Alexa, hey, what are some
                                  good high-protein vegan dinner ideas that take
                                  less than 30 minutes? It's exactly. No simple
                                  keyword there. AI assistants need that
                                  semantic understanding.
                                </p>

                                <p>
                                  (3:21 - 3:36)
                                  <br /> If your content isn't structured around
                                  these entities, these concepts, that it's
                                  basically invisible to that whole wave of
                                  searching. Entities help the AI make sense of
                                  all the information online and, crucially,
                                  figure out what the user actually wants.
                                  That's how results get so personalized.
                                </p>

                                <p>
                                  (3:37 - 3:52)
                                  <br /> And behind a lot of this is the
                                  knowledge graph, isn't it? Absolutely.
                                  Google's knowledge graph is huge, billions of
                                  entities, all connected, but it's not the only
                                  one. You've got Wikidata, IMDb for movies,
                                  OpenAlex for academic stuff, Yaego, these huge
                                  networks of information.
                                </p>

                                <p>
                                  (3:52 - 3:58)
                                  <br /> So it's like a giant brain connecting
                                  iPhone to Apple Inc. to Tim Cook. Precisely.
                                </p>

                                <p>
                                  (3:58 - 4:07)
                                  <br /> It understands those relationships at a
                                  massive scale. And what you often see in
                                  search results, like those info boxes on the
                                  side, that's the knowledge panel. That's the
                                  visible proof of entity recognition.
                                </p>

                                <p>
                                  (4:07 - 4:17)
                                  <br /> Which brings us right to answer engine
                                  optimization, or AEO, something we talk about
                                  a lot at AI Monitor. Yeah. AEO is tailor-made
                                  for these AI answer engines.
                                </p>

                                <p>
                                  (4:18 - 4:29)
                                  <br /> Chat GPT, Perplexity, Google's AI
                                  overviews. And we've seen it work firsthand.
                                  You know, getting featured in Google's AI
                                  overview for what is answer engine
                                  optimization, that wasn't an accident.
                                </p>

                                <p>
                                  (4:29 - 4:39)
                                  <br /> Right. That came from using AEO
                                  tactics, clear, entity-rich answers, good
                                  schema markup, basically speaking the AI's
                                  language. It really proves the point.
                                </p>

                                <p>
                                  (4:39 - 4:47)
                                  <br /> Yeah. So you can speak both user and AI
                                  fluently, and you get noticed. These AI
                                  searches want to give direct answers, and
                                  entities are the building blocks for those
                                  answers.
                                </p>

                                <p>
                                  (4:47 - 4:57)
                                  <br /> Okay. So we get the what and the why,
                                  but how does the AI actually do this? How does
                                  it spot these entities and content? Good
                                  question. It's pretty technical, right? It is,
                                  but it breaks down into a few key steps.
                                </p>

                                <p>
                                  (4:58 - 5:09)
                                  <br /> First, there's something called named
                                  entity recognition NER. That's about
                                  identifying proper nouns, basically, and
                                  figuring out what they are. Is Paris a place?
                                  Is Amazon a company? Then comes entity
                                  linking.
                                </p>

                                <p>
                                  (5:10 - 5:23)
                                  <br /> It takes the identified entity, like
                                  Einstein, and connects it to a specific entry
                                  in a knowledge base, like Wikidata. This
                                  avoids confusion, like knowing if Java means
                                  the island or the programming language. Ah,
                                  makes sense.
                                </p>

                                <p>
                                  (5:23 - 5:27)
                                  <br /> Disambiguation. Exactly. And finally,
                                  there's context analysis.
                                </p>

                                <p>
                                  (5:28 - 5:42)
                                  <br /> The AI looks at the words around the
                                  entity to figure out the specific meaning. Is
                                  bank a place for money or the side of a river?
                                  The context tells it. And machine learning is
                                  constantly making this whole process better,
                                  learning new entities, understanding trickier
                                  relationships.
                                </p>

                                <p>
                                  (5:43 - 5:55)
                                  <br /> So for creators, this means our content
                                  needs to be super clear and interconnected.
                                  Pretty much. You're basically helping the AI
                                  do its job by making the entities and their
                                  relationships really obvious in your content.
                                </p>

                                <p>
                                  (5:55 - 5:56)
                                  <br /> Okay. That makes a lot of sense. Yeah.
                                </p>

                                <p>
                                  (5:56 - 6:04)
                                  <br /> So we understand why it's crucial, how
                                  the tech works. Let's get practical. What can
                                  businesses, what can content creators actually
                                  do? What are the strategies? Right.
                                </p>

                                <p>
                                  (6:04 - 6:10)
                                  <br /> Let's talk actionables. First up,
                                  identify your core entities. Simple but
                                  foundational.
                                </p>

                                <p>
                                  (6:11 - 6:18)
                                  <br /> What are the key people, products,
                                  concepts, places for your specific niche? Map
                                  them out. These are like your main pillars.
                                  Exactly.
                                </p>

                                <p>
                                  (6:18 - 6:21)
                                  <br /> Your anchor points. And don't just
                                  think narrowly. Use Google itself.
                                </p>

                                <p>
                                  (6:22 - 6:25)
                                  <br /> Search for relevant stuff. See what
                                  knowledge panels pop up. Check Wikipedia.
                                </p>

                                <p>
                                  (6:25 - 6:29)
                                  <br /> Look at industry forums. Build out that
                                  list. Okay.
                                </p>

                                <p>
                                  (6:29 - 6:33)
                                  <br /> Step one. Know your entities. What's
                                  next? Topic clusters.
                                </p>

                                <p>
                                  (6:34 - 6:44)
                                  <br /> This is huge. You group your content
                                  around those core entities, often using a
                                  pillar page and supporting cluster pages. This
                                  shows search engines you have real depth, real
                                  authority on a topic.
                                </p>

                                <p>
                                  (6:44 - 6:51)
                                  <br /> We've seen some amazing results with
                                  this, haven't we? Like Windows Report. Oh
                                  yeah. They went all in on an entity-based
                                  content model.
                                </p>

                                <p>
                                  (6:52 - 7:00)
                                  <br /> Saw what was it, 61% organic growth in
                                  like eight months? Ooh. Over a million monthly
                                  visitors. That's the power of showing topical
                                  depth.
                                </p>

                                <p>
                                  (7:00 - 7:08)
                                  <br /> SMA marketing saw huge lifts for a
                                  client too, using semantic SEO and clusters.
                                  Diggity marketing used Powerhub. Same idea.
                                </p>

                                <p>
                                  (7:08 - 7:15)
                                  <br /> Big traffic increase. So clusters prove
                                  you're a serious resource. Then what? Then you
                                  need to talk directly to the machines using
                                  structured data.
                                </p>

                                <p>
                                  (7:16 - 7:18)
                                  <br /> Or schema markup. Right. The backstage
                                  pass.
                                </p>

                                <p>
                                  (7:18 - 7:19)
                                  <br /> Huh. Yeah. Kinda.
                                </p>

                                <p>
                                  (7:20 - 7:24)
                                  <br /> You tag your content with specific
                                  schema types. Person. Organization.
                                </p>

                                <p>
                                  (7:24 - 7:27)
                                  <br /> Event. Product review. Local business.
                                </p>

                                <p>
                                  (7:27 - 7:36)
                                  <br /> Whatever fits. This gives search
                                  engines a really clear, structured
                                  understanding of your content. Plus, it can
                                  lead to those nice, rich snippets in the
                                  search results.
                                </p>

                                <p>
                                  (7:36 - 7:46)
                                  <br /> Lovish Madan's client saw big
                                  impression and click increases with schema.
                                  Okay, so schema helps the AI categorize. What
                                  about the content itself? That's number four.
                                </p>

                                <p>
                                  (7:46 - 7:51)
                                  <br /> Craft content with depth and context.
                                  Don't just name drop your entities. Explain
                                  them.
                                </p>

                                <p>
                                  (7:52 - 8:01)
                                  <br /> Why are they important? How do they
                                  work? Give the background. Demonstrate real
                                  understanding. And this ties into EEAT, right?
                                  Experience, expertise, authoritativeness,
                                  trustworthiness.
                                </p>

                                <p>
                                  (8:01 - 8:09)
                                  <br /> Absolutely. EEAT signals are crucial
                                  for AI trust. Is this content reliable? Is the
                                  source credible? AI needs to know it's
                                  surfacing good info.
                                </p>

                                <p>
                                  (8:09 - 8:17)
                                  <br /> Look at Serious Eats, the food site.
                                  They nail EAT showing their history,
                                  readership, expert writers, real photos. That
                                  helps drive massive traffic and authority.
                                </p>

                                <p>
                                  (8:17 - 8:22)
                                  <br /> Makes sense. Deep, trustworthy content.
                                  What else? Strategic, internal linking.
                                </p>

                                <p>
                                  (8:23 - 8:31)
                                  <br /> Connect the dots within your own site.
                                  Link-related articles, related entities
                                  together. It helps search engines map out the
                                  relationships you see as important.
                                </p>

                                <p>
                                  (8:31 - 8:37)
                                  <br /> Plus, it gets rid of orphan pages that
                                  have no links pointing to them. Building your
                                  own mini-knowledge graph internally. Kind of,
                                  yeah.
                                </p>

                                <p>
                                  (8:38 - 8:43)
                                  <br /> Artings.com does this well. Linking
                                  related reviews, adding recommended articles.
                                  It strengthens the whole structure.
                                </p>

                                <p>
                                  (8:43 - 8:49)
                                  <br /> Okay, internal links. We're almost
                                  there. Next, maintain brand consistency across
                                  directories.
                                </p>

                                <p>
                                  (8:50 - 9:03)
                                  <br /> This sounds like old-school local SEO,
                                  maybe. But it's vital for entity verification
                                  for AI. Consistent name, address, phone
                                  number, NAP on Google Business Profile,
                                  Facebook, industry directories.
                                </p>

                                <p>
                                  (9:03 - 9:11)
                                  <br /> It tells AI, yes, this is a real,
                                  stable, verifiable entity. It solidifies your
                                  digital identity for the AI. Exactly.
                                </p>

                                <p>
                                  (9:11 - 9:22)
                                  <br /> WasteCycle saw an 87% jump in local
                                  traffic, partly because they nailed their
                                  Google My Business visibility, which relies on
                                  that consistency. Regularly update entity
                                  information. Things change.
                                </p>

                                <p>
                                  (9:23 - 9:27)
                                  <br /> Brands launch new products. Concepts
                                  evolve. Keep your content current.
                                </p>

                                <p>
                                  (9:27 - 9:33)
                                  <br /> If you're talking about an entity, make
                                  sure the information is accurate now. Stale
                                  info hurts your perceived authority. Right.
                                </p>

                                <p>
                                  (9:34 - 9:44)
                                  <br /> Accuracy equals reliability in the AI's
                                  eyes. That's a solid set of strategies. How do
                                  we know if it's working? How do we measure
                                  this stuff? Good question, because it's not
                                  just about keyword rankings anymore.
                                </p>

                                <p>
                                  (9:45 - 10:10)
                                  <br /> You need to look for different signals.
                                  Are you showing up in knowledge panels for
                                  your brand or your experts? Okay, that's a big
                                  one. Are you ranking better for related
                                  searches, not just exact keywords? Is your
                                  organic traffic growing from those longer,
                                  more specific entity-related queries? Are you
                                  getting higher click-through rates, maybe
                                  because of rich snippets you earned through
                                  Schema? Are users sticking around longer on
                                  your page, bouncing less? That shows
                                  relevance.
                                </p>

                                <p>
                                  (10:10 - 10:24)
                                  <br /> And are you capturing featured snippets
                                  for those entity-focused questions? So a
                                  broader set of KPIs. And there are tools to
                                  help, right? Like Google's NLP API. Yeah, that
                                  can give you some insight into how Google
                                  itself is parsing the entities in your
                                  content.
                                </p>

                                <p>
                                  (10:24 - 10:32)
                                  <br /> It's a bit technical, but useful. But
                                  the key thing to remember is entity
                                  optimization. It often takes time.
                                </p>

                                <p>
                                  (10:32 - 10:38)
                                  <br /> It's not instant. No. Search engines
                                  need to build confidence in your site's
                                  semantic relevance.
                                </p>

                                <p>
                                  (10:39 - 10:43)
                                  <br /> So track these things, but be patient.
                                  It's a gradual build. Okay.
                                </p>

                                <p>
                                  (10:43 - 10:49)
                                  <br /> So stepping back, thinking about the
                                  future. Entity SEO isn't just a tactic. It's
                                  really fundamental now.
                                </p>

                                <p>
                                  (10:50 - 10:55)
                                  <br /> It's the foundation. And it's only
                                  going to get more important as AI experiences
                                  become the norm. And think about this.
                                </p>

                                <p>
                                  (10:56 - 11:08)
                                  <br /> As AI gets better at summarizing info,
                                  users need new skills to evaluate those
                                  summaries. AI needs to help us use our
                                  intuition, our common sense. Which means...
                                  Content needs to be clear about why it's
                                  saying what it's saying.
                                </p>

                                <p>
                                  (11:09 - 11:14)
                                  <br /> Transparent about its entity
                                  connections. Exactly. Transparency and how you
                                  connect the dots becomes really important.
                                </p>

                                <p>
                                  (11:14 - 11:20)
                                  <br /> Which leads to a pretty interesting
                                  thought. Yeah. This whole shift, it moves us
                                  away from just being like keyword hunters.
                                </p>

                                <p>
                                  (11:20 - 11:33)
                                  <br /> It empowers us to become entity
                                  masters, focusing on the actual concepts, the
                                  relationships. That's how you future-proof
                                  your content. That's how you position your
                                  brand as a source that AI actively wants to
                                  trust and promote.
                                </p>

                                <p>
                                  (11:33 - 11:41)
                                  <br /> Well said. It's about showing you
                                  understand the world your content lives in and
                                  making that understanding clear to both humans
                                  and AI. Absolutely.
                                </p>

                                <p>
                                  (11:42 - 11:48)
                                  <br /> Build that trust through clarity and
                                  depth. And that wraps up today's episode of
                                  Conquer A Search. Thanks so much for tuning
                                  in.
                                </p>

                                <p>
                                  (11:48 - 12:03)
                                  <br /> If you enjoyed the conversation, make
                                  sure to follow or subscribe wherever you're
                                  listening, whether that's Spotify, Apple
                                  Podcasts, Audible, Amazon Music, or right here
                                  on YouTube. And hey, if you got value out of
                                  this episode, consider leaving a rating or
                                  review. It really helps us reach more
                                  listeners like you.
                                </p>

                                <p>
                                  (12:03 - 12:10)
                                  <br /> See you next Saturday with our 11th and
                                  last AI optimization or generative engine
                                  optimization technique, and keep making AI
                                  work for you.
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
                                  <li className="mt-2">
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
                                  <li className="mt-2">
                                    Google Search Central. (n.d.). Semantic
                                    search explained [Video]. YouTube. Retrieved
                                    from{" "}
                                    <a
                                      href="https://www.youtube.com/watch?v=RGPGdGyhyN0"
                                      className="text-blue"
                                      target="_blank"
                                    >
                                      https://www.youtube.com/watch?v=RGPGdGyhyN0
                                    </a>
                                  </li>
                                  <li className="mt-2">
                                    Computing Community Consortium. (2024,
                                    December). Future of information retrieval
                                    research in the age of generative AI [PDF].
                                    Retrieved from{" "}
                                    <a
                                      href="https://cra.org/ccc/wp-content/uploads/sites/2/2024/12/CCC-Report_-Future-of-Information-Retrieval-Research-in-the-Age-of-Generative-AI_FINAL.pdf"
                                      className="text-blue"
                                      target="_blank"
                                    >
                                      https://cra.org/ccc/wp-content/uploads/sites/2/2024/12/CCC-Report_-Future-of-Information-Retrieval-Research-in-the-Age-of-Generative-AI_FINAL.pdf
                                    </a>
                                  </li>
                                  <li className="mt-2">
                                    The SEO Works. (n.d.). Entity SEO. Retrieved
                                    from{" "}
                                    <a
                                      href="https://www.seoworks.co.uk/entity-seo/"
                                      className="text-blue"
                                      target="_blank"
                                    >
                                      https://www.seoworks.co.uk/entity-seo/
                                    </a>
                                  </li>
                                  <li className="mt-2">
                                    The Ad Firm. (n.d.). Entity SEO: Why
                                    concepts, not keywords, win rankings in
                                    2025. Retrieved from{" "}
                                    <a
                                      href="https://www.theadfirm.net/entity-seo-why-concepts-not-keywords-win-rankings-in-2025/"
                                      className="text-blue"
                                      target="_blank"
                                    >
                                      https://www.theadfirm.net/entity-seo-why-concepts-not-keywords-win-rankings-in-2025/
                                    </a>
                                  </li>
                                  <li className="mt-2">
                                    TrustaR Marketing. (n.d.). From keywords to
                                    entities: The SEO revolution you can’t
                                    afford to miss. Retrieved from{" "}
                                    <a
                                      href="https://trustarmarketing.com/from-keywords-to-entities-the-seo-revolution-you-cant-afford-to-miss/"
                                      className="text-blue"
                                      target="_blank"
                                    >
                                      https://trustarmarketing.com/from-keywords-to-entities-the-seo-revolution-you-cant-afford-to-miss/
                                    </a>
                                  </li>
                                  <li className="mt-2">
                                    Rush Analytics. (n.d.). Google SEO entities.
                                    Retrieved from{" "}
                                    <a
                                      href="https://rush-analytics.com/blog/google-seo-entities"
                                      className="text-blue"
                                      target="_blank"
                                    >
                                      https://rush-analytics.com/blog/google-seo-entities
                                    </a>
                                  </li>
                                  <li className="mt-2">
                                    IMMWIT. (n.d.). NLP query understanding.
                                    Retrieved from{" "}
                                    <a
                                      href="https://www.immwit.com/wiki/nlp-query-understanding/"
                                      className="text-blue"
                                      target="_blank"
                                    >
                                      https://www.immwit.com/wiki/nlp-query-understanding/
                                    </a>
                                  </li>
                                  <li className="mt-2">
                                    Ontotext. (n.d.). Semantic search: The
                                    paradigm shift from results to
                                    relationships. Retrieved from{" "}
                                    <a
                                      href="https://www.ontotext.com/blog/semantic-search-the-paradigm-shift-from-results-to-relationships/?generate_pdf=10138"
                                      className="text-blue"
                                      target="_blank"
                                    >
                                      https://www.ontotext.com/blog/semantic-search-the-paradigm-shift-from-results-to-relationships/?generate_pdf=10138
                                    </a>
                                  </li>
                                  <li className="mt-2">
                                    Surfer SEO. (n.d.). Entity SEO. Retrieved
                                    from{" "}
                                    <a
                                      href="https://surferseo.com/blog/entity-seo/"
                                      className="text-blue"
                                      target="_blank"
                                    >
                                      https://surferseo.com/blog/entity-seo/
                                    </a>
                                  </li>
                                  <li className="mt-2">
                                    Clearscope. (n.d.). What is an entity in
                                    SEO?. Retrieved from{" "}
                                    <a
                                      href="https://www.clearscope.io/blog/what-is-an-entity-in-SEO"
                                      className="text-blue"
                                      target="_blank"
                                    >
                                      https://www.clearscope.io/blog/what-is-an-entity-in-SEO
                                    </a>
                                  </li>
                                  <li className="mt-2">
                                    AI Monitor. (n.d.). What is answer engine
                                    optimization?. Retrieved from{" "}
                                    <a
                                      href="https://getaimonitor.com/what-is-answer-engine-optimization/"
                                      className="text-blue"
                                      target="_blank"
                                    >
                                      https://getaimonitor.com/what-is-answer-engine-optimization/
                                    </a>
                                  </li>
                                  <li className="mt-2">
                                    Syntactics Inc. (n.d.). Keywords and
                                    entities. Retrieved from{" "}
                                    <a
                                      href="https://www.syntacticsinc.com/news-articles-cat/keywords-and-entities/#google_vignette"
                                      className="text-blue"
                                      target="_blank"
                                    >
                                      https://www.syntacticsinc.com/news-articles-cat/keywords-and-entities/#google_vignette
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
            {/* <Blog1Faqs /> */}
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

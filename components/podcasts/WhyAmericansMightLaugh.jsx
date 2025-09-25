"use client";
// import Toc from "./Toc";
import RelatedBlogs from "../blogs/RelatedBlogs";
import Image from "next/image";
import Link from "next/link";
import { Gallery, Item } from "react-photoswipe-gallery";
import { useState } from "react";
import Blog1Faqs from "../blogs/faqs/Blog1Faqs";
import GEOCourseCTA from "@/components/common/GeoCTA";

export default function WhyAmericansMightLaugh({ blogItem }) {
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
                  Why 90M Americans Might Laugh at Your SEO by 2027
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
                    src="https://www.youtube.com/embed/2mjNLI_hc9M?si=hQswB0ICphyxkCoi"
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
                            Ep #4: Google Breakup: Marketing Implications |
                            Conquer AI Search With AI
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
                        src="https://audio.getaimonitor.com/ConquerAISearchWithAI/conquer-ai-search-ep4.mp3"
                      ></audio>
                      {/* </figure> */}
                      <hr className="w-100 m-0 d-block mt-4" />
                    </div>
                    <p className="mt-2">Also Available on:</p>
                    <div className="d-none lg:d-block">
                      {/* <div className="row child-cols-3 sm:child-cols-6 xl:child-cols-3 col-match g-2 justify-between hstack mt-2"> */}
                      <div className="hstack gap-4 mt-2 justify-center">
                        <a
                          href="https://open.spotify.com/episode/344myLfcqeDYwieTtCCfX3?si=niQ-B3TCRUCKm21otRFrhw"
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
                          href="https://music.amazon.com/podcasts/638df449-1fbd-497d-a145-5315d8541611/episodes/a6537ca8-879b-4dff-bfa8-8cb3adc6f370/conquer-ai-search-with-ai-ep-4-google-breakup-marketing-implications-conquer-ai-search-with-ai"
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
                        <a href="https://podcasts.apple.com/in/podcast/ep-4-google-breakup-marketing-implications-conquer/id1806802986?i=1000705011230">
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
                        <a href="https://youtu.be/2mjNLI_hc9M?si=9g8jt-hUXEo9J6Cc">
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
                        <a href="https://overcast.fm/+ABOivzUfxlM">
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
                        <a href="https://pca.st/6f6pjbva">
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
                        <a href="https://castro.fm/episode/CxOzqo">
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
                          href="https://open.spotify.com/episode/344myLfcqeDYwieTtCCfX3?si=HZ8xwMBdQP2fgmrG3sMZSQ"
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
                          href="https://music.amazon.com/podcasts/638df449-1fbd-497d-a145-5315d8541611/episodes/a6537ca8-879b-4dff-bfa8-8cb3adc6f370/conquer-ai-search-with-ai-ep-4-google-breakup-marketing-implications-conquer-ai-search-with-ai"
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
                        <a href="https://podcasts.apple.com/in/podcast/ep-4-google-breakup-marketing-implications-conquer/id1806802986?i=1000705011230">
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
                        <a href="https://youtu.be/2mjNLI_hc9M?si=bALtP0YLJ4I4ckPf">
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
                                  🎙️ Conquer AI Search Podcast – Ep. 4
                                </h3>
                                <ol className="fs-5">
                                  <li>
                                    0:04 – 0:52 – Welcome & Overview: AI-driven
                                    search impact
                                  </li>
                                  <li>
                                    0:55 – 1:20 – Generative AI adoption trends
                                  </li>
                                  <li>
                                    1:23 – 2:22 – Adapting with GEO, data, and
                                    client strategies
                                  </li>
                                  <li>
                                    2:24 – 3:28 – Why people prefer AI over
                                    traditional search
                                  </li>
                                  <li>
                                    3:29 – 4:27 – Impact on ads, publishers, and
                                    revenue
                                  </li>
                                  <li>
                                    4:28 – 6:41 – Google antitrust, competition,
                                    and browser control
                                  </li>
                                  <li>
                                    7:04 – 8:42 – GEO fundamentals & content
                                    strategy
                                  </li>
                                  <li>
                                    8:44 – 10:12 – First-party/zero-party data
                                    and client relationships
                                  </li>
                                  <li>
                                    10:20 – 11:29 – Core principles vs. AI
                                    evolution
                                  </li>
                                  <li>
                                    11:31 – 12:31 – Closing thoughts & call to
                                    action
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
                                      The days of typing queries into Google and
                                      scrolling through pages of blue links are
                                      numbered. If you don’t believe me, let me
                                      paint a picture for you: you’re planning
                                      to run a marathon next month and want to
                                      buy a good pair of shoes for it. However,
                                      you remember that last year you were
                                      diagnosed with plantar fasciitis. Consider
                                      the scenario where you ask a person, “What
                                      are the best running shoes for marathon
                                      runners with plantar fasciitis?” Instead
                                      of digging through endless lists of
                                      results and ads, you receive an answer in
                                      response to your inquiry. All that is
                                      required is no clicks, no
                                      distractions—just what is needed
                                      immediately. Sounds like a consumer’s
                                      dream coming true, right? But for
                                      marketers, it’s nothing short of a
                                      disaster!
                                    </p>
                                    <h2 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                                      Welcome to the AI Search Era (a.k.a.
                                      “Wait, where did my web traffic go?”)
                                    </h2>
                                    <p className="">
                                      By 2027, over 90 million Americans are
                                      predicted to ditch traditional search
                                      engines for AI-powered tools like ChatGPT,
                                      Claude, and Gemini to find answers,
                                      products, and services. If your marketing
                                      strategy still revolves around outdated
                                      SEO tactics, you’re not just behind the
                                      curve—you’re risking irrelevance.
                                    </p>
                                    <p className="mt-3">
                                      In our latest Conquer AI Search podcast
                                      episode, we unpack why the seismic shift
                                      to AI search is collapsing traditional
                                      SEO—and what marketers, content creators,
                                      and businesses must do to survive. Here’s
                                      a glimpse of what’s at stake.
                                    </p>

                                    <h2 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                                      Why This Shift Matters: A Big Change in
                                      How We Search
                                    </h2>
                                    <p>
                                      Let’s look at some numbers: in 2023,
                                      around 13 million adults in America
                                      considered using generative AI as their
                                      primary method for accessing information
                                      on the internet. This figure is projected
                                      to surge to 90 million by 2027.
                                    </p>
                                    <p className="mt-3">
                                      This sort of change is not something that
                                      happens infinitely. Almost two-thirds of
                                      adults— or 68%— of the US population is
                                      expected to depend on AI tools for basic
                                      information in 2027. That is a pretty big
                                      deal.
                                    </p>
                                    <p className="mt-3">
                                      If you’re in any part of the digital
                                      marketing world, from SEO to content
                                      strategy, this is a signal that things are
                                      changing, and fast. But what does this
                                      change really mean for businesses and
                                      marketers? Let’s explore the reasons
                                      behind this shift and what it will mean
                                      moving forward.
                                    </p>
                                    <h2 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                                      What’s Fueling the Shift? Let’s Break It
                                      Down
                                    </h2>

                                    <h3 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                                      1. We’re Tired. So Tired.
                                    </h3>
                                    <p>
                                      Let’s consider the reality: conventional
                                      search methods are quite tiring. When
                                      browsing the internet, everything needs to
                                      be taken care of quickly and in a
                                      straightforward manner. Users no longer
                                      wish to deal with endless clicking, pop up
                                      advertisements, and reading irrelevant
                                      SEO-optimized content that offers no
                                      value.
                                    </p>
                                    <p className="mt-3">
                                      If you’re in the middle of an argument
                                      with a friend about whether penguins have
                                      knees (spoiler: they do, weirdly), you
                                      probably don’t want to get lost scrolling
                                      through a bunch of blue links, ads, and
                                      random blog stuff. You just want a
                                      straight answer, not a bunch of choices.
                                    </p>
                                    <p className="mt-3">
                                      AI gets that. Ask it something, and it
                                      doesn’t make you work for it. It serves up
                                      a tight, clean, no-fluff answer like your
                                      smart friend who never brags about reading
                                      the manual. That’s the new gold standard.
                                    </p>

                                    <p className="mt-3">
                                      <b>What this means for you:</b>
                                    </p>
                                    <p>
                                      If your content does not have instantly
                                      applicable and easily understandable
                                      answers, you may risk getting lost in this
                                      new era of AI. We live in the age where
                                      people are searching for solutions to
                                      their problems instantly and AI is
                                      proficient in providing those.
                                    </p>

                                    <h3 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                                      2. The Ad Game is Changing — Fast
                                    </h3>
                                    <p>
                                      One of the biggest implications of
                                      AI-driven search is how it affects the
                                      traditional ad model. Right now,
                                      businesses rely on ads to drive traffic.
                                      But if AI gives users answers directly,
                                      they won’t need to click through to your
                                      website — and that means less ad revenue.
                                    </p>
                                    <p className="mt-3">
                                      Imagine you’re looking for running shoes.
                                      Instead of seeing a list of sponsored ads
                                      for Nike, Adidas, or New Balance, an AI
                                      might just suggest the best shoe based on
                                      your needs, and the brands don’t even get
                                      a chance to showcase their ads.
                                    </p>
                                    <p className="mt-3">
                                      <b>👉 Translation for brands:</b> You need
                                      to start thinking beyond the banner.
                                      Storytelling, product relevance, and
                                      building real awareness matter more now
                                      than ever. You can’t just pay to play —
                                      you’ve got to earn attention.
                                    </p>

                                    <h3 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                                      3. Google’s Got Bigger Problems Than Your
                                      Bounce Rate
                                    </h3>
                                    <p>
                                      While AI search is gaining momentum,
                                      Google is facing major antitrust lawsuits
                                      over its dominance in search and ad tech.
                                      We’re talking: splitting off Chrome,
                                      breaking exclusive deals, and making room
                                      for new search players.
                                    </p>
                                    <p className="mt-3">
                                      Interestingly, OpenAI, the people who made
                                      ChatGPT, are thinking about buying Wild,
                                      right?
                                    </p>
                                    <p className="mt-3">
                                      <b>👉 Takeaway: </b> If you’ve been
                                      relying on Google traffic like it’s an IV
                                      drip, it’s time to diversify. Think AI
                                      search, multi-platform, multi-format, and
                                      (deep breath) maybe even TikTok.
                                    </p>

                                    <h3 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                                      4. SEO is Dead (At Least, the SEO You
                                      Know)
                                    </h3>
                                    <p>
                                      For decades, marketers obsessed over
                                      keywords, backlinks, and meta tags. But AI
                                      doesn’t care about your cleverly placed H1
                                      tags. Generative AI scans content for
                                      value, not just keywords. If your blog
                                      posts are stuffed with empty phrases
                                      designed to game algorithms, AI tools—and
                                      the users relying on them—will ignore you.
                                      The result? Traffic plummets, and your
                                      “optimized” content becomes digital
                                      wallpaper.
                                    </p>

                                    <h3 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                                      5. The Rise of Generative Engine
                                      Optimization (GEO)
                                    </h3>
                                    <p>
                                      Say it with me: Generative Engine
                                      Optimization.
                                    </p>
                                    <p className="mt-3">
                                      It’s not about stuffing keywords into
                                      headers anymore. It’s about structuring
                                      your content in a way that’s readable and
                                      “bot-friendly.” And not just any bots —
                                      smart bots that can summarize, synthesize,
                                      and choose what content to quote.
                                    </p>
                                    <p className="mt-3">
                                      <b>What you can do:</b>
                                    </p>
                                    <ul className="mt-3">
                                      <li>
                                        Focus on quality: Content that’s deep,
                                        authoritative, and helpful is more
                                        likely to be picked up by AI engines.
                                      </li>
                                      <li>
                                        Prioritize transparency: AI needs to
                                        know exactly how your content is
                                        structured, so be clear and organized.
                                      </li>
                                    </ul>

                                    <p className="mt-3">
                                      Technical excellence: Your website should
                                      be fast, reliable, and easy for AI bots to
                                      crawl.
                                    </p>

                                    <h3 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                                      6. Relationships Cookies (Yes, Even the
                                      Double-Chocolate Kind)
                                    </h3>
                                    <p>
                                      In an era where data privacy is a big
                                      concern and cookies are on their way out,
                                      building strong relationships with clients
                                      and users is more important than ever.
                                      First-party and zero-party data (data that
                                      users willingly provide, like preferences
                                      or survey responses) will be your best
                                      assets moving forward.
                                    </p>
                                    <p className="mt-3">
                                      Because here’s the thing: trust is the new
                                      currency. If someone feels seen, heard,
                                      and valued, they’ll share their
                                      preferences — no shady tracking required.
                                    </p>
                                    <p className="mt-3">
                                      <b>👉 TL;DR: </b> Relationships are back
                                      in fashion. Authenticity wins. Brands that
                                      treat people like people (not just data
                                      points) will thrive.
                                    </p>
                                    <h2 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                                      So... Now What?
                                    </h2>

                                    <p>
                                      The rise of AI search isn’t something
                                      that’s coming — it’s already here, and
                                      it’s only going to grow. And while the
                                      tools are changing, the heart of great
                                      marketing isn’t. It’s still about
                                      understanding people. Being helpful.
                                      Showing up when it matters.
                                    </p>
                                    <p className="mt-3">
                                      Now, it’s all about discovering how to
                                      engage with AI-powered search engines,
                                      ensuring your content is viewed and
                                      connects with people and AI bots alike.
                                    </p>
                                    <p className="mt-3">
                                      So, the primary concern is: what will you
                                      do to adapt to the new era of search
                                      engines? Would you passively observe the
                                      changes, or would you make the necessary
                                      adjustments and take charge in this new
                                      world?
                                    </p>
                                    <p className="mt-3">
                                      The power rests in your hands. Let’s
                                      welcome what’s next together!
                                    </p>
                                    <p className="mt-3">
                                      <b>
                                        Are you ready to optimize for AI-driven
                                        search? Let us know how you’re planning
                                        to adapt in the comments!
                                      </b>
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
                                  (0:04 - 0:10)
                                  <br />
                                  Welcome to Conquer AI Search with AI, where I,
                                  Avi, alongside Catherine, unpack the future of
                                  how we find and connect with information
                                  online.
                                </p>

                                <p>
                                  (0:10 - 0:13)
                                  <br />
                                  Today, we dive into the seismic shift from
                                  traditional search to AI-driven answers, and
                                  what it means for content creators, marketers,
                                  and SEO pros.
                                </p>

                                <p>
                                  (0:13 - 0:19)
                                  <br />
                                  With over 90 million people projected to use
                                  generative AI for search by 2027, this is no
                                  longer a fringe trend.
                                </p>

                                <p>
                                  (0:19 - 0:29)
                                  <br />
                                  We'll explore what's driving this change, how
                                  it threatens the current ad and content
                                  ecosystem, and what practical strategies, like
                                  GEO, Generative Engine Optimization,
                                  first-party data collection, and client
                                  relationship building, can help you stay
                                  ahead.
                                </p>

                                <p>
                                  (0:29 - 0:47)
                                  <br />
                                  Let's get into it. Today, we're diving into a
                                  really big shift. It's impacting how people
                                  find information online.
                                </p>

                                <p>
                                  (0:47 - 0:57)
                                  <br />
                                  Yeah, it's huge. And it has massive
                                  implications if you're in, say, content, SEO,
                                  or inbound marketing.
                                </p>

                                <p>
                                  (0:57 - 1:11)
                                  <br />
                                  Exactly. I mean, consider this. Back in 2023,
                                  already 13 million adults in the US were using
                                  generative AI as their main search method. 13
                                  million already back then.
                                </p>

                                <p>
                                  (1:11 - 1:20)
                                  <br />
                                  Wow. Right. And fast forward to the
                                  projections for 2027, that number is expected
                                  to jump to over 90 million. 90 million. OK, so
                                  this isn't some fringe trend anymore.
                                </p>

                                <p>
                                  (1:20 - 1:28)
                                  <br />
                                  Not at all. It's something like, what, 68% of
                                  adults are now turning to AI for answers. It's
                                  significant.
                                </p>

                                <p>
                                  (1:28 - 1:39)
                                  <br />
                                  What's really striking is just how fast this
                                  is becoming, well, normal. That kind of
                                  adoption signals a real change in how people
                                  expect to get information. And it raises a
                                  fundamental question for us, doesn't it? How
                                  do we, as professionals in this space, adapt?
                                </p>

                                <p>
                                  (1:39 - 1:57)
                                  <br />
                                  Exactly. So our goal in this podcast is to
                                  really try and understand how those of us
                                  creating content, optimizing for search,
                                  attracting organic traffic, how we can keep
                                  pace. Or even get ahead, maybe. Hopefully.
                                </p>

                                <p>
                                  (1:57 - 2:11)
                                  <br />
                                  We need to excel in this evolving landscape.
                                  So we'll look at what's driving this shift to
                                  AI search, the potential ripple effects, and
                                  importantly, practical strategies. Things
                                  people can actually use.
                                </p>

                                <p>
                                  (2:11 - 2:22)
                                  <br />
                                  Yeah, things you can use right now. We'll pull
                                  from recent insights on client relationships
                                  and expert takes on the future of search.
                                  Okay, should we get into it? Let's start with
                                  the disruption itself.
                                </p>

                                <p>
                                  (2:22 - 2:33)
                                  <br />
                                  Why are people increasingly choosing AI over,
                                  you know, the Google search bar? Good
                                  question. What are the sources saying? Well,
                                  the big one seems to be speed and directness.
                                  People want faster answers, less clicking
                                  around.
                                </p>

                                <p>
                                  (2:33 - 2:39)
                                  <br />
                                  AI promises that single synthesized response.
                                  That makes total sense. You know, when you
                                  just need a quick fact, like, what's the
                                  capital of France? Great.
                                </p>

                                <p>
                                  (2:39 - 2:52)
                                  <br />
                                  Instead of scrolling through links, dealing
                                  with pop-ups, cookie banners, which, let's be
                                  honest, have made browsing kind of a chore
                                  sometimes. Definitely. That website clutter is
                                  a real factor.
                                </p>

                                <p>
                                  (2:52 - 3:00)
                                  <br />
                                  Yeah, AI offers this cleaner, more immediate
                                  path. It feels like an escape route from all
                                  that noise. And that connects to the second
                                  point, user frustration.
                                </p>

                                <p>
                                  (3:00 - 3:12)
                                  <br />
                                  People are tired of results pages crammed
                                  with, maybe, SEO-optimized fluff instead of
                                  real value, plus all the ads. Uh-huh. The
                                  sponsored results. Exactly. AI, in theory,
                                  filters that.
                                </p>

                                <p>
                                  (3:12 - 3:28)
                                  <br />
                                  But, and this is a big but, who decides what
                                  that single AI answer is? That's the
                                  million-dollar question, isn't it? What gets
                                  left out? Which perspectives are ignored if
                                  there's only one correct answer presented?
                                  Precisely.
                                </p>

                                <p>
                                  (3:28 - 3:43)
                                  <br />
                                  And that has huge implications, especially
                                  when you think about the online ad economy and
                                  how content gets funded. OK, let's talk about
                                  that, the ad money. Well, if users get answers
                                  from AI and don't click through to websites,
                                  the whole model breaks down, right? That all
                                  relies on site traffic.
                                </p>

                                <p>
                                  (3:43 - 4:01)
                                  <br />
                                  Maybe an example. OK, think about searching
                                  for running shoes. Today, you get ads from
                                  Nike, Adidas, New Balance, maybe some reviews.
                                  Lots of options, yeah. But with an AI
                                  assistant, it might just say, based on your
                                  needs, try this shoe. And those brands, they
                                  never even got seen. Their ads weren't
                                  displayed.
                                </p>

                                <p>
                                  (4:01 - 4:09)
                                  <br />
                                  So that visibility just disappears. That's a
                                  massive shift for anyone relying on search
                                  ads, PPC campaigns. It really is. How do you
                                  even reach customers if they aren't seeing
                                  that list of search results anymore?
                                </p>

                                <p>
                                  (4:09 - 4:27)
                                  <br />
                                  What about publishers? News sites, blogs? If
                                  AI just scrapes and summarizes their articles?
                                  That's the other side of the coin. If users
                                  don't visit the site, the publisher gets no
                                  traffic, no ad revenue from that interaction.
                                  It's potentially devastating. So what do they
                                  do? Well, we might see more aggressive
                                  paywalls, trying to get money directly from
                                  readers, or maybe relying more heavily on
                                  social media for traffic, which is volatile,
                                  to say the least.
                                </p>

                                <p>
                                  (4:27 - 4:47)
                                  <br />
                                  Yeah, algorithms change constantly there. It
                                  really shifts the power dynamic. AI platforms
                                  could become the new gatekeepers, deciding
                                  what content gets surfaced. Wow. OK, so AI is
                                  changing search habits, threatening ad models.
                                </p>

                                <p>
                                  (4:47 - 5:29)
                                  <br />
                                  Yeah. And then there's the whole Google
                                  antitrust situation happening at the same
                                  time. Talk about a perfect storm, right? Just
                                  as AI search is rising, Google's facing these
                                  huge legal challenges over its dominance.
                                  Yeah, rulings saying they have an illegal
                                  monopoly in search and ad tech. That's the
                                  gist of it. The courts basically found that
                                  Google's linking of search with Chrome, its ad
                                  network, its analytics, it stifles
                                  competition. Same goes for its control over
                                  the ad tech market. And the harm alleged is
                                  less innovation, higher costs. Less
                                  innovation, potentially higher ad costs
                                  trickling down, fewer choices for consumers
                                  and businesses. That's the argument.
                                </p>

                                <p>
                                  (5:29 - 6:03)
                                  <br />
                                  So what are the proposed fixes? I heard
                                  something about Chrome. That's a big one. The
                                  Department of Justice is pushing for Google to
                                  divest Chrome, to sell it off. Why Chrome
                                  specifically? The reasoning is that Chrome is
                                  a significant gateway to search. It feeds
                                  Google tons of user data, which improves its
                                  search results and ads, creating this feedback
                                  loop that competitors can't match. It's a
                                  direct pipeline of user data, as they put it.
                                  So breaking that link would theoretically
                                  level the playing field a bit. That's the
                                  idea. Other remedies are on the table, too,
                                  like banning those exclusive default search
                                  deals. You know, the one where Google pays
                                  Apple billions? Ah, yeah, the reported $20
                                  billion a year deal to be the default on
                                  iPhones. Exactly. That's seen as exclusionary.
                                </p>

                                <p>
                                  (6:03 - 6:50)
                                  <br />
                                  They're also talking about forcing Google to
                                  share some data, and regulating its future AI
                                  investments to prevent them from just
                                  cornering that market, too. It's fascinating.
                                  Imagine setting up a new phone and actually
                                  getting a real choice of search engines. It
                                  could happen. And you heard about OpenAI,
                                  right? The ChatGPT folks. What about them?
                                  There were reports they expressed interest in
                                  buying Chrome if Google was forced to sell.
                                  Really? Wow. That shows how valuable
                                  controlling the browser is seen, even in this
                                  new AI era. Absolutely. It's prime real estate
                                  for distributing AI search tools. But we need
                                  to be cautious here. Why so? Google plans to
                                  appeal. And history shows big antitrust cases
                                  don't always end in breakups. Remember the
                                  Microsoft case? True. It took years. And the
                                  outcome wasn't a full split. So this could
                                  drag on, and the final result is uncertain.
                                  Exactly. Lots of uncertainty.
                                </p>

                                <p>
                                  (6:50 - 7:18)
                                  <br />
                                  Okay, so uncertainty from the legal side.
                                  Massive disruption from the AI side. Let's
                                  bring it back to the people listening. The
                                  content marketers, SEO pros, inbound
                                  specialists. What do we do? Right. The
                                  practical steps. It feels like we need a new
                                  playbook. Maybe something like Generative
                                  Engine Optimization. Even if that term isn't
                                  official yet. Oh, I like it. GEO.
                                </p>

                                <p>
                                  (7:18 - 8:16)
                                  <br />
                                  So what goes into GEO? Well, some fundamentals
                                  probably don't change. Website performance,
                                  for instance. Speed, reliability, usability.
                                  That still matters hugely. Maybe even more
                                  now. If AI bots are crawling your site.
                                  Exactly. If an AI crawler hits a slow or buggy
                                  site, it's not going to get the data it needs
                                  right. So technical excellence is a baseline.
                                  Makes sense. And what else? There was a call
                                  for transparency from the AI companies. Yes,
                                  that's crucial. We need to understand how
                                  these AI engines are indexing and ranking
                                  content. Without that, optimizing is just
                                  guesswork. OK, but until we get that
                                  transparency, what can we lean on? We can
                                  definitely lean on established best practices
                                  for quality. Think about high-value content.
                                  Creating stuff that genuinely helps your
                                  audience. Like the Backlinko approach. Really
                                  deep, authoritative articles. Precisely. That
                                  kind of comprehensive, trustworthy content is
                                  likely what AI algorithms will favor too. It
                                  aligns with things like Google's EEAT
                                  guidelines. Experience, expertise,
                                  authoritativeness, trustworthiness. Right,
                                  showing you know your stuff, backing it up,
                                  being clear. That resonates whether it's a
                                  person or an AI reading it first. Absolutely.
                                  Unique insights, data-backed claims, clarity.
                                  That seems like a solid bet. Content that
                                  truly answers the underlying query well. OK,
                                  good content is key.
                                </p>

                                <p>
                                  (8:16 - 9:09)
                                  <br />
                                  What about data? I keep hearing about the
                                  cookie-less future. How does that fit in? It
                                  fits in perfectly, actually. As third-party
                                  cookies fade out, understanding your audience
                                  relies more on data you collect directly.
                                  First-party data. First-party data, yes, info
                                  users give you on your site or app. And even
                                  zero-party data. Zero-party, what's that?
                                  That's data customers intentionally share with
                                  you. Like preferences in a survey, quiz
                                  results, choices they make in their account
                                  settings. Oh, OK, so it's explicitly given.
                                  Exactly. And to get that kind of data, you
                                  need trust. Which brings us back to
                                  relationships. Especially client relationships
                                  for agencies and consultants. Absolutely.
                                  Building strong, direct relationships is
                                  becoming paramount.
                                </p>

                                <p>
                                  (9:09 - 10:16)
                                  <br />
                                  You need to understand their business deeply.
                                  Not just the hard metrics, but the soft stuff
                                  too. Team dynamics, company culture. Treating
                                  clients like true partners. Yes. When you have
                                  that partnership, gathering that valuable
                                  first-party and zero-party data becomes much
                                  easier and more natural. You can use it
                                  ethically to personalize experiences. Like
                                  using past purchase data, bestsellers, new
                                  arrivals for recommendations, instead of
                                  tracking them across the web. Exactly that. Or
                                  using survey responses to tailor content. It's
                                  about leveraging the information you're given
                                  permission to use. And this ties into privacy
                                  concerns too, right? People are more aware.
                                  Definitely. We're seeing the rise of
                                  privacy-focused analytics tools as
                                  alternatives to Google Analytics. Tools that
                                  don't use cookies or collect personal data.
                                  It's a clear trend. So strong client
                                  relationships aren't just good for business
                                  retention. No, they're becoming strategically
                                  vital for your data strategy in this new era.
                                </p>

                                <p>
                                  (10:16 - 11:25)
                                  <br />
                                  Which means communication is key. Being
                                  proactive, sharing ideas, warning clients
                                  about big platform shifts like this AI stuff.
                                  Couldn't agree more. That proactive
                                  communication builds immense trust. Keeping
                                  clients in the loop about these AI search
                                  changes is essential right now. And showing
                                  empathy, right? Even if your campaign metrics
                                  look good, if the client is facing broader
                                  business challenges, you need to be a partner,
                                  not just a vendor focused on numbers. That's
                                  so important. Empathy over defensiveness. It
                                  fosters that long-term collaborative
                                  relationship you need to navigate these
                                  uncertain times together.
                                </p>

                                <p>
                                  (11:25 - 11:48)
                                  <br />
                                  Okay, so wrapping up. It feels like the core
                                  principles haven't vanished. Understand your
                                  audience, provide value, build trust. Those
                                  are timeless. But how we do that, the tools,
                                  the platforms. That's changing fundamentally.
                                  AI isn't just another tool. It's reshaping the
                                  whole information landscape. It really is.
                                  Which leads to, I think, a really important
                                  thought for everyone listening. As AI
                                  increasingly becomes this primary gateway to
                                  information, how do your strategies need to
                                  change? Not just for reaching humans, but for
                                  engaging with and being recognized by these
                                  new AI gatekeepers. It's not just human
                                  optimization anymore. Exactly. How do you
                                  build a future-proof strategy that really
                                  embraces this? Not just reacts to it, but
                                  actively works with it. That's definitely
                                  something to chew on. How to be valuable, not
                                  just to people, but to the AI that connects
                                  people to information. It's a significant
                                  challenge and opportunity looking ahead.
                                  Absolutely.
                                </p>

                                <p>
                                  (11:48 - 12:31)
                                  <br />
                                  Thank you for joining us for this insightful
                                  podcast. We'll definitely keep watching these
                                  developments. Stay tuned for future
                                  discussions as things evolve. That's a wrap
                                  for this episode of Conquer AI Search with AI.
                                  Thanks for tuning in and being a part of our
                                  journey to explore the evolving world of
                                  AI-powered search. We hope you found today's
                                  discussion insightful and walked away with
                                  something new to think about. If you enjoyed
                                  the episode, don't forget to follow, share, or
                                  leave us a review. It truly helps us connect
                                  with more people navigating this exciting
                                  digital landscape. For even more in-depth
                                  content, be sure to check out AI Monitor's
                                  website, where you'll find a wealth of
                                  resources and analysis on the latest AI
                                  trends. Until next time, keep exploring, keep
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
                                    episode #4 11 Actionable Ways to Build
                                    Client Relationships That Last - WordStream:
                                    <a
                                      href="https://www.wordstream.com/blog/ws/2021/06/21/build-client-relationships"
                                      className="text-blue"
                                      target="_blank"
                                    >
                                      https://www.wordstream.com/blog/ws/2021/06/21/build-client-relationships
                                    </a>
                                  </li>
                                  <li className="mt-2">
                                    AI And The Future Of Search: How We Broke
                                    The Web And What Comes Next - Forbes:
                                    <a
                                      href="https://bestofai.com/article/ai-and-the-future-of-search-how-we-broke-the-web-and-what-comes-next"
                                      className="text-blue"
                                      target="_blank"
                                    >
                                      https://bestofai.com/article/ai-and-the-future-of-search-how-we-broke-the-web-and-what-comes-next
                                    </a>
                                  </li>
                                  <li className="mt-2">
                                    Google antitrust case explained: What's
                                    next? - TechTarget:
                                    <a
                                      href="https://www.techtarget.com/whatis/feature/Google-antitrust-case-explained"
                                      className="text-blue"
                                      target="_blank"
                                    >
                                      https://www.techtarget.com/whatis/feature/Google-antitrust-case-explained
                                    </a>
                                  </li>

                                  <li className="mt-2">
                                    Google on trial: The future of Chrome, AI,
                                    search, and the internet | Mashable:
                                    <a
                                      href="https://sea.mashable.com/tech/37360/google-on-trial-the-future-of-chrome-ai-search-and-the-internet"
                                      className="text-blue"
                                      target="_blank"
                                    >
                                      https://sea.mashable.com/tech/37360/google-on-trial-the-future-of-chrome-ai-search-and-the-internet
                                    </a>
                                  </li>
                                  <li className="mt-2">
                                    How a Google “Breakup” Could Affect Your
                                    Marketing | Navitas Blog:
                                    <a
                                      href="https://navitasmarketing.com/blog/"
                                      className="text-blue"
                                      target="_blank"
                                    >
                                      https://navitasmarketing.com/blog/
                                    </a>
                                  </li>
                                  <li className="mt-2">
                                    How to prepare for and succeed in the
                                    cookieless marketing era - Insider:
                                    <a
                                      href="https://useinsider.com/cookieless-marketing/"
                                      className="text-blue"
                                      target="_blank"
                                    >
                                      https://useinsider.com/cookieless-marketing/
                                    </a>
                                  </li>
                                  <li className="mt-2">
                                    Inbound Marketing in 2025: Benefits,
                                    Strategies, and Examples - Backlinko:
                                    <a
                                      href="https://backlinko.com/inbound-marketing"
                                      className="text-blue"
                                      target="_blank"
                                    >
                                      https://backlinko.com/inbound-marketing
                                    </a>
                                  </li>
                                  <li className="mt-2">
                                    OpenAI Interested in Buying Google Chrome,
                                    Says ChatGPT Product Head | AIM Media House:
                                    <a
                                      href="https://analyticsindiamag.com/ai-news-updates/openai-interested-in-buying-google-chrome-says-chatgpt-product-head/"
                                      className="text-blue"
                                      target="_blank"
                                    >
                                      https://analyticsindiamag.com/ai-news-updates/openai-interested-in-buying-google-chrome-says-chatgpt-product-head/
                                    </a>
                                  </li>
                                  <li className="mt-2">
                                    OpenAI signals interest in buying Google’s
                                    Chrome if breakup is ordered: ChatGPT exec
                                    testifies - The Economic Times:
                                    <a
                                      href="https://m.economictimes.com/tech/technology/openai-would-buy-googles-chrome-exec-testifies-at-trial/articleshow/120534980.cms"
                                      className="text-blue"
                                      target="_blank"
                                    >
                                      https://m.economictimes.com/tech/technology/openai-would-buy-googles-chrome-exec-testifies-at-trial/articleshow/120534980.cms
                                    </a>
                                  </li>
                                  <li className="mt-2">
                                    Will the Google Breakup Affect SEO and
                                    Content Marketing?:
                                    <a
                                      href="https://www.blink-tech.com/google/google-breakup-affect-seo-content-marketing/"
                                      className="text-blue"
                                      target="_blank"
                                    >
                                      https://www.blink-tech.com/google/google-breakup-affect-seo-content-marketing/
                                    </a>
                                  </li>
                                  <li className="mt-2">
                                    Simple Analytics: The privacy-first Google
                                    Analytics alternative:
                                    <a
                                      href="https://simpleanalytics.com/freemium?ref=highsignal.io"
                                      className="text-blue"
                                      target="_blank"
                                    >
                                      https://simpleanalytics.com/freemium?ref=highsignal.io
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

"use client";
// import Toc from "./Toc";
import RelatedBlogs from "../blogs/RelatedBlogs";
import Image from "next/image";
import Link from "next/link";
import { Gallery, Item } from "react-photoswipe-gallery";
import { useState } from "react";
import Blog1Faqs from "../blogs/faqs/Blog1Faqs";
import GEOCourseCTA from "@/components/common/GeoCTA";

export default function StopWritingforRobots({ blogItem }) {
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
                  Stop Writing for Robots: How to Create Content AI and Humans
                  Will Love
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
                    src="https://www.youtube.com/embed/YMuQpsLjFik?si=w7NTBU9VRrNppH0i"
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
                            EP#15 Generative Engine Optimization Podcast
                            |Quality Content in an AI World: Stop Writing for
                            Robots
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
                        src="https://audio.getaimonitor.com/ConquerAISearchWithAI/EP-15-Final-Audio.mp3"
                      ></audio>
                      {/* </figure> */}
                      <hr className="w-100 m-0 d-block mt-4" />
                    </div>
                    <p className="mt-2">Also Available on:</p>
                    <div className="d-none lg:d-block">
                      <div className="hstack gap-4 mt-2 justify-center">
                        <a
                          href="https://open.spotify.com/episode/1Z8fjrWhyoXpp5x1YUa7tA?si=-0gMKvLoRdeKsSOS5Vo1yw"
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
                          href="https://music.amazon.com/podcasts/638df449-1fbd-497d-a145-5315d8541611/episodes/e0262791-ba8c-437d-9cef-f5d1ff63bca1/conquer-ai-search-with-ai-ep-15-generative-engine-optimization-podcast-quality-content-in-an-ai-world-stop-writing-for-robots"
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
                        <a href="https://podcasts.apple.com/in/podcast/ep-15-generative-engine-optimization-podcast-quality/id1806802986?i=1000716956140">
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
                        <a href="https://youtu.be/YMuQpsLjFik?si=-iQtmmTH5AbM5ZcL">
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
                        {/* <a href="">
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
                        <a href="https://pca.st/saae8v64">
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
                        <a href="https://castro.fm/episode/Y9EzoT">
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
                          href="https://open.spotify.com/episode/1Z8fjrWhyoXpp5x1YUa7tA?si=hEYKJW46R2KBfzLwbk3uYQ"
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
                          href="https://music.amazon.com/podcasts/638df449-1fbd-497d-a145-5315d8541611/episodes/e0262791-ba8c-437d-9cef-f5d1ff63bca1/conquer-ai-search-with-ai-ep-15-generative-engine-optimization-podcast-quality-content-in-an-ai-world-stop-writing-for-robots"
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
                        <a href="https://podcasts.apple.com/in/podcast/ep-15-generative-engine-optimization-podcast-quality/id1806802986?i=1000716956140">
                          <div className="bg-white rounded-pill hstack gap-1 py-1 px-2 max-w-fc">
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
                        <a href="https://youtu.be/YMuQpsLjFik?si=-iQtmmTH5AbM5ZcL">
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
                                  🎙️ Conquer AI Search – Episode 15: Quality
                                  Content in an AI World
                                </h3>
                                <ol className="fs-5">
                                  <li>0:00 – Intro</li>
                                  <li>0:36 – Why quality content matters</li>
                                  <li>1:35 – EEAT & trust signals</li>
                                  <li>3:00 – HubSpot’s content strategy</li>
                                  <li>
                                    5:15 – Writing for LLMs (ChatGPT etc.)
                                  </li>
                                  <li>6:30 – Using AI tools smartly</li>
                                  <li>7:30 – Transparency & updates</li>
                                  <li>9:00 – Technical AI optimization</li>
                                  <li>
                                    13:50 – Getting into AI recommendations
                                  </li>
                                  <li>15:40 – Content metrics in the AI era</li>
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
                                      Stop Writing for Robots: How to Create
                                      Content AI and Humans Will Love
                                    </h2>
                                    <p className="">
                                      <b>Let’s be honest for a second.</b>{" "}
                                      <br />
                                      For years, we’ve been told to write
                                      “quality content.” But no one really
                                      explained what that meant.
                                    </p>
                                    <p className="mt-3">
                                      And now? Just when we thought we figured
                                      it out — boom — AI enters the chat.
                                      ChatGPT, Perplexity, Google’s AI
                                      Overviews… Suddenly, search doesn’t work
                                      the way it used to. And neither does
                                      content.
                                    </p>
                                    <p className="mt-3">
                                      In this episode of Conquer AI Search,
                                      Katherine and the AI Monitor team break
                                      down what quality content actually looks
                                      like now, in the age of AI. Spoiler: It’s
                                      not about tricking algorithms. It’s about
                                      showing up with real value, real insight,
                                      and real personality.
                                    </p>
                                    <p className="mt-3">Let’s unpack it.</p>
                                    <h2 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                                      So... What Even Is Quality Content
                                      Anymore?
                                    </h2>
                                    <p>
                                      <b>Here’s the heart of it:</b>
                                      <br />
                                      <b>
                                        Good content today needs to do two
                                        things:
                                      </b>{" "}
                                      help your audience and help your business.
                                      That hasn’t changed.
                                    </p>
                                    <p className="mt-3">
                                      What has changed is how content gets
                                      found. AI tools are starting to behave
                                      more like your favorite librarian — not
                                      just listing titles, but recommending
                                      what’s truly helpful.
                                    </p>
                                    <p className="mt-3">
                                      So, your content needs to be:
                                    </p>
                                    <ul className="mt-2">
                                      <li>Clear</li>
                                      <li>Genuine</li>
                                      <li>Deep</li>
                                      <li>Human</li>
                                    </ul>
                                    <p className="mt-3">
                                      Forget keyword stuffing. This is about
                                      becoming the answer, not just another
                                      link.
                                    </p>
                                    <h2 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                                      Let’s Talk EEAT: The Content Credibility
                                      Formula
                                    </h2>
                                    <p>EEAT stands for:</p>
                                    <ul className="mt-2">
                                      <li>Experience</li>
                                      <li>Expertise</li>
                                      <li>Authoritativeness</li>
                                      <li>Trustworthiness</li>
                                    </ul>
                                    <p className="mt-3">
                                      It’s not just Google’s thing anymore. AI
                                      tools now use similar signals to figure
                                      out if your content is worth showing.
                                    </p>
                                    <p className="mt-3">
                                      So, if you’re a real expert, show it.{" "}
                                      <br /> Have experience? Tell the story.
                                      <br /> Have credentials? Put them on the
                                      page.
                                    </p>
                                    <p className="mt-3">
                                      People (and AIs) want to know they can
                                      trust you.
                                    </p>
                                    <h2 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                                      Topic Clusters Random Keywords
                                    </h2>
                                    <p>
                                      Old SEO advice: “Target long-tail
                                      keywords!”
                                    </p>
                                    <p className="mt-3">
                                      New GEO advice:{" "}
                                      <b>
                                        “Become the go-to authority on a
                                        specific topic.”
                                      </b>
                                    </p>
                                    <p className="mt-3">
                                      HubSpot crushed this by literally deleting
                                      popular posts that didn’t fit their core
                                      focus. Like a viral post about how to type
                                      the shrug emoji 🙃. Gone. Why? Because it
                                      didn’t help their authority in sales,
                                      marketing, or service.
                                    </p>
                                    <p className="mt-3">
                                      <b>Takeaway:</b> Prune ruthlessly. Own
                                      your niche.
                                    </p>
                                    <h2 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                                      AI Can’t Replace You — So Stop Writing
                                      Like It
                                    </h2>
                                    <p>
                                      Here’s the truth: AI can write blog posts.
                                      But it can’t feel. It doesn’t have your
                                      perspective, your voice, your lived
                                      experiences.
                                    </p>
                                    <p className="mt-3">
                                      That’s your unfair advantage.
                                    </p>
                                    <p className="mt-3">
                                      One of HubSpot’s wildest experiments?
                                      Adding personal stories to their posts
                                      boosted clickthroughs by 724%.
                                      <br /> Real voice. Real stories. Real
                                      results.
                                    </p>
                                    <h2 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                                      You’re Not Just Writing for Google Anymore
                                    </h2>
                                    <p>
                                      Here’s something wild: <br />
                                      <b>
                                        2 out of 3 LLM users now treat tools
                                        like ChatGPT as search engines.
                                      </b>
                                    </p>
                                    <p>Which means:</p>
                                    <ul className="mt-2">
                                      <li>
                                        Your content might show up in
                                        AI-generated answers
                                      </li>
                                      <li>
                                        YouTube videos can now appear in ChatGPT
                                        search
                                      </li>
                                      <li>
                                        The “timing” of your content matters
                                        more than ever
                                      </li>
                                    </ul>
                                    <p className="mt-2">
                                      Lesson: Don’t just “publish.” Publish
                                      smart. Be early. Go deep. Choose platforms
                                      AI trusts (like YouTube, Reddit, or
                                      Substack).
                                    </p>
                                    <h2 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                                      Use AI as Your Sidekick, Not Your
                                      Ghostwriter
                                    </h2>
                                    <p>
                                      Yes, use GPT to brainstorm. <br />
                                      Yes, use tools to speed things up.
                                      <br /> But{" "}
                                      <b>don’t hand over the whole keyboard.</b>
                                    </p>
                                    <p className="mt-2">
                                      Great content still needs you — your
                                      thinking, your judgment, your style. Think
                                      of AI like a writing partner, not a
                                      content vending machine.
                                    </p>
                                    <p className="mt-2">
                                      If your blog sounds like it came from a
                                      robot, people (and AI) will notice.
                                    </p>
                                    <h2 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                                      Do Your Own Research (Literally)
                                    </h2>
                                    <p>
                                      Want to stand out? <br />
                                      <b>
                                        {" "}
                                        Bring something new to the table.
                                      </b>{" "}
                                      Run surveys. Share internal data.
                                      Interview customers. <br />
                                      Even a single original insight can set
                                      your content apart.
                                    </p>
                                    <p className="mt-2">
                                      Why? Because original research =
                                      credibility gold. People link to it. AI
                                      surfaces it. And your brand becomes the
                                      source, not the echo.
                                    </p>{" "}
                                    <h2 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                                      Radical Transparency Wins
                                    </h2>
                                    <p>
                                      One of the boldest moves? HubSpot’s team
                                      openly blogged about their own traffic
                                      drop. Not only did it build massive trust,
                                      it became one of their top-performing
                                      posts ever.
                                    </p>
                                    <p className="mt-2">
                                      Lesson: People trust people who tell the
                                      truth — even the messy parts.
                                    </p>
                                    <h2 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                                      Don’t Sleep on Tech Stuff: Your AI
                                      Visibility Depends on It
                                    </h2>
                                    <p>
                                      Here’s a quick checklist to help AI
                                      understand your content:
                                    </p>
                                    <ul className="mt-2">
                                      <li>
                                        ✅ Add schema markup (especially FAQ,
                                        How-To, Video)
                                      </li>
                                      <li>
                                        ✅ Speed up your site and make it
                                        mobile-friendly
                                      </li>
                                      <li>
                                        ✅ Use sitemaps, transcripts, and
                                        timestamps
                                      </li>
                                      <li>
                                        ✅ Keep your internal linking clean
                                      </li>
                                      <li>
                                        ✅ Show author bios and credentials
                                      </li>
                                      <li>
                                        ✅ Let GPT-bot and other AI crawlers
                                        access your site
                                      </li>
                                    </ul>
                                    <p className="mt-2">
                                      Think of it like this: If your site is a
                                      party, you want the AI bots to find the
                                      front door, read the name tags, and leave
                                      with something memorable.
                                    </p>
                                    <h2 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                                      Want to Show Up in AI Recommendation
                                      Lists? Here’s How:
                                    </h2>
                                    <p>
                                      You know when ChatGPT recommends “top
                                      tools for X”? That’s not random.
                                    </p>
                                    <p className="mt-2">
                                      To get there, you need:
                                    </p>
                                    <ul>
                                      <li>
                                        Useful blog content about your space
                                      </li>
                                      <li>Clear messaging on your own site</li>
                                      <li>
                                        Strong reviews on G2, Trustpilot, etc.
                                      </li>
                                      <li>
                                        Mentions in credible forums (Reddit,
                                        LinkedIn)
                                      </li>
                                    </ul>
                                    <p>
                                      It’s about building{" "}
                                      <b>contextual relevance.</b>
                                      Be known for something specific, and the
                                      AI will take note.
                                    </p>
                                    <h2 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                                      Track the Right Stuff
                                    </h2>
                                    <p>
                                      Pageviews are great, but here’s what
                                      matters more now:
                                    </p>
                                    <ul>
                                      <li>Who’s visiting from AI tools</li>
                                      <li>
                                        If your brand shows up in AI answers
                                      </li>
                                      <li>Scroll depth + time on page</li>
                                      <li>Branded search volume rising</li>
                                      <li>
                                        Backlinks from AI-generated summaries
                                      </li>
                                      <li>
                                        Misrepresentations (AIs getting your
                                        brand wrong — yes, that’s a thing now)
                                      </li>
                                    </ul>
                                    <p>
                                      The better you track, the better you
                                      adapt.
                                    </p>
                                    <h2 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                                      The Bottom Line: SEO Isn’t Dead — It’s
                                      Growing Up
                                    </h2>
                                    <p>
                                      Yes, AI search is shaking things up.
                                      Google Overviews are real. Traffic might
                                      dip.
                                    </p>
                                    <p className="mt-2">
                                      But this isn’t the end — it’s an
                                      evolution.
                                    </p>
                                    <p className="mt-2">
                                      <b>
                                        🎯 Write deeper. <br />
                                        🎯 Say something real. <br />
                                        🎯 Diversify your platforms. <br />
                                        🎯 Adapt for AI — don’t fear it.
                                      </b>
                                    </p>
                                    <p>
                                      In a world flooded with auto-generated
                                      content, your human voice is your biggest
                                      strength. And that’s how you conquer AI
                                      search.
                                    </p>
                                    <p className="mt-4">
                                      Want more insights like this?
                                      <br /> 🎧 Catch the full podcast episode
                                      on Conquer AI Search — streaming on
                                      Spotify, Apple, YouTube, and everywhere
                                      else.
                                    </p>
                                    <p className="mt-4">
                                      Got questions? Drop them in the comments
                                      or tag us online. We’d love to keep the
                                      conversation going.
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
                                  (0:05 - 0:16)
                                  <br />
                                  Welcome back to Conquer AI Search, your
                                  essential guide for navigating this crazy,
                                  fast-moving world of AI search. I'm Katherine
                                  and I'm here with my colleague from the AI
                                  Monitor team. Great to be here.
                                </p>

                                <p>
                                  (0:21 - 0:36)
                                  <br />
                                  So we're on this mission together, right?
                                  Equipping you with the top 11 most effective
                                  generative engine optimization techniques.
                                  GEO, or you might know it as AI Optimization.
                                  We've already covered six really crucial
                                  strategies.
                                </p>

                                <p>
                                  (0:36 - 0:48)
                                  <br />
                                  Things like LLMs.txt file, using Reddit,
                                  authoritative citations, evolving SEO, the
                                  importance of PR, and readability. That's
                                  right, a lot of ground covered. Exactly.
                                </p>

                                <p>
                                  (0:49 - 1:02)
                                  <br />
                                  So today we're jumping into technique number
                                  seven. How to actually create quality content
                                  that AI systems recognize to boost your GEO or
                                  maybe answer engine optimization, AEO. And
                                  this isn't just, you know, ticking boxes for
                                  algorithms.
                                </p>

                                <p>
                                  (1:02 - 1:15)
                                  <br />
                                  It's really about making your content
                                  genuinely valuable, especially now in this
                                  AI-first landscape. You've really hit on
                                  something key there. For like the longest
                                  time, quality content just felt like this
                                  vague buzzword, didn't it? Totally, yeah.
                                </p>

                                <p>
                                  (1:15 - 1:35)
                                  <br />
                                  But now, with things like AI overviews and
                                  these generative engines really shaping search
                                  results, it actually has, you know, real
                                  concrete implications for your visibility.
                                  It's a fascinating shift, honestly. And we've
                                  pulled together some pretty powerful insights
                                  today from top content strategists, market
                                  data, recent research.
                                </p>

                                <p>
                                  (1:35 - 1:48)
                                  <br />
                                  Should be good. Okay, let's unpack that then.
                                  When we say quality content now with AI in the
                                  mix, what does that actually, you know, look
                                  like? What does it mean? Well, at its heart,
                                  right, quality content always needs to do two
                                  things.
                                </p>

                                <p>
                                  (1:48 - 1:53)
                                  <br />
                                  Help your audience and help your business.
                                  That hasn't changed. It could be a blog post,
                                  a video, whatever.
                                </p>

                                <p>
                                  (1:53 - 2:06)
                                  <br />
                                  But specifically thinking about AI and search,
                                  and let's be honest, mostly Google's influence
                                  here, quality content is really tightly linked
                                  to their EEAT guidelines. Ah, EEAT, right.
                                  Remind us what that stands for again.
                                </p>

                                <p>
                                  (2:06 - 2:29)
                                  <br />
                                  Yeah, it's experience, expertise,
                                  authoritativeness, and trustworthiness. So
                                  Google's saying very clearly they want
                                  creators who show they have firsthand
                                  experience, real expertise, or they seem as
                                  reputable, a trusted source. And
                                  fundamentally, is the page itself, you know,
                                  accurate, honest, safe, and reliable? They
                                  even have actual humans, these search quality
                                  raters who manually check websites.
                                </p>

                                <p>
                                  (2:30 - 2:38)
                                  <br />
                                  Wow, okay. Yeah, it's to make sure their
                                  algorithms are actually promoting helpful,
                                  reliable, genuinely people-first content. It's
                                  a huge signal.
                                </p>

                                <p>
                                  (2:38 - 2:44)
                                  <br />
                                  Write for people first. Don't just try to game
                                  the system. Okay, so it really boils down to
                                  genuine value for the human reading it.
                                </p>

                                <p>
                                  (2:44 - 3:12)
                                  <br />
                                  But why is this specific focus so critical,
                                  like right now, for websites and businesses?
                                  Because without it, honestly, your site just
                                  won't pull in as much traffic, especially
                                  organic search traffic or answers that get
                                  generated by AI tools like ChatGPT. The more
                                  quality stuff you have, the more shots you
                                  have at ranking, gaining influence, and
                                  importantly, building trust with your
                                  audience. You know, a strong online presence
                                  filled with valuable content, that fosters
                                  that connection.
                                </p>

                                <p>
                                  (3:12 - 3:20)
                                  <br />
                                  And I assume that connection then feeds
                                  directly into actual business goals. Oh,
                                  absolutely. Quality content, ultimately, is
                                  what drives traffic.
                                </p>

                                <p>
                                  (3:20 - 3:26)
                                  <br />
                                  It generates leads. It turns prospects into
                                  customers. There's this great example of Noah
                                  Greenberg, the CEO of Stacker.
                                </p>

                                <p>
                                  (3:27 - 3:43)
                                  <br />
                                  He became a HubSpot customer five years after
                                  first encountering their content, not because
                                  of a sales pitch, but because they were just
                                  consistently putting out valuable stuff. It
                                  really shows the long game aspect of content,
                                  building influence over time. That really
                                  makes sense, the long game.
                                </p>

                                <p>
                                  (3:43 - 3:59)
                                  <br />
                                  Okay, so if we're looking for actionable
                                  steps, the keys to actually writing this
                                  quality content now, in the age of AI, where
                                  do we start? I know our sources pointed to
                                  some really good advice from HubSpot
                                  strategists. Yeah, this is where it gets
                                  really practical. HubSpot's approach gives a
                                  pretty clear roadmap.
                                </p>

                                <p>
                                  (3:59 - 4:09)
                                  <br />
                                  One of their foundational ideas is to organize
                                  around topic clusters. Topic clusters, okay.
                                  Yeah, the whole idea of just ranking for
                                  random keywords, that's pretty much gone.
                                </p>

                                <p>
                                  (4:10 - 4:20)
                                  <br />
                                  Google now heavily figures what they call
                                  topical authority. The insight is, go deep.
                                  Become the recognized authority on a specific,
                                  fairly narrow niche.
                                </p>

                                <p>
                                  (4:20 - 4:29)
                                  <br />
                                  HubSpot did this. They actually split their
                                  huge blog into four separate properties,
                                  marketing, sales, service, and website. Oh,
                                  interesting.
                                </p>

                                <p>
                                  (4:29 - 4:42)
                                  <br />
                                  Yeah, and each one has its own tightly defined
                                  topic clusters. They even made the pretty bold
                                  move of deleting popular content that wasn't
                                  relevant. They had this super popular post on
                                  how to type the shrug emoji.
                                </p>

                                <p>
                                  (4:43 - 4:50)
                                  <br />
                                  Ha, I might've read that one. Right. But it
                                  got pruned, because it didn't align with their
                                  core expertise, even though it got traffic.
                                </p>

                                <p>
                                  (4:50 - 4:55)
                                  <br />
                                  It's all about signaling to Google that they
                                  are the authority in their chosen areas. That
                                  takes discipline. It does.
                                </p>

                                <p>
                                  (4:56 - 5:02)
                                  <br />
                                  And building on that authority, another huge
                                  insight is, lean into your humanity. It's your
                                  superpower. Okay, I like the sound of that.
                                </p>

                                <p>
                                  (5:02 - 5:14)
                                  <br />
                                  Yeah, AI can write text, sure, but it can't
                                  feel. It doesn't have lived experiences. Your
                                  unique perspective, your stories, the
                                  authority you've built over time, that's the
                                  stuff AI just can't replicate.
                                </p>

                                <p>
                                  (5:15 - 5:23)
                                  <br />
                                  It's your advantage. HubSpot writers are
                                  actually encouraged to inject personality,
                                  anecdotes. They even ran an experiment they
                                  call E-Sperience Soup.
                                </p>

                                <p>
                                  (5:23 - 5:32)
                                  <br />
                                  Experience Soup. Yeah, basically focusing on
                                  weaving in personal firsthand experience. And
                                  get this, it boosted clicks by something like
                                  724% on one test.
                                </p>

                                <p>
                                  (5:32 - 5:39)
                                  <br />
                                  Wow. So while AI can maybe simulate stuff, it
                                  just can't fake that genuine human touch.
                                  That's powerful.
                                </p>

                                <p>
                                  (5:40 - 5:53)
                                  <br />
                                  Makes the content feel more real, more
                                  trustworthy, too. How does this connect to how
                                  people are actually searching now? Directly
                                  ties into the next principle. Embrace the AI
                                  era by writing for LLM search, large language
                                  model search.
                                </p>

                                <p>
                                  (5:53 - 5:57)
                                  <br />
                                  Right, so thinking beyond just Google.
                                  Exactly. It's not just traditional SEO
                                  anymore.
                                </p>

                                <p>
                                  (5:57 - 6:07)
                                  <br />
                                  You need to think about influencing models
                                  like ChatGPT. There's an Elon University study
                                  found that two-thirds of LLM users are
                                  basically using them as search engines now.
                                  Two-thirds? Yeah.
                                </p>

                                <p>
                                  (6:08 - 6:31)
                                  <br />
                                  And HubSpot noticed their SVP of marketing,
                                  Kieran Flanagan, had a YouTube video about
                                  DeepSeek suddenly appearing in ChatGPT's
                                  results. Why that video? Well, because it was
                                  early, it went deep into the topic, and
                                  importantly, it was on YouTube, which seems to
                                  be a pretty strong signal for these LLMs. It
                                  tells us that timing, depth, and where your
                                  content lives matters more than ever for
                                  getting surfaced by AI.
                                </p>

                                <p>
                                  (6:31 - 6:36)
                                  <br />
                                  Timing, depth, platform. Got it. And speaking
                                  of AI.
                                </p>

                                <p>
                                  (6:36 - 6:41)
                                  <br />
                                  Right. They also stressed using AI as a
                                  catalyst, not a replacement. This is key.
                                </p>

                                <p>
                                  (6:41 - 6:54)
                                  <br />
                                  So how do you use it right? Well, the rule of
                                  thumb is, if AI isn't helping you create
                                  content faster or better, you're probably
                                  using it wrong. For example, Vasha Coleman at
                                  HubSpot built an AI agent. It identifies
                                  trending topics.
                                </p>

                                <p>
                                  (6:54 - 7:09)
                                  <br />
                                  Turned a four-hour manual weekly task into,
                                  like, less than two minutes a day. Nice
                                  efficiency gain. AI is brilliant at compiling
                                  information, analyzing data, but that human
                                  input, that's still essential for, you know,
                                  pushing the conversation forward, offering
                                  unique takes, applying critical judgment.
                                </p>

                                <p>
                                  (7:09 - 7:20)
                                  <br />
                                  So AI assists, but the human steers the ship.
                                  What about actually standing out from all the
                                  noise? There's so much content. That brings us
                                  to conducting original research.
                                </p>

                                <p>
                                  (7:20 - 7:23)
                                  <br />
                                  This is a huge differentiator. Makes sense.
                                  Unique data.
                                </p>

                                <p>
                                  (7:23 - 7:34)
                                  <br />
                                  Exactly. If you have unique data, maybe
                                  proprietary insights from your work, or fresh
                                  customer perspectives, you can own that space.
                                  HubSpot has a dedicated content innovation and
                                  research team.
                                </p>

                                <p>
                                  (7:34 - 7:48)
                                  <br />
                                  They're constantly doing surveys for their big
                                  industry reports, like this data marketing.
                                  That original data, it doesn't just make your
                                  blog post better, it becomes lead magnets. And
                                  crucially, other authoritative sites cite it,
                                  which boosts HubSpot's own authority even
                                  more.
                                </p>

                                <p>
                                  (7:48 - 7:57)
                                  <br />
                                  It's a virtuous cycle. That's smart. What else
                                  stands out in their approach? Another pretty
                                  bold strategy is, dare to give readers a peek
                                  behind the scenes.
                                </p>

                                <p>
                                  (7:57 - 8:02)
                                  <br />
                                  Basically practice radical transparency. Ooh,
                                  radical transparency. Sounds risky.
                                </p>

                                <p>
                                  (8:02 - 8:10)
                                  <br />
                                  It can feel that way. Few companies really
                                  commit to it. But these kinds of posts offer
                                  incredibly valuable, real tactical advice.
                                </p>

                                <p>
                                  (8:11 - 8:22)
                                  <br />
                                  HubSpot's blog is kind of famous for breaking
                                  down exactly how they achieve successes
                                  step-by-step. And even their failures. Like,
                                  their CMO openly talked about a blog traffic
                                  loss on a podcast.
                                </p>

                                <p>
                                  (8:22 - 8:30)
                                  <br />
                                  That conversation then became one of their
                                  most popular blog posts ever. No kidding.
                                  Yeah, because that kind of transparency builds
                                  massive trust.
                                </p>

                                <p>
                                  (8:31 - 8:39)
                                  <br />
                                  It provides unique, actionable insights you
                                  just don't get anywhere else. That level of
                                  openness definitely builds credibility. Okay,
                                  so they're creating all this great content.
                                </p>

                                <p>
                                  (8:40 - 8:51)
                                  <br />
                                  How do they keep it all fresh and effective?
                                  Good question. It's not just about pumping out
                                  new stuff. They actually dedicate a huge chunk
                                  of their writer's time, like 50 to 80% each
                                  month, just to updating old content.
                                </p>

                                <p>
                                  (8:51 - 8:55)
                                  <br />
                                  50 to 80%. Wow. Yeah, because those older
                                  pieces, they've aged.
                                </p>

                                <p>
                                  (8:55 - 9:10)
                                  <br />
                                  They've maybe already built up some authority
                                  and rank. So, refreshing them with new
                                  research, maybe some expert quotes, updated
                                  stories, it gives them a whole new lease on
                                  life. They found that these updates tend to be
                                  most effective for about six to nine months,
                                  especially in really fast-moving industries.
                                </p>

                                <p>
                                  (9:11 - 9:17)
                                  <br />
                                  Interesting time frame. And what about the
                                  flip side? Content that's not working. Ah,
                                  yes, the painful part.
                                </p>

                                <p>
                                  (9:18 - 9:23)
                                  <br />
                                  Prune your low performers. You know the
                                  phrase, kill your darlings in writing. It's
                                  like that.
                                </p>

                                <p>
                                  (9:23 - 9:35)
                                  <br />
                                  But for content, deleting stuff that isn't
                                  performing is actually crucial for staying
                                  competitive and focusing your resources.
                                  HubSpot has apparently removed thousands of
                                  pages after doing content audits. Thousands.
                                </p>

                                <p>
                                  (9:36 - 9:46)
                                  <br />
                                  Yeah, it lets them focus on the content that
                                  really aligns with their current strategy.
                                  They have a framework for it. Look at the
                                  content type, how fresh it is, its organic
                                  potential, and then decide.
                                </p>

                                <p>
                                  (9:46 - 9:52)
                                  <br />
                                  Keep it, optimize it, recycle it, or prune it.
                                  Keep, optimize, recycle, prune, K-O-R-E-P. Got
                                  it.
                                </p>

                                <p>
                                  (9:52 - 9:59)
                                  <br />
                                  Any final big tips from them? Yeah, two more
                                  key things. First, the obvious but essential.
                                  Keep up with SEO updates.
                                </p>

                                <p>
                                  (10:00 - 10:13)
                                  <br />
                                  The search world changes constantly, so
                                  following blogs, social media, thought leaders
                                  is just non-negotiable. And second, maybe even
                                  more importantly now, diversify and unify your
                                  content channels. People aren't just reading
                                  blogs anymore, just watching YouTube.
                                </p>

                                <p>
                                  (10:13 - 10:15)
                                  <br />
                                  They're everywhere. Right. Got to meet them
                                  where they are.
                                </p>

                                <p>
                                  (10:16 - 10:27)
                                  <br />
                                  Exactly. HubSpot Media really leaned into
                                  unifying content across their blog, YouTube,
                                  newsletter, podcast. So maybe a YouTube video
                                  becomes a podcast episode, which then informs
                                  a blog post.
                                </p>

                                <p>
                                  (10:27 - 10:37)
                                  <br />
                                  They call it the video flywheel effect. And
                                  the results were pretty stunning. One period,
                                  their YouTube views shot up 84% year over
                                  year, and leads from YouTube jumped 91%.
                                </p>

                                <p>
                                  (10:37 - 10:48)
                                  <br />
                                  Shows the power of making channels work
                                  together. OK, that makes a ton of sense. Now,
                                  shifting gears slightly, beyond the content
                                  creation itself, you mentioned there's a
                                  technical side to optimizing for AI, right?
                                  And it's different from old school SEO.
                                </p>

                                <p>
                                  (10:49 - 11:04)
                                  <br />
                                  That's exactly right. It's not about the
                                  traditional signals we obsessed over, like
                                  backlinks or keyword density so much. It's
                                  more about how you structure your content and
                                  how you make it visible and understandable to
                                  AI crawlers.
                                </p>

                                <p>
                                  (11:04 - 11:18)
                                  <br />
                                  How so? How do these AI search engines work
                                  differently? Well, think about ChatGPT,
                                  Claude, Gemini, Perplexity, Copilot. They
                                  operate fundamentally differently than, say,
                                  Google's traditional index. They synthesize
                                  information.
                                </p>

                                <p>
                                  (11:19 - 11:31)
                                  <br />
                                  They draw from these massive training data
                                  sets, but also access the web in real time.
                                  They're prioritizing things like statistical
                                  relevance, how often concepts are mentioned
                                  together in context, and just sheer clarity.
                                  It's a different way of understanding content.
                                </p>

                                <p>
                                  (11:31 - 11:40)
                                  <br />
                                  OK, so technically, how do we make our content
                                  ready for that kind of understanding? All
                                  right, here's some key technical steps. First,
                                  structured data and schema markup. This is
                                  huge.
                                </p>

                                <p>
                                  (11:40 - 11:49)
                                  <br />
                                  Like for recipes and stuff. Yeah, but much
                                  broader now for AI. Using schema types like
                                  how-to, FAQ page, product, article review,
                                  video object, breadcrumbs.
                                </p>

                                <p>
                                  (11:50 - 12:04)
                                  <br />
                                  It basically helps AI interpret and summarize
                                  your content accurately. It's like giving the
                                  AI a labeled diagram of your page. Support
                                  content, for instance, often gets cited in AI
                                  answers because it tends to be really well
                                  structured with things like FAQs.
                                </p>

                                <p>
                                  (12:04 - 12:11)
                                  <br />
                                  Makes sense. Give the AI clear labels. What
                                  else? Second, you need to explicitly weave
                                  EEAT into your site architecture.
                                </p>

                                <p>
                                  (12:11 - 12:13)
                                  <br />
                                  AI can't guess. Make it obvious. Exactly.
                                </p>

                                <p>
                                  (12:14 - 12:19)
                                  <br />
                                  Display author bios clearly show their
                                  credentials. Include expert commentary. Be
                                  transparent about your sources.
                                </p>

                                <p>
                                  (12:19 - 12:25)
                                  <br />
                                  Have dedicated trust pages, pricing, security
                                  info, support contacts. Make the trust signals
                                  visible on the site. OK.
                                </p>

                                <p>
                                  (12:25 - 12:43)
                                  <br />
                                  What about letting the AI bots in? All right.
                                  Third is managing your crawl settings and
                                  GPT-bot access. You need to make sure the
                                  relevant AI bots like GPT-bot for chat GPT,
                                  CloudBot, Google Extended for Google's AI
                                  stuff, CC-bot for Common Call can actually
                                  access your important public content.
                                </p>

                                <p>
                                  (12:43 - 12:54)
                                  <br />
                                  There's this proposed LLM.txt standard, kind
                                  of like Robots.txt but for AI training. But
                                  honestly, the major models aren't really using
                                  it widely yet. So direct bot access through
                                  standard controls is still key.
                                </p>

                                <p>
                                  (12:54 - 12:58)
                                  <br />
                                  Good to know. LLMs.txt isn't quite there yet.
                                  Number four.
                                </p>

                                <p>
                                  (12:58 - 13:16)
                                  <br />
                                  Fourth, focus on sitemap hygiene and internal
                                  linking. A clean, up-to-date XML sitemap and a
                                  really strong internal linking structure help
                                  these Gen AI tools understand your site's
                                  topical authority. How is your content
                                  related? Grouping content into those clear
                                  topic clusters we talked about really
                                  reinforces that authority for the AI.
                                </p>

                                <p>
                                  (13:16 - 13:19)
                                  <br />
                                  Right. Connecting the dots for the AI. What
                                  about video? Ah, yes.
                                </p>

                                <p>
                                  (13:20 - 13:30)
                                  <br />
                                  Fifth, optimize your video SEO for AI
                                  visibility. This is increasingly important.
                                  Tools like Perplexity and Gemini are actively
                                  pulling insights, even direct citations from
                                  YouTube videos.
                                </p>

                                <p>
                                  (13:30 - 13:37)
                                  <br />
                                  Need good YouTube hygiene too. Absolutely.
                                  Search-friendly titles, really detailed
                                  descriptions, full transcripts if possible,
                                  use timestamps.
                                </p>

                                <p>
                                  (13:38 - 13:48)
                                  <br />
                                  All that metadata is gold for AI trying to
                                  understand video content. Okay. Anything else
                                  on the technical checklist? Yeah, a few more
                                  general but still important technical
                                  enhancements.
                                </p>

                                <p>
                                  (13:48 - 13:53)
                                  <br />
                                  Basic stuff but crucial. Improve site speed.
                                  Make sure it's mobile-friendly.
                                </p>

                                <p>
                                  (13:53 - 14:02)
                                  <br />
                                  Use canonical tags correctly to avoid
                                  duplicate content confusing the AI. Secure
                                  your site with HTTPS. And actually monitor
                                  your server logs.
                                </p>

                                <p>
                                  (14:02 - 14:08)
                                  <br />
                                  See which AI bots are visiting, how often,
                                  what they're looking at. It gives you valuable
                                  intel. That's a solid technical list.
                                </p>

                                <p>
                                  (14:08 - 14:40)
                                  <br />
                                  Now, one thing a lot of businesses want is,
                                  you know, to show up when someone asks an AI,
                                  what are the best tools for X? How do you
                                  actually get onto those kinds of AI
                                  recommendation lists? Yeah, that's the
                                  million-dollar question, isn't it? It's
                                  definitely not random chance. These AI models
                                  build those lists based on statistical
                                  patterns they find in their training data and
                                  the live web. So basically, if your brand gets
                                  mentioned frequently in the right contexts,
                                  associated with solving a particular problem
                                  and with clear value propositions, the AI
                                  starts to statistically link your brand to
                                  that solution.
                                </p>

                                <p>
                                  (14:40 - 14:46)
                                  <br />
                                  So it's about the overall pattern of mentions.
                                  Pretty much. Key factors influencing this seem
                                  to be.
                                </p>

                                <p>
                                  (14:46 - 14:59)
                                  <br />
                                  Forum credibility AI models really weigh
                                  community sources like Reddit heavily. So
                                  valuable non-spammy participation there
                                  matters. Then there's public social proof
                                  conversations on LinkedIn, on X, formerly
                                  Twitter.
                                </p>

                                <p>
                                  (15:00 - 15:11)
                                  <br />
                                  AI ingests this public discourse. Sharing
                                  value, getting quoted, engaging in industry
                                  chats helps. Also, blog and knowledge hub
                                  authority, having your own authoritative
                                  content builds that contextual relevance.
                                </p>

                                <p>
                                  (15:12 - 15:20)
                                  <br />
                                  And getting mentioned on other industry blogs.
                                  Review aggregation is huge too. AI leans
                                  heavily on platforms like G2, Captera,
                                  Trustpilot.
                                </p>

                                <p>
                                  (15:21 - 15:31)
                                  <br />
                                  Encouraging detailed specific reviews there is
                                  vital. And finally, having strong category
                                  positioning on your own site. Clearly stating
                                  what you solve, who it's for, what makes you
                                  different.
                                </p>

                                <p>
                                  (15:31 - 15:38)
                                  <br />
                                  Need to be crystal clear. Okay, so it's mostly
                                  about organic signals. Are there any direct
                                  ways to influence this? There are starting to
                                  be, yeah.
                                </p>

                                <p>
                                  (15:38 - 15:46)
                                  <br />
                                  Perplexity, for instance, has a merchant
                                  program where you can actually submit your
                                  product catalog. Oh, interesting. And OpenAI
                                  has something called the Search Product
                                  Discovery Initiative.
                                </p>

                                <p>
                                  (15:47 - 16:02)
                                  <br />
                                  It uses structured web data, remember that
                                  schema markup, for product offer review to
                                  help it suggest products. Traffic coming from
                                  these kinds of AI recommendations tends to be
                                  really high intent, often converts well. Good
                                  to know there are direct avenues opening up.
                                </p>

                                <p>
                                  (16:02 - 16:21)
                                  <br />
                                  Okay, we've talked a ton about optimizing for
                                  AI, but what about flipping it? Using AI to
                                  help optimize our own content. Yes, that's a
                                  really crucial distinction and a smart way to
                                  work. You can absolutely leverage AI tools,
                                  things like Surfer, ClearScope, Jasper, or
                                  even just prompting ChatGP to your cloud
                                  directly.
                                </p>

                                <p>
                                  (16:21 - 16:29)
                                  <br />
                                  How would you use them? For quality assurance,
                                  for checking structure, for doing prompt-based
                                  clarity checks. Like here's a simple test. Ask
                                  an AI tool to summarize your article.
                                </p>

                                <p>
                                  (16:29 - 16:40)
                                  <br />
                                  If the summary completely misses your main
                                  point, well, your content might not be clear
                                  enough for humans or for other AIs. That's a
                                  clever trick. What about all the buzz around
                                  AI content detection? People worry about
                                  getting flagged.
                                </p>

                                <p>
                                  (16:41 - 16:55)
                                  <br />
                                  Yeah, there's a lot of discussion, especially
                                  in places like Reddit communities. The general
                                  consensus seems to be don't just ask the AI to
                                  write me an essay on X. That often leads to
                                  generic detectable output. So what's the
                                  better approach? Use AI more strategically.
                                </p>

                                <p>
                                  (16:56 - 17:22)
                                  <br />
                                  Ask it to generate outlines, brainstorm ideas,
                                  maybe even help you spot AI-sounding patterns
                                  in your own writing that you can then smooth
                                  out. AI detectors often look for things like
                                  repetitive sentence structures, overuse of
                                  certain connector words, a lack of stylistic
                                  variation, maybe language that's just too
                                  formal or bland. The trick is to consciously
                                  infuse human variability, maybe some slight
                                  imperfections, your unique voice.
                                </p>

                                <p>
                                  (17:23 - 17:33)
                                  <br />
                                  You can even prompt an AI like rewrite this
                                  section in the style of a specific human
                                  author to try and make it sound less robotic.
                                  Interesting. So use AI as a writing partner,
                                  not a ghostwriter.
                                </p>

                                <p>
                                  (17:34 - 17:41)
                                  <br />
                                  Okay, with all these changes, how do we even
                                  measure success? The old metrics might not cut
                                  it. You're absolutely right. Traditional
                                  metrics alone are definitely inadequate now.
                                </p>

                                <p>
                                  (17:41 - 17:51)
                                  <br />
                                  You need to start monitoring a wider range of
                                  things. Like what? Okay, so referral traffic
                                  directly from AI tools. Conversions you can
                                  attribute to AI.
                                </p>

                                <p>
                                  (17:51 - 18:00)
                                  <br />
                                  This might be tricky, but maybe using how did
                                  you hear about us. Fields on forms or setting
                                  up specific tracking if possible. Watch your
                                  branded search volume.
                                </p>

                                <p>
                                  (18:00 - 18:11)
                                  <br />
                                  If more people start searching directly for
                                  your brand name, it could be because they were
                                  first introduced by an AI. It's like this
                                  inverse customer journey AI introduces, Google
                                  validates. The inverse journey.
                                </p>

                                <p>
                                  (18:12 - 18:22)
                                  <br />
                                  And obviously track your appearance in AI
                                  overviews and gen AI results. You need to be
                                  regularly testing relevant prompts and seeing
                                  if you show up. Also look for backlinks from
                                  AI surface content.
                                </p>

                                <p>
                                  (18:22 - 18:30)
                                  <br />
                                  Some tools generate live links. Monitor your
                                  content gap resolution. Are you closing the
                                  gaps where AI isn't finding you? Proactively
                                  do misrepresentation monitoring.
                                </p>

                                <p>
                                  (18:30 - 18:43)
                                  <br />
                                  If an AI starts hallucinating or saying
                                  incorrect things about your brand, you might
                                  need to publish correction pages. Yeah, that's
                                  a new one, misrepresentation monitoring. And
                                  finally, don't forget basic engagement signals
                                  on the content you're optimizing for AI.
                                </p>

                                <p>
                                  (18:43 - 18:53)
                                  <br />
                                  Time on page, bounce rate, scroll depth. These
                                  still matter to understand if the content is
                                  actually resonating. Okay, that's a much
                                  broader set of metrics to track.
                                </p>

                                <p>
                                  (18:53 - 19:05)
                                  <br />
                                  So bringing it all together, what does this
                                  actually mean big picture? We keep seeing
                                  headlines, you know, SEO is dead, isn't...
                                  Huh, yeah, not really. Mostly clickbait
                                  designed to grab attention. Fangered as much.
                                </p>

                                <p>
                                  (19:05 - 19:14)
                                  <br />
                                  What it really means is that SEO is
                                  fundamentally evolving. Look at Google's AI
                                  overviews. Yes, they've caused some
                                  significant dips in organic traffic for
                                  certain sites.
                                </p>

                                <p>
                                  (19:14 - 19:23)
                                  <br />
                                  Conductor saw drops up to 60% on some pages,
                                  like 25% fewer sessions for informational
                                  content month over month. That's real. Wow,
                                  60% is huge.
                                </p>

                                <p>
                                  (19:24 - 19:34)
                                  <br />
                                  It is. But interestingly, conversions often
                                  aren't hit quite as hard, which kind of
                                  suggests that maybe some of that previous
                                  traffic wasn't super valuable or high intent
                                  anyway. So less quantity, maybe better quality
                                  traffic.
                                </p>

                                <p>
                                  (19:34 - 19:52)
                                  <br />
                                  Potentially. The absolute key is adaptation.
                                  You need to improve your SEO strategy, maybe
                                  by prioritizing branded searches more,
                                  creating unique content types that AI
                                  struggles to replicate, like in-depth reviews,
                                  detailed competitor comparisons, really good
                                  support documentation, maybe interactive
                                  online tools.
                                </p>

                                <p>
                                  (19:53 - 19:59)
                                  <br />
                                  Refine your content strategy itself. Focus
                                  more on how and why questions. Leverage your
                                  unique first-party data.
                                </p>

                                <p>
                                  (19:59 - 20:07)
                                  <br />
                                  Don't be afraid to have strong, well-supported
                                  opinions. And critically, critically,
                                  diversify your channel mix. Don't put all your
                                  eggs in the Google basket.
                                </p>

                                <p>
                                  (20:07 - 20:18)
                                  <br />
                                  Think PR and newsletters, maybe other search
                                  engines, definitely social media, paid ads.
                                  Authenticity is going to be paramount,
                                  especially in the social platforms getting
                                  flooded with generic AI content. You need to
                                  stand out.
                                </p>

                                <p>
                                  (20:19 - 20:28)
                                  <br />
                                  So the landscape is definitely shifting,
                                  shaking things up, but it sounds less like a
                                  death knell and more like a strong call to
                                  evolve, to adapt. Exactly. It's the perfect
                                  way to put it.
                                </p>

                                <p>
                                  (20:28 - 20:38)
                                  <br />
                                  AI search optimization isn't killing
                                  traditional SEO. It's expanding it, adding new
                                  layers. You know, those final words of advice
                                  from the HubSpot strategist really resonate
                                  here.
                                </p>

                                <p>
                                  (20:39 - 20:58)
                                  <br />
                                  Quality content, fundamentally, will always be
                                  about serving your audience well. And in this
                                  AI-driven world, your humanity, your unique
                                  perspective, that matters more than ever, AI
                                  has changed the game for sure, but your unique
                                  viewpoint, that really is your superpower now.
                                  That's a great place to leave it.
                                </p>

                                <p>
                                  (20:59 - 21:11)
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
                                  (21:11 - 21:22)
                                  <br />
                                  And hey, if you got some real value out of
                                  this episode, maybe consider leaving us a
                                  rating or a review. It genuinely helps us
                                  reach more listeners like you. See you next
                                  Saturday with our eighth AI optimization or
                                  generative engine optimization technique.
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

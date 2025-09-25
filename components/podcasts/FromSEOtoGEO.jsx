"use client";
// import Toc from "./Toc";
import RelatedBlogs from "../blogs/RelatedBlogs";
import Image from "next/image";
import Link from "next/link";
import { Gallery, Item } from "react-photoswipe-gallery";
import { useState } from "react";
import Blog1Faqs from "../blogs/faqs/Blog1Faqs";
import GEOCourseCTA from "@/components/common/GeoCTA";

export default function FromSEOtoGEO({ blogItem }) {
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
                  From SEO to GEO: Thriving in the New Age of AI-Powered Search
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
                    src="https://www.youtube.com/embed/1c-LOQ--Cmg?si=uWbH1ErZkLDXfW38"
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
                            EP#1 Mastering Generative Engine Optimization (GEO)
                            | Conquer AI Search with AI
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
                        src="https://audio.getaimonitor.com/ConquerAISearchWithAI/ep-1-podcast-casa.mp3"
                      ></audio>
                      {/* </figure> */}
                      <hr className="w-100 m-0 d-block mt-4" />
                    </div>
                    <p className="mt-2">Also Available on:</p>
                    <div className="d-none lg:d-block">
                      {/* <div className="row child-cols-3 sm:child-cols-6 xl:child-cols-3 col-match g-2 justify-between hstack mt-2"> */}
                      <div className="hstack gap-4 mt-2 justify-center">
                        <a
                          href="https://open.spotify.com/episode/5u4NvrG1RqjKkKki2BKAl2?si=wespjEwYRVS9S82A5Q6vQA"
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
                          href="https://music.amazon.com/podcasts/638df449-1fbd-497d-a145-5315d8541611/episodes/918e9f48-f1f2-4e91-8ccd-0d426ab9ce3f/conquer-ai-search-with-ai-ep-1-mastering-generative-engine-optimization-geo-conquer-ai-search-with-ai"
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
                        <a href="https://podcasts.apple.com/in/podcast/ep-1-mastering-generative-engine-optimization-geo-conquer/id1806802986?i=1000702295898">
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
                        <a href="https://youtu.be/1c-LOQ--Cmg?si=lg0QLuPdgTAQ5ad6">
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
                        <a href="https://overcast.fm/+ABOivwP7sMk">
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
                        <a href="https://pca.st/5qs3i8lb">
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
                        <a href="https://castro.fm/episode/3g44U8">
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
                          href="https://open.spotify.com/episode/5u4NvrG1RqjKkKki2BKAl2?si=0NKKCnHvQjesA2pjF6xitw"
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
                          href="https://music.amazon.com/podcasts/638df449-1fbd-497d-a145-5315d8541611/episodes/918e9f48-f1f2-4e91-8ccd-0d426ab9ce3f/conquer-ai-search-with-ai-ep-1-mastering-generative-engine-optimization-geo-conquer-ai-search-with-ai"
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
                        <a href="https://podcasts.apple.com/in/podcast/ep-1-mastering-generative-engine-optimization-geo-conquer/id1806802986?i=1000702295898">
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
                        <a href="#https://youtu.be/1c-LOQ--Cmg?si=lg0QLuPdgTAQ5ad6">
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
                                  🎙️ Conquer AI Search Podcast – Ep. 1
                                </h3>
                                <ol className="fs-5">
                                  <li>
                                    (0:00 – 0:12) Introduction: GEO deep dive
                                    kickoff
                                  </li>
                                  <li>
                                    (0:13 – 0:50) Shift from SEO to AI-powered
                                    answers
                                  </li>
                                  <li>
                                    (0:50 – 1:14) Why SEO alone isn’t enough
                                    anymore
                                  </li>
                                  <li>
                                    (1:14 – 1:40) AI Monitor’s role in GEO
                                    visibility
                                  </li>
                                  <li>
                                    (1:49 – 2:30) Getting started: baseline &
                                    top queries
                                  </li>
                                  <li>
                                    (2:31 – 3:09) Direct mentions & AI trust
                                    signals
                                  </li>
                                  <li>
                                    (3:26 – 3:47) GEO report card & visibility
                                    snapshot
                                  </li>
                                  <li>
                                    (3:48 – 4:32) Benchmarking vs competitors
                                  </li>
                                  <li>
                                    (4:41 – 5:19) Strategic insights &
                                    actionable data
                                  </li>
                                  <li>
                                    (5:20 – 6:17) Content creation & authority
                                    mentions
                                  </li>
                                  <li>
                                    (6:17 – 6:52) Entity recognition & brand
                                    clarity
                                  </li>
                                  <li>
                                    (7:07 – 7:48) Simplifying GEO with AI
                                    Monitor
                                  </li>
                                  <li>
                                    (7:48 – 8:16) Staying adaptive in AI search
                                  </li>
                                  <li>
                                    (8:16 – 8:36) Encouragement: explore AI
                                    Monitor
                                  </li>
                                  <li>
                                    (8:36 – 9:00) Key reflection questions for
                                    brands
                                  </li>
                                  <li>(9:00 – 9:04) Closing & wrap-up</li>
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
                                      Remember when searching online was all
                                      about scrolling through a list of blue
                                      links? You'd type something in, hit enter,
                                      and a bunch of websites would pop up. For
                                      a long time, the name of the game was
                                      Search Engine Optimization, or SEO. It was
                                      all about making your website stand out so
                                      it would land at the top of that list.
                                    </p>
                                    <p className="mt-3">
                                      But things are changing in a big way. Now,
                                      with AI models like Gemini becoming part
                                      of the search experience, a new approach
                                      is taking over: Generative Engine
                                      Optimization, or GEO. Think of it less
                                      like a list and more like a conversation.
                                    </p>
                                    <p className="mt-3">
                                      This isn't just some techy jargon. It's a
                                      fundamental shift. Instead of giving you a
                                      bunch of links to click, these AI-powered
                                      search engines are now giving you direct,
                                      conversational answers. They might even
                                      mention your brand by name in their
                                      response! This means the old rules of SEO
                                      just don't cut it anymore. To be
                                      successful, you have to understand how AI
                                      is actually learning and processing
                                      information.
                                    </p>
                                    <p className="mt-3">
                                      So, how do you keep your brand from
                                      getting lost in this new world? The trick
                                      is to figure out your brand's AI presence,
                                      and there are tools like AI Monitor built
                                      specifically to help you do just that.
                                    </p>

                                    <h2 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                                      Step 1: Establish Your AI Baseline
                                    </h2>
                                    <p>
                                      When diving into the world of Generative
                                      Engine Optimization (GEO), the first and
                                      most critical move is to figure out your
                                      brand's current standing. You need a clear
                                      picture of how AI is already interacting
                                      with your content.
                                    </p>
                                    <p className="mt-3">
                                      Here are the key takeaways, broken down
                                      into a more human, easy-to-digest format:
                                    </p>
                                    <ul>
                                      <li className="mt-2">
                                        <b>
                                          First things first, you have to know
                                          your starting point.
                                        </b>{" "}
                                        You can't improve your brand's presence
                                        in the world of AI if you don't know
                                        where you're at right now.
                                      </li>
                                      <li className="mt-2">
                                        <b>
                                          Think of it like getting a report
                                          card.
                                        </b>{" "}
                                        Tools like AI Monitor give you a clear
                                        picture of how AI "sees" your brand. You
                                        just type in your brand and website, and
                                        it shows you what kinds of questions and
                                        topics the AI already links to you.
                                      </li>
                                      <li className="mt-2">
                                        <b>It's more than just keywords.</b>{" "}
                                        Instead of just seeing which words bring
                                        people to your site, this is about
                                        seeing exactly where the AI is directly
                                        mentioning your brand in its answers.
                                        This is a huge deal.
                                      </li>
                                      <li className="mt-2">
                                        <b>
                                          These mentions are like a big
                                          thumbs-up from the AI.
                                        </b>{" "}
                                        When an AI directly names your brand in
                                        its response, it's like a major vote of
                                        confidence. It tells the world that the
                                        AI considers you a trusted source a real
                                        authority on the subject. In the new
                                        world of GEO, these direct mentions are
                                        the new "backlinks" that show your brand
                                        is a big deal.
                                      </li>
                                    </ul>
                                    <h2 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                                      Step 2: Benchmark Against the Competition
                                    </h2>
                                    <p>
                                      After you've gotten a handle on your own
                                      brand, the next thing you'll want to do is
                                      check out the competition. AI Monitor's
                                      benchmarking feature lets you see how your
                                      brand's AI visibility stacks up against
                                      your main rivals or even your entire
                                      industry.
                                    </p>
                                    <p className="mt-3">
                                      Think of it like getting a peek behind the
                                      scenes to see what's working for everyone
                                      else in the AI world. You can find out
                                      which questions and topics your
                                      competitors are getting mentioned for, and
                                      where they're being cited more often than
                                      you are. This kind of intelligence is
                                      crucial because it helps you spot any weak
                                      spots in your own strategy and find new
                                      ways to jump into the conversation that's
                                      already happening in AI search. By
                                      learning what's giving your competitors an
                                      edge, you can fine-tune your own approach
                                      and stay ahead of the game.
                                    </p>

                                    <h2 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                                      Step 3: Take Actionable Steps to Improve
                                    </h2>
                                    <p>
                                      Having data is great, but it's only
                                      valuable if you know what to do with it.
                                      This is where AI Monitor gets really
                                      useful. It doesn't just show you where you
                                      stand and how you compare to others; it
                                      gives you specific, personalized advice to
                                      help you get more visibility in generative
                                      search.
                                    </p>
                                    <p className="mt-3">
                                      These recommendations might include:
                                    </p>
                                    <ul>
                                      <li className="mt-2">
                                        <b>
                                          Create In-Depth, Conversational
                                          Content:
                                        </b>{" "}
                                        AI loves content that answers questions
                                        thoroughly. By writing detailed guides,
                                        extensive FAQs, or "how-to" articles,
                                        you make your site the ultimate source
                                        of information for an AI to use when it
                                        generates a response.
                                      </li>
                                      <li className="mt-2">
                                        <b>Build Your Online Reputation:</b>{" "}
                                        It's not just about getting links
                                        anymore. You also want to get positive
                                        mentions of your brand on trusted
                                        websites, like industry blogs, news
                                        sites, and reputable publications. This
                                        helps solidify your brand's authority in
                                        the eyes of the AI.
                                      </li>
                                      <li className="mt-2">
                                        <b>Improve Entity Recognition:</b> This
                                        is about making it super easy for the AI
                                        to understand who you are and what you
                                        do. By being consistent with your brand
                                        name and providing clear descriptions of
                                        your products and services, you give the
                                        AI a clear picture of your brand
                                        identity.
                                      </li>
                                      <li className="mt-2">
                                        <b>
                                          These mentions are like a big
                                          thumbs-up from the AI.
                                        </b>{" "}
                                        When an AI directly names your brand in
                                        its response, it's like a major vote of
                                        confidence. It tells the world that the
                                        AI considers you a trusted source a real
                                        authority on the subject. In the new
                                        world of GEO, these direct mentions are
                                        the new "backlinks" that show your brand
                                        is a big deal.
                                      </li>
                                    </ul>

                                    <h2 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                                      The Future is Generative
                                    </h2>
                                    <p>
                                      This whole shift to AI-powered search
                                      isn't just a passing fad; it's a
                                      fundamental change in how things work
                                      online. While the old SEO tricks are still
                                      important, they're now just a piece of a
                                      much bigger puzzle. Generative Engine
                                      Optimization (GEO) is the real secret to
                                      making sure your brand doesn't just get
                                      found, but actually becomes a part of the
                                      AI-driven conversation.
                                    </p>
                                    <p className="mt-3">
                                      By using tools like AI Monitor, you can
                                      make sense of the world of GEO, turning
                                      what might feel like a huge challenge into
                                      a clear, easy-to-follow plan. It all
                                      starts with one simple step: just figure
                                      out where your brand stands in the AI
                                      world. From there, with the right
                                      guidance, you can take action to improve.
                                    </p>

                                    <p className="mt-3">
                                      The more curious you are and the more
                                      you're willing to take a proactive
                                      approach, the better off your brand will
                                      be. It's an exciting new world out there,
                                      and your brand is perfectly positioned to
                                      thrive in it.
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
                                  (0:00 - 0:12) <br />
                                  Welcome to our Deep Dive. Today, we're going
                                  to be taking a closer look at AI Monitor's
                                  course on Generative Engine Optimization. GEO
                                  for short.
                                </p>

                                <p>
                                  (0:13 - 0:31) <br />
                                  GEO, exactly. It might sound like just another
                                  tech buzzword, but trust me, for anyone trying
                                  to stay ahead of the curve, this is something
                                  you really need to understand. Because the way
                                  we search for information online, it's
                                  changing, like really fundamentally.
                                </p>

                                <p>
                                  (0:31 - 0:38) <br />
                                  Yeah, it really is. Think about it. When
                                  you're online looking for information, it used
                                  to be all about those lists of blue links,
                                  right? Classic search results pages.
                                </p>

                                <p>
                                  (0:38 - 0:50) <br />
                                  Exactly. But more and more, we're seeing AI
                                  step in, providing answers right there on the
                                  search results page. AI overviews or even
                                  having a conversation with an AI to find what
                                  you need.
                                </p>

                                <p>
                                  (0:50 - 1:03) <br />
                                  And that's what makes this so important. These
                                  AI systems, you know, like Google's Gemini
                                  that powers AI overviews and all these
                                  different large language models, LLMs, they're
                                  not just sending you to websites anymore.
                                  They're actually crunching the data and giving
                                  you answers themselves.
                                </p>

                                <p>
                                  (1:04 - 1:14) <br />
                                  Yeah, and that means SEO, search engine
                                  optimization, the way we used to think about
                                  it, that's just not enough anymore. We need to
                                  understand how AI is using information. And
                                  that's why we're doing this deep dive.
                                </p>

                                <p>
                                  (1:14 - 1:32) <br />
                                  We're going to look at AI Monitor and their
                                  approach to Generative Engine Optimization, or
                                  GEO. How can we use this tool to make sure our
                                  brands are visible and even more importantly,
                                  influential in this new AI-driven world?
                                  Exactly. We're going to focus specifically on
                                  a few key things.
                                </p>

                                <p>
                                  (1:33 - 1:40) <br />
                                  First, how AI Monitor can help you see where
                                  your brand currently stands with AI. Like a
                                  snapshot of how AI sees you. Right.
                                </p>

                                <p>
                                  (1:40 - 1:49) <br />
                                  And then we'll dig into how to use AI Monitor
                                  to find areas where you can improve your
                                  position so you're ready for the future of
                                  search. Sounds good to me. Let's jump in.
                                </p>

                                <p>
                                  (1:49 - 2:04) <br />
                                  So how can someone listening start using AI
                                  Monitor to kind of wrap their heads around
                                  this whole GEO thing? Well, the first step is
                                  really simple. It's all about establishing a
                                  baseline, you know, seeing where your brand is
                                  already showing up in AI search results. Okay,
                                  so where do you start? It's super
                                  straightforward.
                                </p>

                                <p>
                                  (2:05 - 2:12) <br />
                                  You just go into AI Monitor, enter your brand
                                  name and the domain name of your website.
                                  That's all it takes. Like you're letting the
                                  tool know who you are.
                                </p>

                                <p>
                                  (2:12 - 2:20) <br />
                                  Exactly. And once you've done that, AI Monitor
                                  can get to work. It'll give you this really
                                  valuable snapshot of your current visibility.
                                </p>

                                <p>
                                  (2:20 - 2:30) <br />
                                  And one of the first things it will show you,
                                  the top five search queries that your brand is
                                  popping up for in different AI engines. So the
                                  actual questions people are typing in. Yes.
                                </p>

                                <p>
                                  (2:31 - 2:43) <br />
                                  This gives you a real sense of what kind of
                                  topics and searches AI is already associating
                                  with your brand. So like, what's the AI's
                                  perception of my brand, essentially? Exactly.
                                  And this is where it gets really interesting.
                                </p>

                                <p>
                                  (2:44 - 2:54) <br />
                                  AI Monitor doesn't stop at just telling you
                                  what queries you're showing up for. It digs
                                  deeper and shows you exactly where within the
                                  AI's answers, your brand is being mentioned.
                                  Oh, that's cool.
                                </p>

                                <p>
                                  (2:54 - 3:09) <br />
                                  Yeah. And these direct mentions, those are
                                  really key in GEO because in this new world of
                                  AI powered search, having your brand mentioned
                                  directly by the AI can be incredibly powerful,
                                  even more so than a backlink in some cases.
                                  Awesome.
                                </p>

                                <p>
                                  (3:09 - 3:26) <br />
                                  Well, AI is trying to give people complete
                                  answers, right? So when your brand is
                                  mentioned directly in a trustworthy context,
                                  it tells the AI and the user that you are
                                  relevant and an authority on the subject. It's
                                  like a vote of confidence from the AI.
                                  Exactly.
                                </p>

                                <p>
                                  (3:26 - 3:37) <br />
                                  So this feature, it's like getting a report
                                  card on your AI visibility. It helps you see
                                  where you're already present in the AI
                                  ecosystem and gives you a good starting point
                                  for figuring out how to improve. Right.
                                </p>

                                <p>
                                  (3:37 - 3:47) <br />
                                  Makes sense. So we know where our brand is
                                  being mentioned, but how do we know how we're
                                  really doing? That's the next step. You have
                                  to see how you stack up against your
                                  competition.
                                </p>

                                <p>
                                  (3:48 - 3:52) <br />
                                  That's where AI Monitor's benchmarking feature
                                  comes in. Oh, right. Comparing yourself to the
                                  rest of your industry.
                                </p>

                                <p>
                                  (3:52 - 4:05) <br />
                                  Exactly. So within the tool, you can enter the
                                  names of your main competitors or select a
                                  specific industry category. And AI Monitor
                                  will analyze how your brand's mentions and
                                  query associations compare to theirs.
                                </p>

                                <p>
                                  (4:06 - 4:18) <br />
                                  So you see what kind of questions they're
                                  showing up for and if they're getting more
                                  mentions than you. Yeah, and that's when you
                                  can start to spot those gaps, those areas
                                  where your competitors are doing well in AI
                                  search results, but you're not. Like seeing
                                  where you need to catch up.
                                </p>

                                <p>
                                  (4:19 - 4:32) <br />
                                  Exactly. Think of it as finding those
                                  opportunities to be a part of the conversation
                                  that's happening around your industry in AI
                                  search. You can see who's getting mentioned
                                  for those important queries and understand
                                  where your strategy might need some
                                  adjustments.
                                </p>

                                <p>
                                  (4:33 - 4:41) <br />
                                  It's almost like intelligence gathering on
                                  your competitors, but in the AI world. It
                                  really is. And this isn't just about keeping
                                  score.
                                </p>

                                <p>
                                  (4:41 - 4:56) <br />
                                  Knowing where you stand compared to your
                                  competitors is crucial for developing a smart
                                  strategic approach to GEO. Seeing what's
                                  working for them can give you so many ideas
                                  and help you pinpoint weaknesses in your own
                                  approach. Right, it's all about learning from
                                  the best, even if they are your competition.
                                </p>

                                <p>
                                  (4:56 - 5:19) <br />
                                  So AI Monitor shows us where we stand, how we
                                  compare to others, but does it tell us what to
                                  do about it? Absolutely, it's not just about
                                  the data, it's about giving you actionable
                                  insights. AI Monitor is designed to be
                                  proactive. It analyzes all the information it
                                  gathers about your brand and your industry,
                                  and then it gives you specific recommendations
                                  for improving your visibility and ranking in
                                  generative search.
                                </p>

                                <p>
                                  (5:20 - 5:40) <br />
                                  Okay, so it's like having a personal AI
                                  consultant. So what kind of advice might AI
                                  Monitor give? Well, the suggestions are
                                  tailored to your specific situation, but let
                                  me give you some examples. One common
                                  recommendation is to create content that
                                  really digs deep into answering specific
                                  questions, questions that are relevant to your
                                  brand and what your audience is searching for.
                                </p>

                                <p>
                                  (5:40 - 5:57) <br />
                                  You mean like in-depth guides or FAQs?
                                  Exactly, think about those questions people
                                  are typing into search engines. If you can
                                  create content that gives a comprehensive
                                  answer, you increase the chances of AI pulling
                                  from your site when it's generating its
                                  responses. Okay, so make yourself the ultimate
                                  source for the AI to use.
                                </p>

                                <p>
                                  (5:57 - 6:17) <br />
                                  Exactly, another thing AI Monitor might
                                  suggest is to make sure your brand is being
                                  talked about by other reputable sources
                                  online. Like besides just link building.
                                  Right, in the world of GEO, it's important to
                                  have positive mentions of your brand on
                                  authoritative websites, things like industry
                                  blogs, news sites, or well-respected
                                  publications.
                                </p>

                                <p>
                                  (6:17 - 6:33) <br />
                                  This helps solidify your brand's authority in
                                  the eyes of the AI. So it's like building a
                                  good reputation, but online and for AI.
                                  Exactly, and finally, AI Monitor might suggest
                                  optimizing your overall online presence to
                                  improve what we call entity recognition.
                                </p>

                                <p>
                                  (6:33 - 6:52) <br />
                                  Entity recognition. That's how well the AI
                                  understands what your brand is, what it does,
                                  what it's all about. It means being consistent
                                  with your brand name, having clear
                                  descriptions of your products or services on
                                  your website and other online profiles,
                                  basically making it super easy for the AI to
                                  understand the key things about your brand and
                                  what it stands for.
                                </p>

                                <p>
                                  (6:52 - 7:06) <br />
                                  So it's like giving the AI a clear picture of
                                  your brand identity. Right, and all of these
                                  suggestions from AI Monitor, they're designed
                                  to give you clear, concrete steps you can take
                                  to boost your brand's visibility and
                                  influence. All from within the AI Monitor
                                  platform, which is really user-friendly.
                                </p>

                                <p>
                                  (7:07 - 7:13) <br />
                                  Okay, so it's not about just figuring out GEO
                                  on your own. You have this tool to guide you.
                                  Exactly.
                                </p>

                                <p>
                                  (7:13 - 7:29) <br />
                                  So from what we've discussed, it seems like
                                  navigating GEO doesn't have to be
                                  overwhelming. Tools like AI Monitor are giving
                                  us the insights and the tools we need to not
                                  only survive, but actually thrive in this new
                                  world of search. I totally agree.
                                </p>

                                <p>
                                  (7:29 - 7:35) <br />
                                  The first steps are pretty simple. Figure out
                                  what queries your brand is showing up for
                                  right now. See how you compare to your
                                  competition.
                                </p>

                                <p>
                                  (7:35 - 7:48) <br />
                                  Then take AI Monitor's advice and put those
                                  suggestions into action. And by doing that,
                                  you can be proactive and make sure your brand
                                  is visible and influential in AI-powered
                                  search results. That makes a lot of sense.
                                </p>

                                <p>
                                  (7:48 - 8:01) <br />
                                  This shift towards AI-generated answers is a
                                  big deal and it's only gonna get bigger,
                                  right? Yeah, definitely. Staying informed and
                                  understanding how AI works and then being
                                  willing to adapt, that's gonna be essential
                                  for any brand that wants to succeed online in
                                  the long run. For sure.
                                </p>

                                <p>
                                  (8:02 - 8:16) <br />
                                  And this deep dive today, it's really just a
                                  starting point. There's so much more to
                                  explore when it comes to AI Monitor and the
                                  whole world of GEO. And as these AI
                                  technologies keep developing, there are gonna
                                  be even more opportunities and new strategies
                                  to consider.
                                </p>

                                <p>
                                  (8:16 - 8:30) <br />
                                  It's definitely an exciting time. So to
                                  everyone listening, I encourage you to go
                                  check out AI Monitor, explore the tool, and
                                  start asking your own questions about how
                                  these new AI engines are viewing your brand in
                                  your industry. Yeah, the more curious you are,
                                  the better.
                                </p>

                                <p>
                                  (8:30 - 8:36) <br />
                                  It's a learning process for all of us.
                                  Exactly. And as you're exploring, think about
                                  this.
                                </p>

                                <p>
                                  (8:36 - 9:00) <br />
                                  What are some unexpected or surprising queries
                                  that AI might already be connecting to your
                                  brand? Are there any authoritative websites
                                  that are constantly mentioning your
                                  competitors but haven't mentioned you yet?
                                  Those are great questions to consider. I think
                                  this is gonna be an ongoing conversation. The
                                  world of GEO is constantly evolving and
                                  staying curious and engaged is the best way to
                                  navigate it successfully.
                                </p>

                                <p>
                                  (9:00 - 9:03) <br />I agree. Thanks for
                                  joining us for this deep dive. You're welcome.
                                </p>

                                <p>
                                  (9:03 - 9:04) <br />
                                  We'll see you next time. See you then.
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
                                    AI Monitor. (n.d.). AI Monitor company
                                    website. Retrieved from
                                    <a
                                      href="https://www.getaimonitor.com/"
                                      className="text-blue"
                                      target="_blank"
                                    >
                                      https://www.getaimonitor.com/
                                    </a>
                                  </li>
                                  <li>
                                    Scrunch AI. (n.d.). Scrunch AI tool.
                                    Retrieved from
                                    <a
                                      href="https://scrunchai.com/"
                                      className="text-blue"
                                      target="_blank"
                                    >
                                      https://scrunchai.com/
                                    </a>
                                  </li>
                                  <li>
                                    Peec AI. (n.d.). Peec AI tool. Retrieved
                                    from
                                    <a
                                      href="https://peec.ai/"
                                      className="text-blue"
                                      target="_blank"
                                    >
                                      https://peec.ai/
                                    </a>
                                  </li>
                                  <li>
                                    Profound. (n.d.). Profound tool. Retrieved
                                    from
                                    <a
                                      href="https://tryprofound.com/"
                                      className="text-blue"
                                      target="_blank"
                                    >
                                      https://tryprofound.com/
                                    </a>
                                  </li>
                                  <li>
                                    Hall. (n.d.). Hall tool. Retrieved from
                                    <a
                                      href="https://usehall.com/"
                                      className="text-blue"
                                      target="_blank"
                                    >
                                      https://usehall.com/
                                    </a>
                                  </li>
                                  <li>
                                    Otterly AI. (n.d.). Otterly AI tool.
                                    Retrieved from
                                    <a
                                      href="https://otterly.ai/"
                                      className="text-blue"
                                      target="_blank"
                                    >
                                      https://otterly.ai/
                                    </a>
                                  </li>
                                  <li>
                                    PTopFreePrompts. (n.d.). TopFreePrompts
                                    company website. Retrieved from
                                    <a
                                      href="https://topfreeprompts.com/"
                                      className="text-blue"
                                      target="_blank"
                                    >
                                      https://topfreeprompts.com/
                                    </a>
                                  </li>
                                  <li>
                                    AI SEO Services. (n.d.). AI SEO services
                                    article. Retrieved from
                                    <a
                                      href="https://ai-seoservices.com/"
                                      className="text-blue"
                                      target="_blank"
                                    >
                                      https://ai-seoservices.com/
                                    </a>
                                  </li>
                                  <li>
                                    iPullRank. (n.d.). Rankable Live podcast.
                                    Retrieved from
                                    <a
                                      href="https://rss.com/podcasts/rankablelive/2182912/"
                                      className="text-blue"
                                      target="_blank"
                                    >
                                      https://rss.com/podcasts/rankablelive/2182912/
                                    </a>
                                  </li>
                                  <li>
                                    GPT Insights. (n.d.). Claude leak. Retrieved
                                    from
                                    <a
                                      href="https://gpt-insights.de/ai-insights/gpt-insights-claude-leak-en/"
                                      className="text-blue"
                                      target="_blank"
                                    >
                                      https://gpt-insights.de/ai-insights/gpt-insights-claude-leak-en/
                                    </a>
                                  </li>
                                  <li>
                                    SE Ranking. (n.d.). AI mode research.
                                    Retrieved from
                                    <a
                                      href="https://seranking.com/blog/ai-mode-research/"
                                      className="text-blue"
                                      target="_blank"
                                    >
                                      https://seranking.com/blog/ai-mode-research/
                                    </a>
                                  </li>
                                  <li>
                                    Search Engine Journal. (2024). Study: Google
                                    AI mode returns largely different results
                                    across sessions. Retrieved from
                                    <a
                                      href="https://www.searchenginejournal.com/study-google-ai-mode-returns-largely-different-results-across-sessions/550249/"
                                      className="text-blue"
                                      target="_blank"
                                    >
                                      https://www.searchenginejournal.com/study-google-ai-mode-returns-largely-different-results-across-sessions/550249/
                                    </a>
                                  </li>
                                  <li>
                                    StoryChief. (n.d.). The Anubhab source 1 &
                                    2. Retrieved from
                                    <a
                                      href="https://storychief.io/"
                                      className="text-blue"
                                      target="_blank"
                                    >
                                      https://storychief.io/
                                    </a>
                                  </li>
                                  <li>
                                    KeyContent. (n.d.). The Anubhab source 3.
                                    Retrieved from
                                    <a
                                      href="https://keycontent.com/"
                                      className="text-blue"
                                      target="_blank"
                                    >
                                      https://keycontent.com/
                                    </a>
                                  </li>
                                  <li>
                                    Stanford HAI. (n.d.). Retrieved from
                                    <a
                                      href="https://hai.stanford.edu/"
                                      className="text-blue"
                                      target="_blank"
                                    >
                                      https://hai.stanford.edu/
                                    </a>
                                  </li>
                                  <li>
                                    Eteam.io. (n.d.). Retrieved from
                                    <a
                                      href="https://www.eteam.io/"
                                      className="text-blue"
                                      target="_blank"
                                    >
                                      https://www.eteam.io/
                                    </a>
                                  </li>
                                  <li>
                                    OpenAI. (n.d.). Retrieved from
                                    <a
                                      href="https://openai.com/"
                                      className="text-blue"
                                      target="_blank"
                                    >
                                      https://openai.com/
                                    </a>
                                  </li>
                                  <li>
                                    USC Annenberg. (n.d.). USC citation.
                                    Retrieved from
                                    <a
                                      href="https://annenberg.usc.edu/"
                                      className="text-blue"
                                      target="_blank"
                                    >
                                      https://annenberg.usc.edu/
                                    </a>
                                  </li>
                                  <li>
                                    Wikipedia contributors. (2024). Artificial
                                    intelligence optimization. Retrieved from
                                    <a
                                      href="https://en.wikipedia.org/w/index.php?title=Artificial_intelligence_optimization&oldid=1311686459"
                                      className="text-blue"
                                      target="_blank"
                                    >
                                      https://en.wikipedia.org/w/index.php?title=Artificial_intelligence_optimization&oldid=1311686459
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

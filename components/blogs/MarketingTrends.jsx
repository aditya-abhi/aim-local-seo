"use client";
import Toc from "./Toc";
import RelatedBlogs from "./RelatedBlogs";
import Image from "next/image";
import Link from "next/link";
import { Gallery, Item } from "react-photoswipe-gallery";
import { useState } from "react";
import Blog1Faqs from "./faqs/Blog1Faqs";
import GEOCourseCTA from "@/components/common/GeoCTA";

export default function MarketingTrends({ blogItem }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleAuthorDetails = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <div
        className={
          isExpanded
            ? "position-absolute top-0 start-0 end-0 min-h-1000px xl:min-h-1100px bg-tertiary-700 lg:rounded-2 lg:rounded-top-0 lg:mx-2 lg:mt-0 z-0"
            : "position-absolute top-0 start-0 end-0 min-h-700px xl:min-h-900px bg-tertiary-700 lg:rounded-2 lg:rounded-top-0 lg:mx-2 lg:mt-0 z-0"
        }
      />{" "}
      <div className="breadcrumbs panel z-1 py-2 dark:bg-opacity-5 text-white mt-8 lg:mt-10">
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
              <Link href={`/blog`}>Blog</Link>
            </li>
            <li>
              <i className="unicon-chevron-right fw-medium opacity-50 rtl:rotate-180" />
            </li>
            <li>
              <span className="opacity-50">{blogItem.title}</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="container max-w-fc">
        <div className="post-author panel px-3 p-3 bg-gray-25 dark:bg-opacity-5 rounded lg:rounded-2 max-w-100 lg:max-w-900px xl:max-w-xl">
          {!isExpanded && (
            <div
              className="flex items-center gap-3 md:gap-4 pb-2 px-2 cursor-pointer"
              onClick={toggleAuthorDetails}
            >
              <div className="row g-4 items-center">
                <div className="col-12 sm:col-5 xl:col-3 mx-3">
                  <figure className="featured-image m-0 rounded ratio ratio-1x1 uc-transition-toggle overflow-hidden w-48px">
                    <Image
                      className="media-cover image uc-transition-scale-up uc-transition-opaque rounded-full"
                      src="/assets/images/avatars/avinash.webp"
                      alt="Author Image"
                      width="48"
                      height="48"
                    />
                  </figure>
                </div>
                <div className="col">
                  <div className="panel vstack items-start gap-2 md:gap-3">
                    <h4 className="h5 m-0">Avinash Tripathi</h4>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Expanded Author View */}
          {isExpanded && (
            <div
              className="py-4 px-3 sm:px-4 uc-prose cursor-pointer"
              onClick={toggleAuthorDetails}
            >
              <div className="row g-4 items-center">
                <div className="col-12 sm:col-5 xl:col-3">
                  <figure className="featured-image m-0 rounded ratio ratio-1x1 uc-transition-toggle overflow-hidden">
                    <Image
                      className="media-cover image uc-transition-scale-up uc-transition-opaque"
                      alt="Avinash Tripathi Image"
                      src="/assets/images/avatars/avinash.webp"
                      width="1000"
                      height="667"
                    />
                  </figure>
                </div>
                <div className="col">
                  <div className="panel vstack items-start gap-2 md:gap-3">
                    <h3 className="mb-0">Author:</h3>
                    <h4 className="h5 m-0">Avinash Tripathi</h4>
                    <p className="fs-6">
                      My journey into Generative Engine Optimization (GEO) began
                      with a fortunate accident. I was happily working as an
                      entrepreneur when one day, while researching, I noticed
                      that Microsoft Copilot made a negative comment about my
                      startup. Instead of ignoring what Copilot said, I chose to
                      understand, learn, and understand how AI-driven search
                      works, even though a lot of people around me felt that it
                      was beyond my competence. My persistence paid off as my
                      work has been featured by leading media companies such as
                      The Hindu, Yahoo, and Scroll. Most recently, I was awarded
                      the #1 GEO Consultant by YesUsers
                    </p>
                    <ul className="nav-x gap-1 text-gray-400 dark:text-white">
                      <li>
                        <a href="#medium">
                          <i className="icon-2 unicon-logo-medium" />
                        </a>
                      </li>
                      <li>
                        <a href="#x">
                          <i className="icon-2 unicon-logo-x-filled" />
                        </a>
                      </li>
                      <li>
                        <a href="#instagram">
                          <i className="icon-2 unicon-logo-linkedin" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <article className="post type-post single-post pb-4 lg:pb-6 xl:pb-9">
        <div className="container max-w-xl">
          <div className="post-header uc-dark">
            <div className="panel vstack gap-4 md:gap-6 xl:gap-9 text-center">
              <div className="panel vstack items-center max-w-400px sm:max-w-500px xl:max-w-md mx-auto gap-2 md:gap-3">
                <h1 className="h4 sm:h3 xl:h1 mt-4 lg:mt-6">
                  {blogItem.title}
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
                <figure className="featured-image m-0 rounded ratio ratio-2x1 rounded uc-transition-toggle overflow-hidden">
                  <Image
                    className="media-cover image uc-transition-scale-up uc-transition-opaque"
                    alt="Maximizing your reach with marketing strategies"
                    src="/assets/images/blog/MarketingTrends.webp"
                    width="1280"
                    height="853"
                  />
                </figure>
              </figure>
            </div>
          </div>
        </div>
        <div className="panel mt-4 lg:mt-6 xl:mt-9">
          <div className="container">
            <div className="row child-cols-12 g-2 lg:g-4 xl:g-8">
              <div className="md:col-8 order-0">
                <div className="uc-main panel" role="main">
                  <Gallery>
                    <div
                      className="post-content panel fs-6 md:fs-5"
                      data-uc-lightbox="animation: scale"
                    >
                      <h2 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                        Introduction
                      </h2>
                      <p>
                        Explore the key marketing trends that will shape how
                        marketers work in 2025. From AI tools and chatbots to
                        social selling and cookieless personalization, here’s
                        what to expect and how to adapt your strategies.
                      </p>
                      <h2 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                        1. Generative Engine Optimization (GEO)
                      </h2>
                      <p className="mt-3">
                        As large language models (LLMs) change how people search
                        for information, marketers must adapt their strategies.
                        Optimizing content for LLM-powered search engines like
                        ChatGPT, Microsoft Copilot, and Google AI Overview will
                        become crucial.
                      </p>
                      <h3 className="h5 xl:h4 mt-3 mb-2 xl:mb-2">
                        Case Study – Optimizing Content for AI Search Engines
                      </h3>
                      <p>
                        A tech startup client of ours availed our services for
                        GEO and optimized its content for AI-powered search
                        engines. This led to a 40% increase in organic traffic
                        within three months. Natural language processing and
                        conversational keywords were emphasized to broaden the
                        audience segment and improve search engine rankings.
                      </p>
                      <h2 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                        2. Interactive Content
                      </h2>
                      <p className="mt-3">
                        User engagement and retention will significantly improve
                        through interactive contents such as quizzes and
                        engaging videos. This method makes meaningful
                        interactions possible by making users active
                        participants; thereby, enhancing the overall user
                        experience.
                      </p>
                      <h3 className="h5 xl:h4 mt-3 mb-2 xl:mb-2">
                        Case Study – Interactive Content in the Construction
                        Sector
                      </h3>
                      <p>
                        In this case study, we analyzed the performance of three
                        interactive experiences developed for a small builder
                        and contractor initiative in the Phoenix area, aiming to
                        improve conversions.
                      </p>
                      <h3 className="h5 xl:h4 mt-3 mb-2 xl:mb-3">
                        [Calculator] ROI Calculator: Buying a Home vs. Renting
                      </h3>
                      <p>
                        <b>Target Audience:</b>Users in the attraction stage.
                        <b>Results:</b>
                      </p>
                      <ul className="mt-2">
                        <li>
                          The interactive ROI calculator compared the financial
                          benefits of buying a home versus renting.
                        </li>
                        <li>
                          After integrating the calculator into blog content,
                          there was a substantial increase in traffic and
                          qualified lead generation.
                        </li>
                      </ul>
                      <p>
                        This case study demonstrates the significant impact of a
                        well-designed distribution strategy on the performance
                        of interactive content, particularly in the construction
                        sector. By providing valuable tools and information, the
                        builder and contractor successfully engaged their
                        audience and drove meaningful conversions.
                      </p>
                      <h2 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                        3. The Enduring Power of Blogging
                      </h2>
                      <p>
                        Blogging remains a vital strategy for increasing brand
                        credibility and driving conversions. Blogs provide a
                        consistent platform for educational and engaging
                        content, independent of changing social media
                        algorithms.
                      </p>
                      <h3 className="h5 xl:h4 mt-3 mb-2 xl:mb-3">
                        Case Study – Snack Nation: 59% Increase in Homepage
                        Traffic from Blogging
                      </h3>
                      <p className="mt-3">
                        While Denver sits at the base of the Rocky Mountains,
                        it’s not considered a mountain town since it takes at
                        least an hour to get to the Rockies for snowboarding and
                        ski activities, a local expert explained sits at the
                        base of the Rocky Mountains, it’s not considered a
                        mountain town since it takes at least an hour to get to
                        the Rockies for snowboarding and ski activities, a local
                        expert explained.
                      </p>
                      <p>
                        <b>Industry:</b> B2B snack delivery service
                        <b> Key Stats:</b>
                      </p>
                      <ul>
                        <li>10,000 page views per month on a single post.</li>
                        <li>59% increase in homepage traffic.</li>
                        <li>Drives $100,000 in monthly recurring revenue.</li>
                      </ul>
                      <p>
                        <b>How They Did It:</b>
                      </p>
                      <ul>
                        <li>Skyscraper technique.</li>
                        <li>Keyword research.</li>
                        <li>Competitor analysis.</li>
                        <li>Link-building.</li>
                        <li>Blogger outreach.</li>
                      </ul>
                      <p>
                        Marketers are doing more with less, making efficiency
                        critical. AI tools and a cohesive tech stack can save
                        marketers hours of manual tasks, allowing them to focus
                        on high-impact activities.
                      </p>
                      <h2 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                        4. Increased Use of AI
                      </h2>
                      <p>
                        Education is a high point when it comes to analyzing the
                        quality of life factors that make Ann Arbor one of the
                        best places to live. The University of Michigan, which
                        has 43,000 students, makes Ann Arbor a perennial
                        candidate for our annual ranking of the best college
                        towns and plays a big role in the city’s economy and
                        culture.
                      </p>
                      <h3 className="h5 xl:h4 mt-3 mb-2 xl:mb-3">
                        Case Study – Engagement: Marketing Strategies That Help
                        Companies Connect
                      </h3>
                      <p className="mt-3">
                        Utilize chatbots, mobile messaging, email, and video to
                        engage consumers and forge deeper connections.
                        Personalization remains key, with 94% of marketers
                        saying it boosts sales and 77% reporting that AI helps
                        create more personalized content.
                      </p>
                      <h2 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                        5. The Return of VR and AR
                      </h2>
                      <p>
                        VR glasses and AR apps are becoming more accessible, and
                        these technologies will offer new means of engaging
                        audiences as well as provide them with immersive
                        experiences.
                      </p>
                      <h3 className="h5 xl:h4 mt-3 mb-2 xl:mb-3">
                        Case Study – IKEA Place AR App
                      </h3>
                      <p className="mt-3">
                        With IKEA’s augmented reality app, IKEA Place, customers
                        could see how the furniture would fit into their houses
                        before actually buying it. This improved customer
                        service program generated a 35% increment in online
                        sales while at the same time reducing product returns by
                        20%.
                      </p>
                      <h2 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                        6. Balancing Personalization and Privacy
                      </h2>
                      <p>
                        Personalization makes content more memorable and
                        effective, but it must be balanced with privacy
                        concerns. In 2025, first-party data collection will be
                        crucial for cookie-free targeting and
                        hyper-personalization.
                      </p>
                      <h3 className="h5 xl:h4 mt-3 mb-2 xl:mb-3">
                        Case Study – Apple’s Privacy-Centric Personalization
                      </h3>
                      <p className="mt-3">
                        Apple’s implementation of App Tracking Transparency
                        (ATT) allowed users to opt-out of data tracking. Despite
                        initial concerns, Apple managed to maintain high levels
                        of personalization through first-party data and
                        privacy-respecting strategies, leading to a 15% increase
                        in user trust and engagement.
                      </p>{" "}
                      <h2 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                        7. The Rise of Podcasts and Audio Content
                      </h2>
                      <p>
                        More marketers are using more of this format to connect
                        and capture the attention of their listeners, indicating
                        that the popularity of podcasting and audio content will
                        keep on increasing.
                      </p>
                      <h3 className="h5 xl:h4 mt-3 mb-2 xl:mb-3">
                        Case Study – HubSpot’s Podcast Network
                      </h3>
                      <p className="mt-3">
                        HubSpot has set up a podcast network that has shows
                        about marketing, sales and business growth. In the first
                        six months alone, this network gained over 1 million
                        downloads which significantly increased HubSpot’s brand
                        influence and generated leads.
                      </p>{" "}
                      <h2 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                        8. Native Advertising and Sponsored Content
                      </h2>
                      <p>
                        Native advertising and sponsored content will remain
                        valuable tools.These styles merge effortlessly to
                        platform content, thereby improving user experience and
                        raising the effectiveness of ads.
                      </p>
                      <h3 className="h5 xl:h4 mt-3 mb-2 xl:mb-3">
                        Case Study – The New York Times and Netflix’s “Orange is
                        the New Black”
                      </h3>
                      <p className="mt-3">
                        A native advertising piece promoting “Orange is the New
                        Black” was created by Netflix in collaboration with The
                        New York Times, a notable example. It produced content
                        that was well researched on women in jail, which matched
                        the theme of the show and gave readers useful knowledge.
                        The native ads generated a high engagement rate and
                        efficiently brought awareness to the series thereby
                        proving how powerful these types of advertisements could
                        be.
                      </p>
                      <h2 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                        9. Case Studies for Leads and Credibility
                      </h2>
                      <p>
                        Continued case studies would still serve as a powerful
                        way of demonstrating the value of products and services
                        and building trust. They give detailed information on
                        how customers benefit from the use of certain goods and
                        services.
                      </p>
                      <h3 className="h5 xl:h4 mt-3 mb-2 xl:mb-3">
                        Case Study – Salesforce’s Customer Success Stories
                      </h3>
                      <p className="mt-3">
                        One of the leading players in this market is Salesforce,
                        which often releases well-documented case studies that
                        highlight successful customer testimonies across a range
                        of industries. Such case studies have been shown to work
                        very well in terms of lead generation and establishing
                        credibility with a reported 20% rise in lead conversion
                        rates.
                      </p>
                      <h2 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                        10. Micro-stories to Micro-Influencers
                      </h2>
                      <p>
                        Brands like Gymshark are effectively using platforms
                        like TikTok to share short, engaging content that
                        connects with their audience.
                      </p>
                      <h3 className="h5 xl:h4 mt-3 mb-2 xl:mb-3">
                        Case Study – Gymshark on TikTok
                      </h3>
                      <p className="mt-3">
                        Gymshark worked with TikTok’s algorithm and short-form
                        videos to produce relatable fitness content.
                        Consequently, this attracted millions of followers and
                        increased the brand visibility significantly. During the
                        process, Gymshark used small influencers which meant
                        that they had more interactions with their clients
                        making them accountable for 25% of the sales resulting
                        from TikTok campaigns.
                      </p>
                      <h2 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">Conclusion</h2>
                      <p>
                        Stay ahead by incorporating these trends into your 2025
                        marketing strategy to drive engagement, efficiency, and
                        growth. Subscribe to our newsletter
                      </p>
                    </div>
                  </Gallery>
                </div>
              </div>
              <div className="md:col-4 order-2 lg:order-1">
                <div>
                  <Toc />
                </div>
              </div>
            </div>
            <hr className="w-100 m-0 d-block mt-4 lg:mt-6 xl:mt-8" />
            <Blog1Faqs />
            <div className="post-footer panel vstack sm:hstack gap-3 justify-between justifybetween border-top py-4 mt-4 xl:py-9 xl:mt-9">
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
            <div className="post-author panel py-4 px-3 sm:p-3 xl:p-4 bg-gray-25 dark:bg-opacity-5 rounded lg:rounded-2">
              <div className="row g-4 items-center">
                <div className="col-12 sm:col-5 xl:col-3">
                  <figure className="featured-image m-0 rounded ratio ratio-1x1 uc-transition-toggle overflow-hidden">
                    <Image
                      className="media-cover image uc-transition-scale-up uc-transition-opaque"
                      alt="Avinash Tripathi Image"
                      src="/assets/images/avatars/avinash.webp"
                      width="1000"
                      height="667"
                    />
                  </figure>
                </div>
                <div className="col">
                  <div className="panel vstack items-start gap-2 md:gap-3">
                    <h4 className="h5 m-0">Avinash Tripathi</h4>
                    <p className="fs-6">
                      My journey into Generative Engine Optimization (GEO) began
                      with a fortunate accident. I was happily working as an
                      entrepreneur when one day, while researching, I noticed
                      that Microsoft Copilot made a negative comment about my
                      startup. Instead of ignoring what Copilot said, I chose to
                      understand, learn, and understand how AI-driven search
                      works, even though a lot of people around me felt that it
                      was beyond my competence. My persistence paid off as my
                      work has been featured by leading media companies such as
                      The Hindu, Yahoo, and Scroll. Most recently, I was awarded
                      the #1 GEO Consultant by YesUsers
                    </p>
                    <ul className="nav-x gap-1 text-gray-400 dark:text-white">
                      <li>
                        <a href="#medium">
                          <i className="icon-2 unicon-logo-medium" />
                        </a>
                      </li>
                      <li>
                        <a href="#x">
                          <i className="icon-2 unicon-logo-x-filled" />
                        </a>
                      </li>
                      <li>
                        <a href="#instagram">
                          <i className="icon-2 unicon-logo-linkedin" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="post-navigation panel vstack sm:hstack justify-between gap-2 mt-8 xl:mt-9 fdr-min-600">
              <div className="new-post panel hstack w-100 sm:w-1/2">
                <div className="panel hstack justify-center w-100px h-100px">
                  <figure className="featured-image m-0 rounded ratio ratio-1x1 uc-transition-toggle overflow-hidden">
                    <Image
                      className="media-cover image uc-transition-scale-up uc-transition-opaque"
                      alt="How can marketing help your business?"
                      src="/assets/images/blog/img-02.jpg"
                      width="1280"
                      height="853"
                    />
                    <Link
                      href={`/blog-details/1`}
                      className="position-cover"
                      data-caption="How can marketing help your business?"
                    ></Link>
                  </figure>
                </div>
                <div className="panel vstack justify-center px-2 gap-1 w-1/3">
                  <span className="fs-7 opacity-60">Prev Article</span>
                  <h6 className="h6 lg:h5 m-0">
                    How can marketing help your business?
                  </h6>
                </div>
                <Link
                  href={`/blog-details/1`}
                  className="position-cover"
                ></Link>
              </div>
              <div className="new-post panel hstack w-100 sm:w-1/2">
                <div className="panel vstack justify-center px-2 gap-1 w-1/3 text-end rtl:text-start">
                  <span className="fs-7 opacity-60">Next Article</span>
                  <h6 className="h6 lg:h5 m-0">
                    Top 5 reasons to invest in marketing
                  </h6>
                </div>
                <div className="panel hstack justify-center w-100px h-100px">
                  <figure className="featured-image m-0 rounded ratio ratio-1x1 uc-transition-toggle overflow-hidden">
                    <Image
                      className="media-cover image uc-transition-scale-up uc-transition-opaque"
                      alt="Top 5 reasons to invest in marketing"
                      src="/assets/images/blog/img-01.jpg"
                      width="1280"
                      height="853"
                    />
                    <Link
                      href={`/blog-details/1`}
                      className="position-cover"
                      data-caption="Top 5 reasons to invest in marketing"
                    ></Link>
                  </figure>
                </div>
                <Link
                  href={`/blog-details/1`}
                  className="position-cover"
                ></Link>
              </div>
            </div>
            {/* <GEOCourseCTA /> */}
            <div className="post-related panel border-top pt-2 mt-8 xl:mt-9">
              <h2 className="h5 xl:h4 mb-5 xl:mb-6">Related to this topic:</h2>
              <div className="row child-cols-6 md:child-cols-4 gx-2 gy-4 sm:gx-3 sm:gy-6">
                <RelatedBlogs />
              </div>
            </div>
            <a
              href="#commont"
              className="btn h-56px w-100 mt-8 xl:mt-9 text-black dark:text-white border border-gray-200 dark:border-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800"
            >
              <span>Be the first to write a comment.</span>
            </a>
          </div>
        </div>
      </article>
    </>
  );
}

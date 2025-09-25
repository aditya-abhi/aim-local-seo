"use client";
import Toc from "./Toc";
import RelatedBlogs from "../blog-old/RelatedBlogs";
import Image from "next/image";
import Link from "next/link";
import { Gallery, Item } from "react-photoswipe-gallery";
import { useState } from "react";
import Blog1Faqs from "./faqs/Blog1Faqs";
import GEOCourseCTA from "@/components/common/GeoCTA";

export default function Blog2({ blogItem }) {
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
                <figure className="featured-image m-0 rounded ratio ratio-16x9 rounded uc-transition-toggle overflow-hidden">
                  <Image
                    className="media-cover image uc-transition-scale-up uc-transition-opaque"
                    alt="Maximizing your reach with marketing strategies"
                    src="/assets/images/blog/blog-6.png"
                    width="1351"
                    height="855"
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
                        Government Approval for Unreliable AI
                      </h2>
                      <p>
                        The Indian Ministry of Electronics and Information
                        Technology (MEITy) has introduced new guidelines to
                        regulate the application of Artificial Intelligence (AI)
                        tools. These guidelines aim to ensure that AI
                        applications are used responsibly, particularly when it
                        comes to the authorization procedure for AI models,
                        which are considered unproven or unreliable. Let us go
                        into some of the significant aspects that have come up
                        due to this critical development.
                      </p>
                      {/* <div className="panel mt-3">
                        <figure className="float-end ms-3 mb-1">
                          <Item
                            original="/assets/images/blog/post-1.jpg"
                            thumbnail="/assets/images/blog/post-1.jpg"
                            width="1280"
                            height="853"
                          >
                            {({ ref, open }) => (
                              <figure className="featured-image m-0 rounded ratio ratio-1x1 sm:w-300px uc-transition-toggle overflow-hidden">
                                <Image
                                  className="media-cover image uc-transition-scale-up uc-transition-opaque"
                                  alt="Holding flower, by Anthony Tran"
                                  src="/assets/images/blog/post-1.jpg"
                                  width="1280"
                                  height="853"
                                  ref={ref}
                                />
                                <a
                                  onClick={open}
                                  className="position-cover"
                                  data-caption="Holding flower, by Anthony Tran"
                                ></a>
                              </figure>
                            )}
                          </Item>
                          <figcaption className="fs-7 mt-1 text-center text-gray-400 dark:text-gray-200">
                            Holding flower, by Anthony Tran
                          </figcaption>
                        </figure>
                        <p>
                          Bike paths and sidewalks make getting to and from the
                          city’s many festivals, museums, restaurants and music
                          venues easy. A range of amenities provides many things
                          to do in Bellevue. About 40 percent of the city’s
                          population are minorities, which contributes to an
                          overall diverse range of lifestyles and ideas.
                        </p>
                        <p className="mt-3">
                          While Denver sits at the base of the Rocky Mountains,
                          it’s not considered a mountain town since it takes at
                          least an hour to get to the Rockies for snowboarding
                          and ski activities, a local expert explained. Olympic
                          mountain bikers, musicians, and award-winning chefs
                          about what exactly makes their hometowns so special
                          and fun.
                        </p>
                        <p className="mt-3">
                          In fact, not being able to rely on spoken word made
                          them better storytellers. They fully understood and
                          used the power of showing without words. They fully
                          understood and used the power of showing without
                          words. They fully understood and used the power of
                          showing without words.
                        </p>
                      </div> */}
                      <h2 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                        Understanding the Guidelines
                      </h2>
                      <p>
                        From now on, all platforms within India will have to
                        seek permission from authorities before deploying any AI
                        model classified as untested or undependable. This rule
                        applies to Large Language Models (LLMs) alongside other
                        advanced artificial intelligence technologies. Among
                        other things, one essential requirement is to describe
                        such models as faulty and inform users about potential
                        mistakes.
                      </p>
                      <h2 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                        Legal Implications of the New Regulations
                      </h2>
                      {/* <figure className="my-3 sm:my-4">
                        <Item
                          original="/assets/images/blog/post-2.jpg"
                          thumbnail="/assets/images/blog/post-2.jpg"
                          width="1280"
                          height="853"
                        >
                          {({ ref, open }) => (
                            <figure className="featured-image m-0 rounded ratio ratio-3x2 uc-transition-toggle overflow-hidden">
                              <Image
                                className="media-cover image uc-transition-scale-up uc-transition-opaque"
                                alt="Pink Marketing, by Mak"
                                src="/assets/images/blog/post-2.jpg"
                                width="1280"
                                height="853"
                                ref={ref}
                              />
                              <a
                                onClick={open}
                                className="position-cover"
                                data-caption="Pink Marketing, by Mak"
                              ></a>
                            </figure>
                          )}
                        </Item>
                        <figcaption className="fs-7 mt-1 text-center text-gray-400 dark:text-gray-200">
                          Pink Marketing, by Mak
                        </figcaption>
                      </figure> */}
                      {/* <h3 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                        Capital of Texas 2
                      </h3> */}
                      <p>
                        IT ministry advisory introduces a new regulatory
                        framework for AI platforms operating in India. The exact
                        scope of the regulatory regime has yet to be determined,
                        but these platforms will be subject to more government
                        regulation.
                      </p>
                      <ul className="my-3">
                        <li>
                          <b>Licensing Requirement: </b>The fact that there is a
                          need for explicit permission from the government to
                          start a business is significant. Such a development
                          could lead to a scenario of licensing whereby
                          platforms would be required to satisfy certain
                          conditions and comply with regulations to obtain a
                          license.
                        </li>
                        <li className="mt-1">
                          <b>Disclaimer and Disclosure Obligations: </b> Legal
                          implications apply when the experimental
                          characteristics of these AI systems are disclosed by
                          issuing companies. Non-compliance could result in
                          legal actions from consumers and regulatory
                          authorities.
                        </li>{" "}
                        <li className="mt-1">
                          <b>Liability Issues:</b>The disclaimer requirement
                          might affect liability determination concerning
                          AI-related harms. However, the degree to which such
                          disclaimers can limit liability remains a complex
                          legal question.
                        </li>
                      </ul>

                      {/* <figure className="my-3 sm:my-4">
                        <Item
                          original="/assets/images/blog/post-2.jpg"
                          thumbnail="/assets/images/blog/post-2.jpg"
                          width="1280"
                          height="853"
                        >
                          {({ ref, open }) => (
                            <figure className="featured-image m-0 rounded ratio ratio-3x2 uc-transition-toggle overflow-hidden">
                              <Image
                                className="media-cover image uc-transition-scale-up uc-transition-opaque"
                                alt="Pink Marketing, by Mak"
                                src="/assets/images/blog/post-2.jpg"
                                width="1280"
                                height="853"
                                ref={ref}
                              />
                              <a
                                onClick={open}
                                className="position-cover"
                                data-caption="Pink Marketing, by Mak"
                              ></a>
                            </figure>
                          )}
                        </Item>
                        <figcaption className="fs-7 mt-1 text-center text-gray-400 dark:text-gray-200">
                          Pink Marketing, by Mak
                        </figcaption>
                      </figure> */}

                      <h2 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                        Startups Exempted
                      </h2>
                      <p>
                        Rajeev Chandrashekar, the Minister of State for Skill
                        Development and Entrepreneurship & Electronics, and
                        Information Technology, India, explains that these
                        regulations are for “significant platforms,” not
                        start-ups. The exception made for new businesses
                        indicates a subtle mode, which appreciates the promotion
                        of invention in conjunction with regulatory controls on
                        existing platforms.
                      </p>

                      {/* <figure className="my-3 sm:my-4">
                        <Item
                          original="/assets/images/blog/post-2.jpg"
                          thumbnail="/assets/images/blog/post-2.jpg"
                          width="1280"
                          height="853"
                        >
                          {({ ref, open }) => (
                            <figure className="featured-image m-0 rounded ratio ratio-3x2 uc-transition-toggle overflow-hidden">
                              <Image
                                className="media-cover image uc-transition-scale-up uc-transition-opaque"
                                alt="Pink Marketing, by Mak"
                                src="/assets/images/blog/post-2.jpg"
                                width="1280"
                                height="853"
                                ref={ref}
                              />
                              <a
                                onClick={open}
                                className="position-cover"
                                data-caption="Pink Marketing, by Mak"
                              ></a>
                            </figure>
                          )}
                        </Item>
                        <figcaption className="fs-7 mt-1 text-center text-gray-400 dark:text-gray-200">
                          Pink Marketing, by Mak
                        </figcaption>
                      </figure> */}
                      <h2 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                        Industry Reaction
                      </h2>
                      <p>
                        The tech industry and experts have mixed feelings about
                        introducing these guidelines. Some think it’s a great
                        move by the government to ensure that AI deployment is
                        done responsibly. Others, on the other hand, are
                        concerned about how this will affect innovation. Critics
                        perceive it as an idea capable of stifling creativity
                        and pointing out uncertainty in what “significant”
                        platforms mean.
                      </p>

                      <h2 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                        Potential Challenges for the AI Industry
                      </h2>
                      <p>
                        The new regulations may have wide-ranging consequences
                        for India’s AI sector. Companies that develop and use
                        AI-based products and services must adhere to these
                        guidelines provided by the government. Compliance with
                        this advisory could involve additional compliance costs
                        and inflexible hurdles.
                      </p>
                      <p className="mt-3">
                        On the other hand, it is expected to lead to increased
                        public trust in AI technologies. The government intends
                        to deal with such issues by enforcing transparency and
                        establishing a regulatory body that will prevent misuse
                        of data privacy, as well as algorithmic bias, among
                        others.
                      </p>
                      <p className="mt-3">
                        How companies within the artificial intelligence sector
                        will adjust to these fresh rules still needs to be
                        determined. Though they may create obstacles, these
                        measures allow businesses to indicate their commitment
                        to ethical practices in artificial intelligence while
                        earning customer trust.
                      </p>
                      <h2 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                        Awaited AI Regulation Framework
                      </h2>
                      <p>
                        The government’s intention in regulating AI is clear –
                        it wants to protect the public interest. However,
                        striking a balance between regulation and innovation is
                        essential. Excessive regulations may kill AI development
                        and hinder India’s position as a global AI hub.
                      </p>
                      <p className="mt-3">
                        Implementing this regulatory framework will require
                        well-defined guidelines, transparency, and a broad
                        consultative approach involving all key industry
                        stakeholders.
                      </p>
                      <p className="mt-3">
                        In addition to the existing guidelines, the Indian
                        Government is working on a comprehensive framework for
                        AI regulation. This framework, which strives to have an
                        organized way towards developing artificial intelligence
                        (AI), aims to address issues relating to ethics,
                        privacy, and accountability and is anticipated to be
                        launched in June or July 2024.
                      </p>
                      {/* <figure className="my-3 sm:my-4">
                        <Item
                          original="/assets/images/blog/post-2.jpg"
                          thumbnail="/assets/images/blog/post-2.jpg"
                          width="1280"
                          height="853"
                        >
                          {({ ref, open }) => (
                            <figure className="featured-image m-0 rounded ratio ratio-3x2 uc-transition-toggle overflow-hidden">
                              <Image
                                className="media-cover image uc-transition-scale-up uc-transition-opaque"
                                alt="Pink Marketing, by Mak"
                                src="/assets/images/blog/post-2.jpg"
                                width="1280"
                                height="853"
                                ref={ref}
                              />
                              <a
                                onClick={open}
                                className="position-cover"
                                data-caption="Pink Marketing, by Mak"
                              ></a>
                            </figure>
                          )}
                        </Item>
                        <figcaption className="fs-7 mt-1 text-center text-gray-400 dark:text-gray-200">
                          Pink Marketing, by Mak
                        </figcaption>
                      </figure> */}

                      <h2 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                        Stay Informed
                      </h2>
                      <p>
                        As this remains a developing story, it’s crucial to stay
                        informed about further details and updates regarding the
                        upcoming AI framework. Our team will continue to monitor
                        the situation closely and provide timely updates to keep
                        you abreast of the latest developments in AI regulation
                        in India.
                      </p>
                      {/* <h2 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                        Capital of Texas5
                      </h2>
                      <p>
                        Visual storytelling is simply the way most brands will
                        decide to go in 2016 &amp; beyond, as they try to tell
                        their story to their customers the oldest and most
                        important unwritten rule in film industry says that you
                        shouldn’t rely much on words to tell your story. In
                        fact, you should rely on them as less as possible. It’s
                        no coincidence that Buster Keaton and Charlot’s movies
                        remain among the biggest classic movies of all time. In
                        fact, not being able to rely on spoken word made them
                        better storytellers. They fully understood and used the
                        power of showing without words.
                      </p>
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
                      <figure className="my-3 sm:my-4">
                        <Item
                          original="/assets/images/blog/post-2.jpg"
                          thumbnail="/assets/images/blog/post-2.jpg"
                          width="1280"
                          height="853"
                        >
                          {({ ref, open }) => (
                            <figure className="featured-image m-0 rounded ratio ratio-3x2 uc-transition-toggle overflow-hidden">
                              <Image
                                className="media-cover image uc-transition-scale-up uc-transition-opaque"
                                alt="Pink Marketing, by Mak"
                                src="/assets/images/blog/post-2.jpg"
                                width="1280"
                                height="853"
                                ref={ref}
                              />
                              <a
                                onClick={open}
                                className="position-cover"
                                data-caption="Pink Marketing, by Mak"
                              ></a>
                              <figcaption className="fs-7 mt-1 text-center text-gray-400 dark:text-gray-200">
                                Pink Marketing, by Mak
                              </figcaption>
                            </figure>
                          )}
                        </Item>
                      </figure>
                      <h2 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                        Great Schools and Entertainment 2
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
                      <p className="mt-3">
                        While Denver sits at the base of the Rocky Mountains,
                        it’s not considered a mountain town since it takes
                        considered at least an hour to get to the Rockies for
                        snowboarding and ski activities, a local expert
                        explained sits at the base of the Rocky Mountains, it’s
                        not considered a mountain town since it takes at least
                        an hour to get to the Rockies for snowboarding and ski
                        activities, a local expert explained.
                      </p>
                      <h4 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                        Great Schools and Entertainment
                      </h4>
                      <p>
                        Education is a high point when it comes to analyzing the
                        quality of life factors that make Ann Arbor one of the
                        best places to live. The University of Michigan, which
                        has 43,000 students, makes Ann Arbor a perennial
                        candidate for our annual ranking of the best college
                        towns and plays a big role in the city’s economy and
                        culture.
                      </p>
                      <p className="mt-3">
                        While Denver sits at the base of the Rocky Mountains,
                        it’s not considered a mountain town since it takes
                        considered at least an hour to get to the Rockies for
                        snowboarding and ski activities, a local expert
                        explained sits at the base of the Rocky Mountains, it’s
                        not considered a mountain town since it takes at least
                        an hour to get to the Rockies for snowboarding and ski
                        activities, a local expert explained.
                      </p>
                      <div className="panel my-3">
                        <figure className="float-start me-3 mb-0">
                          <Item
                            original="/assets/images/blog/post-3.jpg"
                            thumbnail="/assets/images/blog/post-3.jpg"
                            width="1280"
                            height="853"
                          >
                            {({ ref, open }) => (
                              <figure className="featured-image m-0 rounded ratio ratio-1x1 sm:w-300px uc-transition-toggle overflow-hidden">
                                <Image
                                  className="media-cover image uc-transition-scale-up uc-transition-opaque"
                                  alt="Great Schools and Entertainment"
                                  src="/assets/images/blog/post-3.jpg"
                                  width="1280"
                                  height="854"
                                  ref={ref}
                                />
                                <a
                                  onClick={open}
                                  className="position-cover"
                                  data-caption="Great Schools and Entertainment"
                                ></a>
                              </figure>
                            )}
                          </Item>
                          <figcaption className="fs-7 mt-1 text-center text-gray-400 dark:text-gray-200">
                            Great Schools and Entertainment
                          </figcaption>
                        </figure>
                        <h4 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                          Great Schools and Entertainment
                        </h4>
                        <p>
                          Education is a high point when it comes to analyzing
                          the quality of life factors that make Ann Arbor one of
                          the best places to live. The University of Michigan,
                          which has 43,000 students, makes Ann Arbor a perennial
                          candidate for our annual ranking of the best college
                          towns and plays a big role in the city’s economy and
                          culture.
                        </p>
                        <p className="mt-3">
                          While Denver sits at the base of the Rocky Mountains,
                          it’s not considered a mountain town since it takes
                          considered at least an hour to get to the Rockies for
                          snowboarding and ski activities, a local expert
                          explained sits at the base of the Rocky Mountains,
                          it’s not considered a mountain town since it takes at
                          least an hour to get to the Rockies for snowboarding
                          and ski activities, a local expert explained.
                        </p>
                        <h2 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                          Great Schools and Entertainment 5
                        </h2>
                        <p>
                          Education is a high point when it comes to analyzing
                          the quality of life factors that make Ann Arbor one of
                          the best places to live. The University of Michigan,
                          which has 43,000 students, makes Ann Arbor a perennial
                          candidate for our annual ranking of the best college
                          towns and plays a big role in the city’s economy and
                          culture.
                        </p>
                        <p className="mt-3">
                          While Denver sits at the base of the Rocky Mountains,
                          it’s not considered a mountain town since it takes
                          considered at least an hour to get to the Rockies for
                          snowboarding and ski activities, a local expert
                          explained sits at the base of the Rocky Mountains,
                          it’s not considered a mountain town since it takes at
                          least an hour to get to the Rockies for snowboarding
                          and ski activities, a local expert explained.
                        </p>
                        <p>
                          Bike paths and sidewalks make getting to and from the
                          city's many festivals, museums, restaurants and music
                          venues easy. A range of amenities provides many things
                          to do in Bellevue. About 40 percent of the city's
                          population are minorities, which contributes to an
                          overall diverse range of lifestyles and ideas.
                        </p>
                        <p className="mt-3">
                          While Denver sits at the base of the Rocky Mountains,
                          it's not considered a mountain town since it takes at
                          least an hour to get to the Rockies for snowboarding
                          and ski activities, a local expert explained. Olympic
                          mountain bikers, musicians, and award-winning chefs
                          about what exactly makes their hometowns so special
                          and fun. In fact, not being able to rely on spoken
                          word made them better storytellers. They fully
                          understood and used the power of showing without
                          words. They fully understood and used the power of
                          showing without words.
                        </p>
                      </div>
                      <p>
                        Probably the oldest and most important unwritten rule in
                        film industry says that you shouldn’t rely much on words
                        to tell your story. In fact, you should rely on them as
                        less as possible is simply the way most brands will
                        decide to go in 2016 &amp; beyond, as they try to tell
                        their story to their customers.
                      </p>
                      <p className="mt-3">
                        I talked to climbers, Olympic mountain bikers,
                        musicians, and award-winning chefs about what exactly
                        makes their hometowns so special and fun.
                      </p> */}
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

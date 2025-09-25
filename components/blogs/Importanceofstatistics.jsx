"use client";
import React from "react";
import Sidebar from "./sidebars/Sidebar";
import Image from "next/image";
import AudioPlayer from "./sidebars/AudioPlayer";
import TableOfContentsServer from "./sidebars/TableOfContentsServer";
import RightSideBottom from "./sidebars/RightSideBottom";
import RightSideTop from "./sidebars/RightSideTop";
import Toc from "./Toc";
import { Gallery, Item } from "react-photoswipe-gallery";

export default function ImportanceOfStatistics() {
  return (
    <div className="section panel mr-5">
      <div className="container container-full mx-3">
        <div className="panel py-4 lg:py-6 xl:py-8">
          <div className="row child-cols-12 ">
            <div className="sm:col-12 md:col-12 lg:col-6 order-1 mb-3">
              <div
                className="uc-main panel"
                role="main"
                style={{ minHeight: "120vh" }}
              >
                <div className="panel vstack gap-3 lg:gap-4 xl:gap-5 mr-3">
                  <Gallery>
                    <div
                      className="post-content panel fs-6 md:fs-5 ml-2"
                      data-uc-lightbox="animation: scale"
                    >
                      <h2 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                        Introduction
                      </h2>
                      <p className="">
                        “Did You Know “AI expert <b>Andrej Karpathy</b> predicts
                        that <b>99.9% of optimization efforts</b> will focus on
                        making content digestible for LLMs rather than human
                        readers. (Source:
                        <a
                          href="https://the-decoder.com/ai-expert-andrej-karpathy-envisions-a-web-where-99-9-of-content-is-optimized-for-ai-not-humans/#:~:text=In%20a%20recent%20post%20on,and%20other%20content%20is%20structured"
                          className="fw-bold text-blue"
                          target="_blank"
                        >
                          {" "}
                          The Decoder
                        </a>
                        ) "{" "}
                      </p>
                      <p className="mt-3">
                        How do you stand out in this sea of content? “
                        <b>Stats</b>
                        Are Your Secret Weapon”
                      </p>
                      <p>
                        In the age of generative AIs like ChatGPT, Gemini or AI
                        overviews, content does not just compete for human
                        attention. It is also evaluated by ChatGPT and other
                        version generative engines. They do not just keyword
                        search. These models go beyond keyword searching; they
                        gauge the credibility, quality, depth and authority of
                        the content to determine what gets the spotlight. And
                        here, statistics in Generative Engine Optimization play
                        a crucial role in refining our strategy, enabling
                        data-driven improvements for enhanced performance and
                        visibility.
                      </p>
                      <p className="mt-3">
                        How do you signal trustworthiness to AI? In this Blog,
                        we are going to show you the importance of statistics in
                        GEO to dominate AI Search Results.
                      </p>
                      <p className="mt-3">
                        <b> A data-driven approach</b> is your answer. Numbers
                        act as trust signals, and imply to AI models that “This
                        content is backed by real data.” A claim like “Brands
                        using AI-powered personalization see a 30% increase in
                        customer engagement” is far more compelling for the AI
                        than a vague statement like “AI improves marketing.”
                      </p>
                      <p className="mt-3">
                        But do not for a moment think that all statistics carry
                        the same weight. Generative AI cross-references data
                        with authoritative sources, for example: Google Scholar,
                        .gov sites, and industry reports, to verify the accuracy
                        of the data. Random stats won’t cut it; AI prioritizes
                        strategic, well-sourced statistics that enhance
                        credibility.
                      </p>
                      <p className="mt-3">
                        By the end of this article, you’ll know exactly why
                        statistics are so important and how you can leverage
                        data to rank higher in AI search, engage readers, and
                        establish authority, not just for algorithms, but also
                        for your regular readers.
                      </p>
                      <h2 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                        Why Generative Engines Crave Statistics
                      </h2>
                      <p>
                        Generative engines and Large Language Models (LLMs) rely
                        heavily on statistics because they are designed to
                        process vast amounts of data and identify patterns
                        within it. They prioritize content that showcases
                        authority and credibility.
                      </p>
                      <h3 className="mt-3"></h3>
                      <p>
                        They are trained to detect signals that suggest the
                        content provided is very useful. Some of these signals
                        are relevance, depth, and the most vital, credibility.
                        Statistics also provide signals on content such as,
                        “Look here! This is trusted!”
                      </p>
                      <h3 className="h5 xl:h4 mt-3 mb-2 xl:mb-3">
                        Below are some pointers of why statistics are
                        indispensable:
                      </h3>
                      <ol className="">
                        <li className="mt-2">
                          <b>Pattern Recognition</b> – LLMs analyze statistical
                          relationships between words, phrases, and concepts to
                          generate coherent and contextually relevant responses.
                        </li>
                        <li className="mt-2">
                          <b>Credibility & Authority</b> – Due to being regarded
                          as more factual, content with statistics stands a
                          higher chance of being referenced, making them ideal
                          for AI models.
                        </li>
                        <li className="mt-2">
                          <b>Summarization & Insights</b> – Key insights from a
                          sizeable amount of data that needs to be processed is
                          done through the use of Enumeration which assists the
                          user by providing direct answers
                        </li>
                        <li className="mt-2">
                          <b>Optimization for AI Search </b>– Generative Engine
                          Optimization (GEO) is an emerging strategy that
                          ensures content is structured in a way that LLMs can
                          easily process and reference.
                        </li>
                      </ol>
                      <p className="mt-3">
                        Since AI models prioritize factual accuracy and
                        structured data, articles containing well-sourced
                        statistics tend to be favored when generating responses.
                      </p>
                      <p className="mt-2">
                        For example, a blog that says “Brands using AI-powered
                        personalization see a 30% increase in customer
                        engagement” is far more compelling than a vague
                        statement like “AI improves marketing.”
                      </p>
                      <p>
                        Generative engines pull the statistic from content
                        sources and cross-reference them with credible sources
                        such as Google Scholar, as well as Google Books, and
                        rewards content that has verified data. But beware:
                        failing to use credible data will hurt your content.
                        Here’s how you can properly use estimation in order to
                        optimize for AI and human perception.
                      </p>
                      <h2 className="mt-3">
                        The Importance of Credible Sources
                      </h2>
                      <figure className="my-3 sm:my-4">
                        <Item
                          original="/assets/images/blog/internal/Importanceofstatistics1.webp"
                          thumbnail="/assets/images/blog/internal/Importanceofstatistics1.webp"
                          width="1280"
                          height="853"
                        >
                          {({ ref, open }) => (
                            <figure className="featured-image m-0 rounded ratio ratio-16x9 uc-transition-toggle overflow-hidden">
                              <Image
                                className="media-cover image uc-transition-scale-up uc-transition-opaque"
                                alt="Pink Marketing, by Mak"
                                src="/assets/images/blog/internal/Importanceofstatistics1.webp"
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
                      </figure>
                      <p className="fst-italic">
                        When it comes to statistics, the source is everything.
                        Data backed by reputable institutions have more value to
                        both the audience and generative engines. AI-generative
                        tools like Gemini and ChatGPT evaluate content on
                        E-E-A-T (Experience, Expertise, Authoritativeness,
                        Trustworthiness) principle. Which means that the source
                        affects the outcomes, a better source will always
                        produce better outcomes.
                      </p>
                      <h3 className="h5 xl:h4 mt-3 mb-2 xl:mb-3">
                        Some examples of trustworthy sources include:
                      </h3>
                      <ul className="">
                        <li className="mt-2">
                          {" "}
                          ‘.<b>gov</b>’ and ‘.<b>edu</b>’ websites
                        </li>

                        <li className="mt-2">
                          Industry reports from trusted firms and publications
                          like Statista or Nielsen
                        </li>
                        <li className="mt-2">
                          {" "}
                          Scholarly articles and peer-reviewed journals
                        </li>
                      </ul>
                      <p className="mt-2">
                        Make sure to always link back to the original study or
                        research. This ensures that the statistic is easily
                        verifiable and transparent. If you have some original
                        content, you need to make sure that you back your claims
                        with data and hard facts.
                      </p>
                      <h2 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                        <h2 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                          Putting It All Together: A Case Study s{" "}
                        </h2>{" "}
                      </h2>
                      <p>
                        For an exercise to understand the impact of statistics,
                        let us compare two approaches to the same topic:
                        “eco-friendly fashion”.
                      </p>
                      <h3 className="h5 xl:h4 mt-3 mb-2 xl:mb-3">
                        Weak Approach:{" "}
                      </h3>
                      <p className="fw-bold">
                        “Sustainable brands are growing. 65% of shoppers check
                        for ethical labels.”
                      </p>
                      <p className="mt-3">
                        {" "}
                        This statement sounds vague. It tells us that
                        sustainable brands are on the rise, but it doesn’t
                        explain why this is so. It also lists out some data, but
                        does not back it up with sources.
                      </p>
                      <h3 className="h5 xl:h4 mt-3 mb-2 xl:mb-3">
                        Strong Approach:
                      </h3>
                      <p className="fw-bold">
                        “Fast fashion’s environmental toll is driving a seismic
                        shift: 65% of shoppers now actively check for ethical
                        labels before purchasing (McKinsey, 2023). Brands like
                        Allbirds capitalize on this by weaving sustainability
                        into their storytelling—proving that transparency isn’t
                        just ethical, it’s profitable.”
                      </p>
                      <p className="mt-3">
                        This can be considered a much stronger approach. It
                        combines a credible statistic, which is listed with a
                        source (McKinsey, 2023), and real-world examples like
                        “Allbirds”, which provide depth to the statement. The
                        addition to this, it also mentions a specific year:
                        “2023”, which ensures that the readers and AI can
                        determine for what time the data is relevant for.
                      </p>
                      <h2 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                        How Statistics Help in Generative Engine Optimization
                        (GEO)
                      </h2>
                      <figure className="my-3 sm:my-4">
                        <Item
                          original="/assets/images/blog/internal/Importanceofstatistics2.webp"
                          thumbnail="/assets/images/blog/internal/Importanceofstatistics2.webp"
                          width="1280"
                          height="853"
                        >
                          {({ ref, open }) => (
                            <figure className="featured-image m-0 rounded ratio ratio-16x9 uc-transition-toggle overflow-hidden">
                              <Image
                                className="media-cover image uc-transition-scale-up uc-transition-opaque"
                                alt="Pink Marketing, by Mak"
                                src="/assets/images/blog/internal/Importanceofstatistics2.webp"
                                width="1280"
                                height="853"
                                ref={ref}
                              />
                              <a
                                onClick={open}
                                className="position-cover"
                                data-caption=""
                              ></a>
                            </figure>
                          )}
                        </Item>
                      </figure>
                      <p>
                        Let us quickly highlight what generative engine
                        optimization is. GEO is optimizing content to be
                        favorably recognized and pulled up by AI-powered search
                        engines and chatbots like ChatGPT and Google AI
                        Overview. While traditional SEO focuses on getting
                        content ranked on non-AI controlled search engines GEO
                        ensures AI models extract relevant information.
                      </p>
                      <p className="mt-3">
                        GEO ensures that AI-driven models interpret and generate
                        responses that prominently feature a brand, product, or
                        expertise in relevant queries. As AI search grows in
                        influence, businesses and individuals must adapt their
                        approach to digital visibility—GEO helps them position
                        themselves effectively within the training data and
                        contextual outputs of Generative AI.
                      </p>
                      <p className="mt-3">
                        GEO is transforming digital visibility in an AI-first
                        world. As users increasingly turn to AI-generated
                        summaries and chat-based interactions for research and
                        decision-making, optimizing content for Generative
                        Engines ensures brands remain relevant and discoverable.
                      </p>
                      <p className="mt-3">
                        Platforms like ChatGPT and Google Gemini focus on
                        credibility which makes Experience, Expertise,
                        Authoritativeness, Trustworthiness (E-E-A-T) a major
                        factor in how AI-generated responses are generated. GEO
                        mastery has become a fundamental business strategy
                        during this era of AI search and lead generation.
                      </p>
                      <h3 className="h5 xl:h4 mt-3 mb-2 xl:mb-3">
                        Statistics as Trust Signals
                      </h3>{" "}
                      <p>
                        <b>Reliable and relevant statistics</b> act as powerful
                        indicators of trust. When your content is supported by
                        credible data, up-to-date research benchmarks, and
                        appropriate information, content AI and search engines
                        regard your work as authoritative. This is especially
                        important because algorithms check the veracity of the
                        content as well as the information within it. Moreover,
                        the inclusion of visuals and statistics enhances the
                        overall experience making the content more spenn
                        engaging.
                      </p>
                      <p className="mt-3">
                        For example, if you write about the growing trend of
                        sustainable fashion and back it up with a statistic such
                        as{" "}
                        <b>
                          “78% of consumers say sustainability influences their
                          purchasing decisions (Nielsen, 2023),”
                        </b>{" "}
                        the engine identifies your content as credible. This
                        increases its chances of ranking higher in search
                        results.
                      </p>
                      <h3 className="h5 xl:h4 mt-3 mb-2 xl:mb-3">
                        <h3 className="h5 xl:h4 mt-3 mb-2 xl:mb-3">
                          Improving Engagement and User Trust
                        </h3>{" "}
                      </h3>
                      <p>
                        When users come across verifiable statistics, it
                        captures thier trust, compelling them to spend more time
                        on your webpage. Measuring dwell time, which tracks how
                        long a user is on a particular page, is an important
                        determining feature for ranking webpages. Valid
                        information tends to retain users for a longer period of
                        time because it addresses their queries with reliable
                        data and offers significant value. This enables
                        generative engines to understand that your content is
                        not just relevant and purposeful, but valuable as a
                        blend of resource and demand.
                      </p>
                      <p className="mt-3">
                        By strategically integrating statistics, you not only
                        cater to the algorithm but also to human readers,
                        enhancing both <b>SEO </b>and <b>user experience</b>.
                        This is why statistics are essential for{" "}
                        <b>Generative Engine Optimization (GEO)</b>—they make
                        your content more authoritative, engaging, and
                        trustworthy.
                      </p>
                      <h2 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                        <h2 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                          6 Rules to Master Statistical Storytelling
                        </h2>{" "}
                      </h2>
                      <figure className="my-3 sm:my-4">
                        <Item
                          original="/assets/images/blog/internal/Importanceofstatistics3.webp"
                          thumbnail="/assets/images/blog/internal/Importanceofstatistics3.webp"
                          width="1280"
                          height="853"
                        >
                          {({ ref, open }) => (
                            <figure className="featured-image m-0 rounded ratio ratio-16x9 uc-transition-toggle overflow-hidden">
                              <Image
                                className="media-cover image uc-transition-scale-up uc-transition-opaque"
                                alt="Pink Marketing, by Mak"
                                src="/assets/images/blog/internal/Importanceofstatistics3.webp"
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
                      </figure>
                      <p>
                        Now that you understand the importance of statistics,
                        let us tell you how to use effectively. Here are six
                        guiding rules to aid you in story-telling using
                        statistics:
                      </p>
                      <h3 className="h5 xl:h4 mt-3 mb-2 xl:mb-3">
                        <h3 className="h5 xl:h4 mt-3 mb-2 xl:mb-3">
                          1. Hook First, Stat Second
                        </h3>{" "}
                      </h3>
                      <p>
                        Start with a problem or trend that resonates with your
                        audience, then deploy a statistic to support it. The
                        statistic should act as proof of your claim, not the
                        focal point of your argument.
                      </p>
                      <h4 className="h6 xl:h5 mt-2 mb-2">Example:</h4>{" "}
                      <p>
                        “Remote work isn’t just a trend—it’s a productivity
                        game-changer. 82% of employees report lower stress
                        levels when given schedule flexibility (Gallup, 2023).”
                      </p>
                      <p className="mt-3">
                        The statistic acts as evidence for the opening
                        statement, and it validates the trend that you’re
                        discussing.
                      </p>
                      <h3 className="h5 xl:h4 mt-4 mb-2 xl:mb-3">
                        2. Befriend Visuals (But Keep Them Simple)
                      </h3>
                      <p>
                        With the right visuals, your sense may be much more
                        powerful. Using animation tools to create a proper slide
                        together with the right chart can elevate the data to
                        another level. Flourish and Infogram are great tools to
                        create stunning interactive graphics that capture my
                        attention.
                      </p>
                      <p className="mt-3">
                        But you need to keep it in mind not to overdo it. Keep
                        the visuals straightforward and relevant to your
                        message.
                      </p>
                      <h3 className="h5 xl:h4 mt-4 mb-2 xl:mb-3">
                        3. The “Goldilocks” Rule of Quantity
                      </h3>
                      <p>
                        Less is more when it comes to statistics. Too few stats
                        can make your content appear shallow and not well
                        researched, while too many stats can overwhelm readers
                        and AI alike, and distract them from your main message.
                        A good rule of thumb is to aim for{" "}
                        <b>1-2 stats per 300-400 words.</b>
                      </p>
                      <p className="mt-2">
                        You should focus on quality over quantity. A single,
                        well-placed stat can be more impactful than a random
                        list of numbers.
                      </p>
                      <h3 className="h5 xl:h4 mt-4 mb-2 xl:mb-3">
                        4. Source Like a Pro
                      </h3>
                      <p>
                        The trustworthiness of your statistics is directly tied
                        to the credibility of your sources. Generative engines
                        can easily spot untrustworthy statistics, and using
                        unreliable sources can hurt your rankings.
                      </p>
                      <p className="mt-3"> Use reputable sources such as:</p>
                      <ul className="fw-bold">
                        <li className="mt-2">Government websites (.gov)</li>
                        <li className="mt-2">
                          Educational institutions (.edu)
                        </li>
                        <li className="mt-2">
                          Industry leaders and research firms (e.g., Statista,
                          Nielsen)
                        </li>
                      </ul>
                      <p>
                        Always provide a direct link to the source in order to
                        provide transparency and trustworthiness.
                      </p>
                      {/* css CTA */}
                      <h3 className="h5 xl:h4 mt-4 mb-2 xl:mb-3">
                        5. Humanize the Numbers
                      </h3>
                      <p>
                        Statistics and numbers can come off as dry and
                        impersonal. To make them more relatable, add real-world
                        examples and case studies that resonate with the
                        intended audience.
                      </p>
                      <h4 className="h6 xl:h5 mt-4 mb-2 xl:mb-3">Example:</h4>
                      <p>
                        “While 70% of startups fail, Lisa’s eco-apparel brand
                        thrived by targeting Gen Z’s $360B spending power.”
                      </p>
                      <p className="mt-3">
                        A personal anecdote can change the way we perceive facts
                        and make them much more interesting, and add a lasting
                        impression in the reader’s mind.
                      </p>
                      <h3 className="h5 xl:h4 mt-4 mb-2 xl:mb-3">
                        6. Update or Bust
                      </h3>
                      <p>
                        Your data automatically becomes irrelevant if it is
                        outdated. Ensure your information is as up-to-date as
                        possible. Stale statistics can hurt your dependability
                        with AI and increase distrust in your content.
                      </p>
                      <p className="mt-3">
                        A good practice is to{" "}
                        <b>refresh your statistics every 6–12 months</b> to stay
                        relevant and AI-friendly.
                      </p>
                      <h2 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                        Conclusion: Why Data Is the Key to AI-Driven Visibility
                      </h2>
                      <p>
                        Generative engines are revolutionizing{" "}
                        <b>how content is ranked and discovered</b> This makes
                        credibility the new currency of digital visibility. In
                        this AI-first era, one needs to be discovered and stated
                        by AI, for this strategic integration of data is
                        essential. Statistics{" "}
                        <b>
                          turn vague-looking claims into authoritative insights
                          that can be trusted
                        </b>
                        . It helps both algorithms and audiences recognize your
                        content and consider it <b>reliable and valuable</b>.
                      </p>
                      <p className="mt-3 fw-bold">Key Takeaways:</p>
                      <ul>
                        <li className="mt-2">
                          <b>AI prioritizes verifiable data:</b> credible
                          statistics strengthen Experience, Expertise,
                          Authoritativeness, Trustworthiness (E-E-A-T).
                        </li>
                        <li className="mt-2">
                          <b>Quality over quantity:</b> Well-sourced information
                          from authoritative sources (eg : .gov or .edu), which
                          is recent and relevant to the topic, carries the most
                          weight.
                        </li>
                        <li className="mt-2">
                          <b> Storytelling matters:</b> pairing stats with
                          real-world examples and visuals makes content more
                          engaging for both AI and Humans.
                        </li>
                        <li className="mt-2">
                          <b>Balance is key:</b> excessive or outdated
                          statistics can have a negative impact on your
                          credibility, timely updates ensure long-term
                          relevance.
                        </li>
                      </ul>
                      <h3 className="h xl:h4 mt-4 mb-2 xl:mb-3">
                        What’s Next?
                      </h3>
                      <p>
                        <b>
                          You need to ask these questions, and if the answer is
                          no. It is Time to Take Action!
                        </b>
                      </p>
                      <ul>
                        <li className="mt-2">
                          Is your information <b>trustworthy and credible</b>?
                        </li>
                        <li className="mt-2">
                          visuals or stories? Are your sources{" "}
                          <b>properly linked and reputable</b>?
                        </li>
                        <li className="mt-2">
                          Would your data be more effective if it were
                          represented through <b>visuals or stories</b>?
                        </li>
                      </ul>
                      <p className="mt-3">
                        The future of search is smarter, faster, and more
                        data-driven than ever. The future of your discovery
                        depends very heavily on the question: will your content
                        be the one generative engines choose to surface?
                      </p>
                      <p className="mt-3">
                        <b>
                          {" "}
                          Make sure you follow the right strategies. Optimize
                          wisely. Stay ahead of others while ranking higher.
                        </b>
                      </p>
                      {/*  */}
                    </div>
                  </Gallery>
                </div>
              </div>
            </div>
            {/* <hr className="w-100 m-0 d-block mt-4 lg:mt-6 xl:mt-8 " /> */}
            <div className="lg:col-3 order-2 lg:order-0 sticky-element3 sm:mt-3">
              <AudioPlayer />
              <span className="">
                <TableOfContentsServer />
              </span>
            </div>
            <div className="d-none lg:d-block lg:col-3 order-2 lg:order-2 sticky-element3">
              <RightSideTop />
              <RightSideBottom />
            </div>
            {/* <div className="d-block lg:d-none">
              <Toc />
            </div> */}
          </div>
          {/* <hr className="w-100 m-0 d-block mt-4 lg:mt-6 xl:mt-8" /> */}
          <div className="post-footer panel vstack sm:hstack gap-3 justify-between justifybetween border-top py-4 mt-4">
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
    </div>
  );
}

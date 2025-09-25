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

export default function AutoCompletePromptsHack() {
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
                        Imagine this: You start typing “top GEO hacks…” and
                        Google finishes it for you with suggestions like “…for
                        dominating AI search in 2025.” Coincidence? Hardly.
                        Behind those tiny, time-saving suggestions lies a
                        trillion-dollar battlefield where brands, bloggers, and
                        bots fight to control what the internet thinks you
                        actually want. And here’s the wild part—you’re either
                        shaping those suggestions or getting buried by them.
                        Knowing the dynamics behind and trying to influence
                        these autocomplete prompts is a big part of Generative
                        Engine Optimization (GEO) strategy.
                      </p>
                      <p className="mt-3">
                        Before we proceed any further with the article, we need
                        to understand what Generative Engine Optimization is. It
                        is the art of hacking how AI thinks and responds to the
                        user queries. No more keyword stuffing or link begging,
                        GEO is about injecting your brand into the neural
                        pathways of these AI Engines and LLMs.
                      </p>
                      <p className="mt-3">
                        It’s as if you were teaching ChatGPT, Gemini, and the
                        rest of the gang that your content is the ultimate go-to
                        place for truth and information and dishing it out in AI
                        answers, voice searches, and those uncannily accurate
                        auto-complete suggestions. How? By writing AI’s love
                        language: context, semantic depth, and real-time
                        relevance.
                      </p>
                      <p className="mt-3">
                        <b>Why Your Future Depends on This</b>:Let’s get real,
                        AI isn’t just a story from science fiction films, it is
                        now becoming a part of our day-to-day reality. It’s
                        generating responses on the fly, pulling in content from
                        across the web that’s ripe for its algorithms.
                      </p>
                      <p className="mt-2">
                        SEO is not dead for now, but most of its principles
                        would be redundant if it’s not wired for AI. GEO turns
                        your content into a magnet for LLMs, pulling your brand
                        into AI-generated answers, featured snippets, and that
                        golden “zero-click” space where users never leave the
                        search page. Ready to stop playing catch-up and start
                        programming the future of search?
                      </p>
                      <p className="mt-2">
                        Buckle up. With this blog, we’re diving into the
                        algorithms, the mind-reading tech, and the secret sauce
                        to make AI your biggest hype-man.
                      </p>
                      <h2 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                        Understanding How Auto-Complete Algorithms Work
                      </h2>
                      <figure className="my-3 sm:my-4">
                        <Item
                          original="/assets/images/blog/internal/autocompletepromptshack1.webp"
                          thumbnail="/assets/images/blog/internal/autocompletepromptshack1.webp"
                          width="1280"
                          height="853"
                        >
                          {({ ref, open }) => (
                            <figure className="featured-image m-0 rounded ratio ratio-16x9 uc-transition-toggle overflow-hidden">
                              <Image
                                className="media-cover image uc-transition-scale-up uc-transition-opaque"
                                alt="Pink Marketing, by Mak"
                                src="/assets/images/blog/internal/autocompletepromptshack1.webp"
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
                      <h3 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                        Mechanics of Auto-Complete Systems
                      </h3>
                      <p className="mt-2">
                        Auto-complete mechanisms involve analyzing information
                        from one or more sources, for example:
                      </p>
                      <ul>
                        <li className="mt-2">
                          <b>User behavior:</b> The system identifies popular
                          search patterns.
                        </li>
                        <li className="mt-2">
                          <b>Trending topics: </b> The system does prioritize
                          what’s hot at the moment.
                        </li>
                      </ul>
                      <p className="mt-2">
                        <b>Semantic relevance:</b> Auto-complete
                        algorithms understand how words relate to one another so
                        they offer relevant predictions.
                      </p>
                      <h3 className="h4 xl:h3 mt-2 mb-2 xl:mb-3">
                        The Role of Natural Language Processing (NLP)
                      </h3>{" "}
                      <p className="">
                        At the core of modern AI-driven tools lies Natural
                        Language Processing (NLP)—the technology that bridges
                        the gap between human communication and machine
                        understanding. NLP empowers AI systems to{" "}
                        <b>interpret, process, and respond</b> in natural
                        language, making interactions seamless and intuitive.
                      </p>
                      <p className="mt-3">
                        One of its most common yet powerful applications is
                        <b>predictive text and auto-complete suggestions.</b> By
                        analyzing vast amounts of data, NLP algorithms assess
                        <b> relevance, context, and user intent</b> to predict
                        what someone might search for or type next. This goes
                        beyond simple word matching; it leverages sophisticated
                        language models to deliver accurate, real-time
                        suggestions that enhance user experience.
                      </p>
                      <p className="mt-3">
                        From chatbots to voice assistants, NLP is the invisible
                        force making AI more human-like in its responses. As the
                        technology evolves, its ability to understand nuance,
                        sentiment, and even humor will only deepen, ushering in
                        a new era of{" "}
                        <b>smarter, more intuitive AI interactions.</b>
                      </p>
                      <h3 className="h4 xl:h3 mt-2 mb-2 xl:mb-3">
                        Key Factors Influencing Auto-Complete Suggestions
                      </h3>
                      <p className="">
                        Several elements influence the suggestions you see:
                      </p>
                      <ul>
                        <li className="mt-2">
                          <b>Search and popularity:</b> Prioritized for
                          high-volume searches.
                        </li>
                        <li className="mt-2">
                          <b>User location and search history:</b> AI
                          personalizes recommendations based on what you
                          previously searched and where you are.
                        </li>
                        <li className="mt-2">
                          <b>Semantic relationships:</b> The relationship
                          between words and phrases can change the outcome of
                          suggestions.
                        </li>
                      </ul>
                      <h2 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                        The Importance of Auto-Complete Prompts in GEO and User
                        Experience
                      </h2>
                      <figure className="my-3 sm:my-4">
                        <Item
                          original="/assets/images/blog/post-2.jpg"
                          thumbnail="/assets/images/blog/internal/autocompletepromptshack2.webp"
                          width="1280"
                          height="853"
                        >
                          {({ ref, open }) => (
                            <figure className="featured-image m-0 rounded ratio ratio-16x9 uc-transition-toggle overflow-hidden">
                              <Image
                                className="media-cover image uc-transition-scale-up uc-transition-opaque"
                                alt="Pink Marketing, by Mak"
                                src="/assets/images/blog/internal/autocompletepromptshack2.webp"
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
                        Auto-complete prompts act as the first touchpoint in
                        AI-driven search, shaping how users interact with AI and
                        what answers they discover. GEO ensures your content
                        doesn’t just rank well for traditional search engines
                        but also aligns with how AI interprets and prioritizes
                        queries. By optimizing for predictive suggestions, you:
                      </p>
                      <ul>
                        <li className="mt-2">
                          Dominate AI and human search results – Secure top
                          visibility in both generative AI outputs (like
                          ChatGPT, Gemini) and conventional search engines.
                        </li>
                        <li className="mt-2">
                          Speak the language of AI models – GEO fine-tunes your
                          content to match how AI understands context, intent,
                          and relevance.
                        </li>
                        <li className="mt-2">
                          Become a trusted resource – Position your brand as the
                          bridge between user queries and AI-generated
                          responses, driving higher engagement and traffic.
                        </li>
                      </ul>
                      <p className="mt-3">
                        But GEO’s impact goes beyond visibility—it’s about
                        strategically embedding your brand in AI ecosystems.
                        Here’s how:
                      </p>
                      <h3 className="h4 xl:h4 mt-3 mb-2 xl:mb-3">
                        1. Boost Brand Authority in AI Ecosystems
                      </h3>
                      <p>
                        Optimizing for auto-complete isn’t just about
                        visibility—it’s about positioning your brand as a top
                        authority in your niche. When your content is
                        strategically aligned with AI suggestions, it drives:
                      </p>
                      <ul>
                        <li className="mt-2">
                          <b>Brand trust:</b> AI will determine your content to
                          be trustworthy and credible.
                        </li>
                        <li className="mt-2">
                          <b>Increased visibility:</b> Your content may be
                          referenced in AI outputs such as ChatGPT or Google AI
                          Overview.
                        </li>
                      </ul>
                      <p className="mt-3">
                        Example: A well-optimized GEO guide on “best practices
                        for AI content” might appear verbatim in ChatGPT
                        responses, giving your brand extra visibility.
                      </p>
                      <h3 className="h4 xl:h4 mt-3 mb-2 xl:mb-3">
                        2. Capture Real-Time User Intent
                      </h3>
                      <p>
                        Auto-complete reflects what users are searching for
                        right now, which is why it is such a good source for
                        tapping into the real-time intent of the masses. When
                        you tailor your content to answer those blossoming
                        queries, you can provide extremely relevant,
                        up-to-date answers to the questions people are asking in
                        real time.
                      </p>
                      <ul>
                        <li className="mt-2">
                          <b>Trending queries:</b> Content that addresses what
                          people are currently searching for can gain quick
                          visibility.
                        </li>
                        <li className="'mt-2">
                          <b>Localized needs:</b> Auto-complete also reflects
                          local search trends as well, so optimizing for these
                          can potentially make your content more relevant to
                          users in a particular area or locality.
                        </li>
                      </ul>
                      <p className="mt-3">
                        Example: By targeting “how to use ChatGPT to create
                        content in 2025,” you can make sure that your content
                        matches up with those up-to-date, high-traffic queries.
                      </p>
                      <h3 className="h4 xl:h4 mt-3 mb-2 xl:mb-3">
                        3. Dominate AI-Powered Search Interfaces
                      </h3>
                      <p>
                        AI-driven search platforms (like Microsoft Co-Pilot or
                        ChatGPT) rely heavily on auto-complete to drive search
                        suggestions. When you are writing content that the
                        predictive prompts suggest to users, you increase your
                        chances of appearing in the following:
                      </p>
                      <ul>
                        <li className="mt-2">
                          <b>AI-generated answers</b>
                        </li>
                        <li className="mt-2">
                          <b>Google AI Overviews</b>
                        </li>
                        <li className="mt-2">
                          <b>Zero-click environments</b>
                        </li>
                      </ul>
                      <p className="mt-3">
                        This ensures your content remains relevant as AI-based
                        platforms become more mainstream.
                      </p>
                      <h3 className="h4 xl:h4 mt-3 mb-2 xl:mb-3">
                        4. Enhance NLP Compatibility
                      </h3>
                      <p>
                        Since auto-complete systems depend on NLP to understand
                        user queries, optimizing your content to match
                        conversational patterns enhances its chances of being
                        recommended. When AI systems can parse your content
                        easily and effectively, it’s more likely to be
                        suggested.
                      </p>
                      <ul>
                        <li className="mt-2">
                          <b>Better content parsing:</b> Aligning your content
                          with natural language helps AI systems recommend it.
                        </li>
                        <li className="mt-2">
                          <b>Human-like language:</b> Writing in a natural,
                          conversational tone increases your chances of getting
                          picked up by AI as well as being more engaging for the
                          user.
                        </li>
                      </ul>
                      <h3 className="h4 xl:h4 mt-3 mb-2 xl:mb-3">
                        5. Target Long-Tail, Low-Competition Opportunities
                      </h3>
                      <p>
                        Auto-complete frequently shows long-tail, niche queries,
                        often with lower competition. GEO optimizes your content
                        for long-tail phrases, enabling you to gain mentions in
                        targeted answers generated by AI Engines.
                      </p>
                      <ul>
                        <li className="mt-2">
                          <b>Long-tail keywords:</b> These are more specific and
                          refined, ignored by other websites, but very useful
                          for niche audiences.
                        </li>
                        <li className="mt-2">
                          <b>Lower competition:</b> These queries have lower
                          competition for ranking, making it easier to command
                          highly qualified traffic.
                        </li>
                      </ul>
                      <p className="mt-3">
                        Example: Optimizing for a phrase like “auto-complete
                        prompts to enhance GEO strategy” targets a
                        low-competition, highly relevant search.
                      </p>
                      <hr className="w-100 m-0 d-block mt-4 lg:mt-6 xl:mt-8" />
                      <h2 className="internal/autocompletepromptshack1.webp">
                        Mastering Predictive Query Optimization
                      </h2>
                      <h3 className="h5 xl:h4 mt-4 mb-2 xl:mb-3">
                        Targeting Predictive Queries
                      </h3>
                      <p>
                        A critical component of an effective Generative Engine
                        Optimization (GEO) strategy is understanding and
                        leveraging predictive queries—the search terms and
                        prompts users are most likely to type into AI-driven
                        search interfaces like ChatGPT, Gemini, or Perplexity.
                        By anticipating these queries, you can align your
                        content with real-time user intent, improving visibility
                        in AI-generated responses. Some tools that can help you
                        with the same include:
                      </p>
                      <ul>
                        <li className="mt-2">
                          <b>Google Autocomplete:</b> Start typing a query and
                          observe the suggested completions. This updates in
                          realtime as the trend changes.
                        </li>
                        <li className="mt-2">
                          <b>AnswerThePublic:</b> This tool visualizes search
                          queries in a structured format, highlighting common
                          questions that may be asked.
                        </li>
                        <li className="mt-2">
                          <b>SEMrush:</b> An excellent resource that helps
                          identify trending search queries.
                        </li>
                        <li className="mt-2">
                          <b>AI Autocomplete & Suggestion Features:</b> Modern
                          AI search tools (e.g., ChatGPT, Gemini) can predict
                          and suggest queries based on common user inputs.
                        </li>
                      </ul>
                      <p className="mt-3">
                        By systematically analyzing autocomplete prompts,
                        question-based queries, and AI trends, you can improve
                        the content alignment with the LLMs and Generative
                        Engines and increase visibility of your content in
                        AI-generated answers.
                      </p>
                      <h3 className="h4 xl:h4 mt-3 mb-2 xl:mb-3">
                        Focus on Long-Tail, Conversational Queries
                      </h3>{" "}
                      <p>
                        In AI-driven search, long-tail conversational and
                        detailed queries dominate user interactions. Unlike
                        traditional SEO, GEO thrives on natural language
                        patterns, making these queries a goldmine for visibility
                        in AI responses. Here are a few arguments, why they
                        work:
                      </p>
                      <ul>
                        <li className="mt-2">
                          <b>Matches LLM Prompt Behavior:</b> AI tools like
                          ChatGPT excel at answering full-sentence questions, so
                          content optimized for “how,” “why,” and “what” queries
                          ranks better.
                        </li>
                        <li className="mt-2">
                          <b>Question-based queries:</b> With voice assistants
                          (Siri, Alexa) and AI chat, users ask questions
                          verbally, favoring natural language.
                        </li>
                      </ul>
                      <p className="mt-3">
                        Lower Competition, Higher Intent: Auto-complete and AI
                        suggestions often reveal specific and detailed queries
                        that have less competition but attract high-intent
                        users.
                      </p>
                      <h3 className="h4 xl:h4 mt-3 mb-2 xl:mb-3">
                        Leveraging User Intent
                      </h3>{" "}
                      <p>
                        To dominate AI-powered search results and autocomplete
                        suggestions, you must deeply understand user intent. It
                        means the underlying purpose behind every query. GEO
                        requires optimizing for how LLMs interpret and respond
                        to intent across conversational interfaces. Different
                        types of user intent can be as follows:
                      </p>
                      <ul>
                        <li className="mt-2">
                          <b>Informational intent:</b> Informational queries
                          dominate AI chat interfaces. By becoming a trusted
                          source for answers, you increase your content’s
                          retrieval likelihood.
                        </li>
                        <li className="mt-2">
                          <b>Navigational intent</b>: For navigational queries,
                          AI tools pull data from authoritative references.
                          Being the primary source for your brand terms is
                          critical.
                        </li>
                        <li className="mt-2">
                          <b>Transactional intent:</b> AI tools like Perplexity
                          and Bing AI now integrate shopping features.
                          Optimizing for transactional intent puts you in front
                          of high-intent buyers.
                        </li>
                      </ul>
                      <p className="mt-3">
                        GEO isn’t just about what users ask, it is also
                        concerned about why they ask it. By aligning your
                        content to the user’s intent, you’ll dominate
                        autocomplete suggestions and secure your spot in
                        AI-generated answers and LLMs’ dataset.
                      </p>
                      {/* GEO Course CTA */}
                      <hr className="w-100 m-0 d-block mt-4 lg:mt-6 xl:mt-8" />
                      <h2 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                        Semantic GEO: Structuring Content for AI Understanding
                      </h2>
                      <p>
                        Semantic GEO represents the evolution of content
                        optimization, moving beyond traditional keyword matching
                        to focus on how AI systems understand, contextualize,
                        and retrieve information.
                      </p>
                      <p className="mt-3">
                        Modern AI systems don’t just match keywords – they build
                        conceptual models of your content. Semantic GEO ensures
                        your material:
                      </p>
                      <ul>
                        <li className="mt-2">
                          Aligns with AI knowledge representation systems
                        </li>
                        <li className="mt-2">
                          Appears in more contextual responses
                        </li>
                        <li className="mt-2">
                          Maintains relevance as algorithms evolve
                        </li>
                        <li className="mt-2">
                          Creates natural bridges between related queries
                        </li>
                      </ul>
                      <h3 className="mt-2">The Semantic approach combines:</h3>
                      <ul>
                        <li className="mt-2">
                          <b>Contextual Intelligence Framework:</b> AI models
                          like GPT-4 and Gemini analyze content through
                          multidimensional semantic lenses. Here, the focus
                          shifts from isolated keywords to thematic clusters and
                          conceptual relationships.
                        </li>
                        <li className="mt-2">
                          <b>Advanced Semantic Signals:</b> AI Engines
                          explicitly identify and connect relevant entities. To
                          conquer this, you should maintain consistent thematic
                          depth throughout content and show how concepts
                          interact.
                        </li>
                        <li className="mt-2">
                          <b>LSI 2.0: Modern Semantic Optimization:</b> AI goes
                          beyond traditional Latent Semantic Indexing by
                          incorporating Neural embeddings, Knowledge graph
                          connections and Contextual word representations.
                        </li>
                        <li className="mt-2">
                          <b>AI-Friendly Content Architecture:</b> To employ
                          architecture, you should ensure hierarchical
                          information structures, use of schema.org markup and
                          transitional phrasing that mirrors AI reasoning
                          patterns.
                        </li>
                      </ul>
                      <p className="mt-3">
                        By leveraging semantic GEO, you make sure that content
                        is not only focused on single keywords, but the broader
                        context AI takes into account for ranking them. It
                        transforms your content from being merely “findable” to
                        being “understandable” and “actionable” by AI systems,
                        significantly improving your GEO performance across all
                        generative search platforms.
                      </p>
                      <h2 className="h2 xl:h3 mt-4 mb-2 xl:mb-3">Conclusion</h2>
                      <p>
                        Let’s cut to the chase—auto-complete isn’t just
                        predicting searches; it’s dictating them. Every time
                        someone types a half-formed thought into Google or
                        whispers a question to Siri, they’re handing over the
                        keys to what the internet thinks matters.
                      </p>
                      <p className="mt-3">
                        AI is the new gatekeeper of how people find information
                        online. If your content isn’t whispering back to those
                        AI algorithms in their native tongue, you’re basically
                        shouting into a void.
                      </p>
                      <p className="mt-3">
                        <b>But here’s the good news: </b> You don’t need a
                        crystal ball to win this prediction game. With GEO,
                        you’ve got the blueprint to hack the system. Optimize
                        for auto-complete, master semantic depth, and structure
                        your content like it’s fuel for AI’s brain.
                      </p>
                      <p className="mt-3">
                        Viola! Suddenly, you’re the reason Google finishes
                        sentences in the way you want it to. You’re the source
                        of ChatGPT quotes. You’re the answer that pops up before
                        users even finish typing.
                      </p>
                      <p className="mt-3">
                        Outdated SEO rules crafted primarily for Google’s old
                        search algorithm has no place in the new AI-driven
                        landscape. Today the true power lies in becoming the
                        algorithm’s teacher rather than its student. Your
                        content must be infused with algorithmic DNA,
                        meticulously structured with mathematical precision in
                        entity relationships, semantic connections, and
                        authoritative assertions.
                      </p>
                      <p className="mt-3">
                        This algebraic approach to content architecture
                        positions you not as a follower of best practices, but
                        as the architect of the very patterns AI systems will
                        adopt and amplify. In this new paradigm, dominance goes
                        to those who don’t just understand the algorithm, but
                        fundamentally reshape how it processes and prioritizes
                        information by establishing themselves as primary
                        sources.
                      </p>
                      <p className="mt-3">
                        The battle for visibility has evolved from optimization
                        to education, where the most compelling teachers wield
                        the greatest influence over AI’s evolving standards of
                        relevance and authority.
                      </p>
                      <p className="mt-3">
                        <b>P.S</b> Still typing “how to keep up with SEO”? Let’s
                        fix that. Time to geotag your spot in the AI universe.
                      </p>
                      {/*  */}
                    </div>
                  </Gallery>
                </div>
              </div>
            </div>
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

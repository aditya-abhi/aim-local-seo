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

export default function FixaiCrawlability() {
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
                        Introduction: Why AI Crawlability Matters
                      </h2>
                      <p className="mt-3">
                        Imagine that your SEO is flawless. Your traffic is
                        growing. But what if the next wave of AI search engines
                        can’t even understand your content? Spoiler: It’s
                        because you haven’t fixed AI Crawlability on your
                        website.
                      </p>
                      <p>
                        Here’s the spicy truth: traditional SEO is no longer
                        enough to enable AI Crawlability.{" "}
                        <a
                          href="https://surferseo.com/blog/ai-overviews-study/#:~:text=52%25%20of%20sources%20mentioned%20by%20Google%20AI%20overviews%20rank%20in%20the%20top%2010%20results"
                          className="fw-bold text-blue hover:text-purple-600"
                          target="_blank"
                        >
                          {" "}
                          Surfer SEO’s study of over 405,000 searches
                        </a>{" "}
                        found that while 52% of sources in AI Overviews rank in
                        the top 10 organic results, 48% come from lower-ranked
                        pages. Sure, keywords and backlinks got you invited to
                        the party, but AI-powered search engines like Gemini,
                        ChatGPT, and Google AI Overview are the new VIPs, and
                        they’re hungry for content that’s structured,
                        context-rich, and actually digestible.
                      </p>
                      <p>
                        If your site’s still stuck in the “keyword salad” era,
                        you’re not just missing out on traffic. You’re handing
                        competitors the mic at the biggest show in town.
                      </p>
                      <p>
                        Before diving into the blog, here’s a quick note for
                        those who think AI is just copying their content and
                        have blocked AI crawlers on their website. AI isn’t
                        stealing your content, it’s simply pulling insights and
                        knowledge to help answer people’s questions.
                      </p>
                      <p>
                        By blocking AI crawlers, you’re actually limiting your
                        own reach. AI platforms handle billions of queries
                        daily, and if your content isn’t accessible, it won’t be
                        used as a source, meaning you could be missing out on a
                        ton of potential customers.
                      </p>
                      <p>
                        But don’t panic, this isn’t a tech apocalypse. It’s a
                        golden ticket. In this guide, we’ll show you how to flip
                        the script, ditch the SEO stone age, and turn your site
                        into an all-you-can-eat buffet for AI bots. Let’s make
                        sure they’re raving about your content, not ghosting it
                        like last season’s avocado toast trend.
                      </p>
                      <p className="mt-3">
                        (Spoiler: It’s easier than you think. And yes, we’re
                        bringing the recipe to you.)
                      </p>
                      <h3 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                        What is AI Crawlability?
                      </h3>
                      <p>
                        AI crawlability refers to how well your website is
                        indexed and understood by AI-powered bots, such as
                        Google AI Overview, ChatGPT, or other large language
                        models (LLMs like Google’s Geminie and GPT-4o). The
                        given bots are programmed to crawl, analyze, and rank
                        content based on several factors–its relevance,
                        structure, overall context, and the trust authority
                        presented by the website or author.
                      </p>
                      <h3 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                        Why Traditional SEO Tactics ≠ AI Crawlability
                      </h3>
                      <p>Traditional SEO focuses on things like:</p>
                      <ul>
                        <li className="'mt-2">Keyword placement</li>
                        <li className="'mt-2">Backlinks</li>
                        <li className="'mt-2">User experience</li>
                      </ul>
                      <p>
                        However, AI crawlability is all about{" "}
                        <b>
                          making your site easily digestible for AI systems,
                        </b>
                        with an emphasis on context, relevance, and structure.
                        Unlike traditional SEO, AI crawlers don’t just care
                        about keywords—they care about how well your content
                        answers a specific question, what the context of the
                        content is, and much more.
                      </p>
                      <hr className="w-100 m-0 d-block mt-4 lg:mt-6 xl:mt-8" />
                      <h2 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                        Common AI Crawlability Issues
                      </h2>
                      <p>
                        To make sure your website is ready for AI, you need to
                        address common crawlability issues. These can be divided
                        into three categories:
                      </p>
                      <h3 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                        <h3 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                          A. Technical Blockers
                        </h3>{" "}
                      </h3>
                      <ul>
                        <li className="mt-2">
                          <b>Robots.txt Misconfigurations:</b> A Robot.txt
                          disallow all rule can accidentally block AI crawlers,
                          cutting them off from your content and preventing them
                          from gathering key data. Don’t let a strict Robot.txt
                          disallow all setting sabotages your site’s visibility.
                        </li>

                        <li className="mt-2">
                          <b>Incorrect Meta Tags:</b> Meta tags such as noindex
                          and nofollow will stop AI crawlers from indexing your
                          content.
                        </li>
                        <li className="mt-2">
                          <b>Missing LLMs.txt File:</b> LLMs like GPT-4o need
                          this file to crawl and understand your site properly.
                        </li>
                        <li className="mt-2">
                          <b>Errors and Slow Load Times: 5xx or 4xx errors</b>{" "}
                          and slow loading speeds can cause AI crawlers to
                          abandon your site.
                        </li>
                        <li className="mt-2">
                          <b>JavaScript/AJAX-heavy Sites:</b> Dynamic content on
                          websites may be overlooked by AI crawlers, which can
                          impact how your site is indexed.
                        </li>
                      </ul>
                      <h3 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                        B. Content & Structure Problems
                      </h3>{" "}
                      <ul>
                        <li className="mt-2">
                          <b>Poor Internal Linking: </b>If your pages aren’t
                          properly connected internally, AI crawlers might miss
                          the main and key content of your site.
                        </li>
                        <li className="mt-2">
                          <b>Thin or Duplicate Content:</b> AI bots prefer
                          unique and high-quality content. Pages with low
                          quality or intent and duplicates often get ignored.
                        </li>
                        <li className="mt-2">
                          <b> Unstructured Data: </b>AI crawlers can be confused
                          due to absence of vital set headings, schema markups,
                          and semantic HTML.
                        </li>
                        <li className="mt-2">
                          <b>Mobile-Unfriendly Design: </b>AI prioritizes
                          mobile-first indexing, so if your site isn’t
                          mobile-friendly, you’re at a disadvantage.
                        </li>
                        <li className="mt-2">
                          <b>AI-Written Content: </b>I pick great content.
                          However, context is required to properly crawl and
                          index.
                        </li>
                      </ul>
                      <h3 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                        C. AI-Specific Challenges
                      </h3>{" "}
                      <ul>
                        <li className="mt-2">
                          <b>Missing Context for LLMs: </b>LLMs need clear
                          connections between entities (like people, places, or
                          things) to understand and rank your content.
                        </li>
                      </ul>{" "}
                      <ul>
                        <li className="mt-2">
                          <b>Lack of Entity Optimization: </b> Without clear
                          entities and relationships, AI can struggle to grasp
                          the core purpose of your page.
                        </li>
                      </ul>
                      <h2 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                        Step-by-Step Fixes for AI Crawlability
                      </h2>
                      <figure className="my-3 sm:my-4">
                        <Item
                          original="/assets/images/blog/internal/FixaiCrawlability1.webp"
                          thumbnail="/assets/images/blog/internal/FixaiCrawlability1.webp"
                          width="1280"
                          height="853"
                        >
                          {({ ref, open }) => (
                            <figure className="featured-image m-0 rounded ratio ratio-16x9 uc-transition-toggle overflow-hidden">
                              <Image
                                className="media-cover image uc-transition-scale-up uc-transition-opaque"
                                alt="Pink Marketing, by Mak"
                                src="/assets/images/blog/internal/FixaiCrawlability1.webp"
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
                        Now that we know the issues, it’s time to fix them.
                        Here’s a breakdown of the steps you can take to{" "}
                        <b>fix AI crawlability </b>and boost your website’s
                        chances of ranking higher on AI-powered search engines.
                      </p>
                      <h3 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                        A. Audit Your Site for AI Crawlers
                      </h3>{" "}
                      <p>
                        Before making any changes, conduct an audit of your
                        site. Tools like:
                      </p>
                      <ul>
                        <li className="mt-2">
                          <b>AI Monitor</b>
                        </li>
                        <li className="mt-2">
                          <b>SEMrush</b>
                        </li>
                      </ul>
                      <p>…will help you identify:</p>
                      <ul>
                        <li className="mt-2">
                          How much traffic do you get from generative AI tools
                          like ChatGPT, Copilot, and AI Overview?
                        </li>
                        <li className="mt-2">
                          Are AI Bots crawling your site or not, and if it’s
                          not, so why?
                        </li>
                        <li className="mt-2">
                          Orphaned pages that AI bots might miss
                        </li>
                      </ul>
                      <h3 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                        B. Technical Fixes
                      </h3>{" "}
                      <h4 className="h6 xl:h4 mt-2 mb-2 xl:mb-2">
                        Update Robots.txt
                      </h4>
                      <p>
                        Your robots.txt file acts as a gatekeeper, determining
                        which crawlers—including AI bots like Googlebot—can
                        access your site. Proper configuration is key: if your
                        Robot.txt disallow all, you risk blocking both
                        traditional crawlers and essential AI bots, limiting
                        your site’s visibility.
                      </p>
                      <p className="mt-3">
                        Want to avoid this pitfall? Check out our in-depth
                        guide:{" "}
                        <a
                          href="https://getaimonitor.com/robots-txt-disallow-all-is-killing-your-traffic-see-how/
                          
                    "
                          className="text-blue fw-bold hover:text-purple-600"
                          target="_blank"
                        >
                          Robots.txt Disallow All: Blocking AI Bots.
                        </a>
                        Don’t let a misconfigured ‘Robot.txt disallow all’
                        stance hold your website back!
                      </p>
                      <h4 className="h5 xl:h4 mt-2 mb-2 xl:mb-2">
                        Add the LLMs.txt File
                      </h4>
                      To help LLMs like GPT-4o crawl and index your content,
                      ensure you have an llms.txt file on your site. This file
                      provides necessary instructions for crawlers. To study
                      this in great detail you can visit our blog{" "}
                      <a
                        href="https://getaimonitor.com/step-by-step-to-create-and-implement-llms-txt-file/"
                        className="text-blue fw-bold hover:text-purple-600"
                        target="_blank"
                      >
                        Step by Step Guide: How to Create and Implement an
                        llms.txt File.
                      </a>
                      <p className="mt-3">
                        If you want an llms.txt file for your website, you can
                        use our tool to generate it.
                      </p>
                      <h4 className="h5 xl:h4 mt-2 mb-2 xl:mb-2">
                        Fix Server Errors & Improve Speed
                      </h4>
                      <p>Prioritize fixing:</p>
                      <ul>
                        <li className="mt-2">
                          <b>404 Errors</b> (Page not found)
                        </li>
                        <li className="mt-2">
                          <b>500 Errors </b>(Internal Server Error)
                        </li>
                      </ul>
                      <p className="mt-3">
                        Fixing the page speed is also a requirement. You can
                        monitor program performance using Core Web Vitals and
                        other metrics.
                      </p>
                      <h4 className="h5 xl:h4 mt-2 mb-2 xl:mb-2">
                        Optimize JavaScript Rendering
                      </h4>
                      <p>
                        In case your site depends on JavaScript, some parts of
                        your site may be unreadable by AI bots. AI crawlers
                        could be missing important content if your site heavily
                        depends on JavaScript. Solutions such as
                        <b>
                          pre-rendering, server-side rendering, and hybrid
                          rendering
                        </b>{" "}
                        do make your site more accessible for AI crawlers.
                      </p>
                      <h3 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                        C. Content Optimization
                      </h3>{" "}
                      <h4 className="h5 xl:h4 mt-2 mb-2 xl:mb-2">
                        Add Schema Markup
                      </h4>
                      <p>AI bots love structured data. Adding schemas like:</p>
                      <ul>
                        <li className="mt-2">
                          <b>FAQ schema</b>
                        </li>
                        <li className="mt-2">
                          <b>How-To schema</b>
                        </li>
                        <li className="mt-2">
                          <b>Article schema markup</b>
                        </li>
                      </ul>
                      <p className="mt-3">
                        …helps AI crawlers understand the context of your
                        content, improving your chances of ranking.
                      </p>
                      <h4 className="h5 xl:h4 mt-2 mb-2 xl:mb-2">
                        Use Semantic Headings & Keyword Clusters
                      </h4>
                      <ul>
                        <li className="mt-2">
                          Use clear headings (H1-H6) to organize your content.
                        </li>
                        <li className="mt-2">
                          Group related terms into <b>keyword clusters</b> for
                          context.
                        </li>
                      </ul>
                      <h4 className="h5 xl:h4 mt-2 mb-2 xl:mb-2">
                        Consolidate Duplicate Content
                      </h4>
                      <p>
                        If you have pages with duplicate content, use canonical
                        tags to tell crawlers which version of the content to
                        prioritize.
                      </p>
                      <h4 className="h5 xl:h4 mt-2 mb-2 xl:mb-2">
                        Create Explainer Content
                      </h4>
                      <p>Tailor content for AI by creating:</p>
                      <ul>
                        <li className="mt-2">
                          <b>Clear definitions</b>
                        </li>
                        <li className="mt-2">
                          <b>Step-by-step guides</b>
                        </li>
                        <li className="mt-2">
                          <b>Q&A style content</b>
                        </li>
                      </ul>
                      <p className="mt-3">
                        To improve your AI ranking, provide clear and
                        straight-to-the-point descriptions, guides, and write
                        them in the form of questions; this is easily
                        understandable by AI bots and can boost site visibility.
                      </p>
                      <h3 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                        D. Site Architecture Tweaks
                      </h3>{" "}
                      <h4 className="h5 xl:h4 mt-2 mb-2 xl:mb-2">
                        Enhance Internal Linking
                      </h4>
                      <p>
                        Make sure your internal linking is optimized. Use a
                        hub-and-spoke model to create clear relationships
                        between your pages and boost topical authority.
                      </p>
                      <h4 className="h5 xl:h4 mt-2 mb-2 xl:mb-2">
                        Simplify URL Structure
                      </h4>
                      <p>
                        URLs should always be short and informative.
                        Straightforward, concise, and legible URLs are welcomed
                        by AI.
                      </p>
                      <h4 className="h5 xl:h4 mt-2 mb-2 xl:mb-2">
                        Prioritize Mobile UX
                      </h4>
                      <p>
                        Your website needs to be mobile-optimized because
                        mobile-first indexing is a priority for AI crawlers.
                        Responsive design makes life easier for the users and
                        bots.
                      </p>
                      <hr className="w-100 m-0 d-block mt-4 lg:mt-6 xl:mt-8" />
                      <h2 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                        Advanced Strategies for AI Dominance
                      </h2>
                      <p>
                        Once you’ve covered the basics, it’s time to get a
                        little more advanced.
                      </p>
                      <h3 className="h5 xl:h4 mt-3 mb-2 xl:mb-3">
                        Optimize for Generative Engine Optimization (GEO)
                      </h3>
                      <p>To excel in AI-driven search results:</p>
                      <ul>
                        <li className="mt-2">
                          Directly answer user questions in headers, intros, and
                          in content.
                        </li>
                        <li className="mt-2">
                          Use <b>bullet points, tables</b>, and<b> lists</b> to
                          allow AI easier extraction of answers.
                        </li>
                      </ul>
                      <h3 className="h5 xl:h4 mt-3 mb-2 xl:mb-3">
                        Leverage AI Tools
                      </h3>
                      <p>To ensure your content is AI-friendly:</p>
                      <ul>
                        <li className="mt-2">
                          Test your website using AI bots like ChatGPT and
                          Perplexity.ai.
                        </li>
                        <li className="mt-2">
                          Utilize NLP tools like Frase and SurferSEO to align
                          your content with AI’s language patterns.
                        </li>
                      </ul>
                      <h3 className="h5 xl:h4 mt-3 mb-2 xl:mb-3">
                        Future-Proof for Voice Search
                      </h3>
                      <p>
                        A{" "}
                        <a
                          href="https://www.synup.com/en/voice-search-statistics#:~:text=27%25%20of%20searches%20in%20the%20Google%20App%20are%20now%20done%20by%20voice."
                          className="text-blue fw-bold hover:text-purple-600"
                          target="_blank"
                        >
                          Synup
                        </a>{" "}
                        study found that 27% of searches in the Google App are
                        already voice-activated. With more people using voice
                        assistants, it’s smart to optimize for how they actually
                        interpret and provide information.
                      </p>
                      <p className="mt-3">
                        Think{" "}
                        <b>
                          long-tail keywords and natural, conversational
                          phrases,
                        </b>{" "}
                        like how you’d ask a friend a question. Focus on clear,{" "}
                        <b>direct answers</b> so your content shows up when
                        someone says, “<b>Hey Siri…</b>” or “<b>Okay Google…</b>
                        ” It’s a simple tweak that keeps your content
                        future-ready and easy to find.
                      </p>
                      <hr className="w-100 m-0 d-block mt-4 lg:mt-6 xl:mt-8" />
                      {/* GEOCOURSE CTA */}
                      <h2 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                        Future-Proofing Your AI Crawlability
                      </h2>
                      <p>
                        Staying ahead of AI trends is essential. Here’s how you
                        can future-proof your site:
                      </p>
                      <ul>
                        <li className="mt-2">
                          Keep yourself up to date on the advancements happening
                          in the AI search engine space by following podcasts
                          like Conquer AI Search With AI and Google’s Search Off
                          the Record.
                        </li>
                        <li className="mt-2">
                          Monitor AI performance using tools like{" "}
                          <b>AI Monitor </b>
                          or <b></b>.
                        </li>
                        <li className="mt-2">
                          Regularly audit and update your
                          <b> structured data</b> to keep your content
                          AI-friendly.
                        </li>
                      </ul>
                      <hr className="w-100 m-0 d-block mt-4 lg:mt-6 xl:mt-8" />
                      <h2 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                        How AI Monitor Supercharges AI Crawlability
                      </h2>
                      <p>
                        As AI platforms like ChatGPT, Perplexity, and Claude
                        reshape how people discover and consume content, it’s
                        crucial to ensure your website is easily understood and
                        accessible by these tools. That’s where AI Monitor steps
                        in, making it simple to manage and enhance your site’s
                        AI crawlability. Here’s what it brings to the table:
                      </p>
                      <ul>
                        <li className="mt-2">
                          <b>AI Traffic Monitor:</b> Keep tabs on incoming
                          traffic from AI-powered platforms. Know when, where,
                          and how your site is being surfaced in AI-driven
                          results or conversations.
                        </li>
                        <li className="mt-2">
                          <b>AI Bot Monitor: </b>Get real-time insights into
                          when AI bots are crawling your site and how often.
                          This helps you fine-tune access and understand
                          engagement.
                        </li>
                        <li className="mt-2">
                          <b>LLMs.txt File Generator:</b> Easily generate and
                          manage your LLMs.txt file—a new standard that tells AI
                          crawlers how to interact with your content, similar to
                          robots.txt for search engines.
                        </li>
                        <li className="mt-2">
                          <b>AI Prompts Monitoring:</b> See which types of AI
                          prompts are leading users to your site. This helps you
                          tailor your content to match user intent and improve
                          your presence in AI-generated answers.
                        </li>
                      </ul>
                      <p>
                        No more guessing—AI crawlers will flock to your site
                        like it’s the last slice of pizza.
                      </p>
                      <hr className="w-100 m-0 d-block mt-4 lg:mt-6 xl:mt-8" />
                      <h2 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                        Wrapping This Up: Your AI Crawlability Glow-Up Starts
                        Now
                      </h2>
                      <p>
                        Let’s be real: <b>Fixing AI Crawlability</b> isn’t just
                        a tech checklist—it’s your wildcard entry to the AI
                        search revolution. Think of it like teaching your
                        website to speak fluent “bot language.” Once you enhance
                        AI Crawlability, those once-confused AI crawlers will
                        suddenly get your content, vibe with your structure, and
                        start hyping your site like it’s the next viral TikTok
                        trend. s
                      </p>
                      <p>
                        No more playing hide-and-seek with Gemini or ghosting
                        ChatGPT. Follow these steps, and your site won’t just
                        exist online—it’ll dominate. Traffic? Check. Authority?
                        Locked in. Future-proof relevance? Oh, you bet.
                      </p>
                      <p>
                        So go ahead: Tweak that robots.txt, add llms.txt, slap
                        on some schema markup, and flex that mobile-friendly
                        design. Before you know it, AI bots will be sliding into
                        your DMs (aka SERPs) like, “Hey, we see you.”
                      </p>
                      <p>
                        <b>TL;DR:</b> Fix AI Crawlability today, or watch
                        competitors steal your spotlight tomorrow. Your move.
                      </p>
                      {/*  */}
                    </div>
                  </Gallery>
                </div>
              </div>
            </div>
            <hr className="w-100 m-0 d-block mt-4 lg:mt-6 xl:mt-8 " />
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

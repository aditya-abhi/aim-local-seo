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

export default function NewsAndMediaPartnership() {
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
                        <b>Let’s cut the fluff: </b> If your media partnership
                        feels like a bad blind date—stilted conversations,
                        mismatched expectations, and that nagging sense you’re
                        both speaking different languages, you’re not just
                        missing synergy. You’re leaving money (and AI’s
                        attention) on the table.
                      </p>
                      <p className="mt-3">
                        AI-driven generative engines aren’t just ranking content
                        anymore. They’re reshaping it, citing it, and embedding
                        it into chatbots, virtual assistants, and AI-powered
                        searches. And guess what? News outlets? They’re AI’s
                        favorite textbooks.
                      </p>
                      <p className="mt-3">
                        Generative Engine Optimization (GEO) isn’t a magic trick
                        like many think. There’s no wand-waving or vague
                        promises—just a deliberate, adaptive strategy for making
                        sure your content doesn’t just rank, but resonates with
                        AI-driven platforms. But here’s the catch: Generative AI
                        doesn’t play by old SEO rules.
                      </p>{" "}
                      <p className="mt-3">
                        The algorithms powering search, recommendations, and
                        even programmatic media are now fluent in context,
                        intent, and nuance. If you’re still optimizing for
                        keywords alone, you’re handing the keys to competitors
                        who’ve cracked the new code.
                      </p>
                      <p className="mt-3">
                        AI isn’t just indexing content—it’s interpreting it. It
                        weighs semantic depth, user behavior, and even
                        cross-platform trends to decide what gets surfaced. That
                        means:
                      </p>
                      <ul className="">
                        <li className="mt-2">
                          Tone matters (Is your brand voice AI-friendly or
                          robotic?).
                        </li>
                        <li className="mt-1">
                          Structure matters (Are you feeding LLMs clear signals
                          or clutter?).
                        </li>
                        <li className="mt-1">
                          Adaptability matters (Can your strategy evolve as
                          models do?).
                        </li>
                      </ul>
                      <h2 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                        Why Media Partnerships Are GEO’s Secret Weapon
                      </h2>
                      <p>
                        Here’s the deal: Generative engines are the new
                        gatekeepers, but they’re not passive librarians. They’re
                        aggressive curators, rewriting your content, citing it
                        as source material, and injecting it into chatbots and
                        answer engines. And guess what? News outlets and
                        authoritative publishers are their favorite textbooks.
                        Nail those partnerships, and you’re essentially handing
                        AI a cheat sheet with your brand’s name at the top.
                      </p>
                      <p className="mt-3">
                        Securing strategic media partnerships isn’t just about
                        exposure—it’s about influence. When AI scrapes content
                        for authoritative sources, y
                        <b>ou want to be in its knowledge base,</b> not lost in
                        the noise.
                      </p>
                      <p className="mt-3">
                        It isn’t begging for backlinks or spamming press
                        releases into the void. It’s about positioning your
                        brand as the answer to real people, trending questions,
                        and the AI-driven systems scanning your content for
                        credibility.
                      </p>
                      <p className="mt-3 fw-bold">Think of it as:</p>
                      <ul className="">
                        <li className="mt-2">
                          <b>AI Doesn’t Just Index—It Understands</b>
                          Generative engines interpret and contextualize
                          information, surfacing high-value insights over
                          keyword density. If your content lacks depth and
                          credibility, it won’t be referenced, no matter how
                          strong your SEO game is.
                        </li>
                        <li className="mt-2">
                          <b>
                            News & Authoritative Sources Are Prime Real Estate:
                          </b>
                          AI’s trust model is shifting toward trusted
                          publishers, verified experts, and well-documented
                          facts. Brands must invest in real thought leadership,
                          not just digital marketing tactics. Be a credible
                          source, not just a loud voice.
                        </li>
                        <li className="mt-2">
                          <b>Agility Is the Competitive Edge:</b>AI-powered
                          searches evolve faster than traditional search
                          algorithms, meaning content must be adaptable,
                          conversational, and continuously relevant. Businesses
                          that optimize for AI citations will stay ahead—those
                          stuck in old SEO patterns will fall behind.
                        </li>
                      </ul>
                      <p className="mt-3">
                        The brands winning at GEO aren’t just guessing—they’re
                        engineering content for the era of generative discovery.
                        So, ask yourself: Does your media playbook feel like a
                        seamless collaboration with AI, or a clumsy game of
                        telephone? If it’s the latter, the bots aren’t just
                        watching. They’re scrolling right past—and taking your
                        audience with them.
                      </p>
                      <p className="mt-3 fw-bold">
                        Ready to turn your collabs into GEO goldmines? Let’s
                        break it down.
                      </p>
                      <h2 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                        5 Ways News & Media Partnerships Supercharge GEO
                      </h2>
                      <figure className="my-3 sm:my-4">
                        <Item
                          original="/assets/images/blog/internal/News&MediaPartnership1.webp"
                          thumbnail="/assets/images/blog/internal/News&MediaPartnership1.webp"
                          width="1280"
                          height="853"
                        >
                          {({ ref, open }) => (
                            <figure className="featured-image m-0 rounded ratio ratio-16x9 uc-transition-toggle overflow-hidden">
                              <Image
                                className="media-cover image uc-transition-scale-up uc-transition-opaque"
                                alt="5 Ways News & Media Partnerships Supercharge GEO"
                                src="/assets/images/blog/internal/News&MediaPartnership1.webp"
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
                        Generative Engine Optimization (GEO) isn’t just about
                        structuring your content for AI—
                        <b>
                          it’s about embedding your brand into the digital
                          conversations AI prioritizes.
                        </b>{" "}
                        One of the most effective ways to achieve this?
                        Strategic media partnerships.
                      </p>
                      <p className="mt-3">
                        News and media outlets are <b>high-authority sources</b>{" "}
                        that AI systems trust. Whether it’s Google’s Gemini,
                        ChatGPT, or AI-driven search interfaces, these models{" "}
                        <b>
                          favor credible publishers when synthesizing and citing
                          information.
                        </b>
                        If your brand isn’t part of the conversation, it’s
                        missing out on AI-driven visibility.
                      </p>
                      <p className="mt-3">
                        Here’s why partnering with media outlets isn’t just good
                        PR—it’s a <b>GEO game-changer.</b>
                      </p>
                      <h3 className="h5 xl:h4 mt-4 mb-2 xl:mb-3">
                        1. Instant Authority: How to Position Yourself as the
                        “Go-to” AI Expert
                      </h3>
                      <p>
                        Generative engines like Gemini and ChatGPT don’t roll
                        the dice on accuracy, and are designed to surface
                        trustworthy, reliable sources. Working with reputable
                        news sites (think Reuters, The Wall Street Journal)
                        right out the gate increases your site’s credibility
                        with AI, telling AI that your content is fit to cite.
                        This coincides with E-A-T (Experience,
                        Expertise, Authoritativeness, Trustworthiness), which
                        are important when it comes to:
                      </p>
                      <ul className="">
                        <li className="mt-1">
                          <b>Higher visibility in AI-generated responses,</b>
                          such as featured snippets and chatbot answers.
                        </li>
                        <li className="mt-1">
                          <b>Boosted organic search rankings,</b>since search
                          engines favor sites that they believe to be top-notch
                          reputable sources.
                        </li>
                      </ul>
                      <p className="mt-3">
                        Example: That quote from your CEO in Bloomberg isn’t
                        just a story in Bloomberg—it’s a direct line into the AI
                        citation engine.
                      </p>
                      <h3 className="h5 xl:h4 mt-4 mb-2 xl:mb-3">
                        2. Optimizing for Voice & Conversational AI
                      </h3>
                      <p>
                        News content is inherently structured to answer “who,
                        what, when, where, why, and how”—the exact questions
                        users ask voice assistants (e.g., Alexa, Google
                        Assistant). This will also make your website align well
                        with the AI voice searches and chat interfaces by
                        ranking your brand in:
                      </p>
                      <ul className="">
                        <li className="mt-1">
                          Specific examples of long-tail, conversational queries
                          such as “What’s the latest on climate policy?”
                        </li>
                        <li className="mt-1">
                          Voice snippets, also known as speakable searches that
                          have become one of the major tools, powering 50% of
                          searches now.
                        </li>
                      </ul>
                      <p className="mt-3">
                        A media partnership ensures that your brand’s insights
                        are formatted to directly answer user queries, making
                        them AI-friendly and voice-search optimized.
                      </p>
                      <h3 className="h5 xl:h4 mt-4 mb-2 xl:mb-3">
                        3. Riding the Trend Wave: Freshness = AI Priority{" "}
                      </h3>
                      <p>
                        News organizations, which feed on the buzz of the day,
                        also do very well there in AI-driven results.
                        Positioning your brand with news coverage keeps you
                        relevant during pivotal moments, and they allow you to:
                      </p>
                      <ul className="">
                        <li className="mt-2">
                          <b>Piggyback on breaking stories</b>(like, say,
                          connecting your SaaS product with a cybersecurity
                          bill).
                        </li>
                        <li className="mt-2">
                          <b>Surface in trending queries</b>, where AI favors
                          recent, authoritative takes.
                        </li>
                      </ul>
                      <p className="mt-3">
                        Generative AI prioritizes <b>freshness</b>—and no more
                        so than in fast-changing fields like tech, finance and
                        health care. You position your brand alongside
                        up-to-the-minute media coverage; ensuring your brand is
                        front of mind for AI (as well as to one’s user).
                      </p>
                      <h3 className="h5 xl:h4 mt-4 mb-2 xl:mb-3">
                        4. Social Proof Loop: Engagement as an AI Ranking Signal
                      </h3>
                      <p>
                        Media coverage{" "}
                        <b>
                          doesn’t just increase visibility—it fuels engagement.
                        </b>{" "}
                        AI systems interpret{" "}
                        <b>social buzz as a relevance indicator,</b> meaning the
                        more discussions, shares, and comments your brand
                        generates, the more AI <b>recognizes its importance</b>.
                        For example:
                      </p>
                      <ul className="">
                        <li className="mt-1">
                          A news article featuring your brand can trigger
                          widespread debate on Twitter, Reddit, and LinkedIn.
                        </li>
                        <li className="mt-1">
                          High engagement rates signal to AI that your content
                          is valuable—boosting its ranking in search results.
                        </li>
                      </ul>
                      <p className="mt-3">
                        <b>This creates a feedback loop:</b> media partnerships
                        → social buzz → algorithmic recognition → increased
                        visibility.
                      </p>
                      <h3 className="h5 xl:h4 mt-4 mb-2 xl:mb-3">
                        5. High-Authority Backlinks for SEO & GEO Domination
                      </h3>
                      <p>
                        News websites typically have elite domain authority
                        (DA), making backlinks from media outlets{" "}
                        <b>one of the most powerful assets.</b> Just one link
                        from a major publisher like Forbes or BBC can:
                      </p>
                      <ul className="">
                        <li className="mt-1">
                          Lifts your domain authority, improving search
                          rankings.
                        </li>
                        <li className="mt-1">
                          {" "}
                          Drive referral traffic from a well-established
                          audience
                        </li>
                        <li className="mt-1">
                          Acts as a “trust stamp”, increasing its chances of
                          being cited in AI-generated answers.
                        </li>
                      </ul>
                      <p className="mt-3">
                        Acquiring backlinks from high-authority websites, like
                        those in major media outlets, can significantly boost
                        your website’s search visibility, potentially increasing
                        it by up to 250%.
                      </p>
                      <h2 className="h3 xl:h4 mb-5 mt-3 xl:mb-6">
                        List of Techniques
                      </h2>
                      <figure className="my-3 sm:my-4">
                        <Item
                          original="/assets/images/blog/internal/News&MediaPartnership2.webp"
                          thumbnail="/assets/images/blog/internal/News&MediaPartnership2.webp"
                          width="1280"
                          height="853"
                        >
                          {({ ref, open }) => (
                            <figure className="featured-image m-0 rounded ratio ratio-16x9 uc-transition-toggle overflow-hidden">
                              <Image
                                className="media-cover image uc-transition-scale-up uc-transition-opaque"
                                alt="5 Ways News & Media Partnerships Supercharge GEO"
                                src="/assets/images/blog/internal/News&MediaPartnership2.webp"
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
                        Let’s focus on how you can successfully collab with news
                        and media organisations. No fluff, just strategies that
                        blend human creativity with algorithm-friendly tactics.
                      </p>
                      <h3 className="h5 xl:h4 mt-4 mb-2 xl:mb-3">
                        1. Choosing the Right Partner
                      </h3>
                      <p>
                        Compatibility is key. Think of it as dating — the shared
                        values and mutual strengths are more important than the
                        flashy name on the label.
                      </p>
                      <p className="mb-3 fw-bold">Ask yourself:</p>
                      <ul className="">
                        <li className="mt-1">
                          Are they speaking to the same people you’re trying to
                          draw in?
                        </li>
                        <li className="mt-1">
                          Can they fill gaps in your skillset? (Example: Partner
                          with an event-savvy outlet if you’re a digital-first
                          brand.)
                        </li>
                        <li className="mt-1">
                          Are they focused on innovation and AI-powered
                          storytelling (as you are)?
                        </li>
                      </ul>
                      <p className="mt-3">
                        <b>Pro Tip:</b> A media partner with AI-friendly content
                        (think data-rich articles or transcripts) will
                        turbocharge your GEO. When AI crawlers index their work,
                        your brand gets cited as a trusted source.
                      </p>
                      <h3 className="h5 xl:h4 mt-4 mb-2 xl:mb-3">
                        2. Offer Attractive Deals
                      </h3>
                      <p>
                        Media outlets love perks they can’t get elsewhere.
                        Sweeten the pot with:
                      </p>
                      <ul className="">
                        <li className="mt-1">
                          Free tickets to your events (virtual or IRL).
                        </li>
                        <li className="mt-1">
                          Exclusive access to beta tools, reports, or
                          interviews.
                        </li>
                        <li className="mt-1">
                          Promotional bundles (e.g., co-branded merch or free
                          trials for their audience).
                        </li>
                      </ul>
                      <p className="mt-3 fw-bold">Why this works for GEO:</p>
                      <p>
                        These deals often lead to organic coverage. When
                        journalists mention your brand and your perks, AI models
                        like ChatGPT learn to associate you with authority.
                      </p>
                      <h3 className="h5 xl:h4 mt-4 mb-2 xl:mb-3">
                        3. Host Joint Webinars or AMAs
                      </h3>
                      <ul>
                        <li className="mt-1">
                          Collaborate with media partners and host live events,
                          then repurpose the content.
                        </li>
                        <li className="mt-1">
                          Post transcripts and Q&A that summarize the event.
                        </li>
                        <li className="mt-1">
                          Turn key moments into bite-sized clips or
                          infographics.
                        </li>
                      </ul>
                      <p className="fw-bold mt-3">Example:</p>
                      <p>
                        “AMA with [Your Brand] on the Future of AI” → The
                        transcript gets crawled by AI, and your insights become
                        training data for generative responses.
                      </p>
                      <p className="fw-bold mt-3">Why it matters:</p>
                      <p>
                        AI tools scrape the content of events for knowledge on
                        the fly. Your brand is a source of answers that people
                        turn to like, “What’s the newest thing in AI?”
                      </p>
                      <h3 className="h5 xl:h4 mt-4 mb-2 xl:mb-3">
                        4. Provide Data for Media Stories
                      </h3>
                      <p className="">
                        Provide exclusive data, surveys or market trends to
                        journalists.
                      </p>
                      <p className="fw-bold mt-3">Example:</p>
                      <p>
                        “70% of users prefer AI-powered tools, according to a
                        survey by [Your Brand].”
                      </p>
                      <p className="mt-3">
                        If stats like this get cited in 10+ articles → You would
                        be cited by AI models as the source.
                      </p>
                      <p className="mt-3">
                        <b> Pro Tip:</b> Hand journalists exclusive data drops.
                        They’ll prioritize covering you, and GEO bots will treat
                        your brand like a VIP.
                      </p>
                      <h3 className="h5 xl:h4 mt-4 mb-2 xl:mb-3">
                        5. Build Relationships with Journalists & Editors
                      </h3>
                      <p>
                        Use platforms like{" "}
                        <a
                          href="https://www.helpareporter.com/
                                                
                                              "
                          className="fw-bold text-blue hover:text-purple-600"
                          target="_blank"
                        >
                          HARO{" "}
                        </a>
                        or{" "}
                        <a
                          href="https://www.qwoted.com/"
                          className="fw-bold text-blue hover:text-purple-600"
                          target="_blank"
                        >
                          Qwoted
                        </a>{" "}
                        to become a source for reporters.
                      </p>
                      <ul className="">
                        <li className="mt-1">
                          Respond to queries with data-driven insights (and link
                          to your content).
                        </li>
                        <li className="mt-1">
                          Pitch trend-jacking ideas (e.g., “How AI is reshaping
                          [their niche]”)
                        </li>
                      </ul>
                      <p className="fw-bold mt-3">Why does this crush GEO?</p>
                      <p>
                        Every time a journalist name-drops your brand, AI
                        crawlers read you as an authority. The more reference
                        sentences, the higher you can rank in generative
                        responses.
                      </p>
                      <h3 className="h5 xl:h4 mt-4 mb-2 xl:mb-3">
                        6. Monitor and Adapt
                      </h3>
                      <p>
                        You can’t just “set it and forget it.” To remain
                        GEO-relevant you have to be up to date.
                      </p>
                      <p className="mt-3 fw-bold">Track the right stuff:</p>
                      <ul className="">
                        <li className="mt-1">
                          Brand mentions in articles, blogs, and social chatter.
                        </li>
                        <li className="mt-1">
                          Backlinks from media partners (the more authoritative,
                          the better).
                        </li>
                        <li className="mt-1">
                          How frequently the AI-generated responses mention your
                          brand or data.
                        </li>
                        <li className="mt-1">Review regularly:</li>
                        <li className="mt-1">
                          Monthly check-ins to see what’s driving results (and
                          what’s flopping).
                        </li>
                        <li className="mt-1">
                          Ask partners for honest feedback—are your collabs
                          hitting their goals as well?
                        </li>
                      </ul>
                      <p className="mt-3 fw-bold">Adapt fast:</p>
                      <p>
                        Spot a trend dying? Pivot before it flatlines. For
                        example:
                      </p>
                      <ul className="">
                        <li className="mt-1">
                          If webinar attendance drops, switch to snackable
                          LinkedIn Live sessions.
                        </li>
                        <li className="mt-1">
                          If big data-laden reports aren’t sticking, pitch
                          journalists on bite-sized “quick stats” instead.
                        </li>
                      </ul>
                      <h3 className="h5 xl:h4 mt-4 mb-2 xl:mb-3">
                        Why this matters for GEO:
                      </h3>
                      <p>
                        AI models evolve constantly, and so should your
                        partnerships. Staying agile ensures your brand stays
                        quoted, relevant, and top of mind for both humans and
                        algorithms.
                      </p>
                      <p className="mt-3">
                        GEO isn’t about chasing algorithms—it’s about being the
                        most credible, timely, and being an answer to what users
                        are asking, and hence would be relevant to AI
                        algorithms. Partner with trusted voices, speak
                        conversationally, and stay agile.
                      </p>
                      <p className="mt-3">
                        <b>Pro Tip:</b>Treat partnerships like a science
                        experiment. Test, learn, iterate. The faster you adapt,
                        the harder it is for competitors (or AI) to ignore you.
                      </p>
                      {/* GEO Course CTA */}
                      <h2 className="h4 xl:h4 mt-3 xl:mb-6">
                        Wrap-Up: GEO is a Team Sport (and You’re the MVP)
                      </h2>
                      <p>
                        Look, nailing GEO is not a process of outsmarting AI so
                        much as it’s a game you play with AI. I’d liken media
                        partnerships to your AI wingman: when you click, it’s a
                        win-win.
                      </p>
                      <p className="mt-3 fw-bold">Here’s the cheat code:</p>
                      <ul className="">
                        <li className="mt-1">
                          <b>Be the answer, not the ad:</b>AI wants useful
                          stuff. Collaborate with news providers to curate
                          legit, timely,and value-packed content.
                        </li>
                        <li className="mt-1">
                          <b>Stay loose, not stuffy:</b>Ditch the corporate
                          jargon. Write like a human, structure like a robot
                          (bullet points FTW).
                        </li>
                        <li className="mt-1">
                          <b>Share the data snacks:</b>Are you hoarding your
                          analytics? Bad move. Follow what AI is actually doing
                          with your content, and adjust like a TikTok trend.
                        </li>
                        <li className="mt-1">
                          <b>Tech is your bouncer:</b>If AI can’t get into your
                          content club (looking at you, paywalls), nobody wins.
                          Keep the door open and the lights on.
                        </li>
                      </ul>
                      <p className="mt-3">
                        <b>Pro Tip:</b> GEO isn’t “set and forget.” AI evolves
                        faster than a viral meme. Keep testing, stay curious,
                        and when in doubt: <strong>ask</strong>, “Would this
                        help a real person?” If yes, AI will probably love it
                        too.
                      </p>
                      <p className="mt-3">
                        Now go flex those media partnerships, crush those
                        trends, and watch your content pop up everywhere from
                        chatbots to coffee-break convos.
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

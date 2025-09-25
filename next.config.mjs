/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  experimental: {
    inlineCss: true,
  },
  async redirects() {
    return [
      // Basic redirect
      {
        source:
          "/entity-optimization-the-2025-seo-power-move-every-brand-cant-afford-to-miss",
        destination:
          "/podcasts/entity-optimization-the-2025-seo-power-move-every-brand-cant-afford-to-miss",
        permanent: true,
      },
      {
        source:
          "/why-online-reviews-are-now-the-most-powerful-ranking-signal-in-ai-search",
        destination:
          "/podcasts/why-online-reviews-are-now-the-most-powerful-ranking-signal-in-ai-search",
        permanent: true,
      },
      {
        source: "/target-long-tail-keywords-for-ai-optimization",
        destination: "/podcasts/target-long-tail-keywords-for-ai-optimization",
        permanent: true,
      },
      {
        source: "/ai-content-strategy-stop-writing-for-robots",
        destination: "/podcasts/ai-content-strategy-stop-writing-for-robots",
        permanent: true,
      },
      {
        source: "/why-readability-is-the-secret-sauce-to-ranking-in-ai-search",
        destination:
          "/podcasts/why-readability-is-the-secret-sauce-to-ranking-in-ai-search",
        permanent: true,
      },
      {
        source: "/ai-search-domination-why-pr-is-your-secret-weapon",
        destination:
          "/podcasts/ai-search-domination-why-pr-is-your-secret-weapon",
        permanent: true,
      },
      {
        source:
          "/seo-helps-geo-how-old-school-tactics-are-fueling-ai-search-dominance",
        destination:
          "/podcasts/seo-helps-geo-how-old-school-tactics-are-fueling-ai-search-dominance",
        permanent: true,
      },
      {
        source:
          "/strategic-citations-technique-3-for-generative-engine-optimization-geo-mastery-series-episode-11",
        destination:
          "/podcasts/strategic-citations-technique-3-for-generative-engine-optimization-geo-mastery-series-episode-11",
        permanent: true,
      },
      {
        source:
          "/how-reddit-is-shaping-ai-search-how-your-brand-can-leverage-it-conquer-ai-search-with-ai-podcast",
        destination:
          "/podcasts/how-reddit-is-shaping-ai-search-how-your-brand-can-leverage-it-conquer-ai-search-with-ai-podcast",
        permanent: true,
      },
      {
        source:
          "/welcome-to-the-ai-search-revolution-why-your-website-needs-an-llms-txt-file",
        destination:
          "/podcasts/welcome-to-the-ai-search-revolution-why-your-website-needs-an-llms-txt-file",
        permanent: true,
      },
      {
        source:
          "/how-answer-engine-optimization-aeo-is-redefining-ai-powered-search",
        destination:
          "/podcasts/how-answer-engine-optimization-aeo-is-redefining-ai-powered-search",
        permanent: true,
      },
      {
        source: "/how-to-conquer-ai-search-before-it-leaves-you-behind",
        destination:
          "/podcasts/how-to-conquer-ai-search-before-it-leaves-you-behind",
        permanent: true,
      },
      {
        source: "/seo-is-dead-how-to-win-the-new-game-of-ai-powered-search",
        destination:
          "/podcasts/seo-is-dead-how-to-win-the-new-game-of-ai-powered-search",
        permanent: true,
      },
      {
        source: "/how-google-ai-mode-is-reshaping-search",
        destination: "/podcasts/how-google-ai-mode-is-reshaping-search",
        permanent: true,
      },
      {
        source: "/why-90m-americans-might-laugh-at-your-seo-ai-monitor",
        destination:
          "/podcasts/why-90m-americans-might-laugh-at-your-seo-ai-monitor",
        permanent: true,
      },
      {
        source:
          "/ai-search-is-killing-your-brands-visibility-the-seo-extinction-event-is-here",
        destination:
          "/podcasts/ai-search-is-killing-your-brands-visibility-the-seo-extinction-event-is-here",
        permanent: true,
      },
      {
        source:
          "/google-might-be-the-next-yahoo-a-head-to-head-comparison-episode-2-conquer-ai-search-with-ai-podcast",
        destination:
          "/podcasts/google-might-be-the-next-yahoo-a-head-to-head-comparison-episode-2-conquer-ai-search-with-ai-podcast",
        permanent: true,
      },
      {
        source: "/mastering-generative-engine-optimization-geo",
        destination: "/podcasts/mastering-generative-engine-optimization-geo",
        permanent: true,
      },
      {
        source: "/best-generative-engine-optimization-geo-agency-in-gurgaon",
        destination:
          "/best-generative-engine-optimization-geo-agency-in-gurugram",
        permanent: true,
      },
      {
        source: "/login",
        destination: "https://v8dash.getaimonitor.com/signin",
        permanent: true,
      },
      {
        source: "/log-in",
        destination: "https://v8dash.getaimonitor.com/signin",
        permanent: true,
      },
      {
        source: "/register",
        destination: "https://v8dash.getaimonitor.com/signup",
        permanent: true,
      },
      {
        source: "/how-to-manage-your-brand-in-the-age-of-ai",
        destination: "/10-marketing-trends-and-predictions-for-2025",
        permanent: true,
      },
      {
        source: "/introduction-to-digital-marketing",
        destination: "/10-marketing-trends-and-predictions-for-2025",
        permanent: true,
      },
      {
        source: "/get-started",
        destination: "/contact-us",
        permanent: true,
      },
      {
        source: "/reddit-influencer-relationship-marketing-services/",
        destination: "/services/saas-reddit-marketing-for-ai-search",
        permanent: true,
      },
      {
        source: "/services/content-marketing-for-ai-searches",
        destination: "/services/saas-content-marketing-for-ai-search",
        permanent: true,
      },
      // Wildcard path matching
      // {
      //   source: "/blog/:slug",
      //   destination: "/news/:slug",
      //   permanent: true,
      // },
    ];
  },
};

export default nextConfig;

import Header from "@/components/headers/Header7";
import Footer from "@/components/footers/Footer7";
import Hero from "@/components/features/Hero";
import Faq from "@/components/features/Faqs";
import Cta from "@/components/features/Cta";
import Features from "@/components/features/Features";
import Problems from "@/components/features/Problems";
import Solutions from "@/components/features/Solutions";
import Pricing from "@/components/features/Pricing";
export const metadata = {
  title:
    "AI Monitor Local Seo Services to Get More Customers Around your Locality",
  description:
    "Get found by customers in your area with AIM Local’s powerful Local SEO services. Improve Google Maps rankings, manage reviews, and attract high-intent local customers today.",
};
const jsonLdWebPage = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "AIM Local",
  url: "https://aim-local-frontend.web.app/",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://aim-local-frontend.web.app/?s={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};
const jsonLdFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is Local SEO, and why is it so important?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Local SEO is the process of getting your business to the top of Google and other search engines when people in your area are searching for what you offer. It's crucial because if you're not visible in local searches, you're losing customers to your competition every day. Our tools ensure your business is found first.",
      },
    },
    {
      "@type": "Question",
      name: "How is this service different from other SEO tools?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our service is built to be a complete solution. We don't just give you data; we give you a step-by-step roadmap with personalized, actionable tips. We also offer expert support, automated tools to manage your reputation, and AI-driven suggestions to help you get more local leads and boost your sales without being an SEO expert yourself.",
      },
    },
    {
      "@type": "Question",
      name: "How does the service help me get more customers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our service helps you get found by more local customers by getting you to the top of local search results, including on Google Maps. We utilize automated tools and expert support to enhance your online presence, manage your reputation, and ensure that your business information is accurate across all platforms.",
      },
    },
    {
      "@type": "Question",
      name: "How quickly can I expect to see results?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "While SEO is a long-term strategy, our tools are designed to show you progress fast. You'll get real-time data on your rankings and visibility, and our automated review tools can start building a 5-star reputation right away. The goal is to get you to the top of Google Maps and see more phone calls and customer traffic.",
      },
    },
    {
      "@type": "Question",
      name: "I have negative reviews. Can this service help?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Our platform features automated review tools that simplify obtaining new, positive reviews from your satisfied customers. This not only builds a stellar reputation but also helps to balance out any old, negative reviews, making your business look more trustworthy to potential customers.",
      },
    },
    {
      "@type": "Question",
      name: "Is my business information safe and secure with your platform?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. We protect your business by ensuring your details are consistent and accurate across all major listing sites. Our system also safeguards your Google Business Profile from unwanted changes and spam, so customers always find the right details about your business.",
      },
    },
    {
      "@type": "Question",
      name: "What is the process for getting started?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The process for getting started is a simple, four-step journey. We begin with onboarding and setup, where we align your data and goals. Then, we move to Optimization & Management, continuously improving your campaign's visibility with AI-driven updates. Next, we provide Reporting & Results with clear insights into your growth. The process concludes with Iterative Growth & Scaling, where we help your brand expand its reach and ROI steadily.",
      },
    },
  ],
};

export default function page() {
  return (
    <>
      {/* Add JSON-LD to your page */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLdWebPage).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLdFAQ).replace(/</g, "\\u003c"),
        }}
      />
      {/* ... */}
      <div className="theme-4">
        <div className="page-wrapper">
          <div className="page-wrapper uni-body panel bg-white text-tertiary-900 dark:bg-tertiary-800 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
            <Header />
            <div id="wrapper" className="wrap">
              <Hero />
              <Problems />
              <Solutions />
              <Features />
              <Pricing />
              <Faq />
              <Cta />
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

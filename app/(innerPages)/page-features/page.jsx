import Header from "@/components/headers/Header7";

import Footer from "@/components/footers/Footer7";
import Hero from "@/components/page-features/Hero";
import KeyFeatures from "@/components/page-features/KeyFeatures";
import Faq from "@/components/page-features/Faqs";
import Testimonials from "@/components/page-features/Testimonials";
import Cta from "@/components/page-features/Cta";
import Brands2 from "@/components/page-features/Brands2";
export const metadata = {
  title:
    "Features || Lexend - Full-featured, professional-looking software, saas and startup nextjs template.",
  description:
    "Lexend - Full-featured, professional-looking software, saas and startup nextjs template.",
};
export default function FeaturesPage() {
  return (
    <div className="theme-4">
      <div className="page-wrapper">
        <div className="page-wrapper uni-body panel bg-white text-tertiary-900 dark:bg-tertiary-800 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
          <Header />
          <div id="wrapper" className="wrap">
            <Hero />
            <KeyFeatures />
            <div className="pt-6 xl:pt-9"></div>
            <Faq />
            <Testimonials />
            <div
              id="clients_brands"
              className="clients-brands section panel overflow-hidden"
            >
              <div className="section-outer panel pt-6 pb-8 sm:pt-8 sm:pb-9 xl:py-9">
                <h5
                  className="h6 sm:h5 text-center mb-4 sm:mb-6 xl:mb-8"
                  data-anime="onview: -100; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 200;"
                >
                  Trusted by well-known brands.
                </h5>
                <div
                  className="block-panel panel"
                  data-anime="onview: -100; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 250;"
                >
                  <div className="element-brands max-w-950px m-auto text-gray-900 dark:text-white">
                    <Brands2 />
                  </div>
                </div>
              </div>
            </div>
            <Cta />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

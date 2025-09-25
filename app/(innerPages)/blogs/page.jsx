import BlogListNew from "@/components/common/BlogListNew";
import Header7 from "@/components/headers/Header7";
import Footer7 from "@/components/footers/Footer7";
import Cta from "@/components/homes/home-old/Cta";
export const metadata = {
  title:
    "AI Search Optimization, GEO, AEO Insights | Explore Tools, Techniques & Trends || AI Monitor",
  description:
    "Dive into expert blogs on AI Search Optimization, Generative Engine Optimization (GEO), Answer Engine Optimization (AEO), and the evolving landscape of AI search. Discover cutting-edge tools, actionable techniques, and strategic insights to boost your brand’s visibility in generative platforms.",
};
export default function Blogs() {
  return (
    <>
      <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
        <Header7 />
        <div id="wrapper" className="wrap">
          <BlogListNew />
          <Cta />
        </div>
        <Footer7 />
      </div>
    </>
  );
}

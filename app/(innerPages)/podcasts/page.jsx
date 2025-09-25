import Header7 from "@/components/headers/Header7";
import Footer7 from "@/components/footers/Footer7";
import Cta from "@/components/homes/home-old/Cta";
import PodcastList from "@/components/common/PodcastList";
export const metadata = {
  title:
    "GEO & AEO Podcasts Expert Conversations on AI Search, Tools & Strategy || AI Monitor",
  description:
    "Tune into thought-provoking podcasts on Generative Engine Optimization (GEO), Answer Engine Optimization (AEO), and AI-driven search strategies. Explore expert insights, emerging tools, and actionable techniques to elevate your brand’s visibility in the age of generative platforms.",
};
export default function Podcasts() {
  return (
    <>
      <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
        <Header7 />
        <div id="wrapper" className="wrap">
          <PodcastList />
          <Cta />
        </div>
        <Footer7 />
      </div>
    </>
  );
}

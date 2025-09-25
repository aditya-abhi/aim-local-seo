import Footer7 from "@/components/footers/Footer7";
import Header7 from "@/components/headers/Header7";
import { allBlogs } from "@/data/blogs";
import MistakesInTheAgeOfAI from "@/components/podcasts/MistakesInTheAgeOfAI";
import RelatedPodcasts from "@/components/podcasts/RelatedPodcasts";
export const metadata = {
  title:
    "Don't Get Left Behind: The 5 Biggest Mistakes We're All Making in the Age of AI",
  description:
    "Discover the 5 biggest mistakes brands make in the age of AI. Learn how Generative Engine Optimization (GEO) is reshaping digital visibility—and what you must do to stay relevant.",
};
export default async function Blog2Page(props) {
  const params = await props.params;
  const id = params.id;
  const blogItem = allBlogs.filter((elm) => elm.id == id)[0] || allBlogs[0];
  return (
    <>
      <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-tertiary-800 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
        <Header7 />
        <div id="wrapper" className="wrap">
          <MistakesInTheAgeOfAI blogItem={blogItem} />
          <RelatedPodcasts
            currentPodcastLink={
              "/podcasts/the-5-biggest-mistakes-we-are-all-making-in-the-age-of-ai/"
            }
          />
        </div>
        <Footer7 />
      </div>
    </>
  );
}

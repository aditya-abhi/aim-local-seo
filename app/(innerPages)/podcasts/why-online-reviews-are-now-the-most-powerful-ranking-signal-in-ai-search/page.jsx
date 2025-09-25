import BlogDetails3 from "@/components/blog-old/BlogDetails3";
import Blog2 from "@/components/blogs/blog-2";
import Newsletter from "@/components/blog-old/Newsletter";
import Footer7 from "@/components/footers/Footer7";
import Header7 from "@/components/headers/Header7";
import { allBlogs } from "@/data/blogs";
import Podcast1 from "@/components/podcasts/EntityOptimization";
import OnlineReviews from "@/components/podcasts/OnlineReviews";
import RelatedPodcasts from "@/components/podcasts/RelatedPodcasts";
export const metadata = {
  title:
    "Podcast Template || Lexend - Full-featured, professional-looking software, saas and startup nextjs template.",
  description:
    "Lexend - Full-featured, professional-looking software, saas and startup nextjs template.",
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
          <OnlineReviews blogItem={blogItem} />
          <RelatedPodcasts
            currentPodcastLink={
              "/podcasts/why-online-reviews-are-now-the-most-powerful-ranking-signal-in-ai-search/"
            }
          />
        </div>
        <Footer7 />
      </div>
    </>
  );
}

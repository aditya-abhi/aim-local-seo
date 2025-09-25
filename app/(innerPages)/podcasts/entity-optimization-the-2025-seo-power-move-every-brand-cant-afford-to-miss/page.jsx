import Footer7 from "@/components/footers/Footer7";
import Header7 from "@/components/headers/Header7";
import { allBlogs } from "@/data/blogs";
import EntityOptimization from "@/components/podcasts/EntityOptimization";
import RelatedPodcasts from "@/components/podcasts/RelatedPodcasts";
export const metadata = {
  title:
    "Entity Optimization: The 2025 SEO Power Move Every Brand Can’t Afford to Miss",
  description:
    "Discover the power of Entity Seo in 2025. Learn how this advanced SEO strategy can elevate your brand&#039;s visibility, improve search rankings, and drive targeted traffic.",
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
          <EntityOptimization blogItem={blogItem} />
          <RelatedPodcasts
            currentPodcastLink={
              "/podcasts/entity-optimization-the-2025-seo-power-move-every-brand-cant-afford-to-miss/"
            }
          />
        </div>
        <Footer7 />
      </div>
    </>
  );
}

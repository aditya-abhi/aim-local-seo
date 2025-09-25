import Footer7 from "@/components/footers/Footer7";
import Header7 from "@/components/headers/Header7";
import { allBlogs } from "@/data/blogs";
import Head from "@/components/blogs/components/Head";
import Author from "@/components/blogs/components/Author";
import Blog1Faqs from "@/components/blogs/faqs/Blog1Faqs";
import NextPrevBlogs from "@/components/blogs/components/NextPrevBlogs";
import RelatedBlogs from "@/components/blogs/components/RelatedBlogs";
import AuthorBioShort from "@/components/blogs/components/AuthorBioShort";
import Experiment1 from "@/components/blogs/components/Experiment1";
import Experiment2 from "@/components/blogs/components/Experiment2";
import RobotsTXTDisallowAll from "@/components/blogs/RobotsTXTDisallowAll";
import RobotsTXTDisallowAllFaq from "@/components/blogs/faqs/RobotsTXTDisallowAllFaq";
export const metadata = {
  title:
    "Robots.txt Disallow all is killing your AI Search Traffic || AI Monitor",
  description:
    "Blocking AI bots with robots.txt disallow all can cripple site visibility—just like blocking Google did in the 90s. Optimize for AI crawlers &amp; boost SEO now",
};
export default async function Blog2Page(props) {
  const params = await props.params;
  const id = params.id;
  const blogItem = allBlogs.filter((elm) => elm.id == id)[0] || allBlogs[0];
  return (
    <>
      <div className="theme-3 ">
        <div
          className="bp-xs page-wrapper bp-sm bp-md bp-lg bp-xl dom-ready bp-xxl-max uni-body panel uni-body panel bg-white text-gray-900 dark:bg-tertiary-800 dark:text-gray-200 disable-cursor"
          style={{ overflowX: "clip" }}
        >
          <Header7 />
          <Head
            pageName="Robots.txt Disallow All: Blocking AI Bots is as misguided as blocking Google in the 90s!"
            src="/assets/images/blog/Robots-txtDisallowAll.webp"
            publishedOn="Apr 23, 2025"
            updatedOn=""
          />
          <Experiment1 />
          <AuthorBioShort />
          <RobotsTXTDisallowAll />
          <Author />
          <RobotsTXTDisallowAllFaq />
          <Experiment2 />
          {/* <NextPrevBlogs /> */}
          <RelatedBlogs
            currentBlogLink={
              "/robots-txt-disallow-all-is-killing-your-traffic-see-how/"
            }
          />
          <Footer7 />
        </div>
      </div>
    </>
  );
}

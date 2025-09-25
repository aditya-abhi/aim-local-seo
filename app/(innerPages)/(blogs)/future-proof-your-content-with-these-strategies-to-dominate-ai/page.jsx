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
import FutureProofYourContent from "@/components/blogs/FutureProofYourContent";
import FutureProofYourContentFaq from "@/components/blogs/faqs/FutureProofYourContentFaq";
export const metadata = {
  title:
    "Future Proof Your Content: 4 Strategies to Dominate AI Search || AI Monitor",
  description:
    "Discover 4 proven strategies to future proof your content against AI dominance. Leverage GEO, human storytelling, and data to stay visible.",
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
            pageName="Future Proof Your Content: Top 4 Strategies to Outsmart AI and Dominate Search"
            src="/assets/images/blog/FutureProofYourContent.webp"
            publishedOn="May 14, 2025"
            updatedOn=""
          />
          <Experiment1 />
          <AuthorBioShort />
          <FutureProofYourContent />
          <Author />
          <FutureProofYourContentFaq />
          <Experiment2 />
          {/* <NextPrevBlogs /> */}
          <RelatedBlogs
            currentBlogLink={
              "/future-proof-your-content-with-these-strategies-to-dominate-ai/"
            }
          />
          <Footer7 />
        </div>
      </div>
    </>
  );
}

import { blogPostList } from "@/data/blogs";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function RelatedBlogs({ currentBlogLink }) {
  const relatedPosts = blogPostList
    .filter((blog) => blog.link !== currentBlogLink)
    .slice(0, 3);

  return (
    <>
      <div className="container container-80">
        <div className="post-related panel border-top pt-2 pb-4 my-6 xl:my-9">
          <h2 className="h5 xl:h4 mb-5 xl:mb-6">Related to this topic:</h2>
          <div className="row child-cols-6 md:child-cols-4 gx-2 gy-4 sm:gx-3 sm:gy-6 justify-center items-center">
            {relatedPosts.map((elm) => (
              <div key={elm.id}>
                <article className="post type-post panel vstack gap-2">
                  <figure className="featured-image m-0 rounded ratio ratio-16x9 uc-transition-toggle overflow-hidden">
                    <Image
                      className="media-cover image uc-transition-scale-up uc-transition-opaque"
                      src={elm.imgSrc}
                      width={1280}
                      height={853}
                      // 4. Use dynamic alt text from your data
                      alt={elm.imgAlt}
                    />
                    <Link
                      href={elm.link}
                      className="position-cover"
                      // Use a dynamic caption
                      data-caption={elm.title}
                    ></Link>
                  </figure>
                  <header className="panel vstack gap-1">
                    <h5 className="h6 sm:h5 md:h4 m-0">
                      <Link className="text-none" href={elm.link}>
                        {elm.title}
                      </Link>
                    </h5>
                    <div className="post-date hstack gap-narrow fs-7 opacity-60">
                      <span>{elm.date}</span>
                    </div>
                  </header>
                </article>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

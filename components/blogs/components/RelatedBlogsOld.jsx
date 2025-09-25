import { blogsPosts4 } from "@/data/blogs";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function RelatedBlogs() {
  return (
    <>
      <div className="container container-80">
        <div className="post-related panel border-top pt-2 my-6 xl:my-9">
          <h2 className="h5 xl:h4 mb-5 xl:mb-6">Related to this topic:</h2>
          <div className="row child-cols-6 md:child-cols-4 gx-2 gy-4 sm:gx-3 sm:gy-6 justify-center items-center">
            {blogsPosts4.slice(7, 10).map((elm, i) => (
              <div key={i}>
                <article className="post type-post panel vstack gap-2">
                  <figure className="featured-image m-0 rounded ratio ratio-4x3 uc-transition-toggle overflow-hidden">
                    <Image
                      className="media-cover image uc-transition-scale-up uc-transition-opaque"
                      src={elm.imgSrc}
                      width={1280}
                      height={853}
                      alt="How can marketing help your business?"
                    />
                    <Link
                      href={`/blog-details/${elm.id}`}
                      className="position-cover"
                      data-caption="How can marketing help your business?"
                    ></Link>
                  </figure>
                  <header className="panel vstack gap-1">
                    <h5 className="h6 sm:h5 md:h4 m-0">
                      <Link
                        className="text-none"
                        href={`/blog-details/${elm.id}`}
                      >
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

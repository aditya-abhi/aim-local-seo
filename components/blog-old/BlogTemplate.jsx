import React from "react";
import Sidebar from "./Sidebar";
import Image from "next/image";

export default function BlogTemplate() {
  return (
    <div className="section panel">
      <div className="container">
        <div className="panel py-4 lg:py-6 xl:py-8">
          <div className="panel mb-3 lg:mb-4 xl:mb-6">
            <figure className="featured-image m-0 rounded ratio ratio-16x9 overflow-hidden">
              <Image
                src="/assets/images/blog/post-full.jpg"
                alt="Main hero image"
                width={1344}
                height={756}
                className="media-cover image w-100 h-auto"
              />
            </figure>
          </div>
          <div className="row child-cols-12 g-2 lg:g-4 xl:g-8">
            <div className="md:col-8 order-1">
              <div className="uc-main panel" role="main" style={{ minHeight: "120vh" }}>
                <div className="panel vstack gap-3 lg:gap-4 xl:gap-5">
                  <h2 className="h4 sm:h3">Sample Heading One</h2>
                  <p className="fs-6 md:fs-5">
                    This is placeholder paragraph text under heading one. Replace this with your actual content.
                  </p>
                  <h2 className="h4 sm:h3">Sample Heading Two</h2>
                  <p className="fs-6 md:fs-5">
                    Another short paragraph to demonstrate structure. Keep sentences concise and readable.
                  </p>
                  <h2 className="h4 sm:h3">Sample Heading Three</h2>
                  <p className="fs-6 md:fs-5">
                    Add notes, explanations, or examples that support the heading above.
                  </p>
                  <h2 className="h4 sm:h3">Sample Heading Four</h2>
                  <p className="fs-6 md:fs-5">
                    Continue with more placeholder copy. You can later swap these with real text.
                  </p>
                  <h2 className="h4 sm:h3">Sample Heading Five</h2>
                  <p className="fs-6 md:fs-5">
                    Maintain consistent styles for headings and paragraphs across the template.
                  </p>
                  <h2 className="h4 sm:h3">Sample Heading Six</h2>
                  <p className="fs-6 md:fs-5">
                    Use this section for additional details, steps, or guidance relevant to your topic.
                  </p>
                  <h2 className="h4 sm:h3">Sample Heading Seven</h2>
                  <p className="fs-6 md:fs-5">
                    Placeholder text provides layout clarity before final content is ready.
                  </p>
                  <h2 className="h4 sm:h3">Sample Heading Eight</h2>
                  <p className="fs-6 md:fs-5">
                    Replace with your final copy. Remove any sections you do not need.
                  </p>
                  <h2 className="h4 sm:h3 m-0">Sample Heading Nine</h2>
                  <p className="fs-6 md:fs-5 m-0">
                    Final example paragraph to complete the template section with nine headings.
                  </p>
                  <h2 className="h4 sm:h3 mt-3">Sample Heading Ten</h2>
                  <p className="fs-6 md:fs-5">
                    Short descriptive paragraph for heading ten. Replace with your finalized wording.
                  </p>
                  <h2 className="h4 sm:h3">Sample Heading Eleven</h2>
                  <p className="fs-6 md:fs-5">
                    Keep paragraphs consistent in tone and length to improve readability across sections.
                  </p>
                  <h2 className="h4 sm:h3">Sample Heading Twelve</h2>
                  <p className="fs-6 md:fs-5">
                    This area can include examples, definitions, or clarifying notes related to the topic.
                  </p>
                  <h2 className="h4 sm:h3">Sample Heading Thirteen</h2>
                  <p className="fs-6 md:fs-5">
                    Use headings to break content into scannable sections, making it easier to navigate.
                  </p>
                  <h2 className="h4 sm:h3">Sample Heading Fourteen</h2>
                  <p className="fs-6 md:fs-5">
                    You can also insert lists, links, or callouts here as needed for your content strategy.
                  </p>
                  <h2 className="h4 sm:h3">Sample Heading Fifteen</h2>
                  <p className="fs-6 md:fs-5">
                    Consider keeping each paragraph focused on one idea to aid comprehension.
                  </p>
                  <h2 className="h4 sm:h3">Sample Heading Sixteen</h2>
                  <p className="fs-6 md:fs-5">
                    Placeholder copy ensures layout fidelity before the final content is ready.
                  </p>
                  <h2 className="h4 sm:h3">Sample Heading Seventeen</h2>
                  <p className="fs-6 md:fs-5">
                    Swap these samples with production content when available, and adjust spacing as needed.
                  </p>
                  <h2 className="h4 sm:h3">Sample Heading Eighteen</h2>
                  <p className="fs-6 md:fs-5">
                    Maintain semantic structure by using heading levels in descending order when appropriate.
                  </p>
                  <h2 className="h4 sm:h3">Sample Heading Nineteen</h2>
                  <p className="fs-6 md:fs-5">
                    Ensure accessibility by writing clear, descriptive headings that summarize the section.
                  </p>
                  <h2 className="h4 sm:h3">Sample Heading Twenty</h2>
                  <p className="fs-6 md:fs-5">
                    This template can be adapted for tutorials, announcements, or long-form articles.
                  </p>
                  <h2 className="h4 sm:h3">Sample Heading Twenty-One</h2>
                  <p className="fs-6 md:fs-5">
                    Keep visual rhythm with consistent spacing between headings and paragraphs.
                  </p>
                  <h2 className="h4 sm:h3">Sample Heading Twenty-Two</h2>
                  <p className="fs-6 md:fs-5">
                    Use concise language and avoid jargon to make content approachable for all readers.
                  </p>
                  <h2 className="h4 sm:h3">Sample Heading Twenty-Three</h2>
                  <p className="fs-6 md:fs-5">
                    Provide context and supporting details that help readers act on the information.
                  </p>
                  <h2 className="h4 sm:h3">Sample Heading Twenty-Four</h2>
                  <p className="fs-6 md:fs-5">
                    If sections become long, consider adding subheadings or bullet lists for clarity.
                  </p>
                  <h2 className="h4 sm:h3">Sample Heading Twenty-Five</h2>
                  <p className="fs-6 md:fs-5">
                    Align content with your brand voice and style guidelines for consistency.
                  </p>
                  <h2 className="h4 sm:h3 m-0">Sample Heading Twenty-Six</h2>
                  <p className="fs-6 md:fs-5 m-0">
                    Final placeholder paragraph. Replace or trim as necessary for your use case.
                  </p>
                </div>
              </div>
            </div>
            <div className="md:col-4 order-2 lg:order-0 sticky-element3">
              <Sidebar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



import { awards, teamMembers3 } from "@/data/team";
import React from "react";
import Link from "next/link";
import Image from "next/image";
export default function Awards() {
  return (
    <div
      id="team_members"
      className="team-members section panel overflow-hidden"
    >
      <div className="section-outer panel py-6 lg:py-8 xl:py-10 lg:mx-2 lg:rounded-2 bg-tertiary-700 text-white">
        <div className="container sm:max-w-lg xl:max-w-xl">
          <div className="section-inner panel">
            <div className="panel vstack items-center gap-4 sm:gap-6 xl:gap-8">
              <div
                className="heading vstack items-center gap-2 panel max-w-650px mx-auto text-center"
                data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
              >
                <span className="fs-7 fw-bold py-narrow px-2 border border-white dark:border-white rounded-pill text-white">
                  RECOGNITIONS
                </span>
                <h2 className="title h3 lg:h2 xl:h1 m-0 text-white"></h2>
                <h2 className="h3 lg:h2 xl:h1 m-0 px-2 text-white">
                  Some of Our <br />
                  <span className="d-inline-flex px-1 bg-secondary text-primary -rotate-1 lg:-rotate-2 rounded-1 lg:rounded-1-5">
                    Awards and Backers
                  </span>
                </h2>
                <p className="fs-6 xl:fs-5 text-white text-opacity-70">
                  From prestigious awards to incredible backers, our journey is
                  fueled by innovation and the trust of our community.
                </p>
              </div>
              <div className="content panel items-center text-center justify-center">
                <div
                  className="row child-cols-6 sm:child-cols-4 lg:child-cols-4 col-match gx-2 gy-4 xl:gx-4 xl:gy-6 items-center text-center justify-center"
                  data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 400});"
                >
                  {awards.map((member, index) => (
                    <div key={index}>
                      <div className="panel vstack gap-2 xl:gap-3">
                        <Image
                          className="w-100 max-w-200px rounded-1 sm:rounded-1-5"
                          src={member.imgSrc}
                          width={560}
                          height={592}
                          alt={member.alt}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

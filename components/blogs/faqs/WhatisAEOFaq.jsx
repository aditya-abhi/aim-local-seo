"use client";
import { aeoTools, whatIsAEO } from "@/data/blogFaqs";
import { useEffect, useRef, useState } from "react";
import React from "react";

export default function WhatisAEOFaq() {
  const parentRefs = useRef([]);
  const questionRefs = useRef([]);
  const answerRefs = useRef([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const parentClass =
    "panel p-2 lg:p-4 bg-secondary dark:bg-tertiary-700 rounded-1-5";
  useEffect(() => {
    questionRefs.current.forEach((el) => {
      el.classList.remove("active");
    });
    parentRefs.current.forEach((el) => {
      el.classList.remove("active");
    });
    answerRefs.current.forEach((el) => {
      el.style.height = "0px";
      el.style.overflow = "hidden";
      el.style.transition = "all 0.5s ease-in-out";
      el.style.marginTop = "0px";
    });
    if (currentIndex !== -1) {
      questionRefs.current[currentIndex].classList.add("active");
      parentRefs.current[currentIndex].classList.add("active");
      const element = answerRefs.current[currentIndex];
      element.style.height = element.scrollHeight + "px";
      element.style.overflow = "hidden";
      element.style.transition = "all 0.5s ease-in-out";
      element.style.marginTop = "20px";
    }
  }, [currentIndex]);

  return (
    <div id="faq" className="faq section panel">
      <div className="section-outer panel">
        <div className="container lg:max-w-lg lg:py-8">
          <div
            className="section-inner panel"
            data-anime="onview: -200; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
          >
            <div className="row child-cols-12 col-match g-4">
              <div>
                <div className="vstack items-center text-center gap-2">
                  <h2 className="h4 sm:h3 xl:h2 m-0">
                    Frequently asked questions!
                  </h2>
                </div>
              </div>
              <div>
                <div className="panel gap-2">
                  <ul
                    className="uc-accordion gap-2 max-w-lg p-0"
                    data-uc-accordion="targets: > li; multiple: false;"
                  >
                    {/* <Blog1 parentClass="panel p-2 lg:p-4 bg-secondary dark:bg-tertiary-700 rounded-1-5" /> */}
                    <div className="">
                      {whatIsAEO.map((item, index) => (
                        <li
                          ref={(el) => (parentRefs.current[index] = el)}
                          className={`${
                            currentIndex == index ? "uc-open" : "my-2"
                          } ${parentClass} `}
                          onClick={() => {
                            setCurrentIndex((pre) =>
                              pre == index ? -1 : index
                            );
                          }}
                          key={index}
                        >
                          <a
                            className="uc-accordion-title fs-5 sm:fs-4"
                            role="button"
                            aria-disabled="false"
                            ref={(el) => (questionRefs.current[index] = el)}
                          >
                            {item.question}
                          </a>
                          <div
                            className="uc-accordion-content"
                            ref={(el) => (answerRefs.current[index] = el)}
                          >
                            <p>{item.answer}</p>
                          </div>
                        </li>
                      ))}
                    </div>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import React from "react";

export default function DownloadForm() {
  return (
    <div
      id="companies_sponsores"
      className="companies-sponsores section panel overflow-hidden"
    >
      <div className="section-outer panel">
        <div className="container sm:max-w-md">
          <div className="section-inner panel py-6">
            <div className="panel mx-auto">
              <form
                onSubmit={(e) => e.preventDefault()}
                className="vstack gap-2 p-3 sm:p-6 xl:p-8 rounded-2 border bg-secondary dark:bg-tertiary-700 border-secondary dark:border-gray-300 dark:border-opacity-20"
              >
                <h1 className="text-center text-tertiary dark:text-white">
                  Download The Guide
                </h1>
                {/* <p className="fs-6 text-dark dark:text-white text-opacity-70 mb-2">
                  Have a question or feedback? Fill out the form below, and
                  we'll get back to you as soon as possible.
                </p> */}
                <div className="row child-cols-12 md:child-cols-6 g-2">
                  <div>
                    <input
                      className="form-control h-48px w-full bg-white dark:border-white dark:bg-opacity-0 dark:border-opacity-15 dark:text-white"
                      type="text"
                      placeholder="Full name"
                      required
                    />
                  </div>
                  <div>
                    <input
                      className="form-control h-48px w-full bg-white dark:border-white dark:bg-opacity-0 dark:border-opacity-15 dark:text-white"
                      type="email"
                      placeholder="Your email"
                      required
                    />
                  </div>
                </div>
                <div>
                  <h3 className="mt-3 mb-0">Where did you hear about us?</h3>
                  <label className="d-block">
                    <input type="radio" name="reference" value="Social Media" />{" "}
                    Social Media
                  </label>
                  <label className="d-block">
                    <input
                      type="radio"
                      name="reference"
                      value="Friends and colleagues"
                    />{" "}
                    Friends and colleagues
                  </label>
                  <label className="d-block">
                    <input
                      type="radio"
                      name="reference"
                      value="Google and AI Overviews"
                    />{" "}
                    Google and AI Overviews
                  </label>
                  <label className="d-block">
                    <input
                      type="radio"
                      name="reference"
                      value="Google and AI Overviews"
                    />{" "}
                    Google and AI Overviews
                  </label>
                </div>
                <button
                  className="btn btn-primary btn-md text-white mt-2"
                  type="submit"
                >
                  Download Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

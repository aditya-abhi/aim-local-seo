"use client";
import Link from "next/link";
import React from "react";
// Lightweight React icon components to avoid external deps
function IconWrapper({ children, className }) {
  return (
    <span className={className} style={{ lineHeight: 0 }}>
      {children}
    </span>
  );
}
const IconChat = ({ className }) => (
  <IconWrapper className={className}>
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="d-block"
    >
      <path d="M21 15a4 4 0 0 1-4 4H8l-4 3v-3a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4h13a4 4 0 0 1 4 4z" />
    </svg>
  </IconWrapper>
);
const IconSearch = ({ className }) => (
  <IconWrapper className={className}>
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="d-block"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    </svg>
  </IconWrapper>
);
const IconGlobe = ({ className }) => (
  <IconWrapper className={className}>
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="d-block"
    >
      <circle cx="12" cy="12" r="10"></circle>
      <path d="M2 12h20"></path>
      <path d="M12 2a15.3 15.3 0 0 0 0 20a15.3 15.3 0 0 0 0-20"></path>
    </svg>
  </IconWrapper>
);
const IconStar = ({ className }) => (
  <IconWrapper className={className}>
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="d-block"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21 12 17.77 5.82 21 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  </IconWrapper>
);

const IconWebcam = ({ className }) => (
  <IconWrapper className={className}>
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="d-block"
    >
      <circle cx="12" cy="8" r="4" />
      <line x1="12" y1="12" x2="12" y2="14" />
      <rect x="8" y="14" width="8" height="4" rx="1" />
    </svg>
  </IconWrapper>
);

const IconTarget = ({ className }) => (
  <IconWrapper className={className}>
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="d-block"
    >
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="4" />
      <line x1="12" y1="2" x2="12" y2="6" />
      <line x1="12" y1="18" x2="12" y2="22" />
      <line x1="2" y1="12" x2="6" y2="12" />
      <line x1="18" y1="12" x2="22" y2="12" />
    </svg>
  </IconWrapper>
);
const IconSettings = ({ className }) => (
  <IconWrapper className={className}>
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="d-block"
    >
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33h0A1.65 1.65 0 0 0 9 3.09V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51h0a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82v0A1.65 1.65 0 0 0 21 12h.09a2 2 0 1 1 0 4H21a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  </IconWrapper>
);
const IconUsers = ({ className }) => (
  <IconWrapper className={className}>
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="d-block"
    >
      <path d="M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  </IconWrapper>
);
const IconZap = ({ className }) => (
  <IconWrapper className={className}>
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="d-block"
    >
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  </IconWrapper>
);

const Search = (props) => <Icon name="search" className={props.className} />;
const Target = (props) => <Icon name="target" className={props.className} />;
const Zap = (props) => <Icon name="bolt" className={props.className} />;
const TrendingUp = (props) => (
  <Icon name="chart-up" className={props.className} />
);
const Rocket = (props) => (
  <Icon name="rocket-launch" className={props.className} />
);
const CheckCircle = (props) => (
  <Icon name="check-circle" className={props.className} />
);
const ArrowRight = (props) => (
  <Icon name="arrow-right" className={props.className} />
);

export default function ServiceTimeline() {
  return (
    // <div className="section-outer panel bg-gradient-to-b from-primary-200 dark:from-gray-900 to-white dark:to-tertiary-800 rounded-2 mx-2">
    <div className="geo-blueprint-root position-relative">
      <div className="geo-bg position-absolute top-0 start-0 w-100 h-100 bg-cover bg-center" />
      <div className="position-relative">
        <div className="blueprint-container text-tertiary">
          <h2 className="h2 lg:h1 text-tertiary dark:text-primary">
            {" "}
            Stay Accurate Everywhere, Automatically
          </h2>
          <p className="subtitle fs-6 lg:fs-5 text-gray-700 dark:text-white">
            Don't let outdated information cost you customers. Our platform
            keeps your business details consistent and protected across every
            major listing site, all from one place.
          </p>

          <div className="timeline">
            <div className="timeline-item left">
              <div className="content rounded-2 shadow-lg transition-all bg-secondary dark:bg-tertiary-800 dark:bg-gradient-45 from-tertiary to-transparent">
                <span className="step-tag bg-primary text-tertiary hover:bg-tertiary hover:text-primary">
                  Step 1
                </span>
                <div className="hstack items-center justify-end gap-2 mb-2">
                  <span className="icon-circle d-inline-flex align-items-center justify-center bg-tertiary rounded-circle shadow-sm">
                    <IconWebcam className="text-primary" />
                  </span>
                </div>
                <div className="text-tertiary dark:text-white">
                  <h3>Book a Free Strategy Call:</h3>
                  <p>
                    It all starts with a conversation. We'll discuss your
                    business goals, analyze your current online presence, and
                    show you exactly what's holding you back from attracting
                    more local customers.
                  </p>
                </div>
              </div>
            </div>

            <div className="timeline-item right">
              <div className="content rounded-2 shadow-lg transition-all bg-secondary dark:bg-tertiary-800 dark:bg-gradient-135 from-tertiary to-transparent">
                <span className="step-tag bg-primary text-tertiary hover:bg-tertiary hover:text-primary">
                  Step 2
                </span>
                <div className="hstack items-center justify-start gap-2 mb-2">
                  <span className="icon-circle d-inline-flex align-items-center justify-center bg-tertiary rounded-circle shadow-sm text-primary">
                    <IconChat />
                  </span>
                </div>
                <div className="text-tertiary dark:text-white">
                  <h3>We Build a Personalized Local SEO Plan:</h3>
                  <p>
                    After our call, our team of experts will create a custom,
                    data-driven roadmap tailored specifically for your business.
                    This plan is designed to help you dominate your local
                    market.
                  </p>
                </div>
              </div>
            </div>

            <div className="timeline-item left">
              <div className="content rounded-2 shadow-lg transition-all bg-secondary dark:bg-tertiary-800 dark:bg-gradient-45 from-tertiary to-transparent">
                <span className="step-tag bg-primary text-tertiary hover:bg-tertiary hover:text-primary">
                  Step 3
                </span>
                <div className="hstack items-center justify-end gap-2 mb-2">
                  <span className="icon-circle d-inline-flex align-items-center justify-center bg-tertiary rounded-circle shadow-sm">
                    <IconSearch className="text-primary" />
                  </span>
                </div>
                <div className="text-tertiary dark:text-white">
                  <h3>Get a Step-by-Step Roadmap:</h3>
                  <p>
                    We take the guesswork out of local SEO. Every day, our
                    specialized tools and team give you actionable, personalized
                    tips to improve your online presence. You'll know exactly
                    what to do next to get more visibility.
                  </p>
                </div>
              </div>
            </div>

            <div className="timeline-item right">
              <div className="content rounded-2 shadow-lg transition-all bg-secondary dark:bg-tertiary-800 dark:bg-gradient-135 from-tertiary to-transparent">
                <span className="step-tag bg-primary text-tertiary hover:bg-tertiary hover:text-primary">
                  Step 4
                </span>
                <div className="hstack items-center justify-start gap-2 mb-2">
                  <span className="icon-circle d-inline-flex align-items-center justify-center bg-tertiary rounded-circle shadow-sm">
                    <IconGlobe className="text-primary" />
                  </span>
                </div>
                <div className="text-tertiary dark:text-white">
                  <h3>Track Your True Ranking:</h3>
                  <p>
                    Stop guessing where you stand. Our platform provides
                    real-time data on how your business ranks in local searches,
                    so you can track your progress and see exactly where you're
                    winning against competitors.
                  </p>
                </div>
              </div>
            </div>

            <div className="timeline-item left">
              <div className="content rounded-2 shadow-lg transition-all bg-secondary dark:bg-tertiary-800 dark:bg-gradient-45 from-tertiary to-transparent">
                <span className="step-tag bg-primary text-tertiary hover:bg-tertiary hover:text-primary">
                  Step 5
                </span>
                <div className="hstack items-center justify-end gap-2 mb-2">
                  <span className="icon-circle d-inline-flex align-items-center justify-center bg-tertiary rounded-circle shadow-sm text-primary">
                    <IconUsers />
                  </span>
                </div>
                <div className="text-tertiary dark:text-white">
                  <h3>Unlock the Power of AI:</h3>
                  <p>
                    Our AI-driven marketing suggestions help you create
                    high-impact content and strategies in minutes. It's like
                    having a full-time marketing expert working for you,
                    ensuring every post and update is optimized for results.
                  </p>
                </div>
              </div>
            </div>

            <div className="timeline-item right">
              <div className="content rounded-2 shadow-lg transition-all bg-secondary dark:bg-tertiary-800 dark:bg-gradient-135 from-tertiary to-transparent">
                <span className="step-tag bg-primary text-tertiary hover:bg-tertiary hover:text-primary">
                  Step 6
                </span>
                <div className="hstack items-center justify-start gap-2 mb-2">
                  <span className="icon-circle d-inline-flex align-items-center justify-center bg-tertiary rounded-circle shadow-sm text-primary">
                    <IconZap />
                  </span>
                </div>
                <div className="text-tertiary dark:text-white">
                  <h3>Let the Reviews Speak for You:</h3>
                  <p>
                    We make it simple to collect and manage 5-star reviews from
                    happy customers. We'll help you build a stellar reputation
                    that makes your business the obvious choice in your local
                    area.
                  </p>
                </div>
              </div>
            </div>

            <div className="timeline-item left">
              <div className="content rounded-2 shadow-lg transition-all bg-secondary dark:bg-tertiary-800 dark:bg-gradient-45 from-tertiary to-transparent">
                <span className="step-tag bg-primary text-tertiary hover:bg-tertiary hover:text-primary">
                  Step 7
                </span>
                <div className="hstack items-center justify-end gap-2 mb-2">
                  <span className="icon-circle d-inline-flex align-items-center justify-center bg-tertiary rounded-circle shadow-sm">
                    <IconStar className="text-primary" />
                  </span>
                </div>
                <div className="text-tertiary dark:text-white">
                  <h3>Protect Your Business</h3>
                  <p>
                    Safeguard your Google Business Profile from unwanted changes
                    and spam. We actively monitor your information to ensure
                    it's always accurate and secure, so customers find the right
                    details every time.
                  </p>
                </div>
              </div>
            </div>

            <div className="timeline-item right">
              <div className="content rounded-2 shadow-lg transition-all bg-secondary dark:bg-tertiary-800 dark:bg-gradient-135 from-tertiary to-transparent">
                <span className="step-tag bg-primary text-tertiary hover:bg-tertiary hover:text-primary">
                  Step-8
                </span>
                <div className="hstack items-center justify-end gap-2 mb-2">
                  <span className="icon-circle d-inline-flex align-items-center justify-center bg-tertiary rounded-circle shadow-sm">
                    <IconStar className="text-primary" />
                  </span>
                </div>
                <div className="text-tertiary dark:text-white">
                  <h3>Stay in Touch with Customers:</h3>
                  <p>
                    Engage directly with your audience by responding to reviews
                    and messages from one simple dashboard. We help you build
                    strong customer relationships and turn visitors into loyal
                    fans.
                  </p>
                </div>
              </div>
            </div>
            <div className="timeline-item left">
              <div className="content rounded-2 shadow-lg transition-all bg-secondary dark:bg-tertiary-800 dark:bg-gradient-45 from-tertiary to-transparent">
                <span className="step-tag bg-primary text-tertiary hover:bg-tertiary hover:text-primary">
                  Step-9
                </span>
                <div className="hstack items-center justify-end gap-2 mb-2">
                  <span className="icon-circle d-inline-flex align-items-center justify-center bg-tertiary rounded-circle shadow-sm">
                    <IconStar className="text-primary" />
                  </span>
                </div>
                <div className="text-tertiary dark:text-white">
                  <h3>Learn from Your Growth:</h3>
                  <p>
                    Our powerful analytics dashboard shows you exactly what's
                    working. See how your efforts are translating into
                    real-world results like more phone calls, website clicks,
                    and directions, so you can clearly measure your success.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-5 z-3">
              <Link
                href={`https://calendly.com/team-getaimonitor/ai-monitor-local-seo-demo`}
                target="_blank"
                className="btn btn-xl btn-tertiary text-white hover:bg-primary hover:text-tertiary dark:border-secondary dark:bg-primary dark:text-tertiary dark:hover:bg-secondary dark:hover:text-tertiary dark:hover:border-primary border-2 px-2 w-auto shadow-lg"
              >
                {/* <i className="icon-narrow unicon-chat-launch fw-bold" /> */}
                <span>Start your Journey</span>
              </Link>
            </div>
          </div>
        </div>
        {/* </div> */}
      </div>

      <style jsx>{`
        .geo-blueprint-root {
          --background-color: transparent;
          --text-color: inherit;
          --line-color: #1c5864;
          --step-bg-color: var(--primary-color, #3b82f6);
          --step-text-color: #1c5864;
          --node-color: #93e85f;
          background-color: var(--background-color);
          color: var(--text-color);
          padding: 40px 20px;
        }

        /* .geo-bg {
          background-image: url("/assets/images/landing/hero-11-bg-light.jpg");
          opacity: 0.6;
        } */

        .blueprint-container {
          max-width: 900px;
          margin: auto;
          text-align: center;
        }

        .blueprint-container h1 {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
        }

        .blueprint-container .subtitle {
          font-size: 1rem;
          max-width: 650px;
          margin: 0 auto 4rem auto;
          line-height: 1.6;
          color: currentColor;
          opacity: 0.8;
        }

        .icon-circle {
          width: 48px;
          height: 48px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }

        .icon-circle i {
          line-height: 1;
          display: inline-block;
        }

        /* optional color filter utility for primary-colored images */
        .image-filter-primary {
          filter: brightness(0) saturate(100%) invert(34%) sepia(63%)
            saturate(1110%) hue-rotate(163deg) brightness(92%) contrast(90%);
        }

        .timeline {
          position: relative;
          margin-top: 50px;
        }

        .timeline::after {
          content: "";
          position: absolute;
          width: 2px;
          background-color: var(--line-color);
          top: 0;
          bottom: 0;
          left: 50%;
          margin-left: -1px;
        }

        .timeline-item {
          padding: 10px 40px;
          position: relative;
          background-color: inherit;
          width: 50%;
          box-sizing: border-box;
        }

        .timeline-item::after {
          content: "";
          position: absolute;
          width: 18px;
          height: 18px;
          right: -9px;
          background-color: var(--node-color);
          border: 4px solid var(--background-color);
          top: 32px;
          border-radius: 50%;
          z-index: 1;
        }

        .left {
          left: 0;
          text-align: right;
        }

        .right {
          left: 50%;
          text-align: left;
        }

        .right::after {
          left: -9px;
        }

        .content {
          padding: 20px 30px;
          position: relative;
          background: rgba(255, 255, 255, 0.12);
          border: 1px solid rgba(255, 255, 255, 0.25);
          border-radius: 12px;
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          transition: transform 200ms ease, box-shadow 200ms ease,
            background 200ms ease, color 200ms ease;
        }

        .step-tag {
          padding: 4px 12px;
          font-size: 0.75rem;
          font-weight: 600;
          border-radius: 4px;
          display: inline-block;
          margin-bottom: 12px;
          transition: transform 200ms ease, background 200ms ease,
            color 200ms ease;
        }

        .content h2 {
          font-size: 1.75rem;
          margin: 0 0 10px 0;
          font-weight: 600;
        }

        .content p {
          font-size: 0.9rem;
          line-height: 1.5;
          color: currentColor;
          opacity: 0.8;
          margin: 0;
        }

        .content:hover {
          transform: scale(1.02);
          box-shadow: 0 16px 48px rgba(0, 0, 0, 0.25);
          background: rgba(255, 255, 255, 0.18);
        }

        .content:hover .step-tag {
          transform: scale(1.05);
        }

        @media screen and (max-width: 768px) {
          .timeline::after {
            left: 31px;
          }

          .timeline-item {
            width: 100%;
            padding-left: 70px;
            padding-right: 25px;
          }

          .left,
          .right {
            left: 0%;
            text-align: left;
          }

          .timeline-item::after {
            left: 22px;
          }

          .blueprint-container h1 {
            font-size: 2rem;
          }
        }
      `}</style>
    </div>
  );
}

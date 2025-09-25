import React from "react";
import DesktopTableOfContentsClient from "./DesktopTableOfContentsClient";

// Static fallback content that can be rendered on the server
const staticTocItems = [
  {
    id: "introduction-to-modern-web-development",
    text: "Introduction to Modern Web Development",
    level: 2,
    children: [
      {
        id: "getting-started-with-react",
        text: "Getting Started with React",
        level: 3,
      },
      {
        id: "setting-up-your-development-environment",
        text: "Setting Up Your Development Environment",
        level: 3,
      },
    ],
  },
  {
    id: "advanced-javascript-concepts",
    text: "Advanced JavaScript Concepts",
    level: 2,
    children: [
      {
        id: "asynchronous-programming",
        text: "Asynchronous Programming",
        level: 3,
      },
      { id: "es6-features", text: "ES6+ Features", level: 3 },
      {
        id: "error-handling-best-practices",
        text: "Error Handling Best Practices",
        level: 3,
      },
    ],
  },
  {
    id: "performance-optimization",
    text: "Performance Optimization",
    level: 2,
    children: [
      {
        id: "code-splitting-and-lazy-loading",
        text: "Code Splitting and Lazy Loading",
        level: 3,
      },
    ],
  },
  {
    id: "testing-and-quality-assurance",
    text: "Testing and Quality Assurance",
    level: 2,
    children: [
      {
        id: "unit-testing-fundamentals",
        text: "Unit Testing Fundamentals",
        level: 3,
      },
      {
        id: "integration-testing-strategies",
        text: "Integration Testing Strategies",
        level: 3,
      },
    ],
  },
  {
    id: "deployment-and-devops",
    text: "Deployment and DevOps",
    level: 2,
    children: [
      { id: "ci-cd-pipeline-setup", text: "CI/CD Pipeline Setup", level: 3 },
      {
        id: "container-orchestration",
        text: "Container Orchestration",
        level: 3,
      },
    ],
  },
  {
    id: "security-best-practices",
    text: "Security Best Practices",
    level: 2,
    children: [
      {
        id: "authentication-and-authorization",
        text: "Authentication and Authorization",
        level: 3,
      },
    ],
  },
];

// Server-rendered static table of contents
function StaticTableOfContents({ items = staticTocItems }) {
  return (
    <div className="uc-sidebar panel vstack gap-2">
      <div className="widget popular-widget vstack gap-2 p-2 py-3 lg:p-4 lg:py-5 rounded-1-5 lg:rounded-2 bg-secondary dark:bg-tertiary-700">
        <div className="widget-title text-center">
          <h5 className="fs-7 m-0">Table of Content</h5>
        </div>

        {/* Static Reading Progress Bar */}
        <div className="progress-container mt-2 px-2">
          <div className="d-flex justify-between items-center mb-1">
            <span className="fs-8 text-gray-600 dark:text-gray-400">
              Reading Progress
            </span>
            <span className="fs-8 fw-medium text-dark dark:text-white">0%</span>
          </div>
          <div className="bg-gray-300 dark:bg-gray-600 rounded h-1 overflow-hidden">
            <div
              className="bg-primary h-full rounded transition-all duration-500"
              style={{ width: "0%" }}
            />
          </div>
        </div>

        <div className="widget-content">
          <div className="row child-cols-12 gx-4 gy-2 sep-x">
            {items.map((item, i) => (
              <div key={item.id}>
                <article className="post type-post panel">
                  <div className="row child-cols g-2 lg:g-3">
                    <div>
                      {/* Main heading */}
                      <div className="hstack items-start gap-2">
                        <span className="h5 lg:h4 fst-italic text-center text-tertiary dark:text-primary m-0 min-w-20px">
                          {i + 1}
                        </span>

                        <div className="post-header panel vstack justify-between gap-1 flex-1">
                          <div className="d-flex items-center justify-between w-100">
                            <h3 className="post-title fs-7 m-0 flex-1">
                              <a href={`#${item.id}`} className="text-none">
                                {item.text}
                              </a>
                            </h3>

                            {/* Static accordion toggle button */}
                            {item.children && item.children.length > 0 && (
                              <button
                                className="btn btn-xs p-0 ms-2 rounded-circle d-flex align-items-center justify-content-center"
                                style={{
                                  backgroundColor: "#01353C",
                                  border: "none",
                                  width: "20px",
                                  height: "20px",
                                  minWidth: "20px",
                                }}
                                title="Expand"
                              >
                                <i
                                  className="unicon-chevron-down text-white"
                                  style={{ fontSize: "10px" }}
                                />
                              </button>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Static sub-headings (initially hidden) */}
                      {item.children && item.children.length > 0 && (
                        <div
                          className="sub-headings mt-2 ms-4 ps-2"
                          style={{ display: "none" }}
                        >
                          {item.children.map((child, childIndex) => (
                            <div
                              key={child.id}
                              className="sub-heading-item mb-1"
                            >
                              <div className="hstack items-start gap-2">
                                <span className="fs-8 text-center text-gray-500 m-0 min-w-16px">
                                  {i + 1}.{childIndex + 1}
                                </span>
                                <h4 className="fs-8 text-gray-700 dark:text-gray-300 m-0">
                                  <a
                                    href={`#${child.id}`}
                                    className="text-none hover:text-primary"
                                  >
                                    {child.text}
                                  </a>
                                </h4>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Main server component that renders static content and hydrates with client functionality
export default function TableOfContentsServer() {
  return (
    <div className="d-none xl:d-block">
      {/* Server-rendered static content */}
      <div className="toc-server-rendered">
        <StaticTableOfContents />
      </div>

      {/* Client-side enhancement that will replace the static version */}
      <DesktopTableOfContentsClient />
    </div>
  );
}

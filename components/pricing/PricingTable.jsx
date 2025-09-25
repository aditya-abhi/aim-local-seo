import React from "react";

export default function PricingTable() {
  return (
    <div id="pricing_table" className="pricing-compare section panel">
      <div className="section-outer panel py-4 md:py-6 xl:py-10">
        <div className="container">
          <div
            className="section-inner panel vstack gap-4 lg:gap-6 xl:gap-8"
            data-anime="onview: -200; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
          >
            <div
              className="heading vstack gap-2 items-center panel text-center"
              data-anime="onview: -200; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
            >
              <h2 className="title h3 lg:h2 xl:h2 m-0">
                Pick the Plan That Powers{" "}
                <span className="px-1 bg-tertiary text-primary">
                  Your Growth
                </span>
              </h2>
              <p className="fs-6 xl:fs-5">
                From solo creators to enterprise teams, we’ve got a plan that
                fits your workflow perfectly.
              </p>
            </div>
            <div className="panel p-2 border rounded-1-5 lg:rounded-2 dark:border-gray-600 dark:bg-black overflowx-auto">
              <table className="uc-table uc-table-divider">
                <thead className="table-head sticky-top z-1 bg-white text-dark dark:bg-gray-900 dark:text-white">
                  <tr className="table-row border-white dark:border-gray-900">
                    <th className="table-header-cell" scope="row">
                      PROS
                    </th>
                    <th
                      className="table-header-cell w-1/6"
                      scope="col"
                      id="plan-1"
                    >
                      <div className="title">
                        <div className="h6 lg:h5 mt-4 mb-2">
                          <span>Self Host (Free)</span>
                        </div>
                      </div>
                    </th>
                    <th
                      className="table-header-cell w-1/6"
                      scope="col"
                      id="plan-2"
                    >
                      <div className="title">
                        <div className="h6 lg:h5 mt-4 mb-2">
                          <span>Starter ($19/mo)</span>
                        </div>
                      </div>
                    </th>
                    <th
                      className="table-header-cell w-1/6"
                      scope="col"
                      id="plan-3"
                    >
                      <div className="title">
                        <div className="h6 lg:h5 mt-4 mb-2">
                          <span>Growth ($99/mo)</span>
                        </div>
                      </div>
                    </th>
                    <th
                      className="table-header-cell w-1/6"
                      scope="col"
                      id="plan-4"
                    >
                      <div className="title">
                        <div className="h6 lg:h5 mt-4 mb-2">
                          <span>Enterprise (Custom)</span>
                        </div>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody className="table-body">
                  <tr className="table-row table-heading bg-primary-25 dark:bg-gray-700 border-white dark:border-gray-900">
                    <th colSpan={5} scope="colgroup">
                      <div className="h6 m-0 text-dark dark:text-white">
                        <span>AI Automation key features</span>
                      </div>
                    </th>
                  </tr>
                  <tr className="table-row border-white dark:border-gray-900">
                    <th className="" scope="row">
                      <div className="hstack gap-1 justify-start">
                        <span className="fs-5 fw-bold text-dark dark:text-white">
                          Pros
                        </span>
                      </div>
                    </th>
                    <td>
                      <div>
                        <span>Full Control & Zero Cost</span>
                      </div>
                    </td>
                    <td>
                      <div>
                        <span>Convenience & Predictability</span>
                      </div>
                    </td>
                    <td>
                      <div>
                        <span>Scale & Proprietary Insights</span>
                      </div>
                    </td>
                    <td>
                      <div>
                        <span>Strategic Partnership & Custom Solutions</span>
                      </div>
                    </td>
                  </tr>
                  <tr className="table-row border-gray-100 dark:border-gray-600">
                    <th className="" scope="row">
                      <div className="hstack gap-1 justify-start">
                        <span className="fs-5 fw-bold text-dark dark:text-white">
                          Best for:
                        </span>
                      </div>
                    </th>
                    <td>
                      <div>
                        <span>Developer / Hobbyist</span>
                      </div>
                    </td>
                    <td>
                      <div>
                        <span>Solopreneur / Small Business</span>
                      </div>
                    </td>
                    <td>
                      <div>
                        <span>Scaling Startup / Mid-Market Team</span>
                      </div>
                    </td>
                    <td>
                      <div>
                        <span>Large Corporation / Multinational</span>
                      </div>
                    </td>
                  </tr>
                  <tr className="table-row border-gray-100 dark:border-gray-600">
                    <th className="" scope="row">
                      <div className="hstack gap-1 justify-start">
                        <span className="fs-5 fw-bold text-dark dark:text-white">
                          Pricing
                        </span>
                      </div>
                    </th>
                    <td>
                      <div>
                        <span>$0</span>
                      </div>
                    </td>
                    <td>
                      <div>
                        <span>$19</span>
                      </div>
                    </td>
                    <td>
                      <div>
                        <span>$99</span>
                      </div>
                    </td>
                    <td>
                      <div>
                        <span>Custom</span>
                      </div>
                    </td>
                  </tr>
                </tbody>
                <tbody className="table-body">
                  <tr className="table-row table-heading bg-primary-25 dark:bg-gray-700 border-white dark:border-gray-900">
                    <th colSpan={5} scope="colgroup">
                      <div className="h6 m-0 text-dark dark:text-white">
                        <span>MONITORING SCALE</span>
                      </div>
                    </th>
                  </tr>
                  <tr className="table-row border-white dark:border-gray-900">
                    <th className="" scope="row">
                      <div className="hstack gap-1 justify-start">
                        <span className="fs-5 fw-bold text-dark dark:text-white">
                          Monitor AI Prompts
                        </span>
                      </div>
                    </th>
                    <td>
                      <div>
                        <span>Custom (User-limited)</span>
                      </div>
                    </td>
                    <td>
                      <div>
                        <span>10</span>
                      </div>
                    </td>
                    <td>
                      <div>
                        <span>100</span>
                      </div>
                    </td>
                    <td>
                      <div>
                        <span>Custom</span>
                      </div>
                    </td>
                  </tr>
                  <tr className="table-row border-white dark:border-gray-900">
                    <th className="" scope="row">
                      <div className="hstack gap-1 justify-start">
                        <span className="fs-5 fw-bold text-dark dark:text-white">
                          Regions
                        </span>
                      </div>
                    </th>
                    <td>
                      <div>
                        <span>1</span>
                      </div>
                    </td>
                    <td>
                      <div>
                        <span>1</span>
                      </div>
                    </td>
                    <td>
                      <div>
                        <span>5</span>
                      </div>
                    </td>
                    <td>
                      <div>
                        <span>Custom</span>
                      </div>
                    </td>
                  </tr>
                  <tr className="table-row border-white dark:border-gray-900">
                    <th className="" scope="row">
                      <div className="hstack gap-1 justify-start">
                        <span className="fs-5 fw-bold text-dark dark:text-white">
                          Languages
                        </span>
                      </div>
                    </th>
                    <td>
                      <div>
                        <span>1</span>
                      </div>
                    </td>
                    <td>
                      <div>
                        <span>1</span>
                      </div>
                    </td>
                    <td>
                      <div>
                        <span>5</span>
                      </div>
                    </td>
                    <td>
                      <div>
                        <span>Custom</span>
                      </div>
                    </td>
                  </tr>
                  <tr className="table-row border-gray-100 dark:border-gray-600">
                    <th className="" scope="row">
                      <div className="hstack gap-1 justify-start">
                        <span className="fs-5 fw-bold text-dark dark:text-white">
                          Multi-market Tracking
                        </span>
                      </div>
                    </th>
                    <td>
                      <div>
                        <span className="cstack w-24px h-24px rounded-circle bg-dark dark:bg-white bg-opacity-10">
                          <i className="icon-narrow unicon-not-available fw-bold" />
                        </span>
                      </div>
                    </td>
                    <td>
                      <div>
                        <span>Single-Domain</span>
                      </div>
                    </td>
                    <td>
                      <div>
                        <span className="cstack w-24px h-24px rounded-circle bg-primary text-white dark:bg-tertiary dark:text-dark">
                          <i className="icon-narrow unicon-checkmark fw-bold" />
                        </span>
                      </div>
                    </td>
                    <td>
                      <div>
                        <span className="cstack w-24px h-24px rounded-circle bg-primary text-white dark:bg-tertiary dark:text-dark">
                          <i className="icon-narrow unicon-checkmark fw-bold" />
                        </span>
                      </div>
                    </td>
                  </tr>
                  <tr className="table-row border-gray-100 dark:border-gray-600">
                    <th className="" scope="row">
                      <div className="hstack gap-1 justify-start">
                        <span className="fs-5 fw-bold text-dark dark:text-white">
                          Multi-domain Tracking
                        </span>
                      </div>
                    </th>
                    <td>
                      <div>
                        <span className="cstack w-24px h-24px rounded-circle bg-dark dark:bg-white bg-opacity-10">
                          <i className="icon-narrow unicon-not-available fw-bold" />
                        </span>
                      </div>
                    </td>
                    <td>
                      <div>
                        <span>Single-Market</span>
                      </div>
                    </td>
                    <td>
                      <div>
                        <span className="cstack w-24px h-24px rounded-circle bg-primary text-white dark:bg-tertiary dark:text-dark">
                          <i className="icon-narrow unicon-checkmark fw-bold" />
                        </span>
                      </div>
                    </td>
                    <td>
                      <div>
                        <span className="cstack w-24px h-24px rounded-circle bg-primary text-white dark:bg-tertiary dark:text-dark">
                          <i className="icon-narrow unicon-checkmark fw-bold" />
                        </span>
                      </div>
                    </td>
                  </tr>
                </tbody>
                <tbody className="table-body">
                  <tr className="table-row table-heading bg-primary-25 dark:bg-gray-700 border-white dark:border-gray-900">
                    <th colSpan={5} scope="colgroup">
                      <div className="h6 m-0 text-dark dark:text-white">
                        <span>DATA & INFRASTRUCTURE</span>
                      </div>
                    </th>
                  </tr>
                  <tr className="table-row border-white dark:border-gray-900">
                    <th className="" scope="row">
                      <div className="hstack gap-1 justify-start">
                        <span className="fs-5 fw-bold text-dark dark:text-white">
                          API Access Type
                        </span>
                      </div>
                    </th>
                    <td>
                      <div>
                        <span>Third-Party (User-provided)</span>
                      </div>
                    </td>
                    <td>
                      <div>
                        <span>Third-Party (Managed)</span>
                      </div>
                    </td>
                    <td>
                      <div>
                        <span>Proprietary 100 M AI Prompts data & APIs</span>
                      </div>
                    </td>
                    <td>
                      <div>
                        <span>Proprietary 100 M AI Prompts data & APIs</span>
                      </div>
                    </td>
                  </tr>
                  <tr className="table-row border-white dark:border-gray-900">
                    <th className="" scope="row">
                      <div className="hstack gap-1 justify-start">
                        <span className="fs-5 fw-bold text-dark dark:text-white">
                          API Costs
                        </span>
                      </div>
                    </th>
                    <td>
                      <div>
                        <span>Paid directly by user</span>
                      </div>
                    </td>
                    <td>
                      <div>
                        <span>Included in plan</span>
                      </div>
                    </td>
                    <td>
                      <div>
                        <span>Included in plan</span>
                      </div>
                    </td>
                    <td>
                      <div>
                        <span>Included in plan</span>
                      </div>
                    </td>
                  </tr>
                  <tr className="table-row border-gray-100 dark:border-gray-600">
                    <th className="" scope="row">
                      <div className="hstack gap-1 justify-start">
                        <span className="fs-5 fw-bold text-dark dark:text-white">
                          AI Search Volume Data
                        </span>
                      </div>
                    </th>
                    <td>
                      <div>
                        <span className="cstack w-24px h-24px rounded-circle bg-primary text-white dark:bg-tertiary dark:text-dark">
                          <i className="icon-narrow unicon-checkmark fw-bold" />
                        </span>
                      </div>
                    </td>
                    <td>
                      <div>
                        <span className="cstack w-24px h-24px rounded-circle bg-dark dark:bg-white bg-opacity-10">
                          <i className="icon-narrow unicon-not-available fw-bold" />
                        </span>
                      </div>
                    </td>
                    <td>
                      <div>
                        <span className="cstack w-24px h-24px rounded-circle bg-primary text-white dark:bg-tertiary dark:text-dark">
                          <i className="icon-narrow unicon-checkmark fw-bold" />
                        </span>
                        <span>(Premium)</span>
                      </div>
                    </td>
                    <td>
                      <div>
                        <span className="cstack w-24px h-24px rounded-circle bg-primary text-white dark:bg-tertiary dark:text-dark">
                          <i className="icon-narrow unicon-checkmark fw-bold" />
                        </span>
                        <span>(Premium)</span>
                      </div>
                    </td>
                  </tr>
                </tbody>
                <tbody className="table-body">
                  <tr className="table-row table-heading bg-primary-25 dark:bg-gray-700 border-white dark:border-gray-900">
                    <th colSpan={5} scope="colgroup">
                      <div className="h6 m-0 text-dark dark:text-white">
                        <span>ANALYTICS & FEATURES</span>
                      </div>
                    </th>
                  </tr>
                  <tr className="table-row border-white dark:border-gray-900">
                    <th className="" scope="row">
                      <div className="hstack gap-1 justify-start">
                        <span className="fs-5 fw-bold text-dark dark:text-white">
                          Analytics Dashboard
                        </span>
                      </div>
                    </th>
                    <td>
                      <div>
                        <span>Basic Analytics</span>
                      </div>
                    </td>
                    <td>
                      <div>
                        <span>Full AI Monitoring Dashboard</span>
                      </div>
                    </td>
                    <td>
                      <div>
                        <span>Advanced AI Monitoring Dashboard</span>
                      </div>
                    </td>
                    <td>
                      <div>
                        <span>Fully Customizable Dashboard</span>
                      </div>
                    </td>
                  </tr>
                  <tr className="table-row border-gray-100 dark:border-gray-600">
                    <th className="" scope="row">
                      <div className="hstack gap-1 justify-start">
                        <span className="fs-5 fw-bold text-dark dark:text-white">
                          Prompt Diversification
                        </span>
                      </div>
                    </th>
                    <td>
                      <div>
                        <span className="cstack w-24px h-24px rounded-circle bg-primary text-white dark:bg-tertiary dark:text-dark">
                          <i className="icon-narrow unicon-checkmark fw-bold" />
                        </span>
                      </div>
                    </td>
                    <td>
                      <div>
                        <span className="cstack w-24px h-24px rounded-circle bg-primary text-white dark:bg-tertiary dark:text-dark">
                          <i className="icon-narrow unicon-checkmark fw-bold" />
                        </span>
                      </div>
                    </td>
                    <td>
                      <div>
                        <span className="cstack w-24px h-24px rounded-circle bg-primary text-white dark:bg-tertiary dark:text-dark">
                          <i className="icon-narrow unicon-checkmark fw-bold" />
                        </span>
                        <span>(Advanced)</span>
                      </div>
                    </td>
                    <td>
                      <div>
                        <span className="cstack w-24px h-24px rounded-circle bg-primary text-white dark:bg-tertiary dark:text-dark">
                          <i className="icon-narrow unicon-checkmark fw-bold" />
                        </span>
                        <span>(Advanced)</span>
                      </div>
                    </td>
                  </tr>
                  <tr className="table-row border-gray-100 dark:border-gray-600">
                    <th className="" scope="row">
                      <div className="hstack gap-1 justify-start">
                        <span className="fs-5 fw-bold text-dark dark:text-white">
                          Prompt Diversification
                        </span>
                      </div>
                    </th>
                    <td>
                      <div>
                        <span className="cstack w-24px h-24px rounded-circle bg-primary text-white dark:bg-tertiary dark:text-dark">
                          <i className="icon-narrow unicon-checkmark fw-bold" />
                        </span>
                      </div>
                    </td>
                    <td>
                      <div>
                        <span className="cstack w-24px h-24px rounded-circle bg-primary text-white dark:bg-tertiary dark:text-dark">
                          <i className="icon-narrow unicon-checkmark fw-bold" />
                        </span>
                      </div>
                    </td>
                    <td>
                      <div>
                        <span className="cstack w-24px h-24px rounded-circle bg-primary text-white dark:bg-tertiary dark:text-dark">
                          <i className="icon-narrow unicon-checkmark fw-bold" />
                        </span>
                        <span>(Advanced)</span>
                      </div>
                    </td>
                    <td>
                      <div>
                        <span className="cstack w-24px h-24px rounded-circle bg-primary text-white dark:bg-tertiary dark:text-dark">
                          <i className="icon-narrow unicon-checkmark fw-bold" />
                        </span>
                        <span>(Advanced)</span>
                      </div>
                    </td>
                  </tr>
                  <tr className="table-row border-gray-100 dark:border-gray-600">
                    <th className="" scope="row">
                      <div className="hstack gap-1 justify-start">
                        <span className="fs-5 fw-bold text-dark dark:text-white">
                          AI Prompt Explorer
                        </span>
                      </div>
                    </th>
                    <td>
                      <div>
                        <span className="cstack w-24px h-24px rounded-circle bg-primary text-white dark:bg-tertiary dark:text-dark">
                          <i className="icon-narrow unicon-checkmark fw-bold" />
                        </span>
                      </div>
                    </td>
                    <td>
                      <div>
                        <span className="cstack w-24px h-24px rounded-circle bg-primary text-white dark:bg-tertiary dark:text-dark">
                          <i className="icon-narrow unicon-checkmark fw-bold" />
                        </span>
                      </div>
                    </td>
                    <td>
                      <div>
                        <span className="cstack w-24px h-24px rounded-circle bg-primary text-white dark:bg-tertiary dark:text-dark">
                          <i className="icon-narrow unicon-checkmark fw-bold" />
                        </span>
                        <span>(Advanced)</span>
                      </div>
                    </td>
                    <td>
                      <div>
                        <span className="cstack w-24px h-24px rounded-circle bg-primary text-white dark:bg-tertiary dark:text-dark">
                          <i className="icon-narrow unicon-checkmark fw-bold" />
                        </span>
                        <span>(Advanced)</span>
                      </div>
                    </td>
                  </tr>
                  <tr className="table-row border-gray-100 dark:border-gray-600">
                    <th className="" scope="row">
                      <div className="hstack gap-1 justify-start">
                        <span className="fs-5 fw-bold text-dark dark:text-white">
                          Sentiment Analysis
                        </span>
                      </div>
                    </th>
                    <td>
                      <div>
                        <span className="cstack w-24px h-24px rounded-circle bg-primary text-white dark:bg-tertiary dark:text-dark">
                          <i className="icon-narrow unicon-checkmark fw-bold" />
                        </span>
                      </div>
                    </td>
                    <td>
                      <div>
                        <span className="cstack w-24px h-24px rounded-circle bg-primary text-white dark:bg-tertiary dark:text-dark">
                          <i className="icon-narrow unicon-checkmark fw-bold" />
                        </span>
                      </div>
                    </td>
                    <td>
                      <div>
                        <span className="cstack w-24px h-24px rounded-circle bg-primary text-white dark:bg-tertiary dark:text-dark">
                          <i className="icon-narrow unicon-checkmark fw-bold" />
                        </span>
                        <span>(Advanced)</span>
                      </div>
                    </td>
                    <td>
                      <div>
                        <span className="cstack w-24px h-24px rounded-circle bg-primary text-white dark:bg-tertiary dark:text-dark">
                          <i className="icon-narrow unicon-checkmark fw-bold" />
                        </span>
                        <span>(Advanced)</span>
                      </div>
                    </td>
                  </tr>
                  <tr className="table-row border-white dark:border-gray-900">
                    <th className="" scope="row">
                      <div className="hstack gap-1 justify-start">
                        <span className="fs-5 fw-bold text-dark dark:text-white">
                          ChatGPT Shopping
                        </span>
                      </div>
                    </th>
                    <td>
                      <div>
                        <span>Coming Soon</span>
                      </div>
                    </td>
                    <td>
                      <div>
                        <span>Coming Soon</span>
                      </div>
                    </td>
                    <td>
                      <div>
                        <span>Coming Soon</span>
                      </div>
                    </td>
                    <td>
                      <div>
                        <span>Coming Soon</span>
                      </div>
                    </td>
                  </tr>
                  <tr className="table-row border-gray-100 dark:border-gray-600">
                    <th className="" scope="row">
                      <div className="hstack gap-1 justify-start">
                        <span className="fs-5 fw-bold text-dark dark:text-white">
                          Team Collaboration
                        </span>
                      </div>
                    </th>
                    <td>
                      <div>
                        <span className="cstack w-24px h-24px rounded-circle bg-dark dark:bg-white bg-opacity-10">
                          <i className="icon-narrow unicon-not-available fw-bold" />
                        </span>
                      </div>
                    </td>
                    <td>
                      <div>
                        <span className="cstack w-24px h-24px rounded-circle bg-dark dark:bg-white bg-opacity-10">
                          <i className="icon-narrow unicon-not-available fw-bold" />
                        </span>
                      </div>
                    </td>
                    <td>
                      <div>
                        <span className="cstack w-24px h-24px rounded-circle bg-primary text-white dark:bg-tertiary dark:text-dark">
                          <i className="icon-narrow unicon-checkmark fw-bold" />
                        </span>
                      </div>
                    </td>
                    <td>
                      <div>
                        <span className="cstack w-24px h-24px rounded-circle bg-primary text-white dark:bg-tertiary dark:text-dark">
                          <i className="icon-narrow unicon-checkmark fw-bold" />
                        </span>
                      </div>
                    </td>
                  </tr>
                </tbody>
                <tbody className="table-body">
                  <tr className="table-row table-heading bg-primary-25 dark:bg-gray-700 border-white dark:border-gray-900">
                    <th colSpan={5} scope="colgroup">
                      <div className="h6 m-0 text-dark dark:text-white">
                        <span>SERVICE & SUPPORT</span>
                      </div>
                    </th>
                  </tr>
                  <tr className="table-row border-white dark:border-gray-900">
                    <th className="" scope="row">
                      <div className="hstack gap-1 justify-start">
                        <span className="fs-5 fw-bold text-dark dark:text-white">
                          Support Level
                        </span>
                      </div>
                    </th>
                    <td>
                      <div>
                        <span>Community / Open-Source</span>
                      </div>
                    </td>
                    <td>
                      <div>
                        <span>Standard Support (Implied)</span>
                      </div>
                    </td>
                    <td>
                      <div>
                        <span>Standard Support (Implied)</span>
                      </div>
                    </td>
                    <td>
                      <div>
                        <span>Priority Support</span>
                      </div>
                    </td>
                  </tr>
                  <tr className="table-row border-gray-100 dark:border-gray-600">
                    <th className="" scope="row">
                      <div className="hstack gap-1 justify-start">
                        <span className="fs-5 fw-bold text-dark dark:text-white">
                          SLA-backed Reliability
                        </span>
                      </div>
                    </th>
                    <td>
                      <div>
                        <span className="cstack w-24px h-24px rounded-circle bg-dark dark:bg-white bg-opacity-10">
                          <i className="icon-narrow unicon-not-available fw-bold" />
                        </span>
                      </div>
                    </td>
                    <td>
                      <div>
                        <span className="cstack w-24px h-24px rounded-circle bg-dark dark:bg-white bg-opacity-10">
                          <i className="icon-narrow unicon-not-available fw-bold" />
                        </span>
                      </div>
                    </td>
                    <td>
                      <div>
                        <span className="cstack w-24px h-24px rounded-circle bg-dark dark:bg-white bg-opacity-10">
                          <i className="icon-narrow unicon-not-available fw-bold" />
                        </span>
                      </div>
                    </td>
                    <td>
                      <div>
                        <span className="cstack w-24px h-24px rounded-circle bg-primary text-white dark:bg-tertiary dark:text-dark">
                          <i className="icon-narrow unicon-checkmark fw-bold" />
                        </span>
                      </div>
                    </td>
                  </tr>
                  <tr className="table-row border-gray-100 dark:border-gray-600">
                    <th className="" scope="row">
                      <div className="hstack gap-1 justify-start">
                        <span className="fs-5 fw-bold text-dark dark:text-white">
                          Dedicated GEO Strategist
                        </span>
                      </div>
                    </th>
                    <td>
                      <div>
                        <span className="cstack w-24px h-24px rounded-circle bg-dark dark:bg-white bg-opacity-10">
                          <i className="icon-narrow unicon-not-available fw-bold" />
                        </span>
                      </div>
                    </td>
                    <td>
                      <div>
                        <span className="cstack w-24px h-24px rounded-circle bg-dark dark:bg-white bg-opacity-10">
                          <i className="icon-narrow unicon-not-available fw-bold" />
                        </span>
                      </div>
                    </td>
                    <td>
                      <div>
                        <span className="cstack w-24px h-24px rounded-circle bg-dark dark:bg-white bg-opacity-10">
                          <i className="icon-narrow unicon-not-available fw-bold" />
                        </span>
                      </div>
                    </td>
                    <td>
                      <div>
                        <span className="cstack w-24px h-24px rounded-circle bg-primary text-white dark:bg-tertiary dark:text-dark">
                          <i className="icon-narrow unicon-checkmark fw-bold" />
                        </span>
                      </div>
                    </td>
                  </tr>
                  <tr className="table-row border-gray-100 dark:border-gray-600">
                    <th className="" scope="row">
                      <div className="hstack gap-1 justify-start">
                        <span className="fs-5 fw-bold text-dark dark:text-white">
                          Dedicated Success Manager
                        </span>
                      </div>
                    </th>
                    <td>
                      <div>
                        <span className="cstack w-24px h-24px rounded-circle bg-dark dark:bg-white bg-opacity-10">
                          <i className="icon-narrow unicon-not-available fw-bold" />
                        </span>
                      </div>
                    </td>
                    <td>
                      <div>
                        <span className="cstack w-24px h-24px rounded-circle bg-dark dark:bg-white bg-opacity-10">
                          <i className="icon-narrow unicon-not-available fw-bold" />
                        </span>
                      </div>
                    </td>
                    <td>
                      <div>
                        <span className="cstack w-24px h-24px rounded-circle bg-dark dark:bg-white bg-opacity-10">
                          <i className="icon-narrow unicon-not-available fw-bold" />
                        </span>
                      </div>
                    </td>
                    <td>
                      <div>
                        <span className="cstack w-24px h-24px rounded-circle bg-primary text-white dark:bg-tertiary dark:text-dark">
                          <i className="icon-narrow unicon-checkmark fw-bold" />
                        </span>
                      </div>
                    </td>
                  </tr>
                  <tr className="table-row border-white dark:border-gray-900">
                    <th className="" scope="row">
                      <div className="hstack gap-1 justify-start">
                        <span className="fs-5 fw-bold text-dark dark:text-white">
                          Onboarding & Training
                        </span>
                      </div>
                    </th>
                    <td>
                      <div>
                        <span>Self-serve</span>
                      </div>
                    </td>
                    <td>
                      <div>
                        <span>Self-serve</span>
                      </div>
                    </td>
                    <td>
                      <div>
                        <span>Self-serve</span>
                      </div>
                    </td>
                    <td>
                      <div>
                        <span>Custom Sessions</span>
                      </div>
                    </td>
                  </tr>
                  <tr className="table-row border-gray-100 dark:border-gray-600">
                    <th className="" scope="row">
                      <div className="hstack gap-1 justify-start">
                        <span className="fs-5 fw-bold text-dark dark:text-white">
                          Team Collaboration
                        </span>
                      </div>
                    </th>
                    <td>
                      <div>
                        <span className="cstack w-24px h-24px rounded-circle bg-dark dark:bg-white bg-opacity-10">
                          <i className="icon-narrow unicon-not-available fw-bold" />
                        </span>
                      </div>
                    </td>
                    <td>
                      <div>
                        <span className="cstack w-24px h-24px rounded-circle bg-dark dark:bg-white bg-opacity-10">
                          <i className="icon-narrow unicon-not-available fw-bold" />
                        </span>
                      </div>
                    </td>
                    <td>
                      <div>
                        <span className="cstack w-24px h-24px rounded-circle bg-primary text-white dark:bg-tertiary dark:text-dark">
                          <i className="icon-narrow unicon-checkmark fw-bold" />
                        </span>
                      </div>
                    </td>
                    <td>
                      <div>
                        <span className="cstack w-24px h-24px rounded-circle bg-primary text-white dark:bg-tertiary dark:text-dark">
                          <i className="icon-narrow unicon-checkmark fw-bold" />
                        </span>
                      </div>
                    </td>
                  </tr>
                </tbody>
                <tbody className="table-body">
                  <tr className="table-row table-heading bg-primary-25 dark:bg-gray-700 border-white dark:border-gray-900">
                    <th colSpan={5} scope="colgroup">
                      <div className="h6 m-0 text-dark dark:text-white">
                        <span>OPERATIONAL</span>
                      </div>
                    </th>
                  </tr>
                  <tr className="table-row border-white dark:border-gray-900">
                    <th className="" scope="row">
                      <div className="hstack gap-1 justify-start">
                        <span className="fs-5 fw-bold text-dark dark:text-white">
                          Data Privacy
                        </span>
                      </div>
                    </th>
                    <td>
                      <div>
                        <span>Automatic Data Deletion</span>
                      </div>
                    </td>
                    <td>
                      <div>
                        <span>Standard</span>
                      </div>
                    </td>
                    <td>
                      <div>
                        <span>Standard</span>
                      </div>
                    </td>
                    <td>
                      <div>
                        <span>Custom Data Residency/Handling</span>
                      </div>
                    </td>
                  </tr>
                  <tr className="table-row border-gray-100 dark:border-gray-600">
                    <th className="" scope="row">
                      <div className="hstack gap-1 justify-start">
                        <span className="fs-5 fw-bold text-dark dark:text-white">
                          License
                        </span>
                      </div>
                    </th>
                    <td>
                      <div>
                        <span>MIT Open-source</span>
                      </div>
                    </td>
                    <td>
                      <div>
                        <span>Commercial SaaS</span>
                      </div>
                    </td>
                    <td>
                      <div>
                        <span>Commercial SaaS</span>
                      </div>
                    </td>
                    <td>
                      <div>
                        <span>Commercial SaaS</span>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import Link from "next/link";
import React from "react";

export default function PrivacyPolicy() {
  return (
    <div className="section py-4 lg:py-6 xl:py-8 ">
      <div className="container max-w-lg mt-8 lg:mt-10">
        <div className="page-wrap panel vstack gap-4 ">
          <header className="page-header panel vstack justify-center gap-2 lg:gap-4 text-center">
            <div className="panel">
              <h1 className="h3 lg:h1 m-0">Privacy Policy </h1>
              <p className="fs-4 fw-bold lg:fs-3">
                Last Updated: February 9, 2025
              </p>
            </div>
            <hr />
          </header>
          <div className="page-content panel fs-6 md:fs-5">
            <p>
              Welcome to AI Monitor. We are dedicated to protecting your
              personal information and respecting your right to privacy. This
              Privacy Policy explains how we collect, use, share, and safeguard
              your data when you access our website at{" "}
              <a href="https://getaimonitor.com/" className="text-blue">
                <b>getaimonitor.com</b>
              </a>{" "}
              (the “Website”) and any related services, including sales,
              marketing, or events (collectively, the “Services”). If you do not
              agree with any part of this Policy, please discontinue your use of
              our Services immediately. If you have any questions or concerns,
              contact us at{" "}
              <a href="mailto:team@getAIMonitor.com" className="text-blue">
                team@getAIMonitor.com
              </a>
              .
            </p>
            <h2 className="h4 md:h3 mt-3 lg:mt-6 mb-2">
              1. When We Collect Personal Information
            </h2>
            <p>We collect personal information when:</p>
            <ul>
              <li>You register for our Services.</li>
              <li>
                You visit or interact with our Website or other Services,
                including uploading company-specific information.
              </li>
              <li>
                You contact us via inquiries, support requests, or other
                communications.
              </li>
              <li>You interact with our emails or other communications.</li>
            </ul>

            <h2 className="h4 md:h3 mt-3 lg:mt-6 mb-2">
              2. Types of Personal Information We Collect
            </h2>
            <h3 className="h5 md:h4 mt-1 lg:mt-3 mb-1">
              A. Information You Provide Directly
            </h3>
            <ul>
              <li>
                <strong>Account Registration:</strong> Details you provide when
                creating an account, including the option to sign in using
                third-party credentials (e.g., Google).
              </li>
              <li>
                <strong>Support & Inquiries:</strong> Information such as your
                name, email (work or personal), phone number, company name, job
                title, website, social media links, and time zone.
              </li>
              <li>
                <strong>Billing & Purchases:</strong> Credit card and billing
                information when you purchase our Services.
              </li>
              <li>
                <strong>Uploaded Data:</strong> Any company data you submit to
                enhance our Services, such as for search engine results or
                competitive intelligence.
              </li>
            </ul>
            <h3 className="h5 md:h4 mt-1 lg:mt-3 mb-1">
              B. Information Collected Automatically
            </h3>
            <ul>
              <li>
                <strong>Service Interactions:</strong> Data from forms or
                interactive features on our Website. Although we do not
                intentionally collect personal data from users merely viewing
                content, information provided during interactions may be
                captured.
              </li>
              <li>
                <strong>Metadata & Analytics:</strong> Details such as IP
                address, device type, visit date/time, new or returning status,
                products viewed, page response times, URL clickstreams, duration
                on pages, and other usage data.
              </li>
              <li>
                <strong>Cookies & Similar Technologies:</strong> We use cookies,
                beacons, pixel tags, and similar technologies to gather
                additional information automatically. These tools help
                personalize your experience and measure the effectiveness of our
                advertising and marketing efforts. (For more on cookies, please
                see our Cookie Policy.)
              </li>
            </ul>
            <h3 className="h5 md:h4 mt-1 lg:mt-3 mb-1">
              C. Information from Third Parties
            </h3>
            <ul>
              <li>
                <strong>Social Media & External Platforms:</strong> When you
                interact with our social media accounts (e.g., LinkedIn) or
                other platforms, we may receive data such as referral traffic or
                customized interaction metrics.
              </li>
              <li>
                <strong>Third-Party Data Providers:</strong> We may collaborate
                with third parties to gain further insights about business
                professionals interested in our Services.
              </li>
            </ul>
            <p>
              Note: Our Services are intended for business professionals. We do
              not knowingly collect information from minors under the age of 16.
              If you believe we have inadvertently collected data from a minor,
              please contact us at{" "}
              <a href="mailto:team@getAIMonitor.com">team@getAIMonitor.com</a>{" "}
              for prompt deletion.
            </p>

            <h2 className="h4 md:h3 mt-3 lg:mt-6 mb-2">
              3. How We Use Collected Personal Information
            </h2>
            <p>We use your personal information for the following purposes:</p>
            <ul>
              <li>
                <strong>Service Delivery:</strong> To provide and maintain our
                Services, including tailoring your AI search results and
                monitoring brand-specific AI search representation.
              </li>
              <li>
                <strong>Customer Support:</strong> To respond to your issues,
                questions, or feedback.
              </li>
              <li>
                <strong>Service Improvement:</strong> To troubleshoot and
                enhance our Website and Services.
              </li>
              <li>
                <strong>Communication:</strong> To send you updates about new
                features, products, or services via email or SMS.
              </li>
              <li>
                <strong>Compliance:</strong> To adhere to legal obligations and
                our internal policies.
              </li>
              <li>
                <strong>Business & Legal Purposes:</strong> For fraud
                prevention, receivables management, record maintenance, and
                other legal or business needs.
              </li>
              <li>
                <strong>With Your Consent:</strong> For any additional purposes
                you have explicitly agreed to.
              </li>
            </ul>

            <h2 className="h4 md:h3 mt-3 lg:mt-6 mb-2">
              4. How We May Disclose Personal Information
            </h2>
            <p>
              We may share your personal information under the following
              circumstances:
            </p>
            <ul>
              <li>
                <strong>With Your Consent:</strong> We will disclose your data
                when you provide explicit consent.
              </li>
              <li>
                <strong>Affiliates & Service Providers:</strong> We may share
                data with our corporate affiliates, vendors, or service
                providers who:
                <ul>
                  <li>Process payments and manage subscriptions.</li>
                  <li>Assist in communicating with you.</li>
                  <li>Manage and optimize our Website and Services.</li>
                  <li>
                    Analyze website usage and synchronize content with
                    third-party platforms.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Legal & Safety Requirements:</strong> We may disclose
                information to:
                <ul>
                  <li>
                    Protect our legal rights and those of our employees, agents,
                    or affiliates.
                  </li>
                  <li>
                    Ensure the safety and security of our customers and
                    visitors.
                  </li>
                  <li>Detect and prevent fraud.</li>
                  <li>Comply with legal or regulatory requirements.</li>
                </ul>
              </li>
              <li>
                <strong>Business Transitions:</strong> In the event of a merger,
                acquisition, or asset sale, your personal information may be
                shared with the involved parties. These parties will use your
                data in a manner consistent with this Privacy Policy.
              </li>
              <li>
                <strong>Aggregate Data:</strong> We may also release anonymized
                or aggregated data that cannot be used to identify you.
              </li>
            </ul>

            <h2 className="h4 md:h3 mt-3 lg:mt-6 mb-2">
              5. Your Privacy Choices and How to Exercise Them
            </h2>
            <p>You have several rights regarding your personal information:</p>
            <ul>
              <li>
                <strong>Access:</strong> Request a copy of the data we hold
                about you.
              </li>
              <li>
                <strong>Deletion:</strong> Request deletion of your data,
                subject to legal or regulatory obligations.
              </li>
              <li>
                <strong>Correction:</strong> Request updates or corrections to
                inaccurate data.
              </li>
              <li>
                <strong>Opt-Out:</strong> Choose to opt out of specific uses,
                such as:
                <ul>
                  <li>
                    <strong>Email Marketing:</strong> Unsubscribe using the link
                    provided in our marketing emails.
                  </li>
                </ul>
              </li>
            </ul>
            <p>
              To exercise these rights, please contact us at
              <a href="mailto:team@getAIMonitor.com" className="text-blue">
                team@getAIMonitor.com
              </a>
              .
            </p>

            <h2 className="h4 md:h3 mt-3 lg:mt-6 mb-2">
              6. Online Tracking Technologies and How to Opt Out
            </h2>
            <p>
              We use various tracking technologies (cookies, pixels, web
              beacons, etc.) to collect data about your browsing behavior and
              interactions. To opt out of these tracking methods:
            </p>
            <ul>
              <li>
                <strong>Block Cookies:</strong> Adjust your browser settings to
                reject or delete cookies. Learn more at www.allaboutcookies.org.
              </li>
              <li>
                <strong>Advertising Opt-Out Tools:</strong> Visit{" "}
                <a href="http://optout.aboutads.info" className="text-blue">
                  <u> http://optout.aboutads.info </u>
                </a>{" "}
                to limit interest-based advertising.
              </li>
              <li>
                <strong>Vendor-Specific Opt-Out:</strong> Some advertising
                partners (e.g., Google Ads and Analytics) offer their own
                opt-out mechanisms. Please refer to their respective privacy
                policies.
              </li>
            </ul>
            <p>
              Note: Opt-out settings must be configured on each browser or
              device you use.
            </p>

            <h2 className="h4 md:h3 mt-3 lg:mt-6 mb-2">
              7. U.S. State-Specific Notice
            </h2>
            <p>
              We disclose the categories and types of personal information
              collected as detailed above. AI Monitor does not “sell” or “share”
              personal information as defined by applicable U.S. state privacy
              laws.
            </p>

            <h2 className="h4 md:h3 mt-3 lg:mt-6 mb-2">
              8. UK & EEA Specific Notice
            </h2>
            <p>
              For residents of the United Kingdom and the European Economic Area
              (EEA), this section outlines your rights under the General Data
              Protection Regulation (GDPR).
            </p>
            <p>
              <storng>Legal Basis for Processing:</storng>
            </p>
            <div className="panel mt-2 p-2 border rounded-1-5 lg:rounded-2 dark:border-gray-600 dark:bg-black overflowx-auto">
              <table className="uc-table uc-table-divider">
                <thead className="table-head sticky-top z-1 ">
                  <tr className="table-row dark:border-white border-gray-900">
                    <th className="table-header-cell" scope="row">
                      <span className="fw-bold fs-5 lg:fs-4 dark:text-secondary">
                        Processing Activity
                      </span>
                    </th>
                    <th className="table-header-cell" scope="row">
                      <span className="fw-bold fs-5 lg:fs-4 dark:text-secondary">
                        Legal Basis
                      </span>
                    </th>
                  </tr>
                </thead>
                <tbody className="table-body">
                  <tr className="table-row border-gray-900 dark:border-white">
                    <th className="" scope="row">
                      <div className="hstack gap-1 justify-start">
                        <span className="fs-5 fw-bold text-dark dark:text-white">
                          Placement of cookies on our Website
                        </span>
                      </div>
                    </th>
                    <td>
                      <span className="dark:text-white">Consent</span>
                    </td>
                  </tr>
                  <tr className="table-row border-gray-900 dark:border-white">
                    <th className="" scope="row">
                      <div className="hstack gap-1 justify-start">
                        <span className="fs-5 fw-bold text-dark dark:text-white">
                          Website/Services Improvement
                        </span>
                      </div>
                    </th>
                    <td>
                      <span className="dark:text-white">
                        Legitimate Interest
                      </span>
                    </td>
                  </tr>
                  <tr className="table-row border-gray-900 dark:border-white">
                    <th className="" scope="row">
                      <div className="hstack gap-1 justify-start">
                        <span className="fs-5 fw-bold text-dark dark:text-white">
                          Marketing Communications
                        </span>
                      </div>
                    </th>
                    <td>
                      <span className="dark:text-white">
                        Legitimate Interest
                      </span>
                    </td>
                  </tr>
                  <tr className="table-row border-gray-900 dark:border-white">
                    <th className="" scope="row">
                      <div className="hstack gap-1 justify-start">
                        <span className="fs-5 fw-bold text-dark dark:text-white">
                          Billing and Service Delivery
                        </span>
                      </div>
                    </th>
                    <td>
                      <span className="dark:text-white">
                        Necessary for Contract
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              <strong>Controller/Processor Designation:</strong>
              <br />
              Under the GDPR, we act as the “Controller” for data collected via
              our Website (excluding training data) and as a “Processor” for
              customer data used in our Services. A list of our subprocessors is
              available upon request for enterprise customers.
            </p>

            <p>
              <strong>Cross-Border Data Transfers:</strong>
              <br />
              Your data may be transferred to and stored in countries outside
              the EEA/UK, such as the United States or Canada. These
              jurisdictions may have different data protection laws. We ensure
              that adequate safeguards, such as Standard Contractual Clauses,
              are in place to protect your data.
            </p>

            <p>
              <strong>Your Rights:</strong>
              <br />
              If you are an EEA or UK resident, you have the right to:
            </p>
            <ul>
              <li>
                Access, modify, delete, or object to our use of your personal
                data.
              </li>
              <li>
                Lodge a complaint with your local data protection authority. For
                details, visit{" "}
                <a
                  href="https://edpb.europa.eu/about-edpb/about-edpb/members_en"
                  className="text-blue"
                >
                  https://edpb.europa.eu/about-edpb/about-edpb/members_en
                </a>
                .
              </li>
            </ul>
            <p>
              To exercise these rights, please contact us at{" "}
              <a href="mailto:team@getAIMonitor.com" className="text-blue">
                team@getAIMonitor.com
              </a>
              . If your data is part of a client’s data set, please contact the
              relevant company, as AI Monitor does not control client-uploaded
              data.
            </p>

            <h2 className="h4 md:h3 mt-3 lg:mt-6 mb-2">
              9. Security & Retention
            </h2>
            <p>
              We implement reasonable security measures designed to protect your
              personal information from unauthorized access and disclosure.
              However, no online system is entirely secure, and we cannot
              guarantee the absolute security of data transmitted to us. We
              retain your personal information only as long as necessary to
              provide our Services or as required by law. Additionally, backup
              copies may be maintained for a limited period to prevent data
              loss.
            </p>
            <p>
              For further details, please contact us at{" "}
              <a href="mailto:team@getAIMonitor.com" className="text-blue">
                team@getAIMonitor.com
              </a>
              .
            </p>

            <h2 className="h4 md:h3 mt-3 lg:mt-6 mb-2">
              10. Children’s Privacy
            </h2>
            <p>
              Our Services are intended for business professionals, and we do
              not knowingly collect data from children under 16. If you believe
              we have collected data from a minor, please contact us immediately
              at{" "}
              <a href="mailto:team@getAIMonitor.com" className="text-blue">
                team@getAIMonitor.com
              </a>{" "}
              so that we can promptly delete the information.
            </p>

            <h2 className="h4 md:h3 mt-3 lg:mt-6 mb-2">
              11. Links to Our Services
            </h2>
            <p>
              Our Services may include links to third-party websites or
              services. We are not responsible for the privacy practices of
              these external sites. We encourage you to review their respective
              privacy policies before providing any personal information.
            </p>

            <h2 className="h4 md:h3 mt-3 lg:mt-6 mb-2">
              12. Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy periodically to reflect changes
              in our practices or legal requirements. The effective date of the
              latest version is noted at the top of this Policy. We encourage
              you to review this Policy regularly to stay informed about how we
              are protecting your data.
            </p>

            <h2 className="h4 md:h3 mt-3 lg:mt-6 mb-2">13. Contact-Us</h2>
            <p>
              If you have any questions about this Privacy Policy or our privacy
              practices, or if you wish to exercise your rights regarding your
              personal information, please contact us:
            </p>

            <p>
              <strong>Amtolit Inc. DBA AI Monitor,</strong>
            </p>
            <p className="">
              221 East Indianola Avenue,
              <br />
              Phoenix, Arizona
              <br />
              85012
            </p>
            <a href="mailto:team@getaimonitor.com" className="text-blue">
              team@getaimonitor.com
            </a>
            <br />
            <a href="tel:+1-623-223-7423" className="text-blue">
              +1-623-223-7423
            </a>
          </div>
          <hr />
          <div className="page-footer panel mt-0">
            <span className="fs-5 fw-bold">Note:</span> For greater clarity,
            also read{" "}
            <Link
              href={"/terms-conditions"}
              target="_blank"
              className="fw-bold"
            >
              <u>Terms and Conditions</u>
            </Link>{" "}
            and{" "}
            <Link href={"/refund-policy"} target="_blank" className="fw-bold">
              <u>Refund Policy</u>
            </Link>{" "}
            . We reserve the right to amend this policy with prior notice.
          </div>
        </div>
      </div>
    </div>
  );
}

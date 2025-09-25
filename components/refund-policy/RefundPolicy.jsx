import Link from "next/link";
import React from "react";

export default function RefundPolicy() {
  return (
    <div className="section py-4 lg:py-6 xl:py-8 ">
      <div className="container max-w-lg mt-8 lg:mt-10">
        <div className="page-wrap panel vstack gap-4 ">
          <header className="page-header panel vstack justify-center gap-2 lg:gap-4 text-center">
            <div className="panel">
              <h1 className="h3 lg:h1 m-0">
                15-Day Refund Policy for AI Monitor
              </h1>
              <p className="fs-4 fw-bold lg:fs-3">
                Last Updated: April 29, 2025
              </p>
            </div>
            <hr />
          </header>
          <div className="page-content panel fs-6 md:fs-5">
            <h2 className="h4 md:h3 mt-3 lg:mt-6 mb-2">
              1. Refund Eligibility
            </h2>
            <p>
              We strive to ensure customer satisfaction with our SEO & GEO tools
              and services. If you are dissatisfied, you may request a full
              refund within 15 days of your initial subscription purchase,
              provided:
            </p>
            <ul>
              <li>
                The refund request is made within 15 calendar days of the
                purchase date.
              </li>
              <li>
                You have not exceeded 5 hours of active usage of the Services
                during the 15-day period.
              </li>
              <li>
                The refund applies only to your first subscription term (not
                applicable to renewals or upgrades).
              </li>
            </ul>

            <h2 className="h4 md:h3 mt-3 lg:mt-6 mb-2">
              2. Non-Refundable Services
            </h2>
            <p>The following are excluded from refund eligibility:</p>
            <ul>
              <li>
                Services or features marked as “non-refundable” during purchase.
              </li>
              <li>
                Third-party costs (e.g., API fees, external tool integrations).
              </li>
              <li>
                Custom configurations, one-time setup fees, or consulting
                services.
              </li>
            </ul>

            <h2 className="h4 md:h3 mt-3 lg:mt-6 mb-2">
              3. How to Request a Refund
            </h2>
            <p>We use your personal information for the following purposes:</p>
            <ul>
              <li>
                Submit a refund request via email to{" "}
                <a href="mailto:team@getaimonitor.com" className="text-blue">
                  team@getaimonitor.com
                </a>{" "}
                or through your account dashboard.
              </li>
              <li>
                Include your account details, transaction ID, and reason for the
                request.
              </li>
              <li>
                We will process refunds within 7 business days of approval.
              </li>
            </ul>

            <h2 className="h4 md:h3 mt-3 lg:mt-6 mb-2">4. Refund Method</h2>
            <ul>
              <li>Refunds will be issued to the original payment method.</li>
              <li>
                Processing times depend on your payment provider (e.g., credit
                card refunds may take 5–10 business days).
              </li>
            </ul>

            <h2 className="h4 md:h3 mt-3 lg:mt-6 mb-2">5. Exceptions</h2>
            <p>Refunds may be denied if:</p>
            <ul>
              <li>
                We detect abuse, fraud, or violation of our Terms (e.g., spam,
                unauthorized scraping).
              </li>
              <li>
                You attempt to reverse charges via your bank/processor without
                prior communication.
              </li>
            </ul>

            <h2 className="h4 md:h3 mt-3 lg:mt-6 mb-2">
              6. Post-Refund Access
            </h2>
            <ul>
              <li>
                Upon refund approval, your access to the Services will terminate
                immediately.
              </li>
            </ul>

            <h2 className="h4 md:h3 mt-3 lg:mt-6 mb-2">Contact Us:</h2>
            <p>
              For refund inquiries, email us at{" "}
              <a href="mailto:team@getaimonitor.com" className="text-blue">
                team@getaimonitor.com
              </a>
            </p>
          </div>
          <hr />
          <div className="page-footer panel mt-0">
            <span className="fs-5 fw-bold">Note:</span> This policy supplements
            our{" "}
            <Link
              href={"/terms-conditions"}
              target="_blank"
              className="fw-bold"
            >
              <u>Terms and Conditions</u>
            </Link>{" "}
            and{" "}
            <Link href={"/privacy-policy"} target="_blank" className="fw-bold">
              <u>Privacy Policy</u>
            </Link>{" "}
            . We reserve the right to amend this policy with prior notice.
          </div>
        </div>
      </div>
    </div>
  );
}

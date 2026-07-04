import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaArrowLeft,
  FaCalendarAlt,
  FaCreditCard,
  FaClock,
  FaHome,
  FaUndoAlt,
  FaExclamationCircle,
  FaCheckCircle,
  FaEnvelope,
  FaPhoneAlt
} from "react-icons/fa";

import NavBar from "./NavBar";


const ReturnPolicy = () => {
  const navigate = useNavigate();

  return (
    <>
      <NavBar />

      <main className="return-policy-page">
        {/* Breadcrumb */}
        <div className="policy-container">
          <button
            className="back-button"
            onClick={() => navigate(-1)}
          >
            <FaArrowLeft />
            Back
          </button>

          {/* Hero Section */}
          <section className="policy-hero">
            <div className="policy-hero-content">
              <span className="policy-label">
                <FaUndoAlt />
                Return Policy
              </span>

              <h1>Our Return & Refund Policy</h1>

              <p>
                We believe in keeping things clear and transparent. Learn how
                cancellations, refunds, and payment returns are handled at
                Quirex.
              </p>

              <div className="last-updated">
                <FaCalendarAlt />
                Last updated: July 2026
              </div>
            </div>

            <div className="policy-hero-icon">
              <div className="icon-circle">
                <FaUndoAlt />
              </div>
            </div>
          </section>

          {/* Quick Information Cards */}
          <section className="policy-highlights">
            <div className="highlight-card">
              <div className="highlight-icon">
                <FaClock />
              </div>

              <div>
                <h3>7-Day Request Window</h3>
                <p>Submit eligible refund requests within 7 days.</p>
              </div>
            </div>

            <div className="highlight-card">
              <div className="highlight-icon">
                <FaCreditCard />
              </div>

              <div>
                <h3>Original Payment Method</h3>
                <p>Approved refunds are sent to your original payment source.</p>
              </div>
            </div>

            <div className="highlight-card">
              <div className="highlight-icon">
                <FaCheckCircle />
              </div>

              <div>
                <h3>Transparent Process</h3>
                <p>Every refund request is reviewed and communicated clearly.</p>
              </div>
            </div>
          </section>

          {/* Main Policy Content */}
          <section className="policy-layout">
            <div className="policy-content">
              <div className="policy-section">
                <div className="section-number">01</div>

                <div className="section-content">
                  <h2>Overview</h2>

                  <p>
                    At Quirex, we are committed to providing a transparent and
                    reliable property discovery experience. Since Quirex
                    provides real-estate listing and property-related services,
                    traditional product returns do not apply.
                  </p>

                  <p>
                    However, certain payments, booking amounts, or service fees
                    may be eligible for cancellation or refund depending on the
                    circumstances described in this policy.
                  </p>
                </div>
              </div>

              <div className="policy-section">
                <div className="section-number">02</div>

                <div className="section-content">
                  <h2>Eligible Refunds</h2>

                  <p>
                    You may be eligible for a refund under the following
                    circumstances:
                  </p>

                  <ul className="policy-list eligible-list">
                    <li>
                      <FaCheckCircle />
                      <span>
                        A duplicate payment was made for the same service.
                      </span>
                    </li>

                    <li>
                      <FaCheckCircle />
                      <span>
                        Payment was deducted but the requested service was not
                        provided.
                      </span>
                    </li>

                    <li>
                      <FaCheckCircle />
                      <span>
                        A property booking was cancelled within the permitted
                        cancellation period.
                      </span>
                    </li>

                    <li>
                      <FaCheckCircle />
                      <span>
                        A transaction failed but the payment was still deducted
                        from your account.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="policy-section">
                <div className="section-number">03</div>

                <div className="section-content">
                  <h2>Non-Refundable Cases</h2>

                  <p>
                    Refunds may not be provided in the following situations:
                  </p>

                  <ul className="policy-list warning-list">
                    <li>
                      <FaExclamationCircle />
                      <span>
                        The property service has already been fully delivered.
                      </span>
                    </li>

                    <li>
                      <FaExclamationCircle />
                      <span>
                        The cancellation request is submitted after the
                        permitted cancellation period.
                      </span>
                    </li>

                    <li>
                      <FaExclamationCircle />
                      <span>
                        Non-refundable booking or service charges were clearly
                        disclosed before payment.
                      </span>
                    </li>

                    <li>
                      <FaExclamationCircle />
                      <span>
                        Incorrect or incomplete information was provided by the
                        user during the transaction.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="policy-section">
                <div className="section-number">04</div>

                <div className="section-content">
                  <h2>How to Request a Refund</h2>

                  <p>
                    To request a refund, contact our support team with the
                    following details:
                  </p>

                  <div className="refund-steps">
                    <div className="refund-step">
                      <span>1</span>
                      <p>Your full name and registered email address</p>
                    </div>

                    <div className="refund-step">
                      <span>2</span>
                      <p>Property or transaction reference number</p>
                    </div>

                    <div className="refund-step">
                      <span>3</span>
                      <p>Payment receipt or transaction screenshot</p>
                    </div>

                    <div className="refund-step">
                      <span>4</span>
                      <p>A brief explanation of the refund request</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="policy-section">
                <div className="section-number">05</div>

                <div className="section-content">
                  <h2>Refund Processing Time</h2>

                  <p>
                    Once your refund request is received, our team will review
                    it and communicate the decision. Approved refunds are
                    generally processed within <strong>7–10 business days</strong>.
                  </p>

                  <div className="info-box">
                    <FaClock />

                    <p>
                      The final time required for the amount to appear in your
                      account may vary depending on your bank or payment
                      provider.
                    </p>
                  </div>
                </div>
              </div>

              <div className="policy-section">
                <div className="section-number">06</div>

                <div className="section-content">
                  <h2>Property Transactions</h2>

                  <p>
                    Quirex may connect buyers, tenants, owners, agents, and other
                    property service providers. Refund terms for direct property
                    transactions may depend on the agreement between the parties
                    involved.
                  </p>

                  <p>
                    Users should carefully review all booking terms, agreements,
                    and payment conditions before completing a property
                    transaction.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Sidebar */}
            <aside className="policy-sidebar">
              <div className="help-card">
                <div className="help-icon">
                  <FaHome />
                </div>

                <h3>Need Help?</h3>

                <p>
                  Have questions about a payment, cancellation, or refund? Our
                  team is here to help.
                </p>

                <div className="contact-item">
                  <FaEnvelope />

                  <div>
                    <span>Email us</span>
                    <strong>support@quirex.com</strong>
                  </div>
                </div>

                <div className="contact-item">
                  <FaPhoneAlt />

                  <div>
                    <span>Call us</span>
                    <strong>+91 98765 43210</strong>
                  </div>
                </div>

                <button
                  className="contact-support-btn"
                  onClick={() => navigate("/contact")}
                >
                  Contact Support
                </button>
              </div>
            </aside>
          </section>
        </div>
      </main>
    </>
  );
};

export default ReturnPolicy;
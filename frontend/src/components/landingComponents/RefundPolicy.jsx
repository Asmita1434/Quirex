import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaArrowLeft,
  FaCalendarAlt,
  FaCheckCircle,
  FaClock,
  FaCreditCard,
  FaEnvelope,
  FaExclamationTriangle,
  FaMoneyBillWave,
  FaPhoneAlt,
  FaQuestionCircle,
  FaReceipt,
  FaShieldAlt,
  FaTimesCircle
} from "react-icons/fa";

import NavBar from "./NavBar";


const RefundPolicy = () => {
  const navigate = useNavigate();

  const refundSteps = [
    {
      number: "01",
      title: "Submit Request",
      description:
        "Contact our support team and provide your transaction details."
    },
    {
      number: "02",
      title: "Request Review",
      description:
        "Our team reviews your payment and verifies refund eligibility."
    },
    {
      number: "03",
      title: "Refund Approval",
      description:
        "You will receive confirmation once your refund is approved."
    },
    {
      number: "04",
      title: "Amount Credited",
      description:
        "The amount is returned to your original payment method."
    }
  ];

  return (
    <>
      <NavBar />

      <main className="refund-page">
        <div className="refund-container">

          {/* Back Button */}
          <button
            className="refund-back-btn"
            onClick={() => navigate(-1)}
          >
            <FaArrowLeft />
            Back
          </button>

          {/* Hero Section */}
          <section className="refund-hero">
            <div className="refund-hero-content">

              <span className="refund-tag">
                <FaMoneyBillWave />
                Refund Policy
              </span>

              <h1>
                Simple, Fair & <span>Transparent</span> Refunds
              </h1>

              <p>
                At Quirex, we value transparency in every transaction.
                This policy explains when a refund may be requested,
                how the process works, and when you can expect to
                receive your money.
              </p>

              <div className="refund-update">
                <FaCalendarAlt />
                Last updated: July 2026
              </div>
            </div>

            <div className="refund-hero-visual">
              <div className="refund-main-circle">
                <FaMoneyBillWave />
              </div>

              <div className="floating-badge floating-badge-one">
                <FaCheckCircle />
                Secure Refund
              </div>

              <div className="floating-badge floating-badge-two">
                <FaClock />
                7–10 Days
              </div>
            </div>
          </section>

          {/* Quick Highlights */}
          <section className="refund-highlights">

            <div className="refund-highlight-card">
              <div className="highlight-icon">
                <FaClock />
              </div>

              <div>
                <h3>7–10 Business Days</h3>
                <p>Standard refund processing time</p>
              </div>
            </div>

            <div className="refund-highlight-card">
              <div className="highlight-icon">
                <FaCreditCard />
              </div>

              <div>
                <h3>Original Payment Method</h3>
                <p>Refunds return to the original source</p>
              </div>
            </div>

            <div className="refund-highlight-card">
              <div className="highlight-icon">
                <FaShieldAlt />
              </div>

              <div>
                <h3>Secure & Transparent</h3>
                <p>Every request is carefully reviewed</p>
              </div>
            </div>

          </section>

          {/* Introduction */}
          <section className="refund-intro">
            <span>About This Policy</span>

            <h2>Understanding Our Refund Process</h2>

            <p>
              Quirex is a real-estate property discovery platform. Because
              we do not sell physical products, traditional product returns
              do not apply. However, payments made for eligible services,
              bookings, or transactions may qualify for a refund under the
              conditions explained below.
            </p>
          </section>

          {/* Main Layout */}
          <section className="refund-main-layout">

            <div className="refund-policy-content">

              {/* Section 1 */}
              <article className="refund-section">
                <div className="refund-section-number">01</div>

                <div className="refund-section-body">
                  <h2>When Are You Eligible for a Refund?</h2>

                  <p>
                    You may request a refund when one or more of the
                    following situations apply:
                  </p>

                  <div className="refund-condition-list">

                    <div className="refund-condition eligible">
                      <FaCheckCircle />

                      <div>
                        <h4>Duplicate Payment</h4>
                        <p>
                          The same payment was accidentally processed
                          more than once.
                        </p>
                      </div>
                    </div>

                    <div className="refund-condition eligible">
                      <FaCheckCircle />

                      <div>
                        <h4>Failed Transaction</h4>
                        <p>
                          Your payment was deducted, but the transaction
                          was not completed successfully.
                        </p>
                      </div>
                    </div>

                    <div className="refund-condition eligible">
                      <FaCheckCircle />

                      <div>
                        <h4>Service Not Provided</h4>
                        <p>
                          Payment was completed, but the agreed service
                          was not delivered.
                        </p>
                      </div>
                    </div>

                    <div className="refund-condition eligible">
                      <FaCheckCircle />

                      <div>
                        <h4>Eligible Cancellation</h4>
                        <p>
                          A booking or service was cancelled within the
                          applicable cancellation period.
                        </p>
                      </div>
                    </div>

                  </div>
                </div>
              </article>

              {/* Section 2 */}
              <article className="refund-section">
                <div className="refund-section-number">02</div>

                <div className="refund-section-body">
                  <h2>Non-Refundable Situations</h2>

                  <p>
                    A refund may not be approved under the following
                    circumstances:
                  </p>

                  <div className="non-refundable-box">

                    <div className="non-refundable-item">
                      <FaTimesCircle />
                      <span>
                        The requested service has already been fully
                        completed or delivered.
                      </span>
                    </div>

                    <div className="non-refundable-item">
                      <FaTimesCircle />
                      <span>
                        The refund request was submitted after the
                        applicable refund period.
                      </span>
                    </div>

                    <div className="non-refundable-item">
                      <FaTimesCircle />
                      <span>
                        The payment was clearly identified as
                        non-refundable before the transaction.
                      </span>
                    </div>

                    <div className="non-refundable-item">
                      <FaTimesCircle />
                      <span>
                        The transaction involved a direct agreement
                        between the buyer and property owner.
                      </span>
                    </div>

                  </div>
                </div>
              </article>

              {/* Section 3 */}
              <article className="refund-section">
                <div className="refund-section-number">03</div>

                <div className="refund-section-body">
                  <h2>How to Request a Refund</h2>

                  <p>
                    Send your refund request to our support team with
                    the following information:
                  </p>

                  <div className="refund-requirements">

                    <div className="requirement-card">
                      <span>1</span>

                      <div>
                        <h4>Account Details</h4>
                        <p>
                          Your full name and registered email address.
                        </p>
                      </div>
                    </div>

                    <div className="requirement-card">
                      <span>2</span>

                      <div>
                        <h4>Transaction ID</h4>
                        <p>
                          Provide the payment or transaction reference.
                        </p>
                      </div>
                    </div>

                    <div className="requirement-card">
                      <span>3</span>

                      <div>
                        <h4>Payment Proof</h4>
                        <p>
                          Attach a receipt or payment screenshot.
                        </p>
                      </div>
                    </div>

                    <div className="requirement-card">
                      <span>4</span>

                      <div>
                        <h4>Reason for Refund</h4>
                        <p>
                          Briefly explain why you are requesting a refund.
                        </p>
                      </div>
                    </div>

                  </div>
                </div>
              </article>

              {/* Section 4 */}
              <article className="refund-section">
                <div className="refund-section-number">04</div>

                <div className="refund-section-body">
                  <h2>Refund Processing Timeline</h2>

                  <p>
                    Once we receive all required information, our team
                    will review your request and keep you informed about
                    its status.
                  </p>

                  <div className="timeline-box">

                    {refundSteps.map((step) => (
                      <div
                        className="timeline-item"
                        key={step.number}
                      >
                        <div className="timeline-number">
                          {step.number}
                        </div>

                        <div>
                          <h4>{step.title}</h4>
                          <p>{step.description}</p>
                        </div>
                      </div>
                    ))}

                  </div>

                  <div className="refund-notice">
                    <FaClock />

                    <p>
                      Approved refunds are generally processed within
                      <strong> 7–10 business days</strong>. Your bank or
                      payment provider may require additional time to
                      reflect the amount in your account.
                    </p>
                  </div>
                </div>
              </article>

              {/* Section 5 */}
              <article className="refund-section">
                <div className="refund-section-number">05</div>

                <div className="refund-section-body">
                  <h2>Refund Method</h2>

                  <p>
                    All approved refunds will normally be returned to
                    the original payment method used during the
                    transaction.
                  </p>

                  <div className="payment-method-box">
                    <FaCreditCard />

                    <div>
                      <h4>Original Payment Source</h4>

                      <p>
                        Depending on your payment method, the amount
                        may be returned to your bank account, card,
                        UPI account, or supported digital payment method.
                      </p>
                    </div>
                  </div>
                </div>
              </article>

              {/* Section 6 */}
              <article className="refund-section">
                <div className="refund-section-number">06</div>

                <div className="refund-section-body">
                  <h2>Property Transactions</h2>

                  <p>
                    Quirex may connect buyers, tenants, owners, agents,
                    and property service providers. Payments made
                    directly between users and third parties may be
                    governed by separate agreements.
                  </p>

                  <div className="warning-note">
                    <FaExclamationTriangle />

                    <p>
                      Always review booking terms, cancellation conditions,
                      and payment agreements before making a property-related
                      payment.
                    </p>
                  </div>
                </div>
              </article>

            </div>

            {/* Sidebar */}
            <aside className="refund-sidebar">

              <div className="refund-help-card">

                <div className="help-card-icon">
                  <FaQuestionCircle />
                </div>

                <span className="help-small-title">
                  REFUND SUPPORT
                </span>

                <h3>Need Help With a Refund?</h3>

                <p>
                  If you have questions about a payment or refund request,
                  contact the Quirex support team.
                </p>

                <div className="refund-contact">

                  <div className="contact-icon">
                    <FaEnvelope />
                  </div>

                  <div>
                    <span>Email Support</span>
                    <strong>support@quirex.com</strong>
                  </div>

                </div>

                <div className="refund-contact">

                  <div className="contact-icon">
                    <FaPhoneAlt />
                  </div>

                  <div>
                    <span>Call Support</span>
                    <strong>+91 98765 43210</strong>
                  </div>

                </div>

                <button
                  onClick={() => navigate("/contact-us")}
                  className="refund-contact-btn"
                >
                  Contact Support
                </button>

              </div>

              <div className="refund-tip-card">
                <FaReceipt />

                <div>
                  <h4>Keep Your Receipt</h4>

                  <p>
                    Save your transaction receipt until your refund
                    request is fully resolved.
                  </p>
                </div>
              </div>

            </aside>

          </section>

        </div>
      </main>
    </>
  );
};

export default RefundPolicy;
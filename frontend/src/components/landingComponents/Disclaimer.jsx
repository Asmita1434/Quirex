import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaArrowLeft,
  FaBalanceScale,
  FaBuilding,
  FaCalendarAlt,
  FaCheckCircle,
  FaEnvelope,
  FaExclamationTriangle,
  FaExternalLinkAlt,
  FaFileContract,
  FaHome,
  FaInfoCircle,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaQuestionCircle,
  FaSearch,
  FaShieldAlt,
  FaUserCheck,
  FaUsers
} from "react-icons/fa";

import NavBar from "./NavBar";


const Disclaimer = () => {
  const navigate = useNavigate();

  const highlights = [
    {
      icon: <FaInfoCircle />,
      title: "Information Purpose",
      description: "Property information is provided for general guidance."
    },
    {
      icon: <FaUserCheck />,
      title: "Verify Independently",
      description: "Users should verify details before making decisions."
    },
    {
      icon: <FaShieldAlt />,
      title: "Transparent Platform",
      description: "We clearly explain the scope of our responsibility."
    }
  ];

  const verificationItems = [
    {
      icon: <FaHome />,
      title: "Property Ownership",
      description:
        "Verify ownership records and the authority of the person offering the property."
    },
    {
      icon: <FaFileContract />,
      title: "Legal Documents",
      description:
        "Review title deeds, approvals, agreements, and other relevant documents."
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Property Details",
      description:
        "Confirm the location, dimensions, area, condition, and physical features."
    },
    {
      icon: <FaBalanceScale />,
      title: "Legal Compliance",
      description:
        "Check applicable permissions, regulations, taxes, and legal requirements."
    }
  ];

  return (
    <>
      <NavBar />

      <main className="disclaimer-page">
        <div className="disclaimer-container">

          {/* Back Button */}
          <button
            className="disclaimer-back-btn"
            onClick={() => navigate(-1)}
          >
            <FaArrowLeft />
            Back
          </button>

          {/* Hero Section */}
          <section className="disclaimer-hero">

            <div className="disclaimer-hero-content">
              <span className="disclaimer-tag">
                <FaExclamationTriangle />
                Disclaimer
              </span>

              <h1>
                Important Information
                <span> Before You Proceed</span>
              </h1>

              <p>
                Quirex helps users discover properties and connect with
                property participants. Please read this disclaimer carefully
                to understand the scope and limitations of the information
                and services available on our platform.
              </p>

              <div className="disclaimer-updated">
                <FaCalendarAlt />
                Last updated: July 2026
              </div>
            </div>

            <div className="disclaimer-hero-visual">
              <div className="disclaimer-main-circle">
                <FaExclamationTriangle />
              </div>

              <div className="disclaimer-floating-card card-top">
                <FaSearch />
                Verify Details
              </div>

              <div className="disclaimer-floating-card card-bottom">
                <FaCheckCircle />
                Make Informed Decisions
              </div>
            </div>

          </section>

          {/* Highlights */}
          <section className="disclaimer-highlights">
            {highlights.map((item, index) => (
              <div className="disclaimer-highlight-card" key={index}>
                <div className="disclaimer-highlight-icon">
                  {item.icon}
                </div>

                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </section>

          {/* Introduction */}
          <section className="disclaimer-intro">
            <span>PLEASE READ CAREFULLY</span>

            <h2>Understanding Quirex's Role</h2>

            <p>
              Quirex is a property discovery platform designed to help users
              explore listings and connect with property owners, agents, and
              other participants. We encourage every user to independently
              verify important information before entering into a property
              transaction.
            </p>
          </section>

          {/* Main Layout */}
          <section className="disclaimer-main-layout">

            <div className="disclaimer-content">

              {/* Section 01 */}
              <article className="disclaimer-section">
                <div className="disclaimer-section-number">01</div>

                <div className="disclaimer-section-body">
                  <h2>General Information Disclaimer</h2>

                  <p>
                    The information available on Quirex is provided for
                    general informational and property discovery purposes.
                    While we aim to provide useful and accurate information,
                    we do not guarantee that every detail displayed on the
                    platform is complete, current, or error-free.
                  </p>

                  <div className="disclaimer-info-box">
                    <FaInfoCircle />

                    <div>
                      <h3>Information May Change</h3>
                      <p>
                        Property prices, availability, specifications,
                        ownership details, and other listing information may
                        change without prior notice.
                      </p>
                    </div>
                  </div>

                  <p>
                    Users should not rely solely on information displayed on
                    Quirex when making financial, legal, investment, or
                    property-related decisions.
                  </p>
                </div>
              </article>

              {/* Section 02 */}
              <article className="disclaimer-section">
                <div className="disclaimer-section-number">02</div>

                <div className="disclaimer-section-body">
                  <h2>Property Listing Disclaimer</h2>

                  <p>
                    Property listings may contain information provided by
                    owners, agents, brokers, or other third parties. Quirex
                    may not independently verify every detail before a
                    listing appears on the platform.
                  </p>

                  <div className="listing-warning-box">
                    <div className="warning-box-icon">
                      <FaBuilding />
                    </div>

                    <div>
                      <h3>Listing Information May Include</h3>

                      <div className="listing-tags">
                        <span>Property Price</span>
                        <span>Location</span>
                        <span>Property Area</span>
                        <span>Images</span>
                        <span>Amenities</span>
                        <span>Availability</span>
                      </div>
                    </div>
                  </div>

                  <div className="disclaimer-notice">
                    <FaExclamationTriangle />

                    <p>
                      Property images may be illustrative, edited, outdated,
                      or different from the property's current physical
                      condition. Users should inspect the property personally
                      whenever possible.
                    </p>
                  </div>
                </div>
              </article>

              {/* Section 03 */}
              <article className="disclaimer-section">
                <div className="disclaimer-section-number">03</div>

                <div className="disclaimer-section-body">
                  <h2>User Responsibility & Verification</h2>

                  <p>
                    Before making a booking, payment, investment, rental
                    agreement, or purchase decision, users should independently
                    verify all important information.
                  </p>

                  <div className="verification-grid">
                    {verificationItems.map((item, index) => (
                      <div className="verification-card" key={index}>
                        <div className="verification-icon">
                          {item.icon}
                        </div>

                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                      </div>
                    ))}
                  </div>

                  <div className="verification-reminder">
                    <FaSearch />

                    <p>
                      We recommend consulting qualified legal, financial,
                      property, or technical professionals when professional
                      advice is required.
                    </p>
                  </div>
                </div>
              </article>

              {/* Section 04 */}
              <article className="disclaimer-section">
                <div className="disclaimer-section-number">04</div>

                <div className="disclaimer-section-body">
                  <h2>No Professional Advice</h2>

                  <p>
                    Content available on Quirex does not constitute legal,
                    financial, tax, investment, valuation, architectural,
                    engineering, or other professional advice.
                  </p>

                  <div className="advice-grid">
                    <div className="advice-card">
                      <span>01</span>
                      <h3>Legal Advice</h3>
                      <p>
                        Consult a qualified legal professional for contracts,
                        ownership, and legal documentation.
                      </p>
                    </div>

                    <div className="advice-card">
                      <span>02</span>
                      <h3>Financial Advice</h3>
                      <p>
                        Consult a qualified financial professional before
                        making major financial decisions.
                      </p>
                    </div>

                    <div className="advice-card">
                      <span>03</span>
                      <h3>Property Inspection</h3>
                      <p>
                        Use qualified professionals to inspect the physical
                        and technical condition of a property.
                      </p>
                    </div>

                    <div className="advice-card">
                      <span>04</span>
                      <h3>Investment Decisions</h3>
                      <p>
                        Independently assess risks and returns before making
                        any property investment.
                      </p>
                    </div>
                  </div>
                </div>
              </article>

              {/* Section 05 */}
              <article className="disclaimer-section">
                <div className="disclaimer-section-number">05</div>

                <div className="disclaimer-section-body">
                  <h2>Third-Party Information & Links</h2>

                  <p>
                    Quirex may display information, services, advertisements,
                    or links provided by third parties. These external
                    platforms operate independently from Quirex.
                  </p>

                  <div className="third-party-box">
                    <FaExternalLinkAlt />

                    <div>
                      <h3>External Services</h3>

                      <p>
                        We do not control and are not responsible for the
                        content, availability, security, accuracy, or privacy
                        practices of third-party websites and services.
                      </p>
                    </div>
                  </div>

                  <p>
                    The presence of a third-party link does not automatically
                    mean that Quirex endorses or guarantees that third party,
                    its services, or its information.
                  </p>
                </div>
              </article>

              {/* Section 06 */}
              <article className="disclaimer-section">
                <div className="disclaimer-section-number">06</div>

                <div className="disclaimer-section-body">
                  <h2>Transactions Between Users</h2>

                  <p>
                    Quirex may help users discover properties and communicate
                    with owners, agents, brokers, buyers, tenants, or other
                    property participants.
                  </p>

                  <div className="transaction-box">
                    <div className="transaction-icon">
                      <FaUsers />
                    </div>

                    <div>
                      <h3>Independent Property Transactions</h3>

                      <p>
                        Any negotiation, agreement, payment, booking, rental,
                        purchase, or other transaction between users and third
                        parties may be independent of Quirex.
                      </p>
                    </div>
                  </div>

                  <div className="disclaimer-notice">
                    <FaExclamationTriangle />

                    <p>
                      Never make a payment solely based on a listing or message.
                      Verify the identity of the other party and all transaction
                      details before transferring money.
                    </p>
                  </div>
                </div>
              </article>

              {/* Section 07 */}
              <article className="disclaimer-section">
                <div className="disclaimer-section-number">07</div>

                <div className="disclaimer-section-body">
                  <h2>Limitation of Liability</h2>

                  <p>
                    To the extent permitted by applicable law, Quirex will not
                    be responsible for losses or damages arising solely from
                    reliance on inaccurate listing information, independent
                    third-party conduct, or transactions completed outside the
                    scope of services directly provided by Quirex.
                  </p>

                  <div className="liability-list">
                    <div>
                      <FaCheckCircle />
                      Inaccurate or outdated property information
                    </div>

                    <div>
                      <FaCheckCircle />
                      Actions or representations of third parties
                    </div>

                    <div>
                      <FaCheckCircle />
                      Independent property transaction disputes
                    </div>

                    <div>
                      <FaCheckCircle />
                      External websites or third-party services
                    </div>

                    <div>
                      <FaCheckCircle />
                      Decisions made solely from website information
                    </div>
                  </div>
                </div>
              </article>

              {/* Section 08 */}
              <article className="disclaimer-section">
                <div className="disclaimer-section-number">08</div>

                <div className="disclaimer-section-body">
                  <h2>No Guarantee of Availability</h2>

                  <p>
                    We aim to keep Quirex accessible and functional, but we do
                    not guarantee uninterrupted or error-free availability.
                    Website features may occasionally be unavailable because
                    of maintenance, technical problems, updates, or events
                    beyond our reasonable control.
                  </p>

                  <div className="simple-info-note">
                    <FaInfoCircle />

                    <p>
                      We may modify, suspend, update, or discontinue website
                      features when necessary to maintain or improve the
                      platform.
                    </p>
                  </div>
                </div>
              </article>

              {/* Section 09 */}
              <article className="disclaimer-section">
                <div className="disclaimer-section-number">09</div>

                <div className="disclaimer-section-body">
                  <h2>Changes to This Disclaimer</h2>

                  <p>
                    We may update this Disclaimer when Quirex services,
                    platform features, or applicable requirements change.
                    Updated terms will be published on this page.
                  </p>

                  <div className="update-card">
                    <FaCalendarAlt />

                    <div>
                      <h3>Review This Page Periodically</h3>
                      <p>
                        Continued use of Quirex after an update means the
                        revised Disclaimer will apply from its effective date.
                      </p>
                    </div>
                  </div>
                </div>
              </article>

            </div>

            {/* Sidebar */}
            <aside className="disclaimer-sidebar">

              <div className="disclaimer-help-card">
                <div className="disclaimer-help-icon">
                  <FaQuestionCircle />
                </div>

                <span className="disclaimer-small-title">
                  NEED CLARIFICATION?
                </span>

                <h3>Have a Question?</h3>

                <p>
                  Contact the Quirex team if you have questions about this
                  Disclaimer or information displayed on our platform.
                </p>

                <div className="disclaimer-contact-item">
                  <div className="disclaimer-contact-icon">
                    <FaEnvelope />
                  </div>

                  <div>
                    <span>Email Us</span>
                    <strong>support@quirex.com</strong>
                  </div>
                </div>

                <div className="disclaimer-contact-item">
                  <div className="disclaimer-contact-icon">
                    <FaPhoneAlt />
                  </div>

                  <div>
                    <span>Call Us</span>
                    <strong>+91 98765 43210</strong>
                  </div>
                </div>

                <button
                  className="disclaimer-contact-btn"
                  onClick={() => navigate("/contact")}
                >
                  Contact Us
                </button>
              </div>

              <div className="disclaimer-tip-card">
                <FaSearch />

                <div>
                  <h4>Always Verify First</h4>

                  <p>
                    Independently verify property details, documents, and the
                    identity of the other party before making a payment.
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

export default Disclaimer;
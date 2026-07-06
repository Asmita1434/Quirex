import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaArrowLeft,
  FaCalendarAlt,
  FaCheckCircle,
  FaCookieBite,
  FaDatabase,
  FaEnvelope,
  FaEye,
  FaFileAlt,
  FaHome,
  FaLock,
  FaPhoneAlt,
  FaQuestionCircle,
  FaServer,
  FaShieldAlt,
  FaUserCheck,
  FaUserLock,
  FaUsers
} from "react-icons/fa";

import NavBar from "./NavBar";

const PrivacyPolicy = () => {
  const navigate = useNavigate();

  const privacyHighlights = [
    {
      icon: <FaUserLock />,
      title: "Your Privacy Matters",
      description: "Your personal information is handled responsibly."
    },
    {
      icon: <FaShieldAlt />,
      title: "Secure Information",
      description: "We use safeguards to protect your personal data."
    },
    {
      icon: <FaEye />,
      title: "Clear & Transparent",
      description: "We clearly explain how your information is used."
    }
  ];

  const personalInformation = [
    "Full name and profile information",
    "Email address and phone number",
    "Account login and authentication details",
    "Property preferences and saved listings",
    "Messages and enquiries submitted through Quirex"
  ];

  const propertyInformation = [
    "Property title and description",
    "Property location and address",
    "Price, area, and property category",
    "Property images uploaded by the user",
    "Owner or listing contact information"
  ];

  const usageInformation = [
    "Pages and property listings you visit",
    "Search terms and location preferences",
    "Browser and device information",
    "IP address and approximate location",
    "Interaction and website usage data"
  ];

  const informationUsage = [
    {
      icon: <FaHome />,
      title: "Provide Our Services",
      description:
        "To display property listings, manage accounts, and process property enquiries."
    },
    {
      icon: <FaUserCheck />,
      title: "Personalize Your Experience",
      description:
        "To show relevant properties and improve your search experience."
    },
    {
      icon: <FaShieldAlt />,
      title: "Protect Quirex",
      description:
        "To prevent fraud, suspicious activity, misuse, and security threats."
    },
    {
      icon: <FaUsers />,
      title: "Improve Our Platform",
      description:
        "To understand how users interact with Quirex and improve our services."
    }
  ];

  return (
    <>
      <NavBar />

      <main className="privacy-page">
        <div className="privacy-container">

          {/* Back Button */}
          <button
            className="privacy-back-btn"
            onClick={() => navigate(-1)}
          >
            <FaArrowLeft />
            Back
          </button>

          {/* Hero Section */}
          <section className="privacy-hero">

            <div className="privacy-hero-content">
              <span className="privacy-tag">
                <FaShieldAlt />
                Privacy Policy
              </span>

              <h1>
                Your Privacy Is Our
                <span> Priority</span>
              </h1>

              <p>
                At Quirex, we respect your privacy and are committed to
                protecting your personal information. This policy explains
                what information we collect, why we collect it, and how we
                keep it secure.
              </p>

              <div className="privacy-updated">
                <FaCalendarAlt />
                Last updated: July 2026
              </div>
            </div>

            <div className="privacy-hero-visual">
              <div className="privacy-shield-circle">
                <FaUserLock />
              </div>

              <div className="privacy-floating-card privacy-card-one">
                <FaLock />
                Data Protected
              </div>

              <div className="privacy-floating-card privacy-card-two">
                <FaCheckCircle />
                Privacy First
              </div>
            </div>

          </section>

          {/* Highlight Cards */}
          <section className="privacy-highlights">
            {privacyHighlights.map((item, index) => (
              <div className="privacy-highlight-card" key={index}>
                <div className="privacy-highlight-icon">
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
          <section className="privacy-intro">
            <span>OUR COMMITMENT</span>

            <h2>Privacy You Can Understand</h2>

            <p>
              We believe privacy policies should be clear and understandable.
              This page explains how Quirex handles information when you create
              an account, browse properties, upload listings, or contact other
              users through our platform.
            </p>
          </section>

          {/* Main Content */}
          <section className="privacy-main-layout">

            <div className="privacy-policy-content">

              {/* Section 01 */}
              <article className="privacy-section">
                <div className="privacy-section-number">01</div>

                <div className="privacy-section-body">
                  <h2>Information We Collect</h2>

                  <p>
                    We may collect information that you provide directly to
                    Quirex as well as information generated when you use our
                    website.
                  </p>

                  <div className="privacy-info-grid">

                    <div className="privacy-info-card">
                      <div className="privacy-info-icon">
                        <FaUserLock />
                      </div>

                      <h3>Personal Information</h3>

                      <ul>
                        {personalInformation.map((item, index) => (
                          <li key={index}>
                            <FaCheckCircle />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="privacy-info-card">
                      <div className="privacy-info-icon">
                        <FaHome />
                      </div>

                      <h3>Property Information</h3>

                      <ul>
                        {propertyInformation.map((item, index) => (
                          <li key={index}>
                            <FaCheckCircle />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                  </div>

                  <div className="privacy-usage-box">
                    <div className="privacy-usage-header">
                      <FaDatabase />

                      <div>
                        <h3>Usage & Technical Information</h3>
                        <p>
                          Some information may be collected automatically when
                          you use Quirex.
                        </p>
                      </div>
                    </div>

                    <div className="usage-data-list">
                      {usageInformation.map((item, index) => (
                        <span key={index}>{item}</span>
                      ))}
                    </div>
                  </div>

                </div>
              </article>

              {/* Section 02 */}
              <article className="privacy-section">
                <div className="privacy-section-number">02</div>

                <div className="privacy-section-body">
                  <h2>How We Use Your Information</h2>

                  <p>
                    We use collected information only for legitimate purposes
                    related to operating, protecting, and improving Quirex.
                  </p>

                  <div className="privacy-purpose-grid">
                    {informationUsage.map((item, index) => (
                      <div className="privacy-purpose-card" key={index}>
                        <div className="purpose-icon">
                          {item.icon}
                        </div>

                        <div>
                          <h3>{item.title}</h3>
                          <p>{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </article>

              {/* Section 03 */}
              <article className="privacy-section">
                <div className="privacy-section-number">03</div>

                <div className="privacy-section-body">
                  <h2>Cookies & Local Storage</h2>

                  <p>
                    Quirex may use cookies, browser storage, and similar
                    technologies to provide essential website functionality
                    and improve your experience.
                  </p>

                  <div className="cookie-box">
                    <div className="cookie-icon">
                      <FaCookieBite />
                    </div>

                    <div>
                      <h3>Why We Use Browser Storage</h3>

                      <p>
                        These technologies may help us remember your login
                        session, property preferences, selected listings, and
                        other information required for website functionality.
                      </p>
                    </div>
                  </div>

                  <div className="privacy-note">
                    <FaEye />

                    <p>
                      You can control cookies through your browser settings.
                      Disabling essential cookies or browser storage may affect
                      certain Quirex features.
                    </p>
                  </div>
                </div>
              </article>

              {/* Section 04 */}
              <article className="privacy-section">
                <div className="privacy-section-number">04</div>

                <div className="privacy-section-body">
                  <h2>How We Share Information</h2>

                  <p>
                    Quirex does not sell your personal information. Information
                    may only be shared when required to operate our services,
                    complete user-requested interactions, or comply with legal
                    obligations.
                  </p>

                  <div className="sharing-list">

                    <div className="sharing-item">
                      <span>01</span>

                      <div>
                        <h3>With Property Participants</h3>
                        <p>
                          Relevant contact information may be shared when you
                          choose to enquire about a property.
                        </p>
                      </div>
                    </div>

                    <div className="sharing-item">
                      <span>02</span>

                      <div>
                        <h3>With Service Providers</h3>
                        <p>
                          Trusted technical providers may process limited data
                          required to host and operate Quirex.
                        </p>
                      </div>
                    </div>

                    <div className="sharing-item">
                      <span>03</span>

                      <div>
                        <h3>For Legal Requirements</h3>
                        <p>
                          Information may be disclosed when required by
                          applicable law or a valid legal request.
                        </p>
                      </div>
                    </div>

                    <div className="sharing-item">
                      <span>04</span>

                      <div>
                        <h3>For Safety & Security</h3>
                        <p>
                          Information may be used to investigate fraud, abuse,
                          security incidents, or violations of our policies.
                        </p>
                      </div>
                    </div>

                  </div>
                </div>
              </article>

              {/* Section 05 */}
              <article className="privacy-section">
                <div className="privacy-section-number">05</div>

                <div className="privacy-section-body">
                  <h2>Data Security</h2>

                  <p>
                    We use reasonable administrative and technical measures to
                    protect information against unauthorized access, loss,
                    misuse, or alteration.
                  </p>

                  <div className="security-box">
                    <div className="security-main-icon">
                      <FaServer />
                    </div>

                    <div className="security-content">
                      <h3>How We Protect Your Information</h3>

                      <div className="security-points">
                        <span>
                          <FaCheckCircle />
                          Secure authentication practices
                        </span>

                        <span>
                          <FaCheckCircle />
                          Restricted database access
                        </span>

                        <span>
                          <FaCheckCircle />
                          Security monitoring
                        </span>

                        <span>
                          <FaCheckCircle />
                          Responsible data handling
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="privacy-warning">
                    <FaShieldAlt />

                    <p>
                      No internet-based system can guarantee absolute security.
                      Users should also protect their account credentials and
                      avoid sharing passwords with others.
                    </p>
                  </div>
                </div>
              </article>

              {/* Section 06 */}
              <article className="privacy-section">
                <div className="privacy-section-number">06</div>

                <div className="privacy-section-body">
                  <h2>Your Privacy Rights</h2>

                  <p>
                    Depending on applicable law and the nature of your
                    relationship with Quirex, you may have rights regarding
                    your personal information.
                  </p>

                  <div className="rights-grid">

                    <div className="right-card">
                      <span>01</span>
                      <h3>Access</h3>
                      <p>
                        Request information about the personal data associated
                        with your account.
                      </p>
                    </div>

                    <div className="right-card">
                      <span>02</span>
                      <h3>Correction</h3>
                      <p>
                        Request correction of inaccurate or incomplete personal
                        information.
                      </p>
                    </div>

                    <div className="right-card">
                      <span>03</span>
                      <h3>Deletion</h3>
                      <p>
                        Request deletion of eligible personal information or
                        your account.
                      </p>
                    </div>

                    <div className="right-card">
                      <span>04</span>
                      <h3>Withdraw Consent</h3>
                      <p>
                        Withdraw consent where your information is processed
                        based on consent.
                      </p>
                    </div>

                  </div>
                </div>
              </article>

              {/* Section 07 */}
              <article className="privacy-section">
                <div className="privacy-section-number">07</div>

                <div className="privacy-section-body">
                  <h2>Third-Party Links</h2>

                  <p>
                    Quirex may contain links to third-party websites or
                    services. We are not responsible for the privacy practices,
                    content, or security of external platforms.
                  </p>

                  <div className="privacy-simple-note">
                    <FaFileAlt />

                    <p>
                      We recommend reviewing the privacy policy of any
                      third-party website before providing personal
                      information.
                    </p>
                  </div>
                </div>
              </article>

              {/* Section 08 */}
              <article className="privacy-section">
                <div className="privacy-section-number">08</div>

                <div className="privacy-section-body">
                  <h2>Children's Privacy</h2>

                  <p>
                    Quirex is intended for users who are legally able to
                    participate in property-related transactions. Our services
                    are not intentionally designed to collect personal
                    information from children.
                  </p>

                  <p>
                    If we learn that personal information has been collected
                    from a child in violation of applicable requirements, we
                    will take reasonable steps to remove it.
                  </p>
                </div>
              </article>

              {/* Section 09 */}
              <article className="privacy-section">
                <div className="privacy-section-number">09</div>

                <div className="privacy-section-body">
                  <h2>Changes to This Privacy Policy</h2>

                  <p>
                    We may update this Privacy Policy when our services,
                    technologies, or legal obligations change. The updated
                    version will be posted on this page with a revised
                    "Last updated" date.
                  </p>

                  <div className="privacy-update-box">
                    <FaCalendarAlt />

                    <div>
                      <h3>Stay Informed</h3>
                      <p>
                        We recommend reviewing this page periodically to
                        understand how Quirex protects your information.
                      </p>
                    </div>
                  </div>
                </div>
              </article>

            </div>

            {/* Sidebar */}
            <aside className="privacy-sidebar">

              <div className="privacy-help-card">
                <div className="privacy-help-icon">
                  <FaQuestionCircle />
                </div>

                <span className="privacy-small-title">
                  PRIVACY SUPPORT
                </span>

                <h3>Have a Privacy Question?</h3>

                <p>
                  Contact the Quirex team if you have questions about your
                  personal information or this Privacy Policy.
                </p>

                <div className="privacy-contact-item">
                  <div className="privacy-contact-icon">
                    <FaEnvelope />
                  </div>

                  <div>
                    <span>Email Us</span>
                    <strong>privacy@quirex.com</strong>
                  </div>
                </div>

                <div className="privacy-contact-item">
                  <div className="privacy-contact-icon">
                    <FaPhoneAlt />
                  </div>

                  <div>
                    <span>Call Us</span>
                    <strong>+91 98765 43210</strong>
                  </div>
                </div>

                <button
                  className="privacy-contact-btn"
                  onClick={() => navigate("/contact-us")}
                >
                  Contact Us
                </button>
              </div>

              <div className="privacy-trust-card">
                <FaLock />

                <div>
                  <h4>Privacy First</h4>
                  <p>
                    Your trust is important to us. We handle your information
                    responsibly and transparently.
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

export default PrivacyPolicy;
import React from 'react'
import { CiLocationOn } from "react-icons/ci";
import { LuPhoneCall } from "react-icons/lu";
import { BsEnvelope } from "react-icons/bs";
import { ImFacebook } from "react-icons/im";
import { IoLogoTwitter } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { IoIosSend } from "react-icons/io";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="row g-4">

            {/* About */}
            <div className="col-12 col-md-6 col-lg-4">
              <div className="d-flex align-items-center mb-3">
                <img
                  src="/Quirex.png"
                  alt="Quirex"
                  className="footer-logo-img me-2"
                />
                <h3 className="logo m-0">Quirex</h3>
              </div>

              <p>
                Quirex helps buyers, sellers, and renters discover
                verified properties across India through a simple,
                secure, and user-friendly platform.
              </p>

              <p>
                <CiLocationOn className="me-2" />
                Noida, Uttar Pradesh, India
              </p>

              <p>
                <LuPhoneCall className="me-2" />
                +91 98765 43210
              </p>

              <p>
                <BsEnvelope className="me-2" />
                support@quirex.in
              </p>

              <div className="social-icons">
                <a href="#"><ImFacebook /></a>
                <a href="#"><IoLogoTwitter /></a>
                <a href="#"><FaLinkedin /></a>
                <a href="#"><FaYoutube /></a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="col-6 col-md-3 col-lg-2">
              <h5>Quick Links</h5>

              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/returnpolicy">Return Policy</Link>
              <Link to="/refundpolicy">Refund Policy</Link>
              <Link to="/contact-us">Contact</Link>
            </div>

            {/* Services */}
            <div className="col-6 col-md-3 col-lg-2">
              <h5>Services</h5>

              <Link to="#">Buy Property</Link>
              <Link to="#">Rent Property</Link>
              <Link to="#">Sell Property</Link>
              <Link to="#">Property Search</Link>
              <Link to="#">Customer Support</Link>
            </div>

            {/* Account */}
            <div className="col-6 col-md-3 col-lg-2">
              <h5>Account</h5>

              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
              <Link to="/user-profile">My Profile</Link>
              <Link to="/user-bought">Bought Properties</Link>
            </div>

            {/* Newsletter */}
            <div className="col-12 col-md-9 col-lg-2">
              <h5>Newsletter</h5>

              <p>
                Subscribe to receive the latest property listings
                and updates.
              </p>

              <div className="newsletter-box">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="subscribe-input"
                />

                <button className="subscribe-btn">
                  <IoIosSend />
                </button>
              </div>

              <h6 className="text-white mt-4">
                Secure Payments
              </h6>

              <div className="payment-icons">
                <img
                  src="/img/payment-4.png"
                  alt="Payments"
                />
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div>
          © {new Date().getFullYear()} Quirex. All Rights Reserved.
        </div>

        <div className="footer-links">
          <Link to="#">Terms</Link>
          <Link to="/privacypolicy">Privacy Policy</Link>
          <Link to="/disclaimer">Disclaimer</Link>
        </div>
      </div>
    </>
  )
}

export default Footer
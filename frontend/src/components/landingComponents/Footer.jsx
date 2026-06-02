import React from 'react'
import { CiLocationOn } from "react-icons/ci";
import { LuPhoneCall } from "react-icons/lu";
import { BsEnvelope } from "react-icons/bs";
import { ImFacebook } from "react-icons/im";
import { IoLogoTwitter } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { IoIosSend } from "react-icons/io";

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

              <a href="/">Home</a>
              <a href="/about">About</a>
              <a href="/services">Services</a>
              <a href="/property">Properties</a>
              <a href="/contact-us">Contact</a>
            </div>

            {/* Services */}
            <div className="col-6 col-md-3 col-lg-2">
              <h5>Services</h5>

              <a href="#">Buy Property</a>
              <a href="#">Rent Property</a>
              <a href="#">Sell Property</a>
              <a href="#">Property Search</a>
              <a href="#">Customer Support</a>
            </div>

            {/* Account */}
            <div className="col-6 col-md-3 col-lg-2">
              <h5>Account</h5>

              <a href="/login">Login</a>
              <a href="/register">Register</a>
              <a href="/user-profile">My Profile</a>
              <a href="/user-bought">Bought Properties</a>
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
          <a href="#">Terms</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Support</a>
        </div>
      </div>
    </>
  )
}

export default Footer
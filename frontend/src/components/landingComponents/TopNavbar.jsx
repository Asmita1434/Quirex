import React from 'react'
import { FaRegEnvelope } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const TopNavbar = () => {
  return (
    <>
      <div className="container-fluid mycolor">
        <div className="row align-items-center py-2">

          <div className="col-lg-6 col-md-7 col-12">
            <div className="top-info">

              <span>
                <FaRegEnvelope className="btncolor" />
                support@quirex.in
              </span>

              <span>
                <FaLocationDot className="btncolor" />
                Noida, Uttar Pradesh, India
              </span>

            </div>
          </div>

          <div className="col-lg-6 col-md-5 d-none d-md-block">
            <div className="social-icons">
              <a><i className="fa-brands fa-facebook-f"></i></a>
              <a><i className="fa-brands fa-twitter"></i></a>
              <a><i className="fa-brands fa-instagram"></i></a>
              <a><i className="fa-solid fa-globe"></i></a>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default TopNavbar
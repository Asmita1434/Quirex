import React from 'react'
import {  FaRegEnvelope} from "react-icons/fa";
import { FaLocationDot} from "react-icons/fa6";

const TopNavbar = () => {
  return (
   <>
    <div className="row mycolor sticky-top">
          <div className="col-sm-6 py-1 mycolor ">
            <div className="row left">
              <div className="col-6 py-2 text-end topIcons">
                <FaRegEnvelope className="btncolor" />
                &nbsp; <span className="span"> Info@webmail.com</span>
              </div>
              <div className="col-6 py-2 topIcons">
                <FaLocationDot className="btncolor" />
                &nbsp; <span className="span"> 15/A, NestTower,NYC</span>
              </div>
            </div>
          </div>
          <div className="col-sm-6 py-2 text-center  mycolor topIcons">
           <div className="social-icons">
                <a><i className="fa-brands fa-facebook-f"></i></a>
                <a><i className="fa-brands fa-twitter"></i></a>
                <a><i className="fa-brands fa-instagram"></i></a>
                <a><i className="fa-solid fa-globe"></i></a>
            </div>
          </div>
        </div>
   </>
  )
}

export default TopNavbar
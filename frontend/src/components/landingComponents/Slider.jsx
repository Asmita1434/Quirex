import React from 'react'
import { FaHouse } from "react-icons/fa6";
import Typewriter from "typewriter-effect";

const Slider = () => {
  return (
    <>
      <div className="row bg py-5" style={{ minHeight: "400px" }}>
        <div className="col-10 mx-auto">
          <div className="row d-flex align-items-center">
            {/* Text Content */}
            <div className="col-sm-6 col-md-6  mb-4 ">
              <p className="fs-5 icP">
                <FaHouse className="me-2 ic" />
                Real Estate Agency
              </p>
              <b className="typewriter">
                
                <Typewriter
                  options={{
                    strings: ['  Find Your Dream House.'],
                    autoStart: true,
                    loop: true,
                  
                  }}
                />
              </b>

              <p className='mt-3 sliderp'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
              </p>


              <button className="btn btn2 rounded-0 px-4">Make An Enquiry</button>
            </div>

            {/* Image Content */}
            <div data-aos="zoom-in" className="col-sm-6 col-md-6 text-center">
              <img
                src="/img/slider.png"
                alt="Real Estate"
                className="img-fluid rounded "
                style={{ maxHeight: "550px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Slider
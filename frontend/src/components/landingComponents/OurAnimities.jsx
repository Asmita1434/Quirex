import React from 'react'
import { IoCarOutline } from "react-icons/io5";
import { LiaSwimmingPoolSolid } from "react-icons/lia";
import { BsShieldCheck } from "react-icons/bs";
import { GiStethoscope } from "react-icons/gi";
import { IoLibraryOutline } from "react-icons/io5";
import { LiaBedSolid } from "react-icons/lia";
import { TbHomeShield } from "react-icons/tb";
import { GiJapaneseBridge } from "react-icons/gi";  

const OurAnimities = () => {
  return (
    <>
  <div className=" row bg py-5">
    <div className="text-center ">
      <div className="tagline">Our Amenities</div>
      <h2 className="section-title">Building Amenities</h2>
    </div>

    <div className="col-sm-10 col-md-10 mx-auto  g-4 ">
    <div className="row">
      <div  className="col-sm-3 col-md-3 mb-4 ">
        <div data-aos="zoom-in"  className="amenity-card">
          <div className="amenity-icon"><IoCarOutline className='icons'/></div>
          <h6>Parking Space</h6>
          <button className="arrow-btn">→</button>
        </div>
      </div>

      <div  className="col-sm-3 col-md-3 mb-4 ">
        <div data-aos="zoom-in"  className="amenity-card">
          <div className="amenity-icon"><LiaSwimmingPoolSolid className='icons'/></div>
          <h6>Swimming Pool</h6>
          <button className="arrow-btn">→</button>
        </div>
      </div>

      <div className="col-sm-3 col-md-3 mb-4 ">
        <div data-aos="zoom-in"  className="amenity-card">
          <div className="amenity-icon"><BsShieldCheck className='icons' /></div>
          <h6>Private Security</h6>
          <button className="arrow-btn">→</button>
        </div>
      </div>

      <div className="col-sm-3 col-md-3 mb-4 ">
        <div data-aos="zoom-in"  className="amenity-card">
          <div className="amenity-icon"><GiStethoscope className='icons'/></div>
          <h6>Medical Center</h6>
          <button className="arrow-btn">→</button>
        </div>
      </div>
</div>
<div className="row">
      <div className="col-sm-3 col-md-3 mb-4 ">
        <div data-aos="zoom-in"  className="amenity-card">
          <div className="amenity-icon"><IoLibraryOutline className='icons'/></div>
          <h6>Library Area</h6>
          <button className="arrow-btn">→</button>
        </div>
      </div>

      <div className="col-sm-3 col-md-3 mb-4 ">
        <div data-aos="zoom-in"  className="amenity-card">
          <div className="amenity-icon"><LiaBedSolid className='icons'/></div>
          <h6>King Size Beds</h6>
          <button className="arrow-btn">→</button>
        </div>
      </div>

      <div className="col-sm-3 col-md-3 mb-4 ">
        <div data-aos="zoom-in"   className="amenity-card">
          <div className="amenity-icon"><TbHomeShield className='icons'/></div>
          <h6>Smart Homes</h6>
          <button className="arrow-btn">→</button>
        </div>
      </div>

      <div className="col-sm-3 col-md-3 mb-4  ">
        <div data-aos="zoom-in"   className="amenity-card">
          <div className="amenity-icon"><GiJapaneseBridge className='icons'/></div>
          <h6>Flaticon-Slider</h6>
          <button className="arrow-btn">→</button>
        </div>
      </div>
    </div>
    </div>
  </div> 
 


    </>
  )
}

export default OurAnimities
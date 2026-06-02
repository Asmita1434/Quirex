import React from "react";
import NavBar from "./NavBar";
import { useLocation } from "react-router-dom";
const Services = () => {
  const location = useLocation();

  return (
    <>
      {location?.pathname != "/" && <NavBar />}
      <div className="row py-5 bg services">
        <div className="text-center ">
          <div className="tagline ">Our Services </div>
          <h2 className="section-title">Our Main Focus</h2>
        </div>
        <div className="col-sm-10 col-md-10 card1 mx-auto">
          <div className="row py-3">
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4 d-flex">
              <div data-aos="fade-right" className="card mx-auto shadow-lg p-4 border-0 serviceCard h-100 w-100">
                <img src="/img/home.png" className="img-fluid w-50 mx-auto" />
                <h3 className="text-center py-2"><b>Buy a home</b></h3>
                <p className="text-center">
                  Explore a wide range of verified properties and perfect home that suits your lifestyle, and budget with ease.
                </p>
                <p className="text-center text-success py-3 serviceP"><a className=" bg-light rounded-2 p-2">Find a Home &rarr;</a></p>

              </div>
            </div>
           <div className="col-lg-4 col-md-6 col-sm-12 mb-4 d-flex">
              <div data-aos="fade-up" className="card mx-auto shadow-lg p-4 border-0 serviceCard h-100 w-100">
                <img src="/img/22.png" className="img-fluid w-50 mx-auto" />
                <h3 className="text-center py-2"><b>Rent a home</b></h3>
               <p className="text-center">
  Discover comfortable rental properties in your preferred location and enjoy a hassle-free renting experience.
</p>
                <p className="text-center text-success py-3 serviceP"><a className=" bg-light rounded-2 p-2">Find a Rental &rarr;</a></p>

              </div>
            </div>
           <div className="col-lg-4 col-md-6 col-sm-12 mb-4 d-flex">
              <div data-aos="fade-left" className="card mx-auto shadow-lg p-4 border-0 serviceCard h-100 w-100">
                <img src="/img/23.png" className="img-fluid w-50 mx-auto" />
                <h3 className="text-center py-2"><b>Sell a home</b></h3>
                <p className="text-center">
  List your property, connect with potential buyers, and sell your home quickly through our trusted platform.
</p>
                <p className="text-center text-success py-3 serviceP"><a className=" bg-light rounded-2 p-2">Sell Property &rarr;</a></p>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Services;
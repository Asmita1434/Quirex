import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import NavBar from './NavBar';
import API from "../../utils/api";

const ListingPage = () => {
  const [propertyData, setPropertyData] = useState([])
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const propertyId = localStorage.getItem('propertyId');
    const response = await API.get('/api/property-page',{propertyId});
    if (response?.data?.code == 200) {
      setPropertyData(response?.data?.data)
      localStorage.removeItem('propertyId');
    }

  }
   
  const handleBuy = async (propertyId) => {
    const userData = JSON.parse(localStorage.getItem('userInfo'));

    if (!userData?._id) {
      navigate('/login')
      return
    }

    const response = await API.post('/api/buy', { userId: userData?._id, propertyId });
    if (response?.data?.code == 200) {
      Swal.fire({
        title: "Buy Property",
        text: response?.data?.message,
        icon: "success"
      })
    } else {
      Swal.fire({
        title: "Buy Property",
        text: response?.data?.message,
        icon: "error"
      })
    }
  }
  return (
    <>
       {location?.pathname != "/" && <NavBar />}
       <div className="row mt-3">
        <div className="col-sm-11 mx-auto">
          <div className="tagline">Property</div>
          <div className="row mx-auto">
            <div className="col-5 aboutDiv">
              <h2 className="headAbout">{propertyData?.title}</h2>
              <p className="aboutP mb-3">
                {propertyData?.description}
              </p>
              <p className="aboutP">
                <span className="mycolor1"><span className="dash">&#8212;</span></span>&nbsp;&nbsp;&nbsp; <b>Price</b> – {propertyData?.price}
              </p>
              <p className="aboutP">
                <span className="mycolor1"><span className="dash">&#8212;</span>&nbsp;&nbsp;</span>&nbsp; <b>Area</b> – {propertyData?.area}
              </p>
              <p className="aboutP">
                <span className="mycolor1"><span className="dash">&#8212;</span>&nbsp;&nbsp;</span>&nbsp; <b>Location</b> – {propertyData?.location}
              </p>
              <p className="aboutP">
                <button onClick={() => handleBuy(propertyData?._id)} className='btn buy mx-auto mt-3'>Buy</button>

              </p>
            </div>
            <div className="col-1"></div>
            <div
              className="col-6 aboutDiv"
              data-aos="fade-left"
              data-aos-anchor="#example-anchor"
              data-aos-offset="500"
              data-aos-duration="500"
            >
              <div className="row mt-3">
                <div className="col-12 leftImgDiv px-3">
                  <img src={`${import.meta.env.VITE_API_URL}/img/${propertyData?.pic}`} height={"480"} alt="not found" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ListingPage

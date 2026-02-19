import React, { useEffect, useState } from 'react';
import { FaVectorSquare } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import NavBar from './NavBar';
import API from "../../utils/api";

const Property = () => {
  const [listData, setListData] = useState([])
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const response = await API.get('/api/property-list');
    if (response?.data?.code == 200) {
      setListData(response?.data?.data)
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
      <div className='row property py-4'>
        <div className="text-center ">
          <div className="tagline ">Properties </div>
          <h2 className="section-title">Featured Listings</h2>
        </div>
        <div className='col-sm-1 col-md-1'></div>
        <div className='col-sm-10 col-md-10'>
          <div className='row py-3 px-1 '>
            {listData?.map((item, index) => {
              return (<>
                <div className='col-sm-4 col-md-4 px-3 mb-4'>
                  <div data-aos="zoom-in" className="card  mx-auto shadow-lg border border-0 propertyCard">

                    <div className="cardImgDiv">
                      <img src={`${import.meta.env.VITE_API_URL}/img/${item?.pic}`} className="card-img-top img-fluid featuredimg" alt="..." />

                      <div className="badge">FOR RENT</div>
                      <div className="locationProperty">
                        <i className="fas fa-map-marker-alt"></i> {item?.location}
                      </div>
                      <div className="image-icons">
                        <div className="iconDiv">
                          <p className="m-0 "><FaVectorSquare />  {item?.area}  square Ft</p>
                        </div>
                      </div>
                    </div>
                    <div className="card-body">
                      <p className='text-danger'><b>Rs. {item?.price}</b>/Month</p>
                      <h5 className="card-title"><b className='mycolor2'>{item?.title}</b></h5>
                      <p className="card-text featuredp ">{item?.description}</p>

                      <button onClick={() => handleBuy(item?._id)} className='btn buy mx-auto mt-3'>Buy</button>

                    </div>

                  </div>
                </div>
              </>)
            })}
            {listData?.length == 0 && <h1 className='text-center'>No Record Found</h1>}
          </div>
        </div>
        <div className='col-sm-1 col-md-1'></div>
      </div>
    </>
  )
}

export default Property




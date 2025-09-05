import React, { useEffect, useState } from 'react'
import NavBar from '../landingComponents/NavBar'
import axios from 'axios'
import Swal from 'sweetalert2'
const AdminSoldProperty = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    fetchData();
  }, [])
  const fetchData = async () => {
    const response = await axios.get('https://quirex-backend.onrender.com/api/admin-sold-list');
    if (response?.data?.code == 200) {
      setData(response?.data?.data)
    }
  }

  const handleDeleteProperty = async (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then(async (result) => {
      if (result.isConfirmed) {
        const response = await axios.post('https://quirex-backend.onrender.com/api/delete-sold-property', { _id })
        if (response?.data?.code == 200) {
          Swal.fire({
            title: "Delete Property",
            text: response?.data?.message,
            icon: "success",
          });
          fetchData();

        } else {
          Swal.fire({
            title: "Delete Property",
            text: response?.data?.message,
            icon: "error",
          })
        }
      }
    });
  }
  return (
    <>
      <NavBar />
      <div className="row">
        <div className="col-sm-1 col-md-1"></div>
        <div className="col-sm-10 col-md-10">
           <h2 className="section-title text-center mt-4">Property Sold List</h2>
          <table className='table'>
            <thead className='table table-dark'>
              <tr>
                <th>Sr.No.</th>
                <th>Name </th>
                <th> Email </th>
                <th> Contact </th>
                <th>Title  </th>
                <th>Price  </th>
                <th>Area  </th>
                <th>Location  </th>
                <th> Media </th>
                <th> Action</th>
              </tr>
            </thead>
            <tbody>
              {
                data?.map((item, index) => {
                  console.log(item, "loop");

                  return (<>
                    <tr>
                      <td>{index + 1}</td>
                      <td>{item?.name} </td>
                      <td> {item?.email}  </td>
                      <td> {item?.contact}   </td>
                      <td>{item?.title}    </td>
                      <td>{item?.price}    </td>
                      <td>{item?.area}    </td>
                      <td>{item?.location}    </td>
                      <td><img height="60" width="100" src={`https://quirex-backend.onrender.com/img/${item?.pic}`} alt='' />    </td>
                      <td><button onClick={()=>handleDeleteProperty(item?._id)} className='btn buy'>Delete</button></td>
                    </tr>
                  </>)
                })
              }

            </tbody>
          </table>
          {data?.length == 0 && <p className='text-center'>No Record Found!</p>}
        </div>
        <div className="col-sm-1 col-md-1"></div>
      </div>
    </>
  )
}

export default AdminSoldProperty;
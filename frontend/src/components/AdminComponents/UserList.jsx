
import React, { useEffect, useState } from 'react'
import NavBar from '../landingComponents/NavBar'
import axios from 'axios'
import Swal from 'sweetalert2'
const UserList = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    fetchData();
  }, [])
  const fetchData = async () => {
    const response = await axios.get('http://localhost:9000/api/admin-user-list');
    if (response?.data?.code == 200) {
      setData(response?.data?.data)
    }
  }
  return (
    <>
      <NavBar />
      <div className="row">
        <div className="col-sm-1 col-md-1"></div>
        <div className="col-sm-10 col-md-10">
          <h2 className="section-title text-center mt-4">User List</h2>
          <table className='table'>
            <thead className='table table-dark'>
              <tr>
                <th>Sr.No.</th>
                <th>Name </th>
                <th> Email </th>
                <th> Contact </th>
                <th>Address  </th>
                <th>Profile</th>
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
                      <td>{item?.address}    </td>
                      <td><img height="60" width="60" className='rounded-5' src={`http://localhost:9000/img/${item?.profile}`} alt='' />    </td>
                     
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

export default UserList;
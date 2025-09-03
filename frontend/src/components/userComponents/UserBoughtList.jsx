import React, { useEffect, useState } from 'react'
import NavBar from '../landingComponents/NavBar'
import axios from 'axios'
const UserBoughtList = () => {
  const [list, setList] = useState([])
  useEffect(() => {
    fetchData()
  }, [])
  const fetchData = async () => {
    const UserData = JSON.parse(localStorage.getItem('userInfo'));
    const response = await axios.post('http://localhost:9000/api/user-bought-list', {
      userId: UserData?._id
    })
    if (response?.data?.code == 200) {
      setList(response?.data?.data)
    }
  }
  return (
    <>
      <NavBar />
      <div className="row">
       <h2 className="section-title text-center mt-4">Bought List</h2>
        <div className="col-sm-1 col-md-1"></div>
        <div className="col-sm-10 col-md-10">
          {/* table ki starting */}
          <table className="table">
            <thead className='table table-dark'>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Title</th>
                <th scope="col">Price</th>
                <th scope="col">Area</th>
                <th scope="col">Description</th>
                <th scope="col">Location</th>
                <th scope="col">Media</th>
              </tr>
            </thead>
            <tbody>
              {list?.map((item, index) => {
                return (<>
                  <tr>
                    <th scope="row">{index + 1}</th>
                    <td>{item?.title}</td>
                    <td>{item?.price}</td>
                    <td>{item?.area}</td>
                    <td>{item?.description}</td>
                    <td>{item?.location}</td>
                    <td><img height="60" width="100" src={`http://localhost:9000/img/${item?.pic}`} /></td>
                  </tr>
                </>)
              })}


            </tbody>
          </table>
          {list?.length == 0 && <p className='text-center'>No Record Found!</p>}
        </div>
        <div className="col-sm-1 col-md-1"></div>
      </div>
    </>
  )
}

export default UserBoughtList
import { MdOutlineOtherHouses } from "react-icons/md";
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import API from "../../utils/api";
import Swal from 'sweetalert2';
import { FiSearch } from "react-icons/fi";
const schema = yup
  .object()
  .shape({
    location: yup.string().required().min(2),
  })

const NavBar = () => {
  const navigate = useNavigate()
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });
  const [useData, setUserData] = useState(null)
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('userInfo'));
    setUserData(user)
  }, [])

  const handleSearch = async (data) => {
    const response = await API.post('/api/search', data);
    console.log(response);
    if (response?.data?.code == 200) {
      localStorage.setItem("locationInfo", JSON.stringify(data));
      navigate('/search');
    } else {
      Swal.fire({
        title: "Not Found",
        text: response?.data?.message,
        icon: "error"
      });
    }
    console.log(data);

  }

  const handleLogout = () => {
    localStorage.removeItem('userInfo');
    navigate('/login')
  }

  if (useData?.userType == "admin") {
    return (<>
      <nav className="navbar navbar-expand-sm bg-white border-bottom shadow-sm sticky-top">
        <div className="container">
          <div className="navbar-brand text-danger fw-bold d-flex align-items-center" >
            <img src="/Quirex.png" alt="Logo" className="logo fw-bold" /> &nbsp;<b className='font text-center'>Quirex</b>
          </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="mx-5 collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-sm-0">
              <li className="nav-item"><Link className="nav-link text-dark" to="/">Home</Link></li>
              <li className="nav-item"><Link className="nav-link text-dark" to="/admin-add">Add</Link></li>
              <li className="nav-item"><Link className="nav-link text-dark" to="/admin-list">List</Link></li>
              <li className="nav-item"><Link className="nav-link text-dark" to="/admin-sold">Sold</Link></li>
              <li className="nav-item"><Link className="nav-link text-dark" to="/admin-user">User</Link></li>
              <li className="nav-item"><Link className="nav-link text-dark" to="/admin-profile">Profile</Link></li>
              <li className="nav-item"><Link className="nav-link text-dark" to="/admin-contact">Contact List</Link></li>
            </ul>
            <div className="d-flex align-items-center gap-3" onClick={handleLogout}>
              <Link > <button className=" btn1  px-4 py-2 ">LogOut</button></Link>
            </div>
          </div>
        </div>
      </nav>
    </>)
  } else if (useData?.userType == "user") {
    return (<>
      <nav className="navbar navbar-expand-sm bg-white border-bottom shadow-sm sticky-top">
        <div className="container">
          <div className="navbar-brand text-danger fw-bold d-flex align-items-center" >
            <img src="/Quirex.png" alt="Logo" className="logo" /> &nbsp;<b className='font text-center'>Quirex</b>
          </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="mx-5 collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-sm-0">
              <li className="nav-item"><Link className="nav-link text-dark " to="/">Home</Link></li>
              <li className="nav-item"><Link className="nav-link text-dark " to="/user-property">Property</Link></li>
              <li className="nav-item"><Link className="nav-link text-dark " to="/user-bought">Bought</Link></li>
              <li className="nav-item"><Link className="nav-link text-dark " to="/user-profile">Profile</Link></li>
              <li className="nav-item"><Link className="nav-link text-dark " to="/contact-us">Contact Us</Link></li>
            </ul>
            <div className="user-navbar-actions">
              <form
                className="search-form"
                onSubmit={handleSubmit((d) => handleSearch(d))}
              >
                <input
                  type="search"
                  className="search-input"
                  placeholder="Search location..."
                  {...register("location")}
                />

                <button
                  type="submit"
                  className="search-icon-btn"
                >
                  <FiSearch />
                </button>
              </form>

              <button className="login-btn" onClick={handleLogout}>
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>)
  } else {
    return (
      <>
        <nav className="navbar navbar-expand-lg bg-white border-bottom shadow-sm sticky-top">
          <div className="container">

            <Link
              to="/"
              className="navbar-brand d-flex align-items-center text-decoration-none"
            >
              <img src="/Quirex.png" alt="Logo" className="logo" />
              <b className="font ms-2">Quirex</b>
            </Link>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">

              {/* menu */}

              <ul className="navbar-nav mx-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/">Home</Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/about">About</Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/services">Services</Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/property">Property</Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/contact-us">Contact</Link>
                </li>
              </ul>

              <div className="navbar-actions">

                <form
                  className="search-form"
                  onSubmit={handleSubmit((d) => handleSearch(d))}
                >
                  <input
                    type="search"
                    className="search-input"
                    placeholder="Search location..."
                    {...register("location")}
                  />

                  <button
                    type="submit"
                    className="search-icon-btn"
                  >
                    <FiSearch />
                  </button>
                </form>

                <Link to="/login">
                  <button className="login-btn">
                    Login
                  </button>
                </Link>

              </div>

            </div>

          </div>
        </nav>
      </>
    )
  }

}

export default NavBar
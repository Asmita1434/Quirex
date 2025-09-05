import React from 'react'
import { FaEnvelope } from "react-icons/fa";
import { FaKey } from "react-icons/fa";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom'
import NavBar from './NavBar';

const schema = yup
  .object()
  .shape({
    email: yup.string().required().email(),
    password: yup.string().required().min(8).max(20),
  })

const Login = () => {
  const navigate = useNavigate()
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });
  
  const handleLogin = async (data) => {
    const response = await axios.post('https://quirex-backend.onrender.com/api/login', data)
    if (response?.data?.code == 200) {
      Swal.fire({
        title: "Login",
        text: response?.data?.message,
        icon: "success"
      });
      localStorage.setItem('userInfo', JSON.stringify(response?.data?.data));
      if (response?.data?.data?.userType == "admin") {
        navigate('/admin-add')
      } else if (response?.data?.data?.userType == "user") {
        navigate('/user-property')
      }
    } else {
      Swal.fire({
        title: "Login",
        text: response?.data?.message,
        icon: "error"
      });
    }
  }
  return (
    <>
      <NavBar />
      <div className="container my-5">
        <h2 className="login-title">Login Here</h2>
        <div className="login-box">
          <form onSubmit={handleSubmit((d) => handleLogin(d))}>
            <div className="mb-3">
              <label className="form-label">Your Email</label>
              <div className="input-group">
                <span className="input-group-text"><FaEnvelope /></span>
                <input type="email" {...register('email')} className="form-control" placeholder="Enter your email" />
              </div>
              {errors?.email && <p className='text-danger'>{errors?.email?.message}</p>}
            </div>
            <div className="mb-4">
              <label className="form-label">Password</label>
              <div className="input-group">
                <span className="input-group-text"><FaKey /></span>
                <input type="password" {...register('password')} className="form-control" placeholder="Password" />
              </div>
              {errors?.password && <p className='text-danger'>{errors?.password?.message}</p>}
            </div>
            <div className="text-center mt-4">
              <input type="submit" className="btn  px-5 btn-login" value="Login" />
            </div>
             <p className='text-center mt-3'>Don't have an account? <a href="/register" className='account'><b>Register</b></a></p>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login
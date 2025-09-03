import React from 'react';
import { FaUser, FaEnvelope, FaKey } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import { MdAddPhotoAlternate } from "react-icons/md";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from 'axios';
import Swal from 'sweetalert2';
import NavBar from './NavBar';

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  contact: yup.string().required(),
  password: yup.string().required().min(8).max(20),
  address: yup.string().required(),
  profile: yup.mixed().required()
});

const UserRegister = () => {

  const { register, handleSubmit, formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });


  const handleRegister = async (data) => {
    try {
      const formData = new FormData();

      formData.append('name', data.name);
      formData.append('email', data.email);
      formData.append('contact', data.contact);
      formData.append('password', data.password);
      formData.append('address', data.address);
      formData.append('profile', data.profile[0]);

      const response = await axios.post('http://localhost:9000/api/user-register', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      if (response.status === 200) {
        Swal.fire({
          title: "Registration Successful",
          text: response?.data?.message,
          icon: "success"
        });

      }
    } catch (error) {
      console.error('Registration error:', error);
      Swal.fire({
        title: "Registration Failed",
        text: response?.data?.message,
        icon: "error"

      });
    }
  };
  return (
    <>
      <NavBar />
      <div className="container my-5">
        <h2 className="text-center">Register Here</h2>
        <div className="row justify-content-center">
          <div className="col-md-10 col-lg-8">
            <div className="form-box">
              <form onSubmit={handleSubmit(handleRegister)}>
                <div className="row g-3">

                  <div className="col-md-6">
                    <label className="form-label">Your Name</label>
                    <div className="input-group">
                      <span className="input-group-text"><FaUser /></span>
                      <input type="text" {...register('name')} className="form-control" placeholder="Enter your name" />
                    </div>
                    {errors.name && <p className="text-danger">{errors.name.message}</p>}
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Your Email</label>
                    <div className="input-group">
                      <span className="input-group-text"><FaEnvelope /></span>
                      <input type="email" {...register('email')} className="form-control" placeholder="Enter your email" />
                    </div>
                    {errors.email && <p className="text-danger">{errors.email.message}</p>}
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Phone Number</label>
                    <div className="input-group">
                      <span className="input-group-text"><IoMdCall /></span>
                      <input type="tel" {...register('contact')} className="form-control" placeholder="Enter phone number" />
                    </div>
                    {errors.contact && <p className="text-danger">{errors.contact.message}</p>}
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Password</label>
                    <div className="input-group">
                      <span className="input-group-text"><FaKey /></span>
                      <input type="password" {...register('password')} className="form-control" placeholder="Password" />
                    </div>
                    {errors.password && <p className="text-danger">{errors.password.message}</p>}
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Address</label>
                    <div className="input-group">
                      <span className="input-group-text"><FaKey /></span>
                      <input type="text" {...register('address')} className="form-control" placeholder="Enter Your Address" />
                    </div>
                    {errors.address && <p className="text-danger">{errors.address.message}</p>}
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Profile Picture</label>
                    <div className="input-group">
                      <span className="input-group-text"><MdAddPhotoAlternate /></span>
                      <input type="file" {...register('profile')} className="form-control" />
                    </div>
                    {errors.profile && <p className="text-danger">{errors.profile.message}</p>}
                  </div>

                  <div className="text-center mt-4">
                    <input type="submit" className="btn px-5 btn-login" value="Register" />
                  </div>
                   <p className='text-center mt-3'>Already have an account? <a href="/login" className='account'><b>Login</b></a></p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserRegister;
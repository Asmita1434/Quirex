import React from 'react'
import NavBar from '../landingComponents/NavBar';
import { PiSubtitlesBold } from "react-icons/pi";
import { IoMdPricetag } from "react-icons/io";
import { FaChartArea } from "react-icons/fa6";
import { MdLocationPin } from "react-icons/md";
import { MdDescription } from "react-icons/md";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from 'axios';
import Swal from 'sweetalert2';
const schemaproperty = yup
  .object()
  .shape({
    title: yup.string().required().min(2).max(30),
    price: yup.string().required(),
    area: yup.string().required().min(2).max(20),
    location: yup.string().required().min(2).max(20),
    description: yup.string().required().min(2).max(80),
    pic: yup.mixed()
  })
const AddProperty = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schemaproperty),
  });
  const addProperty = async (data) => {
    const formData = new FormData();
    formData.append('title', data?.title);
    formData.append('price', data?.price);
    formData.append('area', data?.area);
    formData.append('location', data?.location);
    formData.append('description', data?.description);
    formData.append('pic', data?.pic[0]);
    const response = await axios.post('http://localhost:9000/api/add-property', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    if (response?.data?.code == 200) {
      Swal.fire({
        title: "Add Property",
        text: response?.data?.message,
        icon: "success"
      })
    } else {
      Swal.fire({
        title: "Add Property",
        text: response?.data?.message,
        icon: "error"
      })
    }
  }
  return (
    <>
      <NavBar />
      <div className="container my-5">
        <h2 className="text-center">Add Property</h2>
        <div className="row justify-content-center">
          <div className="col-md-10 col-lg-8">
            <div className="form-box">
              <form onSubmit={handleSubmit((d) => addProperty(d))} >
                <div className="row g-3">

                  <div className="col-md-6">
                    <label className="form-label">Title</label>
                    <div className="input-group">
                      <span className="input-group-text"><PiSubtitlesBold  /></span>
                      <input {...register('title')} type="text" className="form-control" placeholder="Enter title." />
                    </div>
                    {errors?.title && <p className='text-danger'>{errors?.title?.message}</p>}
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Price</label>
                    <div className="input-group">
                      <span className="input-group-text"><IoMdPricetag  /></span>
                      <input {...register('price')} type="text" className="form-control" placeholder="Enter Price" />
                    </div>
                    {errors?.price && <p className='text-danger'>{errors?.price?.message}</p>}

                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Area</label>
                    <div className="input-group">
                      <span className="input-group-text"><FaChartArea /></span>
                      <input {...register('area')} type="text" className="form-control" placeholder="Enter area" />
                    </div>
                    {errors?.area && <p className='text-danger'>{errors?.area?.message}</p>}
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Location</label>
                    <div className="input-group">
                      <span className="input-group-text"><MdLocationPin /></span>
                      <input {...register('location')} type="text" className="form-control" placeholder="Location" />
                    </div>
                    {errors?.location && <p className='text-danger'>{errors?.location?.message}</p>}
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Description</label>
                    <div className="input-group">
                      <span className="input-group-text"><MdDescription /></span>
                      <input {...register('description')} type="text" className="form-control" placeholder="Description" />
                    </div>
                    {errors?.description && <p className='text-danger'>{errors?.description?.message}</p>}
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Image</label>
                    <div className="input-group">
                      <input {...register('pic')} type="file" className="form-control" />
                    </div>
                    {errors?.pic && <p className='text-danger'>{errors?.pic?.message}</p>}
                  </div>

                  <div className="text-center mt-4">
                    <input type="submit" className="btn  px-5 btn-login" value="Add" />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default AddProperty
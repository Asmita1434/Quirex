import React from 'react'

const Testimonial = () => {
  return (

    <>

      <div className="row py-5 background ">
        <div className="text-center ">
          <div className="tagline">Client Reviews</div>
          <h2 className="section-title">What Our Clients Say</h2>
        </div>
        <div className="col-sm-10 col-md-10 mx-auto ">
          <div className="row py-3">
            <div className='col-lg-4 col-md-6 col-sm-12 mb-4 d-flex'>
              <div data-aos="fade-up" className='card border-0 shadow-lg rounded-4 p-4 feedcard h-100 w-100'>
                <span className='feedtop'><img src='/img/testimonial1.png' /></span>
                <p className='px-3 feedtext'>
                  Quirex made my home-buying journey simple and stress-free. The property listings were accurate, and I found my dream home within a few days.
                </p>
                <div className='row g-0'>
                  <div className='col-4'>
                    <img src='/img/1.jpg_1.jpeg' className='img-fluid feedimg' />
                  </div>
                  <div className='col-8'>
                    <span>
                      <b>Jacob William</b><br />
                      <p className='color1'>Home Buyer</p>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-12 mb-4 d-flex'>
              <div data-aos="fade-up" className='card border-0 shadow-lg rounded-4 p-4 feedcard h-100 w-100'>
                <span className='feedtop'><img src='/img/testimonial1.png' /></span>
                <p className='px-3 feedtext'>
                  I was looking for a rental property and Quirex helped me find the perfect place quickly. The platform is easy to use and highly reliable.
                </p>
                <div className='row g-0'>
                  <div className='col-4'>
                    <img src='/img/2.jpg_1.jpeg' className='img-fluid feedimg' />
                  </div>
                  <div className='col-8'>
                    <span>
                      <b>Kelian Anderson</b><br />
                      <p className='color1'>Property Tenant</p>
                    </span>
                  </div>
                </div>
              </div>
            </div>
           <div className='col-lg-4 col-md-6 col-sm-12 mb-4 d-flex'>
              <div data-aos="fade-up" className='card border-0 shadow-lg rounded-4 p-4 feedcard h-100 w-100'>
                <span className='feedtop'><img src='/img/testimonial1.png' /></span>
                <p className='px-3 feedtext'>
                  Listing my property on Quirex was a great experience. I received genuine inquiries and successfully sold my property in a short time.
                </p>
                <div className='row g-0'>
                  <div className='col-4'>
                    <img src='/img/3.jpg_2.jpeg' className='img-fluid feedimg' />
                  </div>
                  <div className='col-8'>
                    <span>
                      <b>Adam Joseph</b><br />
                      <p className='color1'>Property Seller</p>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>





    </>

  )
}

export default Testimonial
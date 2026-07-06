import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import NavBar from './NavBar';
import API from "../../utils/api";
import {
  FaMapMarkerAlt,
  FaTag,
  FaRulerCombined,
  FaShoppingCart,
  FaCheckCircle,
  FaShieldAlt,
  FaHeadset,
  FaHeart,
  FaShareAlt,
  FaBed,
  FaBath,
  FaCar,
  FaSwimmingPool,
  FaTree,
  FaWifi,
  FaSnowflake,
  FaHome,
  FaCalendarAlt,
  FaUser,
} from "react-icons/fa";

const ListingPage = () => {
  const [propertyData, setPropertyData] = useState(null)
  const [loading, setLoading] = useState(true);
  const [isFavourite, setIsFavourite] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      setLoading(true);

      const propertyId = localStorage.getItem("propertyId");

      if (!propertyId) {
        console.log("Property ID not found");
        return;
      }

      const response = await API.get("/api/property-page", {
        params: { propertyId },
      });
       if (response?.data?.code === 200) {
        setPropertyData(response?.data?.data);
      }
    } catch (error) {
      console.error("Error fetching property:", error);

      Swal.fire({
        title: "Error",
        text: "Unable to load property details.",
        icon: "error",
      });
    } finally {
      setLoading(false);
    }
  }
   
  const loadRazorpayScript = () => {
    return new Promise((resolve, reject) => {
      if (window.Razorpay) return resolve(true);

      const existingScript = document.querySelector(
        'script[src="https://checkout.razorpay.com/v1/checkout.js"]'
      );
      if (existingScript) {
        existingScript.addEventListener('load', () => resolve(true));
        existingScript.addEventListener('error', () =>
          reject(new Error('Razorpay SDK failed to load'))
        );
        return;
      }

      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.async = true;
      script.onload = () => resolve(true);
      script.onerror = () => reject(new Error('Razorpay SDK failed to load'));
      document.body.appendChild(script);
    });
  };

  const handleBuy = async (propertyId) => {
    const userData = JSON.parse(localStorage.getItem('userInfo'));

    if (!userData?._id) {
      navigate('/login');
      return;
    }

    try {
      const priceInRupees = Number(propertyData?.price || 0);
      const amountPaise = Math.round(priceInRupees * 100);

      if (!Number.isFinite(amountPaise) || amountPaise < 100) {
        Swal.fire({
          title: 'Invalid Amount',
          text: 'Minimum amount is ₹1.00',
          icon: 'error',
        });
        return;
      }

      await loadRazorpayScript();

      const receipt = `rcpt_${userData?._id}_${propertyId}`.slice(0, 40);

      const createOrderRes = await API.post('/api/create-order', {
        amount: amountPaise,
        currency: 'INR',
        receipt,
      });

      if (createOrderRes?.data?.code !== 200) {
        Swal.fire({
          title: 'Payment',
          text:
            createOrderRes?.data?.message ||
            'Unable to create Razorpay order',
          icon: 'error',
        });
        return;
      }

      const { order_id, amount, currency } =
        createOrderRes?.data?.data || {};

      const razorpayKeyId = import.meta.env.VITE_RAZORPAY_KEY_ID;
      if (!razorpayKeyId) {
        console.log('Missing VITE_RAZORPAY_KEY_ID', import.meta.env);
        Swal.fire({
          title: 'Payment Configuration',
          text: 'Razorpay key is missing on frontend. Check frontend/.env and restart dev server.',
          icon: 'error',
        });
        return;
      }


      const options = {
        key: razorpayKeyId,
        amount,
        currency,
        name: 'Quirex',
        description: `Payment for ${propertyData?.title || 'Property'}`,
        order_id,
        handler: async function (response) {
          const { razorpay_payment_id, razorpay_order_id, razorpay_signature } =
            response || {};

          try {
            const verifyRes = await API.post('/api/verify-payment', {
              razorpay_payment_id,
              razorpay_order_id,
              razorpay_signature,
            });

            if (verifyRes?.data?.code === 200) {
              const buyRes = await API.post('/api/buy', {
                userId: userData?._id,
                propertyId,
              });

              Swal.fire({
                title: 'Payment Success',
                text: buyRes?.data?.message || 'Property Bought Successfully',
                icon: 'success',
              });
            } else {
              Swal.fire({
                title: 'Payment Verification Failed',
                text: verifyRes?.data?.message || 'Signature mismatch',
                icon: 'error',
              });
            }
          } catch (err) {
            Swal.fire({
              title: 'Verification Error',
              text: err?.response?.data?.message || 'Could not verify payment',
              icon: 'error',
            });
          }
        },
        modal: {
          ondismiss: function () {
            Swal.fire({
              title: 'Payment Cancelled',
              text: 'You cancelled the payment.',
              icon: 'info',
            });
          },
        },
        theme: { color: '#3399cc' },
      };

      const rzp = new window.Razorpay(options);

      rzp.on('payment.failed', function (response) {
        Swal.fire({
          title: 'Payment Failed',
          text: response?.error?.description || 'Something went wrong',
          icon: 'error',
        });
      });

      rzp.open(options);
    } catch (err) {
      Swal.fire({
        title: 'Payment Error',
        text: err?.response?.data?.message || err?.message || 'Unable to start checkout',
        icon: 'error',
      });
    }
  }


  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: propertyData?.title,
          text: propertyData?.description,
          url: window.location.href,
        });
      } else {
        await navigator.clipboard.writeText(window.location.href);

        Swal.fire({
          title: "Link Copied",
          text: "Property link copied to clipboard.",
          icon: "success",
          timer: 1500,
          showConfirmButton: false,
        });
      }
    } catch (error) {
      console.log("Share cancelled");
    }
  };

  if (loading) {
    return (
      <>
        {location?.pathname !== "/" && <NavBar />}
        <div className="property-loader">
          <div className="spinner-border text-danger"></div>
          <p>Loading property details...</p>
        </div>
      </>
    );
  }

   if (!propertyData) {
    return (
      <>
        {location?.pathname !== "/" && <NavBar />}
        <div className="property-not-found">
          <FaHome />
          <h2>Property Not Found</h2>
          <p>The property you are looking for is unavailable.</p>
        </div>
      </>
    );
  }

  const imageUrl = `${import.meta.env.VITE_API_URL}/img/${propertyData?.pic}`;

  return (
    <>
       {location?.pathname != "/" && <NavBar />}
       <main className="property-page">
        <div className="property-container">

          {/* Breadcrumb */}
          <div className="property-breadcrumb">
            <span onClick={() => navigate("/")}>Home</span>
            <span>›</span>
            <span>Property</span>
            <span>›</span>
            <strong>{propertyData?.title}</strong>
          </div>

          {/* Main Section */}
          <section className="property-main-grid">

            {/* LEFT SIDE */}
            <div className="property-information">

              <span className="property-category">Property</span>

              <h1>{propertyData?.title}</h1>

              <div className="property-location">
                <FaMapMarkerAlt />
                <span>{propertyData?.location}</span>
              </div>

              <p className="property-description">
                {propertyData?.description}
              </p>

              {/* Property Stats Card */}
              <div className="property-stats-card">

                <div className="property-stat">
                  <div className="stat-icon">
                    <FaTag />
                  </div>

                  <div>
                    <span>Price</span>
                    <strong>
                      ₹ {Number(propertyData?.price || 0).toLocaleString("en-IN")}
                    </strong>
                  </div>
                </div>

                <div className="property-stat">
                  <div className="stat-icon">
                    <FaRulerCombined />
                  </div>

                  <div>
                    <span>Area</span>
                    <strong>{propertyData?.area} sq ft</strong>
                  </div>
                </div>

                <div className="property-stat">
                  <div className="stat-icon">
                    <FaMapMarkerAlt />
                  </div>

                  <div>
                    <span>Location</span>
                    <strong>{propertyData?.location}</strong>
                  </div>
                </div>

              </div>

              {/* Buy Button */}
              <button
                className="property-buy-btn"
                onClick={() => handleBuy(propertyData?._id)}
              >
                <FaShoppingCart />
                Buy Now
              </button>

              {/* Trust Features */}
              <div className="property-trust-features">
                <span>
                  <FaCheckCircle />
                  Verified Property
                </span>

                <span>
                  <FaShieldAlt />
                  Secure Payment
                </span>

                <span>
                  <FaHeadset />
                  24/7 Support
                </span>
              </div>

            </div>

            {/* RIGHT SIDE - IMAGE */}
            <div className="property-gallery">

              <span className="sale-badge">For Sale</span>

              <div className="gallery-actions">
                <button
                  onClick={() => setIsFavourite(!isFavourite)}
                  className={isFavourite ? "active-favourite" : ""}
                >
                  <FaHeart />
                </button>

                <button onClick={handleShare}>
                  <FaShareAlt />
                </button>
              </div>

              <img
                src={imageUrl}
                alt={propertyData?.title}
                className="property-main-image"
              />

              {/* Thumbnail Strip */}
              <div className="property-thumbnails">
                <img src={imageUrl} alt="Property view" />
                <img src={imageUrl} alt="Property view" />
                <img src={imageUrl} alt="Property view" />
                <img src={imageUrl} alt="Property view" />

                <div className="more-images">
                  <img src={imageUrl} alt="More views" />
                  <span>+ More</span>
                </div>
              </div>

            </div>
          </section>

          {/* DETAILS SECTION */}
          <section className="property-details-grid">

            {/* Overview */}
            <div className="property-detail-card">
              <h3>
                <FaHome />
                Overview
              </h3>

              <p>
                {propertyData?.description} This premium property offers
                comfort, modern design and an excellent location for luxury
                living.
              </p>

              <div className="overview-features">
                <span>
                  <FaBed />
                  4 Bedrooms
                </span>

                <span>
                  <FaBath />
                  3 Bathrooms
                </span>

                <span>
                  <FaCar />
                  2 Parking
                </span>
              </div>
            </div>

            {/* Amenities */}
            <div className="property-detail-card">
              <h3>
                <FaCheckCircle />
                Amenities
              </h3>

              <div className="amenities-grid">
                <span>
                  <FaSwimmingPool />
                  Private Pool
                </span>

                <span>
                  <FaTree />
                  Garden
                </span>

                <span>
                  <FaHome />
                  Club House
                </span>

                <span>
                  <FaShieldAlt />
                  24/7 Security
                </span>

                <span>
                  <FaWifi />
                  Wi-Fi
                </span>

                <span>
                  <FaSnowflake />
                  Air Conditioning
                </span>
              </div>
            </div>

            {/* Highlights */}
            <div className="property-detail-card">
              <h3>
                <FaCheckCircle />
                Highlights
              </h3>

              <ul className="property-highlights">
                <li>
                  <FaCheckCircle />
                  Spacious living and dining area
                </li>

                <li>
                  <FaCheckCircle />
                  Premium quality construction
                </li>

                <li>
                  <FaCheckCircle />
                  Close to schools, hospitals & malls
                </li>

                <li>
                  <FaCheckCircle />
                  Well-connected to major roads
                </li>
              </ul>
            </div>

          </section>

          {/* BOTTOM INFO BAR */}
          <section className="property-bottom-bar">

            <div className="bottom-info-item">
              <div className="bottom-icon">
                <FaHome />
              </div>

              <div>
                <span>Property ID</span>
                <strong>
                  {propertyData?._id?.slice(-7)?.toUpperCase()}
                </strong>
              </div>
            </div>

            <div className="bottom-info-item">
              <div className="bottom-icon">
                <FaCalendarAlt />
              </div>

              <div>
                <span>Status</span>
                <strong>Available for Sale</strong>
              </div>
            </div>

            <div className="bottom-info-item">
              <div className="agent-avatar">
                <FaUser />
              </div>

              <div>
                <span>Property Assistance</span>
                <strong>Quirex Support Team</strong>
              </div>
            </div>

            <button className="contact-agent-btn"  onClick={() => navigate("/contact-us")}>
              Contact Agent
            </button>

          </section>

        </div>
      </main>
    </>
  )
}

export default ListingPage

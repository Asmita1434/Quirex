import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "./App.css";
import { Routes, Route, useLocation} from "react-router-dom";
import TopNavbar from "./components/landingComponents/TopNavbar";
import Home from "./components/landingComponents/Home";
import About from "./components/landingComponents/About";
import Services from "./components/landingComponents/Services";
import Property from "./components/landingComponents/Property";
import UserRegister from "./components/landingComponents/UserRegister";
import Footer from "./components/landingComponents/Footer";
import Login from "./components/landingComponents/Login";
import AddProperty from "./components/AdminComponents/AddProperty";
import AdminPropertyList from "./components/AdminComponents/AdminPropertyList";
import AdminSoldProperty from "./components/AdminComponents/AdminSoldProperty";
import UserList from "./components/AdminComponents/UserList";
import AdminProfile from "./components/AdminComponents/AdminProfile";
import AdminContactUsList from "./components/AdminComponents/AdminContactUsList";
import UserBoughtList from "./components/userComponents/UserBoughtList";
import UserProfile from "./components/userComponents/UserProfile";
import ContactUs from "./components/landingComponents/ContactUs";
import "aos/dist/aos.css";
import "aos/dist/aos.js";
import Aos from "aos";
import { useEffect, useState } from "react";
import NotFound from "./NotFound";

function App() {
  const location = useLocation();
  const [userData, setUserData] = useState(null);

  // Role base authentication
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));
    setUserData(user);
  }, [location]);

  useEffect(() => {
    Aos.init(
      {
        offset: 200,
        duration: 600,
        easing: "ease-in-sine",
        delay: 100,
      },
      []
    );
  },[]);

  return (
    <>
      <TopNavbar />
      {/* <Navbar /> */}
      <Routes>
        {/* landing page router */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/property" element={<Property />} />
        <Route path="/register" element={<UserRegister />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact-us" element={<ContactUs />} />

        {/* admin Section  */}
        {userData?.userType == "admin" && (
          <>
            <Route path="/admin-add" element={<AddProperty />} />
            <Route path="/admin-list" element={<AdminPropertyList />} />
            <Route path="/admin-sold" element={<AdminSoldProperty />} />
            <Route path="/admin-user" element={<UserList />} />
            <Route path="/admin-profile" element={<AdminProfile />} />
            <Route path="/admin-contact" element={<AdminContactUsList />} />
          </>
        )}

        {/* User Route */}
        {userData?.userType == "user" && (
          <>
            <Route path="/user-property" element={<Property />} />
            <Route path="/user-bought" element={<UserBoughtList />} />
            <Route path="/user-profile" element={<UserProfile />} />
          </>
        )}
        <Route path="*" element={<NotFound/>}/>
      </Routes>

      <Footer />
    </>
  );
}

export default App;
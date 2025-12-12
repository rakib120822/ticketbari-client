import React from "react";
import Navbar from "../../utils/Navbar";
import { Outlet } from "react-router";
import Footer from "../../utils/Footer";
import { ToastContainer } from "react-toastify";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
       <ToastContainer />
    </div>
  );
};

export default MainLayout;

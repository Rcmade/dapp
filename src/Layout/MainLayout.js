import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footers/Footer";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <div style={{ minHeight: "90vh" }}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;

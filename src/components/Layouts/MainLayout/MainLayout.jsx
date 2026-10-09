// import React from 'react'
import { Outlet } from "react-router-dom";
import { Footer } from "../../partials/Footer/Footer";
import Header from "../../partials/Header/Header";

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Header />
      {/* pages information */}
      <Outlet />
      <Footer />
    </div>
  );
};

export { MainLayout };

// import React from 'react'
import { Footer } from "../../partials/Footer/Footer";
import Header from "../../partials/Header/Header";

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Header />
      <Footer />
    </div>
  );
};

export { MainLayout };

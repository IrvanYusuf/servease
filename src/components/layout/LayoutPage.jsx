import React from "react";
import Header from "../organisms/Header";
import { Outlet } from "react-router-dom";
import Footer from "../organisms/Footer";
import "../../styles/layout/layoutPage.css";

const LayoutPage = () => {
  return (
    <div>
      <Header />
      <main className="main-layout-container">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default LayoutPage;

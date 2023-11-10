import React from "react";
import Header from "../organisms/Header";
import { Outlet } from "react-router-dom";
import Footer from "../organisms/Footer";

const LayoutPage = () => {
  return (
    <div>
      <Header />
      <main style={{ marginTop: "100px" }}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default LayoutPage;

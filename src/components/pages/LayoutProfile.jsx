import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import "../../styles/molecules/cardProfile.css";
import "../../styles/atoms/titleText.css";
import Navigation from "../organisms/Navigation";

const LayoutProfile = () => {
  const [title, setTitle] = useState(0);
  const location = useLocation();

  if (location.pathname === "/profile") {
    useEffect(() => setTitle("Biodata Diri"));
  } else if (location.pathname === "/profile/riwayat-pemesanan") {
    useEffect(() => setTitle("Riwayat Pemesanan"));
  } else {
    useEffect(() => setTitle("Daftar Alamat"));
  }

  return (
    <div className="container">
      <div className="d-flex">
        <div className="shadow-sm col-3 box">
          <h3 className="title">User Profil</h3>
          <Navigation />
        </div>
        <div className="shadow-sm col-9 box">
          <h3 className="title">{title}</h3>
          <Outlet />
        </div>
      </div>
      <div style={{ height: "200px" }}></div>
    </div>
  );
};

export default LayoutProfile;

import React from "react";
import { Outlet } from "react-router-dom";
import "../../styles/molecules/cardProfile.css";
import "../../styles/atoms/titleText.css";
import Navigation from "../organisms/Navigation";

const LayoutProfile = () => {
  return (
    <div className="container">
      <div className="d-flex">
        <div className="shadow-sm col-3 box py-3" style={{ height: "100vh" }}>
          <h3 className="title">User Profil</h3>
          <Navigation />
        </div>
        <div className="col-9 ps-3">
          <div className="box shadow-sm ps-3" style={{ height: "100vh" }}>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LayoutProfile;

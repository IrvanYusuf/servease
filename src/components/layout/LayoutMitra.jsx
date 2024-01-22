import React from "react";
import { Outlet } from "react-router-dom";
import "../../styles/molecules/cardProfile.css";
import "../../styles/atoms/titleText.css";
import NavigationMitra from "../organisms/NavigationMitra";

const LayoutMitra = () => {
  return (
    <div className="container">
      <div className="d-flex">
        <div className="shadow-sm col-3 box py-3" style={{ height: "140vh" }}>
          <h3 className="title">User Profil</h3>
          <NavigationMitra />
        </div>
        <div className="col-9 ps-3">
          <div className="box shadow-sm ps-3" style={{ height: "140vh" }}>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LayoutMitra;

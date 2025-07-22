import { Outlet } from "react-router-dom";
import "@/styles/molecules/cardProfile.css";
import "@/styles/atoms/titleText.css";
import Navigation from "@/components/organisms/Navigation";
import "@/styles/layout/LayoutProfile.css";

const LayoutProfile = () => {
  return (
    <div className="container">
      <div className="d-flex">
        <div className="shadow-sm d-none d-lg-block col-12 col-lg-3 box py-3 layout-profile-sidebar">
          <h3 className="title">User Profil</h3>
          <Navigation />
        </div>
        <div className="col-lg-9 col-12 ps-lg-3">
          <div className="box shadow-sm ps-lg-3 layout-profile-content">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LayoutProfile;

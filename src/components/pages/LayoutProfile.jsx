import React from "react";
import { Link, Outlet } from "react-router-dom";
import "../../styles/pages/LayoutProfile.css"
import ProfileIcon from '@mui/icons-material/AccountCircleOutlined';
import HistoryIcon from '@mui/icons-material/HistoryToggleOff';
import LocationIcon from '@mui/icons-material/FmdGoodOutlined';
import LogoutIcon from '@mui/icons-material/LogoutOutlined';



const LayoutProfile = () => {
  const handleLogout = () => {
    localStorage.removeItem("id")
    localStorage.removeItem("email")
    localStorage.removeItem("password")
  }
  return (
    <div className="container">
      <div className="d-flex">
        {/* <div className="col-6"> */}
        <div>
          <nav className="sidebar">
            <ul>
              <li className="list">
                <ProfileIcon style={{ color: "rgba(121, 121, 121, 1)",fontSize:"30px"}} />
                <Link to={"/profile"}>Biodata Diri</Link>
              </li>
              <li className="list">
                <HistoryIcon style={{color: "rgba(121, 121, 121, 1)", fontSize:"30px"}}/>
                <Link to={"/profile/riwayat-pemesanan"}>Riwayat Pemesanan</Link>
              </li>
              <li className="list">
                <LocationIcon style={{color: "rgba(121, 121, 121, 1)", fontSize:"30px"}}/>
                <Link to={"/profile/daftar-alamat"}>Daftar Alamat</Link>
              </li>
              <li className="list">
                <LogoutIcon style={{color: "rgba(121, 121, 121, 1)", fontSize:"30px"}}/>
                <Link to={"/login"} onClick={handleLogout}>Logout</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="col-6">
          <Outlet />
        </div>
      </div>
      <div style={{ height: "200px" }}></div>
    </div>
  );
};

export default LayoutProfile;

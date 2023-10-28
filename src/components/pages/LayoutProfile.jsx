import React from "react";
import { Link, Outlet } from "react-router-dom";

const LayoutProfile = () => {
  return (
    <div className="container">
      <div className="d-flex">
        <div className="col-6">
          <nav>
            <ul>
              <li>
                <Link to={"/profile"}>Biodata Diri</Link>
              </li>
              <li>
                <Link to={"/profile/riwayat-pemesanan"}>Riwayat Pemesanan</Link>
              </li>
              <li>
                <Link to={"/profile/daftar-alamat"}>Daftar Alamat</Link>
              </li>
              <li>
                <Link to={"/login"}>Logout</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="col-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default LayoutProfile;

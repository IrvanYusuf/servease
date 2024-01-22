import React, { useRef } from "react";
import { Nav } from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";
import "../../styles/organisms/navigationMitra.css";
import { VscAccount } from "react-icons/vsc";
import { BsClockHistory } from "react-icons/bs";
import { FiMapPin } from "react-icons/fi";
import { MdLogout } from "react-icons/md";
import { FaRegStar } from "react-icons/fa6";
import { useAuth } from "../../context/authContext";

const NavigationMitra = () => {
  const { setAuthToken } = useAuth();
  const myRef = useRef();
  const pathLink = "/mitra/";
  const location = useLocation();
  const handleLogout = () => {
    setAuthToken("");
    localStorage.removeItem("token");
  };

  const isNavLinkActive = (paths) => {
    return location.pathname === paths;
  };

  return (
    <>
      <Nav
        variant="pills"
        className="flex-column sidebar-mitra-navigation-container row-gap-2 mt-3"
      >
        <Nav.Item>
          <div
            className={`${
              isNavLinkActive("/mitra/") ||
              isNavLinkActive("/mitra/profil-layanan") ||
              isNavLinkActive("/mitra/galeri-media")
                ? "active-container"
                : "none"
            } py-2 ps-4 rounded-2 d-flex column-gap-2`}
          >
            <VscAccount size={24} />
            <h6 className="fw-bold">Servis</h6>
          </div>
          <ul>
            <Nav.Link
              as={NavLink}
              to={"/mitra/"}
              className={`tes ${({ isActive }) =>
                isActive ? "active2" : "none"}`}
            >
              Penilaian
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to={"/mitra/profil-layanan"}
              className={`tes ${({ isActive }) =>
                isActive ? "active2" : "none"}`}
            >
              Profil Layanan
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to={"/mitra/galeri-media"}
              className={`tes ${({ isActive }) =>
                isActive ? "active2" : "none"}`}
            >
              Galeri Media
            </Nav.Link>
          </ul>
        </Nav.Item>
        <Nav.Item>
          <div
            className={`${
              isNavLinkActive("/mitra/alamat") ||
              isNavLinkActive("/mitra/pengaturan")
                ? "active-container"
                : "none"
            } py-2 ps-4 rounded-2 d-flex column-gap-2`}
          >
            <VscAccount size={24} />
            <h6 className="fw-bold">Pengaturan Umum</h6>
          </div>
          <ul>
            <Nav.Link
              as={NavLink}
              to={"/mitra/alamat"}
              className={`tes ${({ isActive }) =>
                isActive ? "active2" : "none"}`}
            >
              Alamat Saya
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to={"/mitra/pengaturan"}
              className={`tes ${({ isActive }) =>
                isActive ? "active2" : "none"}`}
            >
              Pengaturan Akun
            </Nav.Link>
          </ul>
        </Nav.Item>
        <Nav.Item>
          <div
            className={`${
              isNavLinkActive("/mitra/transaksi") ||
              isNavLinkActive("/mitra/transaksi-detail/1") ||
              isNavLinkActive("/mitra/pembatalan")
                ? "active-container"
                : "none"
            } py-2 ps-4 rounded-2 d-flex column-gap-2`}
          >
            <VscAccount size={24} />
            <h6 className="fw-bold">Transaksi</h6>
          </div>
          <ul>
            <Nav.Link
              as={NavLink}
              to={"/mitra/transaksi"}
              // className={`tes ${({ isActive }) =>
              //   isActive ? "active2" : "none"}`}
              className={`tes ${
                isNavLinkActive("/mitra/transaksi") ||
                isNavLinkActive("/mitra/transaksi-detail/1")
                  ? "active2"
                  : "none"
              }`}
            >
              Transaksi Saya
            </Nav.Link>
          </ul>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={NavLink} to="/login" onClick={handleLogout}>
            <MdLogout size={24} style={{ rotate: "180deg" }} />
            Logout
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
};

export default NavigationMitra;

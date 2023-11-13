import React from "react";
import { Nav } from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";
import "../../styles/organisms/navigation.css";
import { VscAccount } from "react-icons/vsc";
import { BsClockHistory } from "react-icons/bs";
import { FiMapPin } from "react-icons/fi";
import { MdLogout } from "react-icons/md";

const Navigation = () => {
  const handleLogout = () => {
    localStorage.removeItem("id");
    localStorage.removeItem("email");
    localStorage.removeItem("password");
  };

  return (
    <>
      <Nav
        variant="pills"
        className="flex-column sidebar-profile-navigation-container row-gap-2"
      >
        <Nav.Item>
          <Nav.Link
            as={NavLink}
            to="/profile/"
            className={({ isActive }) => (isActive ? "active" : "none")}
          >
            <VscAccount size={24} />
            Biodata Diri
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            as={NavLink}
            to="/profile/riwayat-pemesanan"
            className={({ isActive }) => (isActive ? "active" : "none")}
          >
            <BsClockHistory size={24} />
            Riwayat Pemesanan
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            as={NavLink}
            to="/profile/daftar-alamat"
            className={({ isActive }) => (isActive ? "active" : "none")}
          >
            <FiMapPin size={24} />
            Daftar Alamat
          </Nav.Link>
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

export default Navigation;

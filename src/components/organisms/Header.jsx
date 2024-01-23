import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import ButtonLink from "../atoms/ButtonLink";
import { Link } from "react-router-dom";
import ButtonLinkOutline from "../atoms/ButtonLinkOutline";
import riwayatIcon from "../../assets/icon/riwayat-icon.png";
import profileImg from "../../assets/icon/profile.png";
import "../../styles/organisms/header.css";
import { useAuth } from "../../context/authContext";
import { apiUser } from "../../api/apiUser";
import { jwtDecode } from "jwt-decode";

const Header = () => {
  const [imgUser, setImgUser] = useState(profileImg);
  const { token } = useAuth();
  const decoded = token ? jwtDecode(token) : null;

  const getSingleUser = async () => {
    const response = await fetch(`${apiUser}/detail/${decoded.id}`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        authorization: token,
        credentials: true,
      },
    });
    const { data } = await response.json();
    const newImgUser =
      data[0].img !== null
        ? `http://localhost:3000/images/${data[0].img}`
        : profileImg;
    // console.log(data.data[0].img);
    setImgUser(newImgUser);
  };

  useEffect(() => {
    getSingleUser();
  }, [imgUser]);
  return (
    <Navbar expand="lg" className="bg-white border-bottom fixed-top">
      <Container>
        <Navbar.Brand className="text-primary fs-2 fw-bold">
          <Link to={"/"} className="text-decoration-none">
            ServEase
          </Link>
        </Navbar.Brand>
        <input
          className="header-search form-control"
          type="search"
          name=""
          id=""
          value={""}
          onChange={() => {}}
        />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto column-gap-3 row-gap-2 row-gap-lg-0 align-items-center">
            {token ? (
              <>
                <div className="riwayat-icon-wrapper d-flex align-items-center column-gap-2">
                  <Link
                    to={"/profile/riwayat-pemesanan"}
                    className="icon-wrapper d-flex align-items-center justify-content-center"
                  >
                    <img src={riwayatIcon} alt="" />
                  </Link>
                  <span className="fw-semibold">Riwayat</span>
                </div>
                <Link to={"/profile/"} className="user-img-wrapper">
                  <img
                    className="w-100 h-100 rounded-pill"
                    src={imgUser}
                    alt=""
                  />
                </Link>{" "}
              </>
            ) : (
              <>
                <ButtonLinkOutline path={"/login"} text={"Masuk"} />
                <ButtonLink path={"/register"} text={"Daftar"} />
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

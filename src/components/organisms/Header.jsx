import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import ButtonLink from "../atoms/ButtonLink";
import { Link } from "react-router-dom";
import ButtonLinkOutline from "../atoms/ButtonLinkOutline";
import riwayatIcon from "../../assets/icon/riwayat-icon.png";
import userImg from "../../assets/img/user-img.png";
import "../../styles/organisms/header.css";

const Header = () => {
  const [idUser, setIdUser] = useState("");

  const getIdUserLocalStorage = () => {
    const id = localStorage.getItem("id");
    if (id) {
      setIdUser(id);
    }
  };

  useEffect(() => {
    getIdUserLocalStorage();
  }, []);
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
            {idUser ? (
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
                    src={userImg}
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

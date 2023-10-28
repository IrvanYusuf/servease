import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import ButtonLink from "../atoms/ButtonLink";
import { Link } from "react-router-dom";
import ButtonLinkOutline from "../atoms/ButtonLinkOutline";
import "../../styles/organisms/header.css";

const Header = () => {
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
          onChange={""}
        />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto column-gap-3 row-gap-2 row-gap-lg-0">
            <ButtonLinkOutline path={"/login"} text={"Masuk"} />
            <ButtonLink path={"/register"} text={"Daftar"} />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

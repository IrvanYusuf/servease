import { Container, Nav, Navbar } from "react-bootstrap";
import ButtonLink from "@/components/atoms/ButtonLink";
import { Link } from "react-router-dom";
import ButtonLinkOutline from "@/components/atoms/ButtonLinkOutline";
import riwayatIcon from "@/assets/icon/riwayat-icon.png";
import profileImg from "@/assets/icon/profile.png";
import "@/styles/organisms/header.css";
import { useAuth } from "@/context/authContext";
import ActionButtonOutline from "../atoms/ActionButtonOutline";
import Navigation from "./Navigation";

const Header = () => {
  const { token } = useAuth();
  return (
    <Navbar expand="lg" className="bg-white border-bottom fixed-top">
      <Container>
        <Navbar.Brand className="text-primary fs-2 fw-bold">
          <Link to={"/"} className="text-decoration-none">
            ServEase
          </Link>
        </Navbar.Brand>
        <input
          className="header-search form-control d-none d-lg-block"
          type="search"
          name=""
          id=""
          value={""}
          onChange={() => {}}
        />
        {token && (
          <>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto mt-4 mt-lg-0 column-gap-3 row-gap-2 row-gap-lg-0 align-items-center d-lg-none d-block">
                <Navigation />
              </Nav>
            </Navbar.Collapse>
          </>
        )}

        {token ? (
          <div className="d-lg-flex d-none gap-3">
            <div className="riwayat-icon-wrapper column-gap-2 d-flex align-items-center">
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
                src={profileImg}
                alt=""
              />
            </Link>
          </div>
        ) : (
          <div className="d-flex align-items-center column-gap-3">
            <Link to={"/login"} style={{ textDecoration: "none" }}>
              <ActionButtonOutline text={"Masuk"} className="h-100" />
            </Link>
            <ButtonLink path={"/register"} text={"Daftar"} />
          </div>
        )}
      </Container>
    </Navbar>
  );
};

export default Header;

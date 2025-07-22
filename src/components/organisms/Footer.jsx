import React from "react";
import { Link } from "react-router-dom";
import "@/styles/organisms/footer.css";
import tiktokLogo from "@/assets/icon/tiktok.png";
import instagramLogo from "@/assets/icon/instagram.png";
import facebookLogo from "@/assets/icon/facebook.png";

const Footer = () => {
  return (
    <div className="footer-container">
      <footer className="container footer">
        <div className="row">
          <div className="col-lg-7 col-12">
            <Link
              className="text-primary fs-2 fw-bold text-decoration-none"
              to={"/"}
            >
              ServEase
            </Link>
            <p className="text-white w-lg-50" style={{ textAlign: "justify" }}>
              Servease adalah platform daring yang menyediakan layanan untuk
              mencari dan menemukan penyedia jasa perbaikan dengan cepat dan
              praktis.
            </p>
          </div>
          <div className="col-lg-5 col-12">
            <div className="d-flex flex-lg-row flex-column justify-content-lg-end column-gap-4">
              <div>
                <h5 style={{ color: "#4F50E9" }}>Mitra</h5>
                <div>
                  <Link className="text-decoration-none text-white">
                    Join Mitra
                  </Link>
                </div>
                <div>
                  <Link className="text-decoration-none text-white">Masuk</Link>
                </div>
              </div>
              <div className="d-flex mt-3 mt-lg-0 flex-column lg:align-items-center">
                <h5 style={{ color: "#4F50E9" }}>Ikuti Kami</h5>
                <div className="d-flex column-gap-3">
                  <Link>
                    <img src={facebookLogo} alt="" />
                  </Link>
                  <Link>
                    <img src={instagramLogo} alt="" />
                  </Link>
                  <Link>
                    <img src={tiktokLogo} alt="" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

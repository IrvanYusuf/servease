import React from "react";
import { Link } from "react-router-dom";
import "../../styles/organisms/footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <footer className="container footer">
        <Link
          className="text-primary fs-2 fw-bold text-decoration-none"
          to={"/"}
        >
          ServEase
        </Link>
      </footer>
    </div>
  );
};

export default Footer;

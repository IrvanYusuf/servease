import React from "react";
import { Link } from "react-router-dom";
import "../../styles/atoms/button.css";

const ButtonLink = ({ text, path }) => {
  return (
    <Link
      to={path}
      className="btn-main"
    >
      {text}
    </Link>
  );
};

export default ButtonLink;

import React from "react";
import { Link } from "react-router-dom";
import "../../styles/atoms/button.css";

const ButtonLink = ({ text, path, target }) => {
  return (
    <Link to={path} className="btn-main" target={target}>
      {text}
    </Link>
  );
};

export default ButtonLink;

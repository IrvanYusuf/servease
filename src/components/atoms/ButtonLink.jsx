import React from "react";
import { Link } from "react-router-dom";
import "@/styles/atoms/button.css";

const ButtonLink = ({ text, path, target = "_self", variant = "orange" }) => {
  const variantClass =
    {
      orange: "btn-orange",
      navy: "btn-navy",
      green: "btn-green",
    }[variant] || "btn-orange";

  return (
    <Link to={path} className={`btn-main ${variantClass}`} target={target}>
      {text}
    </Link>
  );
};

export default ButtonLink;

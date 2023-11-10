import { Link } from "react-router-dom";
import React from "react";

const RegistrationLink = ({
  path,
  fontSize,
  fontWeight,
  color,
  text,
  marginStart,
}) => {
  return (
    <Link
      to={path}
      className={`text-decoration-none fw-${fontWeight} ms-${marginStart}`}
      style={{ color: color, fontSize: fontSize }}
    >
      {text}
    </Link>
  );
};

export default RegistrationLink;

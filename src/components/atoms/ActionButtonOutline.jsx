import React from "react";
import "@/styles/atoms/buttonOutline.css";
const ActionButtonOutline = ({
  type,
  text,
  onClick,
  disabled,
  className,
  variant = "orange",
  icon,
}) => {
  const variantClass =
    {
      orange: "btn-main-outline-orange",
      navy: "btn-main-outline-navy",
      green: "btn-main-outline-green",
    }[variant] || "btn-main-outline-orange";
  return (
    <button
      className={`btn-main-outline d-flex justify-content-center align-items-center text-center ${variantClass} ${className}`}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {icon}
      {disabled ? "loading...." : text}
    </button>
  );
};

export default ActionButtonOutline;

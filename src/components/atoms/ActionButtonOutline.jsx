import React from "react";
import "../../styles/atoms/buttonOutline.css";
const ActionButtonOutline = ({ type, text, onClick, disabled,disabledClass }) => {
  return (
    <button
      className={`btn-main-outline ${disabledClass}`}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default ActionButtonOutline;

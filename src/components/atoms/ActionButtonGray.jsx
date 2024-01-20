import React from "react";
import "../../styles/atoms/buttonGray.css";
const ActionButtonGray = ({ type, text, onClick, disabledClass, disabled }) => {
  return (
    <button
      className={`btn-gray ${disabledClass}`}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default ActionButtonGray;

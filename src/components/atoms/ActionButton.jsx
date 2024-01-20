import React from "react";
import "../../styles/atoms/button.css";
const ActionButton = ({ type, text, onClick, disabledClass, disabled }) => {
  return (
    <button
      className={`btn-main ${disabledClass}`}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default ActionButton;

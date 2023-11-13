import React from "react";
import "../../styles/atoms/button.css";
const ActionButton = ({ type, text, onClick }) => {
  return (
    <button className="btn-main" type={type} onClick={onClick}>
      {text}
    </button>
  );
};

export default ActionButton;

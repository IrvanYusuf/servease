import React from "react";
import "../../styles/atoms/actionButton.css";
const ActionButton = ({ type, text, onClick }) => {
  return (
    <button className={"btn-main"} type={type} onClick={onClick}>

    </button>
  );
};

export default ActionButton;

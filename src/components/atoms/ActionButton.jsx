import React from "react";
import "../../styles/atoms/actionButton.css";
const ActionButton = ({ type, text }) => {
  return (
    <button className={"btn-main"} type={type}>
      {text}
    </button>
  );
};

export default ActionButton;

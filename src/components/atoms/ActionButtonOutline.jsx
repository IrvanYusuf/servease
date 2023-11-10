import React from "react";
import "../../styles/atoms/actionButtonOutline.css";
const ActionButton = ({ type, text }) => {
  return (
    <button className={"btn-main-outline"} type={type}>
      {text}
    </button>
  );
};

export default ActionButton;

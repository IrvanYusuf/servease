import React from "react";
import "../../styles/atoms/actionButtonOutline.css";
const ActionButton = ({ type, text, val }) => {
  return (
    <button className={"btn-main-outline"} type={type} onClick={val}>
      {text}
    </button>
  );
};

export default ActionButton;

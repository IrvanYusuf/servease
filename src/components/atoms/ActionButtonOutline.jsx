import React from "react";
import "../../styles/atoms/buttonOutline.css";
const ActionButton = ({ type, text, val }) => {
  return (
    <button className={"btn-main-outline"} type={type} onClick={val}>
      {text}
    </button>
  );
};

export default ActionButton;

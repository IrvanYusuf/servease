import React from "react";
import "../../styles/atoms/button.css";
const ActionButton = ({ type, text, val }) => {
  return (
    <button className={"btn-main"} type={type} onClick={val}>
      {text}
    </button>
  );
};

export default ActionButton;

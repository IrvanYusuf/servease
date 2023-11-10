import React from "react";
import "../../styles/atoms/actionButtonOutline.css";
const ActionButtonOutline = ({ type, text, onClick }) => {
  return (
    <button className={"btn-main-outline"} type={type} onClick={onClick}>
      {text}
    </button>
  );
};

export default ActionButtonOutline;

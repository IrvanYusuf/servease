import React from "react";
import "../../styles/atoms/labelInput.css";

const LabelInput = ({ target, labelText }) => {
  return (
    <label htmlFor={target} className="form-label label">
      {labelText}
    </label>
  );
};

export default LabelInput;

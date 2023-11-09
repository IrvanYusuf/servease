import React from "react";
import "../../styles/atoms/LabelInput.css"

const LabelInput = ({ target, labelText }) => {
  return (
    <label for={target} class="form-label label">
      {labelText}
    </label>
  );
};

export default LabelInput;

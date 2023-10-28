import React from "react";

const LabelInput = ({ target, labelText }) => {
  return (
    <label for={target} class="form-label">
      {labelText}
    </label>
  );
};

export default LabelInput;

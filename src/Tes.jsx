import React, { useState } from "react";

const Tes = () => {
  const [selectedOption, setSelectedOption] = useState("rumah");

  // Function to handle the change in radio button selection
  function onValueChange(event) {
    // Updating the state with the selected radio button's value
    setSelectedOption(event.target.value);
  }
  return (
    <div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="jenis_properti"
          value={"rumah"}
          checked={selectedOption === "rumah"}
          onChange={onValueChange}
          id="rumah"
        />
        <label className="form-check-label" htmlFor="rumah">
          Rumah
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="jenis_properti"
          value={"apartemen"}
          checked={selectedOption === "apartemen"}
          onChange={onValueChange}
          id="apartemen"
        />
        <label className="form-check-label" htmlFor="apartemen">
          Apartemen
        </label>
      </div>

      <div>{selectedOption}</div>
    </div>
  );
};

export default Tes;

import React, { useState } from "react";
import './DropdownWithOther.css'

function DropdownWithOther() {
  const [selectedOption, setSelectedOption] = useState("");
  const [otherValue, setOtherValue] = useState("");

  const handleOptionChange = (event) => {
    const { value } = event.target;
    setSelectedOption(value);
  };

  const handleOtherChange = (event) => {
    const { value } = event.target;
    setOtherValue(value);
  };

  return (
    <div className="dropdown">
      <label className="dropdown__title">How did you hear about us?</label>
      <select className="dropdown__title-select" id="dropdown" value={selectedOption} onChange={handleOptionChange}>
        <option value="">--Select--</option>
        <option value="option1">Google Map</option>
        <option value="option2">Friends</option>
        <option value="option3">Colleagues</option>
        <option value="other">Other</option>
      </select>

      {selectedOption === "other" && (
        <div className="dropdown_filed">
          <label className="otherInput">Please specify:</label>
          <input id="otherInput" type="text" value={otherValue} onChange={handleOtherChange} />
        </div>
      )}
    </div>
  );
}

export default DropdownWithOther;


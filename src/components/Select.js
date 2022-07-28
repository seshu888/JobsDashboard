import React from "react";


const Select = ({ handleChange, name, value, labelText, options }) => {
  return (
    <div className="form-row">
      <label className="form-label">{labelText || name}</label>
      <select value={value} onChange={handleChange} name={name} className="form-input">
        {options.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;

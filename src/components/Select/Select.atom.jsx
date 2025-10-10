import React from "react";

const Select = ({ selectName, options = [] }) => {
  return (
    <select name={selectName} id={selectName}>
      {options &&
        options.map((option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          );
        })}
    </select>
  );
};

export default Select;

import React from "react";
import styles from "./Select.module.css";

const Select = ({ selectName, options = [], styling = {} }) => {
  return (
    <select
      className={styles.base}
      style={styling}
      name={selectName}
      id={selectName}
    >
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

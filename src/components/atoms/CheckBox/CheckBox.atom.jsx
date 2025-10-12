import React from "react";
import styles from "./CheckBox.module.css";

const CheckBox = ({ label, checked, onChange, error }) => {
  return (
    <div className={styles.wrapper}>
      <label className={`${styles.label} ${error ? styles.errorLabel : ""}`}>
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          className={`${styles.checkbox} ${error ? styles.errorCheckbox : ""}`}
        />
        <span className={styles.text}>{label}</span>
      </label>

      {error && <p className={styles.errorMessage}>{error}</p>}
    </div>
  );
};

export default CheckBox;

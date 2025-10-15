import React from "react";
import styles from "./Input.module.css";

const Input = ({
  id,
  type,
  value,
  onChange,
  placeholder,
  disabled = false,
  required = false,
  className,
  variant,
}) => {
  const variants = Array.isArray(variant) ? variant : [variant];
  const validated = variants
    .map((v) => styles[v])
    .filter(Boolean)
    .join(" ");

  return (
    <input
      id={id}
      type={type}
      value={value}
      onBlur={onChange}
      placeholder={placeholder}
      disabled={disabled}
      required={required}
      className={`${styles.inputField} ${validated} ${className || ""}`}
    />
  );
};

export default Input;

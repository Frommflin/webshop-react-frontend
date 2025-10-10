import React from "react";
import styles from "./HelperText.module.css";

const HelperText = ({
  text = "Helper text is missing",
  variant,
  styling = {},
}) => {
  const variants = Array.isArray(variant) ? variant : [variant];
  const variantClasses = variants
    .map((v) => styles[v])
    .filter(Boolean)
    .join(" ");

  return (
    <div className={`${styles.base} ${variantClasses}`} style={styling}>
      {text}
    </div>
  );
};

export default HelperText;

import React from "react";
import styles from "./Badge.module.css";

const Badge = ({ text, variant, classNames, styling = {} }) => {
  const variants = Array.isArray(variant) ? variant : [variant];

  const variantClasses = variants
    .map((v) => styles[v])
    .filter(Boolean)
    .join(" ");

  return (
    <div
      className={`${styles.badge} ${variantClasses} ${classNames}`}
      style={styling}
    >
      {text}
    </div>
  );
};

export default Badge;

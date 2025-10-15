import React from "react";
import Label from "@/components/atoms/Label/Label.atom";
import Input from "@/components/atoms/Input/Input.atom";

const InputField = ({
  label,
  inputId,
  type,
  value,
  placeholder,
  disabled,
  onChange,
  validationClass,
}) => {
  return (
    <>
      <Label text={label} htmlFor={inputId} />
      <Input
        id={inputId}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        disabled={disabled}
        variant={validationClass}
      />
    </>
  );
};

export default InputField;

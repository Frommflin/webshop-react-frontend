import React from "react";
import Label from "../Label/Label.atom";
import Input from "../Input/Input.atom";

const InputField = ({
  label,
  inputId,
  type,
  value,
  placeholder,
  disabled,
  onChange,
}) => {
  return (
    <div>
      <Label text={label} htmlFor={inputId} />
      <Input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        disabled={disabled}
      />
    </div>
  );
};

export default InputField;

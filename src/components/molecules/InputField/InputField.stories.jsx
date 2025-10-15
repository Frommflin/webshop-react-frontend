import { useState } from "react";
import InputField from "./InputField.molecule";

export default {
  title: "Components/Molecules/InputField",
  component: InputField,
};

export const Default = {};

export const TextInput = {
  args: {
    label: "Text Input",
    inputId: "input1",
    type: "text",
    placeholder: "This is a placeholder",
    onChange: (e) => console.log(e.target.value),
  },
};

export const PasswordInput = {
  args: {
    label: "Password",
    inputId: "input2",
    type: "password",
    placeholder: "Enter password",
    onChange: (e) => console.log(e.target.value),
  },
};

export const InputWithValidation = () => {
  const [error, setError] = useState("");

  return (
    <InputField
      label="Enter text"
      inputId="validate"
      type="text"
      placeholder="Example"
      validationClass={error}
      onChange={(e) => {
        e.target.value == "" ? setError("error") : setError("");
      }}
    />
  );
};

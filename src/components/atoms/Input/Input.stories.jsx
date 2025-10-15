import { useState } from "react";
import Input from "./Input.atom";

export default {
  title: "Components/Atoms/Input",
  component: Input,
};

export const Default = {
  args: {},
};

export const Testpasswordtype = {
  args: {
    type: "password",
  },
};

export const DisabledField = {
  args: {
    placeholder: "Kan inte ändras",
    type: "text",
    disabled: true,
    onChange: () => {},
  },
};

export const ValidationField = () => {
  const [error, setError] = useState("");

  return (
    <Input
      id="validation"
      placeholder="Värde måste anges"
      type="text"
      variant={error}
      onChange={(e) => {
        e.target.value == "" ? setError("error") : setError("");
      }}
    />
  );
};

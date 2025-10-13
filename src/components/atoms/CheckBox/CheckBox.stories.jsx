import React, { useState } from "react";
import CheckBox from "./CheckBox.atom";

export default {
  title: "Components/Atoms/CheckBox",
  component: CheckBox,
  argTypes: {
    label: { control: "text" },
    error: { control: "text" },
    checked: { control: "boolean" },
  },
};

export const Default = () => {
  const [checked, setChecked] = useState(false);

  const handleChange = (e) => {
    console.log("Checkbox changed:", e.target.checked);
    setChecked(e.target.checked);
  };

  return (
    <CheckBox
      label="I agree to the terms and conditions"
      checked={checked}
      onChange={handleChange}
    />
  );
};

export const Checked = {
  args: {
    label: "Receive newsletters",
    checked: true,
    onChange: () => console.log("Clicked checked state"),
  },
};

export const WithError = {
  args: {
    label: "Accept privacy policy",
    checked: false,
    error: "You must agree before continuing",
  },
};

export const NoOnChangeProvided = {
  args: {
    label: "I accept the terms",
    checked: false,
  },
};

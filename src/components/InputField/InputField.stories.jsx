import InputField from "./InputField.molecule";

export default {
  title: "Components/InputField",
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

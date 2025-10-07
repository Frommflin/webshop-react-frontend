import Label from "./Label.atom";

export default {
  title: "Components/Label",
  component: Label,
};

export const Default = {
  args: {
    text: "Username",
    htmlFor: "username",
  },
};

export const PasswordLabel = {
  args: {
    text: "Password",
    htmlFor: "password",
  },
};

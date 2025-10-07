import Button from "./Button.atom";

export default {
  title: "Components/Button",
  component: Button,
};

export const Default = {};

export const WithOnclick = {
  args: {
    label: "Click me",
    onClick: () => alert("Button is clicked"),
  },
};

export const WithStyling = {
  args: {
    label: "Styled Button",
    onClick: () => alert("Styled button is clicked"),
    styling: {
      backgroundColor: "#a3a854",
      borderColor: "#bbff00",
    },
  },
};

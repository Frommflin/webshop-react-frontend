import Button from "./Button.atom";

export default {
  title: "Components/Atoms/Button",
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

export const WithIcon = {
  args: {
    onClick: () => alert("Icon button clicked"),
    icon: (
      <img
        src="https://img.icons8.com/?id=s5NUIabJrb4C&format=png&color=000000"
        alt="icon"
      />
    ),
  },
};

export const WithIconAndLabel = {
  args: {
    label: "Settings",
    onClick: () => alert("Icon+Label button clicked"),
    icon: (
      <img
        src="https://img.icons8.com/?id=s5NUIabJrb4C&format=png&color=000000"
        alt="icon"
      />
    ),
  },
};

export const StyledWithIconAndLabel = {
  args: {
    label: "Styled Icon",
    onClick: () => alert("We're getting fancy"),
    icon: (
      <img
        src="https://img.icons8.com/?id=s5NUIabJrb4C&format=png&color=000000"
        alt="icon"
      />
    ),
    styling: {
      height: "50px",
      backgroundColor: "#bba",
      color: "#000",
    },
  },
};

export const Disabled = {
  args: {
    label: "Disabled button",
    isDisabled: true,
    onClick: () => alert("This alert should never be seen"),
  },
};

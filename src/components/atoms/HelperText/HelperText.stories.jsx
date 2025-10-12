import HelperText from "./HelperText.atom";

export default {
  title: "Components/Atoms/HelperText",
  component: HelperText,
};

export const Default = {};

export const HelpingText = {
  args: {
    text: "Hi, I am here to help you!",
  },
};

export const ErrorHelper = {
  args: {
    text: "Something has gone wrong!!",
    variant: "error",
  },
};

export const StyledHelper = {
  args: {
    text: "This is a styled helper",
    styling: {
      color: "#278074",
      border: "1px dotted #1a574f",
      borderRadius: "1rem",
      padding: "1rem 3rem",
    },
  },
};

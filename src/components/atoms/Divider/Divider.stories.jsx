import Divider from "./Divider.atom";

export default {
  title: "Components/Atoms/Divider",
  component: Divider,
};

export const Default = {};

export const Vertical = {
  args: {
    direction: "vertical",
  },
};

export const Styled = {
  args: {
    styling: {
      borderColor: "#0aa",
      width: "50%",
    },
  },
};

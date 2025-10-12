import Textarea from "./Textarea.atom";

export default {
  title: "Components/Atoms/Textarea",
  component: Textarea,
};

export const Default = {
  args: {
    name: "textarea1",
    placeholder: "This is a textarea",
  },
};

export const Styled = {
  args: {
    name: "textarea2",
    placeholder: "This is the placeholder",
    styling: {
      height: "200px",
      width: "300px",
      borderColor: "#0080ff",
      color: "#0080ff",
    },
  },
};

import Select from "./Select.atom";

export default {
  title: "Components/Atoms/Select",
  component: Select,
};

export const Default = {
  args: {
    selectName: "select1",
    options: [
      { label: "Option 1", value: "opt1" },
      { label: "Option 2", value: "opt2" },
    ],
  },
};

export const StyledSelect = {
  args: {
    selectName: "styled",
    options: [
      { label: "Option 1", value: "opt1" },
      { label: "Option 2", value: "opt2" },
    ],
    styling: {
      borderColor: "#0066ff",
      borderRadius: "2rem",
      fontWeight: "bold",
      color: "#0066ff",
    },
  },
};

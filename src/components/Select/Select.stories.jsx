import Select from "./Select.atom";

export default {
  title: "Components/Select",
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

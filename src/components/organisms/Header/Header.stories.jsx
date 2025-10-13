import { MemoryRouter } from "react-router-dom";
import Header from "./Header.organism";
import { withRouter } from "@sb/decorators";

export default {
  title: "Components/Organisms/Header",
  component: Header,
  decorators: [withRouter],
};

export const Default = {
  args: {
    title: "Header",
    links: [
      { pageName: "Page1", path: "/" },
      { pageName: "Page2", path: "/page2" },
    ],
  },
};

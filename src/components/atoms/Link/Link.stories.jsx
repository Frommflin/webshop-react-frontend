import { MemoryRouter } from "react-router-dom";
import Link from "./Link.atom";

export default {
  title: "Components/Atoms/Link",
  component: Link,
  decorators: [
    (Story) => {
      return (
        <MemoryRouter>
          <Story />
        </MemoryRouter>
      );
    },
  ],
};

export const Default = {
  args: {
    label: "This is a NavLink",
    path: "/",
  },
};

export const ExternalLink = {
  args: {
    label: "This is an external link, aka a simple <a> tag",
    path: "www.google.com",
    external: true,
  },
};

export const StyledLink = {
  args: {
    label: "Styled Link",
    path: "/",
    styling: {
      color: "#77001a",
      fontWeight: "bold",
      textDecoration: "line-through",
    },
  },
};

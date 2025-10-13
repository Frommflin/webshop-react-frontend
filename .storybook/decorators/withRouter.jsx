import React from "react";
import { MemoryRouter } from "react-router-dom";

const withRouter = (Story) => (
  <MemoryRouter>
    <Story />
  </MemoryRouter>
);

export default withRouter;

import CookieToggler from "./CookieToggler.organism";

export default {
  title: "Components/Organisms/CookieToggler",
  component: CookieToggler,
};

export const Default = {
  args: {
    onAccept: () => console.log("Cookies accepted"),
    onRemoveCookies: () => console.log("Cookies deleted"),
    onRemoveUserData: () => console.log("User data removed"),
    onDataAccessRequest: () => console.log("User data requested"),
  },
};

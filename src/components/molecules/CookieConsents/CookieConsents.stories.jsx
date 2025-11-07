import CookieConsents from "./CookieConsents.molecule";

export default {
  title: "Components/Molecules/CookieConsents",
  component: CookieConsents,
};

export const Default = {
  args: {
    onAccept: () => console.log("Cookies accepted"),
    onRemoveCookies: () => console.log("Cookies deleted"),
    onRemoveUserData: () => console.log("User data removed"),
    onDataAccessRequest: () => console.log("User data requested"),
  },
};

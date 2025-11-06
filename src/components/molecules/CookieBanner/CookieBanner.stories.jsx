import CookieBanner from "./CookieBanner.molecule";

export default {
  title: "Components/Molecules/CookieBanner",
  component: CookieBanner,
};

export const Default = {
  args: {
    onClick: () => console.log("Cookies accepted"),
  },
};

import Image from "./Image.atom";

export default {
  title: "Components/Image",
  component: Image,
};

export const Default = {};

export const WithImg = {
  args: {
    path: "https://picsum.photos/id/1/200",
    alt: "Random test picture",
  },
};

export const ImgWithStyling = {
  args: {
    path: "https://picsum.photos/id/1/200",
    alt: "Random test picture",
    styling: {
      borderRadius: "10px",
      borderColor: "#f00",
      boxShadow: "#000 0px 5px 15px",
    },
  },
};

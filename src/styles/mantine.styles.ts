import { MantineThemeOverride } from "@mantine/core";

const theme: MantineThemeOverride = {
  colors: {
    white: ["#FFFFFF"],
    grey100: ["#F5F5F6"],
    grey200: ["#EAEBED"],
    grey300: ["#D5D6DC"],
    grey500: ["#ACADB9"],
    grey600: ["#7B7C88"],
    grey900: ["#343A40"],
    black: ["#232134"],
    blue100: ["#DEECFF"],
    blue200: ["#C9E0FF"],
    blue300: ["#B7D6FF"],
    blue400: ["#92C1FF"],
    blue500: ["#5E96FC"],
    blue600: ["#3B7CD3"],
  },
  fontFamily: "Inter",
  breakpoints: {
    xs: "32em",
    sm: "48em",
    md: "64em",
    lg: "75em",
    xl: "88em",
  },
};

export default theme;

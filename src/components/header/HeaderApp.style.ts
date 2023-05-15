import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  header: {
    background: theme.colors.white,
    display: "flex",
    alignItems: "center",
    maxHeight: "none",
    height: 84,
  },
  wrapper: {
    maxWidth: 1440,
    width: "100%",
    display: "flex",
    alignItems: "center",
    padding: "10px 162px",
    gap: 280,
    [theme.fn.smallerThan("lg")]: {
      padding: 0,
      gap: 0,
      justifyContent: "space-around",
    },
    [theme.fn.smallerThan("xs")]: {
      padding: 0,
      gap: 0,
      justifyContent: "space-around",
    },
  },

  links: {
    display: "flex",
    padding: 0,
    paddingTop: 2,
    gap: 60,
    letterSpacing: 1.25,
    [theme.fn.smallerThan("xs")]: {
      display: "none",
    },
  },

  burger: {
    [theme.fn.largerThan("xs")]: {
      display: "none",
    },
  },

  link: {
    color: theme.colors.black,
    textDecoration: "none",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: 16,
  },

  linkActive: {
    "&, &:hover": {
      color: theme.colors.blue500,
    },
  },
}));

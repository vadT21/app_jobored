import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  links: {
    display: "flex",
    padding: 0,
    paddingTop: 2,
    gap: 60,
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

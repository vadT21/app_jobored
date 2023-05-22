import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  links: {
    paddingTop: 2,
    [theme.fn.smallerThan("xs")]: {
      display: "none",
    },
  },
  burger: {
    [theme.fn.largerThan("xs")]: {
      display: "none",
    },
  },
  hiddenNavMenu: {
    [theme.fn.largerThan("xs")]: {
      display: "none",
      zIndex: -1,
    },
  },
}));

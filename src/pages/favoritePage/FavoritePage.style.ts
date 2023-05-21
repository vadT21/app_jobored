import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  container: {
    maxWidth: 773,
  },
  list: {
    minHeight: 612,
    boxSizing: "border-box",
    "@media (max-height: 600px)": {
      minHeight: "unset",
    },
    [theme.fn.smallerThan("xs")]: {
      minHeight: "unset",
    },
  },
  pagination: {
    paddingTop: 96,
    "@media (max-height: 600px)": {
      paddingTop: 12,
      paddingBottom: 24,
    },
    [theme.fn.smallerThan("xs")]: {
      paddingTop: 12,
      paddingBottom: 24,
    },
  },
}));

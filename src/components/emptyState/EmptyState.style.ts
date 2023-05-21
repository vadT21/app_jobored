import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  title: {
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: 24,
    color: theme.colors.grey900,
    [theme.fn.smallerThan("sm")]: {
      fontSize: 20,
    },
  },
}));

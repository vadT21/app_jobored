import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  main: {
    padding: "124px 0 0 0",
    backgroundColor: "#F5F5F5",
    [theme.fn.smallerThan("sm")]: {
      padding: "96px 0 0 0",
    },
  },
}));

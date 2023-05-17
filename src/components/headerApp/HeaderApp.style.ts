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
}));

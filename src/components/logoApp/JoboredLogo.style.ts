import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  wrapper: {
    background: theme.colors.white,
    display: "flex",
    alignItems: "center",
    padding: 0,
    gap: 12,
  },
  title: {
    color: theme.colors.black,
    fontFamily: "Poppins",
    fontWeight: 600,
    fontSize: 24,
    letterSpacing: -0.33,
    userSelect: "none",
  },
}));

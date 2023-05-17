import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  root: {
    paddingTop: 78,
    gap: 32,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },

  title: {
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: 24,
    color: theme.colors.grey900,
    // [theme.fn.smallerThan("sm")]: {
    //   fontSize: rem(32),
    // },
  },

  button: {
    width: 164,
    height: 42,
    background: theme.colors.blue100,
    borderRadius: 8,

    color: theme.colors.blue600,
    fontFamily: "Open Sans",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: 14,
  },
}));

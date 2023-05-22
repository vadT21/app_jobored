import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  rootList: {
    listStyle: "none",
    display: "flex",
    padding: 0,
    gap: 60,
    [theme.fn.smallerThan("xs")]: {
      flexDirection: "column",
      alignItems: "flex-end",
      gap: 20,
    },
  },
  link: {
    cursor: "pointer",
    color: theme.colors.black,
    textDecoration: "none",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: 16,
    ":hover": {
      color: theme.colors.blue400,
    },
  },

  linkActive: {
    "&, :hover": {
      color: theme.colors.blue500,
    },
  },
}));

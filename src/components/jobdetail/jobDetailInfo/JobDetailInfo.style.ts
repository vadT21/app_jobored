import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  card: {
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    padding: "26px 48px 26px 24px !important",
    gap: 12.5,
    background: "#FFFFFF",
    border: `1px solid ${theme.colors.grey200}`,
    borderRadius: 12,
  },

  link: {
    display: "block",
    textDecoration: "none",
    color: theme.colors.black,
  },
  title: {
    fontWeight: 700,
    fontSize: 28,
    color: theme.colors.black,
    lineHeight: 1,
  },
  textPoint: {
    [theme.fn.smallerThan("xs")]: {
      display: "none",
    },
  },
  information: {
    padding: 0,
    gap: 12,
    lineHeight: 1,
    fontSize: 20,
    [theme.fn.smallerThan("xs")]: {
      flexDirection: "column",
      alignItems: "flex-start",
    },
  },
  typeOfWork: {
    fontWeight: 400,
    fontStyle: "normal",
  },
  location: {
    gap: 12,
    fontWeight: 400,
    fontSize: 16,
  },
  starPosition: {
    position: "absolute",
    top: 16,
    right: 0.33,
  },
}));

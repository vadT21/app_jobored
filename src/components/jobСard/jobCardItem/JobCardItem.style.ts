import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  card: {
    cursor: "pointer",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: "22px 48px 23px 23px !important",
    marginLeft: -2,
    justifyContent: "space-between",
    height: 137,
    background: "#FFFFFF",
    border: `1px solid ${theme.colors.grey200}`,
    borderRadius: 12,
    lineHeight: 1,
    [theme.fn.smallerThan("xs")]: {
      height: "200px !important",
      padding: "16px 48px 17px 17 px !important",
    },
    [theme.fn.smallerThan("md")]: {
      height: 160,
    },
  },

  title: {
    fontWeight: 600,
    fontSize: 20,
    lineHeight: 1.4,
    width: "100%",
    color: theme.colors.blue500,
    ":hover": {
      color: theme.colors.blue400,
    },

    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    [theme.fn.smallerThan("xs")]: {
      whiteSpace: "normal",
    },
  },
  information: {
    padding: 0,
    gap: 12,

    fontSize: 16,
    [theme.fn.smallerThan("md")]: {
      fontSize: 13,
    },
    [theme.fn.smallerThan("sm")]: {
      fontSize: 16,
    },
    [theme.fn.smallerThan("xs")]: {
      flexDirection: "column",
      alignItems: "flex-start",
      gap: 1,
    },
  },
  typeOfWork: {
    fontWeight: 400,
    fontStyle: "normal",
  },
  textPoint: {
    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
    [theme.fn.smallerThan("sm")]: {
      display: "block",
    },
    [theme.fn.smallerThan("xs")]: {
      display: "none",
    },
  },
  location: {
    gap: 12,
    fontWeight: 400,
    fontSize: 16,
    marginLeft: 2,
  },
  starPosition: {
    position: "absolute",
    top: 16,
    padding: 0,
    right: 16.33,
    width: 36,
    ":hover": {
      background: theme.colors.grey100,
      borderRadius: "50%",
      scale: 1.5,
    },
  },
}));

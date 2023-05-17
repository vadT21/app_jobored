import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  card: {
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    padding: "24px !important",
    marginLeft: -2,
    gap: 12.5,
    height: 137,
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
    fontWeight: 600,
    fontSize: 20,
    color: theme.colors.blue500,
    ":hover": {
      color: theme.colors.blue400,
    },
    lineHeight: 1,
  },
  information: {
    padding: 0,
    gap: 12,
    lineHeight: 1,
    fontSize: 16,
  },
  typeOfWork: {
    fontWeight: 400,
    fontStyle: "normal",
  },
  textPoint: {},
  location: {
    gap: 12,
    fontWeight: 400,
    fontSize: 16,
    marginTop: -5,
    marginRight: -1,
  },
  starPosition: {
    position: "absolute",
    top: 16,
    right: 0.33,
  },
}));

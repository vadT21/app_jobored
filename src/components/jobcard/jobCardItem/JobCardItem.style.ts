import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  card: {
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    padding: 24,
    gap: 13,
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
    lineHeight: 1,
  },
  information: {
    padding: 0,
    gap: 12,
    lineHeight: 1,
  },
  typeOfWork: {
    fontWeight: 400,
    fontSize: 16,
  },
  location: {
    padding: 0,
    gap: 8,
    fontWeight: 400,
    fontSize: 16,
  },
  starPosition: {
    position: "absolute",
    top: 8,
    right: 0,
  },
}));

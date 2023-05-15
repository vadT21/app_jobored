import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  wrapper: {
    height: 48,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0px 12px",
    gap: 10,
    border: `1px solid ${theme.colors.grey200}`,
    borderRadius: 8,
    boxSizing: "border-box",
    background: theme.colors.white,
    [theme.fn.smallerThan("xs")]: {
      padding: 0,
      gap: 0,
      justifyContent: "space-around",
    },
  },
  input: {
    paddingLeft: "22px !important",
    paddingTop: "4px !important",
    border: "none",
    fontWeight: 400,
    fontSize: 14,
    color: theme.colors.grey500,
  },
  rightSection: {
    paddingRight: 32,
  },
  searchButton: {
    height: 32,
    fontWeight: 500,
    fontSize: 14,
    color: theme.colors.white,
    background: theme.colors.blue500,
    borderRadius: 8,
  },
}));

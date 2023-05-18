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
    ":hover, :valid": {
      borderColor: theme.colors.blue500,
    },
  },
  input: {
    paddingLeft: "22px !important",
    paddingRight: "84px !important",
    border: "none",
    fontWeight: 400,
    fontSize: 14,
    caretColor: theme.colors.blue500,
    color: theme.colors.black,
    "::placeholder": {
      color: theme.colors.grey500,
    },
  },
  rightSection: {
    paddingRight: 33,
    [theme.fn.smallerThan("xs")]: {
      paddingRight: 20,
    },
  },
  searchButton: {
    height: 32,
    fontWeight: 500,
    fontSize: 14,
    color: theme.colors.white,
    background: theme.colors.blue500,
    borderRadius: 8,
    padding: "0 20px",
    "&: hover": {
      background: theme.colors.blue400,
    },
    "&: active": {
      background: theme.colors.blue600,
    },
    [theme.fn.smallerThan("xs")]: {
      padding: "0 10px",
    },
  },
  icon: {
    [theme.fn.smallerThan("xs")]: {
      display: "none",
    },
  },
}));

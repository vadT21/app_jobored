import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  root: {
    paddingTop: 1,
    width: "100%",
    flexDirection: "column",
    gap: 8,
  },
  label: {
    fontWeight: 700,
    fontSize: 16,
    color: theme.colors.black,
    lineHeight: 1.1875,
    paddingBottom: 6,
    userSelect: "none",
  },
  wrapper: {
    height: 42,
    boxSizing: "border-box",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",

    border: `1px solid ${theme.colors.grey300}`,
    borderRadius: 8,
    background: theme.colors.white,
    ":hover, :active": {
      borderColor: theme.colors.blue500,
    },
  },
  input: {
    cursor: "default",
    border: "none",
    fontWeight: 400,
    fontSize: 14,
    height: 20,
    color: theme.colors.black,
    paddingLeft: "12px !important",
    caretColor: theme.colors.blue500,
    "::placeholder": {
      letterSpacing: 0.5,
    },
  },
  control: {
    border: "none",
    padding: 0,
    color: theme.colors.grey500,
    ":hover": {
      color: theme.colors.blue400,
      background: "transparent !important",
    },
    ":active": {
      color: theme.colors.blue500,
    },
  },
  rightSection: {
    padding: "6.5px 0px",
    marginRight: 2,
  },
}));

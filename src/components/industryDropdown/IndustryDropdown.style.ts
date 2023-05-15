import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  root: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: 8,
  },
  label: {
    fontWeight: 700,
    fontSize: 16,
    color: theme.colors.black,
    lineHeight: 1.1875,
    letterSpacing: 0.7,
    marginTop: -0.5,
  },
  wrapper: {
    height: 42,
    boxSizing: "border-box",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 10,
    border: `1px solid ${theme.colors.grey300}`,
    borderRadius: 8,
    background: theme.colors.white,
    "&:hover, &:active": {
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
      letterSpacing: 0.7,
    },
  },
  dropdown: {
    background: theme.colors.white,
    borderRadius: 8,
    ".mantine-ScrollArea-scrollbar": {
      width: "8px",
      background: "transparent",
    },
    ".mantine-ScrollArea-thumb": {
      backgroundColor: theme.colors.grey500,
    },
  },
  item: {
    "&:hover": {
      background: theme.colors.blue100,
    },
    "&:active": {
      backgroundColor: theme.colors.blue500,
    },
    "&[data-selected]": {
      "&, &:hover": {
        backgroundColor: theme.colors.blue500,
        color: theme.colors.white,
      },
    },
  },
  icon: {
    left: "auto",
    right: 0,
  },
  rightSection: {
    display: "none",
  },
}));

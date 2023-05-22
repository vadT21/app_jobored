import { createStyles } from "@mantine/core";

export const useStyles = createStyles(
  (theme, { isOpen }: { isOpen: boolean }) => ({
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
      marginTop: -0.5,
      userSelect: "none",
    },
    wrapper: {
      height: 42,
      boxSizing: "border-box",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: 10,
    },
    input: {
      height: "100%",
      fontWeight: 400,
      fontSize: 14,
      color: theme.colors.black,
      padding: "0 26px 0 11px !important",
      caretColor: theme.colors.blue500,
      textOverflow: "ellipsis",
      border: `1px solid ${theme.colors.grey300}`,
      borderRadius: 8,
      background: theme.colors.white,
      ":hover, :focus": {
        borderColor: theme.colors.blue500,
      },
    },
    dropdown: {
      background: theme.colors.white,
      borderRadius: 8,

      ".mantine-ScrollArea-scrollbar": {
        width: "8px !important",
        background: "transparent",
      },
      ".mantine-ScrollArea-thumb": {
        backgroundColor: theme.colors.grey500,
      },
    },
    item: {
      whiteSpace: "normal",
      ":hover": {
        background: theme.colors.blue100,
      },
      ":active": {
        backgroundColor: theme.colors.blue500,
      },
      "[data-selected]": {
        "&, &:hover": {
          backgroundColor: theme.colors.blue500,
          color: theme.colors.white,
        },
      },
    },
    icon: {
      left: "auto",
      right: 3,
    },
    control: {
      "&:hover": {
        color: theme.colors.blue400,
        background: "transparent !important",
      },
      "&:active": {
        color: theme.colors.blue500,
      },
    },
    rightSection: {
      display: "none",
    },
    iconArrow: {
      transition: "transform 150ms ease",
      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
      color: isOpen ? theme.colors.blue500 : theme.colors.grey500,
    },
  }),
);

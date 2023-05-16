import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => {
  return {
    root: {
      color: theme.colors.grey500,
      background: "transparent",
      border: "none",
      padding: 0,
      height: 20,
      ":hover": {
        color: theme.colors.blue400,
        background: "transparent",
      },
      ":active": {
        color: theme.colors.blue500,
        background: "transparent",
      },
    },
    inner: {
      fontWeight: 500,
      fontSize: 14,
      marginTop: "-3px !important",
    },
    icon: {
      marginLeft: "4px !important",
    },
  };
});

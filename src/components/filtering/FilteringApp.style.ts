import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => {
  return {
    container: {
      boxSizing: "border-box",
      display: "flex",
      flexDirection: "column",
      padding: 20,
      gap: 20,
      backgroundColor: theme.colors.white,
      border: `1px solid ${theme.colors.grey200}`,
      borderRadius: 12,
      maxWidth: 315,
      margin: 0,
    },

    params: {
      paddingTop: 12,
    },
    control: {
      width: "100%",
      borderRadius: 8,
      height: 40,
      background: theme.colors.blue500,
      color: theme.colors.white,
      fontWeight: 500,
      fontSize: 14,
      letterSpacing: 1.25,
      "&: hover": {
        background: theme.colors.blue400,
      },
      "&: active": {
        background: theme.colors.blue600,
      },
    },
  };
});

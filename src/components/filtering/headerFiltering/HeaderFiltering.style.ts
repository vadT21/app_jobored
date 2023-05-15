import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => {
  return {
    header: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      boxSizing: "border-box",
    },
    title: {
      fontStyle: "normal",
      fontWeight: 700,
      fontSize: 20,
      color: theme.colors.black,
      lineHeight: 1,
      marginTop: -5,
      letterSpacing: 0.65,
    },
  };
});

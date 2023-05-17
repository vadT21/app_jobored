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
      marginTop: -4,
      userSelect: "none",
    },
    clearButtonPos: {
      margin: 0,
      padding: 0,
      marginTop: -1,
    },
  };
});

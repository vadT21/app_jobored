import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => {
  return {
    clearButton: {
      fontWeight: 500,
      fontSize: 14,
      color: theme.colors.grey500,
      background: "transparent",
      border: "none",
      padding: 0,
      gap: 4,
      height: 20,
      letterSpacing: 0.75,
      width: 115,
    },
  };
});

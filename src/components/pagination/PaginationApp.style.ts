import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => {
  return {
    control: {
      color: theme.colors.black,
      border: `1px solid ${theme.colors.grey300}`,
      borderRadius: 4,
      "&[data-active]": {
        backgroundColor: theme.colors.blue500,
        color: theme.colors.white,
      },
    },
  };
});

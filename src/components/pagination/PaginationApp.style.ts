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
        ":hover": {
          background: `${theme.colors.blue500} !important`,
        },
      },
      ":hover": {
        background: `${theme.colors.blue100} !important`,
      },
      ":first-of-type": {
        color: theme.colors.grey600,
      },
      ":last-of-type": {
        color: theme.colors.grey600,
      },
    },
  };
});

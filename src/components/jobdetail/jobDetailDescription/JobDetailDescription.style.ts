import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  card: {
    overflow: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: "24px !important",
    border: `1px solid ${theme.colors.grey200}`,
    borderRadius: 12,
    backgroundColor: theme.colors.white,
    "& > b": {
      fontSize: 18,
    },
    "& > p": {
      margin: 8,
    },
    "& > ul": {
      margin: 4,
    },
  },
}));

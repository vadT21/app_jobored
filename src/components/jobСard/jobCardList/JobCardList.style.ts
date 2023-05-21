import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  cardList: {
    gap: 16,

    [theme.fn.smallerThan("xs")]: {
      padding: 0,
      gap: 8,
      justifyContent: "space-around",
    },
  },
}));

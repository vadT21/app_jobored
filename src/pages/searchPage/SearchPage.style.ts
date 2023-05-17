import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => {
  return {
    container: {
      padding: "0 162px",
      maxWidth: 1440,
      [theme.fn.smallerThan("lg")]: {
        padding: "0 80px",
      },
      [theme.fn.smallerThan("md")]: {
        padding: "0 40px",
      },
      [theme.fn.smallerThan("sm")]: {
        padding: "0 10px",
      },
    },
    gridPage: {
      gap: 10,
      [theme.fn.smallerThan("sm")]: {
        flexDirection: "column",
      },
    },
    filtering: {
      maxWidth: 335,
      [theme.fn.smallerThan("sm")]: {
        maxWidth: "100%",
      },
    },
    searchAndList: {
      maxWidth: "100%",
      flex: 1,
    },
  };
});

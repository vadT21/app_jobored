import { createStyles } from "@mantine/core";

export const useStyles = createStyles(() => {
  return {
    loader: {
      display: "flex",
      minHeight: "50vh",
      margin: "0 auto",
      width: 64,
      background: "transparent",
    },
  };
});

import { Loader } from "@mantine/core";
import { useStyles } from "./LoaderApp.style";

const LoaderApp = () => {
  const { classes, theme } = useStyles();
  return (
    <Loader
      className={classes.loader}
      variant="dots"
      color={theme.colors.blue500[0]}
    />
  );
};

export default LoaderApp;

import { Paper, Title } from "@mantine/core";
import { useStyles } from "./HeaderFiltering.style";
import ClearButton from "../../clearButton/ClearButton";

const HeaderFIltering = () => {
  const { classes } = useStyles();
  return (
    <Paper component="header" className={classes.header}>
      <Title order={2} className={classes.title}>
        Фильтры
      </Title>
      <ClearButton />
    </Paper>
  );
};

export default HeaderFIltering;

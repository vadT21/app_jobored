import { Flex, Button } from "@mantine/core";
import { Link } from "react-router-dom";
import { ROUTE_LINKS } from "../../constants";
import { useStyles } from "./EmptyPage.style.ts";
import EmptyState from "../../components/emptyState/EmptyState.tsx";

export const EmptyPage = () => {
  //стили
  const { classes } = useStyles();
  return (
    <Flex className={classes.root}>
      <EmptyState title="Упс, здесь еще ничего нет!" />
      <Link to={ROUTE_LINKS.searchPage.link}>
        <Button className={classes.button}>Поиск Вакансий</Button>
      </Link>
    </Flex>
  );
};

export default EmptyPage;

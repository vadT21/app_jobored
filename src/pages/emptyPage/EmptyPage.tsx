import { Title, Flex, Button } from "@mantine/core";
import { Link } from "react-router-dom";
import { IconEmptyState } from "../../components/icons/index.ts";
import { ROUTE_LINKS } from "../../constants";
import { useStyles } from "./EmptyPage.style.ts";

export const EmptyPage = () => {
  const { classes } = useStyles();
  return (
    <Flex className={classes.root}>
      <IconEmptyState />
      <Title order={2} className={classes.title}>
        Упс, здесь еще ничего нет!
      </Title>
      <Link to={ROUTE_LINKS.searchPage.link}>
        <Button className={classes.button}>Поиск Вакансий</Button>
      </Link>
    </Flex>
  );
};

export default EmptyPage;

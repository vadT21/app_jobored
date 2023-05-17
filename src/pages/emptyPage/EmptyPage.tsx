import { Title, Flex, Button } from "@mantine/core";
import { IconEmptyState } from "../../components/icons/index.ts";
import { useStyles } from "./EmptyPage.style.ts";

export const EmptyPage = () => {
  const { classes } = useStyles();
  return (
    <Flex className={classes.root}>
      <IconEmptyState />
      <Title order={2} className={classes.title}>
        Упс, здесь еще ничего нет!
      </Title>
      <Button className={classes.button}>Поиск Вакансий</Button>
    </Flex>
  );
};

export default EmptyPage;

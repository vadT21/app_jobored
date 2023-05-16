import { createStyles, Title, Flex, Button, rem } from "@mantine/core";
import { IconEmptyState } from "../components/icons/index.ts";

const useStyles = createStyles((theme) => ({
  root: {
    paddingTop: 78,
    gap: 32,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },

  title: {
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: 24,
    color: theme.colors.grey900,
    // [theme.fn.smallerThan("sm")]: {
    //   fontSize: rem(32),
    // },
  },

  button: {
    width: 164,
    height: 42,
    background: theme.colors.blue100,
    borderRadius: 8,

    color: theme.colors.blue600,
    fontFamily: "Open Sans",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: 14,
  },
}));

const EmptyPage = () => {
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

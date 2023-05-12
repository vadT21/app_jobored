import { createStyles, Title, Flex, Button, rem } from "@mantine/core";
import { IconEmptyState } from "../components/icons/index.ts";

const useStyles = createStyles((theme) => ({
  root: {
    paddingTop: "120px",
    gap: "32px",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },

  title: {
    fontStyle: "normal",
    fontWeight: 700,
    //fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontFamily: "Inter",
    lineHeight: "29px",
    fontSize: "24px",
    color: "#343A40",
    // [theme.fn.smallerThan("sm")]: {
    //   fontSize: rem(32),
    // },
  },

  button: {
    width: "164px",
    height: "42px",
    background: "#DEECFF",
    borderRadius: "8px",

    color: "#3B7CD3",
    fontFamily: "Open Sans",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "14px",
    lineHeight: "155%",
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

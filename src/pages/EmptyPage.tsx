import { createStyles, Image, Title, Flex, Button, rem } from "@mantine/core";
import image from "../assets/emptyman.png";

const useStyles = createStyles((theme) => ({
  root: {},

  title: {
    fontWeight: 900,
    marginBottom: theme.spacing.md,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,

    [theme.fn.smallerThan("sm")]: {
      fontSize: rem(32),
    },
  },

  control: {
    [theme.fn.smallerThan("sm")]: {
      width: "100%",
    },
    width: "164px",
    fontSize: "14px",
  },

  image: {
    width: "240px",
  },
}));

const EmptyPage = () => {
  const { classes } = useStyles();

  return (
    <Flex
      gap="md"
      justify="center"
      align="center"
      direction="column"
      wrap="wrap"
    >
      <Image
        width={240}
        src={image}
        className={classes.image}
        alt="image that nothing"
      />

      <Title className={classes.title} align="center" size={24}>
        Упс здесь ничего нет!
      </Title>
      <Button variant="outline" size="md" className={classes.control}>
        Поиск вакансий
      </Button>
    </Flex>
  );
};

export default EmptyPage;

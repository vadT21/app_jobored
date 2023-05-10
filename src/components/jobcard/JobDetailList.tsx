import JobDetailItem from "./JobDetailItem";
import { SimpleGrid, Container, createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  card: {
    boxSizing: "border-box",
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
    color: theme.colors.dark[7],
  },

  title: {
    fontWeight: 700,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    lineHeight: 1.2,
  },

  body: {},
  star: {
    position: "absolute",
    top: 0,
    right: 0,
  },
}));

const JobDetailList = () => {
  const item = [
    {
      title: "My brain",
      value:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, aspernatur?",
    },
    {
      title: "My brain",
      value:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, aspernatur?",
    },
    {
      title: "My brain",
      value:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, aspernatur?",
    },
  ];

  const items = item.map((item) => (
    <JobDetailItem key={item.title} {...item} />
  ));
  const { classes } = useStyles();
  return (
    <Container py="xl" className={classes.card}>
      <SimpleGrid cols={1}>{items}</SimpleGrid>
    </Container>
  );
};

export default JobDetailList;

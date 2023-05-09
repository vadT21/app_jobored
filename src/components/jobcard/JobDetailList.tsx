import JobDetailItem from "./JobDetailItem";
import { SimpleGrid, Container } from "@mantine/core";

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
  return (
    <Container py="xl">
      <SimpleGrid cols={1}>{items}</SimpleGrid>
    </Container>
  );
};

export default JobDetailList;

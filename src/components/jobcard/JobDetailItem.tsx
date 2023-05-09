import { Text, Container, SimpleGrid } from "@mantine/core";

interface ArticleCardVerticalProps {
  title: string;
  value: string;
}

const JobDetailItem = ({ title, value }: ArticleCardVerticalProps) => {
  return (
    <Container>
      <SimpleGrid cols={1}>
        <Text>{title}</Text>
        <Text>{value}</Text>
      </SimpleGrid>
    </Container>
  );
};

export default JobDetailItem;

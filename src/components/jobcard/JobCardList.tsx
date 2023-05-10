import JobCardItem from "./JobCardItem";
import {
  createStyles,
  SimpleGrid,
  Card,
  Image,
  Text,
  Container,
  AspectRatio,
} from "@mantine/core";
const JobCardList = ({ jobs }: any) => {
  return (
    <Container p={0}>
      <SimpleGrid cols={1}>
        {jobs.length &&
          jobs.map((job: any) => <JobCardItem key={job.id} {...job} />)}
      </SimpleGrid>
    </Container>
  );
};

export default JobCardList;

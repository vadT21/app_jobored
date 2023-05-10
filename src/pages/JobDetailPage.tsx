import { Grid, Container } from "@mantine/core";
import JobDetailList from "../components/jobcard/JobDetailList";
import JobCardItem from "../components/jobcard/JobCardItem";

const JobDetailPage = () => {
  const item = {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1602080858428-57174f9431cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
    category: "technology",
    title: "The best laptop for Frontend engineers in 2022",
    date: "Feb 6th",
    author: {
      name: "Elsa Brown",
      avatar:
        "https://images.unsplash.com/photo-1628890923662-2cb23c2e0cfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80",
    },
  };
  return (
    <Container my="md" maw={773}>
      <Grid>
        <Grid.Col>
          <JobCardItem {...item} />
        </Grid.Col>
        <Grid.Col>
          <JobDetailList />
        </Grid.Col>
      </Grid>
    </Container>
  );
};

export default JobDetailPage;

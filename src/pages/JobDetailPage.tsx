import { Grid, Container } from "@mantine/core";
import JobDetailList from "../components/jobcard/JobDetailList";
import JobCardItem from "../components/jobcard/JobCardItem";
import { useFavoritesStore, useJobStore, useTokenStore } from "../store";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const JobDetailPage = () => {
  const { id } = useParams();
  console.log(id);
  const favorites = useFavoritesStore((state) => state.favoriteJobs);

  interface T {
    id: number;
    profession: string | undefined;
    town: { title: string | undefined };
    type_of_work: { title: string | undefined };
    payment_to: number | undefined;
    payment_from: number | undefined;
    currency: string | undefined;
    favorite: boolean;
  }

  const token = useTokenStore((state) => state.secretToken);
  const job = useJobStore((state) => state.job);

  const fetchJob = useJobStore((state) => state.fetchJob);

  const checkStar = (arr: T) => {
    console.log(arr);
    const index = favorites.findIndex((i) => i.id === arr.id);
    if (index === -1) {
      arr.favorite = true;
    }
    return arr;
  };
  if (job) {
    console.log("adsd", checkStar(job));
  }

  useEffect(() => {
    try {
      if (token) {
        fetchJob(token, id);
      }
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <Container my="md" maw={773}>
      <Grid>
        <Grid.Col>
          {job ? <JobCardItem {...checkStar(job)} /> : <div>laoding</div>}
        </Grid.Col>
        <Grid.Col>
          <JobDetailList />
        </Grid.Col>
      </Grid>
    </Container>
  );
};

export default JobDetailPage;

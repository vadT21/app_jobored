import { Grid, Container } from "@mantine/core";
import JobCardItem from "../components/jobcard/jobCardItem/JobCardItem";
import { useFavoritesStore, useJobStore, useTokenStore } from "../store";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import JobDetailInfo from "../components/jobdetail/JobDetailInfo";
import JobDetailDescription from "../components/jobdetail/JobDetailDescription";

interface T {
  id: number;
  profession: string | undefined;
  town: { title: string | undefined };
  type_of_work: { title: string | undefined };
  payment_to: number | undefined;
  payment_from: number | undefined;
  currency: string | undefined;
  favorite: boolean;
  vacancyRichText: string;
}

const JobDetailPage = () => {
  const { id } = useParams();
  console.log(id);
  const favorites = useFavoritesStore((state) => state.favoriteJobs);

  const token = useTokenStore((state) => state.secretToken);

  const fetchJobDetail = useJobStore((state) => state.fetchJobDetail);

  const checkStar = (arr: T) => {
    const index = favorites.findIndex((i) => i.id === arr.id);
    if (index === -1) {
      arr.favorite = true;
    }
    return arr;
  };

  const [jobTest, setJobTest] = useState<T | undefined>();
  useEffect(() => {
    async function getJob() {
      try {
        if (token) {
          const job = await fetchJobDetail(token, id);
          setJobTest(job);
        }
      } catch (error: any) {
        console.log(error);
      }
    }
    getJob();
  }, []);

  console.log("jb", jobTest);
  return (
    <Container my="md" maw={773}>
      <Grid>
        <Grid.Col>
          {jobTest ? (
            <JobDetailInfo {...checkStar(jobTest)} />
          ) : (
            <div>laoding</div>
          )}
        </Grid.Col>
        <Grid.Col>
          <JobDetailDescription value={jobTest?.vacancyRichText} />
        </Grid.Col>
      </Grid>
    </Container>
  );
};

export default JobDetailPage;

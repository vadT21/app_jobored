import { Grid, Container } from "@mantine/core";
import { useFavoritesStore, useJobStore, useTokenStore } from "../../store";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import JobDetailInfo from "../../components/jobdetail/jobDetailInfo/JobDetailInfo";
import JobDetailDescription from "../../components/jobdetail/jobDetailDescription/JobDetailDescription";
import { JobDataI } from "../../models";
import { useStyles } from "./DetailPage.style";

export const DetailPage = () => {
  const { classes } = useStyles();
  const { id } = useParams();
  console.log(id);

  const favorites = useFavoritesStore((state) => state.favoriteJobs);

  const token = useTokenStore((state) => state.secretToken);

  const fetchJobDetail = useJobStore((state) => state.fetchJobDetail);

  const checkStar = (arr: JobDataI) => {
    const index = favorites.findIndex((i) => i.id === arr.id);
    if (index === -1) {
      arr.favorite = true;
    }
    return arr;
  };

  const [jobTest, setJobTest] = useState<JobDataI | undefined>();
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
    <Container maw={773}>
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

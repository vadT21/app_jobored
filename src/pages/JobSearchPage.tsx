import { useEffect } from "react";
import { Grid, Container } from "@mantine/core";
import FilteringApp from "../components/filtering/FilteringApp";
import SearchingApp from "../components/searching/SearchingApp";
import JobCardList from "../components/jobcard/JobCardList";
import PaginationApp from "../components/pagination/PaginationApp";
import { useJobStore, useTokenStore } from "../store";

const JobSearchPage = () => {
  console.log("render job search page");

  const jobs = useJobStore((state) => state.jobs);
  const fetchJobs = useJobStore((state) => state.fetchJobs);
  const secretToken = useTokenStore((state) => state.secretToken);
  const params = useJobStore((state) => state.params);

  const currentPage = useJobStore((state) => state.currentPage);
  const changeCurrentPage = useJobStore((state) => state.changeCurrentPage);
  const totalPage = useJobStore((state) => state.totalCountPage);

  useEffect(() => {
    try {
      if (secretToken) {
        fetchJobs(secretToken, currentPage, params);
      }
    } catch (error) {
      console.error(error);
    }
  }, [currentPage, params]);
  return (
    <Container my="md">
      <Grid>
        <Grid.Col span={4}>
          <FilteringApp />
        </Grid.Col>
        <Grid.Col span={8}>
          <Grid gutter="md">
            <Grid.Col>
              <SearchingApp />
            </Grid.Col>
            <Grid.Col mih={796}>
              <JobCardList jobs={jobs} />
            </Grid.Col>
            <Grid.Col>
              <PaginationApp
                currentPage={currentPage}
                changeCurrentPage={changeCurrentPage}
                totalPage={totalPage}
              />
            </Grid.Col>
          </Grid>
        </Grid.Col>
      </Grid>
    </Container>
  );
};

export default JobSearchPage;

import { useEffect } from "react";
import { Grid, Container, createStyles } from "@mantine/core";
import FilteringApp from "../components/filtering/FilteringApp";
import SearchingApp from "../components/searching/SearchingApp";
import JobCardList from "../components/jobcard/jobCardList/JobCardList";
import PaginationApp from "../components/pagination/PaginationApp";
import { useJobStore, useTokenStore } from "../store";

const useStyles = createStyles((theme) => {
  return {
    container: {
      padding: "0 162px",
      maxWidth: 1440,
    },
    gridPage: {
      gap: 10,
    },
    filtering: {
      maxWidth: 335,
    },
    searchAndList: {
      width: "100%",
    },
  };
});

const JobSearchPage = () => {
  console.log("render job search page");

  const { classes } = useStyles();

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
    <Container className={classes.container}>
      <Grid className={classes.gridPage}>
        <Grid.Col span={4} className={classes.filtering}>
          <FilteringApp />
        </Grid.Col>
        <Grid.Col span={8}>
          <Grid className={classes.searchAndList}>
            <Grid.Col>
              <SearchingApp />
            </Grid.Col>
            <Grid.Col>
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

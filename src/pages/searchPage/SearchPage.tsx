import { useEffect } from "react";
import { Grid, Container, createStyles } from "@mantine/core";
import FilteringApp from "../../components/filtering/FilteringApp";
import SearchingApp from "../../components/searching/SearchingApp";
import JobCardList from "../../components/jobcard/jobCardList/JobCardList";
import PaginationApp from "../../components/pagination/PaginationApp";
import { useJobStore, useTokenStore } from "../../store";
import { useStyles } from "./SearchPage.style";

export const SearchPage = () => {
  const { classes } = useStyles();
  console.log("render job search page");

  const jobs = useJobStore((state) => state.jobs);
  const fetchJobs = useJobStore((state) => state.fetchJobs);
  const secretToken = useTokenStore((state) => state.secretToken);
  const params = useJobStore((state) => state.params);

  const currentPage = useJobStore((state) => state.currentPage);
  const changeCurrentPage = useJobStore((state) => state.changeCurrentPage);
  const totalPage = useJobStore((state) => state.totalCountPage);

  useEffect(() => {
    if (secretToken) {
      fetchJobs(secretToken, currentPage, params);
    }
  }, [currentPage, params]);
  return (
    <Container className={classes.container}>
      <Grid className={classes.gridPage}>
        <Grid.Col className={classes.filtering}>
          <FilteringApp />
        </Grid.Col>
        <Grid.Col className={classes.searchAndList}>
          <Grid>
            <Grid.Col>
              <SearchingApp />
            </Grid.Col>
            <Grid.Col>
              <JobCardList jobs={jobs} />
            </Grid.Col>
            <Grid.Col pt={32}>
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

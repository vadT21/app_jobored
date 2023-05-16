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
      [theme.fn.smallerThan("lg")]: {
        padding: "0 80px",
      },
      [theme.fn.smallerThan("md")]: {
        padding: "0 40px",
      },
      [theme.fn.smallerThan("sm")]: {
        padding: "0 10px",
      },
    },
    gridPage: {
      gap: 10,
      [theme.fn.smallerThan("sm")]: {
        flexDirection: "column",
      },
    },
    filtering: {
      maxWidth: 335,
      [theme.fn.smallerThan("sm")]: {
        maxWidth: "100%",
      },
    },
    searchAndList: {
      maxWidth: "100%",
      flex: 1,
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

export default JobSearchPage;

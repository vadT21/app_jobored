import { useEffect } from "react";
import { Grid, Container } from "@mantine/core";
import FilteringApp from "../../components/filtering/FilteringApp";
import SearchingApp from "../../components/searching/SearchingApp";
import JobCardList from "../../components/jobСard/jobCardList/JobCardList";
import PaginationApp from "../../components/pagination/PaginationApp";
import { useJobStore, useTokenStore } from "../../store";
import { useStyles } from "./SearchPage.style";
import LoaderApp from "../../components/loader/LoaderApp";
import EmptyState from "../../components/emptyState/EmptyState";

export const SearchPage = () => {
  //стили
  const { classes } = useStyles();

  //данные из стора для вакансий
  const jobs = useJobStore((state) => state.jobs);
  const fetchJobs = useJobStore((state) => state.fetchJobs);
  const secretToken = useTokenStore((state) => state.secretToken);
  const params = useJobStore((state) => state.params);

  //пагинация из стора
  const currentPage = useJobStore((state) => state.currentPage);
  const changeCurrentPage = useJobStore((state) => state.changeCurrentPage);
  const totalPage = useJobStore((state) => state.totalCountPage);

  //получение отраслей
  const fetchCatalogues = useJobStore((state) => state.fetchCatalogues);

  //загрузка для отоброжения лодера при переходе между page
  const loadingJob = useJobStore((state) => state.loading);

  // для работ
  useEffect(() => {
    fetchJobs(secretToken, currentPage, params);
  }, [currentPage, params]);

  // для отраслей
  useEffect(() => {
    fetchCatalogues(secretToken);
  }, []);

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
            {loadingJob ? (
              <LoaderApp />
            ) : (
              <>
                {jobs.length ? (
                  <>
                    <Grid.Col className={classes.jobList}>
                      <JobCardList jobs={jobs} />
                    </Grid.Col>
                    <Grid.Col className={classes.pagination}>
                      <PaginationApp
                        currentPage={currentPage}
                        changeCurrentPage={changeCurrentPage}
                        totalPage={totalPage}
                      />
                    </Grid.Col>
                  </>
                ) : (
                  <Container className={classes.emptyStateContainer}>
                    <EmptyState title="Упс, ничего не найдено!" />
                  </Container>
                )}
              </>
            )}
          </Grid>
        </Grid.Col>
      </Grid>
    </Container>
  );
};

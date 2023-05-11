import { Grid, Container } from "@mantine/core";
import FilteringApp from "../components/filtering/FilteringApp";
import SearchingApp from "../components/searching/SearchingApp";
import JobCardList from "../components/jobcard/JobCardList";
import PaginationApp from "../components/pagination/PaginationApp";
import { useFavoritesStore, useJobStore, useTokenStore } from "../store";
import { useEffect } from "react";

const JobSearchPage = () => {
  const currentPage = useJobStore((state) => state.currentPage);
  const changeCurrentPage = useJobStore((state) => state.changeCurrentPage);
  const totalPage = useJobStore((state) => state.totalCountPage);

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
            <Grid.Col>
              <JobCardList />
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

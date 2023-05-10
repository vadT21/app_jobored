import { Grid, Container } from "@mantine/core";
import FilteringApp from "../components/filtering/FilteringApp";
import SearchingApp from "../components/searching/SearchingApp";
import JobCardList from "../components/jobcard/JobCardList";
import PaginationApp from "../components/pagination/PaginationApp";
import { useFavoritesStore, useJobStore, useTokenStore } from "../store";
import { useEffect, useState } from "react";
import JobRequestResponse from "../API/jobrequest";

const JobSearchPage = () => {
  const currentPage = useJobStore((state) => state.currentPage);
  const changeCurrentPage = useJobStore((state) => state.changeCurrentPage);
  const totalPage = useJobStore((state) => state.totalCountPage);

  const jobs = useJobStore((state) => state.jobs);
  const fetchJobs = useJobStore((state) => state.fetchJobs);

  const favorites = useFavoritesStore((state) => state.favoriteJobs);

  const secretToken = useTokenStore((state) => state.secretToken);

  useEffect(() => {
    try {
      if (secretToken) {
        fetchJobs(secretToken, currentPage);
      }
    } catch (error) {
      console.error(error);
    }
  }, [currentPage]);

  interface M {
    id: number;
    favorite: boolean;
  }

  const checkStar = <T extends { id: number; favorite: boolean }>(arr: T[]) => {
    if (arr.length) {
      const res = arr.map((el) => {
        const index = favorites.findIndex((i) => i.id === el.id);
        if (index === -1) {
          el.favorite = true;
        }
        return el;
      });
      return res;
    }
    return arr;
  };

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
              <JobCardList jobs={checkStar(jobs)} />
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

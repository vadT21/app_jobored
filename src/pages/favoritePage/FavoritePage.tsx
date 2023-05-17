import { useEffect, useState } from "react";
import { Grid, Container } from "@mantine/core";
import JobCardList from "../../components/jobcard/jobCardList/JobCardList";
import PaginationApp from "../../components/pagination/PaginationApp";
import { useFavoritesStore } from "../../store";
import { JobDataI } from "../../models";
import { useStyles } from "./FavoritePage.style";

export const FavoritePage = () => {
  const { classes } = useStyles();

  const [visibleFavoriteJobsTest, setVisibleFavoriteJobsTest] = useState<
    JobDataI[]
  >([]);
  const favoriteJobs = useFavoritesStore((state) => state.favoriteJobs);

  const currentPage = useFavoritesStore((state) => state.currentPage);
  const changeCurrentPage = useFavoritesStore(
    (state) => state.changeCurrentPage,
  );
  const totalPage = Math.ceil(favoriteJobs.length / 4);

  const visibleFavoriteJobs = (page: number) =>
    favoriteJobs.slice(4 * (page - 1), 4 * (page - 1) + 4);

  useEffect(() => {
    setVisibleFavoriteJobsTest(visibleFavoriteJobs(currentPage));
  }, [currentPage]);

  return (
    <Container maw={773}>
      <Grid>
        <Grid.Col mih={596}>
          <JobCardList jobs={visibleFavoriteJobsTest} />
        </Grid.Col>
        <Grid.Col pt={96}>
          <PaginationApp
            currentPage={currentPage}
            changeCurrentPage={changeCurrentPage}
            totalPage={totalPage}
          />
        </Grid.Col>
      </Grid>
    </Container>
  );
};

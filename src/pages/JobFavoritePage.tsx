import { useEffect, useState } from "react";
import { Grid, Container } from "@mantine/core";
import JobCardList from "../components/jobcard/JobCardList";
import PaginationApp from "../components/pagination/PaginationApp";
import { useFavoritesStore } from "../store/";

const JobFavoritePage = () => {
  const [visibleFavoriteJobsTest, setVisibleFavoriteJobsTest] = useState<
    unknown[]
  >([]);
  const favoriteJobs = useFavoritesStore((state) => state.favoriteJobs);
  const currentPage = useFavoritesStore((state) => state.currentPage);
  const changeCurrentPage = useFavoritesStore(
    (state) => state.changeCurrentPage,
  );
  const totalPage = Math.ceil(favoriteJobs.length / 4);

  const visibleFavoriteJobs = (page: number) =>
    favoriteJobs.slice(4 * (page - 1), 4 * (page - 1) + 4);

  // const visibleFavoriteJobsTest = visibleFavoriteJobs(currentPage);

  useEffect(() => {
    setVisibleFavoriteJobsTest(visibleFavoriteJobs(currentPage));
  }, [currentPage]);

  return (
    <Container my="md" maw={773}>
      <Grid>
        <Grid.Col>
          <JobCardList jobs={visibleFavoriteJobsTest} />
        </Grid.Col>
        <Grid.Col>
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

export default JobFavoritePage;

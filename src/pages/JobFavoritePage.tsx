import { useEffect, useState } from "react";
import { Grid, Container } from "@mantine/core";
import JobCardList from "../components/jobcard/JobCardList";
import PaginationApp from "../components/pagination/PaginationApp";
import { useFavoritesStore } from "../store/";

interface T {
  id: number;
  profession: string | undefined;
  town: { title: string | undefined };
  type_of_work: { title: string | undefined };
  payment_to: number | undefined;
  payment_from: number | undefined;
  currency: string | undefined;
  favorite: boolean;
}

const JobFavoritePage = () => {
  const [visibleFavoriteJobsTest, setVisibleFavoriteJobsTest] = useState<T[]>(
    [],
  );
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
    <Container my="md" maw={773}>
      <Grid>
        <Grid.Col mih={796}>
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

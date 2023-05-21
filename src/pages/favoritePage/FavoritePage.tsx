import { useEffect, useState } from "react";
import { Grid, Container } from "@mantine/core";
import JobCardList from "../../components/jobСard/jobCardList/JobCardList";
import PaginationApp from "../../components/pagination/PaginationApp";
import { useFavoritesStore } from "../../store";
import { JobDataI } from "../../models";
import { useStyles } from "./FavoritePage.style";
import { Navigate } from "react-router-dom";
import { ROUTE_LINKS } from "../../constants";

export const FavoritePage = () => {
  //стили
  const { classes } = useStyles();

  //отображаемые избранные вакансии
  const [visibleFavoriteJobsTest, setVisibleFavoriteJobsTest] = useState<
    JobDataI[]
  >([]);
  //массив избранных в store
  const favoriteJobs = useFavoritesStore((state) => state.favoriteJobs);

  // пагинация
  const currentPage = useFavoritesStore((state) => state.currentPage);
  const changeCurrentPage = useFavoritesStore(
    (state) => state.changeCurrentPage,
  );
  const totalPage = Math.ceil(favoriteJobs.length / 4);

  // слайсим избранный массив для отображения 4 вакансий
  const visibleFavoriteJobs = (page: number) =>
    favoriteJobs.slice(4 * (page - 1), 4 * (page - 1) + 4);

  // изменяем отображаемый массив при изм. страницы
  useEffect(() => {
    setVisibleFavoriteJobsTest(visibleFavoriteJobs(currentPage));
  }, [currentPage]);

  // опционально, если покидаем сбрасываем на первую стр.
  useEffect(() => {
    return changeCurrentPage(1);
  }, []);

  // переход на empty page если нету избранных
  if (!favoriteJobs.length) {
    return <Navigate to={ROUTE_LINKS.emptyPage.link} replace />;
  }

  return (
    <Container className={classes.container}>
      <Grid>
        <Grid.Col className={classes.list}>
          <JobCardList jobs={visibleFavoriteJobsTest} />
        </Grid.Col>
        <Grid.Col className={classes.pagination}>
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

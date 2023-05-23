import { useEffect } from "react";
import { Grid, Container } from "@mantine/core";
import JobCardList from "../../components/jobСard/jobCardList/JobCardList";
import PaginationApp from "../../components/pagination/PaginationApp";
import { useFavoritesStore, useJobStore } from "../../store";
import { useStyles } from "./FavoritePage.style";
import EmptyState from "../../components/emptyState/EmptyState";
import LoaderApp from "../../components/loader/LoaderApp";

export const FavoritePage = () => {
  //стили
  const { classes } = useStyles();

  //данные из стора для вакансий
  const jobs = useJobStore((state) => state.jobs);
  const fetchJobs = useJobStore((state) => state.fetchJobs);

  const loadingJob = useJobStore((state) => state.loading);
  //массив избранных в store
  const favoriteJobsID = useFavoritesStore((state) => state.favoriteJobsID);

  // пагинация
  const currentPage = useFavoritesStore((state) => state.currentPage);
  const changeCurrentPage = useFavoritesStore(
    (state) => state.changeCurrentPage,
  );
  const totalPage = Math.ceil(favoriteJobsID.length / 4);
  const changeRepeatPage = useJobStore((state) => state.changeRepeatPage);
  // Отображаемые элементы:
  const items = favoriteJobsID.slice(
    4 * (currentPage - 1),
    4 * (currentPage - 1) + 4,
  );
  // нужно для проверки если удаляем на последней странице элементы
  // чтобы вернуло на пред. страницу без запроса
  useEffect(() => {
    if (currentPage - 1 === totalPage) {
      changeCurrentPage(currentPage - 1);
    } else if (items.length) {
      fetchJobs(currentPage, items, true);
    }
  }, [currentPage, favoriteJobsID, totalPage]);
  // опционально, если покидаем сбрасываем на первую стр.
  //а также обновляем состояние checkRepeatPage
  useEffect(() => {
    return () => {
      changeRepeatPage();
      changeCurrentPage(1);
    };
  }, []);

  // отображаем empty если нету избранных
  if (!favoriteJobsID.length) {
    return <EmptyState title="Упс, здесь еще ничего нет!" isButtonNeeded />;
  }

  return (
    <Container className={classes.container}>
      {loadingJob ? (
        <LoaderApp />
      ) : (
        <Grid>
          <Grid.Col className={classes.list}>
            <JobCardList jobs={jobs} />
          </Grid.Col>
          <Grid.Col className={classes.pagination}>
            <PaginationApp
              currentPage={currentPage}
              changeCurrentPage={changeCurrentPage}
              totalPage={totalPage}
            />
          </Grid.Col>
        </Grid>
      )}
    </Container>
  );
};

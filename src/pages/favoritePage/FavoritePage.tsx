import { useEffect } from "react";
import { Grid, Container } from "@mantine/core";
import JobCardList from "../../components/jobСard/jobCardList/JobCardList";
import PaginationApp from "../../components/pagination/PaginationApp";
import { useFavoritesStore } from "../../store";
import { useStyles } from "./FavoritePage.style";
import EmptyState from "../../components/emptyState/EmptyState";

export const FavoritePage = () => {
  //стили
  const { classes } = useStyles();

  //массив избранных в store
  const favoriteJobs = useFavoritesStore((state) => state.favoriteJobs);

  // пагинация
  const currentPage = useFavoritesStore((state) => state.currentPage);
  const changeCurrentPage = useFavoritesStore(
    (state) => state.changeCurrentPage,
  );
  const totalPage = Math.ceil(favoriteJobs.length / 4);

  // нужно для проверки если удаляем на последней странице элементы
  // чтобы вернуло на пред. страницу
  useEffect(() => {
    if (currentPage - 1 === totalPage) {
      changeCurrentPage(currentPage - 1);
    }
  }, [totalPage]);

  // опционально, если покидаем сбрасываем на первую стр.
  useEffect(() => {
    return () => changeCurrentPage(1);
  }, []);

  // отображаем empty если нету избранных
  if (!favoriteJobs.length) {
    return <EmptyState title="Упс, здесь еще ничего нет!" isButtonNeeded />;
  }
  // Отображаемые элементы:
  const items = favoriteJobs.slice(
    4 * (currentPage - 1),
    4 * (currentPage - 1) + 4,
  );
  return (
    <Container className={classes.container}>
      <Grid>
        <Grid.Col className={classes.list}>
          <JobCardList jobs={items} />
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

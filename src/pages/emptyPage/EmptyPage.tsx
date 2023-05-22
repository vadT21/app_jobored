// import { useStyles } from "./EmptyPage.style.ts";
import EmptyState from "../../components/emptyState/EmptyState.tsx";

export const EmptyPage = () => {
  //стили если понадобятся
  // const { classes } = useStyles();
  return (
    <>
      <EmptyState title="Упс, здесь еще ничего нет!" isButtonNeeded />
    </>
  );
};

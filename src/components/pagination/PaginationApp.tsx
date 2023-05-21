import { Pagination } from "@mantine/core";
import { useStyles } from "./PaginationApp.style";

interface Props {
  currentPage: number;
  totalPage: number;
  changeCurrentPage: (page: number) => void;
}

const PaginationApp = ({
  currentPage,
  changeCurrentPage,
  totalPage,
}: Props) => {
  const { classes } = useStyles();
  return (
    <Pagination
      boundaries={0}
      siblings={1}
      position="center"
      value={currentPage}
      onChange={changeCurrentPage}
      total={totalPage}
      classNames={classes}
    />
  );
};

export default PaginationApp;

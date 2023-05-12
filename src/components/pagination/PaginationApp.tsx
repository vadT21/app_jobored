import { Pagination } from "@mantine/core";

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
  console.log("render pagiantion");

  return (
    <Pagination
      boundaries={0}
      siblings={2}
      position="center"
      value={currentPage}
      onChange={changeCurrentPage}
      total={totalPage}
    />
  );
};

export default PaginationApp;

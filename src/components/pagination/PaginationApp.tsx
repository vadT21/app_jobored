import { Pagination } from "@mantine/core";

interface PaginationAppProps {
  currentPage: number;
  changeCurrentPage: (page: number) => void;
  totalPage: number;
}

const PaginationApp = ({
  currentPage,
  changeCurrentPage,
  totalPage,
}: PaginationAppProps) => {
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

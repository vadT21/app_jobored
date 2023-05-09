import { useState } from "react";
import { Pagination } from "@mantine/core";

const PaginationApp = () => {
  const [activePage, setPage] = useState(1);
  return (
    <Pagination
      boundaries={0}
      siblings={2}
      position="center"
      value={activePage}
      onChange={setPage}
      total={10}
    />
  );
};

export default PaginationApp;

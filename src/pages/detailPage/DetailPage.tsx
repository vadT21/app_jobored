import { SimpleGrid, Container } from "@mantine/core";
import { useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";
import { useJobStore } from "../../store";
import JobDetailInfo from "../../components/jobdetail/jobDetailInfo/JobDetailInfo";
import JobDetailDescription from "../../components/jobdetail/jobDetailDescription/JobDetailDescription";
//import { useStyles } from "./DetailPage.style";
import LoaderApp from "../../components/loader/LoaderApp";
import { ROUTE_LINKS } from "../../constants";

export const DetailPage = () => {
  //const { classes } = useStyles(); если нужны будут стили

  //получение id
  const { id } = useParams();

  const job = useJobStore((state) => state.jobs);

  const fetchJobDetail = useJobStore((state) => state.fetchJobDetail);
  const loadingJob = useJobStore((state) => state.loading);

  const errorDetail = useJobStore((state) => state.errorDetail);

  useEffect(() => {
    if (id) {
      fetchJobDetail(id);
    }
  }, []);

  // обработка ошибки
  if (errorDetail) {
    return <Navigate to={ROUTE_LINKS.emptyPage.url} replace />;
  }

  return (
    <Container maw={773}>
      {loadingJob ? (
        <LoaderApp />
      ) : (
        <>
          {job.length && (
            <SimpleGrid cols={1}>
              <JobDetailInfo {...job[0]} />
              <JobDetailDescription value={job[0].vacancyRichText} />
            </SimpleGrid>
          )}
        </>
      )}
    </Container>
  );
};

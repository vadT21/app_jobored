import { SimpleGrid, Container } from "@mantine/core";
import { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { useJobStore, useTokenStore } from "../../store";
import JobDetailInfo from "../../components/jobdetail/jobDetailInfo/JobDetailInfo";
import JobDetailDescription from "../../components/jobdetail/jobDetailDescription/JobDetailDescription";
//import { useStyles } from "./DetailPage.style";
import LoaderApp from "../../components/loader/LoaderApp";
import { JobDataI } from "../../models";
import { ROUTE_LINKS } from "../../constants";

export const DetailPage = () => {
  //const { classes } = useStyles(); если нужны будут стили

  //получение id
  const { id } = useParams();

  const token = useTokenStore((state) => state.secretToken);
  const fetchJobDetail = useJobStore((state) => state.fetchJobDetail);

  // контролируемый сет вакансии
  const [job, setJob] = useState<JobDataI[]>([]);

  //запрос на получение вакансии
  async function fetchJob() {
    const res = await fetchJobDetail(token, id);
    if (res) {
      setJob([res]);
    }
  }

  const errorDetail = useJobStore((state) => state.errorDetail);

  useEffect(() => {
    fetchJob();
  }, []);

  // обработка ошибки
  if (errorDetail) {
    return <Navigate to={ROUTE_LINKS.emptyPage.url} replace />;
  }

  return (
    <Container maw={773}>
      {job.length ? (
        <SimpleGrid cols={1}>
          <JobDetailInfo {...job[0]} />
          <JobDetailDescription value={job[0].vacancyRichText} />
        </SimpleGrid>
      ) : (
        <LoaderApp />
      )}
    </Container>
  );
};

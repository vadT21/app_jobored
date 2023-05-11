import { useEffect } from "react";
import { useFavoritesStore, useJobStore, useTokenStore } from "../../store";
import JobCardItem from "./JobCardItem";
import { SimpleGrid, Container } from "@mantine/core";

const JobCardList = () => {
  console.log("render list");

  const jobs = useJobStore((state) => state.jobs);
  const fetchJobs = useJobStore((state) => state.fetchJobs);
  const currentPage = useJobStore((state) => state.currentPage);

  const secretToken = useTokenStore((state) => state.secretToken);
  const params = useJobStore((state) => state.params);

  const favorites = useFavoritesStore((state) => state.favoriteJobs);

  interface T {
    id: number;
    profession: string | undefined;
    town: { title: string | undefined };
    type_of_work: { title: string | undefined };
    payment_to: number | undefined;
    payment_from: number | undefined;
    currency: string | undefined;
    favorite: boolean;
  }

  const checkStar = (arr: T[]) => {
    const res = arr.map((el) => {
      const index = favorites.findIndex((i) => i.id === el.id);
      if (index !== -1) {
        el.favorite = true;
      }
      return el;
    });
    return res;
  };

  const items = checkStar(jobs).map((job: any) => (
    <JobCardItem key={job.id} {...job} />
  ));

  useEffect(() => {
    try {
      if (secretToken) {
        fetchJobs(secretToken, currentPage, params);
      }
    } catch (error) {
      console.error(error);
    }
  }, [currentPage, params]);

  return (
    <Container p={0}>
      <SimpleGrid cols={1}>{items}</SimpleGrid>
    </Container>
  );
};

export default JobCardList;

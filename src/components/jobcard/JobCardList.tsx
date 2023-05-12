import { useFavoritesStore } from "../../store";
import JobCardItem from "./JobCardItem";
import { SimpleGrid, Container } from "@mantine/core";

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

interface Props {
  jobs: T[];
}

const JobCardList = ({ jobs }: Props) => {
  console.log("render list");

  const favorites = useFavoritesStore((state) => state.favoriteJobs);

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

  const items = checkStar(jobs).map((job: T) => (
    <JobCardItem key={job.id} {...job} />
  ));

  return (
    <Container p={0}>
      <SimpleGrid cols={1}>{items}</SimpleGrid>
    </Container>
  );
};

export default JobCardList;

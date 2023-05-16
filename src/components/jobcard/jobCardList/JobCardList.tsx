import { useFavoritesStore } from "../../../store";
import JobCardItem from "../jobCardItem/JobCardItem";
import { SimpleGrid } from "@mantine/core";
import { useStyles } from "./JobCardList.style";
import { JobDataI } from "../../../models";

const JobCardList = ({ jobs }: { jobs: JobDataI[] }) => {
  console.log("render list");

  const { classes } = useStyles();
  const favorites = useFavoritesStore((state) => state.favoriteJobs);

  const checkStar = (arr: JobDataI[]) => {
    const res = arr.map((el) => {
      const index = favorites.findIndex((i) => i.id === el.id);
      if (index !== -1) {
        el.favorite = true;
      }
      return el;
    });
    return res;
  };

  const items = checkStar(jobs).map((job: JobDataI) => (
    <JobCardItem key={job.id} {...job} />
  ));

  return (
    <SimpleGrid className={classes.cardList} cols={1}>
      {items}
    </SimpleGrid>
  );
};

export default JobCardList;

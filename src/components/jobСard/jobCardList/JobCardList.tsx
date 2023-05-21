import { SimpleGrid } from "@mantine/core";
import JobCardItem from "../jobCardItem/JobCardItem";
import { useStyles } from "./JobCardList.style";
import { JobDataI } from "../../../models";

const JobCardList = ({ jobs }: { jobs: JobDataI[] }) => {
  const { classes } = useStyles();

  // отрисовка списка вакансий
  const items = jobs.map((job: JobDataI) => (
    <JobCardItem key={job.id} {...job} />
  ));

  return (
    <SimpleGrid className={classes.cardList} cols={1}>
      {items}
    </SimpleGrid>
  );
};

export default JobCardList;

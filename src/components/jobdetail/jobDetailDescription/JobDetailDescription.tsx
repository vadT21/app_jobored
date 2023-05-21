import parse from "html-react-parser";
import { Card } from "@mantine/core";
import { useStyles } from "./JobDetailDescription.style";

const JobDetailDescription = ({ value }: { value?: string }) => {
  const { classes } = useStyles();
  // парсинг rich text
  const item = value && parse(value);
  return <Card className={classes.card}>{item}</Card>;
};

export default JobDetailDescription;

import { Title } from "@mantine/core";
import { IconEmptyState } from "../../components/icons/";
import { useStyles } from "./EmptyState.style.ts";

export const EmptyState = ({ title }: { title: string }) => {
  const { classes } = useStyles();
  return (
    <>
      <IconEmptyState />
      <Title order={2} className={classes.title}>
        {title}
      </Title>
    </>
  );
};

export default EmptyState;

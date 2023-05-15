import { Group, Title } from "@mantine/core";
import { IconLogo } from "../icons";
import { useStyles } from "./JoboredLogo.style";

const JoboredLogo = () => {
  const { classes } = useStyles();
  return (
    <Group className={classes.wrapper}>
      <IconLogo />
      <Title order={1} className={classes.title}>
        Jobored
      </Title>
    </Group>
  );
};

export default JoboredLogo;

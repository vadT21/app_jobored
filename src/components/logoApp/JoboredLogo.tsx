import { Group, Title } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { IconLogo } from "../icons";
import { useStyles } from "./JoboredLogo.style";

const JoboredLogo = () => {
  // при клике переходить на главную + обновлять ее
  const navigate = useNavigate();
  const handleClickReloadPage = () => {
    navigate("/jobored");
    window.location.reload();
  };
  const { classes } = useStyles();
  return (
    <Group className={classes.wrapper} onClick={handleClickReloadPage}>
      <IconLogo />
      <Title order={1} className={classes.title}>
        Jobored
      </Title>
    </Group>
  );
};

export default JoboredLogo;

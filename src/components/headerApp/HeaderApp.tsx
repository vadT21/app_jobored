import { Header, Container } from "@mantine/core";
import JoboredLogo from "../logoApp/JoboredLogo";
import NavigationApp from "../navigationApp/NavigationApp";
import { useStyles } from "./HeaderApp.style";

const HeaderApp = () => {
  const { classes } = useStyles();

  return (
    <Header height={60} className={classes.header}>
      <Container className={classes.wrapper}>
        <JoboredLogo />
        <NavigationApp />
      </Container>
    </Header>
  );
};

export default HeaderApp;

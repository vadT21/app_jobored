import { useState } from "react";
import { Header, Container, Paper, Burger } from "@mantine/core";
import { Link } from "react-router-dom";
import { useDisclosure } from "@mantine/hooks";
import JoboredLogo from "../logoApp/JoboredLogo";
import { useStyles } from "./HeaderApp.style";

const HeaderApp = () => {
  const links = [
    {
      link: "/",
      label: "Поиск Вакансий",
    },
    {
      link: "/favorite",
      label: "Избранное",
    },
  ];

  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);
  const { classes, cx } = useStyles();

  const items = links.map((link) => (
    <Link
      key={link.label}
      to={link.link}
      className={cx(classes.link, {
        [classes.linkActive]: active === link.link,
      })}
      onClick={() => {
        setActive(link.link);
      }}
    >
      {link.label}
    </Link>
  ));

  return (
    <Header height={60} className={classes.header}>
      <Container className={classes.wrapper}>
        <JoboredLogo />
        <Paper component="nav" className={classes.links}>
          {items}
        </Paper>

        <Burger
          opened={opened}
          onClick={toggle}
          className={classes.burger}
          size="sm"
        />
      </Container>
    </Header>
  );
};

export default HeaderApp;

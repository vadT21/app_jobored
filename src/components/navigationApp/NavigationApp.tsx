import { Link, useLocation } from "react-router-dom";
import { Paper, Burger, Drawer, Divider, Collapse } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { ROUTE_LINKS } from "../../constants";
import { useStyles } from "./NavigationApp.style";

const NavigationApp = () => {
  const links = [ROUTE_LINKS.searchPage, ROUTE_LINKS.favoritePage];

  const [opened, { toggle, close }] = useDisclosure(false);
  const { classes, cx } = useStyles();

  //нужно для отображения навигации
  // если на определенном url чтобы верно отрисовка была
  const { pathname } = useLocation();
  const pathnameTrim = pathname.endsWith("/")
    ? pathname.slice(0, -1)
    : pathname;
  const items = links.map((link) => (
    <Link
      key={link.label}
      to={link.link}
      className={cx(classes.link, {
        [classes.linkActive]: pathnameTrim === link.link,
      })}
      onClick={() => {
        if (opened) {
          toggle();
        }
      }}
    >
      {link.label}
    </Link>
  ));

  return (
    <>
      <Paper component="nav" className={classes.links}>
        {items}
      </Paper>
      <Burger
        opened={opened}
        onClick={toggle}
        className={classes.burger}
        size="sm"
      />
      <Drawer
        opened={opened}
        onClose={close}
        size="100%"
        padding="30px 40px 10px 40px"
        title="Навигация по сайту"
        className={classes.hiddenNavMenu}
        zIndex={100}
      >
        <Divider my={20} />
        <Collapse in={opened}>
          <Paper component="nav" className={classes.hiddenNavLinks}>
            {items}
          </Paper>
        </Collapse>
      </Drawer>
    </>
  );
};
export default NavigationApp;

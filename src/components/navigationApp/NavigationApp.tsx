import { Paper, Burger, Drawer, Divider, Collapse } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useStyles } from "./NavigationApp.style";
import NavigationList from "./navigationList/NavigationList";

const NavigationApp = () => {
  const [opened, { toggle, close }] = useDisclosure(false);
  const { classes } = useStyles();

  return (
    <>
      <Paper component="nav" className={classes.links}>
        <NavigationList />
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
          <Paper component="nav">
            <NavigationList toggle={toggle} />
          </Paper>
        </Collapse>
      </Drawer>
    </>
  );
};
export default NavigationApp;

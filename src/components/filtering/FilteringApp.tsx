import React from "react";
import { Group, Button, Paper, Burger } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import IndustryDropdown from "../industryDropdown/IndustryDropdown";
import SalaryScale from "../salaryScale/SalaryScale";
import { useStyles } from "./FilteringApp.style";
import HeaderFIltering from "./headerFiltering/HeaderFIltering";

const FilteringAppC = () => {
  const { classes } = useStyles();
  console.log("render filtre");
  const [opened, { toggle }] = useDisclosure(false);
  return (
    <>
      <Paper component="section" className={classes.container}>
        <HeaderFIltering />

        <Group className={classes.params}>
          <IndustryDropdown />
          <SalaryScale />
        </Group>

        <Button className={classes.control}>Применить</Button>
      </Paper>
      <Burger
        opened={opened}
        onClick={toggle}
        className={classes.burger}
        size="sm"
      />
    </>
  );
};

const FilteringApp = React.memo(FilteringAppC);
export default FilteringApp;

import React from "react";
import { Group, Button, Paper } from "@mantine/core";
import IndustryDropdown from "../industryDropdown/IndustryDropdown";
import SalaryScale from "../salaryScale/SalaryScale";
import { useStyles } from "./FilteringApp.style";
import HeaderFIltering from "./headerFiltering/HeaderFIltering";

const FilteringAppC = () => {
  const { classes } = useStyles();
  console.log("render filtre");

  return (
    <Paper component="section" className={classes.container}>
      <HeaderFIltering />

      <Group className={classes.params}>
        <IndustryDropdown />
        <SalaryScale />
      </Group>

      <Button className={classes.control}>Применить</Button>
    </Paper>
  );
};

const FilteringApp = React.memo(FilteringAppC);
export default FilteringApp;

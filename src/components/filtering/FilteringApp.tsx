import React from "react";
import { Group, Button, Paper, ActionIcon, Text } from "@mantine/core";
import { IconChevronDown } from "@tabler/icons-react";
import { useDisclosure } from "@mantine/hooks";
import IndustryDropdown from "../industryDropdown/IndustryDropdown";
import SalaryScale from "../salaryScale/SalaryScale";
import { useStyles } from "./FilteringApp.style";
import HeaderFIltering from "./headerFiltering/HeaderFIltering";
import { useJobStore } from "../../store";

const FilteringAppMemo = () => {
  // для октрытия/закрытия при адаптиве
  const [opened, { toggle }] = useDisclosure(false);
  const { classes } = useStyles({ opened });
  const addParams = useJobStore((state) => state.addParams);
  const handleClickAddParams = () => {
    addParams();
  };
  return (
    <>
      <Paper component="section" className={classes.container}>
        <HeaderFIltering />

        <Group className={classes.params}>
          <IndustryDropdown />
          <SalaryScale />
        </Group>

        <Button
          data-elem="search-button"
          onClick={handleClickAddParams}
          className={classes.control}
        >
          Применить
        </Button>
      </Paper>

      <ActionIcon
        className={classes.actionRoot}
        variant="transparent"
        onClick={toggle}
      >
        <Text>Фильтры</Text>
        <IconChevronDown
          className={classes.actionIcon}
          size="1.33rem"
          stroke={1.5}
        />
      </ActionIcon>
    </>
  );
};

const FilteringApp = React.memo(FilteringAppMemo);
export default FilteringApp;

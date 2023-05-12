import React from "react";
import { Group, Title, Button, Flex, createStyles, rem } from "@mantine/core";
import IndustryDropdown from "./IndustryDropdown";
import SalaryScale from "./SalaryScale";

const useStyles = createStyles((theme) => {
  return {
    wrapper: {
      flexDirection: "column",
      backgroundColor:
        theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white,
      borderRadius: theme.radius.lg,
      padding: "20px",
      border: `${rem(1)} solid ${
        theme.colorScheme === "dark"
          ? theme.colors.dark[8]
          : theme.colors.gray[2]
      }`,
    },

    form: {
      boxSizing: "border-box",
      flex: 1,
    },

    control: {
      flex: 1,
    },
  };
});

const FilteringAppC = () => {
  const { classes } = useStyles();
  console.log("render filtre");

  return (
    <Flex className={classes.wrapper}>
      <Group>
        <Flex justify="space-between" align="center" wrap="wrap">
          <Title
            order={2}
            size="h1"
            weight={900}
            align="center"
            color="#232134"
          >
            Фильтры
          </Title>
          <Button size="md">Сбросить все</Button>
        </Flex>
      </Group>

      <Group>
        <IndustryDropdown />
        <SalaryScale />
      </Group>

      <Group mt="xl">
        <Button size="md" className={classes.control}>
          Применить
        </Button>
      </Group>
    </Flex>
  );
};

const FilteringApp = React.memo(FilteringAppC);
export default FilteringApp;

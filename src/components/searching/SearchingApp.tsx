import React from "react";
import { TextInput, Button, Paper } from "@mantine/core";
import { useJobStore } from "../../store";
import { useStyles } from "./SearchingApp.style";
import { IconSearch } from "../icons";

const SearchingAppX = () => {
  const keywords = useJobStore((state) => state.keywords);
  const addKeywords = useJobStore((state) => state.addKeywords);
  const handleClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    addKeywords(event.currentTarget.value);
  };
  const { classes } = useStyles();
  const addParams = useJobStore((state) => state.addParams);
  const handleAddParams = () => {
    addParams();
  };

  console.log("render search");

  return (
    <Paper component="section">
      <TextInput
        classNames={classes}
        icon={<IconSearch />}
        placeholder="Введите название вакансии"
        value={keywords}
        onChange={handleClick}
        rightSection={
          <Button className={classes.searchButton} onClick={handleAddParams}>
            Поиск
          </Button>
        }
      />
    </Paper>
  );
};
const SearchingApp = React.memo(SearchingAppX);
export default SearchingApp;

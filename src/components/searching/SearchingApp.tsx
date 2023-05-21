import React from "react";
import { TextInput, Button, Paper } from "@mantine/core";
import { useJobStore } from "../../store";
import { useStyles } from "./SearchingApp.style";
import { IconSearch } from "../icons";

const SearchingAppMemo = () => {
  const keywords = useJobStore((state) => state.keywords);
  const addKeywords = useJobStore((state) => state.addKeywords);
  const handleAddKeywords = (event: React.ChangeEvent<HTMLInputElement>) => {
    addKeywords(event.currentTarget.value);
  };
  const { classes } = useStyles();
  const addParams = useJobStore((state) => state.addParams);
  const handleAddParams = () => {
    addParams();
  };

  return (
    <Paper component="section">
      <TextInput
        data-elem="search-input"
        classNames={classes}
        icon={<IconSearch />}
        placeholder="Введите название вакансии"
        value={keywords}
        onChange={handleAddKeywords}
        rightSection={
          <Button
            data-elem="search-button"
            className={classes.searchButton}
            onClick={handleAddParams}
          >
            Поиск
          </Button>
        }
      />
    </Paper>
  );
};
const SearchingApp = React.memo(SearchingAppMemo);
export default SearchingApp;

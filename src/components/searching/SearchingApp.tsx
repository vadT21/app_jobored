import React from "react";
import { TextInput, Button, Paper } from "@mantine/core";
import { useJobStore } from "../../store";
import { useStyles } from "./SearchingApp.style";
import { IconSearch } from "../icons";

const SearchingAppMemo = () => {
  const keyword = useJobStore((state) => state.keyword);
  const addKeyword = useJobStore((state) => state.addKeyword);
  const handleAddKeyword = (event: React.ChangeEvent<HTMLInputElement>) => {
    addKeyword(event.currentTarget.value);
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
        value={keyword}
        onChange={handleAddKeyword}
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

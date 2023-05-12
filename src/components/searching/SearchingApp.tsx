import React from "react";
import { TextInput, Button } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import { useJobStore } from "../../store";

const SearchingAppX = () => {
  const keywords = useJobStore((state) => state.keywords);
  const addKeywords = useJobStore((state) => state.addKeywords);
  const handleClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    addKeywords(event.currentTarget.value);
  };

  const addParams = useJobStore((state) => state.addParams);
  const handleAddParams = () => {
    addParams();
  };

  console.log("render search");

  return (
    <TextInput
      icon={<IconSearch size="1.1rem" stroke={1.5} />}
      radius="md"
      size="md"
      placeholder="Search questions"
      value={keywords}
      onChange={handleClick}
      rightSection={
        <Button onClick={handleAddParams} size="xs" ml="-60px" radius="md">
          Поиск
        </Button>
      }
    />
  );
};
const SearchingApp = React.memo(SearchingAppX);
export default SearchingApp;

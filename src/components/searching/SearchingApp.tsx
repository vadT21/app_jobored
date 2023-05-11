import { useState, useEffect } from "react";
import { TextInput, Button } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import { useJobStore } from "../../store";

const SearchingApp = () => {
  const keywords = useJobStore((state) => state.keywords);
  const addKeywords = useJobStore((state) => state.addKeywords);

  const [value, setValue] = useState("");

  const handleClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.value);
    addKeywords(value);
  };

  useEffect(() => {
    if (keywords) {
      setValue(keywords);
    }
  }, []);

  const addParams = useJobStore((state) => state.addParams);
  console.log("render search");

  return (
    <TextInput
      icon={<IconSearch size="1.1rem" stroke={1.5} />}
      radius="md"
      size="md"
      placeholder="Search questions"
      value={value}
      onChange={handleClick}
      rightSection={
        <Button onClick={addParams} size="xs" ml="-60px" radius="md">
          Поиск
        </Button>
      }
    />
  );
};

export default SearchingApp;

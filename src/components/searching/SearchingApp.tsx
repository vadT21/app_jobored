import { TextInput, TextInputProps, Button } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";

const SearchingApp = (props: TextInputProps) => {
  return (
    <TextInput
      icon={<IconSearch size="1.1rem" stroke={1.5} />}
      radius="md"
      size="md"
      placeholder="Search questions"
      rightSection={
        <Button size="xs" ml="-60px" radius="md">
          Settings
        </Button>
      }
      {...props}
    />
  );
};

export default SearchingApp;

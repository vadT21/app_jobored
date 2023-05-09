import { Select } from "@mantine/core";

const IndustryDropdown = () => {
  return (
    <Select
      label="Your favorite framework/library"
      placeholder="Pick one"
      searchable
      nothingFound="No options"
      data={["React", "Angular", "Svelte", "Vue"]}
      mt="md"
    />
  );
};

export default IndustryDropdown;

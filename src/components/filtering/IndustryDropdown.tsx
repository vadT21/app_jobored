import { useState, useEffect } from "react";
import { Select } from "@mantine/core";
import { useJobStore } from "../../store";

const IndustryDropdown = () => {
  const catalogues = useJobStore((state) => state.catalogues);

  const catalogue = useJobStore((state) => state.catalogue);
  const addCatalogue = useJobStore((state) => state.addCatalogue);

  const [value, setValue] = useState<string | undefined>("");

  const items = catalogues.map((el) => ({
    value: el.title,
    label: el.title,
    key: el.key,
  }));
  const handleChange = (value: string) => {
    const res = items.find((el) => el.value === value);
    addCatalogue(res);
    setValue(value);
  };

  useEffect(() => {
    if (catalogue) {
      setValue(catalogue.value);
    }
  }, []);

  return (
    <Select
      label="Your favorite framework/library"
      placeholder="Pick one"
      searchable
      nothingFound="No options"
      data={items}
      value={value}
      onChange={handleChange}
      mt="md"
    />
  );
};

export default IndustryDropdown;

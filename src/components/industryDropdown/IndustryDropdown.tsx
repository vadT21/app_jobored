import { useState, useEffect } from "react";
import { Select } from "@mantine/core";
import { useJobStore } from "../../store";
import { useStyles } from "./IndustryDropdown.style";
import { IconArrowDown, IconArrowUp } from "../icons";

const IndustryDropdown = () => {
  const { classes } = useStyles();

  const catalogues = useJobStore((state) => state.catalogues);

  const industry = useJobStore((state) => state.industry);
  const addCatalogue = useJobStore((state) => state.addIndustry);

  const [value, setValue] = useState<string | undefined>("");

  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

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
    setValue("");
    if (industry) {
      setValue(industry.value);
    }
  }, [industry]);

  return (
    <Select
      classNames={classes}
      label="Отрасль"
      placeholder="Выберите отрасль"
      searchable
      nothingFound="Нету отраслей"
      data={items}
      value={value}
      onChange={handleChange}
      icon={isOpen ? <IconArrowUp /> : <IconArrowDown />}
      onDropdownOpen={handleToggle}
      onDropdownClose={handleToggle}
      rightSection={null}
      transitionProps={{ duration: 300, transition: "fade" }}
    />
  );
};
export default IndustryDropdown;

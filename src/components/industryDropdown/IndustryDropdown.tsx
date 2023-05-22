import { useState, useEffect } from "react";
import { Select } from "@mantine/core";
import { IconChevronDown } from "@tabler/icons-react";
import { useJobStore } from "../../store";
import { useStyles } from "./IndustryDropdown.style";

const IndustryDropdown = () => {
  const catalogues = useJobStore((state) => state.catalogues);

  const industry = useJobStore((state) => state.industry);
  const addIndustry = useJobStore((state) => state.addIndustry);

  const [value, setValue] = useState<string | undefined>("");

  const [isOpen, setIsOpen] = useState(false);

  const { classes } = useStyles({ isOpen });

  //закрытие открытие dropdown
  const handleToggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  //массив отраслей для отображения (нужные поля оставлены)
  const items = catalogues.map((el) => ({
    value: el.title,
    label: el.title,
    key: el.key,
  }));
  //смена отрасли
  const handleChangeIndustry = (value: string) => {
    const res = items.find((el) => el.value === value);
    addIndustry(res);
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
      data-elem="industry-select"
      classNames={classes}
      label="Отрасль"
      placeholder="Выберите отрасль"
      searchable
      nothingFound="Нет отраслей"
      data={items}
      value={value}
      onChange={handleChangeIndustry}
      icon={
        <IconChevronDown
          size="1.5rem"
          stroke={1.5}
          className={classes.iconArrow}
        />
      }
      onDropdownOpen={handleToggleDropdown}
      onDropdownClose={handleToggleDropdown}
      rightSection={null}
      transitionProps={{ duration: 300, transition: "fade" }}
    />
  );
};
export default IndustryDropdown;

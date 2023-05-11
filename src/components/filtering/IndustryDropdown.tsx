import { useState } from "react";
import { Select } from "@mantine/core";

interface Cat {
  key: number;
  title: string;
  title_rus: string;
  title_trimmed: string;
  url_rus: string;
}
interface Props {
  catalogues: Cat[];
}
const IndustryDropdown = ({ catalogues }: Props) => {
  const items = catalogues.length
    ? catalogues.map((el) => ({
        value: el.title,
        label: el.title,
        key: el.key,
      }))
    : [];

  const handleChange = (value: string) => {
    //тут возвращать
    console.log(value);
  };

  return (
    <Select
      label="Your favorite framework/library"
      placeholder="Pick one"
      searchable
      nothingFound="No options"
      data={items}
      onChange={handleChange}
      mt="md"
    />
  );
};

export default IndustryDropdown;

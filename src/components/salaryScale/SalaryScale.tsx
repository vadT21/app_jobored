import { NumberInput, Group } from "@mantine/core";
import { useJobStore } from "../../store";
import { useStyles } from "./SalaryScale.style";

const SalaryScale = () => {
  const { classes } = useStyles();
  const salaryFrom = useJobStore((state) => state.salaryFrom);
  const changeSalaryFrom = useJobStore((state) => state.changeSalaryFrom);

  const salaryTo = useJobStore((state) => state.salaryTo);
  const changeSalaryTo = useJobStore((state) => state.changeSalaryTo);

  const handleChangeFromValue = (value: number | "") => {
    changeSalaryFrom(value);
  };
  const handleChangeToValue = (value: number | "") => {
    changeSalaryTo(value);
  };

  return (
    <>
      <Group className={classes.root}>
        <NumberInput
          classNames={classes}
          label="Оклад"
          placeholder={"От"}
          stepHoldDelay={500}
          stepHoldInterval={100}
          step={1}
          min={0}
          value={salaryFrom}
          onChange={handleChangeFromValue}
        />
        <NumberInput
          classNames={classes}
          placeholder={"До"}
          stepHoldDelay={500}
          step={1}
          min={0}
          stepHoldInterval={(t) => Math.max(1000 / t ** 2, 25)}
          value={salaryTo}
          onChange={handleChangeToValue}
        />
      </Group>
    </>
  );
};

export default SalaryScale;

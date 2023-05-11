import { useEffect, useState } from "react";
import { NumberInput } from "@mantine/core";
import { useJobStore } from "../../store";

const SalaryScale = () => {
  const salaryFrom = useJobStore((state) => state.salaryFrom);
  const changeSalaryFrom = useJobStore((state) => state.changeSalaryFrom);

  const salaryTo = useJobStore((state) => state.salaryTo);
  const changeSalaryTo = useJobStore((state) => state.changeSalaryTo);

  const [fromValue, setFromValue] = useState<number | "">("");
  const [toValue, setToValue] = useState<number | "">("");

  const handleChangeFromValue = (value: number | "") => {
    setFromValue(value);
    changeSalaryFrom(value);
  };
  const handleChangeToValue = (value: number | "") => {
    setToValue(value);
    changeSalaryTo(value);
  };

  useEffect(() => {
    setFromValue(salaryFrom);
    setToValue(salaryTo);
  }, []);
  return (
    <>
      <div className="Ocl">
        <NumberInput
          mt="md"
          label="Оклад"
          placeholder={"От"}
          stepHoldDelay={500}
          stepHoldInterval={100}
          sx={{ marginBottom: 10 }}
          step={1}
          min={0}
          value={fromValue}
          onChange={handleChangeFromValue}
        />
        <NumberInput
          placeholder={"До"}
          stepHoldDelay={500}
          step={1}
          min={0}
          stepHoldInterval={(t) => Math.max(1000 / t ** 2, 25)}
          sx={{ marginBottom: 20 }}
          value={toValue}
          onChange={handleChangeToValue}
        />
      </div>
    </>
  );
};

export default SalaryScale;

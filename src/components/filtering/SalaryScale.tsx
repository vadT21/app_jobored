import { NumberInput } from "@mantine/core";
import { useJobStore } from "../../store";

const SalaryScale = () => {
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
          value={salaryFrom}
          onChange={handleChangeFromValue}
        />
        <NumberInput
          placeholder={"До"}
          stepHoldDelay={500}
          step={1}
          min={0}
          stepHoldInterval={(t) => Math.max(1000 / t ** 2, 25)}
          sx={{ marginBottom: 20 }}
          value={salaryTo}
          onChange={handleChangeToValue}
        />
      </div>
    </>
  );
};

export default SalaryScale;

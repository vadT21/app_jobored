import { useState } from "react";
import { NumberInput } from "@mantine/core";

const SalaryScale = () => {
  const [fromValue, setFromValue] = useState<number | "">();
  const [toValue, setToValue] = useState<number | "">();

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
          onChange={setFromValue}
        />
        <NumberInput
          placeholder={"До"}
          stepHoldDelay={500}
          step={1}
          min={0}
          stepHoldInterval={(t) => Math.max(1000 / t ** 2, 25)}
          sx={{ marginBottom: 20 }}
          value={toValue}
          onChange={setToValue}
        />
      </div>
    </>
  );
};

export default SalaryScale;

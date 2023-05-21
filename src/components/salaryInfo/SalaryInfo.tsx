import { Text } from "@mantine/core";
import { useStyles } from "./SalaryInfo.style";

interface SalaryInfoProps {
  payment_to?: number;
  payment_from?: number;
  currency?: string;
}

const SalaryInfo = ({
  payment_to,
  payment_from,
  currency,
}: SalaryInfoProps) => {
  const { classes } = useStyles();

  let summaryRow = "";

  //проверка на количество данных и конечное отображение
  if (payment_from && payment_to) {
    summaryRow = `з/п ${payment_from} - ${payment_to} ${currency}`;
  } else if (payment_to) {
    summaryRow = `з/п до ${payment_to} ${currency}`;
  } else if (payment_from) {
    summaryRow = `з/п от ${payment_from} ${currency}`;
  } else {
    summaryRow = `з/п не указана`;
  }

  return <Text className={classes.salary}>{summaryRow}</Text>;
};

export default SalaryInfo;

import { Card, Text, Group, Title, Container } from "@mantine/core";
import FavoriteStar from "../../favoriteStar/FavoriteStar";
import { IconLocation } from "../../icons";
import { useStyles } from "./JobDetailInfo.style";
import SalaryInfo from "../../salaryInfo/SalaryInfo";
import { JobDataI } from "../../../models";

const JobDetailInfo = ({
  id,
  type_of_work,
  profession,
  town,
  payment_to,
  payment_from,
  currency,
}: JobDataI) => {
  const { classes } = useStyles();
  return (
    <Card className={classes.card}>
      <Title order={3} className={classes.title}>
        {profession}
      </Title>

      <Group className={classes.information}>
        <SalaryInfo
          payment_from={payment_from}
          payment_to={payment_to}
          currency={currency}
        />
        <Text className={classes.textPoint}>•</Text>
        <Text className={classes.typeOfWork}>{type_of_work.title}</Text>
      </Group>
      <Group className={classes.location}>
        <IconLocation />
        <Text>{town.title}</Text>
      </Group>
      <Container className={classes.starPosition}>
        <FavoriteStar id={id} />
      </Container>
    </Card>
  );
};

export default JobDetailInfo;

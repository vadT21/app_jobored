import { Card, Text, Group, Title, Container } from "@mantine/core";
import { Link } from "react-router-dom";
import FavoriteStar from "../../favoriteStar/FavoriteStar";
import { IconLocation } from "../../icons";
import { useStyles } from "./JobCardItem.style";
import SalaryInfo from "../../salaryInfo/SalaryInfo";

interface T {
  id: number;
  profession: string | undefined;
  town: { title: string | undefined };
  type_of_work: { title: string | undefined };
  payment_to: number | undefined;
  payment_from: number | undefined;
  currency: string | undefined;
  favorite: boolean;
}

const JobCardItem = ({
  id,
  type_of_work,
  profession,
  town,
  payment_to,
  payment_from,
  currency,
  favorite,
}: T) => {
  const { classes } = useStyles();
  const job = {
    id,
    type_of_work: { title: type_of_work.title },
    profession,
    town: { title: town.title },
    payment_to,
    payment_from,
    currency,
    favorite,
  };
  const link = {
    link: `/job/${id}`,
  };
  return (
    <Card className={classes.card}>
      <Link to={link.link} className={classes.link}>
        <Title order={3} className={classes.title}>
          {profession}
        </Title>
      </Link>
      <Group className={classes.information}>
        <SalaryInfo
          payment_from={payment_from}
          payment_to={payment_to}
          currency={currency}
        />
        <Text p="3px 0 0 0">•</Text>
        <Text className={classes.typeOfWork}>{type_of_work.title}</Text>
      </Group>
      <Group className={classes.location}>
        <IconLocation />
        <Text>{town.title}</Text>
      </Group>
      <Container className={classes.starPosition}>
        <FavoriteStar {...job} />
      </Container>
    </Card>
  );
};

export default JobCardItem;

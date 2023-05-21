import { Card, Text, Group, Title, Container } from "@mantine/core";
import { Link } from "react-router-dom";
import FavoriteStar from "../../favoriteStar/FavoriteStar";
import { IconLocation } from "../../icons";
import { useStyles } from "./JobCardItem.style";
import SalaryInfo from "../../salaryInfo/SalaryInfo";
import { JobDataI } from "../../../models";
import { ROUTE_LINKS } from "../../../constants";

const JobCardItem = ({
  id,
  type_of_work,
  profession,
  town,
  payment_to,
  payment_from,
  currency,
}: JobDataI) => {
  const { classes } = useStyles();
  const job = {
    id,
    type_of_work: { title: type_of_work.title },
    profession,
    town: { title: town.title },
    payment_to,
    payment_from,
    currency,
  };
  //линк для перехода на детали
  const link = `${ROUTE_LINKS.detailPage.link}/${id}`;

  return (
    <Link to={link} className={classes.link}>
      <Card className={classes.card} data-elem={`vacancy-${id}`}>
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
          <FavoriteStar {...job} />
        </Container>
      </Card>
    </Link>
  );
};

export default JobCardItem;

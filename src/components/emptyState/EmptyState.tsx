import { Flex, Button, Title } from "@mantine/core";
import { IconEmptyState } from "../../components/icons/";
import { useStyles } from "./EmptyState.style.ts";
import { useNavigate } from "react-router-dom";
import { ROUTE_LINKS } from "../../constants/links.ts";

interface EmptyStateI {
  title: string;
  isButtonNeeded: boolean;
}

const EmptyState = ({ title, isButtonNeeded }: EmptyStateI) => {
  const { classes } = useStyles();

  // для перехода на страницу поиска вакансий
  const navigate = useNavigate();
  const handleClickLink = () => {
    navigate(ROUTE_LINKS.searchPage.link);
  };

  return (
    <>
      <Flex className={classes.root}>
        <IconEmptyState />
        <Title order={2} className={classes.title}>
          {title}
        </Title>
        {isButtonNeeded && (
          <Button className={classes.button} onClick={handleClickLink}>
            Поиск Вакансий
          </Button>
        )}
      </Flex>
    </>
  );
};

export default EmptyState;

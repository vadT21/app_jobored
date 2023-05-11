import { useState } from "react";
import { IconStar, IconMapPin } from "@tabler/icons-react";
import { createStyles, Card, Text, Group, ActionIcon } from "@mantine/core";
import { useFavoritesStore } from "../../store";
import { Link } from "react-router-dom";

const useStyles = createStyles((theme) => ({
  card: {
    boxSizing: "border-box",
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
  },

  title: {
    fontWeight: 700,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    lineHeight: 1.2,
  },

  body: {},
  star: {
    position: "absolute",
    top: 0,
    right: 0,
  },
}));

interface T {
  id: number;
  profession: string | undefined;
  town: { title: string | undefined };
  type_of_work: { title: string | undefined };
  payment_to: number | undefined;
  payment_from: number | undefined;
  currency: string | undefined;
  favorite: boolean;
  vacancyRichText: string;
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
  vacancyRichText,
}: T) => {
  const { classes } = useStyles();

  const toggleFavoriteJobs = useFavoritesStore(
    (state) => state.toggleFavoriteJobs,
  );

  const favJobs = useFavoritesStore((state) => state.favoriteJobs);
  const [isActive, setIsActive] = useState(favorite);

  const handleStarClick = () => {
    console.log("work star");
    setIsActive(!isActive);
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
    console.log(job);
    toggleFavoriteJobs(job);
  };

  const link = {
    link: `/job/${id}`,
  };
  return (
    <Card withBorder radius="md" p={24} className={classes.card}>
      <Group noWrap spacing={0}>
        <div className={classes.body}>
          <Link to={link.link}>
            <Text className={classes.title} mt="xs" mb="md">
              {profession}
            </Text>
            <Group noWrap spacing="xs" mt="xs" mb="md">
              <Text size="xs"> з/п {town.title}</Text>
              <Text size="xs" color="dimmed">
                •
              </Text>
              <Text size="xs" color="dimmed">
                {type_of_work.title}
              </Text>
            </Group>
            <Group mt="xs" mb="md">
              <IconMapPin size={16} strokeWidth={1} color={"#000000"} />
              <Text size="xs">{town.title}</Text>
            </Group>
          </Link>
          <Group className={classes.star} onClick={handleStarClick}>
            <ActionIcon variant="transparent" radius="md" size={36}>
              <IconStar
                size="1.1rem"
                stroke={1.5}
                fill={isActive ? "#5E96FC" : "#7c2207"}
              />
            </ActionIcon>
          </Group>
        </div>
      </Group>
    </Card>
  );
};

export default JobCardItem;

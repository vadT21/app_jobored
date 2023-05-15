import { createStyles, Group, ActionIcon } from "@mantine/core";
import { useState } from "react";
import { useFavoritesStore } from "../../store";
import { IconStar } from "../icons";

const useStyles = createStyles((theme) => ({
  star: {},
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
}

const FavoriteStar = ({
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

  const [isActive, setIsActive] = useState(favorite);

  const toggleFavoriteJobs = useFavoritesStore(
    (state) => state.toggleFavoriteJobs,
  );

  const handleStarClick = () => {
    console.log("work star");
    setIsActive(!isActive);
    toggleFavoriteJobs({
      id,
      type_of_work: { title: type_of_work.title },
      profession,
      town: { title: town.title },
      payment_to,
      payment_from,
      currency,
      favorite,
    });
  };

  return (
    <Group className={classes.star} onClick={handleStarClick}>
      <ActionIcon variant="transparent" radius="md" size={36}>
        <IconStar fill={isActive ? "#5E96FC" : "#7c2207"} />
      </ActionIcon>
    </Group>
  );
};

export default FavoriteStar;

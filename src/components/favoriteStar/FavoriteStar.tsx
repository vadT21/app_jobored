import { Group, ActionIcon } from "@mantine/core";
import { useState } from "react";
import { useFavoritesStore } from "../../store";
import { IconStar } from "../icons";
import { useStyles } from "./FavoriteStar.style";
import { JobDataI } from "../../models";

const FavoriteStar = ({
  id,
  type_of_work,
  profession,
  town,
  payment_to,
  payment_from,
  currency,
  favorite,
}: JobDataI) => {
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
    <Group onClick={handleStarClick}>
      <ActionIcon variant="transparent" radius="md" size={36}>
        <IconStar
          fill={isActive ? "#5E96FC" : "#FFFFFF"}
          stroke={isActive ? "#5E96FC" : "#ACADB9"}
        />
      </ActionIcon>
    </Group>
  );
};

export default FavoriteStar;

import { ActionIcon } from "@mantine/core";
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
}: JobDataI) => {
  const { theme } = useStyles();
  const favorites = useFavoritesStore((state) => state.favoriteJobs);
  const toggleFavoriteJobs = useFavoritesStore(
    (state) => state.toggleFavoriteJobs,
  );

  //проверка есть ли вакансия в избранных
  const checkStar = (id: number) => {
    const res = favorites.some((job) => job.id === id);
    return res;
  };

  const [isActive, setIsActive] = useState(checkStar(id));

  const handleStarClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setIsActive(!isActive);
    toggleFavoriteJobs({
      id,
      type_of_work: { title: type_of_work.title },
      profession,
      town: { title: town.title },
      payment_to,
      payment_from,
      currency,
    });
  };

  return (
    <ActionIcon
      data-elem={`vacancy-${id}-shortlist-button`}
      onClick={handleStarClick}
      variant="transparent"
      size={36}
    >
      <IconStar
        fill={isActive ? theme.colors.blue500[0] : theme.colors.white[0]}
        stroke={isActive ? theme.colors.blue500[0] : theme.colors.grey500[0]}
      />
    </ActionIcon>
  );
};

export default FavoriteStar;

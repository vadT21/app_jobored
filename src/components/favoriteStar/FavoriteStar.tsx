import { ActionIcon } from "@mantine/core";
import { useState } from "react";
import { useFavoritesStore } from "../../store";
import { IconStar } from "../icons";
import { useStyles } from "./FavoriteStar.style";

const FavoriteStar = ({ id }: { id: number }) => {
  const { theme } = useStyles();
  const favorites = useFavoritesStore((state) => state.favoriteJobsID);
  const toggleFavoriteJobs = useFavoritesStore(
    (state) => state.toggleFavoriteJobs,
  );

  //проверка есть ли вакансия в избранных
  const checkStar = (id: number) => {
    const res = favorites.some((job) => job === id);
    return res;
  };

  const [isActive, setIsActive] = useState(checkStar(id));

  const handleStarClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setIsActive(!isActive);
    toggleFavoriteJobs(id);
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

import { Button } from "@mantine/core";
import { IconX } from "@tabler/icons-react";
import { useStyles } from "./ClearButton.style";
import { useJobStore } from "../../store";

const ClearButton = () => {
  const { classes } = useStyles();
  const removeParams = useJobStore((state) => state.removeParams);

  const handleClickRemove = () => {
    removeParams();
  };

  return (
    <Button
      classNames={classes}
      rightIcon={<IconX size={14} />}
      onClick={handleClickRemove}
    >
      Сбросить все
    </Button>
  );
};

export default ClearButton;

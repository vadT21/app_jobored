import { Button } from "@mantine/core";
import { IconX } from "@tabler/icons-react";
import { useStyles } from "./ClearButton.style";

const ClearButton = () => {
  const { classes } = useStyles();
  return (
    <>
      <Button
        className={classes.clearButton}
        rightIcon={<IconX size={14} />}
        onClick={() => console.log(2)}
      >
        Сбросить все
      </Button>
    </>
  );
};

export default ClearButton;

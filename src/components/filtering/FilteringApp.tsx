import {
  TextInput,
  Textarea,
  SimpleGrid,
  Group,
  Title,
  Button,
  Flex,
  createStyles,
  rem,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import IndustryDropdown from "./IndustryDropdown";
import SalaryScale from "./SalaryScale";

const useStyles = createStyles((theme) => {
  return {
    wrapper: {
      display: "flex",
      backgroundColor:
        theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white,
      borderRadius: theme.radius.lg,
      padding: "20px",
      border: `${rem(1)} solid ${
        theme.colorScheme === "dark"
          ? theme.colors.dark[8]
          : theme.colors.gray[2]
      }`,
    },

    form: {
      boxSizing: "border-box",
      flex: 1,
    },

    control: {
      flex: 1,
    },
  };
});

interface Props {
  catalogues: Cat[];
}
interface Cat {
  key: number;
  title: string;
  title_rus: string;
  title_trimmed: string;
  url_rus: string;
}

const FilteringApp = () => {
  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    validate: {
      name: (value) => value.trim().length < 2,
      email: (value) => !/^\S+@\S+$/.test(value),
      subject: (value) => value.trim().length === 0,
    },
  });

  const { classes } = useStyles();
  console.log("render filtre");

  return (
    <div className={classes.wrapper}>
      <form
        className={classes.form}
        onSubmit={form.onSubmit(() => {
          console.log(1);
        })}
      >
        <Flex justify="space-between" align="center" wrap="wrap">
          <Title
            order={2}
            size="h1"
            weight={900}
            align="center"
            color="#232134"
          >
            Фильтры
          </Title>
          <Button type="submit" size="md">
            Сбросить все
          </Button>
        </Flex>

        <IndustryDropdown />
        <SalaryScale />

        <Group mt="xl">
          <Button type="submit" size="md" className={classes.control}>
            Применить
          </Button>
        </Group>
      </form>
    </div>
  );
};

export default FilteringApp;

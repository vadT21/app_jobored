import { IconStar, IconMapPin } from "@tabler/icons-react";
import {
  createStyles,
  Card,
  Image,
  Avatar,
  Text,
  Group,
  ActionIcon,
} from "@mantine/core";

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

interface ArticleCardVerticalProps {
  image: string;
  category: string;
  title: string;
  date: string;
  author: {
    name: string;
    avatar: string;
  };
}

const JobCardItem = ({
  image,
  category,
  title,
  date,
  author,
}: ArticleCardVerticalProps) => {
  const { classes } = useStyles();

  return (
    <Card withBorder radius="md" p={24} className={classes.card}>
      <Group noWrap spacing={0}>
        <div className={classes.body}>
          <Text className={classes.title} mt="xs" mb="md">
            {title}
          </Text>
          <Group noWrap spacing="xs" mt="xs" mb="md">
            <Text size="xs">{author.name}</Text>
            <Text size="xs" color="dimmed">
              •
            </Text>
            <Text size="xs" color="dimmed">
              {date}
            </Text>
          </Group>
          <Group mt="xs" mb="md">
            <IconMapPin size={16} strokeWidth={1} color={"#000000"} />
            <Text size="xs">{author.name}</Text>
          </Group>
          <Group className={classes.star}>
            <ActionIcon variant="transparent" radius="md" size={36}>
              <IconStar size="1.1rem" stroke={1.5} />
            </ActionIcon>
          </Group>
        </div>
      </Group>
    </Card>
  );
};

export default JobCardItem;

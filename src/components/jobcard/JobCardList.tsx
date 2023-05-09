import JobCardItem from "./JobCardItem";
import {
  createStyles,
  SimpleGrid,
  Card,
  Image,
  Text,
  Container,
  AspectRatio,
} from "@mantine/core";
const JobCardList = () => {
  const item = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1602080858428-57174f9431cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
      category: "technology",
      title: "The best laptop for Frontend engineers in 2022",
      date: "Feb 6th",
      author: {
        name: "Elsa Brown",
        avatar:
          "https://images.unsplash.com/photo-1628890923662-2cb23c2e0cfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80",
      },
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1602080858428-57174f9431cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
      category: "technology",
      title: "The best laptop for Frontend engineers in 2022",
      date: "Feb 6th",
      author: {
        name: "Elsa Brown",
        avatar:
          "https://images.unsplash.com/photo-1628890923662-2cb23c2e0cfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80",
      },
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1602080858428-57174f9431cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
      category: "technology",
      title: "The best laptop for Frontend engineers in 2022",
      date: "Feb 6th",
      author: {
        name: "Elsa Brown",
        avatar:
          "https://images.unsplash.com/photo-1628890923662-2cb23c2e0cfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80",
      },
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1602080858428-57174f9431cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
      category: "technology",
      title: "The best laptop for Frontend engineers in 2022",
      date: "Feb 6th",
      author: {
        name: "Elsa Brown",
        avatar:
          "https://images.unsplash.com/photo-1628890923662-2cb23c2e0cfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80",
      },
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1602080858428-57174f9431cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
      category: "technology",
      title: "The best laptop for Frontend engineers in 2022",
      date: "Feb 6th",
      author: {
        name: "Elsa Brown",
        avatar:
          "https://images.unsplash.com/photo-1628890923662-2cb23c2e0cfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80",
      },
    },
  ];

  const items = item.map((item) => <JobCardItem key={item.id} {...item} />);
  return (
    <Container py="xl">
      <SimpleGrid cols={1}>{items}</SimpleGrid>
    </Container>
  );
};

export default JobCardList;

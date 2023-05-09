import FilteringApp from "./components/filtering/FilteringApp";
import HeaderApp from "./components/header/HeaderApp";
import JobCardItem from "./components/jobcard/JobCardItem";
import JobCardList from "./components/jobcard/JobCardList";
import JobDetailList from "./components/jobcard/JobDetailList";
import PaginationApp from "./components/pagination/PaginationApp";
import SearchingApp from "./components/searching/SearchingApp";

function App() {
  const links = [
    {
      link: "/about",
      label: "Features",
    },
    {
      link: "/pricing",
      label: "Pricing",
    },
    {
      link: "/learn",
      label: "Learn",
    },
    {
      link: "/community",
      label: "Community",
    },
  ];

  const item = {
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
  };
  return (
    <>
      <HeaderApp links={links} />
      <SearchingApp />
      <FilteringApp />
      <JobCardList />
      <PaginationApp />
      <JobDetailList />
    </>
  );
}

export default App;

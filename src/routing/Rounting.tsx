import { Routes, Route } from "react-router-dom";
import JobFavoritePage from "../pages/JobFavoritePage";
import JobSearchPage from "../pages/JobSearchPage";
import EmptyPage from "../pages/EmptyPage";
import JobDetailPage from "../pages/JobDetailPage";
import { ROUTE_LINKS } from "../constants";

const Rounting = () => {
  return (
    <Routes>
      <Route index element={<JobSearchPage />} />
      <Route
        path={ROUTE_LINKS.favoritePage.link}
        element={<JobFavoritePage />}
      />
      <Route
        path={`${ROUTE_LINKS.detailPage.link}/:id`}
        element={<JobDetailPage />}
      />
      <Route path={ROUTE_LINKS.emptyPage.link} element={<EmptyPage />} />
    </Routes>
  );
};

export default Rounting;

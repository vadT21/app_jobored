import { Routes, Route } from "react-router-dom";
import { ROUTE_LINKS } from "../constants";
import { EmptyPage, DetailPage, SearchPage, FavoritePage } from "../pages";

const Rounting = () => {
  return (
    <Routes>
      <Route index element={<SearchPage />} />
      <Route path={ROUTE_LINKS.favoritePage.link} element={<FavoritePage />} />
      <Route
        path={`${ROUTE_LINKS.detailPage.link}/:id`}
        element={<DetailPage />}
      />
      <Route path={ROUTE_LINKS.emptyPage.link} element={<EmptyPage />} />
    </Routes>
  );
};

export default Rounting;

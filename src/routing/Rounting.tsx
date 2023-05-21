import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { ROUTE_LINKS } from "../constants";
import { EmptyPage, DetailPage, SearchPage, FavoritePage } from "../pages";
import { Layout } from "../layout/Layout";

//создаем роуты pages
// empty явл. как самостоятельной так и при любой другой ссылке который нету
export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={ROUTE_LINKS.searchPage.link} element={<Layout />}>
      <Route index element={<SearchPage />} />
      <Route path={ROUTE_LINKS.favoritePage.link} element={<FavoritePage />} />
      <Route
        path={`${ROUTE_LINKS.detailPage.link}/:id`}
        element={<DetailPage />}
      />
      <Route path={ROUTE_LINKS.emptyPage.link} element={<EmptyPage />} />
      <Route path="*" element={<EmptyPage />} />
    </Route>,
  ),
);

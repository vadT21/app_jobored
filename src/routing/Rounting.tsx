import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { ROUTE_LINKS } from "../constants";
import { EmptyPage, DetailPage, SearchPage, FavoritePage } from "../pages";
import { Layout } from "../layout/Layout";

//создаем роуты pages
export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={ROUTE_LINKS.homePage.url} element={<Layout />}>
      <Route index element={<SearchPage />} />
      <Route path={ROUTE_LINKS.favoritePage.url} element={<FavoritePage />} />
      <Route
        path={`${ROUTE_LINKS.detailPage.url}/:id`}
        element={<DetailPage />}
      />
      <Route path="*" element={<EmptyPage />} />
    </Route>,
  ),
);

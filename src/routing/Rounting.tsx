import { Routes, Route } from "react-router-dom";
import JobFavoritePage from "../pages/JobFavoritePage";
import JobSearchPage from "../pages/JobSearchPage";
import EmptyPage from "../pages/EmptyPage";
import JobDetailPage from "../pages/JobDetailPage";
import {
  JOB_DETAIL_LINK,
  JOB_EMPTY_LINK,
  JOB_FAVORITE_LINK,
} from "../constants";

const Rounting = () => {
  return (
    <Routes>
      <Route index element={<JobSearchPage />} />
      <Route path="/favorite" element={<JobFavoritePage />} />
      <Route path="/job/:id" element={<JobDetailPage />} />
      <Route path="*" element={<EmptyPage />} />
    </Routes>
  );
};

export default Rounting;

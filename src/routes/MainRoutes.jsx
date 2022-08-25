import { Routes, Route } from "react-router-dom";
import CriclyticsPage from "../pages/CriclyticsPage";
import { FantasyCenter } from "../pages/FantasyCenter";

import { HomePage } from "../pages/HomePage";
import { News } from "../pages/News";

import { Series } from "../pages/Series";
import SchedulePage from "../pages/SchedulePage";
export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route
        path="/fantasy-research-center"
        element={<FantasyCenter />}
      ></Route>
      <Route path="/criclytics" element={<CriclyticsPage />}></Route>
      <Route path="/schedule" element={<SchedulePage />}></Route>
      <Route path="/series" element={<Series />}></Route>
      <Route path="/news" element={<News />}></Route>
    </Routes>
  );
};

export default MainRoutes;

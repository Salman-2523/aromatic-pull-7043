import { Routes, Route } from "react-router-dom";
import CriclyticsPage from "../pages/CriclyticsPage";

import { HomePage } from "../pages/HomePage";


import Series from "../pages/Series";
import SchedulePage from "../pages/SchedulePage";
import Fantansy from "../pages/Fantasy";
import News from "../components/News/News";
export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/fantasy-research-center" element={<Fantansy />}></Route>
      <Route path="/criclytics" element={<CriclyticsPage />}></Route>
      <Route path="/schedule" element={<SchedulePage />}></Route>
      <Route path="/series" element={<Series />}></Route>
      <Route path="/news" element={<News />}></Route>
    </Routes>
  );
};

export default MainRoutes;

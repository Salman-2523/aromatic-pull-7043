import { Routes, Route } from "react-router-dom";
import CriclyticsPage from "../pages/CriclyticsPage";

import { HomePage } from "../pages/HomePage";


import Series from "../pages/Series";
import SchedulePage from "../pages/SchedulePage";
import Fantansy from "../pages/Fantasy";
import News from "../components/News/News";
import LatestNews from "../pages/News/LatestNews";
import AllNews from "../pages/News/AllNews";
import ThisDay from "../pages/News/ThisDay";
import Feature from "../pages/News/Feature";
import MatchRelated from "../pages/News/MatchRelated";
export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/fantasy-research-center" element={<Fantansy />}></Route>
      <Route path="/criclytics" element={<CriclyticsPage />}></Route>
      <Route path="/schedule" element={<SchedulePage />}></Route>
      <Route path="/series" element={<Series />}></Route>
      <Route path="/news/*" element={<News />}>
      <Route exact path="latest" element={<LatestNews/>} />
      <Route exact path='news' element={<AllNews/>} />
      <Route exact path='thisday' element={<ThisDay/>} />
      <Route exact path="match" element={<MatchRelated />} />
      <Route exact path='feature' element={<Feature />} />
      
      </Route>
    
    </Routes>
  );
};

export default MainRoutes;

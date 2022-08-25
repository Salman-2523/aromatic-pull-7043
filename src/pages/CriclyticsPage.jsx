import React from "react";
import Carousel from "../components/criclyticsPage/Carousel";
import StatusField from "../components/criclyticsPage/StatusField";

const CriclyticsPage = () => {
  const matchstatus = ["upcoming", "live", "completed"];

  return (
    <div>
      <Carousel />
      {matchstatus.map((status, i) => {
        return <StatusField key={i} status={status} />;
      })}
    </div>
  );
};

export default CriclyticsPage;

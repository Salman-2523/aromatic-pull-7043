import React from "react";
import NewsAllRoute from "../../pages/News/NewsAllRoute";
import NewsNav from "../../pages/News/NewsNav";
import "../../styles/News.css";
const News = () => {
  return (
    <div className="fw13-main-container" style={{ margin: "auto" }}>
      <NewsNav />

      <NewsAllRoute />
    </div>
  );
};

export default News;

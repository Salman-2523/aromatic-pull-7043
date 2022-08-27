import { Link } from "react-router-dom";
import "../../styles/nav.css";

export const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="nav">
        <img src="https://www.cricket.com/cricket.com.svg" alt="" />
        <div className="main-nav">
          <Link to="/fantasy-research-center">
            <div className="item">
              <img
                src="https://www.cricket.com/svgs/icons/frc.svg"
                alt=""
                height="20px"
                width="22px"
              />
              <p>Fantasy Center</p>
            </div>
          </Link>
          <Link to="/criclytics">
            <div className="item">
              <img
                src="https://www.cricket.com/svgs/icons/criclytics-icon.svg"
                alt=""
                height="20px"
                width="22px"
              />
              <p>Cryclytics</p>
            </div>
          </Link>
          <Link to="/schedule">
            <div className="item">
              <img
                src="https://www.cricket.com/svgs/icons/schedule-icon.svg"
                alt=""
                height="20px"
                width="22px"
              />
              <p>Schedule</p>
            </div>
          </Link>
          <Link to="/series">
            <div className="item">
              <img
                src="https://www.cricket.com/svgs/icons/series-icon.svg"
                alt=""
                height="20px"
                width="22px"
              />
              <p>Series</p>
            </div>
          </Link>
          <Link to="/news">
            <div className="item">
              <img
                src="https://www.cricket.com/svgs/icons/news-and-articles-icon.svg"
                alt=""
                height="20px"
                width="22px"
              />
              <p>News</p>
            </div>
          </Link>
          <Link to="/fantasy-research-center">
            <div className="item">
              <img
                src="https://www.cricket.com/svgs/icons/video-icon.svg"
                alt=""
                height="20px"
                width="22px"
              />
              <p>Videos</p>
            </div>
          </Link>
          <Link to="/fantasy-research-center">
            <div className="item">
              <img
                src="https://www.cricket.com/svgs/icons/players-icon.svg"
                alt=""
                height="20px"
                width="22px"
              />
              <p>Players</p>
            </div>
          </Link>
          <Link to="/fantasy-research-center">
            <div className="item">
              <img
                src="https://www.cricket.com/svgs/icons/teams-icon.svg"
                alt=""
                height="20px"
                width="22px"
              />
              <p>Teams</p>
            </div>
          </Link>
          <Link to="/fantasy-research-center">
            <div className="item">
              <img
                src="https://www.cricket.com/svgs/icons/more.svg"
                alt=""
                height="20px"
                width="22px"
              />
              <p>More</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

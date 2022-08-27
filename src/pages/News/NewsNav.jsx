import React from 'react'
import { NavLink } from 'react-router-dom'
import "../../styles/NewsNav.css"

const NewsNav = () => {

  return (
    <div className='fw13-nav-main'>
       <div>
       <h1 style={{fontSize:"1.5rem", fontWeight:"500"}}>News Latest</h1>
       </div>
         <div className='fw13-nav-link'>
            <NavLink  to="/news/latest" className="fw13-btn">
              Latest 
            </NavLink>
            <NavLink to="/news/news" className="fw13-btn">
              News 
            </NavLink>
            <NavLink to="/news/thisday" className="fw13-btn">
              On This Day
            </NavLink>
            <NavLink to="/news/match" className="fw13-btn">
              Match Related
            </NavLink>
            <NavLink to="/news/feature" className="fw13-btn">
              Features
            </NavLink>
         </div>

    </div>
  )
}

export default NewsNav

import React from 'react'
import { NavLink } from 'react-router-dom'

const NewsNav = () => {

  return (
    <div className='fw13-nav-main'>
      <div>
        <h1>latest News</h1>
      </div>
        
         <div>
            <NavLink  to="/" >
              Latest 
            </NavLink>
            <NavLink to="/news">
              News 
            </NavLink>
            <NavLink to="/thisday">
              On This Day
            </NavLink>
            <NavLink to="/match">
              Match Related
            </NavLink>
            <NavLink to="/feature">
              Features
            </NavLink>
         </div>

    </div>
  )
}

export default NewsNav

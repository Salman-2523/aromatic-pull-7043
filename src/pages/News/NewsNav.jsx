import React from 'react'
import { NavLink } from 'react-router-dom'
import "../../styles/NewsNav.css"

const NewsNav = () => {

  return (
    <div className='fw13-nav-main'>
      <div>
        <h1>latest News</h1>
      </div>
        
         <div className='fw13-nav-link'>
            <link  to="/latest" >
              Latest 
            </link>
            <link to="/news">
              News 
            </link>
            <link to="/thisday">
              On This Day
            </link>
            <link to="/match">
              Match Related
            </link>
            <link to="/feature">
              Features
            </link>
         </div>

    </div>
  )
}

export default NewsNav

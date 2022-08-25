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
            <NavLink >
              News 
            </NavLink>
            <NavLink >
              On This Day
            </NavLink>
            <NavLink >
              Match Related
            </NavLink>
            <NavLink >
              Features
            </NavLink>
         </div>

    </div>
  )
}

export default NewsNav

import React from 'react'
import NewsAllRoute from '../../pages/News/NewsAllRoute'
import NewsNav from '../../pages/News/NewsNav'
 import "./News.css"
const News = () => {
  return (
    <div className='fw13-main-container'>
   <div  className='fw13-nav-container'>  <NewsNav /></div>
  <div className='fw13-detail-container'>  <NewsAllRoute/></div>
  
    </div>
  )
}

export default News

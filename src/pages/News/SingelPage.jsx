import React from 'react'
import "../../styles/Singlepage.css"
const SingelPage = ({item}) => {
  return (
    <div className='fw13-single-conatiner'>
    <div className='fw13-img-conatiner'>
      <img src={item.imageUrl} />
    </div>

    <div className='fw13-detail-conatiner'>
      <h2>{item.heading}</h2>
      <div>{item.subHeading}</div>
    </div>
      
    </div>
  )
}

export default SingelPage

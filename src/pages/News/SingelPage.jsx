import React from 'react'
import "../../styles/Singlepage.css"
const SingelPage = ({item}) => {
  var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today =  dd +'/' + mm + '/' + yyyy;
  return (
    <div className='fw13-single-conatiner'>
    <div className='fw13-img-conatiner'>
      <img src={item.imageUrl} />
    </div>

    <div className='fw13-detail-conatiner'>
      <h2>{item.heading}</h2>
      <div>{item.subHeading}</div>

      <div className='fw13_188_date'>

        <div> Title</div>
        <div>{today}</div>

      </div>

    </div>
      
    </div>
  )
}

export default SingelPage

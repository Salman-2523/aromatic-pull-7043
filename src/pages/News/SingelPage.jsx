import React from 'react'
import { NavLink } from 'react-router-dom';
import "../../styles/Singlepage.css"
const SingelPage = ({item}) => {

  var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today =  dd +'/' + mm + '/' + yyyy;


  return (
    <div className='fw13-single-conatiner' key={item.id}>
    <div className='fw13-img-conatiner'>
    <NavLink to="/">
    <img src={item.imageUrl} style={{width:"98%" ,height:"98%"}}/>
    </NavLink>
   
    </div>

    <div className='fw13-detail-conatiner'>
      <h1 style={{fontSize:"1rem", fontWeight:"500"}}>{item.heading}</h1>
      <div>{item.subHeading}</div>

      <div className='fw13_188_date'>

        <div> Cricket.stuff</div>
        <div>{today}</div>

      </div>

    </div>
      
    </div>
  )
}

export default SingelPage

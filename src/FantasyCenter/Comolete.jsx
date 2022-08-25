import React from 'react';
import "./Complete.css"
import axios from 'axios';
import {useState,useEffect} from 'react';

const Comolete = () => {

    const [data,setData]=useState([])
    function getData(){
        axios
        .get("https://62f329f2a84d8c96811e73d7.mockapi.io/Complete")
        .then((res)=>{
            console.log(res.data)
            setData(res.data)
        })
       
    }

    useEffect(()=>{
        getData();
    },[])

  return (
    <div  >
   
      
      <div className='gridB'>
     {data.map((each)=>{
        return(
            <div className='crdd'>
          
          <div className='ttt'>{each.Dateteam}</div>
          <div className='winteam'>
            <img src={each.imgt1} alt='flag'/>
            <p className='winT'>{each.tm1}</p>
            <p className='vss'>Vs</p>
            <p className='vsss'>{each.tm2}</p>

          </div>
          <div className='com'>{each.title}</div>
          
          
        
      </div>
        )
     
     })}
     </div>
     
    </div>
  );
}

export default Comolete;

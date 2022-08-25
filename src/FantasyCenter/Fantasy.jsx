import React from 'react';
import "./Fantasy.css"
import axios from 'axios';
import {useState,useEffect} from 'react';

const Fantansy = () => {

    const [data,setData]=useState([])
    function getData(){
        axios
        .get("https://62f329f2a84d8c96811e73d7.mockapi.io/CricketUpcooming")
        .then((res)=>{
            console.log(res.data)
            setData(res.data)
        })
       
    }

    useEffect(()=>{
        getData();
    },[])

  return (
    <div className='card' >
    <div className='hello'>
    <h4 >Fantasy Center</h4>
    </div>
      <h4 className='fantasytxt'>Upcomming Matches</h4>
      <div className='gridA'>
     {data.map((each)=>{
        return(
            <div className='crd'>
        <p className='tmtxt'>{each.Dateteam}</p>
        <div className='imf'>
        <img src={each.imgt1} alt='hh'/>

        <div className='vs'>
        <p className='teamName'>{each.tm1}</p>
        <p className='vsname'>VS</p>
        <p className='teamName'>{each.tm2}</p>
        </div>
        <img src={each.imgt2} alt='hh'/>
        </div>
        <span className='startedTime'>Not started yet</span><br/>
        <div className='locanddate'>
        <span>{each.date}</span>
        <span>|<i className='fas fa-map-marker-alt' ></i></span>
        <span>{each.loc}</span>
        </div>
      </div>
        )
     
     })}
     </div>
     <h4 className='hhhhh'>Completed Matches</h4>
    </div>
  );
}

export default Fantansy;

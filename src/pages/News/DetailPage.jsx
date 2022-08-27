import React ,{ useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
const DetailPage = () => {
    const {id, end}=useParams();
    console.log("id",id)
    const [current, setCurrent]=useState({});
    useEffect(()=>{
          
        axios.get(`http://localhost:8080/${end}/${id}`)
        .then((res)=>
         {
          console.log(res)
        setCurrent(res.data)
         })
  
         .catch((err)=>{
          console.log(err)
         })
      },[])

      console.log("curr",current)
  return (
    <div>
      <h1>Detail</h1>
    </div>
  )
}

export default DetailPage

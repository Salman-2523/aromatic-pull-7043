
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getData } from '../../redux/newsReducer/action'
import SingelPage from './SingelPage'
const MatchRelated = () => {
  const dispatch=useDispatch()
  const data=useSelector((store)=>store.newsReducer.data)
  console.log("data", data)
  useEffect(()=>{
 if(data.length===0)
 {
  dispatch(getData())
 }
  },[])

  return (
    <div className='fw_13-container'>
    {
      data.map((item)=>{
        return  <SingelPage item={item}  key={item.id}/>
      })
    }
    </div>
  )
}

export default MatchRelated

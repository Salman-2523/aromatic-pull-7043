import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getData } from '../../redux/newsReducer/action'
import SingelPage from './SingelPage'

const Feature = () => {
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
        return  <SingelPage item={item}  key={item.id} />
      })
    }
    </div>
  )
  return (
    <div>
      <h2>Feature</h2>
    </div>
  )
}

export default Feature

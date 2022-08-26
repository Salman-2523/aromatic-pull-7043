import React from 'react'
import { useSelector } from 'react-redux'

const AllNews = () => {

  const data=useSelector((store)=>store.newsReducer.data)
  console.log("data", data)

  return (
    <div>
      <h2>News</h2>
    </div>
  )
}

export default AllNews

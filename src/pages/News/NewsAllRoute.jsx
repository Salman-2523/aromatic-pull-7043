
import React from 'react'
import { Routes ,Route} from 'react-router-dom'
import AllNews from './AllNews'

import LatestNews from './LatestNews'
import ThisDay from './ThisDay'

const NewsAllRoute = () => {
  return (
    <div>
      <h2>Route</h2>
      <Routes>
        <Route  path="/" element={<LatestNews/>} />
   <Route  path='/news' element={<AllNews/>} />
   <Route path='/thisday' element={<ThisDay/>} />
       
      </Routes>
    </div>
  )
}

export default NewsAllRoute

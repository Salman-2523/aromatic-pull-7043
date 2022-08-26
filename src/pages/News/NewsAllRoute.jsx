
import React from 'react'
import { Routes ,Route} from 'react-router-dom'
import AllNews from './AllNews'
import MatchRelated from "./MatchRelated"
import LatestNews from './LatestNews'
import ThisDay from './ThisDay'
import Feature from "./Feature"
const NewsAllRoute = () => {
  return (
    <div>
      <h2>Route</h2>
      <Routes>
        <Route  path="/latest" element={<LatestNews/>} />
   <Route  path='/news' element={<AllNews/>} />
   <Route path='/thisday' element={<ThisDay/>} />
       <Route path="/match" element={<MatchRelated />} />
       <Route path='/feature' element={<Feature />} />

      </Routes>
    </div>
  )
}

export default NewsAllRoute

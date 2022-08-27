
import React from 'react'
import { Routes ,Route} from 'react-router-dom'
import AllNews from './AllNews'
import MatchRelated from "./MatchRelated"
import LatestNews from './LatestNews'
import ThisDay from './ThisDay'
import Feature from "./Feature"
import DetailPage from './DetailPage'
const NewsAllRoute = () => {
  return (
    <div>
 
      <Routes>
        <Route exact path="/latest" element={<LatestNews/>} />
   <Route exact path='/news/*' element={<AllNews/>} />
   <Route exact path='/thisday' element={<ThisDay/>} />
       <Route exact path="/match" element={<MatchRelated />} />
       <Route exact path='/feature' element={<Feature />} />
       <Route path="/:end/:id" element={<DetailPage/>} />
      </Routes>
    </div>
  )
}

export default NewsAllRoute

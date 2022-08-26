import React from "react";
import {Route,Routes,Link} from "react-router-dom";
import {Upcoming} from "./Upcoming";
import {Ongoing} from "./Ongoing";
import {Completed} from "./Completed";
import {All} from "../components/All"
import { International } from "../components/International";
import { Domestic } from "../components/Domestic";
import { Womens } from "../components/Womens";
import {useDispatch,useSelector} from "react-redux";
import {useEffect} from "react";
import {getData,getUpInter} from "../redux/seriesreducer/action"
import Series from "./Series";

const MainRoutes = () => {
    const dispatch = useDispatch();
    const upcomingAllData = useSelector(store => store.seriesReducer.data)
    console.log(upcomingAllData);

//    function getAll() {
//    return dispatch(getData)
//    }

//    function getItem(){
//    return dispatch(getUpInter)
//    }


    
    return(
        <div>
            <Routes>
                
                <Route index element={<Upcoming />} />
                <Route path="/upcoming" element={<Upcoming />}>
                    <Route index element={ <All />} />
                   <Route path="all" element={ 
                     upcomingAllData?.map((item)=>{
                            // console.log(item.match)
                        return    <Series key={item.id} item={item} />
                        })
                        } />
                   <Route path="international" element={
                    upcomingAllData.map((item)=>{
                     return   <International key={item.id} item={item}  />
                    })
                   
                   }
                    />
                   <Route path="domestic" element={<Domestic />} />
                   <Route path="womens" element={<Womens />} />

                </Route>    
                   
                <Route path="/Ongoing" element={<Ongoing />}>
                   <Route path="all" element={<All />} />
                   <Route path="international" element={<International />} />
                   <Route path="domestic" element={<Domestic />} />
                   <Route path="womens" element={<Womens />} />

                </Route>    
              
                <Route path="/Completed" element={<Completed />}>
               
                   <Route path="all" element={<All />} />
                   <Route path="international" element={<International />} />
                   <Route path="domestic" element={<Domestic />} />
                   <Route path="womens" element={<Womens />} />


                 </Route>   
            </Routes>

        </div>
    )
}

export {MainRoutes}

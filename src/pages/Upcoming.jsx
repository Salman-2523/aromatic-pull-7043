import {React,useEffect} from "react";
import {Navbar2} from "../components/Navbar2";
import {Route,Routes,Link,Outlet} from "react-router-dom";
import {All} from "react";
import { International } from "../components/International";
import {getData} from "../redux/seriesreducer/action"
import { useDispatch } from "react-redux";


const Upcoming = () => {


    const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getData);
},[])
return(
    <div>
      <div className="upcomingNav">
            <Link to="/upcoming/all">All</Link>
            <Link to="/upcoming/international">International</Link>
            <Link to="/upcoming/domestic">Domestic</Link>
            <Link to="/upcoming/womens">Womens</Link>
            </div>
            <Outlet /> 

            
      
    </div>
)
}

export {Upcoming}
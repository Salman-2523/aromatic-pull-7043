import {React,useEffect} from "react";
import {Route,Routes,NavLink,Outlet, useParams} from "react-router-dom";

import {getData} from "../redux/seriesreducer/action"
import { useDispatch } from "react-redux";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { SubSeriesTab } from "./SubSeriesTab";

// import { useParams } from "react-router-dom";


const Upcoming = () => {
  
  
// console.log(useParams())
  const t = "upcoming";
 const customStyle={
    width:"100px",
    height:"26px",
    border:"1px solid black",
    borderRadius:"20px",
    textAlign:"center",
    backgroundColor:"none"
    
  }
  const activeStyle = {
    ...customStyle,
    backgroundColor:"brown",
    color:"white",
    border:"none"
  }

  const interStyle = {
    ...customStyle,
    backgroundColor:"green",
    color:"white",
    border:"none"
  }

  const domestStyle = {
    ...customStyle,
    backgroundColor:"violet",
    color:"white",
    border:"none"
  }

  const womenStyle = {
    ...customStyle,

    backgroundColor:"red",
    color:"white",
    border:"none"
  }

  const baseStyle = {
    // ...customStyle,

  }


    const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getData());
},[])
return(
    <div>
     <SubSeriesTab status={'upcoming'}/>













      {/* <div className="upcomingNav" style={{width:"60%",display:"flex",gap:"20px",margin:"auto",justifyContent:"space-between"}}>
            <NavLink style={({isActive}) => {
             return isActive ? activeStyle : baseStyle
            }} to={`/series/${t}/all`}><div style={customStyle}>All</div></NavLink>
            <NavLink style={({isActive}) => {
             return isActive ? interStyle : baseStyle
            }} to="/series/upcoming/international"><div style={customStyle}>International</div></NavLink>
            <NavLink style={({isActive}) => {
             return isActive ? domestStyle : baseStyle
            }} to="/series/upcoming/domestic"><div style={customStyle}>Domestic</div></NavLink>
            <NavLink style={({isActive}) => {
             return isActive ? womenStyle : baseStyle
            }} to="/series/upcoming/womens"><div style={customStyle}>Womens</div></NavLink>
            </div>
            <Outlet />  */}

            
      
    </div>
)
}

export {Upcoming}
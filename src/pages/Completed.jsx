import {React,useEffect} from "react";
import {Link,NavLink,Outlet} from "react-router-dom"
import { useDispatch } from "react-redux";
import { getCompAll } from "../redux/seriesreducer/action";
import { SubSeriesTab } from "./SubSeriesTab";

const Completed = () => {
    
    const customStyle={
        width:"95px",
        height:"26px",
        border:"1px solid black",
        borderRadius:"20px",
        textAlign:"center",
        
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
    dispatch(getCompAll);
},[])
    return(
        <div>
                    <SubSeriesTab status={'complete'}/>

           {/* <div className="upcomingNav" style={{width:"60%",display:"flex",gap:"20px",margin:"auto",justifyContent:"space-between"}}>
            <NavLink style={({isActive}) => {
             return isActive ? activeStyle : baseStyle
            }} to={`/series/completed/all`}><div style={customStyle}>All</div></NavLink>
            <NavLink style={({isActive}) => {
             return isActive ? interStyle : baseStyle
            }} to="/series/completed/international"><div style={customStyle}>International</div></NavLink>
            <NavLink style={({isActive}) => {
             return isActive ? domestStyle : baseStyle
            }} to="/series/completed/domestic"><div style={customStyle}>Domestic</div></NavLink>
            <NavLink style={({isActive}) => {
             return isActive ? womenStyle : baseStyle
            }} to="/series/completed/womens"><div style={customStyle}>Womens</div></NavLink>
            </div>
            <Outlet />  */}

            
        </div>
    )
}

export {Completed}
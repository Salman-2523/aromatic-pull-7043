import {React} from "react";
import {Navbar2} from "../components/Navbar2";
import {Route,Routes ,Link,Outlet, NavLink,useParams} from "react-router-dom"
import { All } from "../components/All";
import { International } from "../components/International";


const Ongoing = () => {
    let temp = useParams();
    temp.text="ongoing"
    

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
    return(
        <div>
            <div className="ongoingNav" style={{width:"60%",display:"flex",gap:"20px",margin:"auto",justifyContent:"space-between"}}>
            <NavLink style={({isActive}) => {
             return isActive ? activeStyle : baseStyle
            }} to="/series/ongoing/all"><div style={customStyle}>All</div></NavLink>
            <NavLink style={({isActive}) => {
             return isActive ? interStyle : baseStyle
            }} to="/series/ongoing/international"><div style={customStyle}>International</div></NavLink>
            <NavLink style={({isActive}) => {
             return isActive ? domestStyle : baseStyle
            }} to="/series/ongoing/domestic"><div style={customStyle}>Domestic</div></NavLink>
            <NavLink style={({isActive}) => {
             return isActive ? womenStyle : baseStyle
            }} to="/series/ongoing/womens"><div style={customStyle}>Womens</div></NavLink>
            </div>
            <Outlet /> 

            
           
        </div>
        
    )
}

export {Ongoing}
import React from "react";
import { NavLink } from "react-router-dom";


const Navbar = () => {
    const activeStyle = {
        textDecoration :"underline",
        
        color:"red"
    }

    const baseStyle = {
        textDecoration:"none",
        color:"black"
    }
    return(
        <div>
              <NavLink style={({isActive}) => 
            isActive ? activeStyle : baseStyle
         } to="/upcoming">UPCOMING</NavLink>
         <NavLink style={({isActive}) => 
            isActive ? activeStyle : baseStyle
         } to="ongoing">ONGOING</NavLink>
         <NavLink style={({isActive}) => 
            isActive ? activeStyle : baseStyle
         } to="completed">COMPLETED</NavLink>
        </div>
    )
}

export {Navbar} ;
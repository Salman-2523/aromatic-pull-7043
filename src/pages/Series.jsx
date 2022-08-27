import {React} from "react";
import {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import {getData} from "../redux/seriesreducer/action";
import { MainRoutes } from "./MainRoutes";
import {Navbar} from "../components/Navbar"
import {Link,Outlet,NavLink} from "react-router-dom";


// const All = ({item}) => {
    

const Series = () => {

    const upcomingAllData = useSelector(store => store)
    console.log(upcomingAllData);
    // const dispatch = useDispatch()
    // console.log(item)


//     const dispatch = useDispatch()
//   useEffect(() => {
//     dispatch(getData);
// },[])
const activeStyle = {
    textDecoration :"underline",
    // gap:"20px",
    
    color:"red"
}

const baseStyle = {
    textDecoration:"none",
    color:"black"
}

   
    
    return(
        <div>
            {/* <Navbar /> */}
            
            <div className="upcomingNav" style={{width:"60%",display:"flex",gap:"20px",margin:"auto",justifyContent:"space-between",marginTop:"20px",marginBottom:"20px"}}>
            <NavLink style={({isActive}) => 
            isActive ? activeStyle : baseStyle
         }  to="/series/upcoming">UPCOMING</NavLink>
            <NavLink style={({isActive}) => 
            isActive ? activeStyle : baseStyle
         } to="/series/ongoing">ONGOING</NavLink>
            <NavLink style={({isActive}) => 
            isActive ? activeStyle : baseStyle
         } to="/series/completed">COMPLETED</NavLink>
            
            </div>
            
            <Outlet /> 
            {/* <MainRoutes /> */}
        </div>
        
    )
}


export default Series
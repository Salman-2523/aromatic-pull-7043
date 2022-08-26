import {React} from "react";
import {Navbar2} from "../components/Navbar2";
import {Route,Routes ,Link,Outlet} from "react-router-dom"
import { All } from "../components/All";
import { International } from "../components/International";


const Ongoing = () => {
    return(
        <div>
            <div  className="ongoingNav">
            <Link to="/ongoing/all" >All</Link>
            <Link to="/ongoing/international" >International</Link>
            <Link to="/ongoing/domestic">Domestic</Link>
            <Link to="/ongoing/womens">Womens</Link>
            </div>
            <Outlet />
           
        </div>
        
    )
}

export {Ongoing}
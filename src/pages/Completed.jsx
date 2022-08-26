import {React} from "react";
import {Navbar2} from "../components/Navbar2";
import {Link,Outlet} from "react-router-dom"

const Completed = () => {
    return(
        <div>
           <div  className="completedNav">
            <Link to="/completed/all" >All</Link>
            <Link to="/completed/international" >International</Link>
            <Link to="/completed/domestic">Domestic</Link>
            <Link to="/completed/womens">Womens</Link>
            </div>
            <Outlet />
        </div>
    )
}

export {Completed}
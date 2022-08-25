import { useEffect } from "react";
import {React} from "react";
import { useDispatch } from "react-redux";
import { getUpInter } from "../redux/seriesreducer/action";

const International = ({getItem,item}) => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getUpInter)
    },[])
    return(
        <div style={{width:"70%",height:"100px",display:"flex",border:"1px solid grey",margin:"auto",justifyContent:"space-between",marginTop:"10px"}}>

            <div style={{marginLeft:"10px",textAlign:"left"}}>
                <h4>{item.match}</h4>

                <div style={{display:"flex",fontSize:"12px"}}>
                    <div style={{width:"20px",height:"20px",border:"0.5px solid black",borderRadius:"50px",textAlign:"center",backgroundColor:"grey",color:"white",marginRight:"5px"}}>
                  {}
                  </div>
                   <div>
                    {/* {`${}`} */}
                    </div>
                    </div>
            </div>
            <div style={{width:"30%",border:"1px solid black",backgroundColor:"blur",textAlign:"center",backgroundColor:"grey",color:"white",padding:"10px"}}>
                {/* <h3>{`${} To ${}`}</h3> */}
            </div>
        </div>
        
    )
}

export {International};
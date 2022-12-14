import {React, useEffect} from "react";
import { useDispatch,useSelector } from "react-redux";
import { getCompAll } from "../redux/seriesreducer/action";

const Domestic = ({status}) => {
    const data = useSelector(store => store.seriesReducer.data)
    const datas=data.filter(series=>(series.league=='Domestic')&&(series.status==status))

   
    return(
        <div>
        {datas.map(item =>(
        <div key={item.id} style={{width:"70%",height:"100px",display:"flex",border:"1px solid grey",margin:"auto",justifyContent:"space-between",marginTop:"10px"}}>

            <div style={{marginLeft:"10px",textAlign:"left"}}>
                <h4>{item.match}</h4>

                <div style={{display:"flex",fontSize:"12px"}}>
                    <div style={{width:"20px",height:"20px",border:"0.5px solid black",borderRadius:"50px",textAlign:"center",backgroundColor:"grey",color:"white",marginRight:"5px"}}>
                  {item.total}
                  </div>
                   <div>
                    {`${item.type}`}
                    </div>
                    </div>
            </div>
            <div style={{width:"30%",border:"1px solid black",backgroundColor:"blur",textAlign:"center",backgroundColor:"grey",color:"white",padding:"10px"}}>
                <h3>{`${item.startingDate} To ${item.endingDate}`}</h3>
            </div>
        </div>
        ))}
        </div>
        
    )
}

export {Domestic}
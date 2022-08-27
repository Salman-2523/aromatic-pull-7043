import {React} from "react";
import {useEffect} from "react";
import { useDispatch } from "react-redux";
import {getData,getCompAll} from "../redux/seriesreducer/action";
import {useSelector} from "react-redux";
import { useParams } from "react-router-dom";

// import {useLocation} from "react-router-dom";


const All = () => {
    const temp = useParams();
    //  temp.test = 1;
    console.log(temp);
const dispatch = useDispatch()   
const datas = useSelector(store => store.seriesReducer.data)
    

    
        useEffect(() => {
        dispatch(getData)
        },[])


        
    




//     const dispatch = useDispatch()
//   useEffect(() 



 return(
     <div>
        {datas.map(item => (
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
       </div>))}
 </div>)}


export {All}

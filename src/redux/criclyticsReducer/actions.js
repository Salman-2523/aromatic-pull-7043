import axios from 'axios';
import * as types from './actionTypes';



export const getCriclyticsApi=()=>(dispatch)=>{

    dispatch({type:types.GET_CRICLYTICS_REQUEST});
    axios.get('http://localhost:8080/criclytics').then((res)=>{
        dispatch({type:types.GET_CRICLYTICS_SUCCESS,payload:res.data});
        console.log(res.data);
    }).catch((err)=>{
        dispatch({type:types.GET_CRICLYTICS_FAILURE});
    })


}
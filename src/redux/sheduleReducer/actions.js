import axios from 'axios';
import * as types from './actionTypes';



export const getSheduleApi=()=>(dispatch)=>{

    dispatch({type:types.GET_SHEDULE_REQUEST});
    axios.get('http://localhost:8080/newSchedule').then((res)=>{
        console.log(res.data);
        dispatch({type:types.GET_SHEDULE_SUCCESS,payload:res.data});
    }).catch((err)=>{
        dispatch({type:types.GET_SHEDULE_FAILURE});
    })


}
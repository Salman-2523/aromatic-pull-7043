import * as types from "./actionTypes";
import axios from "axios";

const getData =()=> (dispatch) => {
    dispatch({type:types.GET_DATA_REQUEST})
   axios.get("http://localhost:8080/seiresData")
              .then((r) => {
                // console.log(r.data)
                 dispatch({type:types.GET_DATA_SUCCESS,payload:r.data})
              }) 
              .catch(e => {
                 dispatch({type:types.GET_DATA_FAILURE,payload:e})
              }) 
}

const getUpInter =()=> (dispatch) => {
  dispatch({type:types.GET_ITEM_REQUEST})
 axios.get("http://localhost:8080/upcomingInter")
            .then((r) => {
               dispatch({type:types.GET_ITEM_SUCCESS,payload:r.data})
            }) 
            // .catch(e => {
            //   return dispatch({type:types.GET_DATA_FAILURE,payload:e})
            // }) 
}


const getCompAll =()=>(dispatch) => {
  // dispatch({type:types.GET_ITEM_REQUEST})
 axios.get("http://localhost:8080/completedAll")
            .then((r) => {
               dispatch({type:types.GET_COMP_SUCCESS,payload:r.data})
            }) 
            // .catch(e => {
            //   return dispatch({type:types.GET_DATA_FAILURE,payload:e})
            // }) 
}


export {getData,getUpInter,getCompAll}
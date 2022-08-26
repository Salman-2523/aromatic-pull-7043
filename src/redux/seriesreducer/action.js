import * as types from "./actionTypes";
import axios from "axios";

const getData = (dispatch) => {
    dispatch({type:types.GET_DATA_REQUEST})
  return axios.get("http://localhost:8080/upcomingAll")
              .then((r) => {
                console.log(r.data)
                 dispatch({type:types.GET_DATA_SUCCESS,payload:r.data})
              }) 
              .catch(e => {
                return dispatch({type:types.GET_DATA_FAILURE,payload:e})
              }) 
}

const getUpInter = (dispatch) => {
  dispatch({type:types.GET_ITEM_REQUEST})
return axios.get("http://localhost:8080/upcomingInter")
            .then((r) => {
              return dispatch({type:types.GET_ITEM_SUCCESS,payload:r.data})
            }) 
            // .catch(e => {
            //   return dispatch({type:types.GET_DATA_FAILURE,payload:e})
            // }) 
}


export {getData,getUpInter}
import * as types from "./actionTypes";
import axios from "axios";
// const options = {
//   method: 'GET',
//   url: 'https://odds.p.rapidapi.com/v4/sports',
//   params: {all: 'true'},
//   headers: {
//     'X-RapidAPI-Key': 'b328df544emshe7050542483f3adp1c5717jsnf3b9877a820d',
//     'X-RapidAPI-Host': 'odds.p.rapidapi.com'
//   }
// };
// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });

const getData = (dispatch) => {
    dispatch({type:types.GET_NEWS_REQUEST})
  return axios.get("http://localhost:8080/newsdata")
              .then((r) => {
                console.log(r.data)
                 dispatch({type:types.GET_NEWS_SUCCESS,payload:r.data})
              }) 
              .catch(e => {
                return dispatch({type:types.GET_NEWS_FAILURE,payload:e})
              }) 
}

// const getUpInter = (dispatch) => {
//   dispatch({type:types.GET_ITEM_REQUEST})
// return axios.get("http://localhost:8080/upcomingInter")
//             .then((r) => {
//               return dispatch({type:types.GET_ITEM_SUCCESS,payload:r.data})
//             }) 
//             // .catch(e => {
//             //   return dispatch({type:types.GET_DATA_FAILURE,payload:e})
//             // }) 
// }


export {getData}
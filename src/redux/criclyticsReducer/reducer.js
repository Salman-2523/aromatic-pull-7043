import * as types from './actionTypes';

const initState={
    isLoading:false,isError:false,data:[],
}

export const criclyticsReducer=(state=initState,{type,payload})=>{

switch(type){
    case types.GET_CRICLYTICS_REQUEST:{return {...state,isLoading:true,isError:false}};
    case types.GET_CRICLYTICS_SUCCESS:{
        return {...state,isLoading:false,isError:false,data:payload}};
    case types.GET_CRICLYTICS_FAILURE:{return {...state,isLoading:false,isError:true}};

    
    
    default:return state;
}

}
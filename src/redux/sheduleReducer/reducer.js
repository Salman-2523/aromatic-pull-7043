import * as types from './actionTypes';

const initState={
    isLoading:false,isError:false,data:[],
}

export const sheduleReducer=(state=initState,{type,payload})=>{

switch(type){
    case types.GET_SHEDULE_REQUEST:{return {...state,isLoading:true,isError:false}};
    case types.GET_SHEDULE_SUCCESS:{return {...state,isLoading:false,isError:false,data:payload}};
    case types.GET_SHEDULE_FAILURE:{return {...state,isLoading:false,isError:true}};

    
    
    default:return state;
}

}
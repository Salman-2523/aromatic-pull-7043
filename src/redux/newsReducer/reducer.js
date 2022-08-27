import * as types from "./actionTypes"

const initialState = {
    data: [],
    isLoading:false,
    isError:false
}

export const newsReducer = (state=initialState,action) => {
    const {type,payload} = action;
    // console.log(payload)
    switch(type){
        case types.GET_NEWS_SUCCESS:
            return {
                ...state,
                data:payload,
                isLoading:false,
                isError:false
            }
           

        case types.GET_NEWS_REQUEST:
            return {
                ...state,
                isLoading:true,
                isError:false
            }
 
        case types.GET_NEWS_FAILURE:
            return {
                ...state,
                isLoading:false,
                isError:true
            }        
        default:
            return state;
    }
}


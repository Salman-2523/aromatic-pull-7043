import * as types from "./actionTypes"

const initialState = {
    data: [],
    isLoading:false,
    isError:false
}

export const seriesReducer = (state=initialState,action) => {
    const {type,payload} = action;
    // console.log(payload)
    switch(type){
        case types.GET_DATA_SUCCESS:
            return {
                ...state,
                data:payload,
                isLoading:false,
                isError:false
            }
            case types.GET_ITEM_SUCCESS:
            return {
                ...state,
                data:payload,
                isLoading:false,
                isError:false
            }

        case types.GET_DATA_REQUEST:
            return {
                ...state,
                isLoading:true,
                isError:false
            }

            case types.GET_ITEM_REQUEST:
                return {
                    ...state,
                    isLoading:true,
                    isError:false
                }   
        case types.GET_DATA_FAILURE:
            return {
                ...state,
                isLoading:false,
                isError:true
            }        
        default:
            return state;
    }
}


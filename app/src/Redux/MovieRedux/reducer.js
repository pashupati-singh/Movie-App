import { MOVIES_ADD, MOVIES_FAILURE, MOVIES_REQUEST, MOVIES_SUCCESS } from "./actionType"

const initialState={
    isLoading : false,
    isError:false,
    massage : "",
    data : [],
    msg:'',
}

export const reducer = (state=initialState,action) =>{
    switch(action.type){
        case MOVIES_REQUEST : return {...state,isLoading:true}
        case MOVIES_SUCCESS : return {...state,data:action.payload}
        case MOVIES_FAILURE : return {...state,isLoading:false,isError:true}
        case MOVIES_ADD : return {...state,msg:action.payload.msg}
        default : return state
    }
}
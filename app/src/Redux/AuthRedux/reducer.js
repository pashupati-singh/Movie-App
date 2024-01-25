import { LOGINFAILURE, LOGINREQUEST, LOGINSUCCESS } from "./actiontype"



const initialState = {
    token:"",
    admin:"",
    name:"",
    msg:"",
    isAuth:false,
    loading:false,
    error:false
}

export const reducer = (state=initialState,action)=>{
    switch(action.type){
        case LOGINREQUEST : return{ ...state,loading:true}
        case LOGINSUCCESS : return {...state,loading:false,msg:action.payload.msg,token:action.payload.token,isAuth:true,name:action.payload.name,admin:action.payload.admin}
        case LOGINFAILURE : return{...state,loading:false,error:true}
        default : return state
    }
}
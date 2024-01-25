import { LOGINFAILURE, LOGINREQUEST, LOGINSUCCESS } from "./actiontype"
import axios from 'axios'


export const LoginFunction = (object) => (dispatch) =>{
    dispatch({type:LOGINREQUEST})
    axios.post("https://movie-6cgo.onrender.com/users/login",object).then((res)=>dispatch({type:LOGINSUCCESS,payload:res.data}))
    .catch((err)=>dispatch({type:LOGINFAILURE}))

} 
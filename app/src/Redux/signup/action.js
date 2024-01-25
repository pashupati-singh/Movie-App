import { SIGNUPFAILURE, SIGNUPREQUEST, SIGNUPSUCCESS } from "./actiontype"
import axios from 'axios'


export const SignFunction = (object) => (dispatch) =>{
    dispatch({type:SIGNUPREQUEST})
    axios.post("https://movie-6cgo.onrender.com/users/register",object).then((res)=>dispatch({type:SIGNUPSUCCESS,payload:res.data}))
    .catch(()=>dispatch({type:SIGNUPFAILURE}))

} 
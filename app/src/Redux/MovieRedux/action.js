import axios from "axios"
import { MOVIES_ADD, MOVIES_FAILURE, MOVIES_REQUEST, MOVIES_SUCCESS, MOVIES_UPDATE } from "./actionType"


export const moviesFunction  = (token) => (dispatch) => {
    dispatch({type:MOVIES_REQUEST})
    axios.get(`https://movie-6cgo.onrender.com/movies`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    }).then((res)=>{
    console.log(res.data)
    dispatch({type:MOVIES_SUCCESS,payload:res.data})
}
    )
    .catch(()=>dispatch({type:MOVIES_FAILURE}))
}
export const moviesADDFunction = (token, obj) => (dispatch) => {
    console.log(token, obj);
    dispatch({ type: MOVIES_REQUEST });
    axios.post(`https://movie-6cgo.onrender.com/movies/add`, obj, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    })
      .then((res) => {
        console.log(res.data);
        dispatch({ type: MOVIES_ADD, payload: res.data });
      })
      .catch(() => dispatch({ type: MOVIES_FAILURE }));
  };

  export const moviesUpdateFunction = (token, obj , id) => (dispatch) => {
    console.log(token, obj);
    dispatch({ type: MOVIES_REQUEST });
    axios.patch(`https://movie-6cgo.onrender.com/update/${id}`, obj, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    })
      .then((res) => {
        console.log(res.data);
        dispatch({ type: MOVIES_UPDATE, payload: res.data });
      })
      .catch(() => dispatch({ type: MOVIES_FAILURE }));
  };
import React, { useEffect, useState } from 'react'
import style from '../css/Movie.module.css'
import { moviesFunction } from '../Redux/MovieRedux/action';
import { MovieList } from './MovieList';
import {  useDispatch, useSelector } from 'react-redux';

export const Movies = () => {
  const {data} = useSelector((store)=>store.movieReducer);
 const disptach = useDispatch()
 const {token} = useSelector((store)=>store.authReducer)

 useEffect(()=>{
    disptach(moviesFunction(token))
 },[token])

 

  return (
    <>
    <p style={{display:"flex", justifyContent:"flex-start", fontSize:"30px",fontWeight:"inherit" , marginLeft:"30px",marginBottom:"4ss0px",fontFamily:"sans-serif"}}>Movie List</p>
    <div >
      <div style={{display:"grid" , gridTemplateColumns:"repeat(3,1fr)", columnGap:"-100px",rowGap:"50px", marginTop:"10px"}}>
        {data.map((el)=>(
      <div key={el._id} className={style.mapped} style={{width:"300px",height:"300px",boxShadow: "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",borderRadius:"10px",margin:"20px",marginTop:"-20px"}}>
          <MovieList key={el._id} {...el} />
      </div>
      ))}</div>
    </div>
    </>
  )
}

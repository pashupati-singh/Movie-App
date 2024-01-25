import React, { useState } from 'react'
import { NavBar } from './NavBar'
import { Footer } from './Footer'
import { useSelector } from 'react-redux'
import { Movies } from './Movies'
import { Navigate } from 'react-router-dom'

export const Home = () => {
const {isAuth} = useSelector((store)=>store.authReducer)


if(!isAuth){
  return <Navigate to={"/login"} />
}

  return (
    <div>
       
        <Movies  />
        <Footer />
    </div>
  )
}

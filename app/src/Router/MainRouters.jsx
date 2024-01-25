import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Login } from '../Pages/Login';
import { Signup } from '../Pages/Signup';
import { Addmovies } from '../Pages/Addmovies';
import { Home } from '../Pages/Home';
import { SingleProduct } from '../Pages/SingleProduct';

export const MainRouters = () => {
  return (
    <Routes>
      <Route path='/addMovie' element = {<Addmovies />} />
      <Route path='/' element = {<Home />} />
      <Route path="/movie" element={<Addmovies />} />
      <Route path="/login" element={<Login />} />
      <Route path="/sign" element={<Signup />} />
      <Route path="/movie/:_id" element={<SingleProduct />} />
    </Routes>
  );
};

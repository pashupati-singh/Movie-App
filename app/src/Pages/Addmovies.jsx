import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import {Box, Button,  Grid, TextField } from '@mui/material';
import { NavBar } from './NavBar';
import { moviesADDFunction } from '../Redux/MovieRedux/action';

export const Addmovies = () => {
  const [formData, setFormData] = useState({
    image: '',
    title: '',
    rating:"",
    description: '',
    type:'',
  });
    const {name} = useSelector((store)=>store.authReducer);
    const {token} = useSelector((store)=>store.authReducer);
    const dispatch = useDispatch()
    
    if(name !== 'admin'){
      alert("you are not Authorized")
      return <Navigate to = "/" />
    }

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      
      const obj = {image,title,rating,description,type}
      console.log(obj,token);
      dispatch(moviesADDFunction(token,obj))
      setFormData({
        image: '',
        title: '',
        rating:0,
        description: '',
        type:'',
      })
  };

  const {image,title,rating,description,type} = formData
  

  return (
    <div>
    <form onSubmit={handleSubmit}>
      <Box style={{display:"flex"}}>
      <Grid item xs={12} sm={6}>
        <TextField
        aria-required
        label="Title"
        name="title"
        value={title}
        onChange={handleChange}
        fullWidth
        margin="normal"
        required
      />
      </Grid>
      <TextField
      aria-required
        label="Image"
        name="image"
        value={image}
        onChange={handleChange}
        fullWidth
        margin="normal"
        required
      /></Box>
      
      <TextField
        label="Rating"
        aria-required
        name="rating"
        placeholder='0'
        value={rating}
        onChange={handleChange}
        fullWidth
        margin="normal"
        required
      />
      
      <Box style={{display:"flex"}}><TextField
        label="Description"
        name="description"
        aria-required
        value={description}
        onChange={handleChange}
        fullWidth
        margin="normal"
        required
      />
      <TextField
        label="Type"
        name="type"
        aria-required
        value={type}
        onChange={handleChange}
        fullWidth
        margin="normal"
        required
      /></Box>
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </form>
  
    </div>
  )
}

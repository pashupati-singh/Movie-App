import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useParams } from 'react-router-dom'
import {Box, Button,  Grid, TextField } from '@mui/material';
import { moviesUpdateFunction } from '../Redux/MovieRedux/action';

export const SingleProduct = () => {
    const id = useParams()
    const {data} = useSelector((store)=>store.movieReducer);
    const FilterData = data.filter((el)=>el._id===id._id)
    const {token} = useSelector((store)=>store.authReducer);
    const {name} = useSelector((store)=>store.authReducer);
    const {msg} = useSelector((store)=>store.movieReducer);

 console.log();

    const [formData, setFormData] = useState({
        image:FilterData[0].image,
        title: FilterData[0].title,
        rating:FilterData[0].rating,
        description: FilterData[0].description,
        type:FilterData[0].type,
      });
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
       console.log(token,obj,id._id);
        dispatch(moviesUpdateFunction(token,obj,id._id))
        setFormData({
          image: '',
          title: '',
          rating:"",
          description: '',
          type:'',
        })
        alert(msg)
    };
  
    const {image,title,rating,description,type} = formData

  return (
     <form onSubmit={handleSubmit}>
      <Box style={{display:"flex"}}>
      <Grid item xs={12} sm={6}>
        <TextField
        aria-required
        // label="Title"
        name="title"
        value={formData.title}
        onChange={handleChange}
        fullWidth
        margin="normal"
        required
      />
      </Grid>
      <TextField
      aria-required
        // label="Image"
        name="image"
        value={formData.image}
        onChange={handleChange}
        fullWidth
        margin="normal"
        required
      /></Box>
      
      <TextField
        // label="Rating"
        aria-required
        name="rating"
        placeholder='0'
        value={formData.rating}
        onChange={handleChange}
        fullWidth
        margin="normal"
        required
      />
      
      <Box style={{display:"flex"}}><TextField
        // label="Description"
        name="description"
        aria-required
        value={formData.description}
        onChange={handleChange}
        fullWidth
        margin="normal"
        required
      />
      <TextField
        // label="Type"
        name="type"
        aria-required
        value={formData.type}
        onChange={handleChange}
        fullWidth
        margin="normal"
        required
      /></Box>
      <Button type="submit" variant="contained" color="primary">
        Update
      </Button>
    </form>
  )
}

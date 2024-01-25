import React, { useEffect, useState } from 'react'
import image from "../Image/Movie-image.png"
import style from "../css/Nav.module.css"
import { TextField,Box, Button, Badge } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

export const NavBar = () => {
  const [search,setSearch] = useState("");
  const {name} = useSelector((store)=>store.authReducer)
  const {isAuth} = useSelector((store)=>store.authReducer)
 


  return (
    <div>
        <div className={style.nav1}>
        <div className={style.nav}>
            <div className={style.home}>
            <Link to={'/'}><img src={image} alt="error" />   </Link>         
            </div>
            <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
            <TextField 
              margin="normal"
              required
              label="Search"
              onChange={(e)=>setSearch(e.target.value)}
            />
            <Button variant="text"><SearchIcon className={style.icon}/></Button>
            
            </div>
            <div className={style.login}>
                <p>
                {isAuth? <h3>{name}</h3>:<Link className={style.link} to="/login">Login</Link>}
                </p>
                <p style={{textAlign:"center"}}>
                    <Link className={style.link} to="/sign">Signup</Link>
                </p>
                <p style={{textAlign:"center"}}>
                <Link className={style.link} to="/addMovie">ADD Movies</Link>
                </p>
            </div>
        </div>
        </div>
    </div>
  )
}

import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link, NavLink } from 'react-router-dom';
import { useState, useEffect } from "react";
import useAuth from '../../../Hooks/useAuth';


const Navigation = () => {
  const {user,logout} = useAuth();
    return (
        <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{backgroundColor: "white", color: "black"}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            EyeGoggles
          </Typography>
          <Link to="/explore" style={{marginRight: "10px", textDecoration: "none", color: "Black"}}>
          <Button color="inherit">Explore</Button>
          </Link>
          {
            user?.email ? 
            <Box>
              <Link to="/dashboard" style={{marginRight: "10px", textDecoration: "none", color: "Black"}}>
              <Button color="inherit">DashBoard</Button>
              </Link>
              <Button onClick={logout} color="inherit">Logout</Button> 
            </Box>
            :
            <NavLink to="/login"> 
            <Button color="inherit">Login</Button>
            </NavLink>
          }
          
          <NavLink to="/signup" style={{textDecoration: "none"}}>
            <Button variant="contained">Sign up</Button>
          </NavLink>
        </Toolbar>
      </AppBar>
    </Box>
    );
};

export default Navigation;
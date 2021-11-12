import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';


const Navigation = () => {
  const {user,logout} = useAuth();
    return (
        <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{backgroundColor: "white", color: "black"}}>
        <Toolbar>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            EyeGoggles
          </Typography>
          <Link to="/explore">
            Explore
          </Link>
          {
            user?.email ? 
            <Box>
              <Link to="/dashboard">
                DashBoard
              </Link>
              <Button onClick={logout} color="inherit">Logout</Button> 
            </Box>
            :
            <NavLink to="/login"> 
            <Button color="inherit">Login</Button>
            </NavLink>
          }
          
          <NavLink to="/signup">
            <Button>Sign up</Button>
          </NavLink>
        </Toolbar>
      </AppBar>
    </Box>
    );
};

export default Navigation;
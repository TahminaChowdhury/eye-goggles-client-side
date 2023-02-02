import React from 'react';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import AddIcon from '@mui/icons-material/Add';
import useAuth from '../../../Hooks/useAuth';
import { Link } from 'react-router-dom';
import SellIcon from '@mui/icons-material/Sell';
import ReviewsIcon from '@mui/icons-material/Reviews';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { List, ListItem, ListItemButton, ListItemText } from '@mui/material';

const UserProfile = () => {
  const { user, logout, admin } = useAuth();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <IconButton
        onClick={handleClick}
        size="small"
        sx={{ ml: 2 }}
        aria-controls={open ? 'account-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
      >
        <Avatar sx={{ width: 32, height: 32 }} src={user?.photoURL} />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
         {admin ? (
        <List style={{color: '#000'}}>
          <ListItem disablePadding>
            <ListItemButton >
              <ListItemIcon>
                <DashboardIcon  />
              </ListItemIcon>
              <Link to="/dashboard">
                <ListItemText primary="Dashboard" />
              </Link>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <SellIcon  />
              </ListItemIcon>
              <Link to="/dashboard/orders">
                <ListItemText primary="Orders" />
              </Link>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <PersonAddIcon  />
              </ListItemIcon>
              <Link to="/dashboard/makeAdmin">
                <ListItemText primary="Make Admin" />
              </Link>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <AddIcon  />
              </ListItemIcon>
              <Link to="/dashboard/addproduct">
                <ListItemText primary="Add product" />
              </Link>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ReviewsIcon  />
              </ListItemIcon>
              <Link to="/dashboard/updateProduct">
                <ListItemText primary="Update Product" />
              </Link>
            </ListItemButton>
          </ListItem>
          <Divider/>
          <ListItem disablePadding>
            <ListItemButton onClick={logout}>
              <ListItemIcon>
                <LogoutIcon />
              </ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItemButton>
          </ListItem>
        </List>
      ) : (
        <List style={{color: '#000'}}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <PersonIcon  />
              </ListItemIcon>
              <Link to="/user/profile">
                <ListItemText primary="Profile" />
              </Link>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <SellIcon  />
              </ListItemIcon>
              <Link to="/user/order-history">
                <ListItemText primary="Order History" />
              </Link>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <FavoriteIcon  />
              </ListItemIcon>
              <Link to="/user/myWishlist">
                <ListItemText primary="My Wishlist" />
              </Link>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ReviewsIcon  />
              </ListItemIcon>
              <Link to="/user/myReviews">
                <ListItemText primary="My Reviews" />
              </Link>
            </ListItemButton>
          </ListItem>
          <Divider/>
          <ListItem disablePadding>
            <ListItemButton onClick={logout} 
            className="logout-btn">
              <ListItemIcon>
                <LogoutIcon  />
              </ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItemButton>
          </ListItem>
        </List>
      )}
      </Menu>
    </div>
  );
};

export default UserProfile;

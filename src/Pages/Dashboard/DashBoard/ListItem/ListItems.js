import React from 'react';
import useAuth from '../../../../Hooks/useAuth';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import AddIcon from '@mui/icons-material/Add';
import SellIcon from '@mui/icons-material/Sell';
import ReviewsIcon from '@mui/icons-material/Reviews';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LogoutIcon from '@mui/icons-material/Logout';
import { Box, ListItem } from '@mui/material';
import { Link } from 'react-router-dom';
import './ListItems.scss';
import PersonIcon from '@mui/icons-material/Person';

const ListItems = () => {
  const { logout, admin } = useAuth();
  return (
    <Box>
      {admin ? (
        <List className='list-items'>
          <ListItem disablePadding>
            <ListItemButton >
              <ListItemIcon>
                <DashboardIcon className="list-icons" />
              </ListItemIcon>
              <Link to="/dashboard">
                <ListItemText primary="dashboard" />
              </Link>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <SellIcon className="list-icons" />
              </ListItemIcon>
              <Link to="/dashboard/orders">
                <ListItemText primary="Orders" />
              </Link>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <PersonAddIcon className="list-icons" />
              </ListItemIcon>
              <Link to="/dashboard/makeAdmin">
                <ListItemText primary="Make Admin" />
              </Link>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <AddIcon className="list-icons" />
              </ListItemIcon>
              <Link to="/dashboard/addproduct">
                <ListItemText primary="Add product" />
              </Link>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ReviewsIcon className="list-icons" />
              </ListItemIcon>
              <Link to="/dashboard/updateProduct">
                <ListItemText primary="Update Product" />
              </Link>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={logout}>
              <ListItemIcon>
                <LogoutIcon className="list-icons"/>
              </ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItemButton>
          </ListItem>
        </List>
      ) : (
        <List className='list-items'>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <PersonIcon className="list-icons" />
              </ListItemIcon>
              <Link to="/user/profile">
                <ListItemText primary="Profile" />
              </Link>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <SellIcon className="list-icons" />
              </ListItemIcon>
              <Link to="/user/order-history">
                <ListItemText primary="Order History" />
              </Link>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <FavoriteIcon className="list-icons" />
              </ListItemIcon>
              <Link to="/user/myWishlist">
                <ListItemText primary="My Wishlist" />
              </Link>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ReviewsIcon className="list-icons" />
              </ListItemIcon>
              <Link to="/user/myReviews">
                <ListItemText primary="My Reviews" />
              </Link>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={logout} className="logout-btn">
              <ListItemIcon>
                <LogoutIcon className="list-icons" />
              </ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItemButton>
          </ListItem>
        </List>
      )}
    </Box>
  );
};

export default ListItems;
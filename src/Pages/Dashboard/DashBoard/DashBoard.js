import * as React from 'react';
import './DashBoard.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@mui/material/Toolbar';

import {
  Link,
  useLocation,
} from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
const drawerWidth = 240;

export default function DashBoard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { admin, logout } = useAuth();
  console.log(admin);
  let { pathname, url } = useLocation();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div className="link-list text-center">
      <Toolbar style={{ backgroundColor: 'black', color: 'white' }}>
        <h5 className="ms-4">Eye Goggles</h5>
      </Toolbar>
      <h5 className="fw-bold py-2">Admin Portal</h5>
      <Divider />
      <List sx={{ fontSize: 20, py: 2 }}>
        {!admin ? (
          ''
        ) : (
          <Box>
            <Link to="/dashboard/makeadmin">Make Admin</Link>
            <br />
            <Link to="/dashboard/manageallorders">Mange All Orders</Link>
            <br />
            <Link to="/dashboard/addproducts">Add Products</Link>
            <br />
            <Link to="/dashboard/manageproducts">Manage Products</Link>
          </Box>
        )}
      </List>
      <Divider />
      <List sx={{ fontSize: 16 }}>
        <Link to="/dashboard/myorders">My Orders</Link>
        <br />
        <Link to="/dashboard/payment">Payment</Link>
        <br />
        <Link to="/dashboard/review">Review</Link>
        <br />
        <button onClick={logout} className="logout-btn mt-3 px-3 py-1">
          {' '}
          Logout
        </button>
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar style={{ backgroundColor: 'black' }}>
          <IconButton
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
      </Box>
    </Box>
  );
}

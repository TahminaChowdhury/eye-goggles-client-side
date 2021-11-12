import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link, useRouteMatch, Switch, Route } from 'react-router-dom';
import { Button } from '@mui/material';
import useAuth from '../../../../Hooks/useAuth';
import MyOrders from './MyOrders/MyOrders';
import Payment from './Payment/Payment';
import Review from './Review/Review';
import MakeAdmin from './AdminPortal/MakeAdmin/MakeAdmin';
import ManageAllOrders from './AdminPortal/ManageAllOrders/ManageAllOrders';
import AddProducts from './AdminPortal/AddProducts/AddProducts';
import ManageProducts from './AdminPortal/ManageProducts/ManageProducts';
import AdminRoute from '../../Login/AdminRoute/AdminRoute'
const drawerWidth = 240;


export default function DashBoard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const {admin,logout} = useAuth();
  let { path, url } = useRouteMatch();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {
          admin && <Box>
              <Link to={`${url}/makeadmin`}>Make Admin</Link>
              <br/>
              <Link to={`${url}/manageallorders`}>Mange All Orders</Link>
              <br/>
              <Link to={`${url}/addproducts`}>Add Products</Link>
              <br/>
              <Link to={`${url}/manageproducts`}>Manage Products</Link>
                  </Box>
        }
      
      </List>
      <Divider />
      <List>
      <Link to="/myOrders">My Orders</Link>
      <br/>
      <Link to="/payment">Payment</Link>
      <br/>
      <Link to="/review">Review</Link>
      <br/>
      <Button onClick={logout} variant="contained">Logout</Button>
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

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
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            DashBoard
          </Typography>
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
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <Switch>
        <Route exact path={path}>
          
        </Route>
        <AdminRoute path={`${path}/makeadmin`}>
         <MakeAdmin></MakeAdmin>
        </AdminRoute>
        <AdminRoute path={`${path}/manageallorders`}>
         <ManageAllOrders></ManageAllOrders>
        </AdminRoute>
        <AdminRoute path={`${path}/addproducts`}>
         <AddProducts></AddProducts>
        </AdminRoute>
        <AdminRoute path={`${path}/manageproducts`}>
         <ManageProducts></ManageProducts>
        </AdminRoute>
      </Switch>
      </Box>
    </Box>
  );
}

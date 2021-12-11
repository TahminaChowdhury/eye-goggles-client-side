import * as React from 'react';
import './DashBoard.css'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@material-ui/icons/Menu'
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
import DashBoardHome from './DashBoardHome/DashBoardHome';
const drawerWidth = 240;


export default function DashBoard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const {admin,logout} = useAuth();
  console.log(admin)
  let { path, url } = useRouteMatch();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div className="link-list text-center">
      <Toolbar style={{backgroundColor: "black", color: "white"}}>
        <h5 className="ms-4">Eye Goggles</h5>
      </Toolbar>
      <h5 className="fw-bold py-2">Admin Portal</h5>
      <Divider/>
      <List sx={{fontSize: 20, py: 2}}>
        {
          !admin? "":
          <Box>
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
      <Divider/>
      <List sx={{ fontSize: 16}}>
      <Link to={`${url}/myorders`}>My Orders</Link>
      <br/>
      <Link to={`${url}/payment`}>Payment</Link>
      <br/>
      <Link to={`${url}/Review`}>Review</Link>
      <br/>
      <button onClick={logout} className="logout-btn mt-3 px-3 py-1"> Logout</button>
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
        <Toolbar style={{backgroundColor: "black"}}>
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
        sx={{ flexGrow: 1, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <Switch>
        <Route exact path={path}>
          <DashBoardHome></DashBoardHome>
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

        <Route path={`${path}/myorders`}>
         <MyOrders></MyOrders>
        </Route>

        <Route path={`${path}/payment`}>
         <Payment></Payment>
        </Route>

        <Route path={`${path}/review`}>
         <Review></Review>
        </Route>
        
      </Switch>
      </Box>
    </Box>
  );
}

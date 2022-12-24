import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import './Navigationbar.css';
import { Container } from 'react-bootstrap';
import { useState } from 'react';
import {
  Button,
  Modal,
  Paper,
  Table,
  TableBody,
  TableContainer,
  TableHead,
} from '@mui/material';
import { Box } from '@mui/system';
import Login from '../Login/Login';
import { useSelector } from 'react-redux';
import useAuth from '../../../Hooks/useAuth';
import Menu from '@mui/material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import MenuItem from './MenuItem/MenuItem';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  height: 550,
  bgcolor: 'white',
  boxShadow: '7px 6px 40px 0 rgb(204 204 223 / 16%)',
};

const Navigationbar = () => {
  const { user, logout } = useAuth();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // Cart menu
  const [anchorEl, setAnchorEl] = useState(null);
  const menuOpen = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };

  return (
    <div>
      <Navbar expand="lg">
        <div className="navbar">
          {/* Top bar start */}
          <div className="top-bar">
            <div className="language-pref">English</div>

            <div className="logo">
              <div>
                <Link to="/home">
                  Eye<span style={{ color: '#babd42' }}>Goggles</span>
                </Link>
              </div>

              <div>
                <i class="fa-solid fa-glasses"></i>
              </div>
            </div>

            <div className="userinfo">
              {user?.email ? (
                <>
                  <button className="logout-btn" onClick={logout}>
                    Logout
                  </button>
                </>
              ) : (
                <span>
                  <Button onClick={handleOpen}>
                    <PersonOutlineOutlinedIcon
                      sx={{ fontSize: 30, color: '#000' }}
                    />
                  </Button>
                  <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <Box sx={style}>
                      <Login />
                    </Box>
                  </Modal>
                </span>
              )}

              <span>
                <FavoriteBorderOutlinedIcon sx={{ fontSize: 30 }} />
              </span>
              <span>
                <SearchIcon sx={{ fontSize: 30 }} />
              </span>
              <span className="shoppingcart">
                <ShoppingBasketOutlinedIcon
                  id="basic-button"
                  aria-controls={menuOpen ? 'basic-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={menuOpen ? 'true' : undefined}
                  onClick={handleClick}
                  sx={{ fontSize: 30 }}
                />
                <span className="shoppingcart-icon">{getCartCount()}</span>
              </span>
              <span style={{ marginLeft: '15px' }}>
                <NavLink to="/dashboard">Dashboard</NavLink>
              </span>
            </div>
            {/* Cart menu */}
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={menuOpen}
              onClose={handleMenuClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              {cartItems.length === 0 ? (
                <div style={{ margin: '25px 20px', fontSize: '20px' }}>
                  <CloseIcon
                    onClick={handleMenuClose}
                    className="close-btn"
                    style={{ fontSize: '18px' }}
                  />
                  <p>Your cart is empty</p>
                </div>
              ) : (
                <div style={{ width: '400px', padding: '10px'}}>
                  <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                      <TableBody>
                        {cartItems.map((item, index) => (
                          <MenuItem key={index} item={item} />
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                  <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'space-between' }}>
                    <Link to="/cart" className="regular-btn">
                      View cart
                    </Link>
                    <button className="regular-btn">Checkout</button>
                  </div>
                </div>
              )}
            </Menu>
          </div>
          {/* Top bar end */}

          {/* Bootom-bar start */}
          <div className="bottom-bar">
            <div>
              <Navbar.Toggle
                className="navbar-toggle-icon"
                aria-controls="navbarScroll"
              />
              <Navbar.Collapse id="navbarScroll">
                <Nav className="nav py-3" navbarScroll>
                  <NavLink to="/home">Home</NavLink>
                  <NavLink to="/explore">Explore</NavLink>
                  <NavLink to="/about">About Us</NavLink>
                  <NavLink to="/contact">Contact</NavLink>
                </Nav>
              </Navbar.Collapse>
            </div>
          </div>
        </div>
      </Navbar>

      {/* Second navbar for mobile device */}
      <Navbar expand="lg" className="responsive-bar">
        <Container>
          <div className="logo">
            <Link to="/home">
              Eye<span style={{ color: '#babd42' }}>Goggles</span>
            </Link>
          </div>
          <div className="userinfo">
            <span>
              <NavLink to="/login" className="login">
                <PersonOutlineOutlinedIcon sx={{ fontSize: 25 }} />
              </NavLink>
            </span>
            <span>
              <FavoriteBorderOutlinedIcon sx={{ fontSize: 25 }} />
            </span>
            <span>
              <SearchIcon sx={{ fontSize: 25 }} />
            </span>
            <span>
              <ShoppingBasketOutlinedIcon sx={{ fontSize: 25 }} />
            </span>
          </div>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="nav py-3" navbarScroll>
              <NavLink to="/home">Home</NavLink>
              <NavLink to="/explore">Explore</NavLink>
              <NavLink to="/about">About Us</NavLink>
              <NavLink to="/contact">Contact</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigationbar;

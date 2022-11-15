import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import './Navigationbar.css';
import { Container } from 'react-bootstrap';

const Navigationbar = () => {
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
              <span>
                <NavLink to="/login" className="login">
                  <PersonOutlineOutlinedIcon sx={{ fontSize: 30 }} />
                </NavLink>
              </span>
              <span>
                <FavoriteBorderOutlinedIcon sx={{ fontSize: 30 }} />
              </span>
              <span>
                <SearchIcon sx={{ fontSize: 30 }} />
              </span>
              <span>
                <ShoppingBasketOutlinedIcon sx={{ fontSize: 30 }} />
              </span>
            </div>
          </div>
          {/* Top bar end */}

          {/* Bootom-bar start */}
          <div className="bottom-bar">
            <div>
              <Navbar.Toggle className='navbar-toggle-icon' aria-controls="navbarScroll" />
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

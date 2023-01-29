import React from 'react';
import './Sunglasses.scss';
import { Grid, Paper, Tooltip } from '@mui/material';
import { Link } from 'react-router-dom';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../redux/Cart/cartActions';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Sunglasses = ({ product }) => {
  const { _id, img, name, price, category } = product;
  const dispatch = useDispatch();

  const addToCarthandler = (id, qty = 1) => {
    dispatch(addToCart(id, qty));
  };
  const notify = () => toast(' Added to cart successfully!', {
    position: "bottom-left",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    });
  return (
    <Grid
      item
      xs={12}
      sm={12}
      md={4}
      sx={{ display: 'flex', justifyContent: 'center' }}
    >
      <div className="pd-container">
        {/* Product image and additional icon */}
        <Paper className="pd-img-icon-div">
          <img src={img} alt={name} />
          <div className="pd-additional-icon">
            <div className="icon">
              <Tooltip title="Search" placement="top">
                <SearchOutlinedIcon />
              </Tooltip>
            </div>
            <div className="icon">
              <Tooltip title="Add To Wishlist" placement="top">
                <FavoriteBorderOutlinedIcon />
              </Tooltip>
            </div>
            <div className="icon">
              <Tooltip title="Add To Cart" placement="top">
                <ShoppingBasketOutlinedIcon
                  onClick={() => {
                    addToCarthandler(_id);
                    notify();
                  }}
                />
              </Tooltip>
            </div>
          </div>
          <ToastContainer 
              position="bottom-left"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark"/>
        </Paper>

        {/* Product Information */}
        <div className="pd-info">
          <p className="pd-category">{category}</p>
          <Link to={`/sunglass/${_id}`} className="pd-name">
            {name}
          </Link>
          <p className="pd-price">$ {price}</p>
        </div>
      </div>
    </Grid>
  );
};

export default Sunglasses;

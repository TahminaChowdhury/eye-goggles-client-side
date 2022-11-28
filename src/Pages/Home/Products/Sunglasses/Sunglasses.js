import React from 'react';
import './Sunglasses.css';
import { Grid, Paper } from '@mui/material';
import { Link } from 'react-router-dom';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';

const Sunglasses = ({ product }) => {
  const { _id, img, name, price, category } = product;

  return (
    <Grid
      item
      xs={12}
      sm={12}
      md={4}
      sx={{display: 'flex', justifyContent: 'center'}}
    >
      <div className="pd-container">
        {/* Product image and additional icon */}
        <Paper className="pd-img-icon-div">
          <img src={img} alt={name} />
          <div className="pd-additional-icon">
            <div className="icon">
              <SearchOutlinedIcon />
            </div>
            <div className="icon">
              <FavoriteBorderOutlinedIcon />
            </div>
            <div className="icon">
              <ShoppingBasketOutlinedIcon />
            </div>
          </div>
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

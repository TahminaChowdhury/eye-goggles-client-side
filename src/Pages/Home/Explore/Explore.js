import './Explore.scss';
import { Container, Grid } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../redux/Products/productActions';
import { CircularProgress, Paper } from '@material-ui/core';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Navigationbar from '../../Shared/Navigationbar/Navigationbar';
import Footer from '../Footer/Footer';

const Explore = () => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.products);
  const { loading, products, error } = product;

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  return (
    <>
      <Navigationbar />
      <div className="page-header">
        <p>Home</p>
        <p>
          <ChevronLeftIcon />
        </p>
        <p>Explore</p>
      </div>
      <Container fixed>
        <Box sx={{ flexGrow: 1, my: 4, textAlign: 'center' }}>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            sx={{ textAlign: 'center' }}
          >
            {loading ? (
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '100vh',
                }}
              >
                <CircularProgress color="inherit" />
              </Box>
            ) : error ? (
              <h2>{error}</h2>
            ) : (
              products.map((product) => (
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={4}
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    marginTop: '100px',
                  }}
                >
                  <div className="pd-container">
                    {/* Product image and additional icon */}
                    <Paper className="pd-img-icon-div">
                      <img src={product.img} alt={product.name} />
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
                      <p className="pd-category">{product.category}</p>
                      <Link to={`/sunglass/${product._id}`} className="pd-name">
                        {product.name}
                      </Link>
                      <p className="pd-price">$ {product.price}</p>
                    </div>
                  </div>
                </Grid>
              ))
            )}
          </Grid>
        </Box>
      </Container>
      <Footer />
    </>
  );
};

export default Explore;

import './Explore.scss';
import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../redux/Products/productActions';
import { CircularProgress, Paper } from '@material-ui/core';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import Navigationbar from '../../Shared/Navigationbar/Navigationbar';
import Footer from '../Footer/Footer';
import Sidebar from './Sidebar/Sidebar';
import ViewListIcon from '@mui/icons-material/ViewList';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import SelectOption from './Sidebar/SelectOption';

const Explore = () => {
  const [view, setView] = useState('list');
  const handleChange = (event, nextView) => {
    setView(nextView);
  };
  const dispatch = useDispatch();
  const product = useSelector((state) => state.products);
  const { loading, products, error } = product;

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  return (
    <>
      <Navigationbar />
      <Box className="page-title">
        <Box px={8}>
          <p style={{ fontSize: '19px' }}>Home | Explore</p>
        </Box>
      </Box>
      <Box fixed my={8}>
        <Grid container>
          <Grid item md={3}>
            <Sidebar />
          </Grid>
          <Grid item md={9}>
            <Box sx={{ flexGrow: 1 }}>
              <Box
                p={2}
                mb={2}
                style={{ backgroundColor: '#F5F5F5' }}
                className="flex-item"
              >
                <Box>
                  {' '}
                  <ToggleButtonGroup
                    orientation="alignment"
                    value={view}
                    exclusive
                    onChange={handleChange}
                  >
                    <ToggleButton value="left" aria-label="left aligned" style={{marginRight: '10px'}}>
                      <ViewListIcon />
                    </ToggleButton>
                    <ToggleButton value="left" aria-label="left aligned">
                      <ViewModuleIcon />
                    </ToggleButton>
                  </ToggleButtonGroup>
                </Box>
                <Box>
                </Box>
              </Box>
              <Grid
                container
                spacing={{ xs: 2, md: 3 }}
                columns={{ xs: 4, sm: 8, md: 12 }}
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
                      md={6}
                      xl={4}
                      sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        marginTop: '100px',
                      }}
                    >
                      <Box className="pd-container">
                        {/* Product image and additional icon */}
                        <Paper className="pd-img-icon-div">
                          <img src={product.img} alt={product.name} />
                          <Box className="pd-additional-icon">
                            <Box className="icon">
                              <SearchOutlinedIcon />
                            </Box>
                            <Box className="icon">
                              <FavoriteBorderOutlinedIcon />
                            </Box>
                            <Box className="icon">
                              <ShoppingBasketOutlinedIcon />
                            </Box>
                          </Box>
                        </Paper>

                        {/* Product Information */}
                        <Box className="pd-info">
                          <p className="pd-category">{product.category}</p>
                          <Link
                            to={`/sunglass/${product._id}`}
                            className="pd-name"
                          >
                            {product.name}
                          </Link>
                          <p className="pd-price">$ {product.price}</p>
                        </Box>
                      </Box>
                    </Grid>
                  ))
                )}
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </>
  );
};

export default Explore;

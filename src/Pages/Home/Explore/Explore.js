import { Grid, Pagination } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../redux/Products/productActions';
import { CircularProgress } from '@material-ui/core';
import Navigationbar from '../../Shared/Navigationbar/Navigationbar';
import Footer from '../Footer/Footer';
import Sidebar from './Sidebar/Sidebar';
import Sunglasses from '../Products/Sunglasses/Sunglasses';
import PageTitle from '../../PageTitle/PageTitle';
import ProductSelectionTop from './ProductSelectionTop';

const Explore = () => {
  const pageSize = 4;
  const [pagination, setPagination] = useState({
    from: 0,
    to: pageSize,
  });
  const dispatch = useDispatch();
  const product = useSelector((state) => state.products);
  const { loading, products, error } = product;

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const handlePageChange = (e, page) => {
    const from = (page - 1) * pageSize;
    console.log(from);
    const to = (page - 1) * pageSize + pageSize;
    console.log(to);
    setPagination({ ...pagination, from: from, to: to });
  };

  return (
    <>
      <Navigationbar />
      <PageTitle name="Explore" />
      <Box fixed my={8}>
        <Grid container>
          <Grid item md={3}>
            <Sidebar />
          </Grid>
          <Grid item md={9}>
            <Box sx={{ flexGrow: 1 }}>
              {/* Product selection top header component */}
              <ProductSelectionTop />
              <Grid
                container
                spacing={2}
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                {loading ? (
                  <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <CircularProgress color="inherit" />
                  </Box>
                ) : error ? (
                  <h1>{error}</h1>
                ) : (
                  products
                    .slice(pagination.from, pagination.to)
                    .map((product, index) => (
                      <>
                        <Grid
                          item
                          xs={1}
                          sm={1}
                          md={6}
                          key={index}
                          display="flex"
                          justifyContent="center"
                          alignItems="center"
                        >
                          <Sunglasses product={product} />
                        </Grid>
                      </>
                    ))
                )}
                <Pagination
                  count={Math.ceil(products.length / pageSize)}
                  onChange={handlePageChange}
                />
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

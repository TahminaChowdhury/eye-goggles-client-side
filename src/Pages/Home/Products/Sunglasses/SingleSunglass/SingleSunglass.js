import './SingleSunglass.css';
import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProductDetails } from '../../../../redux/Products/productActions';
import { addToCart } from '../../../../redux/Cart/cartActions';

const SingleSunglass = () => {
  const { id } = useParams();
  const [qty, setQty] = useState(1);
  console.log(qty);
  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, product, error } = productDetails;

  const increaseQuantity = () => {
    if (product.countInStock <= qty) {
      return;
    }
    const newQty = qty + 1;
    setQty(newQty);
  };

  const decreaseQuantity = () => {
    if (qty <= 1) {
      return;
    }
    const newQty = qty - 1;
    setQty(newQty);
  };
  const navigate = useNavigate();
  const addToCarthandler = () => {
    dispatch(addToCart(id, qty));
    navigate('/cart');
  };
  useEffect(() => {
    dispatch(getProductDetails(id));
  }, [dispatch, id]);

  return (
    <div>
      <Typography
        variant="h6"
        component="div"
        sx={{ textAlign: 'center', py: 5 }}
        className="details"
      >
        Shop Now
      </Typography>
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <Box sx={{ width: '100%', my: 5, py: 5 }}>
          <Container fixed>
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid item xs={12} sm={12} md={6}>
                <img src={product.img} alt="" />
                <Typography
                  variant="h6"
                  gutterBottom
                  component="div"
                  sx={{ fontWeight: 'bold' }}
                >
                  {product.name}
                </Typography>
                <Typography
                  variant="h6"
                  gutterBottom
                  component="div"
                  sx={{ my: 5, fontWeight: 'bold' }}
                  className="text-style"
                >
                  Description
                </Typography>
                <Typography variant="body1" gutterBottom>
                  {product.description}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={12} md={6} sx={{ textAlign: 'center' }}>
                <Box>
                  <p>Price $ {product.price}</p>

                  <p>
                    {product.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}
                  </p>
                  <p>qty</p>
                  <button onClick={decreaseQuantity}>-</button>
                  <input readOnly type="number" value={qty} />
                  <button onClick={increaseQuantity}>+</button>
                  <button onClick={addToCarthandler}>Add to Cart</button>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
      )}
    </div>
  );
};

export default SingleSunglass;

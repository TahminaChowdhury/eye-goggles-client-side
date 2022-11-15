import './SingleSunglass.css';
import { CircularProgress, Container, Grid } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProductDetails } from '../../../../redux/Products/productActions';
import { addToCart } from '../../../../redux/Cart/cartActions';
import Footer from '../../../Footer/Footer';
import BasicTabs from './BasicTabs'

const SingleSunglass = () => {
  const { id } = useParams();
  const [qty, setQty] = useState(1);

  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, product, error } = productDetails;

  // Increase quantity handler
  const increaseQuantity = () => {
    if (product.countInStock <= qty) {
      return;
    }
    const newQty = qty + 1;
    setQty(newQty);
  };

  // Decrease quantity handler
  const decreaseQuantity = () => {
    if (qty <= 1) {
      return;
    }
    const newQty = qty - 1;
    setQty(newQty);
  };

  // Add to cart handler
  const navigate = useNavigate();
  const addToCarthandler = () => {
    dispatch(addToCart(id, qty));
    navigate('/cart');
  };

  // Get Product Details
  useEffect(() => {
    dispatch(getProductDetails(id));
  }, [dispatch, id]);

  return (
    <>
      {loading ? (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
          }}
        >
          <CircularProgress color="inherit"/>
        </Box>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <Box sx={{ width: '100%', my: 5, py: 5 }}>
          <Container fixed>
            <Grid container rowSpacing={1} columnSpacing={2}>
              <Grid item xs={12} sm={12} md={6}>
                <img src={product.img} alt={product.name} />
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <Box sx={{ textAlign: 'start' }}>
                  <h1>{product.name}</h1>
                  <p></p>
                  <p>Price: $ {product.price}</p>

                  <p>
                    Availability:
                    {product.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}
                  </p>

                  <div className="d-flex">
                    <input
                      readOnly
                      type="number"
                      value={qty}
                      className="quantity-input"
                    />
                    <div className="group-btn-div">
                      <button
                        onClick={() => decreaseQuantity(id, qty)}
                        className="icrement-btn"
                      >
                        -
                      </button>
                      <button
                        onClick={() => increaseQuantity(id, qty)}
                        className="decrement-btn"
                      >
                        +
                      </button>
                    </div>
                    <button
                      onClick={addToCarthandler}
                      className="ms-3 regular-btn"
                    >
                      Add to Cart
                    </button>
                  </div>
                </Box>
              </Grid>
              <Grid item xs={12} sm={12} md={12}>
                <BasicTabs description={product.description}/>
              </Grid>
            </Grid>
          </Container>
        </Box>
      )}
      <Footer />
    </>
  );
};

export default SingleSunglass;

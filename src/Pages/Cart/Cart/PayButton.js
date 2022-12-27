import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import useAuth from '../../../Hooks/useAuth';
import { getCurrentUser } from '../../redux/User/UserActions';

const PayButton = ({ cartItems }) => {
  const { user } = useAuth();
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.currentUser);
  const { currentUser } = userInfo;

  useEffect(() => {
    dispatch(getCurrentUser(user.email));
  }, [user.email]);

 
const handleCheckout = () => {
    axios
      .post('http://localhost:5000/create-checkout-session', {
        cartItems,
        userId: currentUser._id,
      })
      .then((res) => {
        if (res.data.url) {
          window.location.href = res.data.url;
        }
      })
      .catch((error) => console.log(error.message));
  };

  return (
    <>
      <button onClick={() => handleCheckout()} className="regular-btn">
        Checkout
      </button>
    </>
  );
};

export default PayButton;

import React from 'react';
import Footer from '../../Home/Footer/Footer';
import Navigationbar from '../../Shared/Navigationbar/Navigationbar';

const CheckoutSuccess = () => {
  return (
    <>
      <Navigationbar />
      <div className="d-flex justify-content-center align-items-center my-5 py-5">
        <h1>Checkout success</h1>
      </div>
      <Footer />
    </>
  );
};

export default CheckoutSuccess;

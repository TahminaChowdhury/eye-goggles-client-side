import React from 'react';
import TopBanner from './TopBanner/TopBanner';
import Products from './Products/Products';
import Footer from './Footer/Footer';

const Home = () => {
  return (
    <div>
      <TopBanner></TopBanner>
      <Products></Products>
      <Footer />
    </div>
  );
};

export default Home;

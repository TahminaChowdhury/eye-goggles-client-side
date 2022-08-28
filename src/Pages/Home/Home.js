import React from 'react';
import TopBanner from './TopBanner/TopBanner';
import Products from './Products/Products';
import Navigation from '../Shared/Navigation/Navigation';
import Footer from './Footer/Footer'

const Home = () => {
  return (
    <div>
      <Navigation/>
      <TopBanner></TopBanner>
      <Products></Products>
      <Footer/>
    </div>
  );
};

export default Home;

import React from 'react';
import TopBanner from './TopBanner/TopBanner';
import Products from './Products/Products';
import ItemBanner from './ItemBanner/ItemBanner';
import Blog from './Blog/Blog';
import Brands from './Brands/Brands';
import NewsLetter from './NewsLetter/NewsLetter';
import Navigationbar from '../Shared/Navigationbar/Navigationbar';
import Footer from './Footer/Footer';

const Home = () => {
  return (
    <>
      <Navigationbar />
      <TopBanner></TopBanner>
      <Products></Products>
      <ItemBanner />
      {/* <Review /> */}
      <Blog />
      <NewsLetter />
      <Brands />
      <Footer />
    </ >
  );
};

export default Home;

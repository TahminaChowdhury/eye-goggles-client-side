import React from 'react';
import TopBanner from './TopBanner/TopBanner';
import Products from './Products/Products';
import ItemBanner from './ItemBanner/ItemBanner';
import Blog from './Blog/Blog';
import Brands from './Brands/Brands';
import NewsLetter from './NewsLetter/NewsLetter';
import Navigationbar from '../Shared/Navigationbar/Navigationbar';
const Home = () => {
  return (
    <div>
      <Navigationbar/>
      <TopBanner></TopBanner>
      <Products></Products>
      <ItemBanner />
      {/* <Review /> */}
      <Blog />
      <NewsLetter />
      <Brands />
    </div>
  );
};

export default Home;

import React from 'react';
import TopBanner from './TopBanner/TopBanner';
import Products from './Products/Products';
import ItemBanner from './ItemBanner/ItemBanner';
import Review from './Review/Review';
import Blog from './Blog/Blog';
import Brands from './Brands/Brands';
import NewsLetter from './NewsLetter/NewsLetter';

const Home = () => {
  return (
    <div>
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

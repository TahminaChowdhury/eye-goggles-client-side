import React from 'react';
import TopBanner from './TopBanner/TopBanner';
import Products from './Products/Products';
import ItemBanner from './ItemBanner/ItemBanner';

const Home = () => {
  return (
    <div>
      <TopBanner></TopBanner>
      <Products></Products>
      <ItemBanner />
    </div>
  );
};

export default Home;

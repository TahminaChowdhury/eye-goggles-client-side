import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';
import TopBanner from '../TopBanner/TopBanner';
import Products from './Products/Products';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <TopBanner></TopBanner>
            <Products></Products>
            <Footer></Footer>
        </div>
    );
};

export default Home;
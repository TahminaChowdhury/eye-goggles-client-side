import React from 'react';
import Navigation from '../Shared/Navigation/Navigation';
import TopBanner from '../TopBanner/TopBanner';
import ContactUs from './ConatctUs/ContactUs';
import Products from './Products/Products';
import Footer from '../Shared/Footer/Footer';

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
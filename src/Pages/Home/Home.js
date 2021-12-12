import React from 'react';
import Navigation from '../Shared/Navigation/Navigation';
import TopBanner from '../TopBanner/TopBanner';
import ContactUs from './ConatctUs/ContactUs';
import Products from './Products/Products';

const Home = () => {

    return (
        <div>
            <Navigation></Navigation>
            <TopBanner></TopBanner>
            <Products></Products>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;
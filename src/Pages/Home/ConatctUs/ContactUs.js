import React from 'react';
import './Contact.scss';
import img from '../../../images/location-icon-vector-24263344.jpg';
import img1 from '../../../images/phone-symbol-auricular-inside-circle-260nw-1121268638.jpg';
import img2 from '../../../images/9-99241_email-icon-black-circle-envelope-email-icon-png.png';
import Navigationbar from '../../Shared/Navigationbar/Navigationbar';
import Footer from '../Footer/Footer';
import { Box } from '@material-ui/core';
import PageTitle from '../../PageTitle/PageTitle';

const ContactUs = () => {
  return (
    <>
      <Navigationbar />
      <PageTitle name='Contact'/>
      <Box className="row d-flex text-center my-5 py-5">
        <Box className="col-sm-6 col-md-4 col-lg-4">
          <Box>
            <img src={img} className="img-fluid w-25 h-25" alt="" />
            <h6 className="pt-3">Sector-1,Road-3,Uttara,Dhaka-1230</h6>
          </Box>
        </Box>
        <Box className="col-sm-6 col-md-4 col-lg-4">
          <Box>
            <img src={img1} className="img-fluid w-25 h-25" alt="" />
            <h6 className="">01755-555-80</h6>
          </Box>
        </Box>
        <Box className="col-sm-6 col-md-4 col-lg-4">
          <Box>
            <img src={img2} className="img-fluid w-25 h-25" alt="" />
            <h6 className="pt-3">Email:eyegoggles@gmail.com</h6>
          </Box>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default ContactUs;

import React from 'react';
import './Contact.css';
import img from '../../../images/location-icon-vector-24263344.jpg';
import img1 from '../../../images/phone-symbol-auricular-inside-circle-260nw-1121268638.jpg';
import img2 from '../../../images/9-99241_email-icon-black-circle-envelope-email-icon-png.png';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

const ContactUs = () => {
  return (
    <div>
       <div className="page-header">
        <p>Home</p>
        <p>
          <ChevronLeftIcon />
        </p>
        <p>Contact</p>
      </div>
      <div className="row d-flex text-center my-5 py-5">
        <div className="col-sm-6 col-md-4 col-lg-4">
          <div>
            <img src={img} className="img-fluid w-25 h-25" alt="" />
            <h6 className="pt-3">Sector-1,Road-3,Uttara,Dhaka-1230</h6>
          </div>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-4">
          <div>
            <img src={img1} className="img-fluid w-25 h-25" alt="" />
            <h6 className="">01755-555-80</h6>
          </div>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-4">
          <div>
            <img src={img2} className="img-fluid w-25 h-25" alt="" />
            <h6 className="pt-3">Email:eyegoggles@gmail.com</h6>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ContactUs;

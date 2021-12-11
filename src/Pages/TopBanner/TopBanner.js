import './TopBanner.css'
import React from 'react';
import Slide from 'react-reveal/Slide';
import img from '../../images/h11-removebg-preview.png'
import { Link } from 'react-router-dom';



const TopBanner = () => {
    return (
      <Slide top>
        <div className="h-75 top-banner mx-5">
          <div className="row d-flex">
           <div className="col-sm-12 col-md-4 col-lg-4">
              <div>
                <h4 className="text-dark ms-5 ps-5 mt-5 pt-5">Stylish and Trendy 
                </h4>
                <p className="brand-name ms-5 ps-5">EYE GOGGLES</p>
                <div className="ms-5 ps-5 ">
                  <Link to="/explore">
                      <button className="shopNow-btn text-white">
                      <div>Shop Now</div>
                      <i class="fas fa-arrow-right"></i>
                      </button>
                  </Link>
                </div>
              </div>
           </div>
           <div className="col-sm-12 col-md-8 col-lg-8">
              <div>
                <img className="img-fluid w-100" src={img} alt="" />
              </div>
           </div>
           </div>
        </div>
      </Slide>
    );
};

export default TopBanner;
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div>
      <footer className="bg-dark pt-5 text-white">
        <div className="container">
          <div className="row d-flex justify-content-between">
            <div className="col-sm-6 col-md-4 col-lg-4">
              <div className=" text-start">
                <h1 className="brand-name">Eye Goggles</h1>
                <p>
                  If you had weak eyes, they needed exercise to get strong.
                  Glasses were like crutches. They prevented people with feeble
                  eyes from seeing the world on their own.
                </p>
              </div>
            </div>

            <div className="col-sm-6 col-md-4 col-lg-4">
              <div>
                <p>Contact-Info</p>
                <p>
                  <i class="far fa-envelope"></i> Email:eyegoggles@gmail.com
                </p>
                <p>
                  <i class="fas fa-phone-alt"></i> Call us: 01755-555-80
                </p>
                <p>
                  <i class="fas fa-map-marker-alt"></i>{' '}
                  Sector-1,Road-3,Uttara,Dhaka-1230
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="text-center py-5">
                <span>
                  <i class="fab fa-facebook social-icon"></i>
                </span>
                <span>
                  <i class="fab fa-instagram social-icon"></i>
                </span>
                <span>
                  <i class="fab fa-twitter social-icon"></i>
                </span>
                <span>
                  <i class="fab fa-youtube social-icon"></i>
                </span>
                <br />
                <small className="text-white">
                  © Eye Goggles Clinic 2021. All Rights Reserved
                </small>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

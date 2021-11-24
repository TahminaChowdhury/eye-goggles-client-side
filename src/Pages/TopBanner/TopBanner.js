import './TopBanner.css'
import React from 'react';
import Fade from 'react-reveal/Fade';
import Pulse from 'react-reveal/Pulse';
import img1 from '../../images/photo-1483985988355-763728e1935b.png'
import img2 from '../../images/handsome-fashion-businessman-model-dressed-elegant-blue-suit-posing-street_158538-14341.jpg'
import img3 from '../../images/portrait-smiling-beautiful-girl-her-handsome-boyfriend-casual-summer-clothes-woman-with-bottle-water-straw_158538-5358.jpg'


const TopBanner = () => {
    return (
        <div className="h-75 top-banner">
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
              <div class="carousel-inner">
                <div class="carousel-item active">

                  <div className="d-flex justify-content-between">

                    {/* headings */}

                    <div className="m-5 p-5 text-start">
                      <div className="p-5 text-white heading">
                          <Fade left>
                          <h2>Available in all colors and sizes</h2>

                          <div className="mt-4">
                            <button className="btn shop-btn px-5 py-2 text-white">Shop</button>
                          </div>
                          </Fade>
                      </div>
                    </div>

                    {/* img */}
                    <div>
                        <Pulse>
                        <img src={img1} class="" alt="..."/>
                        </Pulse>
                        </div>
                  </div>
                </div>

                <div class="carousel-item">
                  <div className="d-flex justify-content-between">

                    {/* headings */}
                      <div className="m-5 p-5 text-start">
                        <div className="p-5 text-white heading">
                          <Fade left>
                          <h2>Available in all colors and sizes</h2>

                          <div className="mt-4">
                            <button className="btn shop-btn px-5 py-2 text-white">Shop</button>
                          </div>
                          </Fade>
                      </div>
                      </div>

                      {/* img */}
                      <div>
                          <Pulse>
                          <img src={img2} class="" alt="..."/>
                          </Pulse>
                          </div>
                      </div>
                  </div>
                <div class="carousel-item">
                <div className="d-flex justify-content-between">

                    {/* headings */}
                  <div className="m-5 p-5 text-start">
                      <div className="p-5 text-white heading">
                        <Fade left>
                        <h2>Available in all colors and sizes</h2>

                        <div className="mt-4">
                          <button className="btn shop-btn px-5 py-2 text-white">Shop</button>
                        </div>
                        </Fade>
                      </div>
                    </div>

                    {/* img */}
                    <div>
                        <Pulse>
                        <img src={img3} class="" alt="..."/>
                        </Pulse>
                        </div>
                  </div>
                </div>
              </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
        </div>
    );
};

export default TopBanner;
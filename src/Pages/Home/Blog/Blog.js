import { Box, Grid } from '@material-ui/core';
import React from 'react';
import './Blog.css';
import img1 from '../../../images/portrait-smiling-beautiful-girl-her-handsome-boyfriend-casual-summer-clothes-woman-with-bottle-water-straw_158538-5358.jpg';

const Blog = () => {
  return (
    <Box
      sx={{
        width: '100%',
      }}
      style={{margin: '100px 0px'}}
    >
      <h1 className='text-center mb-5 pb-5'>Our Blogs</h1>
      <Grid container spacing={2}>
        
        <Grid
          item
          xs={12}
          sm={12}
          md={4}
          style={{ display: 'flex', justifyContent: 'center'}}
        >
          <div className="blog-container">
            <div className="blog-img-div">
              <img src={img1} alt="" />
              <div className="date">
                <span className="day">26</span>
                <span className="month">June</span>
              </div>
            </div>
            <div className="blog-content">
              <h3 className="blog-title">Lorem ipsum dolor</h3>
              <p className="description">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Deleniti iusto dignissimos consequatur eligendi excepturi esse
                sequi...
              </p>
              <button className="read-more">Read more</button>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={4} style={{ display: 'flex', justifyContent: 'center'}}>
          <div className="blog-container">
            <div className="blog-img-div">
              <img src={img1} alt="" />
              <div className="date">
                <span className="day">26</span>
                <span className="month">June</span>
              </div>
            </div>
            <div className="blog-content">
              <h3 className="blog-title">Lorem ipsum dolor</h3>
              <p className="description">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Deleniti iusto dignissimos consequatur eligendi excepturi esse
                sequi...
              </p>
              <button className="read-more">Read more</button>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={4} style={{ display: 'flex', justifyContent: 'center' }}>
          <div className="blog-container">
            <div className="blog-img-div">
              <img src={img1} alt="" />
              <div className="date">
                <span className="day">26</span>
                <span className="month">June</span>
              </div>
            </div>
            <div className="blog-content">
              <h3 className="blog-title">Lorem ipsum dolor</h3>
              <p className="description">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Deleniti iusto dignissimos consequatur eligendi excepturi esse
                sequi...
              </p>
              <button className="read-more">Read more</button>
            </div>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Blog;

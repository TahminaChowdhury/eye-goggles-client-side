import { Box, Grid } from '@material-ui/core';
import React from 'react';
import './Blog.scss';
import img1 from '../../../images/portrait-smiling-beautiful-girl-her-handsome-boyfriend-casual-summer-clothes-woman-with-bottle-water-straw_158538-5358.jpg';
import img2 from '../../../images/Models-wear-HUGO-HG-SUN-RX-01-and-HG-SUN-RX-02-available-at-Specsavers-removebg-preview.png';
import img3 from '../../../images/160321_image-guide_LOOKBOOK_image_39.jpg';

const Blog = () => {
  return (
    <Box
      sx={{
        width: '100%',
      }}
      style={{ margin: '100px 0px' }}
    >
      <h1 className="text-center mb-5 pb-5">Our Blogs</h1>
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          sm={12}
          md={4}
          style={{ display: 'flex', justifyContent: 'center' }}
        >
          <Box className="blog-container">
            <Box className="blog-img-container">
              <img src={img1} alt="" />
              <Box className="date">
                <span className="day">26</span>
                <span className="month">June</span>
              </Box>
            </Box>
            <Box className="blog-content">
              <h3 className="blog-title">GORDON-GLASSES</h3>
              <p className="description">
                One morning, when Gregor Samsa woke from troubled dreams, he
                found himself transformed in his bed into a horrible vermin. He
                lay on his armour-like...
              </p>
              <button className="read-more">Read more</button>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={4}
          style={{ display: 'flex', justifyContent: 'center' }}
        >
          <Box className="blog-container">
            <Box className="blog-img-container">
              <img src={img2} alt="" />
              <Box className="date">
                <span className="day">26</span>
                <span className="month">June</span>
              </Box>
            </Box>
            <Box className="blog-content">
              <h3>GORDON-GLASSE</h3>
              <p className="description">
                One morning, when Gregor Samsa woke from troubled dreams, he
                found himself transformed in his bed into a horrible vermin. He
                lay on his armour-like...
              </p>
              <button className="read-more">Read more</button>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={4}
          style={{ display: 'flex', justifyContent: 'center' }}
        >
          <Box className="blog-container">
            <Box className="blog-img-container">
              <img src={img3} alt="" />
              <Box className="date">
                <span className="day">26</span>
                <span className="month">June</span>
              </Box>
            </Box>
            <Box className="blog-content">
              <h3 className="blog-title">GORDON-GLASSE</h3>
              <p className="description">
                One morning, when Gregor Samsa woke from troubled dreams, he
                found himself transformed in his bed into a horrible vermin. He
                lay on his armour-like...
              </p>
              <button className="read-more">Read more</button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Blog;

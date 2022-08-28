import './Explore.css'
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../../Shared/Navigation/Navigation'
import Footer from '../Footer/Footer';


const Explore = () => {
    const [sunglasses, setSunglasses] = useState([]);

    useEffect(() => {
        fetch('https://pacific-lowlands-13394.herokuapp.com/sunglasses')
        .then(res => res.json())
        .then(data => setSunglasses(data))
    }, [])
    return (
        <Box sx={{ flexGrow: 1 }}>
        <Navigation></Navigation>
        <Grid xs={12} sm={12} md={12} className="explore-more">
        <Container>
        <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: "center", pt: 5}}>
        All Products
        </Typography>
        <Typography  variant="p" component="div" sx={{ textAlign: "center"}}>
        Home/Explore
        </Typography>
        
        </Container>
        </Grid>
        <Container>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{my: 5, py: 5}}>
            {sunglasses.map((sunglass, index) => (
            <Grid item xs={12} sm={12} md={4} key={index}>
               
             
                  <Card sx={{ height: '100%', textAlign: 'left'}}>
                    <CardActionArea sx={{my: 3 }}>
                    <CardMedia
                        component="img"
                        height="140"
                        width="80"
                        image={sunglass.img}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="p" component="div" sx={{fontWeight: 'bold'}}>
                        {sunglass.name}
                        </Typography>
                        <Typography variant="p" color="text.secondary">
                        {sunglass.description.split(' ').slice(0, 10).toString().replace(/,/g, ' ')}
                        </Typography>
                    </CardContent>
                    </CardActionArea>
                    <CardActions sx={{mb: 2,  display: 'flex', justifyContent: 'space-between'}}>
                    <Typography variant="h6" sx={{fontWeight: 'bold'}}>
                        $ {sunglass.price}
                        </Typography>
                    <Link to={`/sunglass/${sunglass._id}`} style={{textDecoration: "none"}}>
                    <button className="simple-btn px-3 py-1 "> Buy Now</button>
                        </Link>
                    </CardActions>
                </Card>
            </Grid>
            ))}
        </Grid>
        </Container>
        <Footer></Footer>
        </Box>
    );
};

export default Explore;
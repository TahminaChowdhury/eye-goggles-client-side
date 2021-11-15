import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../../Navigation/Navigation'
import TopBanner from '../../../TopBanner/TopBanner'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Footer from '../../Footer/Footer';

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
            <TopBanner></TopBanner>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{my: 5, py: 5}}>
            {sunglasses.map((sunglass, index) => (
            <Grid item xs={2} sm={4} md={4} key={index}>
                  <Card sx={{ height: '100%' }}>
                    <CardActionArea sx={{my: 3 }}>
                    <CardMedia
                        component="img"
                        height="140"
                        image={sunglass.img}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        {sunglass.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        {sunglass.description.split(' ').slice(0, 10).toString().replace(/,/g, ' ')}
                        </Typography>
                        <Typography variant="h5" color="text.secondary">
                        $ {sunglass.price}
                        </Typography>
                    </CardContent>
                    </CardActionArea>
                    <CardActions>
                    <Box>
                    <Link to={`/sunglass/${sunglass._id}`} style={{textDecoration: "none"}}>
                        <Button size="medium" style={{backgroundColor: "	rgb(193, 243, 76)", color: "black"}}>
                        <ShoppingCartIcon/>  Buy Now
                        </Button>
                        </Link>
                    </Box>
                    </CardActions>
                </Card>
            </Grid>
            ))}
        </Grid>
        <Footer></Footer>
        </Box>
    );
};

export default Explore;
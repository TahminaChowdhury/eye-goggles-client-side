import React from 'react';
import './Sunglasses.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import Slide from 'react-reveal/Slide';


const Sunglasses = ({product}) => {
    const { _id, img, name, description, price} = product;
    return (
        <Grid item xs={12} sm={12} md={4} sx={{mt: 3}} >
        <Card sx={{ height: '100%', textAlign: 'left'}}>
        <CardActionArea sx={{my: 3 }}>
          <CardMedia
            component="img"
            height="140"
            width="30"
            image={img}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="p" component="div" sx={{fontWeight: 'bold'}}>
              {name}
            </Typography>
            <Typography variant="p" color="text.secondary">
              {description.split(' ').slice(0, 10).toString().replace(/,/g, ' ')}...
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions sx={{mb: 2,  display: 'flex', justifyContent: 'space-between'}}>
        <Typography variant="h6" sx={{fontWeight: 'bold'}} >
              $ {price}
            </Typography>
            <Link to={`/sunglass/${_id}`} style={{textDecoration: "none"}}>
            <button className="simple-btn px-3 py-1 "> Buy Now</button>
            </Link>
        </CardActions>
      </Card>
      </Grid>
    );
};

export default Sunglasses;
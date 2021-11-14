import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Sunglasses = ({product}) => {
    const { _id, img, name, description, price} = product;
    return (
        <Grid item xs={12} sm={12} md={4}>
        <Card sx={{ height: '100%' }}>
        <CardActionArea sx={{my: 3 }}>
          <CardMedia
            component="img"
            height="140"
            image={img}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {description.split(' ').slice(0, 10).toString().replace(/,/g, ' ')}
            </Typography>
            <Typography variant="h5" >
              $ {price}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions sx={{mb: 2}}>
            <Link to={`/sunglass/${_id}`} style={{textDecoration: "none"}}>
            <Button size="medium" style={{backgroundColor: "	rgb(193, 243, 76)", color: "black"}}>
            <ShoppingCartIcon/>  Buy Now
          </Button>
            </Link>
        </CardActions>
      </Card>
      </Grid>
    );
};

export default Sunglasses;
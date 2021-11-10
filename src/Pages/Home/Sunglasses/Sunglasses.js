import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

const Sunglasses = ({product}) => {
    const { _id, img, name, description, price} = product;
    return (
        <Grid item xs={12} sm={12} md={4}>
        <Card >
        <CardActionArea>
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
              {description.slice(0, 50)}...
            </Typography>
            <Typography variant="h5" color="text.secondary">
              $ {price}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
            <Link to={`/sunglass/${_id}`}>
            <Button size="small" color="primary">
            Buy Now
          </Button>
            </Link>
        </CardActions>
      </Card>
      </Grid>
    );
};

export default Sunglasses;
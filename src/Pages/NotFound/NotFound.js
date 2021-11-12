import { Button, Container } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../images/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg'

const NotFound = () => {
    return (
        <Container fixed sx={{textAlign: 'center', my: 5 , width: "100%"}}>
            <img src={img} alt="" />
            <br />
            <Link to="/home" style={{ textDecoration: "none"}}>
            <Button variant="outlined">Go To Home</Button>
            </Link>
        </Container>
    );
};

export default NotFound;
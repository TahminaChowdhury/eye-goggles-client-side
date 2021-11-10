import { Button } from '@mui/material';
import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../Hooks/useAuth';

const Login = () => {
    const {user, loginWithGoogle} = useAuth();
    const history = useHistory();
    const location = useLocation();
    
    const handleLoginWithGoogle = () => {
        loginWithGoogle(location, history)
    }
    return (
        <div>
            <Button onClick={handleLoginWithGoogle} variant="contained">Login with Google</Button>
            <h1>This is login page</h1>
        </div>
    );
};

export default Login;
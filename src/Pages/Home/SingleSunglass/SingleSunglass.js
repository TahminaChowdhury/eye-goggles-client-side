import { CircularProgress } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useAuth from '../../../Hooks/useAuth';

const SingleSunglass = () => {
    const {sunglassId} = useParams();
    const [sunglass, setSunglass] = useState({});
   
    
    useEffect(() => {
        fetch(`http://localhost:5000/sunglasses/${sunglassId}`)
        .then(res => res.json())
        .then(data => setSunglass(data))
    },[])

    return (
        <div>
            
            <h2>{sunglass.name}</h2>
        </div>
    );
};

export default SingleSunglass;
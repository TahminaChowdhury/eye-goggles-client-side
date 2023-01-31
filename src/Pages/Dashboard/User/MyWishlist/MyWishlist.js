import { Box } from '@mui/material';
import React from 'react';

const MyWishlist = () => {
    return (
        <Box
        sx={{ flexGrow: 1, mt: 5, backgroundColor: '#fff', borderRadius: '10px' }}
      >
        <Box className="flex-item" style={{ padding: '20px 50px 20px 50px' }}>
          <h4 className="title">My Wishlist</h4>
        </Box>
      </Box>
    );
};

export default MyWishlist;

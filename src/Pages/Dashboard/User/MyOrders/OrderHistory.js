import { Box } from '@mui/material';
import React from 'react';

const OrderHistory = () => {
  return (
    <Box
    sx={{
      mt: 5,
      backgroundColor: '#fff',
      borderRadius: '10px',
      width: '100%',
      heigh: '100%',
    }}
    >
      <Box className="flex-item" style={{ padding: '20px 50px 20px 50px' }}>
        <h4 className="title">Order History</h4>
      </Box>
    </Box>
  );
};

export default OrderHistory;

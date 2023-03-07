import { Box } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';
import './PageTitle.scss';

const PageTitle = ({ name }) => {
  return (
    <Box className="page-title">
      <Box px={8}>
        <p style={{ fontSize: '19px' }}>
          <Link to="/home">Home</Link> | {name}
        </p>
      </Box>
    </Box>
  );
};

export default PageTitle;

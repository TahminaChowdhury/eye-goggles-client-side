import React, { useState } from 'react';
import ViewListIcon from '@mui/icons-material/ViewList';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { Box } from '@mui/system';

const ProductSelectionTop = () => {
  const [view, setView] = useState('list');
  const handleChange = (event, nextView) => {
    setView(nextView);
  };
  return (
    <Box
      p={2}
      mb={2}
      style={{ backgroundColor: '#F5F5F5' }}
      className="flex-item"
    >
      <Box>
        {' '}
        <ToggleButtonGroup
          orientation="alignment"
          value={view}
          exclusive
          onChange={handleChange}
        >
          <ToggleButton
            value="left"
            aria-label="left aligned"
            style={{ marginRight: '10px' }}
          >
            <ViewListIcon />
          </ToggleButton>
          <ToggleButton value="left" aria-label="left aligned">
            <ViewModuleIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Box>
      <Box></Box>
    </Box>
  );
};

export default ProductSelectionTop;

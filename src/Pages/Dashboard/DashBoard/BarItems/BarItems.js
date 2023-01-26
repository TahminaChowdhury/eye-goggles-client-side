import React from 'react';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { Badge, Box, Grid } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import './BarItems.css';

const BarItems = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid
            item
            xs={6}
            sm={6}
            md={6}
            lg={6}
            xl={6}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {/* Search Bar */}
            <Box>
              <Box className="search-bar">
                <IconButton type="button" sx={{ p: 1 }}>
                  <SearchIcon />
                </IconButton>
                <InputBase sx={{ ml: 2, flex: 1 }} placeholder="SEARCH" />
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            xs={6}
            sm={6}
            md={6}
            lg={6}
            xl={6}
            style={{ display: 'flex', justifyContent: 'flex-end' }}
          >
            {/* Icons */}
            <Box>
              <IconButton>
                <CalendarMonthIcon />
              </IconButton>

              <IconButton>
                <Badge
                  overlap="circular"
                  variant="dot"
                  color="error"
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                  }}
                >
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
              >
                <img
                  src=""
                  style={{ width: '30px', height: '30px', borderRadius: '50%' }}
                  alt=""
                />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default BarItems;

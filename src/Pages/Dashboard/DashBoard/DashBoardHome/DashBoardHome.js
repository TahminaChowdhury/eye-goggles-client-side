import React, { useState } from 'react';
import useAuth from '../../../../Hooks/useAuth';
import { Box } from '@mui/system';
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import TextField from '@mui/material/TextField';
import Widgets from './Widgets/Widgets';
import { Grid } from '@mui/material';
import AreaChart from '../Charts/AreaChart';
import Doughnut from '../Charts/Doughnut';

const DashboardHome = () => {
  const { user } = useAuth();
  const [value, setValue] = useState(dayjs(new Date()));

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <Box m={2}>
      <Grid container rowSpacing={8}>
        <Grid item xs={12}>
          <Grid container>
            <Grid
              item
              xs={12}
              md={6}
              display="flex"
              justifyContent="flex-start"
            >
              <Box>
                <h4>Good Morning, {user.displayName}</h4>
                <p>Here's what's happening with your store today.</p>
              </Box>
            </Grid>
            <Grid item xs={12} md={6} display="flex" justifyContent="flex-end">
              <Box>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DateTimePicker
                    value={value}
                    onChange={handleChange}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
              </Box>
            </Grid>
          </Grid>
        </Grid>
        {/* Widgets */}
        <Grid item xs={12}>
          <Widgets />
        </Grid>
        {/* Table */}
        <Grid item xs={12}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={8}>
              <AreaChart />
            </Grid>
            <Grid item xs={12} md={4}>
              <Doughnut />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DashboardHome;

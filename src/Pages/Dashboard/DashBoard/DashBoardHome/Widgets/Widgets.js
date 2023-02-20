import React from 'react';
import './Widgets.scss';
import { Paper, Grid } from '@mui/material';
import { Box } from '@mui/system';
import { styled } from '@mui/material/styles';
import LinearProgress, {
  linearProgressClasses,
} from '@mui/material/LinearProgress';
import NorthIcon from '@mui/icons-material/North';

const BorderLinearProgress = styled(LinearProgress)(({ bgColor }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: '#F5F5F5',
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: bgColor,
  },
}));

const data = [
  {
    icon: <NorthIcon />,
    title: 'ORDER RECEIVED',
    subTitle: 'Todays Order',
    amount: '12000',
    percentage: '20%',
    color: '#00c292',
  },
  {
    icon: <NorthIcon />,
    title: 'TAX DEDUCATION',
    subTitle: 'Monthly Deduction',
    amount: '5,000',
    percentage: '30%',
    color: '#fb9678',
  },
  {
    icon: <NorthIcon />,
    title: 'REVENUE STATS',
    subTitle: 'Todays Income',
    amount: '8,000',
    percentage: '60%',
    color: '#03a9f3',
  },
  {
    icon: <NorthIcon />,
    title: 'YEARLY SALES',
    subTitle: 'Todays Order',
    amount: '12,000',
    percentage: '80%',
    color: '#000',
  },
];

const Widgets = () => {
  return (
    <Grid container rowSpacing={2} columnSpacing={4}>
      {data.map((item) => (
        <Grid item xs={12} sm={12} md={3} xl={3}>
          <Paper className="card">
            <h4>{item.title}</h4>
            <Box textAlign="right" position="relative">
              <span>{item.subTitle}</span>
              <span>
                <NorthIcon className="arrow-icon" sx={{ color: item.color }} />
              </span>
              <h1>{item.amount}</h1>
            </Box>
            <Box sx={{ flexGrow: 1 }}>
              <span style={{ color: item.color }}>{item.percentage}</span>
              <BorderLinearProgress
                bgColor={item.color}
                variant="determinate"
                value={50}
              />
            </Box>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default Widgets;

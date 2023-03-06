import { Box } from '@mui/material';
import './Sidebar.scss';
import React, { useEffect, useState } from 'react';
import Slider from '@mui/material/Slider';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../../redux/Products/productActions';

function valuetext(value) {
  return `${value}`;
}

const Sidebar = () => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.products);
  const { products } = product;
  const brands = products.map((item) => item.brandName);
  const brandName = brands.filter(
    (element, index) => brands.indexOf(element) === index
  );

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const [value, setValue] = useState([20, 50]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box mx={2} style={{ backgroundColor: '#F5F5F5' }}>
      <Box style={{ background: '#000', textAlign: 'center', color: '#fff' }}>
        <h2 style={{ padding: '15px 0px' }}>Filters</h2>
      </Box>
      <Box className="search-filters">
        <Box p={2}>
          {' '}
          <h2 className="widget-title">Price Range</h2>
          <Slider
            getAriaLabel={() => 'Price range'}
            value={value}
            onChange={handleChange}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
            sx={{ color: '#555' }}
          />
        </Box>
      </Box>
      <Box className="search-filters">
        <Box p={2}>
          <h2 className="widget-title">Brand</h2>
          <Box className="flex-item">
            <Box>
              {brandName.map((name, index) => (
                <p key={index}>{name}</p>
              ))}
            </Box>
            <Box></Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;

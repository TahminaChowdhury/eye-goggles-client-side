import React from 'react';
import { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import './GoToTop.scss';

const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const goToTopBtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  const listenToScroll = () => {
    let heightToHide = 250;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    if (winScroll > heightToHide) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', listenToScroll);
    return () => window.removeEventListener('scroll', listenToScroll);
  }, []);

  return (
    <Box className="scroll-btn-container">
      {isVisible && (
        <Box className="top-btn" onClick={goToTopBtn}>
          <KeyboardDoubleArrowUpIcon className="top-btn-icon" />
        </Box>
      )}
    </Box>
  );
};

export default GoToTop;

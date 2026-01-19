'use client';

import React from 'react';
import { Box, Typography } from '@mui/material';

const navItems = ['MEN', 'WOMAN', 'ALL'];
const otherItems = ['WORKOUT', 'RUN', 'FOOTBALL'];

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        width: '100%',
        maxWidth: '1400px',
        height: '320px',
        backgroundColor: '#000000',
        color: '#ffffff',
        position: 'relative',
        mx: 'auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        px: '100px',
        overflow: 'hidden',
      }}
    >
      {/* Left Menu */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 3,
          zIndex: 2,
        }}
      >
        {navItems.map((item) => (
          <Typography
            key={item}
            sx={{
              fontFamily: 'Montserrat',
              fontWeight: 400,
              fontSize: '18px',
              color: '#FFFFFF',
              cursor: 'pointer',
              '&:hover': { opacity: 0.7 },
            }}
          >
            {item}
          </Typography>
        ))}
      </Box>

      {/* Center Nike Logo - Very Large */}
      <Box
        sx={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          width: '600px',
          opacity: 1,
          zIndex: 1,
          pointerEvents: 'none',
        }}
      >
        <Box
          component="svg"
          width="100%"
          height="auto"
          viewBox="0 0 500 196"
        >
          <path 
            d="M133.133 171.466C102.949 185.709 77.8604 192.719 57.7881 192.719C35.2293 192.719 19.1808 183.989 9.18359 166.621C2.94513 155.545 1.00308 141.313 3.65625 123.671C6.22421 106.595 12.9425 88.3464 23.8672 68.8477L24.9375 66.957C32.5093 54.1217 43.9155 38.0567 59.208 18.7334C56.116 26.5738 53.6492 34.7154 51.8447 43.0654L51.8428 43.0723L51.8418 43.0801C45.895 71.389 51.144 92.8976 68.4805 106.71L68.5 106.726C76.8497 113.242 88.1469 116.364 102.122 116.364C113.288 116.364 125.775 114.362 139.561 110.412L139.575 110.407L139.589 110.403L469.42 11.7549L133.133 171.466Z" 
            stroke="white" 
            strokeWidth="2" 
            fill="none"
          />
        </Box>
      </Box>

      {/* Right Menu */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 3,
          alignItems: 'flex-end',
          zIndex: 2,
        }}
      >
        {otherItems.map((item) => (
          <Typography
            key={item}
            sx={{
              fontFamily: 'Montserrat',
              fontWeight: 400,
              fontSize: '18px',
              color: '#FFFFFF',
              cursor: 'pointer',
              '&:hover': { opacity: 0.7 },
            }}
          >
            {item}
          </Typography>
        ))}
      </Box>
    </Box>
  );
};

export default Footer;

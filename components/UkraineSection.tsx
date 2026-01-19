'use client';

import React from 'react';
import { Box, Typography } from '@mui/material';

const UkraineSection = () => {
  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: '1400px',
        mx: 'auto',
        py: 6,
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 1,
      }}
    >
      <Typography
        sx={{
          fontFamily: 'Montserrat',
          fontSize: '14px',
          fontWeight: 600,
          color: '#A0A0A0',
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
        }}
      >
        THANK YOU FOR YOUR SUPPORT
      </Typography>
      <Typography
        sx={{
          fontFamily: 'Montserrat',
          fontSize: { xs: '32px', md: '48px' },
          fontWeight: 900,
          fontStyle: 'italic',
          color: '#000000',
        }}
      >
        Glory to Ukraine
      </Typography>
      <Typography
        sx={{
          fontSize: '40px',
        }}
      >
        🇺🇦
      </Typography>
    </Box>
  );
};

export default UkraineSection;

'use client';

import React from 'react';
import { Box } from '@mui/material';

const FeaturedBg = () => {
  return (
    <Box
      component="section"
      sx={{
        position: 'relative',
        width: '100%',
        height: { xs: '300px', md: '700px' },
        backgroundImage: 'url(/images/featuredbg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(196, 196, 196, 0.2)',
          backdropFilter: 'blur(7.5px)',
        },
      }}
    />
  );
};

export default FeaturedBg;

'use client';

import React from 'react';
import { Box } from '@mui/material';
import LandscapeCard from './LandscapeCard';

const FeaturedItems = () => (
  <Box
    sx={{
      position: 'relative',
      width: '1400px',
      height: '400px',
      mx: 'auto',
      mt: '-200px',
    }}
  >
    <Box
      sx={{
        position: 'absolute',
        width: '663.59px',
        height: '398.84px',
        left: '50px',
        top: '0px',
      }}
    >
      <LandscapeCard
        imageSrc="/images/f-landscape1.png"
        title="NEW"
        description="AIR JORDAN 1 MID LIGHT SMOKE GREY"
      />
    </Box>

    <Box
      sx={{
        position: 'absolute',
        width: '663px',
        height: '398px',
        left: '720px',
        top: '0px',
      }}
    >
      <LandscapeCard
        imageSrc="/images/f-landscape2.png"
        title="NEW"
        description="AIR JORDAN 200 SE BOLD RED"
      />
    </Box>
  </Box>
);

export default FeaturedItems;

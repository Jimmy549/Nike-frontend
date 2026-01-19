
import React from 'react';
import { Box } from '@mui/material';
import LandscapeCard from '../components/LandscapeCard';

const FeaturedItems = () => (
  <Box
    sx={{
      position: 'relative',
      width: '100%',
      height: { xs: 'auto', md: 80 },
      mt: 4,

      display: { xs: 'flex', md: 'block' },
      flexDirection: { xs: 'column', md: 'row' },
      alignItems: { xs: 'center', md: 'center' },
      gap: { xs: 2, md: 0 },   
      justifyContent: { xs: 'center', md: 'center' },
    }}
  >

    <Box
      sx={{
        position: { xs: 'static', md: 'absolute' },
        top:      { xs: 0, md: '-75%' },
        left:     { xs: 0, md: '10%'    },
       width: { xs: '80%', sm: '55%', md: '35%' },
       mx:    { xs: 'auto', md: 0 }, 
        mt:       { xs: '-4%', md: 0 },

        zIndex:   2,
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
        position: { xs: 'static', md: 'absolute' },
        top:      { xs: 0,       md: '-75%' },
        right:    { xs: 0,       md: '10%'    },
         width: { xs: '80%', sm: '55%', md: '35%' },
       mx:    { xs: 'auto', md: 0 }, 
        mb:       { xs: 0,       md: 0        },

        zIndex:   2,
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

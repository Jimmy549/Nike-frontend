import React from 'react';
import { Box } from '@mui/material';

const FeaturedBg = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: { xs: 300, md: 500 },  
        overflow: 'hidden',
      }}
    >
      <Box
        component="img"
        src="/images/featuredbg.png"
        alt="Featured background"
        loading="lazy"
        sx={{
          width: '100%',
          height: '80%',
          objectFit: 'cover',
          filter: 'blur(4px)',
          transform: 'scale(1.1)',    
        }}
      />

      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box
          component="img"
          src="/images/icons8-nike-500.png"
          alt="Nike Logo"
          loading="lazy"
          sx={{
            width: { xs: 150, md: 300}, 
            height: 'auto',
          }}
        />
      </Box>
    </Box>
  );
};

export default FeaturedBg;

'use client';

import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const NotificationSection = () => {
  return (
    <Box sx={{ width: '100%', maxWidth: '1400px', mx: 'auto' }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          width: '100%',
          height: { xs: 'auto', md: '300px' },
          backgroundColor: '#000000',
          color: '#FFFFFF',
          overflow: 'hidden',
          mb: 0,
        }}
      >
        {/* Left Side: Text and Button */}
        <Box
          sx={{
            flex: 1,
            p: { xs: 3, md: 5 },
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            position: 'relative',
            zIndex: 1,
          }}
        >
          <Typography
            sx={{
              fontFamily: 'Montserrat',
              fontStyle: 'italic',
              fontWeight: 900,
              fontSize: { xs: '24px', md: '44px' },
              lineHeight: 1.1,
              mb: 2,
              letterSpacing: '-0.02em',
            }}
          >
            WE ARE NEVER DONE
          </Typography>

          <Typography
            sx={{
              maxWidth: '450px',
              fontFamily: 'Montserrat',
              fontWeight: 600,
              fontSize: { xs: '12px', md: '14px' },
              lineHeight: 1.5,
              mb: 4,
              opacity: 0.9,
            }}
          >
            Celebrating 50 years of Nike from May 16th! Exclusive products, experiences and much more await you for five days. Scan and join the Nike app!
          </Typography>

          <Button
            sx={{
              width: 'max-content',
              px: 3,
              height: '40px',
              backgroundColor: '#FFFFFF',
              color: '#000000',
              borderRadius: '20px',
              fontFamily: 'Montserrat',
              fontWeight: 700,
              fontSize: '14px',
              textTransform: 'none',
              '&:hover': {
                backgroundColor: '#f0f0f0',
              },
            }}
          >
            Take me with you
          </Button>
        </Box>

        {/* Right Side: QR Image Grid */}
        <Box
          sx={{
            flex: 0.8,
            display: { xs: 'none', md: 'block' },
            backgroundImage: 'url(/images/right-notification.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100%',
          }}
        />
      </Box>

      {/* Scrolling Ticker Strip */}
      <Box
        sx={{
          width: '100%',
          height: { xs: '40px', md: '49px' },
          backgroundImage: 'url(/images/nike-strip.gif)',
          backgroundSize: 'contain',
          backgroundRepeat: 'repeat-x',
          backgroundPosition: 'center',
        }}
      />
    </Box>
  );
};

export default NotificationSection;

'use client';

import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const MoreProductsSection = () => (
  <Box sx={{ width: '100%', maxWidth: { xs: '100%', md: '1400px' }, mx: 'auto', mt: { xs: 4, md: 8 }, mb: { xs: 4, md: 8 }, px: { xs: 2, md: 0 } }}>
    <Typography
      sx={{
        fontFamily: 'Montserrat',
        fontWeight: 700,
        fontSize: { xs: '24px', md: '40px' },
        lineHeight: { xs: '30px', md: '49px' },
        textTransform: 'uppercase',
        color: '#000000',
        mb: 3,
        px: { xs: 0, md: '50px' },
        textAlign: { xs: 'center', md: 'left' },
      }}
    >
      More Nike products
    </Typography>

    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: { xs: '200px', md: '324px' },
        backgroundImage: 'url(/images/nikeproducts.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderRadius: { xs: '12px', md: '0' },
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          left: { xs: '20px', md: '50px' },
          top: { xs: '20px', md: '44px' },
        }}
      >
        <Typography
          sx={{
            width: { xs: '200px', md: '308px' },
            fontFamily: 'Montserrat',
            fontStyle: 'italic',
            fontWeight: 900,
            fontSize: { xs: '20px', md: '40px' },
            lineHeight: { xs: '24px', md: '49px' },
            color: '#FFFFFF',
            mb: { xs: 1, md: 3 },
          }}
        >
          YOUR NIKE MEMBERSHIP
        </Typography>

        <Typography
          sx={{
            width: { xs: '250px', md: '446px' },
            fontFamily: 'Montserrat',
            fontWeight: 400,
            fontSize: { xs: '12px', md: '20px' },
            lineHeight: { xs: '16px', md: '24px' },
            color: '#FFFFFF',
            mb: { xs: 2, md: 3 },
          }}
        >
          Join our members and show your love with Nike By You!
        </Typography>

        <Button
          sx={{
            width: { xs: '120px', md: '150px' },
            height: '40px',
            background: '#FFFFFF',
            borderRadius: '16px',
            fontFamily: 'Montserrat',
            fontWeight: 400,
            fontSize: '16px',
            lineHeight: '20px',
            color: '#000000',
            textTransform: 'none',
            '&:hover': { background: '#f0f0f0' },
          }}
        >
          Join Us
        </Button>
      </Box>
    </Box>
  </Box>
);

export default MoreProductsSection;

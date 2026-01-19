import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const MoreProductsSection = () => (
  <Box component="section">
    <Typography
      variant="h6"
      fontWeight="bold"
      sx={{ mb: 4, textAlign: 'left', px: 1 }}
    >
      More Nike Products
    </Typography>

    <Box
      sx={{
        width: '100%',
        height: { xs: 300, md: 300 },
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        backgroundImage: 'url(/images/prod.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >

      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          bgcolor: 'rgba(0, 0, 0, 0.6)',
          zIndex: 1,
        }}
      />

      <Box
        sx={{
          position: 'relative',
          width: '60%',
          maxWidth: 600,
          p: { xs: 2, md: 4 },
          color: '#ffffff',
          textAlign: 'left',
          zIndex: 2,
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: '2rem', md: '3rem' },
            fontWeight: 'bold',
            fontStyle: 'italic',
            mb: 2,
          }}
        >
          YOUR NIKE MEMBERSHIP
        </Typography>

        <Typography
          variant="body1"
          sx={{ fontSize: { xs: '1rem', md: '1.25rem' }, mb: 3 }}
        >
          Join our members and show your love with Nike By You!
        </Typography>

        <Button
          variant="contained"
          size="large"
          sx={{
            backgroundColor: '#ffffff',
            color: '#000000',
            borderRadius: 5,
            textTransform: 'none',
          }}
        >
         Join Us
        </Button>
      </Box>
    </Box>
  </Box>
);

export default MoreProductsSection;

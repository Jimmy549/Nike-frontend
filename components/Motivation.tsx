'use client';

import React from 'react';
import { Box, Typography } from '@mui/material';

const MotivationalSection = () => (
  <Box
    component="section"
    sx={{
      width: '100%',
      maxWidth: '1400px',
      mx: 'auto',
      mt: { xs: 6, md: 10 },
      mb: { xs: 6, md: 8 },
      px: { xs: 2, md: 0 },
      textAlign: 'center',
    }}
  >
    <Typography
      sx={{
        fontFamily: 'Montserrat',
        fontWeight: 400,
        fontSize: { xs: '20px', md: '32px' },
        color: '#000000',
        mb: 1,
      }}
    >
      At the moment
    </Typography>

    <Typography
      sx={{
        fontFamily: 'Montserrat',
        fontStyle: 'italic',
        fontWeight: 900,
        fontSize: { xs: '40px', md: '80px' },
        lineHeight: 1,
        color: '#000000',
        mb: 2,
        textTransform: 'uppercase',
      }}
    >
      SUMMERTIME MOOD
    </Typography>

    <Typography
      sx={{
        fontFamily: 'Montserrat',
        fontWeight: 400,
        fontSize: { xs: '16px', md: '32px' },
        color: '#000000',
      }}
    >
      Fight the heat in a sunny look!
    </Typography>
  </Box>
);

export default MotivationalSection;

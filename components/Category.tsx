'use client';

import React from 'react';
import { Box, Typography } from '@mui/material';

const CategorySection = () => {
  return (
    <Box
      sx={{
        width: '1400px',
        mx: 'auto',
        mt: 8,
        mb: 8,
      }}
    >
      <Typography
        sx={{
          fontFamily: 'Montserrat',
          fontWeight: 700,
          fontSize: '40px',
          lineHeight: '49px',
          color: '#000000',
          mb: 4,
          px: '50px',
        }}
      >
        Buy by category
      </Typography>

      {/* WORKOUT Section */}
      <Box
        sx={{
          position: 'relative',
          width: '1300px',
          height: '570px',
          mx: 'auto',
          mb: 4,
        }}
      >
        <Box
          component="img"
          src="/images/cat1.gif"
          alt="Workout"
          sx={{
            position: 'absolute',
            width: '652px',
            height: '570px',
            right: '0px',
            top: '0px',
          }}
        />
        <Typography
          sx={{
            position: 'absolute',
            left: '189px',
            top: '263px',
            fontFamily: 'Montserrat',
            fontStyle: 'italic',
            fontWeight: 700,
            fontSize: '36px',
            lineHeight: '44px',
            letterSpacing: '0.3em',
            color: '#000000',
          }}
        >
          WORKOUT
        </Typography>
      </Box>

      {/* RUN Section */}
      <Box
        sx={{
          position: 'relative',
          width: '1300px',
          height: '567px',
          mx: 'auto',
          mb: 4,
        }}
      >
        <Box
          component="img"
          src="/images/cat2.gif"
          alt="Run"
          sx={{
            position: 'absolute',
            width: '648px',
            height: '567px',
            left: '0px',
            top: '0px',
          }}
        />
        <Typography
          sx={{
            position: 'absolute',
            right: '406px',
            top: '260px',
            fontFamily: 'Montserrat',
            fontStyle: 'italic',
            fontWeight: 700,
            fontSize: '36px',
            lineHeight: '44px',
            letterSpacing: '0.3em',
            color: '#000000',
          }}
        >
          RUN
        </Typography>
      </Box>

      {/* FOOTBALL Section */}
      <Box
        sx={{
          position: 'relative',
          width: '1300px',
          height: '570px',
          mx: 'auto',
        }}
      >
        <Box
          component="img"
          src="/images/cat3.gif"
          alt="Football"
          sx={{
            position: 'absolute',
            width: '652px',
            height: '570px',
            right: '0px',
            top: '0px',
          }}
        />
        <Typography
          sx={{
            position: 'absolute',
            left: '185px',
            top: '262px',
            fontFamily: 'Montserrat',
            fontStyle: 'italic',
            fontWeight: 700,
            fontSize: '36px',
            lineHeight: '44px',
            letterSpacing: '0.3em',
            color: '#000000',
          }}
        >
          FOOTBALL
        </Typography>
      </Box>
    </Box>
  );
};

export default CategorySection;

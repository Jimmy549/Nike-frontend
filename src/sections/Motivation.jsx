import React from 'react';
import { Box, Typography } from '@mui/material';

const MotivationalSection = () => (
  <Box
    component="section"
    sx={{
      py: 2,              
      px: 2, 
      textAlign: 'center',
    }}
  >
    <Typography variant="body1" gutterBottom>
        At the moment
    </Typography>

    <Typography
      variant="h1"
      gutterBottom
      sx={{
        fontWeight: 800,
        fontStyle: 'italic',
        fontSize: { xs: '2rem', md: '3rem' },
      }}
    >
     SUMMERTIME MOOD
    </Typography>

    {/* Second body text */}
    <Typography variant="body1">
     Fight the heat in a sunny look!
    </Typography>
  </Box>
);

export default MotivationalSection;

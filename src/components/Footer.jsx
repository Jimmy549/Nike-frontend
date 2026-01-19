import React from 'react';
import { Box, Grid, Typography, useTheme } from '@mui/material';

const navItems = [ 'ALL', 'WOMEN', 'MEN'];
const otherItems = ['WORKOUT', 'RUN', 'FOOTBALL'];

const Footer = () => {
  const theme = useTheme();

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#000000',
        color: '#ffffff',
        py: 2,
        px: 2,
      }}
    >
      <Grid container spacing={1}>
        <Grid size={{ xs: 3, sm: 3 }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            {navItems.map((item) => (
              <Typography
                key={item}
                variant="body1"
              >
                {item}
              </Typography>
            ))}
          </Box>
        </Grid>

        <Grid
          size={{ xs: 5, sm: 6 }}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
 
          <Box
            component="img"
            src="/images/icons8-nike-500-outline.png"
            alt="Nike Logo"
            sx={{
              width: { xs: 80, sm: 200 },
              height: 'auto',
            }}
          />
        </Grid>

        <Grid size={{ xs: 3, sm: 3 }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            {otherItems.map((item) => (
              <Typography key={item} variant="body1">
                {item}
              </Typography>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;

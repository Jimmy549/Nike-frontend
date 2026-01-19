import React from 'react';
import { Grid, Box, Typography, Button, useTheme, useMediaQuery } from '@mui/material';

const NotificationSection = () => {
  const theme = useTheme();
  const isMdDown = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box>
      <Grid
        container
        direction={isMdDown ? 'column-reverse' : 'row'}
        spacing={0}
      >
        <Grid size={{xs: 12, md: 6}}>
          <Box
            sx={{
              height: '100%',
              backgroundImage: 'url(/images/left-notification.png)',
              backgroundSize: 'cover',
             backgroundPosition: 'right center',
              color: theme.palette.background.default,
              display: 'flex',
              justifyContent: 'left',
              alignItems: 'left',
              textAlign: 'left',
              p: 4,
            }}
          >
            <Box sx={{ width: '80%' }}>
              <Typography variant="h5" fontWeight={900} gutterBottom sx={{ fontStyle: 'italic' }}>
                WE ARE NEVER DONE
              </Typography>
              <Typography variant="body1" gutterBottom>
                Celebrating 50 years of Nike from May 16th!
              </Typography>
              <Typography variant="body1" gutterBottom>
                Exclusive products, experiences and much more await you for five days. Scan and join the Nike app!
              </Typography>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: theme.palette.background.default,
                  color: theme.palette.text.primary,
                  mt: 3
                }}
              >
                Celebrate with us
              </Button>
            </Box>
          </Box>
        </Grid>

        <Grid size={{xs: 12, md: 6}}>
          <Box
            sx={{
              height: isMdDown ? 'auto' : '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Box
              component="img"
              src="/images/right-notification.png"
              alt="Notification Visual"
              loading="lazy"
              sx={{
                width: '100%',
                 height: isMdDown ? 150 : '100%',
                objectFit: 'cover',
              }}
            />
          </Box>
        </Grid>
      </Grid>

      <Box
        sx={{
          height: 20,
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <img
          src="/images/nike-strip.gif"
          alt="Nike Strip"
          style={{
            height: '100%',
            width: '100%',
          }}
        />
      </Box>
    </Box>
  );
};

export default NotificationSection;



import React from 'react';
import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  Button,
  useTheme,
  useMediaQuery
} from '@mui/material';

const title = '-20% Discount';
const description = 'on your first purchase';

const DiscountSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box component="section" sx={{ py: 6, px: 2 }}>

      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'center',
          alignItems: 'center',
          mb: 4,
          gap: { xs: 1, md: 0 },
          fontStyle: 'italic',
        }}
      >
        {!isMobile && (
          <Typography
            variant="h4"
            sx={{
              textAlign: 'center',
              flex: 1,
              fontFamily: 'Poppins',
              fontWeight: 900,
              fontStyle: 'italic',
            }}
          >
            LOOKS GOOD, RUNS GOOD, FEELS GOOD
          </Typography>
        )}

{isMobile && (
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      gap: 1, 
    }}
  >
    <Typography
      variant="h4"
      sx={{
        textAlign: 'left',
        fontFamily: 'Poppins',
        fontWeight: 900,
        fontStyle: 'italic',
        width: '100%', 
      }}
    >
      LOOKS GOOD,
    </Typography>
    <Typography
      variant="h4"
      sx={{
        textAlign: 'center',
        fontFamily: 'Poppins',
        fontWeight: 900,
        fontStyle: 'italic',
        width: '100%',
      }}
    >
      RUNS GOOD,
    </Typography>
    <Typography
      variant="h4"
      sx={{
        textAlign: 'right',
        fontFamily: 'Poppins',
        fontWeight: 900,
        fontStyle: 'italic',
        width: '100%',
      }}
    >
      FEELS GOOD
    </Typography>
  </Box>
)}


       
      </Box>

      <Box sx={{ position: 'relative', transform: 'translateY(0%)', zIndex: 1 }}>
        <Grid container spacing={0}>
          <Grid
            size={{ xs: 12, md: 6 }}
            sx={{ display: 'flex', justifyContent: 'center' }}
          >
            <Card
              sx={{
                display: 'flex',
                mb: 2,
                justifyContent: 'center',
                alignContent: 'center',
                overflow: 'visible',
                boxShadow: '5px 5px 25px 0px #00000040',
                width: { xs: '80%', sm: '55%', md: '35%' },
                minWidth: { xs: 250, md: 350 },
              }}
            >
              <Grid container sx={{ width: '100%' }}>
                <Grid size={{ xs: 6 }}>
                  <CardContent sx={{ textAlign: 'left' }}>
                    <Typography
                      variant="h6"
                      fontWeight="bold"
                      sx={{ fontStyle: 'italic', color: 'red' }}
                      gutterBottom
                    >
                      {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" gutterBottom>
                      {description}
                    </Typography>
                    <Button
                      aria-label="shop"
                      sx={{ backgroundColor: '#000000', color: '#ffffff', borderRadius: 3 }}
                    >
                      Shop Now
                    </Button>
                  </CardContent>
                </Grid>
                <Grid size={{ xs: 6 }} sx={{ position: 'relative' }}>
                  <Box
                    component="img"
                    src="/images/f-portrait4.png"
                    alt={title}
                    loading="lazy"
                    sx={{
                      position: 'absolute',
                      top: '0%',
                      right: '-5%',
                      width: { xs: 180, md: 220 },
                      objectFit: 'cover',
                      transform: 'rotate(330deg)',
                      zIndex: 1,
                    }}
                  />
                </Grid>
              </Grid>
            </Card>
          </Grid>

          <Grid
            size={{ xs: 12, md: 6 }}
            sx={{ display: 'flex', justifyContent: 'center' }}
          >
            <Card
              sx={{
                display: 'flex',
                mb: 2,
                justifyContent: 'center',
                overflow: 'visible',
                boxShadow: '5px 5px 25px 0px #00000040',
                width: { xs: '80%', sm: '55%', md: '50%' },
                minWidth: { xs: 250, md: 350 },
              }}
            >
              <Grid container sx={{ width: '100%' }}>
                <Grid size={{ xs: 6 }}>
                  <CardContent sx={{ textAlign: 'left' }}>
                    <Typography
                      variant="h6"
                      fontWeight="bold"
                      sx={{ fontStyle: 'italic', color: 'red' }}
                      gutterBottom
                    >
                      {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" gutterBottom>
                      {description}
                    </Typography>
                    <Button
                      aria-label="shop"
                      sx={{ backgroundColor: '#000000', color: '#ffffff', borderRadius: 3 }}
                    >
                      Shop Now
                    </Button>
                  </CardContent>
                </Grid>
                <Grid size={{ xs: 6 }} sx={{ position: 'relative' }}>
                  <Box
                    component="img"
                    src="/images/f-portrait2.png"
                    loading="lazy"
                    alt={title}
                    sx={{
                      position: 'absolute',
                      top: '0%',
                      right: '-5%',
                      width: { xs: 180, md: 220 },
                      objectFit: 'cover',
                      transform: 'rotate(330deg)',
                      zIndex: 1,
                    }}
                  />
                </Grid>
              </Grid>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default DiscountSection;

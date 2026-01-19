import React from 'react';
import { Box, Grid, Typography, useTheme, useMediaQuery } from '@mui/material';

const rows = [
  { key: 1, text: 'WORKOUT',    imageSrc: '/images/cat1.gif', swap: true  },
  { key: 2, text: 'RUN',        imageSrc: '/images/cat2.gif', swap: false },
  { key: 3, text: 'FOOTBALL',   imageSrc: '/images/cat3.gif', swap: true  },
];

const CategorySection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md')); 

  return (
    <Box component="section" sx={{ mb: 8, px: 2 }}>

      <Typography variant="h6" sx={{ mb: 4, fontWeight: 'bold', textAlign: 'left' }}>
        Buy By Category
      </Typography>

      <Grid container spacing={0}>
        {rows.map(({ key, text, imageSrc, swap }) => (
          <React.Fragment key={key}>
            <Grid
               size={{xs: 12, md: 6}} 
              order={{
                xs: 0,
                md: swap ? (2 * key - 2) : (2 * key - 1),
              }}
              sx={{
                position: 'relative',
                height: { xs: 300, md: 'auto' },
              }}
            >
              <Box
                component="img"
                src={imageSrc}
                alt={text}
                loading="lazy"
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />

              {isMobile && (
                <Box
                  sx={{
                    position: 'absolute',
                    inset: 0,
                    bgcolor: 'rgba(0,0,0,0.4)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    px: 2,
                  }}
                >
                  <Typography
                    variant="body1"
                    sx={{
                      color: '#fff',
                      textAlign: 'center',
                      fontStyle: 'italic',
                      fontWeight: 900,
                      fontSize: '20px',
                    }}
                  >
                    {text}
                  </Typography>
                </Box>
              )}
            </Grid>

            {!isMobile && (
            <Grid
             size={{xs: 12, md: 6}} 
              order={{
                xs: 1,
                md: swap ? (2 * key - 1) : (2 * key - 2),
              }}
              sx={{
                display: { sm: 'none', md: 'flex' },
                alignItems: 'center',
                justifyContent: 'center',
                height: 'auto',
                p: 4,
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  textAlign: 'center',
                  fontStyle: 'italic',
                  fontWeight: 900,
                  fontSize: '25px',
                }}
              >
                {text}
              </Typography>
            </Grid>
            )}

          </React.Fragment>
        ))}
      </Grid>
    </Box>
  );
};

export default CategorySection;

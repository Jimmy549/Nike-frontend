'use client';

import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const DiscountSection = () => {
  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: '1266px',
        mx: 'auto',
        mt: 8,
        mb: 8,
        px: 2,
      }}
    >
      <Typography
        sx={{
          fontFamily: 'Montserrat',
          fontStyle: 'italic',
          fontWeight: 900,
          fontSize: '40px',
          lineHeight: '49px',
          color: '#000000',
          textAlign: 'center',
          mb: 6,
        }}
      >
        LOOKS GOOD. RUNS GOOD. FEELS GOOD.
      </Typography>

      <Box
        sx={{
          display: 'flex',
          gap: '53px',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        {/* First Card */}
        <Box
          sx={{
            position: 'relative',
            width: '606px',
            height: '273px',
            background: '#EFEFEF',
            boxShadow: '5px 5px 25px rgba(0, 0, 0, 0.25)',
            borderRadius: '18px',
            flex: '0 0 auto',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            '&:hover': {
              transform: 'translateY(-8px)',
              boxShadow: '8px 12px 30px rgba(0, 0, 0, 0.35)',
            },
          }}
        >
          <Box
            component="img"
            src="/images/f-portrait4.png"
            alt="Discount Shoe"
            sx={{
              position: 'absolute',
              width: '394.48px',
              height: '197.24px',
              left: '251.09px',
              top: '43.86px',
              filter: 'drop-shadow(0px 15px 30px rgba(0, 0, 0, 0.25))',
              transform: 'rotate(-30.09deg)',
            }}
          />

          <Box sx={{ position: 'absolute', left: '48.33px', top: '51.25px' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
              <Typography
                sx={{
                  fontFamily: 'Montserrat',
                  fontWeight: 700,
                  fontSize: '30px',
                  lineHeight: '37px',
                  color: '#FF3939',
                }}
              >
                -20%
              </Typography>
              <Typography
                sx={{
                  fontFamily: 'Montserrat',
                  fontWeight: 700,
                  fontSize: '24px',
                  lineHeight: '29px',
                  color: '#FF3939',
                }}
              >
                Discount
              </Typography>
            </Box>

            <Typography
              sx={{
                fontFamily: 'Montserrat',
                fontWeight: 400,
                fontSize: '20px',
                lineHeight: '24px',
                color: '#202727',
                mb: 3,
              }}
            >
              on your first purchase
            </Typography>

            <Button
              sx={{
                width: '180.24px',
                height: '54.33px',
                background: '#000000',
                borderRadius: '16px',
                fontFamily: 'Montserrat',
                fontWeight: 400,
                fontSize: '20px',
                lineHeight: '24px',
                color: '#FFFFFF',
                textTransform: 'none',
                transition: 'all 0.3s ease',
                '&:hover': {
                  background: '#333',
                  transform: 'scale(1.05)',
                },
              }}
            >
              Shop now
            </Button>
          </Box>
        </Box>

        {/* Second Card */}
        <Box
          sx={{
            position: 'relative',
            width: '606px',
            height: '273px',
            background: '#EFEFEF',
            boxShadow: '5px 5px 25px rgba(0, 0, 0, 0.25)',
            borderRadius: '18px',
            flex: '0 0 auto',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            '&:hover': {
              transform: 'translateY(-8px)',
              boxShadow: '8px 12px 30px rgba(0, 0, 0, 0.35)',
            },
          }}
        >
          <Box
            component="img"
            src="/images/f-portrait2.png"
            alt="Discount Shoe"
            sx={{
              position: 'absolute',
              width: '359.09px',
              height: '179.54px',
              left: '239.8px',
              top: '0px',
              filter: 'drop-shadow(0px 15px 30px rgba(0, 0, 0, 0.3))',
              transform: 'matrix(0.87, -0.5, 0.5, 0.87, 0, 0)',
            }}
          />

          <Box sx={{ position: 'absolute', left: '48.33px', top: '51.26px' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
              <Typography
                sx={{
                  fontFamily: 'Montserrat',
                  fontWeight: 700,
                  fontSize: '30px',
                  lineHeight: '37px',
                  color: '#FF3939',
                }}
              >
                -20%
              </Typography>
              <Typography
                sx={{
                  fontFamily: 'Montserrat',
                  fontWeight: 700,
                  fontSize: '24px',
                  lineHeight: '29px',
                  color: '#FF3939',
                }}
              >
                Discount
              </Typography>
            </Box>

            <Typography
              sx={{
                fontFamily: 'Montserrat',
                fontWeight: 400,
                fontSize: '20px',
                lineHeight: '24px',
                color: '#202727',
                mb: 3,
              }}
            >
              on your first purchase
            </Typography>

            <Button
              sx={{
                width: '180.24px',
                height: '54.33px',
                background: '#000000',
                borderRadius: '16px',
                fontFamily: 'Montserrat',
                fontWeight: 400,
                fontSize: '20px',
                lineHeight: '24px',
                color: '#FFFFFF',
                textTransform: 'none',
                transition: 'all 0.3s ease',
                '&:hover': {
                  background: '#333',
                  transform: 'scale(1.05)',
                },
              }}
            >
              Shop now
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default DiscountSection;
'use client';

import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Grid,
  IconButton,
  Box,
} from '@mui/material';
import NorthEastIcon from '@mui/icons-material/NorthEast';

interface LandscapeCardProps {
  imageSrc: string;
  title: string;
  description: string;
}

const LandscapeCard = ({ imageSrc, title, description }: LandscapeCardProps) => {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: '100%',
      }}
    >
      <Card
        sx={{
          position: 'absolute',
          width: '602.07px',
          height: '272.39px',
          left: '0px',
          top: '82.05px',
          background: '#EFEFEF',
          boxShadow: '5px 5px 25px rgba(0, 0, 0, 0.25)',
          borderRadius: '18px',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-8px)',
            boxShadow: '8px 12px 30px rgba(0, 0, 0, 0.35)',
          },
        }}
      >
        <CardContent sx={{ textAlign: 'left', pt: '60px', pl: '40px' }}>
          <Typography
            sx={{
              fontFamily: 'Montserrat',
              fontStyle: 'italic',
              fontWeight: 700,
              fontSize: '48px',
              lineHeight: '59px',
              color: '#FF3939',
              mb: 1,
            }}
          >
            {title}
          </Typography>
          <Typography
            sx={{
              fontFamily: 'Montserrat',
              fontWeight: 400,
              fontSize: '20px',
              lineHeight: '24px',
              letterSpacing: '0.01em',
              color: '#000000',
              width: '228.79px',
              mb: 2,
            }}
          >
            {description}
          </Typography>
          <Box
            sx={{
              width: '55px',
              height: '55px',
              background: '#FFFFFF',
              borderRadius: '35px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              '&:hover': {
                background: '#000000',
                transform: 'scale(1.1)',
                '& .MuiSvgIcon-root': {
                  color: '#FFFFFF',
                },
              },
            }}
          >
            <NorthEastIcon sx={{ color: '#000000', transform: 'rotate(-30deg)' }} />
          </Box>
        </CardContent>
      </Card>

      <Box
        component="img"
        src={imageSrc}
        alt={title}
        sx={{
          position: 'absolute',
          width: '409.19px',
          height: '230.44px',
          left: '194px',
          top: '0px',
          filter: 'drop-shadow(0px 22px 45px rgba(0, 0, 0, 0.25))',
          transform: 'rotate(-28.75deg)',
          transition: 'all 0.3s ease',
          '.MuiCard-root:hover ~ &': {
            transform: 'rotate(-25deg) scale(1.05)',
          },
        }}
      />
    </Box>
  );
};

export default LandscapeCard;

'use client';

import React, { useState } from 'react';
import {
  Card,
  CardContent,
  Typography,
  IconButton,
  Box,
} from '@mui/material';
import NorthEastIcon from '@mui/icons-material/NorthEast';
import { useAddToCartMutation } from '@/services/cartApi';

interface PortraitCardProps {
  id: string;
  imageSrc: string;
  title: string;
  price: number;
}

const PortraitCard = ({ id, imageSrc, title, price }: PortraitCardProps) => {
  const [addToCart] = useAddToCartMutation();
  const [showSuccess, setShowSuccess] = useState(false);

  const handleAddToCart = async () => {
    try {
      await addToCart({ productId: id, quantity: 1 }).unwrap();
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 2000);
    } catch (error) {
      console.error('Failed to add item to cart:', error);
    }
  };

  return (
    <Card
      sx={{
        position: 'relative',
        width: '400px',
        height: '580px',
        background: '#EFEFEF',
        boxShadow: '5px 5px 25px rgba(0, 0, 0, 0.25)',
        borderRadius: '18px',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        '&:hover': {
          transform: 'translateY(-10px)',
          boxShadow: '10px 15px 35px rgba(0, 0, 0, 0.35)',
        },
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          width: '400px',
          height: '580px',
          left: '0px',
          top: '0px',
          fontFamily: 'Poppins',
          fontStyle: 'italic',
          fontWeight: 900,
          fontSize: '160px',
          lineHeight: '240px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          color: 'rgba(0, 0, 0, 0.1)',
          transform: 'rotate(90deg)',
        }}
      >
        NIKE
      </Box>

      {imageSrc && (
        <Box
          component="img"
          src={imageSrc}
          alt={title}
          sx={{
            position: 'absolute',
            width: '348.69px',
            height: '341.34px',
            right: '25px',
            top: '50px',
            filter: 'drop-shadow(0px 10px 20px rgba(0, 0, 0, 0.25))',
            transform: 'rotate(-25deg)',
            opacity: 0.9,
            objectFit: 'contain',
            transition: 'all 0.3s ease',
            '.MuiCard-root:hover &': {
              transform: 'rotate(-20deg) scale(1.05)',
            },
          }}
        />
      )}

      <CardContent
        sx={{
          position: 'absolute',
          bottom: '66px',
          left: '42.5px',
        }}
      >
        <Typography
          sx={{
            fontFamily: 'Work Sans',
            fontWeight: 700,
            fontSize: '40px',
            lineHeight: '47px',
            color: '#000000',
            mb: 1,
          }}
        >
          {title}
        </Typography>
        <Typography
          sx={{
            fontFamily: 'Work Sans',
            fontWeight: 400,
            fontSize: '20px',
            lineHeight: '23px',
            color: '#000000',
          }}
        >
          ${price}
        </Typography>
      </CardContent>

      <IconButton
        onClick={handleAddToCart}
        sx={{
          position: 'absolute',
          width: '55px',
          height: '52.9px',
          right: '30.83px',
          bottom: '93.89px',
          background: showSuccess ? '#4CAF50' : '#FFFFFF',
          borderRadius: '35px',
          transition: 'all 0.3s ease',
          '&:hover': {
            background: showSuccess ? '#45a049' : '#000000',
            transform: 'scale(1.1)',
            '& .MuiSvgIcon-root': {
              color: '#FFFFFF',
            },
          },
        }}
      >
        <NorthEastIcon sx={{ color: showSuccess ? '#FFFFFF' : '#000000' }} />
      </IconButton>

      {showSuccess && (
        <Box
          sx={{
            position: 'absolute',
            bottom: '160px',
            right: '20px',
            background: '#4CAF50',
            color: '#FFFFFF',
            padding: '8px 12px',
            borderRadius: '8px',
            fontSize: '14px',
            fontFamily: 'Montserrat',
            animation: 'fadeInOut 2s ease-in-out',
            '@keyframes fadeInOut': {
              '0%': { opacity: 0, transform: 'translateY(10px)' },
              '20%': { opacity: 1, transform: 'translateY(0)' },
              '80%': { opacity: 1, transform: 'translateY(0)' },
              '100%': { opacity: 0, transform: 'translateY(-10px)' },
            },
          }}
        >
          Added Successfully!
        </Box>
      )}
    </Card>
  );
};

export default PortraitCard;

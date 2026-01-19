'use client';

import React, { useState } from 'react';
import {
  Box,
  Typography,
  IconButton,
  CircularProgress,
  Alert,
} from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import PortraitCard from './PortraitCard';
import { useGetProductsQuery } from '@/services/productsApi';

const ProductShowcase = () => {
  const { data: products = [], isLoading, error } = useGetProductsQuery();
  const [index, setIndex] = useState(0);

  const displayProducts = products.slice(0, 3);

  if (isLoading) {
    return (
      <Box sx={{ py: 5, display: 'flex', justifyContent: 'center' }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ px: 2 }}>
        <Alert severity="error">Failed to load products.</Alert>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        width: '1400px',
        mx: 'auto',
        mt: 8,
        mb: 8,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          mb: 4,
          px: '50px',
        }}
      >
        <Typography
          sx={{
            fontFamily: 'Montserrat',
            fontWeight: 700,
            fontSize: '40px',
            lineHeight: '49px',
            color: '#000000',
          }}
        >
          Top sneakers
        </Typography>

        <Box sx={{ display: 'flex', gap: 2 }}>
          <IconButton
            sx={{
              width: '55px',
              height: '55px',
              background: '#F5F5F5',
              borderRadius: '35px',
              '&:hover': { background: '#e0e0e0' },
            }}
          >
            <ArrowBackIosIcon sx={{ color: '#000000', ml: 1 }} />
          </IconButton>
          <IconButton
            sx={{
              width: '55px',
              height: '55px',
              background: '#C6C6C6',
              borderRadius: '35px',
              '&:hover': { background: '#b0b0b0' },
            }}
          >
            <ArrowForwardIosIcon sx={{ color: '#000000' }} />
          </IconButton>
        </Box>
      </Box>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          gap: '25px',
        }}
      >
        {displayProducts.map((item) => (
          <PortraitCard
            key={item.id}
            id={item.id}
            imageSrc={item.image}
            title={item.name}
            price={item.price}
          />
        ))}
      </Box>
    </Box>
  );
};

export default ProductShowcase;

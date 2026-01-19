import React, { useState } from 'react';
import {
  Box,
  Typography,
  IconButton,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import PortraitCard from '../components/PortraitCard';
const ProductShowcase = () => {
  const theme = useTheme();
  const isSmDown = useMediaQuery(theme.breakpoints.down('sm'));
  const cardsToShow = isSmDown ? 1 : 3;

 const items = [
    {
      id: 1,
      imageSrc: '/images/f-portrait1.png',
      title: 'Air Max 97',
      price: '$28.99',
    },
    {
      id: 2,
      imageSrc: '/images/f-portrait2.png',
      title: 'React Presto',
     price: '$45.99',
     },
    {
      id: 3,
      imageSrc: '/images/f-portrait3.png',
      title: 'KD13 EP',
     price: '$22.99',
    },
    {
      id: 4,
      imageSrc: '/images/f-portrait4.png',
      title: 'KD56 LX',
      price: '$98.99',
    },
  ];

  const maxIndex = Math.max(0, items.length - cardsToShow);
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((i) => Math.max(0, i - 1));
  const next = () => setIndex((i) => Math.min(maxIndex, i + 1));

  return (
    <Box component="section" sx={{ mb: 8 }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          mb: 2,
          px: 2,
        }}
      >
        <Typography variant="h5" fontWeight="bold">
          Featured Products
        </Typography>
        <Box>
          <IconButton
            onClick={prev}
            disabled={index === 0}
            aria-label="previous"
          >
            <ArrowBackIosIcon />
          </IconButton>
          <IconButton
            onClick={next}
            disabled={index === maxIndex}
            aria-label="next"
          >
            <ArrowForwardIosIcon />
          </IconButton>
        </Box>
      </Box>

<Box
  sx={{
    px: 2,
    overflow: 'hidden',
  }}
>
  <Box
    sx={{
      overflowX: 'auto',
      scrollBehavior: 'smooth',
      WebkitOverflowScrolling: 'touch',
      '&::-webkit-scrollbar': {
        display: 'none',
      },
      scrollbarWidth: 'none', 
      msOverflowStyle: 'none', 
    }}
  >
    <Box
      sx={{
        display: 'flex',
        gap: 2,
        transition: 'transform 0.4s ease',
        transform: `translateX(-${(100 / cardsToShow) * index}%)`,
        '& > *': {
          flex: `0 0 ${100 / cardsToShow}%`,
        },
      }}
    >
      {items.map((item) => (
        <PortraitCard
          key={item.id}
          imageSrc={item.imageSrc}
          title={item.title}
          price={item.price}
        />
      ))}
    </Box>
  </Box>
</Box>

    </Box>
  );
};

export default ProductShowcase;

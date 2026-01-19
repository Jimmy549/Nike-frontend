import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';

const FeaturedCard = () => (
  <Card sx={{ maxWidth: 345, mb: 2 }}>
    <CardMedia
      component="img"
      loading="lazy"
      height="140"
      image="featured.jpg"
      alt="Featured"
    />
    <CardContent>
      <Typography variant="h5">Featured Item</Typography>
      <Typography variant="body2" color="text.secondary">
        Details about the featured item.
      </Typography>
    </CardContent>
  </Card>
);

export default FeaturedCard;

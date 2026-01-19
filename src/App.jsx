
import React, { Suspense, useState, lazy } from 'react';
import { Button, Typography, Container, Box, CircularProgress  } from '@mui/material';
import Navbar from './components/Navbar';
import Notification from './sections/Notification'
import FeaturedBg from './sections/FeaturedBg';
import FeaturedItems from './sections/FeaturedItems';
import MotivationalSection from './sections/Motivation';
const ProductShowcase = lazy(() => import('./sections/ProductShowcase'));
const CategorySection = lazy(() => import('./sections/Category'));
const DiscountSection = lazy(() => import('./sections/Discounts'));
const MoreProductsSection = lazy(() => import('./sections/MoreProducts'));
const Footer = lazy(() => import('./components/Footer'));


function App() {
  return (
    <Box sx={{ textAlign: 'center' }}>
      <Navbar />
      <Notification />
      <FeaturedBg />
      <FeaturedItems />

      {/* Lazy sections individually wrapped */}
      <Suspense fallback={<SectionLoader />}>
        <MotivationalSection />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <ProductShowcase />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <CategorySection />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <DiscountSection />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <MoreProductsSection />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <Footer />
      </Suspense>
    </Box>
  );
}

const SectionLoader = () => (
  <Box sx={{ py: 5, display: 'flex', justifyContent: 'center' }}>
    <CircularProgress />
  </Box>
);


export default App

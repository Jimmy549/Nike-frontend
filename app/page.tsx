'use client';

import React, { Suspense } from 'react';
import { Box, CircularProgress, Container } from '@mui/material';
import Navbar from '../components/Navbar';
import Notification from '../components/Notification';
import FeaturedBg from '../components/FeaturedBg';
import FeaturedItems from '../components/FeaturedItems';
import MotivationalSection from '../components/Motivation';
import ProductShowcase from '../components/ProductShowcase';
import CategorySection from '../components/Category';
import DiscountSection from '../components/Discounts';
import MoreProductsSection from '../components/MoreProducts';
import UkraineSection from '../components/UkraineSection';
import Footer from '../components/Footer';

const SectionLoader = () => (
  <Box sx={{ py: 5, display: 'flex', justifyContent: 'center' }}>
    <CircularProgress />
  </Box>
);

export default function Home() {
  return (
    <Box>
      <Navbar />
      <Container maxWidth={false} disableGutters sx={{ maxWidth: '1400px' }}>
        <Notification />
        <FeaturedBg />
        <FeaturedItems />

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
          <UkraineSection />
        </Suspense>
      </Container>

      <Suspense fallback={<SectionLoader />}>
        <Footer />
      </Suspense>
    </Box>
  );
}

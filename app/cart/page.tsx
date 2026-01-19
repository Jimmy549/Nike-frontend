'use client';

import React from 'react';
import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  Grid,
  IconButton,
  CircularProgress,
  Alert,
  TextField,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useGetCartQuery, useRemoveFromCartMutation, useUpdateCartItemMutation } from '@/services/cartApi';
import { useAppSelector } from '@/store/hooks';

export default function CartPage() {
  const { data: cartData, isLoading, error } = useGetCartQuery();
  const [removeFromCart] = useRemoveFromCartMutation();
  const [updateCartItem] = useUpdateCartItemMutation();

  const items = cartData?.items || [];
  const totalPrice = cartData?.total || items.reduce((total, item) => total + (item.price || 0) * item.quantity, 0);

  const handleRemove = async (productId: string) => {
    try {
      await removeFromCart(productId).unwrap();
    } catch (err) {
      console.error('Failed to remove item:', err);
    }
  };

  const handleQuantityChange = async (id: string, quantity: number) => {
    if (quantity < 1) return;
    try {
      await updateCartItem({ id, quantity }).unwrap();
    } catch (err) {
      console.error('Failed to update quantity:', err);
    }
  };

  if (isLoading) {
    return (
      <Box>
        <Navbar />
        <Box sx={{ py: 5, display: 'flex', justifyContent: 'center' }}>
          <CircularProgress />
        </Box>
        <Footer />
      </Box>
    );
  }

  return (
    <Box>
      <Navbar />

      <Box sx={{ py: 4, px: 2, minHeight: '60vh' }}>
        <Typography variant="h4" fontWeight="bold" sx={{ mb: 4 }}>
          Shopping Cart
        </Typography>

        {error && (
          <Alert severity="error" sx={{ mb: 4 }}>
            Failed to load cart. Please try again later.
          </Alert>
        )}

        {items.length === 0 ? (
          <Box sx={{ textAlign: 'center', py: 4 }}>
            <Typography variant="body1" sx={{ mb: 3 }}>
              Your cart is empty
            </Typography>
            <Link href="/">
              <Button variant="contained" color="primary">
                Continue Shopping
              </Button>
            </Link>
          </Box>
        ) : (
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 8 }}>
              {items.map((item) => (
                <Card key={item.id} sx={{ mb: 2 }}>
                  <CardContent>
                    <Grid container spacing={2} alignItems="center">
                      <Grid size={{ xs: 12, md: 3 }}>
                        {item.image && (
                          <Box
                            component="img"
                            src={item.image}
                            alt={item.name}
                            sx={{
                              width: '100%',
                              height: 150,
                              objectFit: 'contain',
                            }}
                          />
                        )}
                      </Grid>
                      <Grid size={{ xs: 12, md: 4 }}>
                        <Typography variant="h6" fontWeight="bold">
                          {item.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          ${item.price?.toFixed(2)}
                        </Typography>
                      </Grid>
                      <Grid size={{ xs: 12, md: 3 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <IconButton
                            size="small"
                            onClick={() =>
                              handleQuantityChange(item.id, item.quantity - 1)
                            }
                          >
                            <RemoveIcon fontSize="small" />
                          </IconButton>
                          <TextField
                            type="number"
                            size="small"
                            value={item.quantity}
                            onChange={(e) =>
                              handleQuantityChange(
                                item.id,
                                parseInt(e.target.value) || 1
                              )
                            }
                            inputProps={{ min: 1, style: { textAlign: 'center' } }}
                            sx={{ width: 60 }}
                          />
                          <IconButton
                            size="small"
                            onClick={() =>
                              handleQuantityChange(item.id, item.quantity + 1)
                            }
                          >
                            <AddIcon fontSize="small" />
                          </IconButton>
                        </Box>
                      </Grid>
                      <Grid size={{ xs: 12, md: 2 }}>
                        <Typography variant="body2" fontWeight="bold">
                          ${(item.price! * item.quantity).toFixed(2)}
                        </Typography>
                        <IconButton
                          size="small"
                          color="error"
                          onClick={() => handleRemove(item.id)}
                        >
                          <DeleteIcon fontSize="small" />
                        </IconButton>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              ))}
            </Grid>

            <Grid size={{ xs: 12, md: 4 }}>
              <Card sx={{ position: 'sticky', top: 20 }}>
                <CardContent>
                  <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
                    Order Summary
                  </Typography>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                    <Typography>Subtotal</Typography>
                    <Typography>${totalPrice.toFixed(2)}</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                    <Typography>Shipping</Typography>
                    <Typography>$10.00</Typography>
                  </Box>
                  <Typography variant="h6" fontWeight="bold" sx={{ mb: 3, textAlign: 'right' }}>
                    Total: ${(totalPrice + 10).toFixed(2)}
                  </Typography>
                  <Button variant="contained" fullWidth color="primary" sx={{ mb: 2 }}>
                    Checkout
                  </Button>
                  <Link href="/">
                    <Button variant="outlined" fullWidth>
                      Continue Shopping
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        )}
      </Box>

      <Footer />
    </Box>
  );
}

'use client';

import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from '@/theme';
import { store } from '@/store/store';
import { AuthProvider } from '@/contexts/AuthContext';

export function RootProvider({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <CssBaseline />
          {children}
        </AuthProvider>
      </ThemeProvider>
    </Provider>
  );
}

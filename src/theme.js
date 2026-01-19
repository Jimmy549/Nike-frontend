import { createTheme } from '@mui/material/styles';
import '@fontsource/montserrat';
import '@fontsource/poppins';

const theme = createTheme({
  palette: {
    background: {
      default: '#FFFFFF',
      paper: '#efefef',
    },
    text: {
      primary: '#000000',
      secondary: '#202727',
    },
    primary: {
      main: '#ff3939',
    },
  },
  typography: {
    fontFamily: 'Montserrat, Poppins, sans-serif',
    body1: {
      fontSize: '10x',
    },
    h5: {
      fontSize: '20px',
    },
  },
  shadows: [
   'none',
    '2px 4px 0px rgba(0,0,0,0.10)',
    '4px 8px 0px rgba(0,0,0,0.12)',  
    '6px 12px 0px rgba(0,0,0,0.15)',
    ...Array(22).fill('8px 16px 0px rgba(0,0,0,0.18)'),
  ],
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 25,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 10,
        },
      },
    },
  },
});

export default theme;


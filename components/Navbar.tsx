'use client';

import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  useTheme,
  useMediaQuery,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
  Badge,
  TextField,
  InputAdornment,
  Menu,
  MenuItem,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBagOutlined';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircleOutlined';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useGetCartQuery, useAddToCartMutation } from '@/services/cartApi';
import { useAuth } from '@/contexts/AuthContext';

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [clickedTab, setClickedTab] = useState('ALL');
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const { user, logout } = useAuth();
  const { data: cartData } = useGetCartQuery();
  const cartCount = cartData?.items?.length || 0;
  const router = useRouter();

  const tabs = ['WOMAN', 'MEN', 'ALL'];
  const mobileMenuItems = ['ALL', 'WOMAN', 'MEN', 'WORKOUT', 'RUN', 'FOOTBALL'];

  const handleAccountClick = (event: React.MouseEvent<HTMLElement>) => {
    if (user) {
      setAnchorEl(event.currentTarget);
    } else {
      router.push('/login');
    }
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    logout();
    setAnchorEl(null);
    router.push('/');
  };

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  const drawerContent = (
    <Box
      sx={{
        width: '100vw',
        height: '100vh',
        backgroundColor: '#FFFFFF',
        padding: 0,
      }}
      role="presentation"
    >
      {/* Mobile Header */}
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        p: 2,
        borderBottom: '1px solid #E0E0E0'
      }}>
        <IconButton onClick={toggleDrawer(false)}>
          <CloseIcon />
        </IconButton>
        <Typography sx={{
          fontFamily: 'Montserrat',
          fontSize: '16px',
          fontWeight: 400,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color: '#A0A0A0'
        }}>
          YOUR<span style={{ fontWeight: 700, color: '#000' }}>SNEAKER</span>
        </Typography>
        <Link href="/cart">
          <IconButton onClick={toggleDrawer(false)}>
            <Badge badgeContent={cartCount} color="error">
              <ShoppingBagIcon />
            </Badge>
          </IconButton>
        </Link>
      </Box>

      {/* Search Bar */}
      <Box sx={{ p: 2 }}>
        <TextField
          fullWidth
          placeholder="SEARCH"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: '#A0A0A0' }} />
              </InputAdornment>
            ),
            sx: {
              fontFamily: 'Montserrat',
              fontSize: '16px',
              color: '#A0A0A0',
              '& .MuiOutlinedInput-notchedOutline': {
                border: 'none',
                borderBottom: '1px solid #E0E0E0'
              }
            }
          }}
        />
      </Box>

      {/* Login */}
      <Box sx={{ px: 2, py: 1 }}>
        <Box 
          sx={{ display: 'flex', alignItems: 'center', gap: 2, cursor: 'pointer' }}
          onClick={() => {
            if (user) {
              logout();
            } else {
              router.push('/login');
            }
            setDrawerOpen(false);
          }}
        >
          <AccountCircleIcon sx={{ fontSize: '24px', color: '#A0A0A0' }} />
          <Typography sx={{
            fontFamily: 'Montserrat',
            fontSize: '16px',
            color: '#A0A0A0'
          }}>
            {user ? `${user.firstName} (Logout)` : 'LOGIN'}
          </Typography>
        </Box>
      </Box>

      <Divider sx={{ my: 2 }} />

      {/* Menu Items */}
      <List sx={{ px: 2 }}>
        {mobileMenuItems.map((item, index) => (
          <ListItem
            key={item}
            sx={{
              px: 0,
              py: 2,
              borderBottom: index === 0 ? '2px solid #000' : 'none'
            }}
          >
            <ListItemText
              primary={item}
              primaryTypographyProps={{
                fontFamily: 'Montserrat',
                fontSize: '18px',
                fontWeight: index === 0 ? 700 : 400,
                color: '#000000',
              }}
            />
          </ListItem>
        ))}
      </List>

      {/* Nike Logo at Bottom */}
      <Box sx={{
        position: 'absolute',
        bottom: 50,
        left: '50%',
        transform: 'translateX(-50%)'
      }}>
        <Box
          component="svg"
          width="100"
          height="40"
          viewBox="0 0 500 196"
        >
          <path d="M133.133 171.466C102.949 185.709 77.8604 192.719 57.7881 192.719C35.2293 192.719 19.1808 183.989 9.18359 166.621C2.94513 155.545 1.00308 141.313 3.65625 123.671C6.22421 106.595 12.9425 88.3464 23.8672 68.8477L24.9375 66.957C32.5093 54.1217 43.9155 38.0567 59.208 18.7334C56.116 26.5738 53.6492 34.7154 51.8447 43.0654L51.8428 43.0723L51.8418 43.0801C45.895 71.389 51.144 92.8976 68.4805 106.71L68.5 106.726C76.8497 113.242 88.1469 116.364 102.122 116.364C113.288 116.364 125.775 114.362 139.561 110.412L139.575 110.407L139.589 110.403L469.42 11.7549L133.133 171.466Z" stroke="black" strokeWidth="2" fill="none"/>
        </Box>
      </Box>
    </Box>
  );

  return (
    <>
      <AppBar
        position="static"
        elevation={0}
        sx={{
          backgroundColor: '#FFFFFF',
          color: '#000000',
          height: { xs: '60px', md: '79px' },
          width: '1400px',
          mx: 'auto',
        }}
      >
        <Toolbar sx={{ 
          justifyContent: 'space-between', 
          height: '100%', 
          px: { xs: 2, md: 0 }, 
          minHeight: { xs: '60px !important', md: '79px !important' },
          position: 'relative'
        }}>
          {isMobile ? (
            <>
              <IconButton edge="start" onClick={toggleDrawer(true)}>
                <MenuIcon />
              </IconButton>
              
              <Typography sx={{
                fontFamily: 'Montserrat',
                fontSize: '16px',
                fontWeight: 400,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#A0A0A0'
              }}>
                YOUR<span style={{ fontWeight: 700, color: '#000' }}>SNEAKER</span>
              </Typography>
              
              <Link href="/cart">
                <IconButton>
                  <Badge badgeContent={cartCount} color="error">
                    <ShoppingBagIcon />
                  </Badge>
                </IconButton>
              </Link>
            </>
          ) : (
            <>
              <Box sx={{ position: 'absolute', display: 'flex', gap: '50px', left: '50px', top: '27px' }}>
                {tabs.map((tab, index) => (
                  <Box key={tab} sx={{ position: 'relative' }}>
                    <Button
                      color="inherit"
                      onClick={() => setClickedTab(tab)}
                      sx={{
                        fontFamily: 'Montserrat',
                        fontWeight: clickedTab === tab ? 700 : 400,
                        fontSize: '20px',
                        lineHeight: '100%',
                        color: '#000000',
                        textTransform: 'none',
                        minWidth: 'auto',
                        p: 0,
                      }}
                    >
                      {tab}
                    </Button>
                    {clickedTab === tab && (
                      <Box
                        sx={{
                          position: 'absolute',
                          width: '45px',
                          height: '2px',
                          bottom: '-34px',
                          left: index === 0 ? '0' : index === 1 ? '139px' : '233px',
                          background: '#000000',
                        }}
                      />
                    )}
                  </Box>
                ))}
              </Box>

              <Box
                sx={{
                  position: 'absolute',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  fontFamily: 'Montserrat',
                  fontSize: '32px',
                  lineHeight: '100%',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                }}
              >
                <Typography
                  component="span"
                  sx={{
                    fontWeight: 400,
                    color: '#A0A0A0',
                  }}
                >
                  your
                </Typography>
                <Typography
                  component="span"
                  sx={{
                    fontWeight: 700,
                    color: '#000000',
                  }}
                >
                  SNEAKER
                </Typography>
              </Box>

              <Box sx={{ position: 'absolute', right: '50px', top: '24px', display: 'flex', gap: 2, alignItems: 'center' }}>
                <IconButton 
                  color="inherit" 
                  onClick={handleAccountClick}
                  sx={{ 
                    border: '2px solid #000000',
                    borderRadius: '4px',
                    width: '30px',
                    height: '30px',
                  }}
                >
                  <AccountCircleIcon sx={{ fontSize: '20px' }} />
                </IconButton>
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleMenuClose}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                >
                  <MenuItem onClick={handleMenuClose} disabled>
                    <Typography sx={{ fontFamily: 'Montserrat', fontSize: '14px' }}>
                      {user?.firstName} {user?.lastName}
                    </Typography>
                  </MenuItem>
                  <Divider />
                  <MenuItem onClick={handleLogout}>
                    <Typography sx={{ fontFamily: 'Montserrat', fontSize: '14px' }}>
                      Logout
                    </Typography>
                  </MenuItem>
                </Menu>
                <IconButton 
                  color="inherit"
                  sx={{ width: '25px', height: '25px' }}
                >
                  <SearchIcon sx={{ fontSize: '20px' }} />
                </IconButton>
                <Link href="/cart">
                  <IconButton 
                    color="inherit"
                    sx={{ width: '25px', height: '25px' }}
                  >
                    <Badge badgeContent={cartCount} color="error">
                      <ShoppingBagIcon sx={{ fontSize: '20px' }} />
                    </Badge>
                  </IconButton>
                </Link>
              </Box>
            </>
          )}
        </Toolbar>
      </AppBar>

      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        {drawerContent}
      </Drawer>
    </>
  );
};

export default Navbar;
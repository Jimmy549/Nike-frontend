import React, { useState } from 'react';
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
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBagOutlined';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircleOutlined';

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [clickedTab, setClickedTab] = useState('ALL');
  const [drawerOpen, setDrawerOpen] = useState(false);

  const tabs = ['WOMEN', 'MEN', 'ALL'];
  const iconItems = [
    { label: 'Profile', icon: <AccountCircleIcon /> },
    { label: 'Search', icon: <SearchIcon /> },
  ];

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const drawerContent = (
    <Box
      sx={{
        width: '100vw',
        height: '100vh',
        backgroundColor: theme.palette.background.default,
        padding: 2,
      }}
      role="presentation"
    >
    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
      <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
        <IconButton onClick={toggleDrawer(false)}>
          <CloseIcon />
        </IconButton>
      </Box>

      {/* Brand */}
      <Box sx={{ mb: 3, textAlign: 'center' }}>
        <Typography variant="h5">
          YOUR <strong>SNEAKER</strong>
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <IconButton onClick={toggleDrawer(false)}>
           <ShoppingBagIcon /> 
        </IconButton>
      </Box>
      </Box>
      <Divider sx={{ mb: 2 }} />
    <List>
        {iconItems.map(({ label }) => (
          <ListItem
            button
            key={label}
            onClick={() => setDrawerOpen(false)}
          >
            <ListItemText primary={label} />
          </ListItem>
        ))}
      </List>
      {/* Tabs */}
      <List>
        {tabs.map((tab) => (
          <ListItem
            button
            key={tab}
            onClick={() => {
              setClickedTab(tab);
              setDrawerOpen(false);
            }}
          >
            <ListItemText
              primary={tab}
              primaryTypographyProps={{
                fontWeight: clickedTab === tab ? 'bold' : 'normal',
              }}
            />
          </ListItem>
        ))}
      </List>
      <Divider sx={{ my: 2 }} />
  
    </Box>
  );

  return (
    <>
      <AppBar
        position="static"
        elevation={0}
        sx={{
          backgroundColor: theme.palette.background.default,
          color: theme.palette.text.primary,
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          {isMobile ? (
            <IconButton edge="start" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
          ) : (
            <Box>
              {tabs.map((tab) => (
                <Button
                  key={tab}
                  color="inherit"
                  onClick={() => setClickedTab(tab)}
                  sx={{
                    fontWeight: clickedTab === tab ? 'bold' : 'normal',
                    borderBottom:
                      clickedTab === tab
                        ? `2px solid ${theme.palette.text.primary}`
                        : 'none',
                    borderRadius: 0,
                  }}
                >
                  {tab}
                </Button>
              ))}
            </Box>
          )}

          <Box>
            <Typography variant="h6" component="span" sx={{ fontWeight: 'light' }}>
              YOUR
            </Typography>
            <Typography variant="h6" component="span" sx={{ fontWeight: 'bold' }}>
              SNEAKER
            </Typography>
          </Box>

          
            <Box sx={{ display: 'flex', gap: 1 }}>
                {!isMobile && (
                    <Box>
              <IconButton color="inherit">
                <AccountCircleIcon />
              </IconButton>
              <IconButton color="inherit">
                <SearchIcon />
              </IconButton>
              </Box>
                )}
            <IconButton color="inherit">
                <ShoppingBagIcon />
              </IconButton>
            </Box>
          
       
              
        </Toolbar>
      </AppBar>

      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        {drawerContent}
      </Drawer>
    </>
  );
};

export default Navbar;

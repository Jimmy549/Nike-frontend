import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Grid,
  IconButton,
  Box,
  useTheme
} from '@mui/material';
import ShareIcon from '@mui/icons-material/NorthEastRounded';

const LandscapeCard = ({ imageSrc, title, description }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: 'relative',
        transform: 'translateY(-40%)',
        zIndex: 1,
      }}
    >
 <Card
   sx={{
     display: 'flex',
     mb: 2,
     overflow: 'visible',
     boxShadow: '5px 5px 25px 0px #00000040',
     width: '100%', 
     minWidth: {        
       xs: 250,
       md: 350
     },
   }}
 >
 
        <Grid container sx={{ width: '100%' }}>
          <Grid size={{ xs: 6 }}>
            <CardContent sx={{ textAlign: 'left' }}>
              <Typography
                variant="h6"
                 fontWeight="bold"
                sx={{ fontStyle: 'italic', color: 'red' }}
                gutterBottom
              >
                {title}
              </Typography>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                {description}
              </Typography>
              <IconButton
                aria-label="share"
                sx={{ backgroundColor: '#ffffff' }}
              >
                <ShareIcon />
              </IconButton>
            </CardContent>
          </Grid>

          <Grid size={{ xs: 6 }} sx={{ position: 'relative' }}>
            <Box
              component="img"
              src={imageSrc}
              alt={title}
              loading="lazy"
              sx={{
                position: 'absolute',
                top: { xs: '0%' },
                right: { xs: '-5%' },
                width: { xs: 180, md: 220 },
                height: 'auto',
                objectFit: 'cover',
                transform: 'rotate(330deg)',
                zIndex: 1,
              }}
            />
          </Grid>
        </Grid>
      </Card>
    </Box>
  );
};

export default LandscapeCard;

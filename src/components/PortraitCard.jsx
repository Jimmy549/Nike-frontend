import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  IconButton,
  Box
} from '@mui/material';
import ShareIcon from '@mui/icons-material/NorthEastRounded';

const PortraitCard = ({ imageSrc, title, price }) => (
 <Card
  sx={{
    maxWidth: 250,
    mb: 2,
    ml: 5,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    boxShadow: '5px 5px 25px 0px #00000040',
    height: 380, 
  }}
>
  <Box
    sx={{
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%) rotate(90deg)',
      fontFamily: 'Poppins',
      fontWeight: 900,
      fontStyle: 'italic',
      fontSize: '120px',
      lineHeight: 1,
      color: 'rgba(0, 0, 0, 0.1)',
      zIndex: 0,
      width: '100%',
      textAlign: 'center',
      userSelect: 'none',
      whiteSpace: 'nowrap',
    }}
  >
    NIKE
  </Box>

  <Box
    component="img"
    src={imageSrc}
    alt={title}
    loading="lazy"
    sx={{
      width: 180,
      height: 'auto',
      objectFit: 'contain',
      transform: 'rotate(330deg)',
      alignSelf: 'center',
      mt: 10,
    }}
  />

  <CardContent sx={{ px: 2, pb: 2, mt: 'auto' }}>
    <Typography variant="h6" sx={{ textAlign: 'left', fontWeight: '900' }}>
      {title}
    </Typography>
    <Typography
      variant="body2"
      color="text.secondary"
      sx={{ textAlign: 'left', mb: 1 }}
    >
      {price}
    </Typography>
    <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
      <IconButton aria-label="share" sx={{ backgroundColor: '#fff' }}>
        <ShareIcon />
      </IconButton>
    </Box>
  </CardContent>
</Card>

);

export default PortraitCard;

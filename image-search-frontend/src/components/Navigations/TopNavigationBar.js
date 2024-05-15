import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const TopNavBar = () => {
  return (
    <AppBar position="static" sx={{ bgcolor: '#0F0F0F' }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
          My Image Search
        </Typography>
        <IconButton color="inherit">
          <FavoriteBorderIcon />
          <Typography variant="body1" component="span" sx={{ ml: 1 }}>
            Lightboxes
          </Typography>
        </IconButton>
        <IconButton color="inherit">
          <ShoppingCartIcon />
          <Typography variant="body1" component="span" sx={{ ml: 1 }}>
            Cart
          </Typography>
        </IconButton>
        <IconButton color="inherit">
          <Typography variant="body1" component="span" sx={{ ml: 1 }}>
            Sign In
          </Typography>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default TopNavBar;

import React, { useState } from "react";
import { Typography, IconButton, Box, Paper } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCartOutlined";
import DownloadIcon from "@mui/icons-material/FileDownloadOutlined";
import styles from "../../assets/css/image.module.css";
import ControlPointOutlinedIcon from "@mui/icons-material/ControlPointOutlined";
import PermMediaOutlinedIcon from "@mui/icons-material/PermMediaOutlined";
import { SnackbarProvider, VariantType, useSnackbar } from "notistack";
function ImageThumbnail(props) {
  const { image = {}, key } = props;
  const { enqueueSnackbar } = useSnackbar();
  const [downloadLoading, setDownloadLoading] = useState(false);
  const trimText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    return text;
  };

  const downloadImage = async (title, imageUrl) => {
    if (imageUrl) {
      setDownloadLoading(true);
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(new Blob([blob]));
      const link = document.createElement("a");
      link.href = blobUrl;
      link.download = title + ".jpg";
      document.body.appendChild(link);
      link.click();
      setDownloadLoading(false);
    }
  };

  const addToCart = (item) => {
    let cart = localStorage.getItem("cart");
    if (cart) {
      cart = JSON.parse(cart);
      const itemInCart = cart.find((cartItem) => cartItem.id === item.id);
      if (itemInCart) {
        console.log("exists");
        cart = cart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        cart = [...cart, { ...item, quantity: 1 }];
      }
    } else {
      cart = [{ ...item, quantity: 1 }];
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    enqueueSnackbar("Item added to the cart successfully", {
      variant: "success",
    });
  };

  return (
    <Box
      key={key}
      title={image.alt}
      className={styles.ImageCard}
      component={Paper}
      elevation={3}
    >
      <img src={image.src.tiny} alt={image.alt} className={styles.Image} />
      <Box className={styles.OverlayBox}>
        <Typography variant="subtitle2">{trimText(image.alt, 40)}</Typography>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          className={styles.BottomSection}
        >
          <Typography variant="caption">
            Photographer: {trimText(image.photographer, 8)}
          </Typography>
          <Box>
            <IconButton
              color="inherit"
              className={styles.IconButton}
              onClick={() => addToCart(image)}
            >
              <ShoppingCartIcon />
            </IconButton>
            <IconButton
              color="inherit"
              className={styles.IconButton}
              onClick={() => downloadImage(image.alt, image.src.original)}
              disabled={downloadLoading}
            >
              <DownloadIcon />
            </IconButton>
            <IconButton color="inherit" className={styles.IconButton}>
              <ControlPointOutlinedIcon />
            </IconButton>
            <IconButton color="inherit" className={styles.IconButton}>
              <PermMediaOutlinedIcon />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default ImageThumbnail;

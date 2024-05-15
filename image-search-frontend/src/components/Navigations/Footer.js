import React from "react";
import { Box, Typography, Container } from "@mui/material";
import styles from "../../assets/css/footer.module.css";

const Footer = () => {
  return (
    <Box component="footer" className={styles.footer}>
      <Box className={styles.footerTop}>
        <Typography variant="body1" className={styles.footerText}>
          366,681,625 stock photos, 360° panoramic images, vectors and videos
        </Typography>
      </Box>
      <Box className={styles.footerBottom}>
        <Container maxWidth="md">
          <Typography variant="h6" className={styles.footerTitle}>
            My Image Search
          </Typography>
          <Typography variant="body2" className={styles.footerSubtitle}>
            Changing the world one image at a time.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;

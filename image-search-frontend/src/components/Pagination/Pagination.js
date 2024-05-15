import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  InputBase,
  Button,
  Tab,
  Grid,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Box,
  Tooltip,
  Paper,TextField
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

const styles = {
  image: {
    display: "block",
    width: "auto",
    height: "auto",
  },
  paginationContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "5px",
    // background:'red'
  },
  paginationText: {
    marginRight: "8px",
    fontSize:'10px'
  },
  goToPageText: {
    marginLeft: "16px",
    marginRight: "8px",
  },
  textField: {
    width: "50px",
    marginRight: "8px",
  },
};

export default function TitleSection(props) {
  const {
    page,
    setPage,
    totalPages,
    handlePreviousPage,
    handleNextPage,
    handleGoToPage,
  } = props;

  return (
    <Box style={styles.paginationContainer}>
      <Typography style={styles.paginationText}>
        Page {page} of {totalPages}
      </Typography>
      <IconButton onClick={handlePreviousPage} disabled={page === 1}>
        <ArrowBackIcon />
      </IconButton>
      <IconButton onClick={handleNextPage} disabled={page === totalPages}>
        <ArrowForwardIcon />
      </IconButton>
      <Typography style={styles.goToPageText}>Go to page</Typography>
      <TextField
        type="number"
        variant="outlined"
        size="small"
        style={styles.textField}
        onBlur={handleGoToPage}
      />
      <IconButton onClick={() => handleGoToPage({ target: { value: page } })}>
        <ArrowRightIcon />
      </IconButton>
    </Box>
  );
}

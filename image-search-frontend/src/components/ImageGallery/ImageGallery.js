import React, { useState, useEffect } from "react";
import { Typography, Grid } from "@mui/material";
import ImageThumbnail from "./ImageThumbnail";
import Pagination from "../Pagination/Pagination";
const ImageGallery = (props) => {
  const {
    images,
    loading,
    totalImages = 0,
    pageSize = 0,
    pageNumber,
    setPageNumber,
    searchQuery,
    handleSearch = { handleSearch },
  } = props;
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    if (totalImages) {
      let totalPageCount = Math.floor(totalImages / pageSize);
      setTotalPages(totalPageCount);
    }
  }, [totalImages]);

  const handlePreviousPage = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
      handleSearch(pageNumber - 1);
    }
  };

  const handleNextPage = () => {
    if (pageNumber < totalPages) {
      setPageNumber(pageNumber + 1);
      handleSearch(pageNumber + 1);
    }
  };

  const handleGoToPage = (event) => {
    const newPage = Number(event.target.value);
    if (newPage > 0 && newPage <= totalPages) {
      setPageNumber(newPage);
      handleSearch(newPage);
    }
  };
  return (
    <Grid container spacing={2}>
      {searchQuery && !loading && (
        <Grid
          item
          xs={12}
          container
          justifyContent="space-between"
          alignItems="center"
          marginBottom={"10px"}
        >
          <Typography variant="h6" gutterBottom>
            {searchQuery} Stock Photos and Images<small>({totalImages})</small>
          </Typography>
          <Pagination
            page={pageNumber}
            setPage={setPageNumber}
            totalPages={totalPages}
            handlePreviousPage={handlePreviousPage}
            handleNextPage={handleNextPage}
            handleGoToPage={handleGoToPage}
          />
        </Grid>
      )}

      <Grid item xs={12} container spacing={2}>
        {loading ? (
          <div style={{marginLeft:16}}>Loading....</div>
        ) : images?.length > 0 ? (
          images.map((image, index) => (
            <Grid
              item
              xs={3}
              justifyContent="space-between"
              alignItems="center"
            >
              <ImageThumbnail key={index} image={image} />
            </Grid>
          ))
        ) : (
          <div style={{marginLeft:16}}>No Result Found!</div>
        )}
      </Grid>
      {searchQuery && !loading && (
        <Grid
          xs={12}
          container
          justifyContent="space-between"
          alignItems="center"
          borderTop={"1px solid"}
          marginBottom={"50px"}
        >
          <Typography variant="h6" gutterBottom>
            Search Results for {searchQuery} stock Photos and Images (
            {totalImages})
          </Typography>
          <Pagination
            page={pageNumber}
            setPage={setPageNumber}
            totalPages={totalPages}
            handlePreviousPage={handlePreviousPage}
            handleNextPage={handleNextPage}
            handleGoToPage={handleGoToPage}
          />
        </Grid>
      )}
    </Grid>
  );
};

export default ImageGallery;

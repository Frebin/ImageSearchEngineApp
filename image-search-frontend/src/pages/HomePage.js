import React, { useState, useEffect } from "react";
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
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import SearchSection from "../components/SearchSection/SearchSection";
import TabsComponent from "../components/Tabs/Tabs";
import ImageGallery from "../components/ImageGallery/ImageGallery";
import { searchImages } from "../store/actionCreators/Image.action.creators";


const App = () => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [searchQuery, setSearchQuery] = useState("");

  const { images, total_results, loading } = useSelector((state) => ({
    images: state.imagesReducer.images,
    total_results: state.imagesReducer.total_results,
    loading: state.imagesReducer.loading,
  }));

  const handleSearch = (newPageNumber) => {
    const req_obj = {
      pageNumber: newPageNumber ? newPageNumber : pageNumber,
      pageSize: pageSize,
      query: query,
    };
    if (searchQuery !== query) {
      setSearchQuery(query);
      setPageNumber(1);
    }
    dispatch(searchImages(req_obj));
  };

  return (
    <Box
      sx={{
        textAlign: "center",
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} sx={{ textAlign: "center" }}>
          <SearchSection
            query={query}
            setQuery={setQuery}
            handleSearch={handleSearch}
            loading={loading}
          />
        </Grid>
        <Grid item xs={12}>
          <TabsComponent />
        </Grid>
        <Grid item xs={12}>
          <ImageGallery
            images={images}
            loading={loading}
            totalImages={total_results}
            pageSize={pageSize}
            pageNumber={pageNumber}
            setPageNumber={setPageNumber}
            searchQuery={searchQuery}
            handleSearch={handleSearch}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default App;

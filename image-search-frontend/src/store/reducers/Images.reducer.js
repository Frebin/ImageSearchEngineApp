import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  total_results: 0,
  images: [],
  loading: false,
  error: "",
};

const ImagesSlice = createSlice({
  name: "ImagesReducer",
  initialState,
  reducers: {
    ImagesSearchStart: (state) => {
      return {
        ...state,
        loading: true,
        error: "",
      };
    },
    ImagesSearchSuccess: (state, action) => {
      return {
        ...state,
        images: action.payload.images,
        total_results: action.payload.total_results,
        loading: false,
        error: "",
      };
    },
    ImagesSearchFailure: (state, action) => {
      return {
        ...state,
        images: [],
        total_results: 0,
        loading: false,
        error: action.payload.response?.data?.message,
      };
    },
  },
});

export const { ImagesSearchStart, ImagesSearchSuccess, ImagesSearchFailure } =
  ImagesSlice.actions;
export default ImagesSlice.reducer;

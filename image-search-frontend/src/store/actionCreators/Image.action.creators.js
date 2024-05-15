import { imageSearchUrl } from "../../constants/Routes";
import {
  ImagesSearchStart,
  ImagesSearchSuccess,
  ImagesSearchFailure,
} from "../reducers/Images.reducer";
import { _get } from '../../configs/Api.config'


export const searchImages = (params) => async (dispatch) => {
  try {
    dispatch(ImagesSearchStart());
    const { pageNumber, pageSize, query } = params;
    const fetchUrl = `${imageSearchUrl}?page=${pageNumber}&per_page=${pageSize}&query=${query}`;
    const response = await _get(fetchUrl, params);
    dispatch(ImagesSearchSuccess(response.data));
  } catch (error) {
    // console.log("error",error)
    dispatch(ImagesSearchFailure(error));
  }
};

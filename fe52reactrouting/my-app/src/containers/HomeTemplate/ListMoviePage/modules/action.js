import {
  LIST_MOVIE_REQUEST,
  LIST_MOVIE_FAILED,
  LIST_MOVIE_SUCCESS,
} from "./constant";

import Axios from "axios";

export const actListMovieApi = () => {
  return (dispatch) => {
    dispatch(actListMovieRequest());
    Axios({
      url:
        "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP11",
      method: "GET",
    })
      .then((result) => {
        dispatch(actListMovieSuccess(result.data));
      })
      .catch((err) => {
        actListMovieFailed(err);
      });
  };
};

export const actListMovieRequest = () => {
  return {
    type: LIST_MOVIE_REQUEST,
  };
};

export const actListMovieSuccess = (data) => {
  return {
    type: LIST_MOVIE_SUCCESS,
    payload: data,
  };
};

export const actListMovieFailed = (err) => {
  return {
    type: LIST_MOVIE_FAILED,
    payload: err,
  };
};

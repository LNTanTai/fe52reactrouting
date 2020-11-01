import {
  AUTH_PAGE_REQUEST,
  AUTH_PAGE_SUCCESS,
  AUTH_PAGE_FAILED,
} from "./constant";

import Axios from "axios";

export const actLoginApi = () => {
  return (dispatch) => {
    dispatch(actLoginRequest());
    Axios({
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap`,
      method: "POST",
    })
      .then((result) => {
        dispatch(actLoginSuccess(result.data));
      })
      .catch((err) => {
        actLoginFailed(err);
      });
  };
};

export const actLoginRequest = () => {
  return {
    type: AUTH_PAGE_REQUEST,
  };
};

export const actLoginSuccess = (data) => {
  return {
    type: AUTH_PAGE_SUCCESS,
    payload: data,
  };
};

export const actLoginFailed = (err) => {
  return {
    type: AUTH_PAGE_FAILED,
    payload: err,
  };
};

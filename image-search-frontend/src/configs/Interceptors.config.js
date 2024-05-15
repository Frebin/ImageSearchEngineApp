import axios, { AxiosError, AxiosInstance, AxiosResponse } from "axios";

import { _post } from "./Api.config";

const onRequest = (config) => {
  const token = localStorage.getItem("token");
  config.headers["Authorization"] = "Bearer " + token;
  config.headers["Domain-Url"] = window.location.host;

  return config;
};

const onRequestError = (error) => {
  return Promise.reject(error);
};

const onResponse = (response) => {
  return response;
};

const onResponseError = async (error) => {
  return Promise.reject(error);
};

export const setupInterceptors = (axiosInstance) => {
  axiosInstance.interceptors.request.use(onRequest, onRequestError);
  axiosInstance.interceptors.response.use(onResponse, onResponseError);
  return axiosInstance;
};

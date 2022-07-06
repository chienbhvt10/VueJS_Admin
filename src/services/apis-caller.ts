import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

const axiosClient = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  headers: {
    "content-text": "application/json",
  },
});

const configRequest = async (config: AxiosRequestConfig) => {
  return config;
};

const responseResolve = (response: AxiosResponse) => {
  return response.data;
};

const responseReject = (error: AxiosError) => {
  return Promise.reject(error);
};
axiosClient.interceptors.request.use(configRequest);
axiosClient.interceptors.response.use(responseResolve, responseReject);

export default axiosClient;

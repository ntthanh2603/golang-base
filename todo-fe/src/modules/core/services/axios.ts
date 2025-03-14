import axios, { AxiosError } from "axios";

export type ErrorResponse = {
  message: string;
  code: number;
  debug: string;
  status: string;
};

export function HandleError(
  err: Error | AxiosError<ErrorResponse>
): ErrorResponse {
  if (axios.isAxiosError(err)) {
    return err.response?.data;
  } else {
    const error: ErrorResponse = {
      message: "Unknown Error",
      code: 500,
      debug: err.message,
      status: "error",
    };

    return error;
  }
}

const interceptor = axios.create({
  baseURL: "https://devops-gateway.showcase.200lab.io",
  headers: {
    "Content-Type": "application/json",
  },
});

interceptor.interceptors.request.use((config) => {
  // config.url = "https://devops-gateway.showcase.200lab.io";
  config.headers.Authorization = `Bearer ${localStorage.getItem(
    "access_token"
  )}`;
  return config;
});

export default interceptor;

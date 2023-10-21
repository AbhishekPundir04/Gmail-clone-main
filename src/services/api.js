import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URI,

  headers: {
    "x-api-key": process.env.REACT_APP_API_KEY,
  },
});

axiosInstance.interceptors.request.use(
  function configuration(config) {
    const token =
      localStorage.getItem("ACCESS_TOKEN") ||
      localStorage.getItem("RESET_TOKEN");
    if (token) config.headers.authorization = `Bearer ${token}`;
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  function (result) {
    return result;
  },
  function (error) {
    if (error.response && error.response.data.status_code === 401) {
      localStorage.clear();
    }
    return Promise.reject(error);
  }
);

export const GET = async (url, params) => {
  try {
    let result = await axiosInstance.get(url, { params: params });
    return result;
  } catch (error) {
    return error?.response;
  }
};

export const DELETE = async (url, params, data) => {
  try {
    let result = await axiosInstance.delete(url, { params, data });
    return result;
  } catch (error) {
    return error?.response;
  }
};

export const POST = async (url, body, options) => {
  try {
    let result = await axiosInstance.post(url, body, options);
    return result;
  } catch (error) {
    return error?.response;
  }
};

export const PUT = async (url, body, options) => {
  try {
    let result = await axiosInstance.put(url, body, options);
    return result;
  } catch (error) {
    return error?.response;
  }
};

export const PATCH = async (url, body, options) => {
  try {
    let result = await axiosInstance.patch(url, body, options);
    return result;
  } catch (error) {
    return error?.response;
  }
};

export { axiosInstance };

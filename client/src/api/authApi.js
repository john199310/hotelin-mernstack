import axios from "axios";
import { notification } from "antd";

const openNotificationWithIcon = (type, title, message) => {
  notification[type]({
    message: title,
    description: message,
  });
};

const baseURL = process.env.NODE_ENV ==='development'? "http://localhost:5000": ""

export const ApiFunc = axios.create({ baseURL: baseURL });

ApiFunc.interceptors.request.use((req) => {
  if (localStorage.getItem("hotelIntoken")) {
    req.headers.Authorization = `Bearer ${JSON.parse(
      localStorage.getItem("hotelIntoken")
    )}`;
  }
  return req;
});

// User Api
export const userRegister = async (body) => {
  try {
    const { data } = await ApiFunc.post(`/hotelin/signup`, body);
    openNotificationWithIcon("success", "Signup Successful", "");
    return data;
  } catch (error) {
    if (error.response) {
      openNotificationWithIcon(
        "error",
        "Signup Failed",
        error.response.data.message
      );
    }
  }
};

export const userLogin = async (body) => {
  try {
    const { data } = await ApiFunc.post(`/hotelin/signin`, body);
    openNotificationWithIcon("success", "Login Successful", "");
    return data;
  } catch (error) {
    if (error.response) {
      openNotificationWithIcon(
        "error",
        "Login Failed",
        error.response.data.message
      );
    }
  }
};
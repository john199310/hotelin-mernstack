import {
  LOGIN_SUCCESS,
  SIGNUP_SUCCESS,
  LOGOUT_SUCCESS,
  VERIFY_LOCAL_STORAGE,
  UPDATE_BOOKING_LOCATION
} from "./actionConstant";

import { userRegister, userLogin } from "../../api/authApi";

export const receiveLogin = (user, history, inBooking) => async (dispatch) => {
  const result = await userLogin(user);
  try {
    dispatch({
      type: LOGIN_SUCCESS,
      user: result.result,
      token: result.token,
    });
    if(inBooking){
      history.push(`/booking-confirmation/${result.result._id}`);
    } else{
      history.push("/");
    }
  } catch (error) {
    console.log(error);
  }
};

export const receiveSignUp = (user, history, inBooking) => async (dispatch) => {
  const result = await userRegister(user);
  try {
    dispatch({
      type: SIGNUP_SUCCESS,
      user: result.result,
      token: result.token,
    });
    if(inBooking){
      history.push(`/booking-confirmation/${result.result._id}`);
    } else{
      history.push("/");
    }
  } catch (error) {
    console.log(error);
  }
};

export const receiveLogout = () => {
  return {
    type: LOGOUT_SUCCESS,
  };
};

export const verifyStorage = () => {
  return {
    type: VERIFY_LOCAL_STORAGE,
  };
};

export const setBookingLocation = () => {
  return {
    type: UPDATE_BOOKING_LOCATION
  }
}
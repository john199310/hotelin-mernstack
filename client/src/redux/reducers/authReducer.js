import {
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  SIGNUP_SUCCESS,
  UPDATE_BOOKING_LOCATION,
  VERIFY_LOCAL_STORAGE,
} from "../actions/actionConstant";

import { saveState, loadState } from "../../helpers/localStorage";

const initialState = {
  isAuthenticated: loadState("hotelInLoggedIn") || false,
  token: "",
  user: {},
  inBooking: false,
};

// Reducers
const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      saveState("hotelInLoggedIn", true);
      saveState("hotelInUser", action.user);
      saveState("hotelIntoken", action.token);
      return {
        ...state,
        isAuthenticated: true,
        user: action.user,
        token: action.token,
      };

    case SIGNUP_SUCCESS:
      saveState("hotelInLoggedIn", true);
      saveState("hotelInUser", action.user);
      saveState("hotelIntoken", action.token);
      return {
        ...state,
        isAuthenticated: true,
        user: action.user,
        token: action.token,
      };
    case LOGOUT_SUCCESS:
      saveState("hotelInLoggedIn", false);
      saveState("hotelInUser", {});
      saveState("hotelIntoken", "");
      return {
        ...state,
        isAuthenticated: false,
        user: {},
        token: "",
      };

    case UPDATE_BOOKING_LOCATION:
      return {
        ...state,
        inBooking: true,
      };

    case VERIFY_LOCAL_STORAGE:
      const auth = loadState("hotelInLoggedIn");
      const user = loadState("hotelInUser");
      const token = loadState("hotelIntoken");
      return {
        ...state,
        isAuthenticated: auth,
        user: user,
        token: token,
      };

    default:
      return state;
  }
};

export default AuthReducer;

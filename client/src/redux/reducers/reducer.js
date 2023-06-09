import {
  GetAllHotel,
  GetSingleHotel,
  GetCityHotel,
  FilterHotel,
  SearchHotel,
  BookHotel,
  BookingDetails,
  CancelBooking,
} from "../actions/actionConstant";

import { loadState } from "../../helpers/localStorage";

const initialState = {
  allHotels: [],
  popularHotels: [],
  singleHotel: {},
  citiesHotel: [],
  filterData: [],
  searchResults: [],
  bookingDetails: {},
  bookings: [],
};

// Reducers
const ProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case GetAllHotel:
      let val = [];
      while (val.length < 6) {
        let rand = Math.floor(Math.random() * (0, 29) + 1);
        if (!val.includes(rand)) {
          val.push(rand);
        }
      }
      let popHotel = [];
      for (let i = 0; i < val.length; i++) {
        popHotel.push(action.payload[val[i]]);
      }
      return {
        ...state,
        allHotels: action.payload || [],
        popularHotels: popHotel,
      };
    case GetSingleHotel:
      return {
        ...state,
        singleHotel: action.payload || {},
      };
    case GetCityHotel:
      return {
        ...state,
        citiesHotel: action.payload,
        filterData: action.payload,
      };
    case FilterHotel:
      let data = action.payload;
      let cityData = [...state.filterData];
      if (data == "ah") {
        return {
          ...state,
          filterData: state.citiesHotel,
        };
      } else if (data == "plh") {
        console.log("plh");
        let sortData = cityData.sort((a, b) => a.price - b.price);
        return {
          ...state,
          filterData: sortData,
        };
      } else if (data == "phl") {
        let sortData = cityData.sort((a, b) => b.price - a.price);
        console.log(sortData == state.filterData);
        return {
          ...state,
          filterData: sortData,
        };
      } else if (data == "rlh") {
        let sortData = cityData.sort((a, b) => a.rating - b.rating);
        return {
          ...state,
          filterData: sortData,
        };
      } else if (data == "rhl") {
        let sortData = cityData.sort((a, b) => b.rating - a.rating);
        return {
          ...state,
          filterData: sortData,
        };
      }
    case SearchHotel:
      return {
        ...state,
        searchHotel: action.payload,
      };
    case BookHotel:
      // loadState('hotelIn booking details')
      if (loadState("hotelIn booking details")) {
        return {
          ...state,
          bookingDetails: loadState("hotelIn booking details"),
        };
      }
      return {
        ...state,
        bookingDetails: action.payload,
      };
    case BookingDetails:
      return {
        ...state,
        bookings: action.payload,
      };
    case CancelBooking:
      const allBookings = [...state.bookings];
      const postIndex = allBookings.findIndex(
        (post) => post._id == action.payload._id
      );
      allBookings[postIndex] = {
        ...allBookings[postIndex],
        status: action.payload.status,
      };
      return {
        ...state,
        bookings: allBookings,
      };
    default:
      return state;
  }
};

export default ProductReducer;

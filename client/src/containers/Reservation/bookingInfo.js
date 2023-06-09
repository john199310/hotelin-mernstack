import React from "react";
import {
  CardWrapper,
  CardHeading,
  HotelDetails,
  HotelImage,
  HotelDetailsWrapper,
  HotelName,
  HotelCity,
  HotelRating,
  BookingDetails,
  BookingWrapper,
  BookingHead,
  BookingDate,
} from "./style";
import { StarWrapper } from "../../components/UI/Pricecard/cardStyle";
import { bookingdata } from "./fakeData";
import { BsHouseDoor, BsGeo } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import moment from 'moment'

export default function BookingInfo({hotelInfo}) {
  console.log(hotelInfo)
  return (
    <CardWrapper>
      <CardHeading>Hotel Info</CardHeading>
      <HotelDetails>
        <HotelImage src={hotelInfo.image} alt={hotelInfo.name} />
        <HotelDetailsWrapper>
          <HotelName>
            <BsHouseDoor /> {hotelInfo.name}
          </HotelName>
          <HotelCity>
            <BsGeo /> {hotelInfo.city}
          </HotelCity>
          <HotelRating>
            {hotelInfo.rating}
            <StarWrapper>
              <AiFillStar />
            </StarWrapper>
          </HotelRating>
        </HotelDetailsWrapper>
      </HotelDetails>
      <BookingDetails>
        <BookingWrapper bor={1}>
          <BookingHead>Check In</BookingHead>
          <BookingDate>{moment(hotelInfo.checkIn).format('Do MMM YY')}</BookingDate>
          {/* <BookingHead>02:00 PM</BookingHead> */}
        </BookingWrapper>
        <BookingWrapper bor={1}>
          <BookingHead>Check Out</BookingHead>
          <BookingDate>{moment(hotelInfo.checkOut).format('Do MMM YY')}</BookingDate>
          {/* <BookingHead>12:00 PM</BookingHead> */}
        </BookingWrapper>
        <BookingWrapper bor={1}>
          <BookingHead>Total Guests</BookingHead>
          <BookingDate>{hotelInfo.guest}</BookingDate>
        </BookingWrapper>
        <BookingWrapper>
          <BookingHead>Total Nights</BookingHead>
          <BookingDate>{hotelInfo.nights}</BookingDate>
        </BookingWrapper>
      </BookingDetails>
    </CardWrapper>
  );
}

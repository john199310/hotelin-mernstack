import React from "react";
import { Badge, Divider } from "antd";
import {
  AiTwotoneStar,
  AiOutlineUser,
  AiOutlineFileProtect,
} from "react-icons/ai";
import { BsCalendar } from "react-icons/bs";
import {
  CardWrapper,
  CardUpper,
  HotelImage,
  HotelDetails,
  BookingId,
  HotelName,
  HotelCity,
  StarWrapper,
  CardLower,
  BookingDates,
  BookingDetails,
  DisclaimerText,
} from "./style";
import moment from "moment";

// Create our number formatter.
var formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "INR",
});

export default function Cancelled({ bookings }) {
  if (bookings?.length == 0) {
    return (
      <div className="container pt-5">
        <div className="row">
          <div className="col-sm-12 d-flex justify-content-sm-around align-items-center">
            <img
              src={
                "https://jsak.goibibo.com/pwa_v3/gimima/images/gisrvrError.1e07eff2.png"
              }
              alt="banner"
            />
            <DisclaimerText>
              Looks like you have never cancelled any booking with Hotelin, When
              you cancel your trips, it will be shown here.
            </DisclaimerText>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="container pb-4">
      <div className="row">
        {bookings.map((booking) => {
          return (
            <div className="col-md-6 col-sm-12 mb-4">
              <Badge.Ribbon text="Cancelled" color="red">
                <CardWrapper>
                  <CardUpper>
                    <BookingId>Booking ID: #{booking.orderId}</BookingId>
                  </CardUpper>
                  <CardUpper>
                    <HotelDetails>
                      <HotelName>{booking.hotelId.name}</HotelName>
                      <HotelCity className="mb-1">
                        <span>{booking.hotelId.rating}</span>
                        <StarWrapper>
                          <AiTwotoneStar style={{ color: "#fad02c" }} />
                        </StarWrapper>
                      </HotelCity>
                      <HotelCity className="mb-1">
                        {booking.hotelId.totalReview} Reviews
                      </HotelCity>
                      <HotelCity className="mb-1">
                        {booking.hotelId.city}
                      </HotelCity>
                      <HotelCity>{booking.nights} Nights</HotelCity>
                    </HotelDetails>
                    <HotelImage>
                      <img
                        src={booking.hotelId.image}
                        alt={booking.hotelId.name}
                      />
                    </HotelImage>
                  </CardUpper>
                  <Divider />
                  <CardLower>
                    <BookingDetails className="pb-1" flexStyle="column">
                      <BookingDates>
                        <StarWrapper>
                          <BsCalendar />
                        </StarWrapper>
                        <HotelCity>
                          {moment(booking.checkIn).format("ddd MMM Do")} -
                          {moment(booking.checkOut).format("ddd MMM Do")}
                        </HotelCity>
                      </BookingDates>
                      <BookingDates>
                        <StarWrapper>
                          <AiOutlineUser />
                        </StarWrapper>
                        <HotelCity>
                          {booking.rooms} Rooms, {booking.guests} Guests
                        </HotelCity>
                      </BookingDates>
                    </BookingDetails>
                    <BookingDetails className="pt-2" flexStyle="row">
                      <BookingDates>
                        <StarWrapper>
                          <AiOutlineFileProtect />
                        </StarWrapper>
                        <HotelCity>Final Amount:</HotelCity>
                      </BookingDates>
                      <BookingDates>
                        <HotelCity>
                          {formatter.format(booking.totalAmount)}
                        </HotelCity>
                      </BookingDates>
                    </BookingDetails>
                  </CardLower>
                </CardWrapper>
              </Badge.Ribbon>
            </div>
          );
        })}
      </div>
    </div>
  );
}

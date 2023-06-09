import React from "react";
import { Link } from 'react-router-dom';
import { AiFillStar } from "react-icons/ai";
import {
  CardWrapper,
  ImageWrapper,
  CardDetails,
  CityWrapper,
  NameWrapper,
  PriceWrapper,
  ReviewWrapper,
  RatingWrapper,
  StarWrapper,
  BookButton,
  Reviews,
  HotelDetails
} from "./cardStyle";

export const Card = (props) => {
  const { id, name, city, image, price, rating, totalReview } = props;

   // Create our number formatter.
   var formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "INR",
  });
  
  return (
    <CardWrapper>
      <ImageWrapper src={image} alt={name} />
      <CardDetails>
        <NameWrapper>{name}</NameWrapper>
        <CityWrapper>{city}</CityWrapper>
        <ReviewWrapper>
          <PriceWrapper>{`Starting from ${formatter.format(price)}`}</PriceWrapper>
          <RatingWrapper>
            {rating}
            <StarWrapper>
              <AiFillStar />
            </StarWrapper>
          </RatingWrapper>
        </ReviewWrapper>
        <ReviewWrapper>
          <BookButton><Link to={`/book-hotel/${id}`} style={{ textDecoration: 'none', color:'white' }}>Book Now</Link></BookButton>
          <Reviews>{`${totalReview} Reviews`}</Reviews>
        </ReviewWrapper>
      </CardDetails>
    </CardWrapper>
  );
};

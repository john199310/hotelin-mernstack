import React, { useEffect, useState } from "react";
import { Heading } from "../../components/UI/Heading";
import Details from "./details";
import Review from "./review";
import ReservationForm from "./ReservationForm";
import {
  SectionWrapper,
  ImageWrapper,
  HotelImage,
  DescWrapper,
  HeadText,
} from "./singleStyle";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { getSingleHotel } from "../../redux/actions/actions";
import { data } from "./fakeData";
import Loader from "../../components/loader";

export const SingleHotel = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  let data = useSelector((state) => state.Hotels.singleHotel);

  useEffect(() => {
    dispatch(getSingleHotel(id));
  }, [id]);

  if (!data.name) {
    return <Loader/>
  }
  return (
    <SectionWrapper>
      <ImageWrapper>
        <HotelImage src={data.image} alt={data.name} />
      </ImageWrapper>
      <div className="container">
        <div className="row mt-5 position-relative">
          <div className="col-md-7 col-sm-12">
            <Heading content={data.name} />
            <DescWrapper>{data.description}</DescWrapper>
            <HeadText>Details</HeadText>
            <Details details={data.details} />
            <HeadText>Reviews</HeadText>
            {data?.reviews &&
              data.reviews.map((item) => {
                return <Review key={item.id} data={item} />;
              })}
          </div>
          <div className="col-md-5 col-sm-12 p-5">
            <ReservationForm price={data.price} id={id}/>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

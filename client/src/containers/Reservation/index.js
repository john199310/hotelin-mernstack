import React,{useEffect} from "react";
import { Heading } from "../../components/UI/Heading";
import { SectionWrapper } from "./style";
import BookingInfo from "./bookingInfo";
import PriceSummary from "./priceSummary";
import { useDispatch, useSelector } from 'react-redux';
import { checkStorageBooking } from '../../redux/actions/actions';
import { setBookingLocation } from '../../redux/actions/useractions';
import Loader from "../../components/loader";

export default function Reservation() {
  const dispatch = useDispatch();
  const state = useSelector(state => state.Hotels.bookingDetails)

  useEffect(() => {
   dispatch(checkStorageBooking())
   dispatch(setBookingLocation())
  }, [])


if (Object.keys(state).length === 0) {
    return <Loader />;
  }

  return (
    <SectionWrapper>
      <div className="container">
        <Heading content="Booking Confirmation" />
        <div className='mt-5 row'>
            <div className='col-md-7'>
                <BookingInfo hotelInfo={state.hotelDetails}/>
            </div>
            <div className='col-md-5'>
              <PriceSummary hotelPrice={state.priceDetails} fulldetails={state}/>
            </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

import React,{useEffect} from "react";
import { Heading } from "../../components/UI/Heading";
import { Text } from "../../components/UI/Text";
import { Card } from "../../components/UI/Pricecard";
import { SectionWrapper } from "./hotelStyle";
import { data } from "../../fakeData";
import { getAllhotel } from '../../redux/actions/actions';
import {useSelector, useDispatch} from 'react-redux';

export default function Hotels() {
  const dispatch = useDispatch();
  const state = useSelector(state => state.Hotels.popularHotels)
  //console.log(state)
  useEffect(() => {
    dispatch(getAllhotel())
  }, [])

  return (
    <SectionWrapper>
      <div className="container">
        <Heading content="Homes guests love" />
        <Text content='Get hotels of your choice' />
        <div className="row pt-4">
          {state.map((item) => {
            return (
              <div key={item._id} className="col-md-4 col-sm-12 pt-4">
                <Card
                  id={item._id}
                  name={item.name}
                  city={item.city}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                  totalReview={item.totalReview}
                />
              </div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}

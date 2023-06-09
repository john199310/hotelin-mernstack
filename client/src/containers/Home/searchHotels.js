import React from "react";
import { SectionWrapper, CityWrapper } from "../TopDestinations/destStyle";
import { Heading } from "../../components/UI/Heading";
import { Text } from "../../components/UI/Text";
import { Card } from "../../components/UI/Pricecard";
import { useSelector } from "react-redux";
import Loader from "../../components/loader";

export default function SearchHotels() {
  const data = useSelector((state) => state.Hotels.searchHotel);
    console.log(data)
  if (data == undefined) {
    return <Loader />;
  }

  return (
    <SectionWrapper>
      <div className="container">
        <CityWrapper>
          <div className="">
            <Heading content={`Search Results`} />
            <Text content="Get hotels of your choice" />
          </div>
          {/* <div className="">
            <FormLabel>Sort By</FormLabel>
            <Form.Item style={{ width: "200px" }}>
              <Select
                placeholder="All Hotels"
                onChange={(data) => handleFilter(data)}
              >
                <Select.Option value="ah">All Hotels</Select.Option>
                <Select.Option value="plh">Price - Low to High</Select.Option>
                <Select.Option value="phl">Price - High to low</Select.Option>
                <Select.Option value="rlh">Rating - Low to High</Select.Option>
                <Select.Option value="rhl">Rating - High to Low</Select.Option>
              </Select>
            </Form.Item>
          </div> */}
        </CityWrapper>
        <div className="row pt-4">
          {data.map((item) => {
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

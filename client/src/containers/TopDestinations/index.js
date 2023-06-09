import React from "react";
import { Heading } from "../../components/UI/Heading";
import { Text } from "../../components/UI/Text";
import { SectionWrapper } from "./destStyle";
import { data } from "./fakeData";
import { Card } from "../../components/UI/card";
import { Link } from "react-router-dom";

export default function Destinations() {
  return (
    <SectionWrapper>
      <div className="container">
        <Heading content="Destinations" />
        <Text content="Get cities from your choice" />
        <div className="row">
          {data.map((item) => {
            return (
              <div
                key={item.id}
                className={`col-md-6 col-sm-12 pt-4 ${
                  item.id === 5 ? `mx-auto` : ""
                }`}
              >
                <Link to={`/book-hotel/cities/${item.name}`}>
                  <Card key={item.id} name={item.name} image={item.image} />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}

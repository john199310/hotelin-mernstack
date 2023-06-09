import React from "react";
import {
  BannerWrapper,
  HomeWrapper,
  SearchWrapper,
  BookingCTA,
  HomeHeadLine,
  HomePara,
  ContentWrapper,
  FormHeadLine
} from "./homestyle.js";
import { Heading } from "../../components/UI/Heading";
import SearchForm from "./searchForm";
import Intro from "./intro";
import TopDestinations from "../TopDestinations";
import Hotels from "../Hotels";

export default function Home() {
  return (
    <>
      <HomeWrapper>
        <BannerWrapper>
          <div className="container">
            <ContentWrapper>
              <div className="row">
                <div className="col-md-7 col-md-push-5" style={{ zIndex: "1" }}>
                  <BookingCTA>
                    <HomeHeadLine>Make your reservation</HomeHeadLine>
                    <HomePara>
                      Our Hotels & Resorts remain stylish, modern, forward
                      thinking global leader of hospitality and we help make
                      traveling easier with our smart design, innovative
                      restaurant concepts, unique activities, nature and
                      authentic hospitality.
                    </HomePara>
                  </BookingCTA>
                </div>
                <div className="col-md-4 col-md-pull-7" style={{ zIndex: "1" }}>
                  <SearchWrapper>
                    <FormHeadLine>Holidays just a click Away</FormHeadLine>
                    <SearchForm />
                  </SearchWrapper>
                </div>
              </div>
            </ContentWrapper>
          </div>
        </BannerWrapper>
      </HomeWrapper>
      <Intro />
      <TopDestinations />
      <Hotels />
    </>
  );
}

import React from "react";
import { SectionWrapper } from "../Hotels/hotelStyle";
import {
  ImageSection,
  ImagesWrapper,
  FirstImage,
  FirstImageHolder,
  ImageHolder,
  SecondImageHolder,
  IntroWrapper,
  UpContent,
  UpContentLine,
  HeadlineWrapper,
  HeadLine,
  HotelWrapper,
  SecondImage,
} from "./homestyle";

// https://themes.getmotopress.com/luviana/wp-content/uploads/sites/27/2019/07/welcome-2-1024x705.jpg
export default function Intro() {
  return (
    <SectionWrapper>
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <ImageSection>
              <ImagesWrapper>
                <FirstImage>
                  <FirstImageHolder>
                    <ImageHolder
                      src={
                        "https://themes.getmotopress.com/luviana/wp-content/uploads/sites/27/2019/07/welcome-1-902x1024.jpg"
                      }
                      alt="firstImage"
                    />
                  </FirstImageHolder>
                </FirstImage>
                <SecondImage>
                  <SecondImageHolder>
                    <ImageHolder
                      src={
                        "https://themes.getmotopress.com/luviana/wp-content/uploads/sites/27/2019/07/welcome-2-1024x705.jpg"
                      }
                      alt="secondImage"
                    />
                  </SecondImageHolder>
                </SecondImage>
              </ImagesWrapper>
            </ImageSection>
          </div>
          <div className="col-sm-6">
            <IntroWrapper>
              <UpContent>
                <UpContentLine>
                  RAISING COMFORT TO THE HIGHEST LEVEL
                </UpContentLine>
              </UpContent>
              <HeadlineWrapper>
                <HeadLine>Welcome to HotelIn's Hotel & Resort</HeadLine>
              </HeadlineWrapper>
              <HotelWrapper>
                <p>
                  The HotelIn is the right choice for visitors who are searching
                  for a combination of charm and a convenient position from
                  where to explore surroundings.
                </p>
                <p>
                  The rooms are arranged on the first, second and third floors.
                  On the top floor, there is also a charming terrace or solarium
                  available for the use of guests, from where you can enjoy the
                  view.
                </p>
              </HotelWrapper>
            </IntroWrapper>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

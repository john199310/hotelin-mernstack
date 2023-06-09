import styled from "styled-components";

export const HomeWrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  position: relative;
  background-color: rgb(255, 255, 255);
  top: -82px;

  @media (max-width: 480px) {
    min-height: 170vh;
  }
`;

export const BannerWrapper = styled.div`
  background: url(${process.env.PUBLIC_URL + "/assets/banners/2.jpg"}) no-repeat
    center;
  background-size: cover;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
  padding-top: 90px;
  &:after {
    display: block;
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    background: rgba(47, 103, 177, 0.6);
    // display: block;
    // content: "";
    // width: 100%;
    // height: 60%;
    // position: absolute;
    // bottom: 0;
    // background: linear-gradient(transparent, rgba(0, 0, 0, 0.5));
    // pointer-events: none;
  }
`;

export const ContentWrapper = styled.div`
  margin-top: 50px;

  @media (max-width: 480px) {
    margin-top: 0px;
  }
`;

export const BookingCTA = styled.div`
  margin-top: 80px;
  margin-bottom: 30px;
  @media (max-width: 480px) {
    margin-top: 40px;
    margin-bottom: 15px;
  }
`;

export const SearchWrapper = styled.div`
  background-color: #fff;
  padding: 30px 20px;
  -webkit-box-shadow: 0 5px 20px -5px rgb(0 0 0 / 30%);
  box-shadow: 0 5px 20px -5px rgb(0 0 0 / 30%);
  border-radius: 4px;
`;

export const HomeHeadLine = styled.h1`
  font-size: 52px;
  text-transform: uppercase;
  color: #fff;
  font-weight: 700;
  @media (max-width: 480px) {
    font-size: 32px;
  }
`;

export const HomePara = styled.p`
  font-size: 16px;
  font-weight: 400;
  width: 500px;
  color: rgba(255, 255, 255, 0.8);
  @media (max-width: 480px) {
    font-size: 14px;
    width: 300px;
  }
`;

// for form

export const FormLabel = styled.label`
  display: inline-block;
  margin-bottom: 0.5em;
  color: #3e3f46;
  font-weight: 400;
  font-size: 14px;
  font-size: 0.875rem;
`;

export const SubmitButton = styled.button`
  display: block;
  width: 100%;
  color: #fff;
  background-color: #1e62d8;
  font-weight: 700;
  padding: 14px 30px;
  border-radius: 4px;
  border: none;
  -webkit-transition: 0.2s all;
  transition: 0.2s all;
`;

//  for intro

export const ImageSection = styled.div`
  padding-top: 60px;
  padding-right: 70px;

  @media (max-width: 480px) {
    padding-right: 30px;
  }
`;

export const ImagesWrapper = styled.div`
  position: relative;
`;

export const FirstImageHolder = styled.div`
  padding-top: 0%;
`;

export const FirstImage = styled.div`
  position: absolute;
  width: 54%;
  top: 0;
  bottom: 0;
  left: 0;
  padding: 0;
  margin: 0;

  @media (max-width: 480px) {
    top: -152px;
    left: 20px;
  }
`;

export const SecondImage = styled.div`
  position: absolute;
  width: 65%;
  top: 0;
  left: auto;
  right: 0;
  bottom: 0;

  @media (max-width: 480px) {
    top: -152px;
    right: -15px;
  }
`;

export const SecondImageHolder = styled.div`
  padding-top: 26%;
`;

export const ImageHolder = styled.img`
  box-shadow: 0 13px 43px 0 rgb(37 46 89 / 10%);
  max-width: 100%;
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  border-radius: 0 !important;
  outline: 0;
`;

export const IntroWrapper = styled.div`
  padding-top: 60px;
  padding-left: 20px;
`;

export const UpContent = styled.div`
  color: #222;
  font-size: 12px;
`;

export const UpContentLine = styled.p`
  position: relative;
  padding-top: 1.25rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  &:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 70px;
    height: 4px;
    background-color: #182eff;
  }
`;

export const HeadlineWrapper = styled.div`
  margin-bottom: 30px;
  margin-top: 10px;
`;

export const HeadLine = styled.h2`
  color: #222;
  line-height: 1.4;
  font-weight: 400;
  letter-spacing: -0.5px;
`;

export const FormHeadLine = styled.h3`
  font-size: 25px;
  color: #222;
  line-height: 1.4;
  font-weight: 400;
  letter-spacing: -0.5px;
  @media (max-width: 480px) {
    font-size: 22px;
  }
`;

export const HotelWrapper = styled.div`
  padding-left: 50px;
  color: #5f6060;
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  font-size: 1rem;
  line-height: 1.75;

  @media (max-width: 480px) {
    padding-left: 0px;
  }
`;

import styled from "styled-components";

export const SectionWrapper = styled.section`
  padding: 52px 0;
`;

//  for booking info

export const CardWrapper = styled.div`
  border-radius: 6px;
  transition: box-shadow 0.3s;
  box-shadow: 0 13px 43px 0 rgb(37 46 89 / 10%);
  padding: 20px;
  @media (max-width: 480px) {
    width: 300px;
    margin: 30px auto;
  }
`;

export const CardHeading = styled.h3`
  font-family: "Noto Serif", serif;
  display: block;
  color: #222;
  line-height: 1.4;
  font-weight: 400;
  letter-spacing: -0.5px;
  padding-bottom: 10px;
  border-bottom: 1px solid #eff3f8;
`;

export const HotelDetails = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-between;

  @media (max-width: 480px) {
    flex-direction: row;
  }
`;

export const HotelImage = styled.img`
  border-radius: 1rem;
  object-fit: cover;
  width: 40%;
  height: 60%;
`;

export const HotelDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 480px) {
    font-size: 17px;
    padding-left:30px;
  }
`;

export const HotelName = styled.span`
  font-size: 20px;
  color: #333;
  @media (max-width: 480px) {
    font-size: 17px;
  }
`;

export const HotelCity = styled.span`
  font-size: 18px;
`;

export const HotelRating = styled.span``;

export const BookingDetails = styled.div`
  display: flex;
  //flex-direction:column;
  justify-content:space-between;
  border-radius: 1.2rem;
  background: rgb(232, 243, 255);
  padding: 1rem;
  margin-bottom: 1.5rem;
  margin-top: 30px;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

export const BookingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 15px;
  padding-left: 15px;
  border-right: ${props => props.bor == 1? '1px solid rgb(119, 119, 119)':null};

  @media (max-width: 480px) {
    padding-right: 0;
    padding-left: 0;
    padding-top: 10px;
    padding-bottom: 10px;
    border-right: none;
    border-bottom: 1px solid rgb(119, 119, 119);
  }
`;

export const BookingHead = styled.span`
  color: rgb(119, 119, 119);
`;

export const BookingDate = styled.span`
  ont-size: 1.6rem;
  padding: 0.2rem 0px;
  font-weight: bold;
`;

//  for price summary

export const PriceWrapper = styled.div`
  padding: 10px 0;
  border-bottom: 1px solid #eff3f8;
`;

export const PriceSum = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const PriceText = styled.span`
  font-weight: 400;
  font-size: 16px;
`;

export const DiscountWrapper = styled.span`
  border: 1px solid #ff4867;
  padding: 2px 5px;
  border-radius: 10px;
  background-color: #fff1ed;
  color: #ff4867;
  font: 400 0.8rem / 1.33 "Helvetica Neue", Helvetica, Arial, sans-serif;
`;

export const BookingButton = styled.button`
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

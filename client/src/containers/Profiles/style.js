import styled from "styled-components";

export const SectionWrapper = styled.section`
  padding: 52px 0;
`;

export const CardWrapper = styled.div`
  border-radius: 6px;
  overflow: hidden;
  transition: box-shadow 0.3s;
  box-shadow: 0 13px 43px 0 rgb(37 46 89 / 10%);
  padding: 20px;
`;

export const HeadWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 40px 0;
`;

export const UserDetails = styled.div`
  padding-left: 20px;
`;

export const UserName = styled.div`
  font-size: 30px;
  color: #333;
`;

export const UserEmail = styled.div`
  font-size: 15px;
  color: #999;
`;

export const CardUpper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items:center;
  width: 100%;
`;

export const HotelImage = styled.div`
  width: 140px;
  height: 140px;
  overflow: hidden;
  //border-radius: 5%;
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const HotelDetails = styled.div`
  // display:flex;
  // justify-content: space-between;
`;

export const BookingId = styled.div`
  font-weight: bold;
  color: rgb(31, 44, 97);
  font-size: 15px;
  margin-bottom: 15px;
`;

export const HotelName = styled.div`
  font-size: 18px;
`;

export const HotelCity = styled.div`
  font-size: 15px;
  color: rgba(0, 0, 0, 0.65);
  font-weight: 500;
`;

export const StarWrapper = styled.span`
  font-size: 20px;
  padding-left: 5px;
  padding-right: 5px;
  //padding-top: 7px;
`;

export const CardLower = styled.div`
  width: 100%;
`;

export const BookingDetails = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 480px) {
    flex-direction: ${props => props.flexStyle};
  }
`;

export const BookingDates = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
`;

// disclamer section
export const DisclaimerText = styled.div`
  font-size: 25px;
  width: 50%;
`;

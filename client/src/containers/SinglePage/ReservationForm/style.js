import styled from "styled-components";

export const CardWrapper = styled.div`
  position: ${props => props.pos};
  right: 0;
  top: 0;
  bottom: 0;
  width: 33.333%;
`;

export const FormWrapper = styled.div`
  max-width: 370px;
  margin-left: auto;
  position: sticky;
  top: 50px;
  background: #fff;
  padding: 3.125rem 2.5rem;
  -webkit-box-shadow: 0 13px 43px 0 rgb(37 46 89 / 10%);
  box-shadow: 0 13px 43px 0 rgb(37 46 89 / 10%);
`;

export const PriceWrapper = styled.p`
  margin-top: 0;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #ededed;
`;

export const RoomPrice = styled.span`
  font-size: 1.9375rem;
  font-weight: 400;
  color: #222;
`;

export const CurrencyWrapper = styled.span`
  vertical-align: text-top;
  font-size: 60%;
`;

export const PricePeriod = styled.span`
  color: #5f6060;
  font-size: 100%;
  vertical-align: middle;
  text-decoration: none;
  border: 0;
  position: relative;
  &:before {
    content: "/";
    margin-right: 0.25rem;
  }
`;

export const FormLabel = styled.label`
  display: inline-block;
  margin-bottom: 0.5em;
  color: #3e3f46;
  font-weight: 400;
  font-size: 14px;
  font-size: 0.875rem;
`;

export const FormItemStyle = styled.div`
  width:100%;
  height:40px;
`;

export const FormsubmitButton = styled.button`
  width: 100%;
  height: 47px;
  color: rgb(255, 255, 255);
  font-size: 15px;
  font-weight: 700;
  border:none;
  background-color: #1e62d8;
  transition: all 0.2s ease 0s;
`;


// @media only screen and (max-width: 480px) {
//   width:185px;
// }
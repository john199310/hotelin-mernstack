import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  position: relative;
`;

export const FormWrapper = styled.div`
  min-height: 100vh;
  padding: 2rem;

  @media (max-width: 480px) {
    padding: 0;
  }
`;

export const CardWrapper = styled.div`
  padding: 30px 20px;
  background-color: #fff;
  background-clip: border-box;
  //border: 1px solid #eff2f5;
  border-radius: 0.475rem;
  //box-shadow: 0 13px 43px 0 rgb(37 46 89 / 10%);
  height: auto;
  width: 80%;
  margin: 0px auto;
`;

export const CardUpper = styled.div`
  width: 100%;
  margin: 10px 0;
`;

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 20px;
  img {
    width: 20%;
    height: 20%;
  }
`;

export const HotelTag = styled.div`
  display: flex;
  justify-content: center;
  font-size: 16px;
  text-align: center;
`;

export const TitleTag = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

export const AuthFooter = styled.div`
  padding-top: 30px;
`;

export const AuthPrivacy = styled.div`
  padding-bottom: 20px;
  color: #b5b5c3;
`;

export const InfoWrapper = styled.div``;

export const BannerWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  background: url(${process.env.PUBLIC_URL + "/assets/banners/1.jpg"}) no-repeat;
  background-size: cover;
  background-position: center;
  width: 50%;
  height: 100%;
  padding: 0;

  &:after {
    display: block;
    content: "";
    width: 100%;
    height: 60%;
    position: absolute;
    bottom: 0;
    background: linear-gradient(transparent, rgba(0, 0, 0, 0.5));
    pointer-events: none;
    z-index: 0;
  }

  @media (max-width: 480px) {
    display: none;
  }
`;

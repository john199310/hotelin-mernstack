import styled from "styled-components";

export const FooterWrapper = styled.footer`
  width: 100%;
  background-color: #ffffff;
  background-image: url(${process.env.PUBLIC_URL + "/assets/footer-bg.svg"});
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: 100%;
  padding: 47px 0 66px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 480px) {
    padding: 60px 0 50px;
  }
`;

export const MenuWrapper = styled.div`
  margin-top: 40px;
  padding-left: 10px;
  @media only screen and (max-width: 480px) {
    margin-top: 30px;
    padding-left: 0;
  }

  ul{
    display: flex;
    align-items: center;
    justify-content:center;
    border: 0;
    background-color: transparent;
    list-style-type: none;
    @media only screen and (max-width: 480px) {
      flex-wrap: wrap;
    }

    li{
      margin: 0 30px;
      padding: 0;
      height: auto;
      margin-bottom: 0 !important;
      @media only screen and (max-width: 480px) {
        margin: 0 7px;
      }
    }

    font-size: 15px;
      line-height: 18px;
      font-weight: 700;
`;

export const AddressWrapper = styled.p`
  width: 700px;
  text-align:center;
  color: #909090;
  font-size: 15px;
  line-height: 18px;
  font-weight: 400;
  margin-top: 30px;
  @media only screen and (max-width: 480px) {
    font-size: 14px;
    margin-top: 20px;
    flex-wrap: wrap;
    width:300px;
  }
`;

export const SocialMediaWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;

  ul{
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0;
    background-color: transparent;
    list-style-type: none;
    @media only screen and (max-width: 480px) {
      flex-wrap: wrap;
    }

  li {
    display:flex;
    justify-content:center;
    align-items: center;
    border: 2px solid #909090;
    color: #909090;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    margin-left:40px;
    text-align: center;
    line-height: 30px;
  }
`;

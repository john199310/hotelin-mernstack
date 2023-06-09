import styled from "styled-components";

export const CardWrapper = styled.div`
  width: 500px;
  border-radius: 6px;
  overflow: hidden;
  transition: box-shadow 0.3s;
  box-shadow: 0 13px 43px 0 rgb(37 46 89 / 10%);
  display:flex;
  justify-content:center;
  align-items:center;
  padding:20px;
  @media(max-width:480px){
    width:300px;
    margin:0 auto;
  }
`;


export const ImageWrapper = styled.img`
  width:450px;

  @media(max-width:480px){
    width:200px;
  }
`;
import styled from "styled-components";

export const SectionWrapper = styled.section`
  padding: 52px 0;
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const HotelImage = styled.img`
  width: 60%;
  box-shadow: 0 13px 43px rgb(37 46 89 / 23%);
`;

export const DescWrapper = styled.p`
  color: #5f6060;
  font-family: Lato;
  font-size: 16px;
  font-size: 1rem;
  line-height: 1.75;
  margin-top: 20px;
`;

export const HeadText = styled.h4`
  font-family: "Noto Serif", serif;
  color: #222;
  margin-top: 30px;
  margin-bottom:20px;
  font-size: 30px;
`;

// for reviews

export const ReviewWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 20px;
`;

export const AvtarImage = styled.div`
  padding-right: 2.5rem;
`;

export const AuthorImage = styled.img`
  width: 58px;
  border-radius:50%;
`;


export const CommentBody = styled.div`
  padding-left: 2.5rem;
  border-left: 1px solid #ededed;
  position: relative;

  &:before {
    content: "";
    width: 10px;
    height: 10px;
    display: block;
    background: #fff;
    border-top: 1px solid #ededed;
    border-left: 1px solid #ededed;
    border-bottom: 1px solid #fff;
    border-right: 1px solid #fff;
    position: absolute;
    left: 0.114rem;
    top: 15px;
    transform: rotate(-45deg) translate(-50%, -50%);
  }
`;

export const ReviewAuthor = styled.p`
  font-size: 18px;
  color: #222;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

export const GivenStar = styled.p`
  font-weight: 600;
  font-size: 15px;
`;

export const Comment = styled.p`
  color: #5f6060;
  font-weight: 400;
  letter-spacing: 1px;
  font-size:15px;
`;

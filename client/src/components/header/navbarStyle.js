import styled from "styled-components";

export const NavbarWrapper = styled.nav`
  z-index: 1000;
  position: relative;
  width: 100%;
  padding: 10px 25px;
  min-height: 82px;
  background: ${(props) => props.back};
  border-bottom: 0px;
  transition: all 0.3s ease-out 0s;
  box-shadow: ${(props) => props.shadow};
`;

export const NavItems = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const LogoWrapper = styled.img`
  width: 60px;
  @media (max-width: 480px) {
    width: 40px;
  }
`;

export const ImageAvatar = styled.div`
  width: 45px;
  height: 45px;
  overflow: hidden;
  border-radius: 50%;
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

// export const DropdownMenu = styled.div`
//   min-width: 150px;
//   padding: 10px;
//   background: white;
//   border-right: 0;
//   position: absolute;
//   right: 44px;
//   top: 76px;
//   border-radius: 4px;
//   box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
//   transition: all 0.3s ease;
//   &.hide {
//     opacity: 0;
//     visibility: hidden;
//   }
//   &.active {
//     opacity: 1;
//     visibility: visible;
//   }
// `;

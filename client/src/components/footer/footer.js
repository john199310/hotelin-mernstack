import React from "react";
import {
  AiFillFacebook,
  AiFillTwitterCircle,
  AiFillInstagram,
} from "react-icons/ai";
import { FooterWrapper, MenuWrapper, SocialMediaWrapper, AddressWrapper } from "./footerstyle";

export default function Footer() {
  return (
    <FooterWrapper>
      <MenuWrapper>
        <ul>
          <li>About Us</li>
          <li>Terms & Conditions</li>
          <li>Privacy Policy</li>
          <li>Refund Policy</li>
        </ul>
      </MenuWrapper>
      <AddressWrapper>
        14th Main Road, Sierra Cartel.No.2287, Hal 2nd Stage, Indiranagar,
        Bangaluru (Banaglore) Urban, Karnataka, 560008
      </AddressWrapper>
      <SocialMediaWrapper>
        <ul>
          <li>
            <AiFillFacebook />
          </li>
          <li>
            <AiFillTwitterCircle />
          </li>
          <li>
            <AiFillInstagram />
          </li>
        </ul>
      </SocialMediaWrapper>
    </FooterWrapper>
  );
}

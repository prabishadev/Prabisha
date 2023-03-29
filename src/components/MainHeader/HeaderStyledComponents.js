import styled from "styled-components";
import { ImLinkedin2 } from "react-icons/im";
import { Link } from "react-router-dom";

import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsYoutube,
  BsFillTelephoneFill,
} from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import { AiOutlineMail, AiOutlineMenu } from "react-icons/ai";

export const Section1 = styled.div`
  display: flex;
  background-color: #c99b3b;
  justify-content: space-between;
  height:27px;
  padding:6px;
  align-items: center;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const LinkedinIcon = styled(ImLinkedin2)`
  height: 15px;
  width: 15px;
  color: white;
  padding-left: 10px;
  padding-right: 10px;
`;
export const FacebookIcon = styled(BsFacebook)`
  height: 15px;
  width: 15px;
  color: white;
  padding-left: 10px;
  padding-right: 10px;
`;
export const Menu = styled(AiOutlineMenu)`
  height: 30px;
  width: 30px;
  color: black;
  padding-left: 10px;
  padding-right: 10px;
  cursor: pointer;
`;

export const Sidebar = styled.div`
  width: 0;
  height: 100%;
  background-color: #c99b3b;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  overflow-x: hidden;
  transition: 0.5s;
`;

export const TwitterIcon = styled(BsTwitter)`
  height: 15px;
  width: 15px;
  color: white;
  padding-left: 10px;
  padding-right: 10px;
`;

export const YoutubeIcon = styled(BsYoutube)`
  height: 15px;
  width: 15px;
  color: white;
  padding-left: 10px;
  padding-right: 10px;
`;

export const PhoneIcon = styled(BsFillTelephoneFill)`
  height: 15px;
  width: 15px;
  color: white;
  padding-left: 10px;
  padding-right: 10px;
`;
export const FaBarsIcon = styled(FaBars)`
  height: 15px;
  width: 15px;
  color: white;
  padding-left: 10px;
  padding-right: 10px;
`;

export const MailIcon = styled(AiOutlineMail)`
  height: 15px;
  width: 15px;
  color: white;
  padding-left: 10px;
  padding-right: 10px;
`;

export const InstagramIcon = styled(BsInstagram)`
  height: 15px;
  width: 15px;
  color: white;
  padding-left: 10px;
  padding-right: 10px;
`;

export const IconSection = styled.div`
  display: flex;
  color: #fff;
  padding: 5px;
`;
export const ContactInfo1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 15px;
`;
export const ContactInfo2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: transparent;
  border: none;
  color: #fff;
  font-size: 1.5rem;
  cursor: pointer;
`;

export const Text = styled.h4`
  color: #fff;
  font-size: 15px;
  font-weight: 400;
`;

export const ContactContainer = styled.div`
  display: flex;
`;

export const Section21 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding:6px 15px 6px 30px;
  text-decoration:none;
  -webkit-box-shadow: 0 10px 10px -10px #000000;
  -moz-box-shadow: 0 10px 10px -10px #000000;
  box-shadow: 0 10px 10px -10px #000000;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const Section2logo = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  padding:10px;
`;
export const Imagelogo = styled.img`
  height:4rem;
  width:8rem;
  padding-right:100px;
  @media(min-width:769px)and(max-width:1199px){
    padding-right:0px;
  }
  
`;
export const LinkItem = styled(Link)`
  text-decoration:none;
`;

export const Section2NavItems = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration:none;
`;
export const NavItem = styled.h1`
  color: #000;
  font-size: 1rem;
  margin: 10px;
  font-weight: 500;
  text-decoration:none;
  &:hover{
    color:#c99b3b;
  }
  @media (max-width:768px){
    color:#fff;
  }
`;

export const BtnItem = styled.button`
  color: #fff;
  font-size: 0.8rem;
  margin: 10px 30px 10px 30px; 
  font-weight: 500;
  border-radius:10px;
  text-decoration:none;
  border:1px solid #ff5e00;
  background-color: #f27e3a;
  padding:12px;
  cursor:pointer;
  @media (max-width:768px){
    color:#fff;
  }
  &:hover{
    
  }
`;

export const MobileSectionNavbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;
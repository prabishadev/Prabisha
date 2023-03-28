import styled from "styled-components";
import { ImLinkedin2 } from "react-icons/im";
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
  height:35px;
  padding:10px;
  align-items: center;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const LinkedinIcon = styled(ImLinkedin2)`
  height: 20px;
  width: 20px;
  color: white;
  padding-left: 10px;
  padding-right: 10px;
`;
export const FacebookIcon = styled(BsFacebook)`
  height: 20px;
  width: 20px;
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
  height: 100vh;
  background-color: #0b034f;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  overflow-x: hidden;
  transition: 0.5s;
`;

export const TwitterIcon = styled(BsTwitter)`
  height: 20px;
  width: 20px;
  color: white;
  padding-left: 10px;
  padding-right: 10px;
`;

export const YoutubeIcon = styled(BsYoutube)`
  height: 20px;
  width: 20px;
  color: white;
  padding-left: 10px;
  padding-right: 10px;
`;

export const PhoneIcon = styled(BsFillTelephoneFill)`
  height: 20px;
  width: 20px;
  color: white;
  padding-left: 10px;
  padding-right: 10px;
`;
export const FaBarsIcon = styled(FaBars)`
  height: 20px;
  width: 20px;
  color: white;
  padding-left: 10px;
  padding-right: 10px;
`;

export const MailIcon = styled(AiOutlineMail)`
  height: 20px;
  width: 20px;
  color: white;
  padding-left: 10px;
  padding-right: 10px;
`;

export const InstagramIcon = styled(BsInstagram)`
  height: 20px;
  width: 20px;
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
  font-size: 20px;
  font-weight: 400;
`;

export const ContactContainer = styled.div`
  display: flex;
`;

export const Section2 = styled.div`
  padding: 20px;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("https://www.prabisha.co.uk/wp-content/uploads/2023/01/pexels-mike-b-6100149-1-1.jpg");
  background-size: cover;
  height: 100vh;
`;
export const Section21 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding:15px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const Section2logo = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Imagelogo = styled.img`
  height:6rem;
  width:12rem;
`;


export const Section2NavItems = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration:none;
`;
export const NavItem = styled.h1`
  color: #000;
  font-size: 20px;
  margin: 10px;
  font-weight: 400;
`;

export const TextSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Text1 = styled.h1`
  color:white;
  font-family: "Raleway", Sans-serif;
  font-size: 42px;
  font-weight: 300;
  line-height: 51px;
  letter-spacing: 0px;
  filter: brightness(1);
  word-spacing: 0px;
  @media screen and (max-width:768px){
    font-size:20px;
    line-height:30px;
    text-align:center;
  }
}
`;
export const SpanText = styled.span`
  color: #c99b3b;
  font-weight: 600;
`;
export const Info = styled.p`
  color: #fff;
  font-size: 20px;
`;
export const Text2 = styled.h1`
  color: #c99b3b;
  font-weight: 700;
  font-size: 35px;
  @media screen and (max-width: 768px) {
    font-size: 30px;
    font-weight: bold;
    text-align: center;
  }
`;

export const Section3 = styled.div`
  margin-top: -60px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  margin-bottom: 0px;
  background-color: #c99b3b;
  border-radius: 15px;
  min-height: 250px;
  padding: 20px;
  padding-bottom: 5px;
  width: 70%;
  @media screen and (max-width: 768px) {
    width: 80%;
    border-radius: 0;
  }
`;
export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  font-family: "Roboto", Sans-serif;
  height: 45px;
  width: 220px;
  margin: 15px;
  border: none;
  margin-bottom: 5px;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 15px;
  fill: #000000;
  text-align: center;
  color: #000000;
  background-color: #ffffff;
  border-radius: 0px 0px 0px 0px;
  @media screen and (max-width: 768px) {
    height: 38px;
    width: 40%;
  }
`;
export const Section4 = styled.div`
  display: flex;
  flex-direction:flex;
    background-color: #d5d1f678;
    margin-top:20px;
    padding:80px;
    min-height:520px;
@media screen and (max-width:768px){
    flex-direction:column;
    padding:10px;
    min-height:700px;
`;
export const Section41 = styled.div`
  margin-top: auto;
  margin-bottom: auto;
  width: 50%;
  display: flex;
  flex-direction: column;
  margin-right: 15px;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
export const Section41Heading = styled.h1`
  text-align: center;
  font-size: 30px;
  font-weight: 700;
  @media screen and (max-width: 768px) {
    margin-top: 40px;
  }
`;
export const Section41Container = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  background-color: #0b034f;
  height: 90px;
  width: 100%;
  color: #c99b3b;
  font-size: 30px;
  @media screen and (max-width: 768px) {
    width: 100%;
    font-size: 25px;
    text-align: center;
    height: 70px;
  }
`;
export const Section42 = styled.div`
  width: 50%;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
export const Section42Info = styled.p`
  width: 100%;
  color: #54595f;
  font-size: 20px;
  @media screen and (max-width: 768px) {
    font-size: 15px;
    margin-top: 10px !important;
    margin-bottom: 100px !important;
  }
`;

export const Section5 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -60px;
  flex-wrap: wrap;
  margin-left: auto;
  maargin-right: auto;
`;

export const Section51Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #0b034f;
  text-align: center;
  height: 60px;
  width: 380px;
  color: #c99b3b;
  font-size: 20px;
  margin: 10px;
  padding: 15px;
  @media screen and (max-width: 768px) {
    height: 40px;
  }
`;
export const ClickableButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ClickableButton = styled.a`
  background-color: #c99b3b;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #010368;
  border-radius: 7px;
  height: 50px;
  width: 280px;
  margin: 20px;
`;

export const MobileSectionNavbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

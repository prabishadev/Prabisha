import styled from "styled-components";

import { BsFillTelephoneFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { FaLocationArrow } from "react-icons/fa";

import { FaBars } from "react-icons/fa";

export const MobileSectionNavbar = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 100%;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;
export const Logo = styled.img`
  width: 100px;
`;
export const FaBarsIcon = styled(FaBars)`
  font-size: 18px;
  color: #fff;
`;
export const Section1 = styled.div`
  background-image: url("https://www.prabisha.co.uk/wp-content/uploads/2022/10/6-PC-UK-Website-Banner-CONTACT-scaled.jpg");
  background-size: cover;
  height: 73%;
  opacity: 0.9;
  padding: 30px;
  max-width: 100%;
  @media screen and (max-width: 768px) {
    height: 25vh;
  }
`;
export const Section12 = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const Section2logo = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Section2NavItems = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const NavItem = styled.h1`
  color: black;
  font-size: 20px;
  margin: 10px;
`;
export const HeadingContainer = styled.div`
  justify-content: center;
  align-items: center;
  align-self: center;
  margin-left: auto;
  margin-right: auto;
`;

export const ContactHeading = styled.h1`
  color: #fff;
  font-family: "Raleway", Sans-serif;
  font-size: 45px;
  font-weight: 300;
  text-transform: uppercase;
  line-height: 1.3;
  margin: 0;
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const Section2M = styled.div`
  height: 40%;
  background-image: url("https://www.prabisha.co.uk/wp-content/uploads/2022/10/6-PC-UK-Website-Banner-CONTACT-scaled.jpg");
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 70px;
  max-width: 100%;
  @media screen and (max-width: 768px) {
    min-height: 50%;
    padding: 10px;
  }
`;

export const Section21M = styled.div`
  display: flex;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;
export const Section21M1 = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 32%;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const Section21M1Info = styled.h2`
color: #000000;
    font-family: "Raleway", Sans-serif;
    font-size: 31px;
    font-weight: 400;
}
`;
export const AnchorTag = styled.a`
  display: flex;
  text-decoration: none;
`;

export const Section21M1Button = styled.button`
  background-color: #0b034f;
  border-radius: 5px;
  color: #ffffff;
  font-size: 15px;
  font-family: "Raleway sans-serif";
  height: 45px;
  width: 160px;
  border: none;
`;

export const Section21M2 = styled.div`
  width: 35%;
  margin: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
export const ImageA = styled.img`
  width: 80%;
  height: auto;
  border-radius: 25px;
  @media screen and (max-width: 768px) {
    width: 85%;
  }
`;
export const Section21M3 = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 250px;
  margin-top: 20px;
  padding: 45px 45px 0px 45px;
  background-color: #0b034f;
  @media screen and (max-width: 768px) {
    width: 70%;
    height: 200px;
  }
`;

export const ReachUs = styled.h6`
color:#F6F6F6;
font:family:'Raleway' , sans-serif;
line-height:1;
font-size:23px;
margin:0 0 0 11px;`;

export const IconContainer = styled.div`
  background-color: #c99b3b;
  height: 35px;
  margin-right: 10px;
  width: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
`;

export const Phone = styled(BsFillTelephoneFill)`
  color: #fff;
  font-weight: 900;
`;

export const Mail = styled(AiOutlineMail)`
  color: #fff;
  font-weight: 900;
`;
export const Location = styled(FaLocationArrow)`
  color: #fff;
  font-weight: 900;
`;

export const Text = styled.h4`
  color: #fff;
  font-size: 16px;
`;

export const Section21M31 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Section3M = styled.div`
  background-color: #d5d1f678;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 100px;
  max-width: 100%;
  max-height: 100%;
  @media screen and (max-width: 768px) {
    padding: 10px;
    display: flex;
    flex-direction: column;
  }
`;

export const Section31M = styled.div`
  width: 50%;
  margin: auto;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
export const Image = styled.img`
  width: 60%;
  height: auto;
  border-radius: 25px;
  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;

export const Section32M = styled.div`
  width: 50%;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
export const Text1 = styled.h6`
  color: #c99b3b;
  font-family: "Raleway", Sans-serif;
  font-size: 20px;
  font-weight: 300;
`;
export const Text2 = styled.h2`
  color: #0c0345;
  font-family: "Raleway", Sans-serif;
  font-size: 31px;
  font-weight: 400;
`;

export const ContactForm = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
export const Input = styled.input`
  margin: 10px;
  padding: 12px;
  background: #fafafa;
  border: none;
  width: 100%;
  @media screen and (max-width: 768px) {
    width: 80%;
  }
`;

export const Select = styled.select`
  width: 100%;
  font-size: 14px;
  font-family: Raleway, sans-serif;
  margin-bottom: 24px;
  height: 42px;
  border: none;
  margin-left: 10px;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;

export const Option = styled.option`
  width: 100%;
  font-size: 14px;
  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;

export const Button = styled.button`
  width: 120px;
  background-color: #c99b3b;
  color: #ffffff;
  font-size: 15px;
  border-radius: 15px;
  padding: 16px 32px;
  font-family: Raleway, sans-serif;
  border: none;
`;
export const Section4M = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px 0px 20px 0px;
  background-color: #0b034f;
  max-width: 100%;
  min-height: 350px;
  margin-bottom: 20px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 10px !important;
  }
`;
export const Section41M = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: -30px;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
export const Branch = styled.h6`
  color: #ffffff;
  font-family: "Raleway", Sans-serif;
  font-size: 23px;
  font-weight: 300;
  margin-left: 20px;
`;

export const Span = styled.span`
  color: #c99b3b;
  font-weight: 700;
  margin-top: -30px;
`;

export const Section41M1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: -40px;
`;
export const Section42M = styled.div`
  margin: 10px;
  width: 40%;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
export const Image1 = styled.img`
  width: 100%;
  height: 80%;
  @media screen and (max-width: 768px) {
    height: auto;
  }
`;

export const Section43M = styled.div`
cursor:	(https://maps.gstatic.com/mapfiles/openhand_8_8.cur),default;
width:27%;
@media screen and (max-width:768px){
    width:100%;
}`;

export const Iframe = styled.iframe`
  width: 100%;
  height: 80%;
`;
export const Section5M = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px 0px 20px 0px;
  background-color: #0b034f;
  max-width: 100%;
  min-height: 350px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    min-height: 500px;
    padding: 0;
  }
`;

export const Section51M = styled.div`
  margin: 10px;
  width: 30%;
  @media screen and (max-width: 768px) {
    width: 100%;
    order: 3;
  }
`;

export const Section52M = styled.div`
  margin: 10px;
  width: 30%;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const Section53M = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-top: -120px;
  @media screen and (max-width: 768px) {
    width: 100%;
    margin-top: 10px;
  }
`;
export const Image2 = styled.img`
  width: 100%;
`;

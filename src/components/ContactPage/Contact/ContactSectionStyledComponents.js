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
width:250px;
@media screen and (max-width:768px){
    width:100px;
`
export const FaBarsIcon = styled(FaBars)`
  font-size: 18px;
  color: #fff;
`;
export const Section1 = styled.div`
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url("https://res.cloudinary.com/dg0telgxq/image/upload/v1679971185/contact-us-message-landing-page-260nw-765294985_gldxop.webp");
  height: 73vh;
  background-size: cover;
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
  color: #fff;
  font-size: 20px;
  margin: 10px;
`;
export const SpanB = styled.span`
  width: 140px;
  height: auto;
  float: left;
  transition: .5s linear;
  position: relative;
  display: block;
  overflow: hidden;
  padding: 15px;
  text-align: center;
  margin: 0 5px;
  background: transparent;
  text-transform: uppercase;
  font-weight: 900;
  &:before {
  position: absolute;
  content: '';
  left: 0;
  bottom: 0;
  height: 4px;
  width: 100%;
  border-bottom: 4px solid transparent;
  border-left: 4px solid transparent;
  box-sizing: border-box;
  transform: translateX(100%);
  }
  &:after{
    position: absolute;
  content: '';
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  border-top: 4px solid transparent;
  border-right: 4px solid transparent;
  box-sizing: border-box;
  transform: translateX(-100%);
  }
&:hover {
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
}
&:hover:before {
  border-color: #fff;
  height: 100%;
  transform: translateX(0);
  transition: .3s transform linear, .3s height linear .3s;
}
&:hover:after {
  border-color: #fff;
  height: 100%;
  transform: translateX(0);
  transition: .3s transform linear, .3s height linear .5s;
}

  }
`


export const Button = styled.button`
  color: #fff;
  text-decoration: none;
  cursor: pointer;
  outline: none;
  border: none;
  background: transparent;
`
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
  font-weight:bold;
  display:flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  line-height: 1.3;
  @media screen and (min-width:768px) {
    margin-top:160px;
  }
  @media (max-width: 768px) {
    font-size: 20px;
    margin-top:50px;
  }
`;

export const Section2M = styled.div`
  height: 35vh;
 
  background-color: #d4bff5;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23bbb7a8' fill-opacity='0.42' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");  
  justify-content: center;
  align-items: center;
  padding: 70px;
  max-width: 100%;
  @media screen and (max-width: 768px) {
    min-height: 100vh;
    padding: 20px;
  }
`;

export const Section21M = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
export const Section21M1 = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 30%;
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
  width: 30%;
  margin: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
export const ImageA = styled.img`
  width: 100%;
  height: auto;
  border-radius: 25px;
  transform: translateZ(0);
  transition:transform 0.25s ease-out;
  &:hover{
    transform:scale(1.05);
}
  cursor: pointer;
  @media screen and (max-width: 768px) {
    width: 95%;
  }

`;


export const Section21M3 = styled.div`
  width: 27%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 250px;
  margin-top: 20px;
  padding: 45px 0px 0px 45px;
  background-color: #0b034f;
  border-radius: 50px;

box-shadow:  -20px -20px 60px #bebebe,
             20px 20px 60px #ffffff;
  @media (min-width: 768px) {
    height:230px;
  }
  @media screen and (max-width: 768px) {
    width: 90%;
    height: 150px;
    padding: 0px 0px 0px 45px;
  }
`;

export const ReachUs = styled.h6`
color:#F6F6F6;
font:family:'Raleway' , sans-serif;
line-height:1;
font-size:23px;
margin:0 0 0 11px;
`;

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
  height: 100vh;
  @media screen and (max-width: 768px) {
    min-height: 170vh;
    padding:10px;
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
  transform: translateZ(0);
  transition:transform 0.25s ease-out;
  cursor: pointer;
@media screen and (max-width: 768px) {
    width: 80%;
    margin-left: 30px;
}
&:hover{
    transform:scale(1.05);
}
`;

export const Section32M = styled.div`
  width: 50%;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding:0;
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

export const Section4M = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0px 20px 0px;
  background-color: #0b034f;
  height: 40vh;
  margin: 30px 20px 30px 20px ;
  border-radius:20px;
  @media screen and (max-width: 768px) {
    min-height:130vh;
    display: flex;
    flex-direction: column;
    padding: 10px !important;
  }
`;
export const Section41M = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-top: -30px;
  width:30%;
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
  margin:10px 30px 10px 10px;
  width: 30%;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
export const Image1 = styled.img`
  width: 100%;
  height: 80%;
  transform: translateZ(0);
  transition:transform 0.25s ease-out;
  &:hover{
    transform:scale(1.05);
}
  @media screen and (max-width: 768px) {
    height: auto;
  }
`;

export const Section43M = styled.div`
cursor:	(https://maps.gstatic.com/mapfiles/openhand_8_8.cur),default;
width:30%;
@media screen and (max-width:768px){
    width:100%;
}`;

export const Iframe = styled.iframe`
  width: 100%;
  height:290px;
`;
export const Section5M = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding: 20px 0px 20px 0px;
background-color: #0b034f;
height: 40vh;
margin: 0 20px 20px 20px ;
border-radius:20px;
@media screen and (max-width: 768px) {
  min-height:130vh;
  display: flex;
  flex-direction: column;
  padding: 10px !important;
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
  margin: 10px 20px 10px 20px;
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
  width:30%;
  margin-top: -120px;

  @media screen and (max-width: 768px) {
    width: 100%;
    margin-top: 10px;
  }
`;
export const Image2 = styled.img`
width: 100%;
height: 80%;
transform: translateZ(0);
  transition:transform 0.25s ease-out;
  &:hover{
    transform:scale(1.05);
}
@media screen and (max-width: 768px) {
  height: auto;
}
`;

export const ContactForm1 = styled.div`
    background-color: #f2f2f2;
    padding: 20px;
    border-radius: 10px;
`
  
export const Label1 =styled.label`
    color: black;
    margin-bottom: 10px;
`
  
export const SpanHeading= styled.span`
    font-size: 24px;
    color: black;
    margin-bottom: 12px;
    font-weight: bold;
    display: block;
`
  
export const Form1 = styled.form`
    display: flex;
    flex-direction: column;
`

export const Textarea = styled.textarea`
    resize: none;
    height: 80px;
    width: 200px;
    padding: 10px;
    border: none;
    border-radius: 5px;
    margin-bottom: 20px;
    &:focus {
        outline: none;
    box-shadow: 0 0 5px #c99b3b;
    transform: scale(1.05);
    transition: transform 0.3s ease-in-out;
    }
`
  
export const Input1 = styled.input`
    padding: 10px;
    border: none;
    border-radius: 5px;
    margin-bottom: 20px;
    &:focus{
        outline: none;
    box-shadow: 0 0 5px #c99b3b;
    transform: scale(1.05);
    transition: transform 0.3s ease-in-out;

    }
`
  
export const Button12 = styled.button`
padding: 1.3em 3em;
font-size: 12px;
text-transform: uppercase;
letter-spacing: 2.5px;
font-weight: 500;
color: #000;
background-color: #fff;
border: none;
border-radius: 45px;
box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
transition: all 0.3s ease 0s;
cursor: pointer;
outline: none;
    &:hover{
        background-color:#c99b3b;
        box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
        color: #fff;
        transform: translateY(-7px);
    }
    &:active{
        transform: translateY(-1px);
    }
`
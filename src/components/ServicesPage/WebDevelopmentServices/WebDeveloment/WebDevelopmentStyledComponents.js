import styled from "styled-components";

import { BsFillTelephoneFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";


export const Section2M = styled.div`
  height: 40%;
  background-color: #d5d1f678;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 100px;
  max-width: 100%;
  @media screen and (max-width: 768px) {
    min-height: 50%;
    padding: 50px 10px 50px 10px;
  }
`;
export const Section2MInfo1Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Section2MInfo1 = styled.h2`
  color: #362e68;
  text-align: center;
  font-size: 33px;
  font-family: Raleway, sans-serif;
  @media screen and (max-width: 768px) {
    font-size: 16px;
    text-align: center;
  }
`;
export const Section2MInfo2 = styled.p`
  color: #000000;
  font-size: 16px;
  font-family: Raleway, sans-serif;
  margin: 0px 0px 28px;
`;
export const Section2MInfo3 = styled.h2`
  text-align: center;
  font-size: 22px;
  font-family: Raleway, sans-serif;
`;
export const Section2MInfo3Span1 = styled.span`
  color: #362e68;
`;
export const Section2MInfo3Span2 = styled.span`
  color: #c99b3b;
`;
export const Section2MInfo4 = styled.p`
  color: #000000;
  font-size: 16px;
  font-family: Raleway, sans-serif;
  margin-bottom: 1.75em;
  line-height: 2;
`;
export const Section21M31 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Section3M = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 100px;
  max-width: 100%;
  max-height: 100%;
  @media screen and (max-width: 768px) {
    padding: 80px 20px 80px 20px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
`;

export const Section31M = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Section32M = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  margin-right: 20px;
  line-height: 2;
  font-weight: light;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const QueryInfo = styled.h2`
  color: #362e68;
  font-size: 18px;
  font-family: Raleway, sans-serif;
`;
export const ContactInfo = styled.div`
  display: flex;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;
export const ContactInfo1 = styled.div`
  display: flex;
  margin-right: 30px;
  justify-content: center;
  align-items: center;
  &:hover {
    color: #362e68;
  }
  @media screen and (max-width: 768px) {
    justify-content: flex-start;
    margin: 10px;
    margin-top: 0px !important;
  }
`;

export const Phone = styled(BsFillTelephoneFill)`
  color: #c99b3b;
  font-weight: 900;
  &:hover {
    color: #362e68;
  }
`;

export const Mail = styled(AiOutlineMail)`
  color: #c99b3b;
  font-weight: 900;
  &:hover {
    color: #362e68;
  }
`;
export const Text = styled.h4`
  color: #c99b3b;
  font-size: 16px;
  padding-left: 5px;
  &:hover {
    color: #362e68;
  }
`;

export const Section31M1 = styled.div`
  width: 40%;
  height: 400px;
  background-color: #0b034f;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
export const ContactForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 65px;
  @media screen and (max-width: 768px) {
    justify-content: flex-start;
    padding: 5px;
  }
`;

export const Input = styled.input`
  margin: 10px;
  padding: 12px;
  background: #fafafa;
  border: none;
  width: 60%;
  @media screen and (max-width: 768px) {
    min-width: 80%;
  }
`;

export const Select = styled.select`
  width: 68%;
  font-size: 14px;
  font-family: Raleway, sans-serif;
  margin-bottom: 24px;
  height: 42px;
  border: none;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    min-width: 87%;
  }
`;

export const Option = styled.option`
  width: 100%;
  font-size: 14px;
  @media screen and (max-width: 768px) {
    width: 87%;
  }
`;

export const Button = styled.button`
  min-width: 120px;
  background-color: #c99b3b;
  color: #ffffff;
  font-size: 15px;
  display: flex;
  border-radius: 15px;
  padding: 16px 32px;
  font-family: Raleway, sans-serif;
  border: none;
`;

export const Section4M = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0px 20px 0px;
  background-color: #d5d1f678;
  height: 50vh;
  margin-bottom: 20px;
  @media screen and (max-width: 768px) {
    padding: 80px 20px 80px 20px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 50vh;
  }
`;
export const Section41M = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  justify-content: flex-start;
  align-items: flex-start;
  @media screen and (max-width: 768px) {
    width: 100%;
    order: 1;
  }
`;
export const Span = styled.span`
  color: #c99b3b;
  font-weight: 700;
  margin-top: -30px;
`;

export const Section41M1 = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Section42M = styled.div`
  margin: 10px;
  width: 40%;
  height: 100%;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 350px;
  border-bottom-right-radius: 50px;
  @media screen and (max-width: 768px) {
    height: auto;
  }
`;

export const Section5M = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px;
  background-color: #ffffff;
  max-width: 100%;
  height: 70vh;
  @media screen and (max-width: 768px) {
    padding: 80px 20px 80px 20px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    min-height: 70vh;
  }
`;

export const Section6M = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  @media screen and (max-width: 768px) {
    padding: 50px 20px 50px 20px;
    min-height: 200vh;
  }
`;
export const RecentWorkSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Section6M1 = styled.div`
  width: 100%;
`;
export const Section6MImage = styled.img`
  width: 100%;
`;

import styled from "styled-components";
import "typeface-raleway";
import "typeface-roboto";

export const ServiceCardItem1 = styled.div`
  @media (min-width: 900px) {
    min-height: 490px;
    background-color: #0b034f;
    width: 400px;
    display: flex;
    flex-direction: column;
    margin: 10px;
    padding: 20px;
    margin-bottom: 120px;
    box-shadow: 30px 30px 91px #585859,
    -30px -30px 91px #ffffff;
  }
  @media (max-width: 900px) {
    min-height: 490px;
    background-color: #0b034f;
    width: 400px;
    display: flex;
    flex-direction: column;
    margin: 10px;
    padding: 20px;
    margin-bottom: 120px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
`;

export const ServiceCardItem2 = styled.div`
  min-height: 490px;
  display: flex;
  flex-direction: column;
  background-color: #c99b3b;
  width: 400px;
  padding: 20px;
  margin: 10px;
  margin-bottom: 120px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

export const ServiceCardItemImageCard = styled.div`
  background-color: white;
  height: 150px;
  width: 150px;
  border-radius: 100px;
  margin-top: -75px;
  align-self: center;
`;

export const ServiceCardImg = styled.img`
  height: 150px;
  width: 150px;
  align-self: center;
  border-radius: 100px;
`;

export const ServiceCardTitle1 = styled.h2`
  text-align: center;
  font-family: "Raleway", sans-serif;
  font-size: 20px;
  font-weight: 400;
  line-spacing: 2.1px;
  color: #c99b3b;
`;

export const ServiceCardTitle2 = styled.h2`
  text-align: center;
  font-family: "Raleway", sans-serif;
  font-size: 20px;
  font-weight: 400;
  line-spacing: 2.1px;
  color: black;
`;
export const ServiceCardDescription1 = styled.p`
  font-family: "Raleway", sans-serif;
  line-height: 29px;
  font-size: 19px;
  font-weight: 400;
  color: #ffffff;
  width: 100%;
`;
export const ServiceCardDescription2 = styled.p`
  font-family: "Raleway", sans-serif;
  line-height: 29px;
  font-size: 19px;
  font-weight: 400;
  width: 100%;
  color: black;
`;

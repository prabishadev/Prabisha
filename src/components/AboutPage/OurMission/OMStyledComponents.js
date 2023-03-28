import styled from "styled-components";
import "typeface-raleway";

export const OurMissionContainer = styled.div`
  @media (min-width: 900px) {
    height: 900px;
    padding-left: 125px;
    padding-right: 125px;
  }
  @media (max-width: 900px) {
    min-height: 900px;
    padding-left: 5px;
    padding-right: 5px;
  }
`;

export const OurMissionTitle = styled.h2`
  text-align: center;
  color: #362e68;
  font-family: "Raleway", sans-serif;
  font-size: 33px;
  font-weight: 400;
  margin-top: 100px;
`;

export const OurMissionDescription = styled.p`
  text-align: center;
  color: #020101;
  line-height: 30px;
  font-size: 19px;
`;

export const OurMissionCardsContainer = styled.div`
  @media (min-width: 900px) {
    min-height: 500px;
    display: flex;
  }
  @media (max-width: 900px) {
    min-height: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const OurMissionCard1 = styled.div`
  @media (min-width: 900px) {
    background-color: white;
    width: 50%;
    display: flex;
    justify-content: end;
  }
  @media (max-width: 900px) {
    background-color: white;
    width: 90%;
    display: flex;
    justify-content: center;
  }
`;

export const OurMissionCard2 = styled.div`
  @media (max-width: 900px) {
    background-color: #0b034f;
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding: 15px;
    margin-bottom:20px;
  }
  @media (min-width: 900px) {
    background-color: #0b034f;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding: 15px;
    margin-bottom:20px;
  }
`;

export const OurMissionCard2Description = styled.p`
  color: white;
  font-family: "Raleway";
  font-size: 19px;
  margin: 20px;
  font-weight: 300;
`;

export const OurMissionImage = styled.img`
  @media (max-width: 768px) {
    height:17rem;
    width:13rem;
  }
`;

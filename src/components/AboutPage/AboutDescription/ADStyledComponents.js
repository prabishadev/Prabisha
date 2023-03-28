import styled from "styled-components";

export const ADContainer = styled.div`
  @media (min-width: 900px) {
    min-height: 500px;
    padding: 125px 125px 125px 125px;
  }
  @media (max-width: 900px) {
    min-height: 500px;
    padding: 5px;
  }
`;

export const AboutDescriptionContent1 = styled.p`
  color: black;
  font-family: "Raleway";
  font-size: 18px;
  line-height: 33px;
`;

export const WhoAreWeHead = styled.h1`
  color: #c99b3b;
  font-family: "Raleway";
`;

export const AboutUsBanner = styled.div`
background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url("https://img.freepik.com/free-photo/aerial-view-business-team_53876-124515.jpg?w=996&t=st=1679996623~exp=1679997223~hmac=62ee237917c460966fe1a26a4f244deb465e1981bce00657af3ec3f1bb850811");
background-size:cover;
height:80vh;
display: flex;
justify-content: center;
align-items: center;
color:#fff;
font-size:3rem;
font-weight:bold;
`;

export const AboutDescriptionContent2 = styled.div`
  @media (min-width: 900px) {
    display: flex;
    flex-direction: row;
  }
  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
  }
`;

export const AboutDescriptionSubSection = styled.div`
  @media (max-width: 900px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  @media (min-width: 900px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const AboutDescriptionImage = styled.img`
  @media (min-width: 900px) {
    height: 170px;
    width: 320;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
  @media (max-width: 900px) {
    height: 170px;
    width: 90%;
    self-align: center;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
`;

export const AboutDescriptionSpan = styled.span`
  color: #c99b3b;
  font-family: "Raleway";
  font-size: 19px;
  line-height: 33px;
  margin-left: 4px;
`;


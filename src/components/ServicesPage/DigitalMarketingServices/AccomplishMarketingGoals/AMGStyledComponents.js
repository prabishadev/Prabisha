import styled from "styled-components";
import "typeface-raleway";

export const AMGContainer = styled.div`
  @media (min-width: 900px) {
    height: 250px;
    background-color: #d5d1f678;
    padding: 20px;
    padding-left: 100px;
    padding-right: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  @media (max-width: 900px) {
    min-height: 250px;
    background-color: #d5d1f678;
    padding: 20px;
    padding-left: 10px;
    padding-right: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  } ;
`;

export const ServicesBanner = styled.div`
background-image:url("https://img.freepik.com/free-photo/diverse-businesspeople-having-meeting_53876-103954.jpg?w=826&t=st=1680075160~exp=1680075760~hmac=cb0c0e1db3b878c94731e55c0ed20e3148ae6c0534c10493e4835c807433d5a1");
background-size:cover;
height:80vh;
display: flex;
justify-content: center;
align-items: center;
color:#000;
font-size:3rem;
font-weight:bold;
`;


export const AMGTitle = styled.h1`
  text-align: center;
  font-family: "Raleway", sans-serif;
  color: #362e68;
  font-size: 33px;
  font-weight: 400;
  margin: 0px;
`;

export const AMGDescription = styled.p`
  color: black;
  font-family: "Raleway", sans-serif;
  font-weight: 500;
  line-height: 25px;
  text-align: center;
`;

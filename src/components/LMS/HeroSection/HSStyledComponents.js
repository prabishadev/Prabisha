import styled from "styled-components";

export const BannerImage = styled.img`
  height: 500px;
  width: 100vw;
  background-size: cover;
  @media(max-width:768px){
    height:200px;
    width: 500px;
  }
`;

export const HeroSection = styled.div`
  height: 500px;
  width: 96vw;
  @media(max-width:768px){
    height:200px;
  }
`;

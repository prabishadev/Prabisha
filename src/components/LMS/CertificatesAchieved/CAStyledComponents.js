import styled from "styled-components";
import "typeface-raleway";

export const CardContainer = styled.div`
  border: 1px solid red;
  border-radius: 4px;
  padding: 16px;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 16px;
`;
export const CertificateTitle = styled.h2`
  font-size: 24px;
  margin: 0;
  display: flex;
  font-family: "Raleway", sans-serif;
  text-align: center;
  align-items: center;
`;

export const StarIcon = styled.span`
  color: #f0bb01;
  margin-right: 8px;
`;

export const NCContainer = styled.div`
  background-image: url("https://cdn.dribbble.com/users/1489103/screenshots/6326497/no-data-found.png");
  background-size: cover;
  width: 100%;

  height: 80vh;
`;

export const CertificateCard = styled.div`
  border-style: solid;

  display: flex;
  flex-direction: column;
  align-items: center;
  height: 250px;
  text-align: center;
  color: white;

  width: 300px;
  background-image: linear-gradient(
    to right,
    rgb(242, 112, 156),
    rgb(255, 148, 114)
  );

  margin: 20px;
  border-radius: 10px;
`;

export const Cup = styled.img`
  height: 200px;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  width: 100%;
`;

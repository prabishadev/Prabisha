import styled from "styled-components";

export const ScoreContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ScoreCard = styled.div`
  width: 300px;
  height: 200px;
  background-color: #f5f3c1;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 40px;
  @media screen and (max-width: 767px) {
    margin: 40px;
  }
`;

export const Score = styled.h1`
  font-size: 60px;
  margin-bottom: 10px;
`;

export const Message = styled.p`
  font-size: 20px;
`;

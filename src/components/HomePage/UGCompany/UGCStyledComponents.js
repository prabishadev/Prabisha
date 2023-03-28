import styled from "styled-components";

export const UGCContainer = styled.div`
  @media (min-width: 900px) {
    background-color: #0b034f;
    height: 40px;
    margin-left: 150px;
    margin-right: 150px;
    border-radius: 25px;
    color: white;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;
  }
  @media (max-width: 900px) {
    background-color: #0b034f;
    min-height: 50px;
    width:90vw;
    border-radius: 25px;
    color: white;
    padding: 9px;
    display: flex;
    margin-left: 6px;
    margin-right: 6px;
    flex-direction: column;
    justify-content: center;
    align-self: center;
    text-align: center;
    align-items: center;
  }
`;

export const UGCContainerText = styled.h2`
  color: white;
  font-size: 20px;
  font-weight: 300;
`;
export const UGCSpan = styled.span`
  color: #c99b3b;
  font-size: 20px;
  font-weight: 400;
`;

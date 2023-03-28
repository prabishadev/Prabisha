import styled from "styled-components";
import "typeface-raleway";

export const DMALContainer = styled.div`
  @media (min-width: 900px) {
    background-color: #d5d1f678;
    padding-top: 150px;
    padding-left: 130px;
    padding-bottom: 130px;
    margin-top: 50px;
    display: flex;
  }
  @media (max-width: 900px) {
    background-color: #d5d1f678;
    padding-top: 150px;
    padding-left: 9px;
    margin-top: 50px;
  }
`;

export const DMALLeftContainer = styled.div`
  @media (min-width: 900px) {
    width: 45vw;
  }
  @media (max-width: 900px) {
    padding: 9px;
  }
`;
export const DMALTitle = styled.h2`
  color: #362e68;
  font-family: "Raleway", sans-serif;
  font-size: 30px;
  font-weight: 500;
`;

export const DMALDescription = styled.p`
  font-family: "Raleway", sans-serif;
  color: black;
  font-size: 16px;
  font-weight: 500;
  line-height: 28px;
`;

export const DMALRightContainer = styled.div`
  @media (min-width: 900px) {
    width: 45vw;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  @media (max-width: 900px) {
    width: 95vw;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
`;

export const DMALProposalFormTitle = styled.h2`
  color: #ffffff;
  font-family: "Raleway", sans-serif;
  font-size: 25px;
  font-weight: 400;
  line-height: 28px;
  margin-bottom: 30px;
  text-align: center;
`;

export const DMALProposalFormContainer = styled.div`
  @media (min-width: 900px) {
    width: 60%;
    background-color: #0b034f;
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media (max-width: 900px) {
    width: 90vw;
    background-color: #0b034f;
    min-height: 500px;
    margin-top: 150px;
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
export const DMALProposalFormSpan = styled.span`
  color: #c99b3b;
  font-size: 24px;
  margin-left: 5px;
  font-weight: 500;
`;

export const DMALProposalFormName = styled.input`
  type:"text";
  background-color:white;
  border-radius:5px;
  padding:12px;
  outline:none;
  font-size:18px;
  margin-bottom:20px;
`;

export const DMALProposalFormBtn = styled.button`
  background-color: #c99b3b;
  font-size: 18px;
  cursor: pointer;
  margin-bottom: 20px;
  padding: 12px;
  padding-left: 25px;
  padding-right: 25px;
  border-radius: 7px;
  align-self: left;
  border-width: 0px;
  color: white;
`;

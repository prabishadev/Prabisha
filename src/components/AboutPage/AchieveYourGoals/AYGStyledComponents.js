import styled from "styled-components";
import "typeface-raleway";

export const AYGContainer = styled.div`
  @media (min-width: 900px) {
    font-family: "Raleway";
    height: 750px;
    background-color: #d5d1f678;
    padding-top: 150px;
    padding-left: 130px;
    margin-top: 50px;
    display: flex;
  }
  @media (max-width: 900px) {
    font-family: "Raleway";
    min-height: 850px;
    background-color: #d5d1f678;
    padding-top: 150px;
    padding-bottom: 30px;
    padding-left: 9px;
    margin-top: 50px;
  }
`;

export const WhatWeDoHead = styled.h1`
  color: #c99b3b;
  font-family: "Raleway";
`;


export const AYGLeftContainer = styled.div`
  @media (min-width: 900px) {
    width: 40vw;
  }
  @media (max-width: 900px) {
    padding: 5px;
  }
`;

export const AYGDescription = styled.p`
  font-family: "Raleway", sans-serif;
  color: black;
  font-size: 16px;
  font-weight: 500;
  line-height: 28px;
`;

export const AYGRightContainer = styled.div`
  @media (min-width: 900px) {
    width: 45vw;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  @media (max-width: 900px) {
    width: 90vw;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
`;



export const AYGCard = styled.div`
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
  width: 60%;
  height:60%;
  display: flex;
  flex-direction: column;
  @media(max-width:768px){
    width:70%;
  }
`;
export const AYGTitle = styled.span`
  font-size: 24px;
  font-weight: 600;
  text-align: center;
`;
export const AYGForm = styled.form`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
`;
export const AYGGroup = styled.div`
  position: relative;
`;
export const AYGInput = styled.input`
  padding: 10px;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  margin-bottom: 30px;
  outline: 0;
  width: 90%;
  background-color: transparent;
  &:focus {
    border-color: #3366cc;
  }
  &:placeholder-shown {
    top: 10px;
    background-color: transparent;
  }
`;

export const AYGLabel = styled.label`
  font-size: 14px;
  color: rgb(99, 102, 102);
  position: absolute;
  top: -10px;
  left: 10px;
  background-color: #fff;
  transition: all .3s ease;
  &:focus {
    border-color: #3366cc;
  }
  ${AYGInput}:placeholder-shown+ ~ &{
    top: 10px;
    background-color: transparent;
  }
  ${AYGInput}:focus ~ &{
    top: -10px;
    left: 10px;
    background-color: #fff;
    color: #3366cc;
    font-weight: 600;
    font-size: 14px;
  }
`;
export const AYGSelect = styled.select`
  padding: 10px;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  margin-bottom: 20px;
  outline: 0;
  width: 96%;
  background-color: transparent;
`;
export const AYGOption = styled.option`
  font-weight: 500;
  font-size: 1rem;
  color:#535859;
  font-family: "Raleway";
  @media(max-width:768px){
    font-size: 0.8rem;
  }
`;

export const AYGButton = styled.button`
  background-color: #c99b3b;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    background-color: #755615;
  }
`;


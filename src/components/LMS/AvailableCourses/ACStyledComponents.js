import styled from "styled-components";

import "typeface-raleway";

import "typeface-open-sans";
import { FaSearch } from 'react-icons/fa';


export const ACContainer = styled.div`
  min-height: 700px;
  background-color: linear-gradient(to right, #d3cce3, #e9e4e0);
  padding: 30px;
  @media (min-width: 900px) {
    padding-left: 10px;
    padding-right: 10px;
  }
`;

export const ACTitle = styled.h1`
font-family: "Raleway", sans-serif;
color:#0B034F;
  text-align: center;
  margin:50px;
`;

export const TabContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  border-bottom-style: solid;
  border-bottom-width: 3px;
  border-color: #C99B3B;
`;

export const TabItem = styled.div`
  padding: 15px;
  padding-left: 30px;
  padding-right: 30px;
  cursor: pointer;
  background-color: ${(props) => (props.active ? "#cced0e" : "#0b034f")};
  color: ${(props) => (props.active ? "black" : "White")};
  border-top-left-radius: 10px;
  border-color: #C99B3B;
  border-style: solid;
  border-top-right-radius: 10px;
  border-bottom-width: 0px;
  @media screen and (max-width: 425px) {
    height: 25px;
    font-size: 10px;
  }
`;

export const TabContent = styled.div`
  padding: 5px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin:0px !important;
`;


export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 5px;
  height:50px;
  justify-content:space-between;
  margin:30px;
  border-radius:15px;
  cursor:pointer;
`;


export const SearchInput = styled.input`
  border: none;
  outline: none;
  width:85%;
  font-size: 18px;
  margin-left:5px;
`;

export const SearchIcon = styled(FaSearch)`
  color: #666;
  font-size: 30px;
  align-self:right;
  margin-right:15px;
`;

import styled from "styled-components";
import "typeface-open-sans";

export const ACContainer = styled.div`
  min-height: 700px;
  background-color: linear-gradient(to right, #d3cce3, #e9e4e0);
  padding: 30px;
  @media (min-width: 900px) {
    padding-left: 130px;
    padding-right: 130px;
  }
`;

export const ACTitle = styled.h1`
  font-family: "Open Sans", sans-serif;
  text-align: center;
  margin-top:100px;
  color:#0B034F;
`;

export const TabContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  border-bottom-style: solid;
  border-bottom-width: 4px;
  border-color: #f12711;
`;

export const TabItem = styled.div`
  padding: 15px;
  padding-left: 30px;
  padding-right: 30px;
  cursor: pointer;
  background-color: ${(props) => (props.active ? "#11c7f5" : "#ffffff")};
  color: ${(props) => (props.active ? "#fff" : "#333")};
  border-top-left-radius: 10px;
  border-color: #b6b8b7;
  border-style: solid;

  border-top-right-radius: 10px;
  border-bottom-width: 0px;
`;

export const TabContent = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

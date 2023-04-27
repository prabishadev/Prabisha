import styled from "styled-components";
import "typeface-muli";
import { Link } from "react-router-dom";
import "typeface-roboto";

export const CourseCard = styled.div`
  height: 350px;
  width: 250px;
  margin: 15px;
  border-radius: 10px;
 border: 1px solid #c4c2be;
  transition: all 0.5s;
  &:hover {
    border: 1px solid #c99b3b;
    transform: scale(1.1);
  }
  
  &:active {
    transform: scale(0.95) rotateZ(1.7deg);
  }
`;

export const CourseInfo = styled.div`
margin:10px;
margin-bottom: 5px;
`


export const CourseImage = styled.img`
  height:150px;
  width: 100%;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

export const CourseTitle = styled.h2`
  font-weight: 900;
  font-size: 18px;
  line-height: 24px;
  color: #0B034F;
  font-family: "Muli";
`;

export const CourseDescription = styled.p`
    position: relative;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    font-family:"Muli sans-serif"
    text-overflow: ellipsis;
    overflow: hidden;
`;

export const StartBtn = styled.div`
 background-color: #0b034f;
  padding: 10px;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;
  box-shadow: 0 0 20px #eee;
  border-radius: 10px;
  display: block;
  font-weight: 600;
`;

export const LinkItem = styled(Link)`
  text-decoration: none;
`;




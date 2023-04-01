import styled from "styled-components";
import "typeface-muli";
import { Link } from "react-router-dom";
import "typeface-roboto";

export const CourseCard = styled.div`
  min-height: 400px;
  width: 300px;
  margin: 30px;
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

export const CourseImage = styled.img`
  height: 200px;
  width: 100%;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

export const CourseTitle = styled.h2`
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #424242;
  margin-left: 10px;
  font-family: "Muli";
`;

export const CourseDescription = styled.p`
    position: relative;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    height: 90px;
    width: 100%;
    min-width: 230px;
    font-family:"Muli sans-serif"
    text-overflow: ellipsis;
    overflow: hidden;
    flex: 1;
    padding:10px;
    padding-right:10px;
}
`;

export const StartBtn = styled.div`
  background-image: linear-gradient(
    to right,
    #ff512f 0%,
    #f09819 51%,
    #ff512f 100%
  );
  margin: 10px;
  padding: 15px 45px;
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

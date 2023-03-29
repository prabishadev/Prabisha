import styled from "styled-components";
import "typeface-raleway";


export const BlogCard = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
  min-height:300px;
  margin: 30px 0 30px 0;
  @media screen and (max-width: 767px) {
    display:flex;
    flex-direction: column;
    margin-bottom: 15px;
    padding:10px;
    width:90%;
  }
  float: left;
  transition: .5s linear;
  position: relative;
  overflow: hidden;
  background: transparent;
&:before {
  position: absolute;
  content: '';
  left: 0;
  bottom: 0;
  height: 2px;
  width: 100%;
  border-bottom: 2px solid transparent;
  border-left: 2px solid transparent;
  box-sizing: border-box;
  transform: translateX(100%);
}
&:after {
  position: absolute;
  content: '';
  top: 0;
  left: 0;
  width: 100%;
  height: 2px;
  border-top: 2px solid transparent;
  border-right: 2px solid transparent;
  box-sizing: border-box;
  transform: translateX(-100%);
}
&:hover {
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
}
&:hover:before {
  border-color: #0B034F;
  height: 100%;
  transform: translateX(0);
  transition: .3s transform linear, .3s height linear .3s;
}
&:hover:after {
  border-color: #0B034F;
  height: 100%;
  transform: translateX(0);
  transition: .3s transform linear, .3s height linear .5s;
}
`

export const BlogDescriptionContainer = styled.div`
width:50%;
@media screen and (max-width: 768px) {
  width:95%;
}
`

export const BlogImage = styled.img`
  border-top-left-radius:30px;
  border-bottom-right-radius:30px;
  width: 35%;
  margin-right:45px;
  margin-left:55px;
  cursor:pointer;
  @media screen and (min-width:768px) {
    height:230px;
    margin-top:20px;
    border-top-left-radius:50px;
    border-bottom-right-radius:50px;
  }
  @media screen and (max-width: 768px) {
    width:90%;
    margin:0;
  }
`;

export const BlogTitle = styled.h2`
  font-family: "Raleway";
  color: #c99b3b !important;
  text-decoration: underline !important;
`;

export const BlogKeyTerm = styled.h3`
  font-weight: 400;
  font-family: "Raleway";
  color: #c99b3b !important;
  text-decoration: underline !important;
`;

export const BlogDescription = styled.p`
  color: #333;
  font-family: "Raleway";
  line-height: 29px;
  font-size: 18px;
`;
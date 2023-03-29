import styled from "styled-components";

export const PortfolioSection = styled.div`
  box-sizing: border-box;
  background-color: #ffffff;
`;
export const PortfolioHead = styled.div`
  background-image:url("https://images.unsplash.com/photo-1518655048521-f130df041f66?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydGZvbGlvJTIwYmFja2dyb3VuZHxlbnwwfHwwfHw%3D&w=1000&q=80");
  background-size:cover;
  height:80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size:3rem;
  font-weight:bold;
  margin-bottom:none;
  @media(max-width:768px){
    background-image:url("https://img.freepik.com/free-photo/color-squares-arrangement-top-view_23-2149345116.jpg?size=626&ext=jpg");
    background-size:cover;
    color:#fff;
  }
`;
export const TabsAndImagesCont = styled.div`
  background-color: #e6e7e8;
`;

export const TabsUnlist = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 90px 50px 50px 50px;
  @media (max-width: 768px) {
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-center: center;
    align-items: center;
  }
`;

export const ImagesUnlist = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px;
  flex-wrap: wrap;
  flex-grow: 0;
`;

import styled from "styled-components";
import "typeface-raleway";

export const FooterMainContainer = styled.div`
  background-color: #0b094f;
  font-family: "Raleway" !important;
`;
export const FirstContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  flex-wrap: wrap;
  flex-grow: 0;
  color: #d9dedb;
  padding: 30px 30px 10px 30px;
  @media (min-width: 768px) and (max-width: 1199px) {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-wrap: wrap;
  }
  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
`;
export const FollowusContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  flex-grow: 0;
  width: 15%;
  padding: 10px 10px 10px 10px;
  @media (max-width: 767px) {
    width: 100%;
  }
  @media (min-width: 768px) and (max-width: 1199px) {
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin-right: 20px;
  }
`;
export const FollowusText = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
`;

export const IconsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  flex-grow: 0;
  @media (max-width: 1199px) {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
  }
`;
export const EachIcon = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.bgColor};
  padding: 10px;
  color: #ffffff;
  height: 1.5rem;
  width: 1.5rem;
  margin-right: 15px;
  margin-bottom: 15px;
  border-radius: 5px;
`;
export const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 15%;
  @media (max-width: 767px) {
    width: 100%;
  }
  @media (min-width: 768px) and (max-width: 1199px) {
    width: 40%;
    margin-right: 20px;
  }
`;

export const LinksText = styled.h1`
  font-size: 1.3rem;
  font-weight: 450;
  margin-bottom: 20px;
  color: #ffffff;
`;
export const Link = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.05rem;
  font-weight: 400;
  margin-bottom: 10px;
  color: #d9dedb;
  text-decoration: none;
`;
export const HorizontalLine = styled.h1`
  width: 100%;
  height: 1px;
  color: #bf994d;
  background-color: #bf994d;
`;
export const ImagesContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 70%;
  padding-top: 5px;
  @media (max-width: 355px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const Images = styled.img`
  width: 5rem;
  height: 5rem;
  @media (max-width: 767px) {
    width: 4rem;
    height: 4rem;
    margin: 5px;
  }
`;

export const SecondContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0px 20px 30px 20px;
  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 0px 0px 20px 0px;
  }
`;
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  @media (max-width: 767px) {
    margin: 20px;
  }
`;

export const SubscribeText = styled.h1`
  color: #ffffff;
  font-size: 1.3rem;
  font-weight: 500;
`;

export const InputContainer = styled.div``;
export const Input = styled.input`
  padding: 12px;
  border: none;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
`;
export const SubButton = styled.button`
  padding: 12px;
  border: none;
  background-color: #c4922d;
  color: #ffffff;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
`;
export const CoprightText = styled.h1`
  color: #ffffff;
  font-size: 1rem;
  font-weight: 400;
  text-align: center;
`;

export const ThirdContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #0f0f0f;
  padding: 8px;
`;

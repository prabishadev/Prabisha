import styled from "styled-components";
import { Link } from "react-router-dom";
export const LoginContainer = styled.div`
  background-image: url("https://res.cloudinary.com/dg0telgxq/image/upload/v1680081328/blurry-gradient-haikei_1_xukx0u.svg");
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  @media screen and (max-width: 768px) {
    padding: 20px;
    min-height: 130vh;
  }
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15px;
  background-color: #07182e;
  width: 95%;
  min-height: 100vh;
  border-radius: 10px;
  @media screen and (max-width: 675px) {
    padding: 10px;
    margin-top: 50px;
  }
`;
export const Heading = styled.h2`
  color: #fff;
  font-size: 25px;
  text-align: center;
  text-decoration: underline;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 15px;
  outline: none;
`;

export const Cont1 = styled.div`
  display: flex;
  @media screen and (max-width: 675px) {
    display: flex;
    flex-direction: column;
  }
`;
export const Cont = styled.div`
  display: flex;
  flex-direction: column;
  width: 47%;
  margin-right: 40px;
  @media screen and (max-width: 675px) {
    width: 90%;
  }
`;

export const Label = styled.label`
  color: #fff;
  font-size: 25px;
  margin-bottom: 5px;
`;

export const Input = styled.input`
  width: 80%;
  margin-bottom: 15px;
  height: 30px;
  padding: 10px;
  border-radius: 10px;
  border: none;
  outline: none;
  @media screen and (max-width: 675px) {
    width: 90%;
  }
`;
export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  width: 500px;
  height: 45px;
  font-weight: bold;
  border: none;
  font-size: 15px;
  font-family: "Roboto", sans-serif;
  cursor: pointer;
  margin-top: 15px;

  border-radius: 15px;
  background: #ffffff;
  @media screen and (max-width: 767px) {
    width: 200px;
  }
`;

export const LinkItem = styled(Link)`
  text-decoration: none;
`;

export const Loader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 40vh;
`;

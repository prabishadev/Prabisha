import { useState } from "react";
import { Navigate } from "react-router-dom";

import axios from "axios";

import {
  LoginContainer,
  LoginForm,
  Input,
  Heading,
  Label,
  InputContainer,
  LinkItem,
  LoginButton,
} from "./LoginStyledComponents";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    // const userDetails = { email, password };
    const url = "https://login-register-api-9xek.onrender.com/login";
    // console.log(userDetails);

    try {
      const response = await axios.post(url, {
        email,
        password,
      });
      if (response.data.status === 200) {
        alert("Login Success");
        <Navigate to="/lms" />;
      } else {
        alert("Login Failed");
        <Navigate to="/register" />;
      }
    } catch (error) {
      console.log(error.response.data);
    }
  };

  return (
    <LoginContainer>
      <LoginForm onSubmit={handleSubmit}>
        <Heading>Sign In</Heading>
        <InputContainer>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="text"
            placeholder="Enter Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="text"
            placeholder="Enter Password"
            onChange={(event) => setPassword(event.target.value)}
          />
        </InputContainer>
        <LoginButton type="submit" onClick={handleSubmit}>
          Login
        </LoginButton>
        <LinkItem to="/register">
          <LoginButton>Create an Account</LoginButton>
        </LinkItem>
      </LoginForm>
    </LoginContainer>
  );
};

export default Login;

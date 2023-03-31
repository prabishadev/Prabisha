import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import axios from "axios";

import {
  LoginContainer,
  LoginForm,
  Input,
  Heading,
  Label,
  InputContainer,
  LoginButton,
} from "./LoginStyledComponents";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //   const history = useNavigate();

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
      console.log(response.data);
      if (response.data.message === "User authenticated successfully") {
        alert("Login Success");
      } else {
        alert("Login Failed");
      }
    } catch (error) {
      console.log(error.response.data);
    }

    // const options = {
    //   method: "POST",
    //   mode: "no-cors",
    //   body: JSON.stringify(userDetails),
    // };
    // console.log(options.body);
    // const response = await fetch(url, options);
    // const data = await response.json();
    // console.log(response);
    // console.log(data);

    // if (response.ok) {
    //   alert("Login Success");
    // } else {
    //   alert("Login Failed");
    // }
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
        <LoginButton>Create an Account</LoginButton>
      </LoginForm>
    </LoginContainer>
  );
};

export default Login;

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BallTriangle } from "react-loader-spinner";
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
  Loader,
} from "./LoginStyledComponents";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setLoading] = useState(false);

  const Loading = () => {
    return (
      <Loader>
        <BallTriangle color="#00BFFF" height={80} width={80} />
      </Loader>
    );
  };

  const handleSubmit = async (event) => {
    setLoading(true);
    event.preventDefault();

    const url = "https://login-register-api-9xek.onrender.com/login";

    try {
      const response = await axios.post(url, {
        email,
        password,
      });
      if (email === "" || password === "") {
        navigate("/register");
      } else if (response.data.status === 200) {
        setLoading(false);
        navigate("/lms-available");
      } else {
        setLoading(false);
        alert("Login Failed");
        navigate("/register");
      }
    } catch (error) {
      console.log(error.response.data);
    }
  };

  return (
    <>
      {isLoading ? (
        Loading()
      ) : (
        <LoginContainer>
          <LoginForm onSubmit={handleSubmit}>
            <Heading>Login</Heading>
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
                type="password"
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
      )}
    </>
  );
};

export default Login;

import { useState } from "react";
// import axios from "axios";
import { useNavigate } from "react-router-dom";
import { BallTriangle } from "react-loader-spinner";

import {
  LoginContainer,
  LoginForm,
  Input,
  Heading,
  Label,
  InputContainer,
  LinkItem,
  Cont,
  Cont1,
  ButtonContainer,
  Button,
  Loader,
} from "./RegisterStyledComponents";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [dob, setDob] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const history = useNavigate();
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
    const data = {
      firstName,
      lastName,
      email,
      phoneNumber,
      password,
      confirmPassword,
      dob,
       address,
    };

    const url = "https://login-register-api-160523.onrender.com/register";

    // console.log(userDetails);

    try {
      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      
      // If you expect a JSON response:
      const responseData = await response.json();
      console.log(responseData)
      // Make sure to handle any error scenarios
      if (response.ok) {
      // const response = await axios.post(url, data);
      // console.log(response.status);
      // if (response.data.message === "Registration successful") {
        setLoading(false);
        history("/lms-available");
      } else {
        setLoading(false);
        alert("Registration  Failed");
        history("/register");
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
            <Heading>Registration</Heading>
            <InputContainer>
              <Cont1>
                <Cont>
                  <Label htmlFor="firstname">First Name</Label>
                  <Input
                    id="firstname"
                    type="text"
                    placeholder="Enter First Name"
                    value={firstName}
                    onChange={(event) => setFirstName(event.target.value)}
                  />
                </Cont>
                <Cont>
                  <Label htmlFor="lastname">Last Name</Label>
                  <Input
                    id="lastname"
                    type="text"
                    placeholder="Enter Last Name"
                    value={lastName}
                    onChange={(event) => setLastName(event.target.value)}
                  />
                </Cont>
              </Cont1>
              <Cont1>
                <Cont>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="text"
                    placeholder="Enter Email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                  />
                </Cont>
                <Cont>
                  <Label htmlFor="phonenumber">Phone Number</Label>
                  <Input
                    id="phonenumber"
                    placeholder="Enter Phone Number"
                    type="tel"
                    value={phoneNumber}
                    onChange={(event) => setPhoneNumber(event.target.value)}
                  />
                </Cont>
              </Cont1>
              <Cont1>
                <Cont>
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    placeholder="Enter Password"
                    type="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                  />
                </Cont>
                <Cont>
                  <Label htmlFor="confirmpassword">Confirm Password</Label>
                  <Input
                    type="password"
                    id="confirmpassword"
                    value={confirmPassword}
                    placeholder="Confirm Password"
                    onChange={(event) => setConfirmPassword(event.target.value)}
                  />
                </Cont>
              </Cont1>
              <Cont1>
                <Cont>
                  <Label htmlFor="dob">Date Of Birth</Label>
                  <Input
                    id="dob"
                    placeholder="Enter Date Of Birth"
                    type="date"
                    value={dob}
                    onChange={(event) => setDob(event.target.value)}
                  />
                </Cont>
                <Cont>
                  <Label htmlFor="address">Address</Label>
                  <Input
                    type="text"
                    id="address"
                    placeholder="Enter Address"
                    value={address}
                    onChange={(event) => setAddress(event.target.value)}
                  />
                </Cont>
              </Cont1>
            </InputContainer>
            <ButtonContainer>
              <Button type="submit" onClick={handleSubmit}>
                Create Account
              </Button>
              <LinkItem to="/login">
                <Button>Login</Button>
              </LinkItem>
            </ButtonContainer>
          </LoginForm>
        </LoginContainer>
      )}
    </>
  );
};

export default Register;

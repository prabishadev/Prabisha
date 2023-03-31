import {
  LoginContainer,
  LoginForm,
  Input,
  Heading,
  Label,
  InputContainer,
  Cont,
  Cont1,
  ButtonContainer,
  Button,
} from "./RegisterStyledComponents";

const Registration = () => {
  return (
    <LoginContainer>
      <LoginForm>
        <Heading>Registration</Heading>
        <InputContainer>
          <Cont1>
            <Cont>
              <Label htmlFor="firstname">First Name</Label>
              <Input
                id="firstname"
                type="text"
                placeholder="Enter First Name"
              />
            </Cont>
            <Cont>
              <Label htmlFor="lastname">Last Name</Label>
              <Input id="lastname" type="text" placeholder="Enter Last Name" />
            </Cont>
          </Cont1>
          <Cont1>
            <Cont>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="text" placeholder="Enter Email" />
            </Cont>
            <Cont>
              <Label htmlFor="phonenumber">Phone Number</Label>
              <Input
                id="phonenumber"
                type="text"
                placeholder="Enter Phone Number"
              />
            </Cont>
          </Cont1>
          <Cont1>
            <Cont>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter Password"
              />
            </Cont>
            <Cont>
              <Label htmlFor="confirmpassword">Confirm Password</Label>
              <Input
                type="password"
                id="confirmpassword"
                placeholder="Confirm Password"
              />
            </Cont>
          </Cont1>
          <Cont1>
            <Cont>
              <Label htmlFor="dob">DOB</Label>
              <Input id="dob" type="text" placeholder="Enter DOB" />
            </Cont>
            <Cont>
              <Label htmlFor="address">Address</Label>
              <Input type="text" id="address" placeholder="Enter Password" />
            </Cont>
          </Cont1>
        </InputContainer>
        <ButtonContainer>
          <Button>Create Account</Button>
        </ButtonContainer>
      </LoginForm>
    </LoginContainer>
  );
};

export default Registration;

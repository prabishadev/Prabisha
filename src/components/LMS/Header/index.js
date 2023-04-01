import {
  HeaderContainer,
  Logo,
  NavContainer,
  NavItem,
  LinkItem,
  ProfileIconContainer,
  Profile,
  MobileHeader,
  Bars,
  ButtonContainer,
  Handlers,
  Close,
  MobileProfileIconContainer,
} from "./HeaderStyledComponents";

import React, { useState } from "react";

const Header = () => {
  const [selectedNav, setSelectedNav] = useState("available");
  const [clicked, setClicked] = useState(false);
  const handleNavClick = (nav) => {
    setSelectedNav(nav);
  };

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <>
      <MobileHeader>
        <MobileProfileIconContainer>
          <h4>User</h4>
          <Profile
            src="https://i.pinimg.com/originals/d3/7b/02/d37b020e87945ad7f245e48df752ed03.jpg"
            alt="profile"
          />
        </MobileProfileIconContainer>
        <ButtonContainer onClick={handleClick}>
          <Handlers>{clicked ? <Bars /> : <Close />}</Handlers>>
        </ButtonContainer>
      </MobileHeader>
      <HeaderContainer isClicked={clicked}>
        <Logo
          src="https://res.cloudinary.com/dg0telgxq/image/upload/v1680240144/Screenshot_2023-03-31_105047_ztn5q2.png"
          alt="logo"
        />
        <NavContainer>
          <LinkItem to="/lms-available">
            <NavItem
              active={selectedNav === "available"}
              onClick={() => handleNavClick("available")}
            >
              Available Courses
            </NavItem>
          </LinkItem>
          <LinkItem to="/lms-premium">
            <NavItem
              active={selectedNav === "premium"}
              onClick={() => handleNavClick("premium")}
            >
              Premium Courses
            </NavItem>
          </LinkItem>
          <LinkItem to="/lms-certificates">
            <NavItem
              active={selectedNav === "certificates"}
              onClick={() => handleNavClick("certificates")}
            >
              Achieved Certificates
            </NavItem>
          </LinkItem>
          <LinkItem to="/lms-score">
            <NavItem
              active={selectedNav === "score"}
              onClick={() => handleNavClick("score")}
            >
              Learning Score
            </NavItem>
          </LinkItem>
        </NavContainer>
        <ProfileIconContainer>
          <h4>User</h4>
          <Profile
            src="https://i.pinimg.com/originals/d3/7b/02/d37b020e87945ad7f245e48df752ed03.jpg"
            alt="profile"
          />
        </ProfileIconContainer>
      </HeaderContainer>
    </>
  );
};

export default Header;

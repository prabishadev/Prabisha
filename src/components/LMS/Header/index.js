import {
  HeaderContainer,
  Logo,
  Logout,
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
  LogoutBtn,
  LogoutBtnMobile,
  TabIcons,LMS
} from "./HeaderStyledComponents";

import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [selectedNav, setSelectedNav] = useState("available");
  const [clicked, setClicked] = useState(false);
  const score = 0;
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
          <Handlers>{clicked ? <Bars /> : <Close />}</Handlers>
        </ButtonContainer>
      </MobileHeader>
      <HeaderContainer isClicked={clicked}>
        <div style ={{display : 'flex', justifyContent:"center",alignItems:"center"}}>
        <Logo
          src="https://www.prabisha.co.uk/wp-content/uploads/2022/09/PC-Logo-NEW-for-Website-Page-PNG-1-300x140.png"
          alt="logo"
        />
        <LMS>LMS</LMS>
        </div>
        <NavContainer>
          <LinkItem to="/lms-available">
            <NavItem
              active={selectedNav === "available"}
              onClick={() => handleNavClick("available")}
            >
            <TabIcons src="https://cdn.iconscout.com/icon/premium/png-256-thumb/online-course-2184643-1830185.png?f=webp&w=256"  alt="avail"/>
             Available Courses:  {65}
            </NavItem>
          </LinkItem>
          <LinkItem to="/lms-premium">
            <NavItem
              active={selectedNav === "premium"}
              onClick={() => handleNavClick("premium")}
            >
             <TabIcons src="https://thumbs.dreamstime.com/b/finished-course-line-icon-concept-sign-outline-vector-illustration-linear-symbol-173785697.jpg" alt="completed"/>
              Courses Completed  {score}
            </NavItem>
          </LinkItem>
          <LinkItem to="/lms-certificates">
            <NavItem
              active={selectedNav === "certificates"}
              onClick={() => handleNavClick("certificates")}
            >
              <TabIcons  src="https://cdn-icons-png.flaticon.com/512/7238/7238706.png" alt="cert"/>Certificates {score}
            </NavItem>
          </LinkItem>
          <LinkItem to="/lms-score">
            <NavItem
              active={selectedNav === "score"}
              onClick={() => handleNavClick("score")}
            >
             <TabIcons src="https://e7.pngegg.com/pngimages/866/555/png-clipart-switzerland-dacadoo-health-score-business-innovation-icons-company-text.png"
              alt="score"/> Score  {score}
            </NavItem>
          </LinkItem>
          <Link to="/">
            <LogoutBtnMobile>Logout <Logout/></LogoutBtnMobile> 
          </Link>
        </NavContainer>
        <ProfileIconContainer>
          <h4> </h4>
          <Profile
            src="https://i.pinimg.com/originals/d3/7b/02/d37b020e87945ad7f245e48df752ed03.jpg"
            alt="profile"
          />
          <LinkItem to="/">
            <LogoutBtn>Logout <Logout/></LogoutBtn>
          </LinkItem>
        </ProfileIconContainer>
      </HeaderContainer>
    </>
  );
};

export default Header;

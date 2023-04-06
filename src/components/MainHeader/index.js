import { useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import {
  Section1,
  IconSection,
  ContactInfo1,
  ContactInfo2,
  Imagelogo,
  Text,
  ContactContainer,
  Section21,
  Section2logo,
  LinkItem,
  Section2NavItems,
  NavItem,
  BtnItem,
  MobileSectionNavbar,
  LinkedinIcon,
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  YoutubeIcon,
  PhoneIcon,
  MailIcon,
  Menu,
  Sidebar,
  CloseButton,
} from "./HeaderStyledComponents";

const MainHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <Section1>
        <IconSection>
          <LinkedinIcon />
          <FacebookIcon />
          <InstagramIcon />
          <TwitterIcon />
          <YoutubeIcon />
        </IconSection>
        <ContactContainer>
          <ContactInfo1>
            <PhoneIcon />
            <Text>+44(0)7867090363</Text>
          </ContactInfo1>
          <ContactInfo2>
            <MailIcon />
            <Text>care@prabisha.co.uk</Text>
          </ContactInfo2>
        </ContactContainer>
      </Section1>
      <MobileSectionNavbar>
        <Section2logo href="/">
          <Imagelogo
            className="logo"
            src="https://www.prabisha.co.uk/wp-content/uploads/2022/09/PC-Logo-NEW-for-Website-Page-PNG-1-300x140.png"
            alt="logo"
          />
        </Section2logo>
        <Menu onClick={toggleMenu} />
        <Sidebar style={{ width: isOpen ? "250px" : "0" }}>
          <CloseButton onClick={closeMenu}>×</CloseButton>
          <LinkItem to="/">
            <NavItem>HOME</NavItem>
          </LinkItem>
          <LinkItem to="/services">
            <NavItem>SERVICES</NavItem>
          </LinkItem>
          <LinkItem to="/portfolio">
            <NavItem>PORTFOLIO</NavItem>
          </LinkItem>
          <LinkItem to="/blogs">
            <NavItem>BLOG</NavItem>
          </LinkItem>
          <LinkItem to="/about">
            <NavItem>ABOUT</NavItem>
          </LinkItem>
          <LinkItem to="/contact">
            <NavItem>CONTACT</NavItem>
          </LinkItem>
          <LinkItem to="/register">
            <NavItem>REGISTER</NavItem>
          </LinkItem>
          <LinkItem to="/login">
            <NavItem>
              LOGIN <AiOutlineArrowRight />
            </NavItem>
          </LinkItem>
        </Sidebar>
      </MobileSectionNavbar>
      <Section21>
        <Section2logo>
          <a href="/">
            <Imagelogo  
              className="logo"
              src="https://www.prabisha.co.uk/wp-content/uploads/2022/09/PC-Logo-NEW-for-Website-Page-PNG-1-300x140.png"
              alt="logo"
            />
          </a>
          <LinkItem to="/">
            <NavItem>HOME</NavItem>
          </LinkItem>
          <LinkItem to="/services">
            <NavItem>SERVICES</NavItem>
          </LinkItem>
          <LinkItem to="/portfolio">
            <NavItem>PORTFOLIO</NavItem>
          </LinkItem>
          <LinkItem to="/blogs">
            <NavItem>BLOG</NavItem>
          </LinkItem>
          <LinkItem to="/about">
            <NavItem>ABOUT</NavItem>
          </LinkItem>
          <LinkItem to="/contact">
            <NavItem>CONTACT</NavItem>
          </LinkItem>
        </Section2logo>
        <Section2NavItems>
          <LinkItem to="/register">
            <BtnItem>REGISTER</BtnItem>
          </LinkItem>
          <LinkItem to="/login">
            <BtnItem>
              LOGIN <AiOutlineArrowRight />
            </BtnItem>
          </LinkItem>
        </Section2NavItems>
      </Section21>
    </div>
  );
};

export default MainHeader;

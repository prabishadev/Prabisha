import { BsLinkedin, BsFacebook, BsTwitter } from "react-icons/bs";
import { FaCaretRight, FaLocationArrow } from "react-icons/fa";
import { MdCall } from "react-icons/md";
import { TfiInstagram, TfiYoutube, TfiEmail } from "react-icons/tfi";
import {
  FooterMainContainer,
  FirstContainer,
  FollowusContainer,
  FollowusText,
  IconsContainer,
  EachIcon,
  LinksContainer,
  LinksText,
  Link,
  HorizontalLine,
  SecondContainer,
  ImagesContainer,
  Images,
  FormContainer,
  SubscribeText,
  InputContainer,
  Input,
  SubButton,
  ThirdContainer,
  CoprightText,
} from "./FooterStyledComponents";
const Footer = () => {
  return (
    <FooterMainContainer>
      <FirstContainer>
        <FollowusContainer>
          <a
            href="https://www.prabisha.co.uk/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              style={{ height: "4rem", width: "8rem" }}
              src="https://prabisha.co.uk/wp-content/uploads/2022/09/PC-Logo-NEW-for-Website-Page-PNG.png"
              alt="logo"
            />
          </a>
          <div>
            <FollowusText>Follow Us</FollowusText>
            <IconsContainer>
              <EachIcon
                bgColor={"#0072b1"}
                href="https://www.linkedin.com/company/prabishauk/mycompany/"
                target="_blank"
                rel="noreferrer"
              >
                <BsLinkedin style={{ fontSize: "1.2rem" }} />
              </EachIcon>
              <EachIcon
                bgColor={"#3b5998"}
                href="https://www.facebook.com/prabishac"
                target="_blank"
                rel="noreferrer"
              >
                <BsFacebook style={{ fontSize: "1.2rem" }} />
              </EachIcon>
              <EachIcon
                bgColor={"#a334a1"}
                href="https://www.instagram.com/prabishauk/"
                target="_blank"
                rel="noreferrer"
              >
                <TfiInstagram style={{ fontSize: "1.2rem" }} />
              </EachIcon>
              <EachIcon
                bgColor={"#00acee"}
                href="https://twitter.com/prabishaUK"
                target="_blank"
                rel="noreferrer"
              >
                <BsTwitter style={{ fontSize: "1.2rem" }} />
              </EachIcon>
              <EachIcon
                bgColor={"#c4302b"}
                href="https://www.youtube.com/@PrabishaConsulting"
                target="_blank"
                rel="noreferrer"
              >
                <TfiYoutube style={{ fontSize: "1.2rem" }} />
              </EachIcon>
            </IconsContainer>
          </div>
        </FollowusContainer>
        <LinksContainer>
          <LinksText>Quick Links</LinksText>
          <Link
            href="/"
            target="_self"
            rel="noreferrer"
          >
            <FaCaretRight /> Home
          </Link>
          <Link
            href="/about"
            target="_self"
            rel="noreferrer"
          >
            <FaCaretRight /> About
          </Link>
          <Link
            href="/contact"
            target="_self"
            rel="noreferrer"
          >
            <FaCaretRight /> Contact
          </Link>
          <Link
            href="/"
            target="_self"
            rel="noreferrer"
          >
            <FaCaretRight /> Payment
          </Link>
          <Link
            href="/"
            target="_self"
            rel="noreferrer"
          >
            <FaCaretRight /> Site Map
          </Link>
        </LinksContainer>
        <LinksContainer>
          <LinksText>Services</LinksText>
          <Link
            href="/services"
            target="_self"
            rel="noreferrer"
          >
            <FaCaretRight /> Website Design
          </Link>
          <Link
            href="/services"
            target="_self"
            rel="noreferrer"
          >
            <FaCaretRight /> Digital Marketing
          </Link>
          <Link
            href="/services"
            target="_self"
            rel="noreferrer"
          >
            <FaCaretRight /> Google Ads
          </Link>
          <Link
            href="/services"
            target="_self"
            rel="noreferrer"
          >
            <FaCaretRight /> Graphic Designing
          </Link>
          <Link
            href="/services"
            target="_self"
            rel="noreferrer"
          >
            <FaCaretRight /> Photo Editing
          </Link>
        </LinksContainer>
        <LinksContainer>
          <LinksText>Contact Us</LinksText>
          <Link
            href="mailto:care@prabisha.co.uk"
            target="_blank"
            rel="noreferrer"
          >
            <TfiEmail style={{ marginRight: "10px", marginTop: "3px" }} />
            care@prabisha.co.uk
          </Link>
          <Link href="tel:+447867090363" target="_blank" rel="noreferrer">
            <MdCall style={{ marginRight: "10px", marginTop: "3px" }} /> +44 (0)
            7867090363
          </Link>
          <Link
            href="https://www.google.com/maps/place/71,+75+Shelton+St,+London+WC2H+9JQ,+UK/@51.5153668,-0.1242559,18z/data=!4m6!3m5!1s0x487604ccab1f237b:0x436d7f0832fd499d!8m2!3d51.5148525!4d-0.123525!16s%2Fg%2F11ll1wzv7n"
            target="_blank"
            rel="noreferrer"
          >
            <FaLocationArrow
              style={{
                fontSize: "2rem",
                marginRight: "10px",
                marginTop: "3px",
              }}
            />{" "}
            71-75 Shelton St.,Covent Garden, London, UK - WC2H9JQ
          </Link>
        </LinksContainer>
      </FirstContainer>
      <HorizontalLine></HorizontalLine>
      <SecondContainer>
        <ImagesContainer>
          <Images
            src="https://www.prabisha.co.uk/wp-content/uploads/2022/09/common-msme-1.png"
            alt="brand-logo"
          />
          <Images
            src="https://www.prabisha.co.uk/wp-content/uploads/2022/09/common-google-rating-logo-1.png"
            alt="brand-logo"
          />
          <Images
            src="https://www.prabisha.co.uk/wp-content/uploads/2022/09/common-clutch-1.png"
            alt="brand-logo"
          />
          <Images
            src="https://www.prabisha.co.uk/wp-content/uploads/2022/09/home-goodfirms-review-1.png"
            alt="brand-logo"
          />
          <Images
            src="https://www.prabisha.co.uk/wp-content/uploads/2022/09/output-onlinepngtools-removebg-preview.png"
            alt="brand-logo"
          />
        </ImagesContainer>
        <FormContainer>
          <SubscribeText>Sign Up For New Offers</SubscribeText>
          <InputContainer>
            <Input type="email" placeholder="Email" />
            <SubButton type="submit">Submit</SubButton>
          </InputContainer>
        </FormContainer>
      </SecondContainer>
      <ThirdContainer>
        <CoprightText>
          © Prabisha Consulting Limited (UK). All Rights Reserved || Company
          Number – 1435951
        </CoprightText>
      </ThirdContainer>
    </FooterMainContainer>
  );
};

export default Footer;

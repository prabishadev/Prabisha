import MainHeader from "../../MainHeader";
import {
  Section2,
  TextSection,
  Text1,
  SpanText,
  Info,
  Text2,
  Section3,
  ButtonsContainer,
  Button,
  Section4,
  Section41,
  Section41Heading,
  Section41Container,
  Section42,
  Section42Info,
  Section5,
  Section51Container,
  ClickableButtonContainer,
  ClickableButton,
} from "./TopSectionStyledComponents";

const TopSection = () => {
  
  return (
    <>
      <MainHeader/>
      <Section2>
        <TextSection>
          <Text1>
            We help you <SpanText>SCALE UP </SpanText>your{" "}
            <SpanText>
              BUSINESS <br />
            </SpanText>
            and make your <SpanText>BRAND STAND OUT </SpanText>
          </Text1>
          <Info>
            Prabisha Consulting is a globally recognised & Digital Marketing
            Agency in London
          </Info>
          <Text2>
            Servicing 400<sup>+</sup> Brands Globally
          </Text2>
          <Text1>
            Your Business Partner That Drives <SpanText>Revenue</SpanText> |
            Success | <SpanText>Visibility</SpanText>| Quality
          </Text1>
        </TextSection>
      </Section2>
      <Section3>
        <Info>
          We're digital growth influencers, passionate about driving revenue &
          building brand with our transparent & impactful 360-degree digital
          marketing resources. Choose Prabisha Consulting as your marketing
          expert to skyrocket your brand's ecoversions & online visibility.
        </Info>
        <ButtonsContainer>
          <Button>LEARN MORE</Button>
          <Button>GET A FREE QUOTE</Button>
        </ButtonsContainer>
      </Section3>
      <Section4>
        <Section41>
          <Section41Heading>
            Empowering Businesses
            <br /> with Effective
          </Section41Heading>
          <Section41Container>Digital Marketing Campaigns</Section41Container>
        </Section41>
        <Section42>
          <Section42Info>
            Established in 2018, Prabisha Consulting is a fast-growing,
            technology-driven company offering Innovative, High Quality,
            Dependable and Affordable Business Growth Solutions to its valued
            customers across the globe. It has a highly experienced and
            professional team that specialises in the areas of IT Services
            (Website and Mobile App Development), Digital Marketing (SEO, Social
            Media Marketing, Content Development), and Corporate Branding
            (Graphic Design and Video Production). Prabisha helps 400+
            Start-ups, Medium and small-sized companies, and entrepreneurs
            accelerate their business growth and digital transformation! As a
            professional digital marketing agency in London, Prabisha team
            provides customisable services to London, Prabisha team provides
            customisable services to enhance marketing goals.
          </Section42Info>
        </Section42>
      </Section4>
      <Section5>
        <Section51Container>We are Start-up Strategists</Section51Container>
        <Section51Container>We are Digital Transformers</Section51Container>
        <Section51Container>We are Inventive Thinkers</Section51Container>
        <Section51Container>
          We are Passionate Growth Hackers
        </Section51Container>
        <Section51Container>
          We are Compannions of Brands's Success
        </Section51Container>
        <Section51Container>
          We are Tech-enabled Marketing Consultants
        </Section51Container>
      </Section5>
      <ClickableButtonContainer>
        <ClickableButton>GET A FREE PROPOSAL</ClickableButton>
      </ClickableButtonContainer>
    </>
  );
};

export default TopSection;

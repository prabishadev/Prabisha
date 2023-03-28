import {
  WhoAreWeHead,
  AboutUsBanner,
  ADContainer,
  AboutDescriptionContent1,
  AboutDescriptionContent2,
  AboutDescriptionSubSection,
  AboutDescriptionImage,
  AboutDescriptionSpan,
} from "./ADStyledComponents";

const AboutDescription = () => (
  <>
  <AboutUsBanner>ABOUT US</AboutUsBanner>
  <ADContainer>
    <WhoAreWeHead>WHO ARE WE?</WhoAreWeHead>
    <AboutDescriptionContent1>
      Founded in 2018, Prabisha Consulting is the 360
      <AboutDescriptionSpan>Digital marketing</AboutDescriptionSpan> & IT
      solution provider that nourishes hundreds of brands with comprehensive
      marketing strategies. We are digital natives and tech-enabled specialists
      who help you spread and capture your brand's digital landscape. As a
      cutting-edge technology company, we desire to work with all kinds of
      businesses & complex projects- big or small. Our unrivalled skills, deep
      understanding of the industry, and talented team will definitely impress
      you. Prabisha's primary goal is to deliver profitable & user-friendly
      digital solutions to its clients within their budget.
    </AboutDescriptionContent1>
    <AboutDescriptionContent2>
      <AboutDescriptionSubSection>
        <AboutDescriptionContent1>
          <AboutDescriptionSpan>Prabisha Consulting</AboutDescriptionSpan> is
          dedicated to helping businesses grow quickly and efficiently across
          many industries, including finance, IT, education, healthcare,
          pharmaceuticals, jewellery, manufacturing, hospitality, and more. We
          have served over 300+ clients and industry professionals from around
          the globe and are committed to providing the best possible service.
        </AboutDescriptionContent1>
      </AboutDescriptionSubSection>
      <AboutDescriptionSubSection>
        <AboutDescriptionImage
          src="https://www.prabisha.co.uk/wp-content/uploads/2022/09/PC-Logo-NEW-for-Website-Page-PNG-1-300x140.png"
          alt="prabishait"
        />
      </AboutDescriptionSubSection>
    </AboutDescriptionContent2>
  </ADContainer>
  </>
);

export default AboutDescription;

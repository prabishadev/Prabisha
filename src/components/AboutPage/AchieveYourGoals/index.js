import {
  AYGContainer,
  AYGLeftContainer,WhatWeDoHead,
  AYGDescription,
  AYGRightContainer,AYGCard,AYGTitle,AYGForm,AYGGroup,AYGLabel,AYGInput,AYGSelect,AYGOption,AYGButton
} from "./AYGStyledComponents";

const AchieveYourGoals = () => (
  <AYGContainer>
    <AYGLeftContainer>
      <WhatWeDoHead>WHAT WE DO?</WhatWeDoHead>
      <AYGTitle>
        We will help you achieve your goals and will be honest about the process
      </AYGTitle>
      <AYGDescription>
        Every brand that comes to us is different, and we treat them each as an
        individual case. We take the time to get to know their business inside
        and out before developing personalised solutions to help their progress.
      </AYGDescription>
      <AYGTitle>
        Quick Response | <span>24/7</span> |
        Result Driven |
        <span> Customer Satisfaction </span>
      </AYGTitle>
      <AYGDescription>
        Our team comprises experts from all different walks of life, so we are
        able to provide a unique and well-rounded perspective for each client.
        Our team at Prabisha Consulting is equipped with multilingual
        capabilities, enabling us to meet the requirements of various
        geographies and markets. This makes us the perfect choice for businesses
        looking to expand their reach to new markets and need a team who can
        communicate effectively with their target audience.
      </AYGDescription>
    </AYGLeftContainer>
    <AYGRightContainer>
    <AYGCard>
      <AYGTitle>Any Questions? Reach out to us now!</AYGTitle>
      <AYGForm>
          <AYGGroup>
            <AYGInput placeholder="" type="text" required />
            <AYGLabel htmlFor="name">Name</AYGLabel>
          </AYGGroup>
          <AYGGroup>
            <AYGInput placeholder="" type="email" id="email" name="email" required />
            <AYGLabel htmlFor="email">Email</AYGLabel>
          </AYGGroup>
          <AYGGroup>
            <AYGInput placeholder="" type="text" id="mobile" name="mobile" required />
            <AYGLabel htmlFor="mobile">Mobile</AYGLabel>
          </AYGGroup>
          <AYGGroup>
          <AYGLabel htmlFor="email">Select</AYGLabel>
          <AYGSelect name="services" id="services">
          <AYGOption value="none" selected disabled hidden>Services</AYGOption>
            <AYGOption value="dm">Digital Marketing</AYGOption>
            <AYGOption value="wd">Website Development</AYGOption>
            <AYGOption value="seo">SEO</AYGOption>
            <AYGOption value="gd">Graphic Design</AYGOption>
          </AYGSelect>
          </AYGGroup>
          <AYGButton type="submit">Submit</AYGButton>
      </AYGForm>
    </AYGCard>

    </AYGRightContainer>
  </AYGContainer>
);

export default AchieveYourGoals;

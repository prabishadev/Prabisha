import MainHeader from "../../MainHeader";
import {
  Section2M,
  Section21M,
  Section21M1,
  Section21M1Info,
  Section21M1Button,
  Section21M2,
  IconContainer,
  Section21M3,
  ReachUs,
  Text,
  Section21M31,
  Section3M,
  Section31M,
  Section32M,
  Image,
  ContactForm,
  Input,
  Select,
  Option,
  Button,
  Text1,
  Text2,
  Section4M,
  Section41M,
  Section41M1,
  Section42M,
  Image1,
  Section43M,
  Iframe,
  Phone,
  Mail,
  Span,
  Branch,
  Location,
  Section5M,
  Section51M,
  Section52M,
  Image2,
  Section53M,
  AnchorTag,
  ImageA,
} from "./ContactSectionStyledComponents";

const ContactSection = () => {
  return (
    <>
      <MainHeader/>
      <Section2M>
        <Section21M>
          <Section21M1>
            <Section21M1Info>
              Schedule a free 3o
              <br /> minutes discovery call
            </Section21M1Info>
            <AnchorTag href="https://calendly.com/prabishadev/30min">
              <Section21M1Button>VIDEO CALL</Section21M1Button>
            </AnchorTag>
          </Section21M1>
          <Section21M2>
            <ImageA
              src="https://www.prabisha.co.uk/wp-content/uploads/2022/09/websie-small-image.jpg"
              alt=""
            />
          </Section21M2>
          <Section21M3>
            <ReachUs>
              <Span>__ </Span>Reach Us At
            </ReachUs>
            <Section21M31>
              <IconContainer>
                <Phone />
              </IconContainer>
              <Text>+44(0)7867090363</Text>
            </Section21M31>
            <Section21M31>
              <IconContainer>
                <Mail />
              </IconContainer>
              <Text>care@prabisha.co.uk</Text>
            </Section21M31>
          </Section21M3>
        </Section21M>
      </Section2M>
      <Section3M>
        <Section31M>
          <Image
            src="https://www.prabisha.co.uk/wp-content/uploads/2022/09/mobile-phone.jpg"
            alt="mobile-image"
          />
        </Section31M>
        <Section32M>
          <Text1>Get In Touch</Text1>
          <Text2>
            Any Questions?
            <br />
            Reach out to us now!
          </Text2>
          <ContactForm type="submit">
            <Input type="text" placeholder="Name" />
            <Input type="email" placeholder="Email" />
            <Input type="number" placeholder="Mobile" />
            <Select placeholder="Service">
              <Option>Digital Marketing</Option>
              <Option>Website Development</Option>
              <Option>SEO</Option>
              <Option>Graphics Design</Option>
            </Select>
            <Button>SUBMIT</Button>
          </ContactForm>
        </Section32M>
      </Section3M>
      <Section4M>
        <Section41M>
          <Branch>
            <Span>-</Span>UK Office
          </Branch>
          <Section41M1>
            <Section21M31>
              <IconContainer>
                <Phone />
              </IconContainer>
              <Text>
                <sup>+</sup>44(0)7867090363
              </Text>
            </Section21M31>
            <Section21M31>
              <IconContainer>
                <Mail />
              </IconContainer>
              <Text>care@prabisha.co.uk</Text>
            </Section21M31>
            <Section21M31>
              <IconContainer>
                <Location />
              </IconContainer>
              <Text>
                71-75 Shelton st., Covent Garden,
                <br /> London,UK
              </Text>
            </Section21M31>
          </Section41M1>
        </Section41M>
        <Section42M>
          <Image1
            src="https://www.prabisha.co.uk/wp-content/uploads/2022/09/london-city.jpg"
            alt="city"
          />
        </Section42M>
        <Section43M>
          <Iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.907904295127!2d-0.1257350843639308!3d51.514905579636384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604ccaaa0b0b7%3A0xbe144a0754857ae1!2s71-75%20Shelton%20St%2C%20London%20WC2H%209JQ%2C%20UK!5e0!3m2!1sen!2sus!4v1679034738375!5m2!1sen!2sus"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></Iframe>
        </Section43M>
      </Section4M>
      <Section5M>
        <Section51M>
          <Iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d56067.26149271849!2d77.153891!3d28.563641!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1dac25deb0ad%3A0xd4b356901653e060!2sD4%20St%2C%20Block%20D%2C%20Vasant%20Vihar%2C%20New%20Delhi%2C%20Delhi%20110057%2C%20India!5e0!3m2!1sen!2sus!4v1679044505566!5m2!1sen!2sus"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></Iframe>
        </Section51M>
        <Section52M>
          <Image2
            src="https://www.prabisha.co.uk/wp-content/uploads/2022/09/india-gate-i-day-2022-1.jpg"
            alt=""
          />
        </Section52M>
        <Section53M>
          <Branch>
            <Span>__ </Span>india Office
          </Branch>
          <Section41M1>
            <Section21M31>
              <IconContainer>
                <Phone />
              </IconContainer>
              <Text>
                <sup>+</sup>9<sup>1 9599 8264 600</sup>
              </Text>
            </Section21M31>
            <Section21M31>
              <IconContainer>
                <Mail />
              </IconContainer>
              <Text>info@prabisha.com</Text>
            </Section21M31>
            <Section21M31>
              <IconContainer>
                <Location />
              </IconContainer>
              <Text>
                D<sub>4/4029,</sub>Vasant Kunj New Delhi - 110070
              </Text>
            </Section21M31>
          </Section41M1>
        </Section53M>
      </Section5M>
    </>
  );
};

export default ContactSection;
